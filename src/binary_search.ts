// Simple version of binarySearch
type SearchResultType = number | null;
const binarySearch = (sortedListOfNumbers: Array<number>, item: number): SearchResultType => {
  let lowIndex = 0;
  let highIndex: number = sortedListOfNumbers.length - 1;
  while (lowIndex <= highIndex) {
    const midIndex: number = Math.floor((lowIndex + highIndex) / 2);
    const guess: number = sortedListOfNumbers[midIndex];
    if (guess === item) {
      return midIndex;
    }
    if (guess > item) {
      highIndex = midIndex - 1;
    } else {
      lowIndex = midIndex + 1;
    }
  }
  return null;
};

// Recursion version of binarySearch
const binarySearchRecursion = (
  sortedListOfNumbers: Array<number>,
  item: number,
  lowIndex = 0,
  highIndex: number = sortedListOfNumbers.length - 1,
): SearchResultType => {
  const midIndex: number = Math.floor((lowIndex + highIndex) / 2);
  const guess: number = sortedListOfNumbers[midIndex];
  if (guess === item) {
    return midIndex;
  }
  const newHighIndex = guess > item ? midIndex - 1 : highIndex;
  const newLowIndex = guess < item ? midIndex + 1 : lowIndex;
  if (lowIndex <= highIndex) {
    return binarySearchRecursion(sortedListOfNumbers, item, newLowIndex, newHighIndex);
  }
  return null;
};

export { binarySearchRecursion };

export default binarySearch;
