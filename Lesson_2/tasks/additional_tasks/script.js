document
  .querySelector('.click_button')
  .addEventListener('click', getElementWidth)

function getElementWidth() {
  const screenWidth = parseFloat(document.querySelector('.screenWidth').value)
  const itemsQuantity = parseInt(document.querySelector('.itemsQuantity').value)

  const result1 = Math.floor(screenWidth / itemsQuantity)
  console.log(result1)

  document.querySelector('.result1').innerHTML = `
  На екрані шириною ${screenWidth.toFixed(
    2
  )} пікселів поміститься ${itemsQuantity} елементів шириною ${result1} пікселів.
  `
}
