const getBitsNumber = (number) => {
  return number.toString(2).length;
}

const mystery = (pos) => {
  let minNum = 0, maxNum = 2 ** getBitsNumber(pos) - 1;
  let minIndex = 0, maxIndex = maxNum;
  let currentPos;
  let iterationsCount = 0;
  let lastEdited;

  while (minIndex < maxIndex) {
    iterationsCount++;
    currentPos = Math.ceil((maxIndex + minIndex) / 2);

    if (pos >= currentPos) {
      // движемся враво
      minIndex = currentPos;
      if (iterationsCount % 2 !== 0) {
        minNum = Math.ceil((maxNum + minNum) / 2);
        lastEdited = minNum;
      } else {
        maxNum = Math.ceil((maxNum + minNum) / 2);
        lastEdited = maxNum;
      }
    } else {
      // движемся влево
      maxIndex = currentPos - 1;
      if (iterationsCount % 2 !== 0) {
        maxNum = Math.ceil((maxNum + minNum) / 2);
        lastEdited = maxNum;
      } else {
        minNum = Math.ceil((maxNum + minNum) / 2);
        lastEdited = minNum;
      }
    }
  }

  return minNum;
}

console.log("Hello World");

console.log(0, mystery(0));
console.log(1, mystery(1));
console.log(2, mystery(2));
console.log(3, mystery(3));
console.log(4, mystery(4));
console.log(5, mystery(5));
console.log(6, mystery(6));
console.log(7, mystery(7));
