export const getTransition = (attribute: unknown): string =>
  typeof attribute === "string" ? attribute : ""
