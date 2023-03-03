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

;['Іван', 'Василь', 'Юра', 'Микола', 'Іван', 'Іван']
