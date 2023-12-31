import { locationIcon, yes, no, ig } from '../public/img/svg/index';

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