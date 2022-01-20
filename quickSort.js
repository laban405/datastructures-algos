//Quick sort

//Recursive
// We receive an array and pick a pivot
//Items are compared to the pivot
//If an item is less than pivot, put it in left array,
//  else into the right array
// Return array resulting from quick sort called on the left, the pivot
// and quicksort on the array

function quickSort(array) {
    console.log(array.join(' '))
  if (array.length < 2) {
    return array;
  }

  const pivotIndex = array.length - 1;
  const pivot = array[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < pivotIndex; i++) {
    const currentItem = array[i];

    currentItem < pivot ? left.push(currentItem) : right.push(currentItem);
  }

  const result =[...quickSort(left),pivot, ...quickSort(right)];
  console.log(result.join(' '))
  return result
}

const numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];
quickSort(numbers)
