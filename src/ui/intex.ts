export enum Breakpoints {
  MD = 768,
  LG = 1024,
}

export const Media = {
  MD: `@media screen and (max-width: ${Breakpoints.MD}px)`,
  LG: `@media screen and (max-width: ${Breakpoints.LG}px)`,
};
