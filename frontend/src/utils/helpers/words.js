export const words = (words = 10) => {};
export const limit = (string, letters = 10) => {
  if (!string) return string;

  const new_string = string.substring(0, letters).trim();

  return new_string + (new_string == string ? "" : "...");
};
