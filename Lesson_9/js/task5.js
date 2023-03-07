//  ================  Task 5  ================
// Дано масив елементів. Знайти добуток додатних елементів

const getSumPositiveNumb = () => {
  // створення масиву рандомних чисел
  function getRandomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const arrWithRandNumb = new Array(20).fill(null).map((it) => (it = getRandomNumb(-100, 100)))

  // використання циклу for..of
  let sum = 0
  for (const number of arrWithRandNumb) {
    if (number > 0) sum += number
  }
  // вивід результатів
  document.querySelector('.testArr5').innerHTML = `[Тестовий масив: ${arrWithRandNumb.join(', ')} ]`
  document.querySelector('.result_5').innerHTML = ` Добуток додатних елементів: ${sum}`
}
