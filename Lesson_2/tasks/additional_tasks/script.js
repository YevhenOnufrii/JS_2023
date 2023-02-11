// ==================  Задача 1  ===============================
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

// ==================  Задача 2  ===============================

document.querySelector('.click_button2').addEventListener('click', getSalary)

function getSalary() {
  const salaryAmount = parseFloat(document.querySelector('.salaryAmount').value)
  const livingWage = parseFloat(document.querySelector('.livingWage').value)
  const diff = livingWage - salaryAmount

  document.querySelector('.result2').innerHTML = `
  Розмір соціальної допомоги буде становити <strong>${diff.toFixed(
    2
  )}</strong>  uah.
  `
}

// ==================  Задача 3  ===============================

document
  .querySelector('.click_button3')
  .addEventListener('click', getPriceAndQuantity)

function getPriceAndQuantity() {
  const priceProduct1 = parseFloat(
    document.querySelector('.priceProduct1').value
  )
  const priceProduct2 = parseFloat(
    document.querySelector('.priceProduct2').value
  )
  const quantityProduct1 = parseFloat(
    document.querySelector('.quantityProduct1').value
  )
  const quantityProduct2 = parseFloat(
    document.querySelector('.quantityProduct2').value
  )
  const total1 = priceProduct1 * quantityProduct1
  const total2 = priceProduct2 * quantityProduct2
  const total = total1 + total2

  document.querySelector('.result3').innerHTML = `
                <table>
                <tr>
                  <th>Назва товару</th>
                  <th>Кількість</th>
                  <th>Ціна</th>
                  <th>Сума</th>
                </tr>
                <tr>
                  <td>Товар #1</td>
                  <td>${quantityProduct1.toFixed(2)}</td>
                  <td>${priceProduct1.toFixed(2)} грн</td>
                  <td>${total1.toFixed(2)} грн</td>
                </tr>
                 <tr>
                  <td>Товар #1</td>
                  <td>${quantityProduct2.toFixed(2)}</td>
                  <td>${priceProduct2.toFixed(2)} грн</td>
                  <td>${total2.toFixed(2)} грн</td>
                </tr>
                <tr>
                  <th>Загальна сума</th>
                  <th></th>
                  <th></th>
                  <th>${total.toFixed(2)} грн</th>
                </tr>
              </table>
  `
}

// ==================  Задача 4  ===============================
// З клавіатури вводиться вік дитини. Вивести на екран через
// скільки років вона буде відвідувати садочок, піде у школу,
// закінчить школу, вступить і закінчить уніреситет
document.querySelector('.click_button4').addEventListener('click', lifePath)

function lifePath() {
  const currentChildAge = parseInt(document.querySelector('.childAge').value)

  const ageSchool = 6
  const ageUniversityStart = 17
  const ageUniversityFinish = 22

  const schoolStart = ageSchool - currentChildAge
  const universityStart = ageUniversityStart - currentChildAge
  const universityEnd = ageUniversityFinish - currentChildAge

  document.querySelector('.result4').innerHTML = `
    <table>
      <tr>
        <th>поточний вік</th>
        <th>до школи</th>
        <th>до початку універа</th>
        <th>до закінчення універа</th>
      </tr>
      <tr>
        <td>${currentChildAge}</td>
        <td>${schoolStart}</td>
        <td>${universityStart}</td>
        <td>${universityEnd}</td>
      </tr>
    </table>
  `
}

// ==================  Задача 5  ===============================
// Визначити, яку платню одержить на фірмі сумісник за виконану роботу, якщо йому нараховано S грн., а податок становить 20%

document.querySelector('.click_button5').addEventListener('click', nettoReward)

function nettoReward() {
  const TAX = 0.2
  const bruttoReward = parseInt(document.querySelector('.reward').value)
  const nettoSalary = Math.floor(bruttoReward - bruttoReward * TAX)
  document.querySelector('.result5').innerHTML = `
    Сумісник за виконану роботу отриає на руки ${nettoSalary} грн.
  `
}

// ==================  Задача 6  ===============================
// Дано три дійсні змінні a, b і c.  Скласти  алгоритм, який міняє місцями значення цих змінних наступним чином: змінна a набуває значення змінної b, змінна b набуває значення змінної c, а змінна  c – попереднє значення змінної a.
let a = 1
let b = 2
let c = 3
let acc = 0

acc = a
a = b
acc = b
