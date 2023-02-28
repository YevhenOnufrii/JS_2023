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
