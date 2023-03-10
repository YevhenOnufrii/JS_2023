// Homework 10 lesson10
//Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
/*       1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
      2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
      3)Сформувати список з тих цін, які більші за попереднє значення
      4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
      5)Підрахувати кількість змін цін
      6)Визначити, чи є ціна, що менше 1000
      7)Визначати, чи усі ціни більше за 1000
      8)Підрахувати кількість цін, що більше за 1000
      9)Підрахувати суму цін, що більше за 1000
      10)Знайти першу ціну, що більше за 1000
      11)Знайти індекс першої ціни, що більше за 1000
      12)Знайти останню ціну, що більше за 1000
      13)Знайти індекс останньої ціни, що більше за 1000 */
function getRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function megaTask() {
  const testArr = new Array(15).fill(0).map(it => getRandomNumb(1, 10000))
  console.log('🚀 ~ file: task.js:21 ~ megaTask ~ testArr:', testArr)

  // 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
  const moreThan1000 = testArr.filter(it => it > 1000)

  // 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
  const containsIndexesThatGreaterThan1000 = testArr.reduce((acc, price, index) => {
    if (price > 1000) {
      return [...acc, index]
    }
    return acc
  }, [])

  //  3)Сформувати список з тих цін, які більші за попереднє значення
  const biggerThanPrevious = testArr.reduce((acc, it, index, arr) => {
    if (typeof arr[index - 1] !== 'undefined') {
      if (it > arr[index - 1]) {
        return [...acc, it]
      }
    }
    return acc
  }, [])

  // 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
  const maxVal = testArr.reduce((acc, item) => (acc > item ? acc : item))
  const pricesPercentageOfMostExpensive = testArr.map(it => Math.round((it * 100) / maxVal))

  // 5)Підрахувати кількість змін цін
  const countPriceChanges = testArr.reduce((acc, item, index, arr) => {
    const nextValue = arr[index + 1]
    if (typeof nextValue !== 'undefined') {
      if (item !== nextValue) acc += 1
      return acc
    }
    return acc
  }, 0)

  // 6)Визначити, чи є ціна, що менше 1000
  const pricesLessThan1000 = testArr.filter(it => it < 1000)

  // 7)Визначати, чи усі ціни більше за 1000
  const isEveryPriceBiggerThan1000 = testArr.every(it => it > 1000)

  // 8)Підрахувати кількість цін, що більше за 1000
  const countPricesOverThousand = testArr.reduce((acc, item) => (item > 1000 ? (acc += 1) : acc), 0)

  // 9)Підрахувати суму цін, що більше за 1000
  const sumPricesOver1000 = testArr.reduce((acc, it) => (it > 1000 ? (acc += it) : acc), 0)

  // 10)Знайти першу ціну, що більше за 1000
  const firstPriceBiggerThan1000 = testArr.find(it => it > 1000)

  // 11)Знайти індекс першої ціни, що більше за 1000
  let indexFirstPriceBiggerThan1000 = ''
  testArr.forEach((it, index) => {
    if (!indexFirstPriceBiggerThan1000.length) {
      if (it > 1000) indexFirstPriceBiggerThan1000 += index
    }
  })
}

megaTask()
