// ================== Задача 1 ==================
// З клавіатури вводяться імена двох дітей та кількість у них
// цукерок. Вивести не екран ім’я тієї дитини, у якої кількість
// цукерок є більшою, або вивести, що кількість однакова.

document.querySelector('.button1').addEventListener('click', whoHasMore)

function whoHasMore() {
  //отримуємо дані від користувача
  const firstChildName = document.querySelector('.getFirstName').value
  const sweatsQuantityFirstChild =
    parseInt(document.querySelector('.getSweatsQuantityFirstChild').value) || 0
  const secondChildName = document.querySelector('.getSecondName').value
  const sweatsQuantitySecondChild =
    parseInt(document.querySelector('.getSweatsQuantitySecondChild').value) || 0

  // порівнюємо кількість цукерок і повертаємо результат
  // якщо кількість цукерок однакова
  if (sweatsQuantityFirstChild === sweatsQuantitySecondChild) {
    return (document.querySelector(
      '.result1'
    ).innerHTML = `В обох дітей однакова кількість цукерок`)
  }
  //визначаємо переможця
  const winner =
    sweatsQuantityFirstChild > sweatsQuantitySecondChild
      ? ` В дитини ${firstChildName} цукерок більше`
      : ` В дитини ${secondChildName} цукерок більше`

  // виводимо на сторінку
  document.querySelector('.result1').innerHTML = `${winner}`
  console.log(sweatsQuantityFirstChild)
}

// ================== Задача 2 ==================
// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

document.querySelector('.button2').addEventListener('click', balanceCalc)

function balanceCalc() {
  const lotteryTicketPrice = 4
  // отримуємо ціну товару або дефолтний 0
  const itemPrice = parseFloat(document.querySelector('.getPrice').value) || 0
  // отримуємо залишок грошей або дефолтний 0
  const cashBalance =
    parseFloat(document.querySelector('.getCashBalance').value) || 0

  // залишок на рахунку після покупки
  const leftover = cashBalance - itemPrice
  // якщо ціна більша за залишок грошей
  if (itemPrice > cashBalance) {
    return (document.querySelector('.result2').innerHTML = `
    Вартість товару ${itemPrice.toFixed(2)}, на рахунку ${cashBalance.toFixed(
      2
    )}. У покупці відмовлено, недостатнього коштів на рахунку
    `)
  }
  // якщо залишок грошей більше дорівнює 4
  if (leftover >= lotteryTicketPrice) {
    return (document.querySelector('.result2').innerHTML = `
    <span class="green-color-result"> Вартість товару ${itemPrice}, на рахунку ${cashBalance.toFixed(
      2
    )}. Покупка дозволена. Не бажаєте придбати лотерейний квиток?</span>
    `)
  }
  // якщо залишок грошей більше дорівнює ціні товару, але менше 4
  if (cashBalance >= itemPrice) {
    return (document.querySelector('.result2').innerHTML = `
    <span class="green-color-result"> Вартість товару ${itemPrice.toFixed(
      2
    )}, на рахунку ${cashBalance.toFixed(2)}. Покупка дозволена.</span>  
    `)
  }
}

// ================== Задача 3 ==================
// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

// формула рандомного числа min + Math.floor(Math.random() * (max - min + 1))

document.querySelector('.button3').addEventListener('click', guessNaumer)

function guessNaumer() {
  const MIN = 1
  const MAX = 5
  // отримуємо дані від користувача
  const attempt1 = parseInt(document.querySelector('.getAttempt1').value)
  const attempt2 = parseInt(document.querySelector('.getAttempt2').value)
  // генерація рандомного чмсла
  const randomNum = MIN + Math.floor(Math.random() * (MAX - MIN + 1))
  console.log(randomNum)
  // якщо перша або друга спроба успішні
  if (attempt1 === randomNum || attempt2 === randomNum) {
    return (document.querySelector('.result3').innerHTML = `
    <span class="green-color-result"> 
       Ви вгадали. Загадане число: ${randomNum}
    </span>
    `)
  }
  // інакше повертаємо інфо про невдачу
  return (document.querySelector('.result3').innerHTML = `
       Ви не вгадали. Загадане число: ${randomNum}
    `)
}
