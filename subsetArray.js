class Solution {
  isSubset(a1, a2, n, m) {
    let count = 0;
    for (let i = 0; i < m; i++) {
      for (let y = 0; y < n; y++) {
        if (a2[i] == a1[y]) {
          count++;
        }
      }
    }

    if (count == m) {
      console.log('Yes');
      return 'Yes';
    } else {
      console.log('No');
      return 'No';
    }
  }
}

const subSet = new Solution();

subSet.isSubset([11, 2, 3, 4, 5], [11, 3, 4], 5, 3);
