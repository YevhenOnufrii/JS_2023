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
      res = ' робочим '
      break
    case 6:
    case 7:
      res = ' вихідним '
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

// =================  Задача 5  =================
// ? Створити окремі функції, які переводять:
// ? Сантиметри у дюйми;
// ? Кілограми у фунти;
// ? Кілометри у милі.

function convertingUnits() {
  const centimeters = parseFloat(document.querySelector('.Centimeters_in_inches').value)
  const kilograms = parseFloat(document.querySelector('.Kilograms_to_pounds').value)
  const kilometers = parseFloat(document.querySelector('.Kilometers_in_miles').value)
  // САНТИМЕТРИ У ДЮЙМИ;
  function convertCmToInch() {
    // константа перетворення
    const inchConvСonst = 0.393701
    return arguments[0] * inchConvСonst
  }
  const inches = convertCmToInch(centimeters)
  // КІЛОГРАМИ У ФУНТИ;
  function convertKgToPounds() {
    // константа перетворення
    const poundConvСonst = 2.20462
    return arguments[0] * poundConvСonst
  }
  const pounds = convertKgToPounds(kilograms)
  // КІЛОМЕТРИ У МИЛІ
  function convertKmToMiles() {
    // константа перетворення
    const milesConvСonst = 0.621371
    return arguments[0] * milesConvСonst
  }
  const miles = convertKmToMiles(kilometers)
  // виведення результатів
  document.querySelector('.inches').innerHTML = ` ${centimeters} сантиметрів це ${inches.toFixed(
    2
  )} дюймів`
  document.querySelector('.pounds').innerHTML = ` ${kilograms} кілограм це ${pounds.toFixed(
    2
  )} фунтів`
  document.querySelector('.miles').innerHTML = ` ${kilograms} кілограм це ${miles.toFixed(2)} миль`
}

// =================  Задача 6  =================

// ? Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

function createTable() {
  // дані від користувача
  const rowsNumb = parseInt(document.getElementById('rowsNumb').value)
  const columnsNumb = parseInt(document.getElementById('columnsNumb').value)
  const unitText = document.getElementById('unit_text').value
  // налаштування майбутньої таблиці
  const table = document.querySelector('.table_task6')
  table.classList.add('table_border')
  const tableOut = document.getElementById('tbody_task6')
  tableOut.innerHTML = ``
  // зовнішній цикл створює рядки, внутрішній клітинки + текст
  for (let i = 0; i < rowsNumb; i++) {
    const tr = document.createElement('tr')
    tableOut.appendChild(tr)
    for (let j = 0; j < columnsNumb; j++) {
      const td = document.createElement('td')
      td.textContent = `${unitText}`
      tr.appendChild(td)
    }
  }
}

// =================  Задача 7  =================
// ? Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

function getRandomImg() {
  const pic1 = './img/pic1.webp'
  const pic2 = './img/pic2.webp'
  const pic3 = './img/pic3.webp'
  const pic4 = './img/pic4.webp'
  // функція для отримання випадкового числа
  function getRandomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function getImagePath() {
    // отримуємо рандомне число від 1 до 4
    const randomNum = getRandomNumb(1, 4)
    switch (randomNum) {
      case 1:
        return arguments[0]
      case 2:
        return arguments[1]
      case 3:
        return arguments[2]
      case 4:
        return arguments[3]
    }
  }
  // отримуємо випадковий шлях до картинки
  const imagePath = getImagePath(pic1, pic2, pic3, pic4)
  // вивід результату
  const imgBox = document.querySelector('.result8')
  imgBox.innerHTML = ``
  const img = document.createElement('img')
  img.setAttribute('src', imagePath)
  imgBox.appendChild(img)
}

// =================  Задача 8  =================
// ? Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повинне знаходитись у середині тега a: <a> <img src=”шлях”> </a>

function createBanner() {
  const bannerTittle = document.getElementById('title_text').value
  const bannerLink = document.getElementById('banner_link').value
  const bannerPicture = './img/fenix.webp'

  function makeBanner(title, link, pic) {
    const makeTitle = document.querySelector('.banner_title')
    makeTitle.textContent = ` ${title} `
    const makeLink = document.querySelector('.banner_link')
    makeLink.setAttribute('href', link)
    const makePic = document.querySelector('.banner_image')
    makePic.setAttribute('src', pic)
  }

  const banner = makeBanner(bannerTittle, bannerLink, bannerPicture)
}

// =================  Задача 9  =================
// ? Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.

function countNegativeTemper() {
  let negativeCounter = 0
  let userTemperInput
  do {
    userTemperInput = parseFloat(prompt(' Введіть показники температури:'))
    if (!isFinite(userTemperInput)) userTemperInput = false
    userTemperInput < 0 && negativeCounter++
  } while (userTemperInput !== false)
  document.querySelector('.result10').innerHTML = ` Кількість від’ємних чисел: ${negativeCounter}`
}

// =================  Задача 10  =================

// function
