// 1. Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.

const someArr = new Array(10)
  .fill(0)
  .map((num, index, arr) => (index === 0 || index === arr.length - 1 ? (num = 1) : num))

// 2. Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.

const someArr2 = new Array(10).fill(null).map((numb, i) => (i % 2 ? (numb = 1) : (numb = 0)))
