document.querySelector('#ash').addEventListener('click', onItemClick);

function onItemClick(evt) {
  var modalContent = document.getElementById('modal-body');
  modalContent.innerHTML = '';
  if (evt.target.id === 'ash') {
    for (good in goods) {
      createCatalogFor(modalContent, good);
    }
  } else {
    createCatalogFor(modalContent, evt.target.dataset.type);
  }

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

var xsCatalog = document.getElementById('catalog');
if (!isHidden(xsCatalog)) {
  for (good in goods) {
    createCatalogFor(xsCatalog, good);
  }
}

function createCatalogFor(el, opt_type) {
  goods[opt_type].forEach(function(good) {
    var goodElement = createElWithClass('div', 'good');
    var imgElement = createElWithClass('img', 'good-img');
    var priceElement = createElWithClass('div', 'good-price');

    imgElement.setAttribute('src', 'img/' + good.src);
    priceElement.innerHTML = good.price + ' р.'

    goodElement.appendChild(imgElement);
    goodElement.appendChild(priceElement);

    el.appendChild(goodElement);
  });
}

function isHidden(el) {
  var style = window.getComputedStyle(el);
  return (style.display === 'none');
}

function createElWithClass(type, className) {
  var el = document.createElement(type);
  el.classList.add(className);
  return el;
}
