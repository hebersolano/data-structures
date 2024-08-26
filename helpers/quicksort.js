function swap(arr, a, b) {
  let temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}

let i;
let j;

function partition(items, left, right) {
  let indexPivot = Math.floor((right + left) / 2);
  let pivot = items[indexPivot][1];
  i = left;
  j = right;

  while (i <= j) {
    while (items[i][1] < pivot) {
      i++;
    }

    while (items[j][1] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      // more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      // more elements on the right side
      quickSort(items, index, right);
    }
  }

  return items;
}

export default function sort(array) {
  if (array.length <= 1) return array;

  let res = quickSort(array, 0, array.length - 1);
  return res;
}
