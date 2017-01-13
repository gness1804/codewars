const iqTest = (numbers) => {
  let newArr = [];
  let evenCount = 0;
  let oddCount = 0;
  let splitNums = numbers.split(' ');
  splitNums.forEach((num) => {
    if (parseInt(num, 10) % 2 === 0) {
      newArr.push('even');
      evenCount += 1;
    } else {
      newArr.push('odd');
      oddCount += 1;
    }
  });
  if (evenCount > 1) {
    return newArr.indexOf('odd') + 1;
  } else {
    return newArr.indexOf('even') + 1;
  }
}

export default iqTest;
