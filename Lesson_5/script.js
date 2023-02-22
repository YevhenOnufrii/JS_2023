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
