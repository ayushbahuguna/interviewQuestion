class BinarySearch {
  binarysearch(arr, n, k) {
    let start = 0;
    let end = n - 1;
    let mid;

    while (start <= end) {
      mid = start + Math.floor((end - start) / 2);
      if (arr[mid] == k) {
        console.log(mid);
        return mid;
      } else if (k > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }
}

const search = new BinarySearch();
search.binarysearch([1, 2, 3, 4, 5], 5, 5);
