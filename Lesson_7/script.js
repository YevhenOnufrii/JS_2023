// Homework #7
// =================  Задача 0  =================
// ? Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

function getSeason() {
  const monthNumber = parseInt(document.querySelector('.monthNumber').value)
  let season
  switch (monthNumber) {
    case 3:
    case 4:
    case 5:
      season = ' Весна '
      break
    case 6:
    case 7:
    case 8:
      season = ' Літо '
      break
    case 9:
    case 10:
    case 11:
      season = ' Осінь '
      break
    case 1:
    case 2:
    case 12:
      season = ' Зима '
      break
  }
  // цей вираз для коректного виводу результату
  // щоб не виводився undefined
  season && (document.querySelector('.result1').innerHTML = ` Пора року: ${season}`)
}

// =================  Задача 1  =================
// ? Створити функцію, яка за номером місяця повертає його назву.

function monthName() {
  const monthNumber = parseInt(document.querySelector('.monthName').value)
  let month
  switch (monthNumber) {
    case 1:
      month = 'Січень'
      break
    case 2:
      month = 'Лютий'
      break
    case 3:
      month = 'Березень'
      break
    case 4:
      month = 'Квітень'
      break
    case 5:
      month = 'Травень'
      break
    case 6:
      month = 'Червень'
      break
    case 7:
      month = 'Липень'
      break
    case 8:
      month = 'Серпень'
      break
    case 9:
      month = 'Вересень'
      break
    case 10:
      month = 'Жовтень'
      break
    case 11:
      month = 'Листопад'
      break
    case 12:
      month = 'Грудень'
      break
  }
  // цей вираз для коректного виводу результату
  // щоб не виводився undefined
  month && (document.querySelector('.result2').innerHTML = ` Введене число це: ${month}`)
}

// =================  Задача 2  =================
// ? Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

function isWorkingDay() {
  const dayNumb = parseInt(document.querySelector('.dayNum').value)
  let res
  switch (dayNumb) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      res = ' робочий '
      break
    case 6:
    case 7:
      res = ' вихідний '
      break
  }
  res && (document.querySelector('.result3').innerHTML = ` Вказаний номер дня є ${res}. `)
}

// =================  Задача 3  =================
// ? Створити окремі функції, які для 4 чисел знаходять:
// ? 1)суму;
// ? 2)добуток;
// ? 3)середнє арифметичне;
// ? 4)мінімальне значення.

function mathOperationsWithFourNumbers() {
  // отримую дані від користувача
  const num1 = parseFloat(document.querySelector('.Num_1').value)
  const num2 = parseFloat(document.querySelector('.Num_2').value)
  const num3 = parseFloat(document.querySelector('.Num_3').value)
  const num4 = parseFloat(document.querySelector('.Num_4').value)

  // == СУМА ==
  function getSum() {
    return arguments[0] + arguments[1] + arguments[2] + arguments[3]
  }
  const sum = getSum(num1, num2, num3, num4)

  // == ДОБУТОК ==
  function getMultiple() {
    return arguments[0] * arguments[1] * arguments[2] * arguments[3]
  }
  const mult = getMultiple(num1, num2, num3, num4)

  // == СЕРЕДНЄ АРИФМЕТИЧНЕ ==
  function getAverage() {
    return (arguments[0] + arguments[1] + arguments[2] + arguments[3]) / 4
  }
  const average = getAverage(num1, num2, num3, num4)

  // == МІНІМАЛЬНЕ ЗНАЧЕННЯ ==
  function getMinValue() {
    let minVal = Infinity
    for (let i = 0; i < 4; i++) {
      if (arguments[i] < minVal) minVal = arguments[i]
    }
    return minVal
  }
  const minValue = getMinValue(num1, num2, num3, num4)

  // виведення результату
  sum && (document.querySelector('.sum').innerHTML = ` Сума чисел = ${sum.toFixed(2)} `)
  mult && (document.querySelector('.multiple').innerHTML = ` Добуток чисел = ${mult.toFixed(2)} `)
  average &&
    (document.querySelector('.average').innerHTML = ` Середнє арифметичне = ${average.toFixed(2)} `)
  minValue &&
    (document.querySelector('.minValue').innerHTML = ` Мінімальне значення = ${minValue} `)
}

// =================  Задача 4  =================
// ? Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

function mathOperationsWithThreeNumbers() {
  // отримую дані від користувача
  const num1 = parseFloat(document.querySelector('.Num_1_4').value)
  const num2 = parseFloat(document.querySelector('.Num_2_4').value)
  const num3 = parseFloat(document.querySelector('.Num_3_4').value)
  // ===== кількість парних =====
  function countEvenNumbers() {
    let evenCount = 0
    for (let i = 0; i < 3; i++) {
      // якщо вираз зліва true то збільшуємо каунтер
      arguments[i] % 2 === 0 && evenCount++
    }
    return evenCount
  }
  const evenCounter = countEvenNumbers(num1, num2, num3)
  // ===== кількість додатних =====
  function countPositiveNumbers() {
    let positiveCount = 0
    for (let i = 0; i < 3; i++) {
      // якщо вираз зліва true то збільшуємо каунтер
      arguments[i] > 0 && positiveCount++
    }
    return positiveCount
  }
  const positiveNumbCount = countPositiveNumbers(num1, num2, num3)
  // ===== кількість більших за 100 =====
  function getNumbersOver100() {
    let counter = 0
    for (let i = 0; i < 3; i++)
      // якщо вираз зліва true то збільшуємо каунтер
      arguments[i] > 100 && counter++
    return counter
  }
  const NumbersOver100 = getNumbersOver100(num1, num2, num3)

  // виводимо результати
  document.querySelector('.evenCounter').innerHTML = ` Кількість парних = ${evenCounter} `

  document.querySelector('.positiveCount').innerHTML = ` Кількість додатних = ${positiveNumbCount} `

  document.querySelector(
    '.NumbersOver100'
  ).innerHTML = ` Кількість більших за 100 = ${NumbersOver100} `
}
