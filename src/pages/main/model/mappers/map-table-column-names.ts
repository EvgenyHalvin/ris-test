export const mapTableColumnNames = (data?: Object[]): string[] => {
  if (!data) {
    return [];
  }
  const item = data[0];
  return Object.keys(item);
};
