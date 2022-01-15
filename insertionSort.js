//Insertion sort

//use nested loops
//assumes a sorted list of length 1
//compares the next item, and inserts it before
//or after depending on the comparison

function insertionSort(array) {
  let i;
  let j;

  //start on second item or array
  for (i = 1; i < array.length; i++) {
    //start on first item or array
    for (j = 0; j < i; j++) {
        console.log(array.join(' '));
      if (array[i] < array[j]) {
        //remove item at i
        const [item] = array.splice(i, 1);
        //add item at j
        array.splice(j, 0, item);
      }
    }
  }
  console.log(array.join(' '));
  return array;
}

const numbers =[10,5,6,3,2,8,9,4,7,1]
insertionSort(numbers)
