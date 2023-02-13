// ==================  Задача 1  ===============================
document
  .querySelector('.click_button')
  .addEventListener('click', getElementWidth)

function getElementWidth() {
  const screenWidth = parseFloat(document.querySelector('.screenWidth').value)
  const itemsQuantity = parseInt(document.querySelector('.itemsQuantity').value)

  const result1 = Math.floor(screenWidth / itemsQuantity)

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
                  <td>Товар #2</td>
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

  document.querySelector('.result8').innerHTML = `
  <p>${getYear} рік це ${century} століття</p>
  `
}

// ==================  Задача 9  ===============================
// Скласти програму для розв’язування задачі: йде N-а секунда доби, визначити скільки повних годин і повних хвилин пройшло до цього моменту.
document.querySelector('.click_button9').addEventListener('click', getTimeDiff)

function getTimeDiff() {
  // теперешній час
  const currentTime = new Date()
  // час на початок доби
  const today = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate()
  )
  // різниця між початком дня і тепер у секундах
  const diff = (currentTime - today) / 1000
  // отримати години
  const hours = parseInt(diff / 3600)
  //отримати хвилини
  const minutes = parseInt((diff - hours * 3600) / 60)
  //отримати секунди
  const seconds = parseInt((diff - minutes * 60 - hours * 3600) % 60)

  // АБО
  // тупо отримати теперешні годину час і секунди

  // const hours = currentTime.getHours()
  // const minutes = currentTime.getMinutes()
  // const seconds = currentTime.getSeconds()

  document.querySelector('.result9').innerHTML = `
  Від початку доби пройшо ${hours} годин ${minutes} хвилин ${seconds}  секунд.
  `
}

//  ==================  Задача 10  ===============================
// З клавіатури вводиться кількість монет номіналом 1 копійка. Визначити скільки гривень і копійок є у даній сумі . Наприклад, дано 245 копійок, а вивести 2 грн 45 копійок.
document
  .querySelector('.click_button10')
  .addEventListener('click', transformCoins)

function transformCoins() {
  // копійок в 1 грн
  const coinsInUnit = 100
  // отримуємо ціле чмло копійок
  const getCoins = parseInt(document.querySelector('.getCoins').value)
  // вираховуємо цілу частину
  const int = Math.floor(getCoins / coinsInUnit)
  // вираховуємо залишок копійок
  const coins = Math.floor((getCoins / coinsInUnit - int) * 100)

  document.querySelector('.result10').innerHTML = `
  ${int} грн ${coins} копійок.
  `
}

//  ==================  Задача 11  ===============================
// Дано поточну кількість годи, хвилин, секунд (як на годиннику). Визначити 1) яка кількість секунд буде на годиннику через N секунд.
// 2) яка кількість хвилин буде на годиннику через N секунд, X хвилин.

document
  .querySelector('.click_button11')
  .addEventListener('click', timeCalculation)

function timeCalculation() {
  //отримуємо секунди від користувача або дефолтний 0
  const getUserSeconds =
    parseInt(document.querySelector('.getUserSeconds').value) | 0
  // отримуємо хвилини від користувача або дефолтний 0
  const getUserMinutes =
    parseInt(document.querySelector('.getUserMinutes').value) | 0
  // отримуємо поточні години, хвилини, секунди
  const getHours = new Date().getHours()
  const getMinutes = new Date().getMinutes()
  const getSeconds = new Date().getSeconds()
  // переводимо години, хвилини у секунди і додаємо системні секунди
  const totalSeconds = getHours * 3600 + getMinutes * 60 + getSeconds
  // додаємо до загальної суми секун час користувача
  const result = totalSeconds + getUserMinutes * 60 + getUserSeconds

  const hours = Math.floor(result / 3600)
  const minutes = Math.floor((result - hours * 3600) / 60)
  const seconds = Math.floor(result % 60)

  document.querySelector('.result11').innerHTML = `
   <table>
      <tr>
        <th>Стартова кількість г., хв., сек.</th>
        <td>${getHours} год. ${getMinutes} хв. ${getSeconds}  сек.</td>
      </tr>
      <tr>
        <th>Кількість секунд через N секунд</th>
        <td>${seconds} сек.</td>
      </tr>
      <tr>
        <th>Кількість хвилин через N секунд та X хвилин.</th>
        <td>${minutes} хв.</td>
      </tr>
    </table>
  `
}

//  ==================  Задача 12  ===============================
// З клавіатури вводиться кількість монет номіналом 2 копійки (5коп, 25коп, 50 коп). Визначити скільки гривень і копійок є у даній сумі.

document.querySelector('.click_button12').addEventListener('click', coinsCalc)
function coinsCalc() {
  // кількість коп в 1 грн
  const SEPARATOR = 100
  // отримуємо кількість монет різного номіналу або дефолтний 0
  const coinTwoQantity =
    parseInt(document.querySelector('.getQuantityCoinTwo').value) | 0
  const coinFiveQantity =
    parseInt(document.querySelector('.getQuantityCoinFive').value) | 0
  const coinTwentyFiveQantity =
    parseInt(document.querySelector('.getQuantityCoinTwentyFive').value) | 0
  const coinFiftyQantity =
    parseInt(document.querySelector('.getQuantityCoinFifty').value) | 0

  // суми за номіналом
  const sumCoinTwo = coinTwoQantity * 2
  const sumCoinFive = coinFiveQantity * 5
  const sumCoinTwentyFive = coinTwentyFiveQantity * 25
  const sumCoinFifty = coinFiftyQantity * 50

  const totalSum = sumCoinTwo + sumCoinFive + sumCoinTwentyFive + sumCoinFifty
  // ціла частина
  const separateInt = Math.floor(totalSum / SEPARATOR)
  // копійки
  const coinsLeft = totalSum % SEPARATOR

  document.querySelector('.result12').innerHTML = `
    <p>Загальна сума ${totalSum} копійок, що складає ${separateInt} гривень ${coinsLeft} копійок</p>
  `
}

//  ==================  Задача 13  ===============================
// Визначити скільки повних тижнів є у вказаній кількості днів.

document.querySelector('.click_button13').addEventListener('click', getWeeks)
function getWeeks() {
  const SEPARATOR = 7
  // отримуємо кількість днів або 0
  const getDays = parseInt(document.querySelector('.getDays').value) | 0
  const weeks = Math.floor(getDays / SEPARATOR)

  document.querySelector('.result13').innerHTML = `
    <p>Введено днів ${getDays}, що складає ${weeks} повних тижнів</p>
  `
}

//  ==================  Задача 14  ===============================
// З клавіатури вводиться номер дня тижня (від 1 до 7). Визначити який буде день тижня через N днів.

document.querySelector('.click_button14').addEventListener('click', getDayNumb)
function getDayNumb() {
  const SEPARATOR = 7.1
  // отримуємо номер і N
  const getDays = parseInt(document.querySelector('.dayNumb').value) | 0
  const getN = parseInt(document.querySelector('.getN').value) | 0

  const dayCount = Math.ceil((getDays + getN) % SEPARATOR)

  document.querySelector('.result14').innerHTML = `
    <p>День тижня через N днів: <strong>${dayCount}</strong> </p>
  `
}

//  ==================  Задача 15  ===============================
//З клавіатури вводиться кількість місяців, які пройшли від деякого моменту часу. Вивести повну кількість років і місяців. Наприклад, дано 28 місяців, а вивести 2 роки і 4 місяці.
document.querySelector('.click_button15').addEventListener('click', getYears)

function getYears() {
  SEPARATOR = 12
  const getMonts = parseInt(document.querySelector('.task15GetMonts').value) | 0
  const years = Math.floor(getMonts / SEPARATOR)
  const monthsLeft = getMonts % SEPARATOR

  document.querySelector('.result15').innerHTML = `
    <p>Дано ${getMonts} місяців, що становить ${years}  роки(ів) і ${monthsLeft}  місяці(в)</p>
  `
}

//  ==================  Задача 16  ===============================
// З клавіатури вводиться номер місяця. Визначити, який буде місяць через вказану кількість N місяців.
document
  .querySelector('.click_button16')
  .addEventListener('click', getMonthNumber)

function getMonthNumber() {
  const SEPARATOR = 12.1
  const getNumberMonth =
    parseInt(document.querySelector('.getNumberMonth').value) | 0
  const NValue = parseInt(document.querySelector('.getNMohth').value) | 0
  const NumbOfMonth = Math.ceil((getNumberMonth + NValue) % SEPARATOR)

  document.querySelector('.result16').innerHTML = `
    <p>Через N місяців буде ${NumbOfMonth} місяць</p>
  `
}

//  ==================  Задача 17  ===============================
// Зашифрувати один введений англійський символ у верхньому регістрі (один з символів: A,B,…Z)  методом зміщення (шифр Цезаря).
document
  .querySelector('.click_button17')
  .addEventListener('click', getNumbOfLetter)

function getNumbOfLetter() {
  const SEPARATOR = 26 // кількість букв в латин алфавіті
  // код літери А в юнікод 0
  const startIndexA = 65
  // отримуємо літеру
  const getLetter = document.querySelector('.getLetter').value.toUpperCase()
  // отримуємо індекс зміщення
  const getOffsetNumb =
    parseInt(document.querySelector('.getOffsetNumb').value) | 0
  // перетворюємо значення літери в Юнікод
  const unicodeGetLetter = getLetter.charCodeAt()
  // додаємо на скільки зміщуємо індекс
  const unicodeSearchLetter = unicodeGetLetter + getOffsetNumb
  // від нового індекса віднімаємо 65 і отримуємо залишок від ділення на 26 (к-сть літер в алфавіті)
  // в результаті отримуємо число від 0 до 25
  const getNewIndex = Math.ceil((unicodeSearchLetter - startIndexA) % SEPARATOR)
  // додаємо до нового індекса (від 0 до 25) стартовий індекс
  // і повертаємо нову літеру (шифровану)
  const returnNewLetter = String.fromCharCode(getNewIndex + startIndexA)

  document.querySelector('.result17').innerHTML = `
    Літера ${getLetter} із зміщенням ${getOffsetNumb}  буде літерою ${returnNewLetter}.
  `
}
