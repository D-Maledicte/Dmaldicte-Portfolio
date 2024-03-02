import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    greeting: ['¡Welcome!', 'Centering Divs', 'Booting up ChatGPT', 'Pouring some coffee', 'Something went wrong, this landing is lit'],
    greeting2: 'Are u in a rush? Click here',
    comingSoon: 'Coming Soon',
    webName: 'DMaledicte Portfolio',
    navBar: ['Home','About me','Projects','Contact'],
    stickyTooltip: ['LinkedIn Profile', 'Github Repository', 'Send me a mail'],
    emailReference: 'You can write me to:',
    copyright: 'All rights reserved 2024',
    resumee: 'Resumee downloaded',
    resumeeGreeting: 'Thank you for your interest on my profile',
    resumeeButton: 'Download my resumee',
    homeView: {
      aboutMe: 'About',
      learnMore: 'Learn More',
      parrafo1: 'Hello! My name is Matias Martel also known as DMaledicte.',
      parrafo2: `I'm self taught Front End Developer living in Buenos Aires, Argentina.
      I specialize in digital solutions to process automatization, with a keen eye on the details and user experience`,
      parrafo3: `As part of freelance projects, I've designed user-oriented custom components
      and I also develop workflow rules and integrations on ZohoCRM's ecosystem.`,
      projects: 'Projects',
      skills: 'Skills',
      mainprojects: ['Table designed with Quasar Framework with advanced filtering and nesting, used in a portfolio management project for insurance producers.', "WebApp for EA FC's FUT Champions game mode oriented to track user's score and rewards and their average value"],
      softSkills: ['Logical Reasoning', 'Selft Taught', 'Analitical', 'Communicative', 'Adaptability', 'C1 English Certified']
    },
    contactView: {
      legend: 'Media',
      text: 'You can write me here or contact me by any of my social media',
      mail: 'Email',
      mailPlaceholder: 'youremail@mail.com',
      name: 'Name',
      textAreaPlaceholder: 'Your message',
      submit: 'Submit'
    }
    // más traducciones en inglés
  },
  es: {
    greeting: ['¡Hola!', 'Centrando Divs', 'Logueando en ChatGPT', 'Sirviendo el café', 'Algo salio mal, nunca habia llegado tan lejos'],
    greeting2: 'Tienes apuro? Clickea aquí',
    comingSoon: 'En construccion',
    webName: 'Portafolio de DMaledicte',
    navBar: ['Inicio','Sobre mí','Proyectos','Contacto'],
    stickyTooltip: ['Perfil de LinkedIn', 'Repositorio de Github', 'Enviame un mail'],
    emailReference: 'Puedes escribirme a:',
    copyright: 'Todos los derechos reservados 2024',
    resumee: 'CV Descargado',
    resumeeGreeting: 'Muchas gracias por tu atención en mi perfil!',
    resumeeButton: 'Descarga mi cv aquí',
    homeView: {
      aboutMe: 'Sobre Mí',
      learnMore: 'Conoce mas',
      parrafo1: 'Hola! Mi nombre es Matías Martel tambien conocido como DMaledicte.',
      parrafo2: `Soy un desarrollador Front-end autodidacta residiendo en Buenos Aires, Argentina.
      Me especializo en desarrollar soluciones tecnologicas orientadas a la automatizacion de procesos, con foco en el detalle
      y la experiencia del usuario.`,
      parrafo3: `Vengo desarrollando mi perfil desde hace dos años, participando activamente en proyectos freelance donde he diseñado componentes customizados
      a la necesidad del usuario asi como paquetes de funciones y reglas de flujo de trabajo en el ecosistema de ZohoCRM.`,
      projects: 'Proyectos',
      skills: 'Habilidades',
      mainprojects: ['Tabla diseñada con Quasar Framework con filtrado avanzado y anidamiento, utilizada en un proyecto de gestion de cartera para productores de seguros.', "WebApp para el modo de juego de FUT Champions de EA FC orientada a realizar un seguimiento del score del usuario y sus recompensas"],
      softSkills: ['Razonamiento Logico', 'Autodidacta', 'Analitico', 'Comunicativo', 'Flexibilidad', 'Inglés C1 certficado']
    },
    contactView: {
      legend: 'Redes',
      text: 'Puedes escribirme por mail o contactarte por alguna de mis redes.',
      mail: 'Mail',
      mailPlaceholder: 'tucorreo@mail.com',
      name: 'Nombre',
      textAreaPlaceholder: 'Motivo de la consulta',
      submit: 'Enviar'
    }
    // más traducciones en español
  }
};

const i18n = createI18n({
  legacy: false,
  locale: 'es', // idioma predeterminado
  fallbackLocale: 'en',
  messages,
});

export default i18n;