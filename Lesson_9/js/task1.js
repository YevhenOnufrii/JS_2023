//================ Задача 1

// Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
const fillArray = () => {
  const elementNumber = parseInt(document.getElementById('task1').value)
  if (elementNumber)
    document.querySelector('.result_1').innerHTML = `
   [ ${new Array(elementNumber).fill(0)} ]
  `
}
