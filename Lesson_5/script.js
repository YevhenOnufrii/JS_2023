// Homework #5

// ==================== Task 1 ====================

// ? Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.

function markingList() {
  // діапазон для рандома
  const minRandomVal = 1
  const maxRandomVal = 100
  // отримуємо кількість рандомних чисел
  const getRandomNumbersCount = parseInt(document.querySelector('.markingList').value)
  // доступ до тега ol для виведення результату
  const list = document.querySelector('.result1').querySelector('ol')
  list.innerHTML = '' // це костиль, для того, щоб нові елементи списку не додавалися до старих
  // цикл від 0 до кількості рандомних чисел
  for (let i = 0; i < getRandomNumbersCount; i++) {
    // генерція рандомного числа
    const randomNum = minRandomVal + Math.floor(Math.random() * (maxRandomVal - minRandomVal + 1))

    const listItem = document.createElement('li') // створюємо ел li в DOM
    listItem.textContent = randomNum // присвоюємо значення randomNUm
    list.appendChild(listItem) // монтуємо елемент в список
  }
}

// ==================== Task 2 ====================

// ? Задача 2. Створити 10 елементів для введення цін продуктів

function listForEnteringProdPrices() {
  // кількість елементів для введення цін
  const getNumberItems = parseInt(document.querySelector('.getNumberItems').value)
  // для виведення результату
  const listProdPrices = document.querySelector('.result2')
  // це костиль, для того, щоб нові елементи списку не додавалися до старих
  listProdPrices.innerHTML = ``

  for (let i = 1; i <= getNumberItems; i++) {
    //створюємо label
    const inputLabel = document.createElement('label')
    // додаємо текст
    inputLabel.textContent = `Product # ${i}`
    // створюємо input
    const input = document.createElement('input')
    // додаємо атрибут text
    input.setAttribute('type', 'text')
    // монтуємо елементи в DOM
    listProdPrices.appendChild(inputLabel)
    listProdPrices.appendChild(input)
  }
}

// ==================== Task 3 ====================

// ? Задача 3. Вивести таблицю з одним рядком і  7 стовпцями.

function getTableWithSevenColums() {
  const columnsAmount = 7
  // div у який виводиться результат
  let resDiv = document.querySelector('.result3')
  resDiv.innerHTML = ''
  let i = 1
  while (i <= columnsAmount) {
    const tableCol = document.createElement('td')
    tableCol.textContent = `${i}`
    resDiv.appendChild(tableCol)
    i++
  }
}

// ==================== Task 4 ====================

//Задача 4. Вивести таблицю з 3 рядків і 7 стовпців

function getTableWithSevenColumnsThreeRows() {
  // кількість колонок і рядків
  const columnsAmount = 7
  const rowsAmount = 3

  // таблиця для виведення результату
  const resTable = document.querySelector('.result4').querySelector('table')
  // зачистка операційного поля
  resTable.innerHTML = ''

  for (let i = 1; i <= rowsAmount; i++) {
    // створюємо рядок
    const row = document.createElement('tr')
    // додаємо його до таблиці
    resTable.appendChild(row)
    for (let j = 1; j <= columnsAmount; j++) {
      // створюємо ячейку
      const column = document.createElement('td')
      // додаємо текст в ячейку
      column.textContent = `${j}`
      // монтуємо ячейку до рядка
      row.appendChild(column)
    }
  }
}

// ==================== Task 5 ====================

//Задача 5.  Вивести таблицю 3 Х 3

function printTable3x3() {
  const columnsAmount = 3
  const rowsAmount = 3
  // таблиця для виведення результату
  const resTable = document.querySelector('.result5').querySelector('table')
  // зачистка операційного поля
  resTable.innerHTML = ''

  let counter = 1
  for (let i = 0; i < rowsAmount; i++) {
    // створюємо рядок
    const row = document.createElement('tr')
    // додаємо його до таблиці
    resTable.appendChild(row)
    for (let j = 0; j < columnsAmount; j++) {
      // створюємо ячейку
      const column = document.createElement('td')
      // додаємо значення лічильника в ячейку
      column.textContent = `${counter}`
      // монтуємо ячейку до рядка
      row.appendChild(column)
      // збільшуємо лічильник на 1
      counter++
    }
  }
}

// ==================== Task 6 ====================

// Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком

function print3Table3x3() {
  const columnsAmount = 3
  const rowsAmount = 3
  const tableAmount = 3
  // div для виведення результату
  const resDiv = document.querySelector('.result6')
  // зачистка операційного поля
  resDiv.innerHTML = ''

  let counter = 1
  for (let i = 0; i < tableAmount; i++) {
    // створюємо таблицю
    const table = document.createElement('table')
    // монтуємо таблицю
    resDiv.appendChild(table)
    // цикл для створення рядків
    for (let j = 0; j < rowsAmount; j++) {
      // створюємо рядок
      const row = document.createElement('tr')
      // монтуємо рядок
      table.appendChild(row)
      // цикл для створення колонок
      for (let c = 0; c < columnsAmount; c++) {
        const column = document.createElement('td')
        column.textContent = `${counter}`
        row.appendChild(column)
        counter++
      }
    }
  }
}

// ==================== Task 7 ====================

// Вивести на екран N абзаців (N вводиться користувачем) за зразком:

function printParagraphs() {
  // кількість абзаців
  const amountParagraphs = parseInt(document.querySelector('.amountParagraphs').value)
  // для виведення результатів
  const paragraphs = document.querySelector('.result7')
  // зачистка операційного поля
  paragraphs.innerHTML = ''

  for (let i = 1; i <= amountParagraphs; i++) {
    // ======  створюємо ел. h1  ======
    const h1 = document.createElement('h1')
    // ======  додаємо текст в h1  ======
    h1.textContent = ` Заголовок ${i}`
    // ======  монтуємо h1 в результат ======
    paragraphs.appendChild(h1)
    // ======  цикл для розділів і параграфів ======
    for (let j = 1; j <= i; j++) {
      // ======  створюємо тег p ======
      const p = document.createElement('p')
      // ====== додаємо текст ======
      p.textContent = ` Розділ ${i}, параграф ${j}`
      // ====== монтуємо в результат  ======
      paragraphs.appendChild(p)
    }
    // ====== додаємо тег hr в результат  ======
    const hr = document.createElement('hr')
    paragraphs.appendChild(hr)
  }
}

// ==================== Task 8 ====================
// Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).

function guessNumber3Attempts() {
  // кількість спроб робота
  const numberOfAttempts = 3
  // генеруємо рандомне число
  function getRandomNum() {
    const min = 1
    const max = 100
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  // по дефолту юзер не вгадав
  let userAttempt = false
  let i = 1
  while (i <= numberOfAttempts && userAttempt != true) {
    // отримуємо рандомне число
    const randomNum = getRandomNum()
    // true або false від користувача
    userAttempt = confirm(` Спроба №${i} Це число ${randomNum} ?`)
    i++
    // якщо робот вгадав, виводимо alert
    if (userAttempt === true) alert(` Загадане число ${randomNum}`)
  }
  if (!userAttempt) alert(' Цього разу я не вгадав  :(')
}

// ==================== Task 9 ====================

// Задача 9. Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).

function guessNumberGame() {
  // генеруємо рандомне число
  function getRandomNum() {
    const min = 1
    const max = 10
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  // по дефолту юзер не вгадав
  let userAttempt = false
  // лічильник спроб
  let i = 1
  while (userAttempt != true) {
    // отримуємо рандомне число
    const randomNum = getRandomNum()
    // true або false від користувача
    userAttempt = confirm(` Спроба №${i} Це число ${randomNum} ?`)
    // якщо робот вгадав, виводимо alert
    if (userAttempt === true) alert(` Загадане число ${randomNum}`)
    i++
  }
}

// ==================== Task 10 ====================

// Задача 10.  Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.

function sumOddNumbers() {
  const rangeStart = parseInt(prompt(' Введіть номер з якого починати розрахунок'))
  const rangeEnd = parseInt(prompt(' Введіть номер до якого продовжувати розрахунок'))
  let sum = 0
  for (let i = rangeStart; i <= rangeEnd; i++) if (i % 2 != 0) sum += i

  document.querySelector(
    '.result10'
  ).innerHTML = `Сума непарних чисел в діапазоні від ${rangeStart} до ${rangeEnd} дорівнює ${sum}`

  // alert(` Сума непарних чисел в діапазоні від ${rangeStart} до ${rangeEnd} дорівнює ${sum}`)
}

// ==================== Task 11 ====================

// Задача 11.  Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

function sumOddRandonNumbers() {
  // const rangeStart = parseInt(prompt(' Введіть номер з якого починати розрахунок'))
  // const rangeEnd = parseInt(prompt(' Введіть номер до якого продовжувати розрахунок'))
  const rangeStart = parseInt(document.querySelector('.startRange').value)
  const rangeEnd = parseInt(document.querySelector('.endRange').value)
  const oddAmount = 5
  // список рандомних чисел
  let listOddNumbers = ''
  // генеруємо рандомне число
  function getRandomNum() {
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart
  }
  let sum = 0
  let i = 0
  while (i < oddAmount) {
    const randomNum = getRandomNum()
    if (randomNum % 2 != 0) {
      // список рандомних чисел
      listOddNumbers += `${randomNum}, `
      // акумулюємо суму
      sum += randomNum
      i++
    }
  }
  document.querySelector(
    '.result11'
  ).innerHTML = ` Сума дорівнює ${sum}. <br> Список рандомних непарних чисел ${listOddNumbers}`
}

// ==================== Task 12 ====================
// Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).

function slotMashine() {
  // картинки
  const lemon = `./img/lemon.svg`
  const pear = `./img/pear.svg`
  const apple = `./img/apple.svg`
  const pineapple = `./img/pineapple.svg`
  // кількість слотів
  const totalSlots = 3
  // константи балів
  const lemonsPrice = 100
  const pearsPrice = 200
  const applesPrice = 500
  const pineapplesPrice = 1000

  function getRandomNum() {
    const min = 1
    const max = 4
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  // підготовка для виведення результату
  const imageBox = document.querySelector('.image_item')
  imageBox.innerHTML = ``

  // лічильники повторень
  let lemonCounter = 0
  let pearCounter = 0
  let appleCounter = 0
  let pineappleCounter = 0
  // змінна для виведення результату
  let gameScore = 0

  let i = 0
  while (i < totalSlots) {
    const randomNum = getRandomNum()
    let slot
    switch (randomNum) {
      case 1:
        slot = lemon
        lemonCounter++
        break
      case 2:
        slot = pear
        pearCounter++
        break
      case 3:
        slot = apple
        appleCounter++
        break
      case 4:
        slot = pineapple
        pineappleCounter++
        break
    }
    // виводимо картинки
    const image = document.createElement('img')
    image.setAttribute('src', slot)
    imageBox.appendChild(image)
    // інкремент змінної циклу
    i++
    // рахуємо результат
    if (lemonCounter === 3) gameScore = lemonsPrice
    if (pearCounter === 3) gameScore = pearsPrice
    if (appleCounter === 3) gameScore = applesPrice
    if (pineappleCounter === 3) gameScore = pineapplesPrice
  }

  document.querySelector('.result__text').innerHTML = ` Ваш виграш склав: ${gameScore}`
}
