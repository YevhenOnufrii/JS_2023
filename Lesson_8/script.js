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
  console.log('🚀 ~ file: script.js:223 ~ achievementAnalysis ~ averageGrade:', averageGrade)
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
