// ============= Task 3  =============

//  Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

const fillArray1_7_5 = () => {
  const elementsAmount = parseInt(document.getElementById('task3').value)
  // якщо інпут не пустий
  if (elementsAmount) {
    let resultArr = new Array(elementsAmount).fill(1).fill(7, 5)
    document.querySelector('.result_3').innerHTML = `[${resultArr}]`
  }
}
