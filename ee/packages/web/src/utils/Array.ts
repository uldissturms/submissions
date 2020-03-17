export const wrapInArray = <T extends {}>(x: T | undefined): T[] =>
  x ? [x] : []
