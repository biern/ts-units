import * as R from 'ramda';


const max = 7;

const range = Array.from(new Array(max * 2 + 1), (x, i) => i - max);

const sums = range
  .map((i) => ({
    i,
    values: range.map((j) => {
      const sum = i + j;
      if (sum > max || sum < -max) {
        return 'out-of-range';
      } else {
        return [j, sum];
      }
    }).filter((i) => i !== 'out-of-range') as Array<[number, number]>
  }))


const muls = range
  .map((i) => ({
    i,
    values: range.map((j) => {
      const result = i * j;
      if (result > max || result < -max) {
        return 'out-of-range';
      } else {
        return [j, result];
      }
    }).filter((i) => i !== 'out-of-range') as Array<[number, number]>
  }))



const outOfBounds = `'out-of-bounds'`;


const buildAddDefinition = (
  config: { leftArgName: string; rightArgName: string },
  sums: Array<{ i: number, values: Array<[number, number]>}>,
): string => {
  return `export type Add<${config.leftArgName}, ${config.rightArgName}> =\n  `
    + sums
    .map(({ i, values }) => {
      const additions = values
        .map(([j, sum]) => `${config.rightArgName} extends ${j} ? ${sum}`)
        .join('\n    : ')
        + `\n    : ${outOfBounds}`;

      return `${config.leftArgName} extends ${i} ? (\n    ${additions}\n  )`;
    })
    .join('\n  : ')
    + `\n  : ${outOfBounds};\n\n`;
}


const buildNegateDefinition = (config: { argName: string }) => {
  return `export type Negate<${config.argName}> =\n  `
    + range
    .map((i) => `${config.argName} extends ${i} ? ${i * -1}`)
    .join('\n  :  ')
    + `\n  : ${outOfBounds} ;\n\n`;
}


const buildSubDefinition = (config: { leftArgName: string, rightArgName: string }) => {
  return `export type Sub<${config.leftArgName}, ${config.rightArgName}> = Add<${config.leftArgName}, Negate<${config.rightArgName}>>;\n\n`;
}

const buildMulDefinition = (
  config: { leftArgName: string; rightArgName: string },
  muls: Array<{ i: number, values: Array<[number, number]>}>,
): string => {
  return `export type MulN<${config.leftArgName}, ${config.rightArgName}> =\n  `
    + muls
    .map(({ i, values }) => {
      const multiplications = values
        .map(([j, mul]) => `${config.rightArgName} extends ${j} ? ${mul}`)
        .join('\n    : ')
        + `\n    : ${outOfBounds}`;

      return `${config.leftArgName} extends ${i} ? (\n    ${multiplications}\n  )`;
    })
    .join('\n  : ')
    + `\n  : ${outOfBounds};\n\n`;
}


const buildNumbersDefinition = () =>
  `export type Numbers =
  ${range.join(' | ')} | ${outOfBounds};\n\n`;


const leftArgName = 'A';
const rightArgName = 'B';
const argName = 'A';

console.log(
  buildNumbersDefinition()
  + buildNegateDefinition({ argName })
  + buildAddDefinition({ leftArgName, rightArgName }, sums)
    + buildSubDefinition({ leftArgName, rightArgName })
    + buildMulDefinition({ leftArgName, rightArgName }, muls)
);
