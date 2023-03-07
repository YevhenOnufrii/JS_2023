//  ================  Task 4  ================
// Дано масив елементів. Вивести на екран елементи, що більші за 100

const biggerThan100 = () => {
  // створення масиву рандомних чисел
  function getRandomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const arrWithRandNumb = new Array(20).fill(null).map((it) => (it = getRandomNumb(1, 500)))
  // використання циклу for..of
  const resultArr = []
  for (const number of arrWithRandNumb) {
    if (number >= 100) resultArr.push(number)
  }
  document.querySelector('.testArr').innerHTML = ` Тестовий масив: ${arrWithRandNumb}`
  document.querySelector('.result_4').innerHTML = ` Результат: ${resultArr}`
}
