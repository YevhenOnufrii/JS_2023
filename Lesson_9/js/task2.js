//================ Задача 2

// Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

const fillArray1_7 = () => {
  const elementsAmount = parseInt(document.getElementById('task2').value)
  // умова перевіряє чи не пусте значення в інпуті
  if (elementsAmount) {
    let resultArr = new Array(elementsAmount).fill(1).fill(7, Math.floor(elementsAmount / 2))
    document.querySelector('.result_2').innerHTML = `
    ${resultArr}
    `
  }
}
/* const fillArray1_7 = () => {
  const elementsAmount = parseInt(document.getElementById('task2').value)
  // умова перевіряє чи не пусте значення в інпуті
  if (elementsAmount) {
    let resultArr = new Array(elementsAmount).fill(1)
    const halfOfElements = Math.floor(elementsAmount / 2)
    resultArr = resultArr.map((it, index) => {
      if (index >= halfOfElements) it = 7
      return it
    })
    document.querySelector('.result_2').innerHTML = `
      ${resultArr}
    `
  }
} */
