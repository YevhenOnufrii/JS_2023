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
