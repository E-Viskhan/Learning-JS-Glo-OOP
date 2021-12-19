const DomElement = function (selector, height, width, bg, position) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.position = position;

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
      position: ${position}
    `;

    document.body.insertAdjacentElement('beforeend', elem);
  };

};


document.addEventListener('DOMContentLoaded', () => {
  const element = new DomElement('.block', '100px', '100px', 'black', 'absolute');
  element.createElement();

  const block = document.querySelector('.block');
  block.style.transition = 'all 500ms ease';

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      block.style.left = block.style.left.length ? Number.parseInt(block.style.left) - 10 + 'px' : '-10px';
    } else if (event.key === 'ArrowRight') {
      block.style.left = block.style.left.length ? Number.parseInt(block.style.left) + 10 + 'px' : '10px';
    } else if (event.key === 'ArrowUp') {
      block.style.top = block.style.top.length ? Number.parseInt(block.style.top) - 10 + 'px' : '-10px';
    } else if (event.key === 'ArrowDown') {
      block.style.top = block.style.top.length ? Number.parseInt(block.style.top) + 10 + 'px' : '10px';
    }
  });
});