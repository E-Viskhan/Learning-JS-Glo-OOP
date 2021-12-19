class First {
  static hello() {
    console.log('Привет, я метод родителя!');
  }
}

class Second extends First {
  static hello() {
    super.hello();
    console.log('А я наследуемый метод');
  }
}

// static сделал, чтобы просто не создавать экземпляр класса second
Second.hello();