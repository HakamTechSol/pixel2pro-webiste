export const isPakistaniMobileNumber = (value: string): boolean =>
  /^03\d{9}$/.test(value);
