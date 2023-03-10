// 1. Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.

const someArr = new Array(10)
  .fill(0)
  .map((num, index, arr) => (index === 0 || index === arr.length - 1 ? (num = 1) : num))
