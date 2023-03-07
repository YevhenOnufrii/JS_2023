//  ================  Task 7  ================
// Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
function applyDiscountToExpensiveItems() {
  const DISCOUNT_30 = 30
  // створення масиву рандомних чисел
  function getRandomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const arrWithRandNumb = new Array(20).fill(null).map((it) => (it = getRandomNumb(800, 3000)))
  // розрахунок суми знижки в залежності від ціни товару
  const calculateDiscount = (discount, itemPrice) => (itemPrice * discount) / 100

  const resultArr = arrWithRandNumb.map((it) => {
    if (it > 1000) it -= calculateDiscount(DISCOUNT_30, it)
    return it
  })
  // виводимо результат
  document.querySelector('.testArr7').innerHTML = `[Тестовий масив: ${arrWithRandNumb.join(', ')} ]`
  document.querySelector('.result_7').innerHTML = ` Результат: ${resultArr.join(', ')}`
}
