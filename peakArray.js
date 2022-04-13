function peakElement(arr, n) {
  if (n < 1) {
    return 0;
  }
  let maxIndex = 0;
  let maxNumber = arr[0];
  for (let i = 1; i < n; ++i) {
    if (arr[i] > maxNumber) {
      maxIndex = i;
      maxNumber = arr[i];
    }
  }
  console.log(maxIndex);
  console.log(arr[maxIndex]);
  return maxIndex;
}

peakElement([1, 2, 3], 3);
