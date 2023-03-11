// 1. Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.
const someArr = new Array(10)
  .fill(0)
  .map((num, index, arr) => (index === 0 || index === arr.length - 1 ? (num = 1) : num))

// 2. Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.
const someArr2 = new Array(10).fill(null).map((numb, i) => (i % 2 ? (numb = 1) : (numb = 0)))

// 3. Заполнить массив последовательными нечетными числами, начиная с единицы.

const someArr3 = new Array(10).fill(null).reduce((acc, num, i, arr) => {
  if (i % 2 === 0) num = i + 1
  else num = i
  if (num <= acc[i - 1]) num += acc[i - 1] - num + 2
  return [...acc, num]
}, [])

// 4 Сформировать массив из элементов арифметической прогрессии с заданным
// первым элементом x и разностью d.
// Арифметична прогресія — числова послідовність a1, a2, a3, ..., в якій кожен член, починаючи з другого, дорівнює сумі попереднього члена і деякого сталого числа d, яке називається кроком або різницею арифметичної прогресії.

const someArr4 = new Array(10).fill(0)
let x = 4
let d = 4
const result = someArr4.reduce((acc, it, i, arr) => {
  if (i === 0) {
    it = x
    acc.push(it)
  }
  if (typeof acc[i - 1] !== 'undefined') {
    it = acc[i - 1] + d
    acc.push(it)
  }
  return acc
}, [])

// 5. Сформировать возрастающий массив из четных чисел.
const someArr5 = new Array(10).fill(0).reduce((acc, it, i) => {
  if (i === 0) {
    it += 2
    acc.push(it)
  }
  if (it <= acc[i - 1]) {
    it += acc[i - 1] + 2
    acc.push(it)
  }
  return acc
}, [])

// 6. Сформировать убывающий массив из чисел, которые делятся на 3.
const N_6 = 100
const someArr6 = new Array(Math.floor(N_6 / 3))
  .fill(0)
  .reduce((acc, it, i, arr) => {
    if (i === 0) {
      it = 3
      return [...acc, it]
    }
    if (it <= acc[i - 1]) {
      it += acc[i - 1] + 3
      return [...acc, it]
    }
  }, [])
  .reverse()

// const someArr6 = []
// for (let i = 100; i !== 0; i--) {
//   if (i % 3 === 0) someArr6.push(i)
// }

// 7. Создать массив из n первых чисел Фибоначчи.
const n = 17
const someArray7 = new Array(n).fill(0).reduce((acc, it, i, arr) => {
  if (i < 2) {
    it = i
    acc = [...acc, it]
    return acc
  }
  it = acc[i - 2] + acc[i - 1]
  acc = [...acc, it]
  return acc
}, [])

// 8. Заполнить массив заданной длины различными простыми числами. Натуральное число, большее единицы, называется простым, если оно делится только на себя и на единицу.

const n_8 = 80 // числа до n_8
const someArr8 = new Array(n_8).fill(0).reduce((acc, __, i) => {
  if (i > 1) {
    let counter = 0
    for (let j = 1; j <= i; j++) {
      i % j === 0 && counter++
    }
    if (counter === 2) {
      acc = [...acc, i]
    }
  }
  return acc
}, [])

// console.log('🚀 ~ file: extraTasks.js:87 ~ someArr8 ~ someArr8:', someArr8)
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71

// 12. Создать массив, который одинаково читается как слева направо, так и справа налево.

const someArr12 = new Array(10).fill(0).reduce((acc, it, i, arr) => {
  if (arr.length % 2 === 0) {
    if (i <= Math.floor(arr.length / 2) - 1) {
      acc[i] = i
      acc[arr.length - (1 + i)] = i
    }
  } else {
    if (i <= Math.floor(arr.length / 2)) {
      acc[i] = i
      acc[arr.length - (1 + i)] = i
    }
  }
  return acc
}, [])
console.log('someArr12 ~ someArr12:', someArr12)
