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
  let rangeStart = parseInt(prompt(' Введіть номер з якого починати розрахунок'))
  let rangeEnd = parseInt(prompt(' Введіть номер до якого продовжувати розрахунок'))

  // на випадок якщо першим було введено менше число
  let compare = rangeEnd
  if (rangeStart > rangeEnd) {
    rangeEnd = rangeStart
    rangeStart = compare
  }

  let sum = 0
  // цей варіант цикла НЕ включає числа з яких починається діапазон
  for (let i = rangeStart + 1; i < rangeEnd - 1; i++) if (i % 2 != 0) sum += i
  // нижче варіант цикла який включає стартові значення обчислення в результат
  // for (let i = rangeStart; i <= rangeEnd; i++) if (i % 2 != 0) sum += i

  document.querySelector(
    '.result10'
  ).innerHTML = `Сума непарних чисел в діапазоні від ${rangeStart} до ${rangeEnd} дорівнює ${sum}`
}

// ==================== Task 11 ====================

// Задача 11.  Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

function sumOddRandonNumbers() {
  let rangeStart = parseInt(document.querySelector('.startRange').value)
  let rangeEnd = parseInt(document.querySelector('.endRange').value)

  // на випадок якщо першим було введено менше число
  let compare = rangeEnd
  if (rangeStart > rangeEnd) {
    rangeEnd = rangeStart
    rangeStart = compare
  }
  // список непарних чисел
  let listOddNumbers = ''
  // генеруємо рандомне число
  function getRandomNum() {
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart
  }
  let sum = 0
  // oddCounter рахує кількість непарних і є умовою циклу
  let oddCounter = 0
  // поки i не виходить за межі діапазону і лічильниук непарних не більше 5
  for (let i = 0; i < rangeEnd && oddCounter < 5; i++) {
    // якщо діапазон чисел більше 11 то обираються рандомні числа
    if (rangeEnd - rangeStart > 11) {
      // якщо різниця більше 11 то обираються рандомні числа
      const randomNum = getRandomNum()
      if (randomNum % 2 !== 0) {
        // список рандомних чисел
        listOddNumbers += `${randomNum}, `
        // акумулюємо суму
        sum += randomNum
        oddCounter++
      }
      // якщо діапазон чисел менше 11 то обираються числа по порядку;
    } else if ((rangeStart + i) % 2 !== 0) {
      // список чисел
      listOddNumbers += `${rangeStart + i}, `
      // акумулюємо суму
      sum += rangeStart + i
      oddCounter++
    }
  }

  document.querySelector(
    '.result11'
  ).innerHTML = ` Сума дорівнює ${sum}. <br> Список непарних чисел ${listOddNumbers}`
}

// ==================== Task 12 ====================
// Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).

function slotMashine() {
  // дорога до картинки
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
  // очищаємо поле виводу
  imageBox.innerHTML = ``

  // лічильники повторень
  let lemonCounter = 0
  let pearCounter = 0
  let appleCounter = 0
  let pineappleCounter = 0
  // змінна для виведення результату
  let gameScore = 0

  for (let i = 0; i < totalSlots; i++) {
    const randomNum = getRandomNum()
    let picture
    // залежно від рандомного номера
    // picture отримує адрес до картинкою
    switch (randomNum) {
      case 1:
        picture = lemon
        lemonCounter++
        break
      case 2:
        picture = pear
        pearCounter++
        break
      case 3:
        picture = apple
        appleCounter++
        break
      case 4:
        picture = pineapple
        pineappleCounter++
        break
    }
    // виводимо картинки
    const image = document.createElement('img')
    // тут передаємо атрибут + дорога до файлу
    image.setAttribute('src', picture)
    imageBox.appendChild(image)

    // рахуємо результат
    if (lemonCounter === 3) gameScore = lemonsPrice
    if (pearCounter === 3) gameScore = pearsPrice
    if (appleCounter === 3) gameScore = applesPrice
    if (pineappleCounter === 3) gameScore = pineapplesPrice
  }

  document.querySelector('.result__text').innerHTML = ` Ваш виграш склав: ${gameScore} грн`
}

// ==================== Task 13 ====================

// ? 13. Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.
// ? поле 10х10

function seaBattle() {
  function getRandomNum() {
    const min = 1
    const max = 10
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const shipCoordinateX = getRandomNum()
  const shipCoordinateY = getRandomNum()

  let userAtempts = false
  while (!userAtempts) {
    // дані від користувача
    const userAttemptX = parseInt(
      prompt('Введіть координату X для пострілу. Ціле число від 1 до 10: ')
    )
    const userAttemptY = parseInt(
      prompt('Введіть координату Y для пострілу. Ціле число від 1 до 10: ')
    )

    // якщо користувач нажимає скасувати при вводі координат prompt повертає null, parseInt перетворює його в NaN
    // тут перевіряємо чи часом користувач не скасував введення координат
    // якщо так, виходимо з циклу
    if (!isFinite(userAttemptX) && !isFinite(userAttemptY)) {
      alert(` Ви покинули спроби! Координати корабля ${shipCoordinateX}, ${shipCoordinateY}`)
      break
    } else if (shipCoordinateX === userAttemptX && shipCoordinateY === userAttemptY) {
      userAtempts = true
      alert('Ви потопили корабель. Вітаю!')
      break
    } else {
      alert(' Промах, спробуйте ще!')
    }
  }
}

// ==================== Task 14 ====================

// Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).

function collectPayment() {
  let cashBalance = 1000
  while (cashBalance > 0) {
    const incomingPayment = parseFloat(
      prompt(` Вам потрібно внести ${cashBalance}: 
      Введіть суму готівки яку вносите:`)
    )
    cashBalance -= incomingPayment
    if (cashBalance === 0) {
      alert('Ви внесли всю суму')
      break
    } else if (cashBalance < 0) {
      alert(` Ви внесли на ${Math.abs(cashBalance)} грн більше.`)
    }
  }
}

// ==================== Task 15 ====================

//  Користувача поступово вводить показники температури протягом року. Знайти середню температуру.

function averageTemperature() {
  let userInput = true
  let averageTemp = 0
  let tempSum = 0
  // цикл буде працювати поки не досягне 12 місяців або юзер не припинить вводити дані
  for (let i = 1; i <= 12 && userInput; i++) {
    const userData = parseFloat(
      prompt(`Поточна середня темп. дорівнює ${averageTemp.toFixed(2)}
     Введіть значення температури для ${i} місяця. `)
    )
    if (!isFinite(userData)) {
      alert(
        ` Ви припинили вводити дані. Середня температура = ${averageTemp.toFixed(
          2
        )}. Введено дані для ${i} місяців `
      )
      break
    }
    tempSum += userData
    averageTemp = tempSum / i
  }
}

// ==================== Task 16 ====================

// Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.
function storeProfit() {
  let userInput = true
  const totalWeeks = parseInt(
    prompt(' Введіть кількість тижнів, протягом яких хочете вводити прибуток')
  )
  // при умові 7-ти денного робочого тижня
  const totalDays = 7
  // блок для виводу результатів
  const outBlock = document.querySelector('.result16')
  outBlock.innerHTML = ``

  let totalSum = 0
  for (let i = 1; i <= totalWeeks && userInput; i++) {
    let weekSum = 0

    exit: for (let j = 1; j <= totalDays; j++) {
      const userData = parseFloat(prompt(`Введіть суму прибутку за ${j} день ${i} тижня `))
      // перевірка якщо юзер в процесі набору чисел нажав скасувати
      if (!isFinite(userData)) {
        alert(`Ви припинили вводити суми прибутків. Загальна сума складає ${totalSum}`)
        // виходимо з циклу
        break exit
      }
      // рахуємо суми
      totalSum += userData
      weekSum += userData
    }
    // після кожного тижня виводимо прибуток окремо
    const out = document.createElement('p')
    out.textContent = ` Прибуток за тиждень ${i} склав ${weekSum}$.`
    outBlock.appendChild(out)
  }
  // виводимо загальну суму після закінчення циклу
  const outTotalSum = document.createElement('p')
  outTotalSum.textContent = `Загальна сума складає ${totalSum}$`
  outBlock.appendChild(outTotalSum)
}

// ==================== Task 17  Extra Task 16 ====================

// ? Танчики. На полі з 10 клітинок розміщують танк. За один крок танк може переміщуватися на відстань від 0 до 1 у  будь-якому напрямку (в межах поля). При влучанні броня танка пошкоджується на 30 балів (всього 100). Гра продовжується поки або не закінчаться снаряди (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.

function tanksGame() {
  function getRandomNum_1_10() {
    const min = 1
    const max = 10
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function getRandomNum_0_1() {
    const min = -1
    const max = 1
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const rowStart = 1
  const rowEnd = 10
  const damagePower = 30
  let tankHealth = 100
  let nextStep
  let userAttempt

  let tankPosition = getRandomNum_1_10()
  let shotsNumb = parseInt(prompt(' Введіть кількість пострілів:'))
  /* ============ ГОЛОВНИЙ ЦИКЛ ============*/
  exit: for (let i = 1; i <= shotsNumb && tankHealth > 0; i++) {
    // Валідація данних від користувача. Виходить з циклу коли число від 1 до 10. Інакше просить повторно ввести дані
    // =================   Валідація данних від користувача. Початок
    do {
      userAttempt = parseInt(
        prompt(
          `Спроба №${i} із ${shotsNumb}. Введіть номер квадрата від 1 до 10 в якому на Вашу думку знаходиться танк:`
        )
      )
      if (!isFinite(userAttempt)) {
        confirm(` Ви припинили спроби вразити танк. Координати танка ${tankPosition}`)
        break exit
      }
    } while (userAttempt < 0 || userAttempt > 11)
    // =================   Валідація данних від користувача. КІНЕЦЬ
    // ================= Якщо попав
    if (userAttempt === tankPosition) {
      // зменшуємо життя танка
      tankHealth -= damagePower
      // цикл який перевіряє чи танк не виходить за межі діапазону
      // якщо виходить то цикл повторюється поки рандомне число не дозволить вписатися в умову
      do {
        nextStep = getRandomNum_0_1()
        tankPosition += nextStep
      } while (tankPosition < rowStart || tankPosition > rowEnd)

      console.log('inside loop DAMAGE ~ tankPosition:', tankPosition)

      if (tankHealth > 0)
        alert(
          `Спроба №${i} із ${shotsNumb}. Ви підбили танк. Його health = ${tankHealth}. Танк змінює свою позицію. `
        )
      else alert(`Спроба №${i} із ${shotsNumb}. Ви знищили танк.`)
    } else {
      // ================= Якщо НЕ попав
      do {
        nextStep = getRandomNum_0_1()
        tankPosition += nextStep
      } while (tankPosition < rowStart || tankPosition > rowEnd)
    }
    console.log('inside loop ~ tankPosition:', tankPosition)
  }
}

// ==================== Task 17  Extra Task 7 ====================

// ? Користувач загадує натуральне число від 1 до N. Шляхом задавання мінімальної кількості запитань знайти вказане число (застосувати бінарний пошук, на кожному кроці якого інтервал пошуку зменшується на 2 шляхом порівняння з елементом, який знаходиться у центрі поточного інтервалу).

function binarySearch() {
  // ======= змінні
  let N = parseInt(prompt(' Введіть будь-яке число від 1 і більше'))
  let userConfirm = false
  let rangeStart = 1
  let rangeEnd
  let diff
  let attempCounter = 1

  let mashineAttempt = N / 2

  while (userConfirm !== true) {
    let userAnswer = confirm(`Спроба №${attempCounter} Ви загадали число ${mashineAttempt}? `)
    attempCounter++
    if (!userAnswer) {
      userAnswer = confirm(` Загадане число більше ${mashineAttempt}? `)
      // якщо більше
      if (userAnswer) {
        rangeStart = mashineAttempt
        rangeEnd = N
        diff = rangeEnd - rangeStart
        mashineAttempt += Math.floor(diff / 2)
      } else {
        N = mashineAttempt
        diff = N - rangeStart
        mashineAttempt -= Math.floor(diff / 2)
      }
    } else {
      alert(` Загадане число ${mashineAttempt}`)
      userConfirm = true
    }
  }
}

// ==================== Task 18  Extra Task 2.1 ====================
// 2.1. З клавіатури поступово вводяться символи поки не буде введено символ «а». Вивести рядок символів у зворотному порядку.

const breakIfA = () => {
  let userLetter = ''
  let result = ''
  while (userLetter !== 'a' && userLetter !== null) {
    result = userLetter + result
    userLetter = prompt(' Введіть наступний символ:')
  }
  // виводимо результат
  document.querySelector('.result19').innerHTML = `Введені символи: ${result}`
}

// ==================== Task 19  Extra Task 4.1 ====================

// 4.1. З клавіатури вводяться два числа N i M (N<M). Вивести а екран числа
// N---M
// N+1 --- M-1
// N+2 --- M-2
// N+3 --- M-3
// . . . . . .
// Виведення завершити коли число справа стане меншим за число зліва.
const twoNumbers = () => {
  let numberOne = parseInt(prompt(' Введіть перше менше число:'))
  let numberTwo = parseInt(prompt(' Введіть друге більше число:'))

  const resultOut = document.querySelector('.result20')
  resultOut.innerHTML = ``

  while (numberTwo > numberOne) {
    const out = document.createElement('p')
    out.textContent = `${numberOne} --- ${numberTwo}`
    resultOut.appendChild(out)
    numberOne++
    numberTwo--
  }
}

// ==================== Task 21 Extra Task 5 ====================

//  5. На екрані виводиться меню:
// 1. Сказати «Привіт».
// 2. Сказати «Зачекай».
// 3. Сказати «До побачення».
// 4. Вихід.
// Шляхом вибору пунктів меню виводити відповідні повідомлення, поки не буде вибрано пункт номер 4.

const menu4 = () => {
  let userInputData
  while (userInputData !== 4 && userInputData !== null) {
    do {
      userInputData = parseInt(
        prompt(`Меню:
        1. Сказати «Привіт».
        2. Сказати «Зачекай».
        3. Сказати «До побачення».
        4. Вихід. 
        Введіть номер меню:`)
      )
    } while (userInputData < 1 || userInputData > 4)
    if (!isFinite(userInputData)) userInputData = null
    let outMessage
    switch (userInputData) {
      case 1:
        outMessage = '«Привіт»'
        break
      case 2:
        outMessage = '«Зачекай»'
        break
      case 3:
        outMessage = 'До побачення'
        break
    }
    // ця умова для того, коли в результат залітає undefined то з’являється alert із написом "undefined"
    if (typeof outMessage !== 'undefined') alert(outMessage)
  }
}

// ==================== Task 22  Extra Task 12 ====================

// ? 12. З клавіатури вводяться поступово числа. Знайти два найбільші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.

const maxNum = () => {
  let min
  let max = -Infinity
  let diff
  let userInputData

  do {
    userInputData = parseFloat(prompt(` Введіть число:`))
    if (!isFinite(userInputData)) break
    if (userInputData > max) {
      let temp = max
      max = userInputData
      min = temp
    } else if (userInputData > min) {
      min = userInputData
    }
    diff = max - min
    console.log({ diff })
  } while (diff > 5)

  document.querySelector('.result22').innerHTML = ` max = ${max}, second max = ${min}`
}

// ==================== Task 23  Extra Task 13 ====================

// ? З клавіатури вводяться поступово числа. Знайти два найменші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5

const minNum = () => {
  let min = Infinity
  let secondMin = Infinity
  let diff
  do {
    let userInputData = parseFloat(prompt(' Введіть число:'))
    if (!isFinite(userInputData)) break
    if (userInputData < min) {
      let temp = min
      min = userInputData
      secondMin = temp
    } else if (userInputData < secondMin) {
      secondMin = userInputData
    }
    diff = secondMin - min
  } while (diff > 5)

  document.querySelector('.result23').innerHTML = ` min = ${min}, second min = ${secondMin}`
}

// ==================== Task 23  Extra Task 15 ====================

// Тир. На полі з 10 клітинок розміщують зайця. За один крок заєць може стрибати на відстань від 0 до 3 позицій у будь-якому напрямку. З клавіатури вводиться позиція пострілу. Гра продовжується поки  у користувача не закінчаться патрони (кількість вводиться з клавіатури) або не буде влучання.

const catchRabbit = () => {
  let userSchoots = parseInt(prompt(` Введіть кількість пострілів:`))
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  let rabbitPos = getRandomNum(1, 10)
  do {
    let userAttempt = parseInt(
      prompt(
        `Залишилось пострілів: ${userSchoots}. 
        Введіть номер клітинки для пострілу (від 1 до 10):`
      )
    )
    if (!isFinite(userAttempt)) {
      alert(' Ви припинили вводити координати')
      break
    }
    if (userAttempt !== rabbitPos) {
      do {
        rabbitPos += getRandomNum(-3, 3)
      } while (rabbitPos < 0 || rabbitPos > 10)
    } else {
      alert(` Ви спіймали зайця`)
      break
    }
    userSchoots--
  } while (userSchoots > 0)
}
