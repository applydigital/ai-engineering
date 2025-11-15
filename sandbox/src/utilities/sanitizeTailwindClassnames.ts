/**
 * Sanitizes CSS class names by removing excess whitespace and duplicates
 * @param classnames - Raw string containing class names, or undefined/null
 * @returns Sanitized class names string with duplicates removed
 */
export const sanitizeTailwindClassnames = (classnames: string): string => {
  if (!classnames) return "";

  // Remove excess whitespace
  const sanitized = classnames.trim().replace(/\s+/g, " ");

  // Remove duplicates while preserving order
  const uniqueClasses = [...new Set(sanitized.split(" "))];

  return uniqueClasses.join(" ");
};
