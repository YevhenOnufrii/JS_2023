/* Homework #8 */

// ==================== Task 1 ====================

// ? Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

function distribByPerformance() {
  //=== функція для отримання масиву оцінок
  function getUserData() {
    let arrayOfScores = []
    let userInputNum
    // цикл для отримання масиву оцінок
    do {
      // якщо userInputNum не false то в масив пушаться дані
      // на першій userInputNum === undefined тому нічого не запушиться
      userInputNum && arrayOfScores.push(userInputNum)
      userInputNum = parseInt(
        prompt(` Введіть оцінку:
      Для виходу натисніть ' СКАСУВАТИ ' `)
      )
      if (!isFinite(userInputNum)) userInputNum = false
    } while (userInputNum !== false)
    return arrayOfScores
  }
  const arrOfInputScores = getUserData()
  // ф-я для отримання середнього балу
  function getAverageScore(arrScores) {
    let sum = 0
    for (let i = 0; i < arrScores.length; i++) {
      sum += arrScores[i]
    }
    const average = Math.round((sum / arrScores.length) * 100) / 100
    return average
  }
  const averageGrade = getAverageScore(arrOfInputScores)
  // ф-я для отримання найменшого числа із масиву
  function getMinScore(arrScores) {
    let min = Infinity
    for (let i = 0; i < arrScores.length; i++) {
      arrScores[i] < min && (min = arrScores[i])
    }
    return min
  }
  const minGrade = getMinScore(arrOfInputScores)
  // ф-я для отримання статусу учня
  function getUserStatus(value) {
    switch (value) {
      case 2:
        return 'двієчник'
      case 3:
        return 'трієчник'
      case 4:
        return 'хорошист'
      case 5:
        return 'відмінник'
      default:
        return 'статус не встановлено'
    }
  }
  // вивід результату
  document.getElementById('res1').innerHTML = `
  1. Введені оцінки: ${arrOfInputScores.join(', ')} <br>
  2. Середнє значення: ${averageGrade} <br>
  3. 'Статус' => ${getUserStatus(minGrade)}
  `
}

// ==================== Task 2 ====================

// ? Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

function storeTraffic() {
  const testArr1 = [10, 15, 21, 28, 14, 35, 23]
  // const testArr2 = [16, 13, 35, 23, 11, 7, 13]

  function getDayNumVisitorsLessThan20(arr) {
    let dayNum = []
    for (let i = 0; i < arr.length; i++) {
      arr[i] < 20 && dayNum.push(i + 1)
    }
    return dayNum
  }
  // функція повертає номер дня з найменшою кількістю відвідувачів
  function getDayWithMinVisitors(arr) {
    let min = Infinity
    for (let i = 0; i < arr.length; i++) {
      arr[i] < min && (min = arr[i])
    }
    let dayNum = []
    for (let i = 0; i < arr.length; i++) {
      arr[i] === min && dayNum.push(i + 1) // +1 так як "і" почин. з нуля
    }
    return dayNum
  }
  // функція повертає номер дня з найбільшою кількістю відвідувачів
  function getDayWithMaxVisitors(arr) {
    let max = -Infinity
    for (let i = 0; i < arr.length; i++) {
      arr[i] > max && (max = arr[i])
    }
    let dayNum = []
    for (let i = 0; i < arr.length; i++) {
      arr[i] === max && dayNum.push(i + 1)
    }
    return dayNum
  }
  // загальну кількість клієнтів у робочі дні та окремо загальну кількість на вихідних.
  function getVisitorsInWorkingDays(arr) {
    let totalVisitors = 0
    // -2 вихідні дні
    for (let i = 1; i <= arr.length - 2; i++) {
      totalVisitors += arr[i]
    }
    return totalVisitors
  }
  function getVisitorsInWeekend(arr) {
    let totalVisitors = 0
    // -2 вихідні днів
    for (let i = 6; i >= arr.length - 2; i--) {
      totalVisitors += arr[i]
    }
    return totalVisitors
  }
  // вивід результатів
  document.getElementById('res2').innerHTML = `
  1. Номери днів з кі-стю відвідувачів менше 20 = ${getDayNumVisitorsLessThan20(testArr1).join(
    ', '
  )} <br>
  2. Номери днів з найменшою к-стю відвідувачів:  ${getDayWithMinVisitors(testArr1)} <br>
  3. Номери днів з найбільшою к-стю відвідувачів:  ${getDayWithMaxVisitors(testArr1)} <br>
  4. Відвідувачів в робочі дні ${getVisitorsInWorkingDays(
    testArr1
  )}. <br> Відвідувачів у вихідні дні ${getVisitorsInWeekend(testArr1)}
  `
}

// ==================== Task 3 ====================

// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
function countNameIvanRepeat() {
  const testArr = ['Іван', 'Василь', 'Юра', 'Микола', 'Іван', 'Іван']
  function getNameRepeatNum(namesList, name) {
    let nameCount = 0
    for (let i = 0; i < namesList.length; i++) {
      namesList[i] === name && nameCount++
    }
    return nameCount
  }
  document.getElementById('res3').innerHTML = `
  Ім‘я "Іван" зустрічається ${getNameRepeatNum(testArr, 'Іван')} разів 
  `
}

// ==================== Task 4 ====================
/*  Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
•	починаються на букву «А»;
•	перша і остання літери співпадають;
•	складаються з більше ніш 5 символів; */

function carPlates() {
  const testArr = ['AO3456OA', 'AB3456OA', 'AC3456OA', 'BC3456AA', 'AA3456AA', 'BC3456AX']
  // •	починаються на букву «А»
  function getFirstCharRepeatNum(listPlates, letter) {
    let repeatCount = 0
    for (let i = 0; i < listPlates.length; i++) {
      listPlates[i][0] === letter && repeatCount++
    }
    return repeatCount
  }
  // перша і остання літери співпадають;
  function firstAndLastSameCount(list) {
    let sameCount = 0
    for (let i = 0; i < list.length; i++) {
      list[i][0] === list[i][list[i].length - 1] && sameCount++
    }
    return sameCount
  }
  // складаються з більше ніш 5 символів
  function getMoreThanFiveSymbolsNum(listPlates) {
    let counter = 0
    for (let i = 0; i < listPlates.length; i++) {
      listPlates[i].length > 5 && counter++
    }
    return counter
  }
  document.getElementById('res4').innerHTML = `
  1. Починаються на букву «А»: ${getFirstCharRepeatNum(testArr, 'A')} <br>
  2. Перша і остання літери співпадають ${firstAndLastSameCount(testArr)} <br>
  3. складаються з більше ніш 5 символів ${getMoreThanFiveSymbolsNum(testArr)}
  `
}

// ==================== Task 5 ====================

// Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

function achievementAnalysis() {
  const testArr = [2, 3, 4, 5, 3, 4, 5, 5, 2, 4, 2, 3, 4, 5, 5, 4, 3]
  // ф-я рахує кількість повторень заданого числа в масиві
  function getNumbRepeatCont(gradeList, num) {
    let counter = 0
    for (let i = 0; i < gradeList.length; i++) {
      gradeList[i] === num && counter++
    }
    return counter
  }
  // середнє значення
  function getAverageGrade(gradeList) {
    let sum = 0
    for (let i = 0; i < gradeList.length; i++) {
      sum += gradeList[i]
    }
    const average = Math.round((sum / gradeList.length) * 100) / 100
    return average
  }
  const averageGrade = getAverageGrade(testArr)
  // кількість оцінок, які нижче середнього.
  function gradesLessThanAverage(gradeList, average) {
    let counter = 0
    for (let i = 0; i < gradeList.length; i++) {
      gradeList[i] < average && counter++
    }
    return counter
  }
  // print result
  document.getElementById('res5').innerHTML = `
    1. Кількість двійок = ${getNumbRepeatCont(testArr, 2)} <br>
    2. Кількість хороших оцінок (добре, відмінно) = ${
      getNumbRepeatCont(testArr, 4) + getNumbRepeatCont(testArr, 5)
    } <br>
    3. Кількість оцінок, які нижче середнього = ${gradesLessThanAverage(testArr, averageGrade)}
  `
}

// ==================== Task 6 ====================

// Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).

function groceriesPurchasing() {
  const productsPrices = [1000, 800, 600, 300, 100]
  const productsTitles = ['cheese', 'juice', 'bread', 'butter', 'water']

  const userMoneyNum = parseFloat(document.getElementById('moneyVal').value)

  function getFilteredList(pricesList, productsList, cash) {
    let resultList = []
    // поки не закінчиться масив з цінами і результуючий масив пустий
    for (let i = 0; i < pricesList.length; i++) {
      if (cash >= pricesList[i]) {
        resultList.push(productsList[i])
      }
    }
    return resultList.length ? resultList : ['Недостатньо коштів']
  }

  document.getElementById('res6').innerHTML = `
    Доступні для купівлі: ${getFilteredList(productsPrices, productsTitles, userMoneyNum).join(
      ', '
    )}
  `
}

// ==================== Task 7 ====================

// Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

function Payments() {
  // test arr
  const yearPaymentsList = new Array(12).fill(null).map((it, i) => (it = 1000 + i + 1))
  // отримання суми за період

  function getSumPaymentsForPeriod(paymentsList, periodStart, periodEnd, step = 1) {
    let sum = 0
    // periodStart - 1 => так як місяці починають відлік з 1 а індексація масиву йде починаючи з 0
    for (let i = periodStart - 1; i < periodEnd; i += step) {
      sum += paymentsList[i]
    }
    return sum
  }

  document.getElementById('res7').innerHTML = `
  Сумарна кількість грошей за: <br>
  - за весь рік = ${getSumPaymentsForPeriod(yearPaymentsList, 1, 12)} <br>
  - у першій половині року = ${getSumPaymentsForPeriod(yearPaymentsList, 1, 6)} <br>
   - у другій половині року = ${getSumPaymentsForPeriod(yearPaymentsList, 7, 12)} <br>
  - за літо = ${getSumPaymentsForPeriod(yearPaymentsList, 6, 8)} <br>
  - за ІІ квартал = ${getSumPaymentsForPeriod(yearPaymentsList, 4, 6)} <br>
  - за парні місяці = ${getSumPaymentsForPeriod(yearPaymentsList, 2, 12, 2)} <br>
  - за місяці, які є початковими у сезоні = ${getSumPaymentsForPeriod(yearPaymentsList, 3, 12, 3)}
  `
}

// ==================== Task 8 ====================

// Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.

function someGame() {
  function generateRandomArr(min, max, arrLength) {
    let resultArr = []
    for (let i = 0; i < arrLength; i++) {
      let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
      resultArr.push(randomNum)
    }
    return resultArr
  }

  const randomArr = generateRandomArr(-500, 500, 10)

  function calculationResult(listRandNumbers) {
    let userInpIndex
    let sum = 0
    let userList = []
    do {
      if (userInpIndex) {
        // -1 бо індексація масиву з 0, а юзер вводить дані з 1 по 10
        sum += listRandNumbers[userInpIndex - 1]
        userList.push(listRandNumbers[userInpIndex - 1])
      }
      userInpIndex = parseInt(prompt('Введіть число від 1 до 10'))
      if (!isFinite(userInpIndex)) userInpIndex = false
    } while (userInpIndex !== false)
    return [sum, userList]
  }
  const [gameResult, listUserNumbers] = calculationResult(randomArr)

  document.getElementById('res8').innerHTML = `
  1. Ви набрали ${gameResult} балів. <br>
  2. Обрані елементи масиву ${listUserNumbers.join(',  ')}. <br>
  3. Рандомний масив: [${randomArr.join(',  ')}]
  `
}

// ==================== Task 9 ====================

//  Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.

function SeaBattle() {
  const gameSpace = parseInt(prompt('Введіть кількість клітинок одновимірного масиву:'))
  const gameUnits = parseInt(prompt('Введіть кількість однопалубних кораблів :'))

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  // розміщуємо кораблі в масиві
  function placingUnitsInGameSpace(listLength, amountUnits) {
    let gameArr = new Array(listLength)
    // заповнюємо нулями
    for (let i = 0; i < gameArr.length; i++) gameArr[i] = 0
    // рандомно вставляємо 1
    for (let i = 0; i < amountUnits; i++) {
      let randomIndex = getRandomNum(0, gameSpace - 1) // -1 через індексацію масива з 0
      // якщо позиція в масиві вже містить 1, то генеруємо новий рандомний індекс
      while (gameArr[randomIndex]) {
        randomIndex = getRandomNum(0, gameSpace - 1) // -1 через індексацію масива з 0
      }
      gameArr[randomIndex] = 1
    }
    return gameArr
  }
  // gameSpace - це довжина масиву, gameUnits - кількість одиниць які треба розмістити в масиві
  // gameArray - це в якому записується результат виконання ф-ції (масив) з рандомно розміщеними юнітами
  const gameArray = placingUnitsInGameSpace(gameSpace, gameUnits)
  // отримуємо кількість кораблів в масиві
  function getNumberOfUnitsInGameArray(gameList) {
    let unitsQuantity = 0
    for (let i = 0; i < gameList.length; i++) unitsQuantity += gameList[i]
    return unitsQuantity
  }

  let userAttempt = true
  let unitsQuantity = getNumberOfUnitsInGameArray(gameArray)
  while (unitsQuantity && userAttempt) {
    console.log(gameArray)
    userAttempt = parseInt(
      prompt(`Всього на полі ${unitsQuantity} кораблів.
      Введіть номер клітинки для пострілу 
      `)
    )
    if (isFinite(userAttempt) && userAttempt > 0 && userAttempt < gameArray.length) {
      // по юзерІндексу змінюємо масив з юнітами
      gameArray[userAttempt - 1] = 0 // -1 через індексацію масива
      unitsQuantity = getNumberOfUnitsInGameArray(gameArray) // отримуємо нову кількість юнітів
    }
    !isFinite(userAttempt) && (userAttempt = false)
  }
  document.getElementById('res9').innerHTML = unitsQuantity
    ? `Ви програли. Залишилось кораблів: ${unitsQuantity}`
    : 'Ви перемогли. Всі кораблі потоплені'
}
