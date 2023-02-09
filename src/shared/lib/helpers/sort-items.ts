export const sortItems = (data: any, sortBy: string) => {
  return data.sort(function (a: any, b: any) {
    const sortOptionA = a[sortBy];
    const sortOptionB = b[sortBy];
    const isMore = sortOptionA > sortOptionB;
    const isLess = sortOptionA < sortOptionB;

    if (isMore) {
      return 1;
    }

    if (isLess) {
      return -1;
    }

    return 0;
  });
};
