import './sass/main.scss';
import debounce from 'lodash.debounce';
// import one from './js/partOne.js';
// import two from './js/partTwo.js';

let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
let modalText = document.querySelector('.modal_txt');

for (let i = 0; i < open_modal.length; i++) {
  open_modal[i].onclick = openModalWindow; // клик на открытие
}
close_modal.onclick = function () {
  // клик на закрытие
  modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
  window.setTimeout(function () {
    // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
    modal.classList.remove('modal_vis');
    body.classList.remove('body_block'); // возвращаем прокрутку
  }, 500);
  console.log('закрылось окно');
};

function openModalWindow() {
  modal.classList.add('modal_vis'); // добавляем видимость окна
  modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
  body.classList.add('body_block'); // убираем прокрутку
}

body.addEventListener('click', debounce(openModalWindowWithTimer, 2000));

let counter = 0;

function openModalWindowWithTimer(e) {
  const target = e.target;
  let text = '';
  if (target === close_modal) {
    counter += 1;
    if (counter === 1) {
      console.log('counter: ', counter);
      text =
        'Смелее! Создай свою историю успеха! Быстрее записывайся на курсы GoIT! Если тебе не нравиться FrontEnd, там тебя научат и другим технологиям!';
      openModalWindowSecond(text);
      console.log('text');
    } else if (counter === 2) {
      console.log('counter: ', counter);
      text =
        'Подождите, запускаем сканирование лица с помощью фронтальной камеры Вашего устройства.....';
      openModalWindowSecond(text);
      setTimeout(renderText, 2000);
      setTimeout(addApology, 3500);
      console.log('text');
    } else if (counter > 2) {
      return;
    }
  }
}

function openModalWindowSecond(text) {
  modal.classList.add('modal_vis'); // добавляем видимость окна
  modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
  body.classList.add('body_block'); // убираем прокрутку
  modalText.innerHTML = text;
  console.log('text: ', text);
}

function renderText() {
  modalText.innerHTML =
    '<p>Результат сканирования<p><img width="189" height="255" src="https://ca.slack-edge.com/T01PL3ECBSM-U025D9SBDRA-7d6de8f45f91-512">';
}

function addApology() {
  modalText.insertAdjacentHTML(
    'beforeend',
    '<p>Ой, Алёна, это Вы!? Извините, мы Вас сразу не узнали... Можете закрывать pop-up, оно больше не появится. Надеюсь эта маленькая шутка не повлияет на общее впечатление от нашей работы? )))<p>',
  );
}
