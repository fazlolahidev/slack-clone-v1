export const sortByDateAsc = (arr) => {
  return arr.sort((a, b) => {
    return new Date(a.fullDate) - new Date(b.fullDate);
  });
};
