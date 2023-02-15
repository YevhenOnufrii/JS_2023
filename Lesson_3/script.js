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
