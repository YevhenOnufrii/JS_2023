// ================== Задача 1 ==================
// З клавіатури вводяться імена двох дітей та кількість у них
// цукерок. Вивести не екран ім’я тієї дитини, у якої кількість
// цукерок є більшою, або вивести, що кількість однакова.

document.querySelector('.button1').addEventListener('click', whoHasMore)

function whoHasMore() {
  //отримуємо дані від користувача
  const firstChildName = document.querySelector('.getFirstName').value
  const sweatsQuantityFirstChild = parseInt(document.querySelector('.getSweatsQuantityFirstChild').value) || 0
  const secondChildName = document.querySelector('.getSecondName').value
  const sweatsQuantitySecondChild = parseInt(document.querySelector('.getSweatsQuantitySecondChild').value) || 0

  // порівнюємо кількість цукерок і повертаємо результат
  // якщо кількість цукерок однакова
  if (sweatsQuantityFirstChild === sweatsQuantitySecondChild) {
    return (document.querySelector('.result1').innerHTML = `В обох дітей однакова кількість цукерок`)
  }
  //визначаємо переможця
  const winner =
    sweatsQuantityFirstChild > sweatsQuantitySecondChild
      ? ` В дитини ${firstChildName} цукерок більше`
      : ` В дитини ${secondChildName} цукерок більше`

  // виводимо на сторінку
  document.querySelector('.result1').innerHTML = `${winner}`
}

// ================== Задача 2 ==================
// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

document.querySelector('.button2').addEventListener('click', balanceCalc)

function balanceCalc() {
  const lotteryTicketPrice = 4
  // отримуємо ціну товару або дефолтний 0
  const itemPrice = parseFloat(document.querySelector('.getPrice').value) || 0
  // отримуємо залишок грошей або дефолтний 0
  const cashBalance = parseFloat(document.querySelector('.getCashBalance').value) || 0

  // залишок на рахунку після покупки
  const leftover = cashBalance - itemPrice
  // якщо ціна більша за залишок грошей
  if (itemPrice > cashBalance) {
    return (document.querySelector('.result2').innerHTML = `
    Вартість товару ${itemPrice.toFixed(2)}, на рахунку ${cashBalance.toFixed(
      2
    )}. У покупці відмовлено, недостатнього коштів на рахунку
    `)
  }
  // якщо залишок грошей більше дорівнює 4
  if (leftover >= lotteryTicketPrice) {
    return (document.querySelector('.result2').innerHTML = `
    <span class="green-color-result"> Вартість товару ${itemPrice}, на рахунку ${cashBalance.toFixed(
      2
    )}. Покупка дозволена. Не бажаєте придбати лотерейний квиток?</span>
    `)
  }
  // якщо залишок грошей більше дорівнює ціні товару, але менше 4
  if (cashBalance >= itemPrice) {
    return (document.querySelector('.result2').innerHTML = `
    <span class="green-color-result"> Вартість товару ${itemPrice.toFixed(2)}, на рахунку ${cashBalance.toFixed(
      2
    )}. Покупка дозволена.</span>  
    `)
  }
}

// ================== Задача 3 ==================
//  Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

// формула рандомного числа min + Math.floor(Math.random() * (max - min + 1))

document.querySelector('.button3').addEventListener('click', guessNaumer)

function guessNaumer() {
  const MIN = 1
  const MAX = 5
  // отримуємо дані від користувача
  const attempt1 = parseInt(document.querySelector('.getAttempt1').value)
  const attempt2 = parseInt(document.querySelector('.getAttempt2').value)
  // генерація рандомного чмсла
  const randomNum = MIN + Math.floor(Math.random() * (MAX - MIN + 1))
  // якщо перша або друга спроба успішні
  if (attempt1 === randomNum || attempt2 === randomNum) {
    return (document.querySelector('.result3').innerHTML = `
    <span class="green-color-result"> 
       Ви вгадали. Загадане число: ${randomNum}
    </span>
    `)
  }
  // інакше повертаємо інфо про невдачу
  return (document.querySelector('.result3').innerHTML = `
       Ви не вгадали. Загадане число: ${randomNum}
    `)
}

// ! ================== Задача 4 ==================
// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

document.querySelector('.button4').addEventListener('click', whoYouAre)

function whoYouAre() {
  // статичні константи
  const CHILD = 6
  const STUDENT = 17
  const WORKER = 23
  const RETIRED = 65
  // отримуємо дані
  const age = parseInt(document.querySelector('.getAge').value)
  // зміння для статуса
  let status = 'Дитина у садочку'
  // визначення статуса
  if (age >= CHILD && age < STUDENT) status = 'Школяр'
  if (age >= STUDENT && age < WORKER) status = 'Студент'
  if (age >= WORKER && age < RETIRED) status = 'Працівник'
  if (age >= RETIRED) status = 'Пенсіонер'

  document.querySelector('.result4').innerHTML = `
    <span class="green-color-result">
      ${status}
    </span>`
}

// ================== Задача 5 ==================
// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

document.querySelector('.button5').addEventListener('click', getCarCateg)

function getCarCateg() {
  // статичні константи
  const CATEGORY_A = 'A'
  const CATEGORY_B = 'B'
  const CATEGORY_C = 'C'
  // отримуємо дані
  // переводимо у верхній регістр
  const driverCateg = document.querySelector('.getdriverCateg').value.toUpperCase()
  // маленька строка для валідації
  // 'ABC'
  const validStr = CATEGORY_A + CATEGORY_B + CATEGORY_C
  // проста валідація
  // якщо приходить літера яка є у строці 'ABC' то визначаємо категорію ТЗ
  // інакше повертаємо повідомлення, що введена не вірна літера
  if (validStr.includes(driverCateg)) {
    // змінна для категорії ТЗ
    let carCategory = 'мотоцикл.'
    // розкидуємо по категоріям
    switch (driverCateg) {
      case CATEGORY_B:
        carCategory = 'легковий автомобіль.'
        break
      case CATEGORY_C:
        carCategory = 'вантажний автомобіль.'
    }
    // вивід на сторінку
    document.querySelector('.result5').innerHTML = `
      <span class="green-color-result">
        Ви можете керувати ТЗ: ${carCategory}
      </span>`
  } else {
    // вивід на сторінку, якщо дані не пройшли валідацію
    document.querySelector('.result5').innerHTML = `
      <span>
        Ви ввели не вірну літеру категорії водія
      </span>`
  }
}

// ================== Задача 6 ==================
// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

document.querySelector('.button6').addEventListener('click', getDayName)

function getDayName() {
  let dayNumb = parseInt(document.querySelector('.getDayNumb').value)
  const DAYS_IN_WEEK_MIN = 1
  const DAYS_IN_WEEK_MAX = 7
  // вираховуємо день тижня
  dayNumb = Math.ceil(((dayNumb - DAYS_IN_WEEK_MIN) % DAYS_IN_WEEK_MAX) + 1)
  // ініціалізація змінної назви дня
  let nameDay = 'Неділя'
  // визначення назви дня
  switch (dayNumb) {
    case 1:
      nameDay = 'Понеділок'
      break
    case 2:
      nameDay = 'Вівторок'
      break
    case 3:
      nameDay = 'Середа'
      break
    case 4:
      nameDay = 'Четвер'
      break
    case 5:
      nameDay = 'П’ятниця'
      break
    case 6:
      nameDay = 'Субота'
      break
  }
  // вивід на сторінку
  document.querySelector('.result6').innerHTML = `
      <span class="green-color-result">
        День тижня: ${nameDay}
      </span>`
}

// ================== Задача 7 ==================
// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

document.querySelector('.button7').addEventListener('click', getSeasonName)

function getSeasonName() {
  // статичні дані
  const MIN_MONTHS_IN_YEAR = 1
  const MAX_MONTHS_IN_YEAR = 12
  // дані від користувача
  let monthNumb = parseInt(document.querySelector('.getMonthNumb').value)
  // вираховуємо номер місяця, якщо користувач ввів число більше 12
  monthNumb = Math.ceil(((monthNumb - MIN_MONTHS_IN_YEAR) % MAX_MONTHS_IN_YEAR) + 1)
  let season = 'Зима'
  if (monthNumb >= 3 && monthNumb <= 5) season = 'Весна'
  if (monthNumb >= 6 && monthNumb <= 8) season = 'Літо'
  if (monthNumb >= 9 && monthNumb <= 11) season = 'Осінь'

  // вивід на сторінку
  document.querySelector('.result7').innerHTML = `
      <span class="green-color-result">
        Пора року: ${season}
      </span>`
}

//! ================== ДОДАТКОВІ ЗАВДАННЯ ==================

//? ================== Задача 1 ==================
// На екран виводиться меню: 1. Веселий 2. Сумний 3. Обурений
// Користувач вводить номер пункту меню і на екрані з’являється відповідне зображення смайла.

document.querySelector('.button1_1').addEventListener('click', getEmoji)

function getEmoji() {
  const emojiNumb = parseInt(document.querySelector('.getEmojiNumb').value)
  if (emojiNumb >= 1 && emojiNumb <= 3) {
    const SMILE = '<img class="svg_pic" src="./img/smile.svg" alt=""></img>'
    const SAD = '<img class="svg_pic" src="./img/sad.svg" alt=""></img>'
    const ANGRY = '<img class="svg_pic" src="./img/angry.svg" alt=""></img>'

    let getEmoji = SMILE

    switch (emojiNumb) {
      case 2:
        getEmoji = SAD
        break
      case 3:
        getEmoji = ANGRY
        break
    }
    document.querySelector('.result1_1').innerHTML = `
    ${getEmoji}  
    `
  } else {
    document.querySelector('.result1_1').innerHTML = `
    Введіть коректний номер емодзі  
    `
  }
}

//? ================== Задача 2 ==================
// Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або розташоване від нього (від лівого або правого краю) не більше ніж на 10.

// формула рандомного числа min + Math.floor(Math.random() * (max - min + 1))

document.querySelector('.button1_2').addEventListener('click', randomGame)

function randomGame() {
  const SMILE = '<img class="svg_pic" src="./img/smile.svg" alt=""></img>'
  const SAD = '<img class="svg_pic" src="./img/sad.svg" alt=""></img>'

  const MIN_VAL = 1
  const MAX_VAL = 100
  const permisInterval = 10

  const NumbFromUser = parseInt(document.querySelector('.getGameNumb').value)
  // генерація рандомного числа
  const randomNumber = MIN_VAL + Math.floor(Math.random() * (MAX_VAL - MIN_VAL + 1))
  // знаходимо різницю між рандомним і числом користувача
  // abs - поверне абсолютне значення числа ( -2 => 2 )
  let diff = Math.abs(randomNumber - NumbFromUser)
  // дефолтний результат
  let result = `<p>Ви не вгадали! Загадане число ${randomNumber}</p> ${SAD}`
  // вгадав
  if (diff <= permisInterval) {
    result = `<p>Ви вгадали! Загадане число ${randomNumber}.</p>
  ${SMILE}`
  }

  // виводимо результат
  document.querySelector('.result1_2').innerHTML = `
    ${result}
    `
}

// ? ================== Задача 3 ==================

// Задача 3. Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді. Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.

document.querySelector('.button3_1').addEventListener('click', whoIsWinner)

function whoIsWinner() {
  const MIN_VAL = 1
  const MAX_VAL = 10

  const userOneAttempt = parseInt(document.querySelector('.getAttempt1_1').value)
  const userTwoAttempt = parseInt(document.querySelector('.getAttempt2_1').value)
  const randomNum = MIN_VAL + Math.floor(Math.random() * (MAX_VAL - MIN_VAL + 1))

  const diffUserOne = Math.abs(randomNum - userOneAttempt)
  const diffUserTwo = Math.abs(randomNum - userTwoAttempt)

  const winner =
    diffUserOne < diffUserTwo
      ? `Переміг користувач 1. Загадане число ${randomNum}`
      : `Переміг користувач 2. Загадане число ${randomNum}`

  document.querySelector('.result3_1').innerHTML = `${winner}`
}

// ?  ================== Задача 4 початок ==================

//  Морський бій. Ворожий корабель, може знаходитись в одному із квадратів (кількість квадратів вводиться з
//           клавіатури), які розташовані
//           лінійно (один за одним) на річці.
//           Позиція корабля визначається комп’ютером випадковим чином.
//           Гра відбувається за правилами:
//           1) якщо користувач стріляє у заданий квадрат (тобто вводиться номер квадрата), то корабель потоплено;
//           2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, де знаходиться корабель, то корабель
//           пошкоджено
//           (про це повідомляємо користувача).
//           За два постріли спробувати потопити корабель.
function navalBattle() {
  const MIN_QUAN_SQUARES = 1
  const MAX_QUAN_SQUARES = parseInt(prompt('Введіть кількість квадратів', 0))
  // визначаємо рандомне число
  const randomVal = MIN_QUAN_SQUARES + Math.floor(Math.random() * (MAX_QUAN_SQUARES - MIN_QUAN_SQUARES + 1))

  // Спроба №1 користувача
  let userAttempt = parseInt(prompt('Введіть число для пострілу:', 0))

  // попав
  if (userAttempt === randomVal) {
    return (document.querySelector(
      '.result4_1'
    ).innerHTML = `<p class="green-color-result">Ви потопили противника!</p>`)
  }
  // не попав
  // не рахуємо різницю в координатах
  const diff = Math.abs(randomVal - userAttempt)
  // якщо різниця один пункт
  if (diff === 1) {
    userAttempt = parseInt(prompt('Корабель підбитий: Введіть наступні координати', 0))
  } else {
    // якщо різниця більше 1 пункта. Спроба №2
    userAttempt = parseInt(prompt('Мимо, маєте ще одну спробу.', 0))
  }
  // результати після 2 спроби
  if (userAttempt === randomVal) {
    return (document.querySelector(
      '.result4_1'
    ).innerHTML = `<p class="green-color-result">Ви потопили противника!</p>`)
  } else {
    document.querySelector('.result4_1').innerHTML = `<p>Ви програли!!! Загадане число: ${randomVal}</p>`
  }
}
// ?  ================== Задача 4 кінець ==================

// ? ================== Задача 5 START =================
// Модифікувати попередню задачу з можливістю після пострілу переміщення корабля у випадковим чином вибрану сусідню клітинку (якщо звичайно корабель не було потоплено за першим разом).
function navalBattleV2() {
  const MIN_QUAN_SQUARES = 1
  const MAX_QUAN_SQUARES = parseInt(prompt('Введіть кількість квадратів', 0))
  // визначаємо рандомне число
  let randomVal = MIN_QUAN_SQUARES + Math.floor(Math.random() * (MAX_QUAN_SQUARES - MIN_QUAN_SQUARES + 1))

  // Спроба №1 користувача
  let userAttempt = parseInt(prompt('Введіть число для пострілу:', 0))

  // попав
  if (userAttempt === randomVal) {
    return (document.querySelector(
      '.result5_1'
    ).innerHTML = `<p class="green-color-result">Ви потопили противника!</p>`)
  }
  // не попав
  // рахуємо різницю в координатах
  const diff = Math.abs(randomVal - userAttempt)
  // нове рандомне число для зміни координати корабля
  const min = randomVal - 1
  const max = randomVal + 1
  randomVal = min + Math.floor(Math.random() * (max - min + 1))
  // якщо різниця один пункт
  if (diff === 1) {
    userAttempt = parseInt(prompt('Корабель підбитий: Введіть наступні координати', 0))
  } else {
    // якщо різниця більше 1 пункта. Спроба №2
    userAttempt = parseInt(prompt('Мимо, маєте ще одну спробу.', 0))
  }
  // результати після 2 спроби
  if (userAttempt === randomVal) {
    return (document.querySelector(
      '.result5_1'
    ).innerHTML = `<p class="green-color-result">Ви потопили противника!</p>`)
  } else {
    document.querySelector('.result5_1').innerHTML = `<p>Ви програли!!! Загадане число: ${randomVal}</p>`
  }
}
// ? ================== Задача 5 END ==================

// ? ================== Задача 6 START =================
// Полювання. Заєць знаходиться у верхньому лівому кутку поля. Поле складається з двох рядків і двох стовпців. За один крок заєць може стрибнути у будь-яку із вільних клітинок. Користувач ставить пастку вказуючи номер рядка і стовпця клітинки. Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів. Якщо користувач зловить зайця за другою спробою, то одержує 50 балів.

function catchRabbit() {
  const minVal = 1
  const maxVal = 2

  let getRandomPositionX = minVal + Math.floor(Math.random() * (maxVal - minVal + 1))
  let getRandomPositionY = minVal + Math.floor(Math.random() * (maxVal - minVal + 1))
  console.log(getRandomPositionX, 'getRandomPositionX')
  console.log(getRandomPositionY, 'getRandomPositionY')

  let userAttemptX = parseInt(prompt('Введіть значення Х для пастки:'))
  let userAttemptY = parseInt(prompt('Введіть значення Y для пастки:'))

  let out
  if (userAttemptX === getRandomPositionX && userAttemptY === getRandomPositionY)
    out = `<p class="green-color-result">Ваша пастка страцювала. Ви отримуєте 100 балів</p>`
  else {
    // присвоюю поточні координати змінним, щоб порахувати наступний рандом
    // далі ці змінні потрібно порівняти чи дійсно у змінну мін падає мінімальне значення у макс максимальне
    // інакше формула рандому не буде рацювати вірно
    let minCurrent = userAttemptX
    let maxCurrent = userAttemptY

    if (maxCurrent > minCurrent) {
      // якщо все ок рахуємо рандом
      getRandomPositionX = minCurrent + Math.floor(Math.random() * (maxCurrent - minCurrent + 1))
      getRandomPositionY = minCurrent + Math.floor(Math.random() * (maxCurrent - minCurrent + 1))
    } else {
      // якщо мінімальне більше макс, то міняємо їх місцями у формулі і рахуємо рандом
      getRandomPositionX = maxCurrent + Math.floor(Math.random() * (minCurrent - maxCurrent + 1))
      getRandomPositionY = maxCurrent + Math.floor(Math.random() * (maxCurrent - maxCurrent + 1))
    }
    console.log(getRandomPositionX, '2  getRandomPositionX')
    console.log(getRandomPositionY, '2  getRandomPositionY')
    // координати для другої спроби
    userAttemptX = parseInt(prompt('Друга спроба: Введіть значення Х для пастки:'))
    userAttemptY = parseInt(prompt('Друга спроба: Введіть значення Y для пастки:'))
    if (userAttemptX === getRandomPositionX && userAttemptY === getRandomPositionY)
      out = `<p class="green-color-result">Ваша пастка спрацювала. Ви отримуєте 50 балів</p>`
    else out = `Ваша пастка не страцювала. Ви програли.`
  }
  document.querySelector('.result6_1').innerHTML = `${out}`
}

// ? ================== Задача 6 END =================
// ? ================== Задача 7 START =================
// Задача 7. Гра в кості. Правила гри:
// 1) користувач може кинути кості не більше двох разів (користувач сам вирішує чи робити, чи не робити другий кидок);
// 2) якщо випадає парне число, то кількість балів збільшується на це число;
// 3) якщо випадає непарне число, то кількість балів зменшується на це число;
// 4) виграє той, у кого кількість балів більша.

// ? ================== Задача 7 END =================

function dice() {}
