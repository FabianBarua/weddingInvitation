import { locationIcon, yes, no, ig } from '../public/img/svg/index';
import Swal from 'sweetalert2'

export function home(names, date) {
  return `
    <section class="relative mb-5	 bg-fondo w-full h-[773px] bg-cover flex place-items-center flex-col justify-center text-bred gap-16">
      <p class="text-3xl font-judson font-bold">¡Nos casamos!</p>
      <p class="flex flex-col w-[302px] text-center text-8xl font-italianno leading-[40px]">${names[0]} <br>y <span class="mt-7">${names[1]}</span></p>
      <p class="text-white text-center font-judson font-normal text-3xl px-6 py-1 bg-bred rounded-xl">${date}</p>
      <p class="font-judson text-4xl text-bred bg-salmon w-full text-center absolute -bottom-5 py-6">¡Llegó el <strong>gran día!</strong></p>
    </section>`;
}

export function location({type, photo , title, text, link}) {
  
  if (type !== 1 && type !== 2) {

    throw new Error('El parámetro "type" debe ser 1 o 2. Type: ' + type );

  }

  type -=1

  const boldText = text.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');

  const colors = 
    [
      {color:'bred', bg:'bwhite', font:'black', iconFill: '#FFD8D4'},
      {color:'salmon', bg:'bred', font:'white', iconFill: '#9A2A2D'},
    ]

  return `
    <div class=" flex flex-col justify-center items-center h-[424px] bg-${colors[type].bg} text-${colors[type].font}">
      <img src="${photo}" class=" w-52 " >
      <h2 class=" font-italianno text-5xl  text-center" >${title}
        <div class=" w-40 h-[3px] bg-${colors[type].color}" ></div>
      </h2>
      <p class=" mt-2 whitespace-pre-line text-center font-montserrat text-base leading-5 font-${colors}">${boldText}</p>
      <a href="${link}" class=" mt-6 flex gap-2  bg-${colors[type].color} px-4 py-1 rounded-xl text-${colors[type].bg} font-montserrat font-bold" >
      Ver ubicación
      ${locationIcon(colors[type].iconFill)}
      </a>
    </div>
  `;
}

export function confirmation(links) {
  const linkYes = links && links.yes ? links.yes : '#'; 
  const linkNo = links && links.no ? links.no : '#'; 


  return `
    <section class=" mx-auto w-full px-10 h-60">
      <div class="bg-confirm w-full h-full rounded-3xl flex place-items-center justify-center flex-col text-3xl font-judson  gap-4  ">
        <h3 class=" whitespace-pre-line text-center text-bred  leading-6">Confirmar
        Asistencia</h3>
        <a href="${linkYes}" class=" flex bg-bred text-confirm  items-center gap-5 px-6  py-1 rounded-xl " > Si ${yes()} </a>
        <a href="${linkNo}" class=" flex bg-[#FFB5AE] text-bred  items-center gap-2 px-6  py-1 rounded-xl " > No ${no()} </a>
      </div>
    </section>`;
}

export function validate(num) {
  const text = num === 1 ? 'persona' : 'personas';
  const invitationText = `Invitación válida
  para <strong>${num} ${text}</strong>`;

  return `
    <section class="my-5 bg-bred w-full h-24 place-items-center flex justify-center">
      <p class="whitespace-pre-line text-2xl leading-5 font-judson text-center text-white">${invitationText}</p>
    </section>
  `;
}

export function footer() {
  return `
    <section class="my-5 bg-[#350000] w-full h-14  place-items-center flex justify-center font-judson text-white">
      <p class="flex text-sm leading-4 text-center items-center" > Invitación digital desarrollada por <a href="https://www.instagram.com/fabianbaruax/" class=" translate-y-[1px] ml-2 flex gap-1 justify-center items-center bg-bred px-2 rounded-full "> ${ig()} @fabianbaruax</a> </p>
    </section>
  `;
}



export function slider({ imgs }) {

  const sign = `      
  <div class=" z-10 w-full  absolute -bottom-3 " >

    <div class="w-64 mx-auto bg-bred rounded-3xl z-10 my-3 " >
      <p class=" px-6  py-2 whitespace-pre-line text-center font-judson text-white text-base leading-4 " >"Uno solo puede ser vencido
      pero <strong>dos pueden resistir.</strong>
      ¡La cuerda de tres hilos
      no se rompe fácilmente!."
      </p> 
    </div>

  </div>
  `

  const slides = imgs
    .map((imgSrc, index) => `
    <div class="swiper-slide  text-center text-lgflex justify-center items-center ">
      <div class=" w-full py-8 px-8 h-full" >
      <img class="block   rounded-3xl  w-full h-full object-cover" src="${imgSrc}" alt="Slide ${index + 1}">
      </div>
    </div>
    `)
    .join('');

  return `
    <div class="swiper w-full h-full mySwiper relative mb-3">

        ${sign}

      <div class="swiper-wrapper">
        ${slides}
      </div>

    </div>
  `;
}


export function createButton(parentId, account) {
  const button = document.createElement('button');
  button.textContent = 'Copiar!';
  button.classList.add('absolute', 'top-3', 'right-3', 'bg-bwhite', 'text-bred', 'px-2', 'py-1', 'rounded-md', 'active:translate-y-1', 'transition-all', 'ease-in', 'shadow-lg', 'active:bg-red-200');
  button.id = 'copy';

  button.addEventListener('click', () => {
    const textToCopy = account;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Cuenta copiada!",
        });

      })
      
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
  });

  const parentElement = document.getElementById(parentId);
  if (parentElement) {
    parentElement.appendChild(button);
  } else {
    console.error('Elemento padre no encontrado');
  }
}


export function info(account) {
  return `
  <section class=" my-8 text-center  text-3xl font-judson text-bred " >
  <p>Código de <strong>Vestimenta</strong></p>
  <p class=" font-bold text-xl text-white bg-bred px-3 py-1 leading-5 mt-3 w-min mx-auto rounded-full" >Elegante</p>
  
  <p class=" mt-6" >Regalo <strong>Sugerido</strong></p>
  <p class=" mt-2 leading-4 text-base whitespace-pre-line" >Tu presencia es el regalo más importante,
  ¡pero si te gustaría darnos un obsequio,
  te dejamos una opción!</p>
  <p id="account" class=" font-bold text-xl text-white bg-bred leading-4 mt-3 w-4/5 px-6 text-start mx-auto py-5 rounded-3xl whitespace-pre-line relative " >${account}</p>

  </section>
  `;
}