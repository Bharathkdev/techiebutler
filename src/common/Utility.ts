const capitalizeFirstLetter = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);

const truncateWord = (title: string): string =>
  title.length > 50 ? title.substring(0, 50) + '...' : title;

const convertToString = (value: number): string => value.toString();

const getItemLayout = (itemHeight: number) => (_: any, index: number) => ({
  length: itemHeight,
  offset: itemHeight * index,
  index,
});

export default {
  capitalizeFirstLetter,
  truncateWord,
  convertToString,
  getItemLayout,
};
