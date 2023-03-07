//  ================  Task 10  ================
// Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

function getArrayOfTaxesPaid() {
  const TAX_RATE = 20
  // створення масиву рандомних цін товарів
  function getRandomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  // масив цін
  const pricesArr = new Array(20).fill(null).map((it) => (it = getRandomNumb(100, 2000)))
  // розрахунок суми податку від ціни товару
  const calculateTax = (taxRate, itemPrice) => (itemPrice * taxRate) / 100
  // масив із величин сплачених податків
  const resultArr = pricesArr.map((it) => (it = calculateTax(TAX_RATE, it)))
  // сума сплачених податків
  let amountOfTaxesPaid = resultArr.reduce((acc, it) => (acc += it), 0)
  //вивід результатів
  document.querySelector('.testArr10').innerHTML = `[Тестовий масив: ${pricesArr.join(', ')} ]`
  document.querySelector('.result_10').innerHTML = ` Результат: ${resultArr.join(', ')}`
  document.querySelector(
    '.result_10_1'
  ).innerHTML = ` Сума сплачених податків: ${amountOfTaxesPaid.toFixed(2)}$`
}
