const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function createElement() {
    let elem;

    if (this.selector[0] === '.') {
      elem = document.createElement('div');
      elem.classList.add(selector.slice(1));
    } else if (this.selector[0] === '#') {
      elem = document.createElement('p');
      elem.setAttribute('id', selector.slice(1));
    }

    elem.style.cssText = `height: ${height};
      width: ${width};
      background-color: ${bg};
      font-size: ${fontSize}
    `;

    elem.textContent = 'Далеко - далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.';

    document.body.insertAdjacentElement('beforeend', elem);
  };

};

const element = new DomElement('.block', '100px', '300px', 'lightblue', '16px');
const elementTwo = new DomElement('#two', '70px', '300px', 'lightblue', '16px');

element.createElement();
elementTwo.createElement();