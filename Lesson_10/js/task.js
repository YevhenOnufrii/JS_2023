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
// (тобто перше число ніколи не попаде в список так як у нього нема "попереднього" ? так і не отримав відповідь у чаті )
const biggerThanPrevious = testArr.reduce((acc, price, index, arr) => {
  if (price > arr[index - 1]) {
    return [...acc, price]
  }
  return acc
}, [])

// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
const maxPrice = testArr.reduce((maxValue, price) => (maxValue > price ? maxValue : price))
const pricesPercentageOfMostExpensive = testArr.map(it => Math.round((it * 100) / maxPrice))

// 5)Підрахувати кількість змін цін
const countPriceChanges = testArr.reduce((countChanges, price, index, arr) => {
  const nextValue = arr[index + 1]
  if (price !== nextValue) countChanges += 1
  return countChanges
}, 0)

// 6)Визначити, чи є ціна, що менше 1000
const pricesLessThan1000 = testArr.filter(price => price < 1000)

// 7)Визначати, чи усі ціни більше за 1000
const isEveryPriceBiggerThan1000 = testArr.every(price => price > 1000)

// 8)Підрахувати кількість цін, що більше за 1000
const countPricesOverThousand = testArr.reduce(
  (countPrices, price) => (price > 1000 ? (countPrices += 1) : countPrices),
  0
)

// 9)Підрахувати суму цін, що більше за 1000
const sumPricesOver1000 = testArr.reduce(
  (sumPrices, price) => (price > 1000 ? (sumPrices += price) : sumPrices),
  0
)

// 10)Знайти першу ціну, що більше за 1000
// метод find
const firstPriceBiggerThan1000 = testArr.find(price => price > 1000)
// циклом for
// let firstPriceBiggerThan1000 = 0
// for (let i = 0; !firstPriceBiggerThan1000; i++) {
//   if (testArr[i] > 6000) firstPriceBiggerThan1000 += testArr[i]
// }

// 11)Знайти індекс першої ціни, що більше за 1000
// у цій задачі не можна в initial value ставити 0, бо якщо reduce не знайде відповідне число то він поверне 0, що також є індексом масиву. Тому initial value має бути пустим масивом. А далі, перевіривши чи масив не пустий з доп. parseInt витягнути число значення індексу (або з доп. деструктуризації, тощо)

const indexFirstPriceBiggerThan1000 = testArr.reduce((arrWithIndex, price, index) => {
  if (!arrWithIndex.length) {
    if (price > 1000) {
      return [...arrWithIndex, index]
    }
  }
  return arrWithIndex
}, [])

// 12)Знайти останню ціну, що більше за 1000
const lastPriceBiggerThan1000 = testArr.reduceRight((lastPrice, currentPrice) => {
  if (!lastPrice) {
    if (currentPrice > 1000) {
      lastPrice += currentPrice
      return lastPrice
    }
  }
  return lastPrice
}, 0)

// 13)Знайти індекс останньої ціни, що більше за 1000 */
const lastIndexPriceBiggerThan1000 = testArr.reduceRight((lastIndexArr, price, index) => {
  if (!lastIndexArr.length) {
    if (price > 1000) {
      lastIndexArr.push(index)
      return lastIndexArr
    }
  }
  return lastIndexArr
}, [])
