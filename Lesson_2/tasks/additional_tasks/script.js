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

document.querySelector('.click_button6').addEventListener('click', valueChange)

function valueChange() {
  let a = document.querySelector('.get_a').value
  let b = document.querySelector('.get_b').value
  let c = document.querySelector('.get_c').value
  let acc = a

  a = b
  b = c
  c = acc

  document.querySelector('.result6').innerHTML = `
<table>
    <tr>
    <th>Значення після зміни</th>
    <td>a: ${a}</td>
    <td>b: ${b}</td>
    <td>c: ${c}</td>
  </tr>
</table>
  `
}

// ==================  Задача 7  ===============================
// Скласти алгоритм, який обчислює цілу і дробову частину даного числа х. Наприклад: число 23,56  => ціла: 23, дробова: 0,56.

document
  .querySelector('.click_button7')
  .addEventListener('click', getIntegerAndFraction)

function getIntegerAndFraction() {
  let getFloat = parseFloat(document.querySelector('.getFloat').value)

  const int = parseInt(getFloat) // ціле
  const fraction = (getFloat - int).toFixed(2) // отримую 2 цифри після коми

  console.log(int, fraction)
  document.querySelector('.result7').innerHTML = `
   <table>
      <tr>
        <th>Ціла частина</th>
        <th>Дробова частина</th>
      </tr>
      <tr>
        <td>${int}</td>
        <td>${fraction}</td>
      </tr>
    </table>
  `
}

// ==================  Задача 8  ===============================
// Розробити програму (не використовувати if), яка за номером року Y визначає номер століття C (врахувати, що початком XX століття був 1901, а не 1900 рік).

document.querySelector('.click_button8').addEventListener('click', getCentury)

function getCentury() {
  const YEARS_IN_CENTURY = 100
  //отримуємо рокі від користувача
  const getYear = parseInt(document.querySelector('.getYear').value)
  // розрахунок
  // якщо (1901 - 1) / 100 => то Math.floor поверне 19
  // якщо (1900 - 1) / 100 => то Math.floor поверне 18
  const century = Math.floor((getYear - 1) / YEARS_IN_CENTURY)
  console.log(getYear)

  document.querySelector('.result8').innerHTML = `
  <p>${getYear} рік це ${century} століття</p>
  `
}
