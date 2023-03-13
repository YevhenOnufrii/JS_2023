function getRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// ======== 1. Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.
const someArr = new Array(10)
  .fill(0)
  .map((num, index, arr) => (index === 0 || index === arr.length - 1 ? (num = 1) : num))

// ======== 2. Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.
const someArr2 = new Array(10).fill(null).map((numb, i) => (i % 2 ? (numb = 1) : (numb = 0)))

// ======== 3. Заполнить массив последовательными нечетными числами, начиная с единицы.

const someArr3 = new Array(10).fill(null).reduce((acc, num, i, arr) => {
  if (i % 2 === 0) num = i + 1
  else num = i
  if (num <= acc[i - 1]) num += acc[i - 1] - num + 2
  return [...acc, num]
}, [])

// ======== 4 Сформировать массив из элементов арифметической прогрессии с заданным
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

// ======== 5. Сформировать возрастающий массив из четных чисел.
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

// ======== 6. Сформировать убывающий массив из чисел, которые делятся на 3.
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

// ======== 7. Создать массив из n первых чисел Фибоначчи.
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

// ======== 8. Заполнить массив заданной длины различными простыми числами. Натуральное число, большее единицы, называется простым, если оно делится только на себя и на единицу.

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

// ======== 9. Создать массив, каждый элемент которого равен квадрату своего номера.

const someArr9 = new Array(10).fill(1).map((it, i) => (it = i ** 2))
// console.log('🚀 ~ file: extraTasks.js:106 ~ someArr9:', someArr9)

// ======== 10. Создать массив, на четных местах в котором стоят единицы, а на нечетных местах - числа, равные остатку от деления своего номера на 5.

const someArr10 = new Array(20).fill(0).map((it, i) => (i % 2 === 0 ? 1 : i % 5))

// ======== 11. Создать массив, состоящий из троек подряд идущих одинаковых элементов.

const someArr11 = new Array(20).fill(null).reduce((acc, it, i) => {
  if (i % 3 === 0) {
    it = i
    acc = [...acc, it]
  } else acc = [...acc, acc[acc.length - 1]]
  return acc
}, [])

// ======== 12. Создать массив, который одинаково читается как слева направо, так и справа налево.

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
// console.log('someArr12 ~ someArr12:', someArr12)

// ======== 13. Сформировать массив из случайных чисел, в которых ровно две единицы, стоящие на случайных позициях.

const someArr13 = new Array(10).fill(null).reduce(
  (acc, _, i, arr) => {
    let randomNum = getRandomNumb(1, 10)
    if (randomNum === 1) acc.num1Counter += 1
    while (randomNum === 1 && acc.num1Counter > 2) {
      randomNum = getRandomNumb(1, 20)
    }
    acc.result = [...acc.result, randomNum]
    return acc
  },
  {
    num1Counter: 0,
    result: [],
  }
)
// console.log('🚀 ~ file: extraTasks.js:161 ~ someArr13:', someArr13)

// ======== 14.Заполните массив случайным образом нулями и единицами так, чтобы количество единиц было больше количества нулей.
let C = 20
const someArr14 = new Array(C).fill().reduce(
  (acc, _it, _i, _arr) => {
    const randomIndex = getRandomNumb(0, C)
    let randomNum = getRandomNumb(0, 1)
    if (randomNum === 1) acc.count1 += 1
    if (randomNum === 0) acc.count0 += 1
    // console.log(acc.count0, acc.count1 - 1)
    if (acc.count1 >= acc.count0) {
      randomNum = 1
    }
    acc.result = [...acc.result, (acc.result[randomIndex] = randomNum)]
    return acc
  },
  {
    count0: 0,
    count1: 0,
    result: [],
  }
)
// console.log('🚀 ~ file: extraTasks.js:187 ~ someArr14:', someArr14)

// ======== 15. Сформировать массив из случайных целых чисел от 0 до 9 , в котором единиц от 3 до 5 и двоек больше троек.

const someArr15 = new Array(15).fill().reduce(
  (acc, _it, i, arr) => {
    let randomNum = getRandomNumb(0, 9)

    if (i > arr.length / 2 && acc.counter1 < 5) {
      randomNum = 1
    }
    if (acc.counter3 >= acc.counter2) {
      randomNum = 2
    }
    if (randomNum === 1) acc.counter1++
    else if (randomNum === 2) acc.counter2++
    else if (randomNum === 3) acc.counter3++

    acc.result = [...acc.result, randomNum]
    return acc
  },
  {
    counter1: 0,
    counter2: 0,
    counter3: 0,
    result: [],
  }
)
// console.log('🚀 ~ file: extraTasks.js:207 ~ someArr15:', someArr15)

// =======================  Анализ... =======================
// ========== 1. Анализ...
// Найти количество чисел в массиве, которые делятся на 3, но не делятся на 7.
const someArr_1 = new Array(100).fill().reduce((acc, _, i) => {
  if (i > 0) {
    if (i % 3 === 0 && i % 7 !== 0) {
      acc = [...acc, i]
    }
  }
  return acc
}, [])
// console.log('🚀 ~ file: extraTasks.js:218 ~ constsomeArr_1=newArray ~ someArr_1:', someArr_1)

// ========== 2. Анализ...
// Найдите сумму и произведение элементов массива

const testArr_2 = [2, 5, 6, 9, 2, 2, 6, 8, 0, 2, 5, 7, 9]
const someArr2_1 = testArr_2.reduce(
  (acc, it, _, arr) => {
    acc.sum += it
    it !== 0 && (acc.mult *= it)
    return acc
  },
  {
    mult: 1,
    sum: 0,
  }
)
// console.log('🚀 ~ file: extraTasks.js:241 ~ someArr2_1:', someArr2_1)

// ===================================================================
// ========== 6 Анализ...
// Найдите сумму чисел массива, которые расположены до первого четного
// числа массива. Если четных чисел в массиве нет, то найти сумму всех
// чисел за исключением крайних.
// ===================================================================

const testArr_6 = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]

let someArr_6 = [...testArr_6]
someArr_6 = someArr_6.reduce(
  (acc, it, i, arr) => {
    if (!acc.isFirstOddNum) {
      if (it % 2 !== 0) {
        acc.sum += it
      } else acc.isFirstOddNum = true
    }
    if (i === arr.length - 1 && !acc.isFirstOddNum) {
      acc.sum -= arr[0] + arr[arr.length - 1]
    }
    return acc
  },
  {
    isFirstOddNum: false,
    sum: 0,
  }
)
// console.log('🚀 ~ file: extraTasks.js:267 ~ someArr_6:', someArr_6)

// ===================================================================
// 13. Найдите сумму наибольшего и наименьшего элементов массива.
// ===================================================================
const testArr_13 = [2, 4, 6, 3, 7, 5, 0, 3, 9, 1]

const someArr_13 = testArr_13.reduce(
  (acc, it) => {
    if (it > acc.max) acc.max = it
    if (it < acc.min) acc.min = it
    acc.sum = acc.max + acc.min
    return acc
  },
  {
    min: Infinity,
    max: -Infinity,
    sum: 0,
  }
)
// console.log('🚀 ~ file: extraTasks.js:289 ~ someArr_13:', someArr_13)

// ===================================================================
//  15. Найдите наименьший четный элемент массива.
// ===================================================================
const testArr_15 = [2, 4, 6, 3, 7, 5, -3, 3, 9, 1]
const someArr_15 = testArr_15.reduce((acc, it) => {
  if (it % 2 !== 0 && it < acc) acc = it
  return acc
}, Infinity)

// ===================================================================
// Дан массив и число p. Найдите два различных числа в массиве, сумма
// которых наиболее близка к p.
// ===================================================================

// ========== 19. Анализ...
//  Дан массив. Найдите три последовательных элемента в массиве, сумма которых максимальна.

const testArr = [2, 5, 6, 9, 2, 100, 6, 8, 0, 2, 5, 7, 9]
const someArr19_1 = testArr.reduce(
  (acc, it, i, arr) => {
    let { max, result } = acc
    let sum = it + arr[i + 1] + arr[i + 2]
    if (sum > max) {
      result.length !== 0 && (acc.result = [])
      acc.max = sum
      acc.result = [...acc.result, it, arr[i + 1], arr[i + 2]]
    }
    return acc
  },
  {
    max: -Infinity,
    result: [],
  }
)

// let max = -Infinity
// const someArr19_1 = testArr.reduce((acc, it, i, arr) => {
//   const currentSum = it + arr[i + 1] + arr[i + 2]
//   if (currentSum > max) {
//     max = currentSum
//     acc.length > 0 && (acc = [])
//     acc = [it, arr[i + 1], arr[i + 2]]
//   }
//   return acc
// }, [])

// console.log(' someArr19_1:', someArr19_1)
