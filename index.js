document.querySelector('#cup').addEventListener('click', onItemClick);
document.querySelector('#cap').addEventListener('click', onItemClick);
document.querySelector('#ribbon').addEventListener('click', onItemClick);

function onItemClick(evt) {
  var modalContent = document.getElementById('modal-body');
  modalContent.innerHTML = '';
  goods[evt.currentTarget.dataset.type].forEach(function(good) {
    var goodElement = createElWithClass('div', 'good');
    var imgElement = createElWithClass('img', 'good-img');
    var priceElement = createElWithClass('div', 'good-price');

    imgElement.setAttribute('src', 'img/' + good.src);
    priceElement.innerHTML = good.price + ' р.'

    goodElement.appendChild(imgElement);
    goodElement.appendChild(priceElement);

    modalContent.appendChild(goodElement);
  });
  if (window.modal) {
    window.modal.show();
  } else {
    window.modal = new Modal({
      el: document.getElementById('static-modal'),
      footer: '<button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>'
    }).show();
  }
}

var goods = {
  cups: [{
    price: 300,
    src: 'cup_red.jpg'
  },{
    price: 300,
    src: 'cup_yellow.jpg'
  },{
    price: 300,
    src: 'cup_blue.jpg'
  }],
  caps: [{
    price: 1000,
    src: 'cap_black_blue.jpg'
  },{
    price: 1000,
    src: 'cap_black_red.jpg'
  },{
    price: 1000,
    src: 'cap_black_yellow.jpg'
  },{
    price: 1000,
    src: 'cap_red.jpg'
  },{
    price: 1000,
    src: 'cap_white.jpg'
  }],
  ribbons: [{
    price: 100,
    src: 'ribbon_blue.jpg'
  },{
    price: 100,
    src: 'ribbon_red.jpg'
  },{
    price: 100,
    src: 'ribbon_yellow.jpg'
  }]
};

function createElWithClass(type, className) {
  var el = document.createElement(type);
  el.classList.add(className);
  return el;
}
