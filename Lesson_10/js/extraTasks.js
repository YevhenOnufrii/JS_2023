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
const someArr5 = new Array(10).fill(0).reduce((acc, it, i, arr) => {
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
