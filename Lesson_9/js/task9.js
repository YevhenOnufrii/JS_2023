//  ================  Task 9  ================
// Дано масив імен. Сформувати масив з перших літер цих імен.

function firstLetterArr() {
  const namesList = [
    'John',
    'Jane',
    'Bob',
    'Alice',
    'David',
    'Sarah',
    'Tom',
    'Emily',
    'Olivia',
    'Jacob',
  ]
  const namesInitials = namesList.map((it) => (it = it[0])) // додаткові дужки викладає prettier
  // виводимо результат
  document.querySelector('.testArr9').innerHTML = `[Тестовий масив: ${namesList.join(', ')} ]`
  document.querySelector('.result_9').innerHTML = ` Результат: ${namesInitials.join(', ')}`
}
