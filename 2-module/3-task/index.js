// У this 4 вида функционала:
//1) обращение к свойствам своего объекта(внутри которого 
// была создана вызывающая this функция),т.е у объекта есть свойства
//и с помощью this они(свойства объекта) внутри себя могут вызывать друг друга,
//т.е например вместо this.a можно вообразить calculator.а
// let calculator = {
//   a:0,
//  read(a) {
//     this.a = prompt('введите a', 0);
// Для того, чтобы изменять this.a в одном методе 
// результатом воcпользоваться в другом
//   a:2,
//  read(a,b) {
//   this.a = b;
//   console.log(this.a);

//  },
//  sum(b) {
//    console.log(this.a);
//    return this.a + b;
//  },
//  calculator.read(7, undefined); здесь изменили this.a
//  calculator.sum(3); а здесь используем изменную this.a
//     



let calculator = {
  read(a, b) {
    this.a = +a;
    this.b = +b;
    if (isFinite(this.a) && isFinite(this.b)) {

    }
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
