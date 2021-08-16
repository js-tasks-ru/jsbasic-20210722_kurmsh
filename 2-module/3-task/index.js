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
