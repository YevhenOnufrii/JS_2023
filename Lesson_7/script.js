// Homework #7
// =================  Задача 0  =================
// ? Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

function getSeason() {
  const monthNumber = parseInt(document.querySelector('.monthNumber').value)
  let result
  switch (monthNumber) {
    case 3:
    case 4:
    case 5:
      result = ' Весна '
      break
    case 6:
    case 7:
    case 8:
      result = ' Літо '
      break
    case 9:
    case 10:
    case 11:
      result = ' Осінь '
      break
    case 1:
    case 2:
    case 12:
      result = ' Зима '
      break
  }
  // цей вираз для коректного виводу результату
  result && (document.querySelector('.result1').innerHTML = ` Пора року: ${result}`)
}

// =================  Задача 1  =================
