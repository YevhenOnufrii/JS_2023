//  ================  Task 8  ================

// Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

function carNumbersWithA() {
  const carNumbers = [
    'BC4456BI',
    'KM2871CT',
    'BH6690CB',
    'MA7281IE',
    'TI2001AM',
    'AA3310CA',
    'AH9826CB',
    'AT7799CK',
    'MI8742CA',
    'AH5401AK',
  ]
  const resultArr = carNumbers.filter((it) => it[0] === 'A')
  // виводимо результат
  document.querySelector('.testArr8').innerHTML = `[Тестовий масив: ${carNumbers.join(', ')} ]`
  document.querySelector('.result_8').innerHTML = ` Результат: ${resultArr.join(', ')}`
}
