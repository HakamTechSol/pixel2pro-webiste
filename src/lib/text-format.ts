export const toTitleCase = (value: string): string =>
  value.trim().replace(/\b[a-z]/g, (char) => char.toUpperCase());

export const toTitleCasePhrase = (value: string): string =>
  toTitleCase(
    value
      .trim()
      .replace(/^before course starts?$/i, "before course start")
      .replace(/^start of\s+(.+)$/i, "before $1 start"),
  );