//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeroes = (arr) => {
  let counter = 0;
  let newArr = arr.filter((item) => {
      return item !== 0;
    })
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      counter++;
    }
  }
  for (var i = 0; i < counter; i++) {
    newArr.push(0)
  }
    return newArr;
  }

export default moveZeroes;
