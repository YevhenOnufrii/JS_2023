// Homework #5
// ? Задача 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.

function markingList() {
  // діапазон для рандома
  const minRandomVal = 1
  const maxRandomVal = 100
  // отримуємо кількість рандомних чисел
  const getRandomNumbersCount = parseInt(document.querySelector('.markingList').value)
  // доступ до тега ol для виведення результату
  const list = document.querySelector('.result1').querySelector('ol')
  list.innerHTML = '' // це костиль, для того, щоб нові елементи списку не додавалися до старих
  // цикл від 0 до кількості рандомних чисел
  for (let i = 0; i < getRandomNumbersCount; i++) {
    // генерція рандомного числа
    const randomNum = minRandomVal + Math.floor(Math.random() * (maxRandomVal - minRandomVal + 1))

    const listItem = document.createElement('li') // створюємо ел li в DOM
    listItem.textContent = randomNum // присвоюємо значення randomNUm
    list.appendChild(listItem) // монтуємо елемент в список
  }
}

// Задача 2. Створити 10 елементів для введення цін продуктів

function listForEnteringProdPrices() {
  // кількість елементів для введення цін
  const getNumberItems = parseInt(document.querySelector('.getNumberItems').value)
  // для виведення результату
  const listProdPrices = document.querySelector('.result2')
  // це костиль, для того, щоб нові елементи списку не додавалися до старих
  listProdPrices.innerHTML = ``

  for (let i = 1; i <= getNumberItems; i++) {
    //створюємо label
    const inputLabel = document.createElement('label')
    // додаємо текст
    inputLabel.textContent = `Product # ${i}`
    // створюємо input
    const input = document.createElement('input')
    // додаємо атрибут text
    input.setAttribute('type', 'text')
    // монтуємо елементи в DOM
    listProdPrices.appendChild(inputLabel)
    listProdPrices.appendChild(input)
  }
}
