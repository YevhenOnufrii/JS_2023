//  ================  Task 6  ================
// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

function doubleGreaterThanFirst() {
  // створення масиву рандомних чисел
  function getRandomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const arrWithRandNumb = new Array(20).fill(null).map((it) => (it = getRandomNumb(1, 100)))
  const firstArrayElement = arrWithRandNumb.at(0)
  const resArr = arrWithRandNumb.map((it) => {
    if (it > firstArrayElement) it *= 2
    return it
  })
  // виводимо результат
  document.querySelector('.testArr6').innerHTML = `[Тестовий масив: ${arrWithRandNumb.join(', ')} ]`
  document.querySelector('.result_6').innerHTML = ` Результат: ${resArr}`
}
