/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...

  if (name === null || name === '' || name.length < 4) {
    console.log('поле пустое или содержит меньше 4 символов');
    return false;
  }



  for (let i = 0; i < name.length; i++) {
    if (name[i] == ' ') {
      console.log('Поле имеет пробелы');
      return false;
    }

  }
  return true;

}
function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
