# Задачник для курса "JavaScript/DOM/Интерфейсы" для новичков

Включает в себя задачи для тренировки и учебный проект.
У this 4 вида функционала:

1. обращение к свойствам своего объекта(внутри которого
   была создана вызывающая this функция),т.е у объекта есть свойства
   и с помощью this они(свойства объекта) внутри себя могут вызывать друг друга,
   т.е например вместо this.a можно вообразить calculator.а

```javascript
let calculator = {
  a:0,
 read(a) {
    this.a = prompt('введите a', 0);
```

Для того, чтобы изменять this.a в одном методе
результатом воcпользоваться в другом

```javascript
  a:2,
 read(a,b) {
  this.a = b;
  console.log(this.a);

 },
 sum(b) {
   console.log(this.a);
  return this.a + b;
 },
 calculator.read(7, undefined); здесь изменили this.a
 calculator.sum(3); а здесь используем изменную this.a
```

# Переменные нужны для уменьшения кода и для читабельности кода.

плохо читаемый код:

```javascript
namify(
  users.map(function (users) {
    return users.name;
  })
);
```

хорооший код:

```javascript
let usersName = users.map(function (users) {
  return users.name;
});
console.log(usersName);
```

# Функции

Сигнатура функции - формальное описание типов аргументов и типа возвращаемого значения функции.

```javascript
function имя функции(параметры):возвращаемый тип //иногда ни чего функция не возвращает, тогда viod
function nameFunction(parametrs): return type // viod
```

# стиль написания кода

коментарии которые отвечают на вопрос,что делает код,а не почему он сто то делает, console.log или любой другой инструмент для разработки,должен удаляться из кода до pull/merge request

```js
function showSalary(users, age) {
 let filtered = users//иницилизирую переменную
.filter((user) => user.age <= age)//обращаюсь к users и фильтрую массив
.map((user) =>user.name + ', ' + user.balance) //мапаю,возвращаю новый массив.
.join('\n');//привожу массив к строке,которую разделяю переносом
return filtered;//возвращаю итоговый результат
```

такой подход называтся цепочкой вызовов это один из элементов функционального програмирования.  
 Тоже самое только с помощью ООП.

```js
function showSalary(users, age) {
let filtered =users.filter((users) => {
  return users.age <= age;
});

let mapped = filtered.map((users) => {
  return users.name + ', ' + users.balance;
});

return mapped.join('\n');
};
метод filter,for:
funcion filter(_paramFunct, item, index, array ) {
let resultArray = [];
fuction predicat(item, index, array) {
  return _paramFunct(item, index, array);
}

for(let i = 0, i < array.length, i++) {
  if(predicat(item, index, array)) {
    resultArray.push(array[i]);
  }
}

returnt resultArray;
}
```
