export const sanitizeTailwindClassnames = (classnames: string): string => {
  if (!classnames) return '';

  const sanitized = classnames.trim().replace(/\s+/g, ' ');
  const uniqueClasses = [...new Set(sanitized.split(' '))];

  return uniqueClasses.join(' ');
};
