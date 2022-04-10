function sortRangesAsc(ranges) {
  const newRanges = [...ranges]

  newRanges.sort((a, b) => {
    const [firstNumberRangeA, secondNumberRangeA] = a;
    const [firstNumberRangeB, secondNumberRangeB] = b;
    if (firstNumberRangeA < firstNumberRangeB)
      return -1;
    if (firstNumberRangeA === firstNumberRangeB && secondNumberRangeA < secondNumberRangeB)
      return -1;

    return 1;
  });

  return newRanges;
}

function mergeConflictsRanges(ranges) {
  const initialValues = [ranges[0]];

  const result = ranges.reduce((previousValue, currentValue) => {
    const firstsPreviousValue = [...previousValue]
    const lastRange = firstsPreviousValue.pop();

    if (currentValue[0] <= lastRange[1]) {
      // if second number of last range is between the two numbers of current value
      if (currentValue[1] >= lastRange[1]) {
        // so change the second number of last value
        return [
          ...firstsPreviousValue,
          [lastRange[0], currentValue[1]]
        ];
      }

      return previousValue;
    }

    // if the previous value is lower than current, so push the current value to the list
    return [...previousValue, currentValue];
  }, initialValues);

  return result;
}

function foo(ranges) {
  // In first, we will sort the ranges in ascending, before merging each conflict ranges
  const sortedRanges = sortRangesAsc(ranges);
  const mergedRanges = mergeConflictsRanges(sortedRanges);

  return mergedRanges;
}

console.log(foo([[0, 3], [6, 10]]))	// Expected output [[0, 3], [6, 10]]
console.log(foo([[0, 5], [3, 10]]))	// Expected output [[0, 10]]
console.log(foo([[0, 5], [2, 4]]))	// Expected output [[0, 5]]
console.log(foo([[7, 8], [3, 6], [2, 4]]))	// Expected output [[2, 6], [7, 8]]
console.log(foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]))	// Expected output [[1, 10], [15, 20]]