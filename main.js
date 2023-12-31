import './public/css/output.css';
import { confirmation, home, location, validate, footer } from './components';
import { wave } from './public/img/svg/index';

const names = ['Clara', 'Humberto'];
const date = '02/02/2024';

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
    
    ${confirmation(linksObj)}

    ${validate(numX())}

    ${footer()}

    </div>
`;
