import './sass/main.scss';
import debounce from 'lodash.debounce';
// import one from './js/partOne.js';
// import two from './js/partTwo.js';

let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
console.log('close_modal: ', close_modal);
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
let modalText = document.querySelector('.modal_txt');

for (let i = 0; i < open_modal.length; i++) {
  open_modal[i].addEventListener('click', debounce(openModalWindow, 2000)); // клик на открытие
}
close_modal.addEventListener('click', closeModalWindow); // клик на закрытие

function closeModalWindow() {
  modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
  window.setTimeout(function () {
    // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
    modal.classList.remove('modal_vis');
    body.classList.remove('body_block'); // возвращаем прокрутку
  }, 500);
}

function openModalWindow() {
  modal.classList.add('modal_vis'); // добавляем видимость окна
  modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
  body.classList.add('body_block'); // убираем прокрутку
  modalText.innerHTML =
    '<p>Ну что, понравился сайт!? Хочешь научиться такому же!? Тогда записывайся на курсы в GoIT!</p><img class="modal-photo-start" src="https://media-exp1.licdn.com/dms/image/C4E1BAQElgL_zhMGCEg/company-background_10000/0/1613065667402?e=1624035600&v=beta&t=_D4uuM5B1sXgVGqcBz-3gGu_SLivljrOOohBR63VThU">';
}

body.addEventListener('click', debounce(openModalWindowWithTimer, 2000));

let counter = 0;
let enteredName = '';
let text = '';

function openModalWindowWithTimer(e) {
  const target = e.target;
  if (target === close_modal) {
    counter += 1;
    if (enteredName.trim().length >= 2) {
      return;
    }
    if (counter === 1) {
      text =
        '<p class="modal-first-paragraph">Смелее! Создай свою историю успеха! Быстрее записывайся на курсы GoIT! Если тебе не нравиться FrontEnd, можно выбрать другую сферу деятельности на любой вкус.</p><label class="modal-first-paragraph" for="name">Я даже могу тебе помочь. Введи своё имя:</label><input type="text" id="name" name="name" size="20"><button class="modal-button" type="submit">Отправить</button>';
      openModalWindowSecond(text);
      const modalInput = document.querySelector('#name');
      console.log('modalInput: ', modalInput);
      modalInput.addEventListener('input', queryName);
      const buttonModal = document.querySelector('.modal-button');
      console.log('buttonModal: ', buttonModal);
      buttonModal.addEventListener('click', renderModal);
    } else if (counter > 1) {
      text =
        '<p class="modal-first-paragraph">Я решительно настроен тебе помочь. И не успокоюсь, пока ты не отправишь данные своего имени</p><label for="name">Укажи имя в этом поле:</label><input type="text" id="name" name="name" size="20"><button class="modal-button" type="submit">Отправить</button>';
      openModalWindowSecond(text);
      const modalInput = document.querySelector('#name');
      console.log('modalInput: ', modalInput);
      modalInput.addEventListener('input', queryName);
      const buttonModal = document.querySelector('.modal-button');
      console.log('buttonModal: ', buttonModal);
      buttonModal.addEventListener('click', renderModal);
    }
  }
}

function queryName(e) {
  enteredName = e.target.value;
  return enteredName;
}

function renderModal() {
  if (enteredName.trim().length >= 2) {
    close_modal.removeEventListener('click', closeModalWindow);
    setTimeout(renderOk, 500);
    setTimeout(renderComp, 3000);
    setTimeout(renderPhoto, 7000);
    setTimeout(renderText, 11000);
    setTimeout(addApology, 13000);
    setTimeout(close_modal.addEventListener('click', closeModalWindow), 14500);
    counter = 0;
    // enteredName = '';
  } else if (enteredName.trim() === '') {
    text =
      '<p class="modal-first-paragraph">Хорошая попытка, но я не отстану, пока Вы не введёте своё имя...</p><label for="name">Имя нужно указать здесь:</label><input type="text" id="name" name="name" size="20"><button class="modal-button" type="submit">Отправить</button>';
    openModalWindowSecond(text);
    const modalInput = document.querySelector('#name');
    console.log('modalInput: ', modalInput);
    modalInput.addEventListener('input', queryName);
    const buttonModal = document.querySelector('.modal-button');
    console.log('buttonModal: ', buttonModal);
    buttonModal.addEventListener('click', renderModal);
  } else if (enteredName.trim().length === 1) {
    text =
      '<p class = "modal-first-paragraph">Не думаю, что Ваше имя состоит с одного символа )))</p><label for="name">Имя нужно указать здесь:</label><input type="text" id="name" name="name" size="20"><button class="modal-button" type="submit">Отправить</button>';
    openModalWindowSecond(text);
    const modalInput = document.querySelector('#name');
    console.log('modalInput: ', modalInput);
    modalInput.addEventListener('input', queryName);
    const buttonModal = document.querySelector('.modal-button');
    console.log('buttonModal: ', buttonModal);
    buttonModal.addEventListener('click', renderModal);
  }
}

function openModalWindowSecond(text) {
  modal.classList.add('modal_vis'); // добавляем видимость окна
  modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
  body.classList.add('body_block'); // убираем прокрутку
  modalText.innerHTML = text;
}

function renderOk() {
  modalText.innerHTML = '<p>Сейчас проверим, настоящее Вы ввели имя или нет...</p>';
}

function renderComp() {
  modalText.innerHTML =
    '<p>На самом деле я только что получил доступ к Вашему компьютеру. Ищу данные банковской карты...</p>';
}

function renderPhoto() {
  modalText.innerHTML =
    '<p>Вау! Тут ещё и фотки есть! Сейчас посмотрим. Так-так-так, и что тут интересного...</p>';
}

function renderText() {
  modalText.innerHTML =
    '<p>Результат определения личности по фотографии:</p><img class="modal-photo" src="https://scontent.fiev19-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/60248006_2181999468521956_492403444842233856_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7aed08&efg=eyJpIjoidCJ9&_nc_ohc=cyGLcmoKX9IAX-VMeW1&_nc_ht=scontent.fiev19-1.fna&tp=14&oh=784a4bdad518cce57586510f8d7871a7&oe=60CFDD36">';
}

function addApology() {
  modalText.insertAdjacentHTML(
    'beforeend',
    '<p>Ой, Алёна, это Вы!? Извините, я Вас сразу не узнал... Можете закрывать надоедалку, она больше не появится. Надеюсь, эта маленькая шутка не повлияет на общее впечатление от нашей работы? )))</p>',
  );
}
