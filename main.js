import './public/css/output.css';
import { confirmation, home, location, validate, footer, slider, info, createButton } from './components';
import { wave } from './public/img/svg/index';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import {play} from './public/js/play'

const names = ['Clara', 'Humberto'];
const date = '02/02/2024';
const account = `Banco:
  Itau

  Número de cuenta: 
  220212902

  Nombre:
  Humberto Rotela

  CI:
  3172092
  `

const linksObj = {
  yes: 'https://wa.link/duxx8x',
  no: 'https://wa.link/14owqy'
};

function numX() {
  const urlParams = new URLSearchParams(window.location.search);
  const xParam = urlParams.get('x');
  const xNumber = parseInt(xParam);
  return isNaN(xNumber) || xNumber <= 0 ? 1 : xNumber;
}

document.querySelector('#app').innerHTML = `
  <div class="m-0 h-screen">
    ${home(names, date)}

    ${location({
      type: 1,
      photo:'/img/ceremonia.png',
      title: 'Ceremonia',
      text: `La ceremonia se realizará el
      **02 de Febrero a las 19:30** horas
      en la **Iglesia Sagrada Familia**.`,
      link: 'https://maps.app.goo.gl/sa2vbz9fKfdF8hyF6'
    })}

    ${location({
      type: 2,
      photo:'/img/fiesta.png',
      title: 'Fiesta',
      text: `Después de la ceremonia
      celebraremos en **Kampay Eventos.**`,
      link: 'https://maps.app.goo.gl/caJuRxFjX5jZMc4X9'
    })}

    <div class=" relative lg:-translate-y-12 -z-10">
      ${wave()}
    </div>

    ${slider({
      imgs:[
        '/img/pic1.jpeg',
        '/img/pic2.jpeg',
        '/img/pic3.jpeg',
        '/img/pic4.jpeg',
        '/img/pic5.jpeg'
      ]})}
    

    ${info(account)}

    ${confirmation(linksObj)}

    ${validate(numX())}

    ${footer()}

    </div>
`;

createButton('account', account)

new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

play('./public/music.mp3', 0.5)