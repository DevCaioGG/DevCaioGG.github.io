// ----------  VARIABLES GLOBALES  ----------
let corazones = JSON.parse(localStorage.getItem('corazones') || '[]');
let musicaActiva = false;

// ----------  TERMINALES POR SALA  ----------
const terminalesPorSala = {
  2: [
    "> Inicializando sistema del museo...",
    "> Cargando memorias...",
    "> Conectando con el pasado...",
    "",
    "[✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶]",
    "",
    "  BIENVENIDA A NUESTRO MUSEO",
    "",
    "  Un espacio creado con mucho cariño",
    "  donde cada imagen cuenta nuestra historia.",
    "",
    "  Espero que te guste,",
    "  Te amo mi estrellita ⭐",
    "",
    "[✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶]",
    "",
    "> Sistema listo.",
    "> Acceso concedido."
  ],
  3: [
    "> Última parte del antigüo sistema cargándose...",
    "> Siempre hemos sido muy ACDC xd...",
    "",
    "[✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶]",
    "",
    ">  Cargando tik toks",
    "",
    ">  Bailes, trends y saltitos de rana.",
    "",
    "[✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶]",
    "",
    "> Sala lista."
  ],
  4: [
    "> Recuperando sistema amoroso perdido...",
    "> Sistema reconstruido con éxito.",
    "",
    "[✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶]",
    "",
    "  NUEVO TESTAMENTO CARGADO",
    "",
    "  Dejando atrás el pasado,",
    "  Seguimos escribiendo nuestra historia.",
    "",
    "[✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶✶]",
    "",
    "> Sala lista."
  ],
  5: [
    "> Inicializando: THE NEW BEGINNING...",
    "> Activando modo pareja oficial...",
    "",
    "[♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥]",
    "",
    "  WE'RE FINALLY TOGETHER",
    "",
    "  Cargado momentos inolvidables,",
    " regalos y pedidas de mano. jejejeje",
    "",
    "  Cargando...",
    "",
    "[♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥]",
    "",
    "> Sala lista."
  ],
  6: [
    "> Iniciando modo RAVE...",
    "> Sincronizando beats...",
    "> Activando luces neón...",
    "",
    "[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]",
    "",
    "  ⚡ RAVE MODE ACTIVATED ⚡",
    "",
    "  Bass boosted. Lights on.",
    "  Time to dance through memories.",
    "",
    "[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]",
    "",
    "> Sistema listo.",
    "> Let's rave!"
  ],
  7: [
  "> Chargement du système parisien...",
  "> Initialisation de l'amour...",
  "> Activation des lumières de la Tour Eiffel...",
  "",
  "[✶ ✶ ✶ 🗼 ✶ ✶ ✶ 🗼 ✶ ✶ ✶ 🗼 ✶ ✶ ✶]",
  "",
  "  BIENVENUE À PARIS",
  "",
  "  La Ville Lumière",
  "  La Ville de l'amour et rêves partagés",
  "",
  "  Cada calle, cada momento,",
  "  todo es más mágico contigo.",
  "",
  "[✶ ✶ ✶ 🗼 ✶ ✶ ✶ 🗼 ✶ ✶ ✶ 🗼 ✶ ✶ ✶]",
  "",
  "> Système prêt.",
  "> Je t'adore, ma petite étoile 🌟"
  
],
  8: [
  "> Chargement du système parisien...",
  "> Initialisation de l'amour...",
  "> Activation des lumières de la Tour Eiffel...",
  "",
  "[✶ ✶ ✶ 🗼 ✶ ✶ ✶ 🗼 ✶ ✶ ✶ 🗼 ✶ ✶ ✶ ]",
  "",
  "  BIENVENUE À PARIS",
  "",
  "  La Ville Lumière",
  "  La Ville de l'amour et rêves partagés",
  "",
  "  Cada calle, cada momento,",
  "  todo es más mágico contigo.",
  "",
  "[✶ ✶ ✶ 🗼 ✶ ✶ ✶ 🗼 ✶ ✶ ✶ 🗼 ✶ ✶ ✶ ]",
  "",
  "> Système prêt.",
  "> Je t'adore, ma petite étoile 🌟"
  ],
  9: [
    "> Finalizando...",
    "> O no?",
    "> Aun queda más por descubrir...",
    "",
    "[✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶]",
    "",
    "  De momento ha finalizado,",
    "",
    "  pero nuestra historia sigue,",
    "  y aún hay más por crear juntos.",
    "",
    "",
    "  ",
    "",
    "[✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶ ✶]",
    "",
    "> Apagando Sistema...",
    "> Te amo muito meu Dengo ⭐."
  ],
};

let lineaActual = 0;
let textoTerminalActual = terminalesPorSala[2]; // INICIALIZAR CON LA SALA 2
let intervaloActivo = null; // Para controlar intervalos

function escribirLinea(texto, delay = 0) {
  setTimeout(() => {
    const contenedor = document.getElementById('texto-terminal');
    if (!contenedor) return; // Verificar que existe

    const linea = document.createElement('div');
    linea.className = 'terminal-linea';
    linea.style.animationDelay = '0s';

    let caracterActual = 0;
    linea.textContent = '';
    contenedor.appendChild(linea);

    // Si la línea está vacía, pasar a la siguiente inmediatamente
    if (texto.length === 0) {
      lineaActual++;
      if (lineaActual < textoTerminalActual.length) {
        escribirLinea(textoTerminalActual[lineaActual], 100);
      } else {
        // Mostrar cursor final solo al terminar todo
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        linea.appendChild(cursor);
      }
      return;
    }

    // Limpiar intervalo anterior si existe
    if (intervaloActivo) {
      clearInterval(intervaloActivo);
    }

    intervaloActivo = setInterval(() => {
      if (caracterActual < texto.length) {
        linea.textContent += texto[caracterActual];
        caracterActual++;
      } else {
        clearInterval(intervaloActivo);
        intervaloActivo = null;
        lineaActual++;
        if (lineaActual < textoTerminalActual.length) {
          escribirLinea(textoTerminalActual[lineaActual], 100);
        } else {
          // Mostrar cursor final solo cuando terminan TODAS las líneas
          const cursor = document.createElement('span');
          cursor.className = 'cursor';
          linea.appendChild(cursor);
        }
      }
    }, 30);
  }, delay);
}

// Iniciar animación al cargar
window.addEventListener('load', () => {
  escribirLinea(textoTerminalActual[0], 500);
});

// ----------  SCROLL SUAVE AL MUSEO  ----------
function scrollAlMuseo() {
  const terminal = document.getElementById('terminal');
  const botonMusica = document.getElementById('musica');

  terminal.style.display = 'none';
  document.body.classList.remove('terminal-romantica', 'terminal-rave', 'terminal-paris');

  // Restaurar el botón de música al salir de la terminal
  const salaActiva = document.querySelector('.sala.activa');
  if (salaActiva && salaActiva.dataset.sala === '5') {
    botonMusica.style.background = 'linear-gradient(135deg, #ff8fa3 0%, #e6738c 100%)';
    botonMusica.style.color = 'white';
    botonMusica.style.boxShadow = '0 4px 15px rgba(230, 115, 140, 0.4)';
  } else if (salaActiva && salaActiva.dataset.sala === '6') {
    botonMusica.style.background = 'linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)';
    botonMusica.style.color = '#000000';
    botonMusica.style.boxShadow = '0 0 20px #00ffff, 0 0 30px #ff00ff';
  } else if (salaActiva && salaActiva.dataset.sala === '7') {
    botonMusica.style.background = 'linear-gradient(90deg, #0055a4 0%, #ffffff 33%, #ffffff 66%, #ef4135 100%)';
    botonMusica.style.color = '#2c3e50';
    botonMusica.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.5)';
  } else {
    botonMusica.style.background = 'var(--dorado)';
    botonMusica.style.color = 'var(--granate)';
    botonMusica.style.boxShadow = '0 4px 10px rgba(0, 0, 0, .4)';
  }

  document.getElementById('museum').scrollIntoView({ behavior: 'smooth' });
}

// ----------  LUZ QUE SIGUE AL CURSOR  ----------
document.addEventListener('mousemove', e => {
  const luz = document.getElementById('luz');
  if (luz) {
    luz.style.setProperty('--x', e.clientX + 'px');
    luz.style.setProperty('--y', e.clientY + 'px');
  }
});

// ----------  MOSTRAR TERMINAL DE SALA  ----------
function mostrarTerminalSala(numeroSala) {
  const terminal = document.getElementById('terminal');
  const contenedor = document.getElementById('texto-terminal');
  const scrollIndicador = document.getElementById('scrollIndicador');
  const body = document.body;
  const botonMusica = document.getElementById('musica');

  // Limpiar intervalo activo si existe
  if (intervaloActivo) {
    clearInterval(intervaloActivo);
    intervaloActivo = null;
  }

  // Limpiar contenido anterior
  contenedor.innerHTML = '';

  // Limpiar clases anteriores ANTES de agregar nuevas
  body.classList.remove('terminal-romantica', 'terminal-rave', 'terminal-paris');

  // Añadir clase según la sala INMEDIATAMENTE
  if (numeroSala === 5) {
    body.classList.add('terminal-romantica');
    botonMusica.style.background = 'linear-gradient(135deg, #ff8fa3 0%, #e6738c 100%)';
    botonMusica.style.color = 'white';
    botonMusica.style.boxShadow = '0 4px 15px rgba(230, 115, 140, 0.4)';
  } else if (numeroSala === 6) {
    body.classList.add('terminal-rave');
    botonMusica.style.background = 'linear-gradient(135deg, #00ffff 0%, #ff00ff 100%)';
    botonMusica.style.color = '#000000';
    botonMusica.style.boxShadow = '0 0 20px #00ffff, 0 0 30px #ff00ff';
  } else if (numeroSala === 7) {
    body.classList.add('terminal-paris');
    botonMusica.style.background = 'linear-gradient(90deg, #0055a4 0%, #ffffff 33%, #ffffff 66%, #ef4135 100%)';
    botonMusica.style.color = '#2c3e50';
    botonMusica.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.5)';
  } else if (numeroSala === 8) {
    body.classList.add('terminal-paris');
    botonMusica.style.background = 'linear-gradient(90deg, #0055a4 0%, #ffffff 33%, #ffffff 66%, #ef4135 100%)';
    botonMusica.style.color = '#2c3e50';
    botonMusica.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.5)';
  } else {
    botonMusica.style.background = 'var(--dorado)';
    botonMusica.style.color = 'var(--granate)';
    botonMusica.style.boxShadow = '0 4px 10px rgba(0, 0, 0, .4)';
  }

  // Mostrar terminal y el indicador de scroll
  terminal.style.display = 'flex';
  scrollIndicador.style.display = 'block';
  scrollIndicador.style.opacity = '0';
  scrollIndicador.style.animation = 'fadeInBounce 1s forwards 3s, bounce 2s infinite 4s';
  terminal.scrollIntoView({ behavior: 'smooth' });

  // Cargar texto de la sala
  textoTerminalActual = terminalesPorSala[numeroSala] || terminalesPorSala[2];
  lineaActual = 0;

  // Escribir terminal
  setTimeout(() => {
    escribirLinea(textoTerminalActual[0], 300);
  }, 500);
}

// ----------  FUNCIONES DEL MUSEO CON CAMBIO DE MÚSICA Y TERMINAL  ----------
function cambiarSala(n) {
  document.querySelector('.sala.activa').classList.remove('activa');
  document.querySelector(`[data-sala="${n}"]`).classList.add('activa');

  mostrarTerminalSala(n);

  // SISTEMA DE MÚSICA CORREGIDO
  const audio = document.getElementById('audioAmbiente');

  // Mapeo de canciones por sala (VERIFICA QUE ESTAS RUTAS EXISTAN EN TU CARPETA)
  const musicaPorSala = {
    2: 'audio/Head Over Heels - Tears for Fears.mp3',
    3: 'audio/kiss.mp3', // CAMBIA ESTO POR TU CANCIÓN
    4: 'audio/Siempre Sere.mp3',
    5: 'audio/Miúcha, Antonio Carlos Jobim - Pela Luz dos Olhos Teus (Pseudo Vídeo) [5pyk-DmkBsA].mp3', // CAMBIA ESTO POR TU CANCIÓN
    6: 'audio/U 96 - Club Bizarre [ZIa7FAopAtg].mp3', // CAMBIA ESTO POR TU CANCIÓN
    7: 'audio/amour.mp3', // CAMBIA ESTO POR TU CANCIÓN
    8: 'audio/amour2.mp3', // CAMBIA ESTO POR TU CANCIÓN
    9: 'audio/Head Over Heels - Tears for Fears.mp3'  // CAMBIA ESTO POR TU CANCIÓN
  };

  // Cambiar la música si existe para esta sala
  if (musicaPorSala[n]) {
    const nuevaCancion = musicaPorSala[n];
    
    // Solo cambiar si es diferente a la actual
    if (audio.src !== window.location.origin + '/' + nuevaCancion && 
        !audio.src.endsWith(nuevaCancion)) {
      
      console.log('Cambiando música a:', nuevaCancion);
      
      // Pausar la música actual
      audio.pause();
      audio.currentTime = 0;
      
      // Cambiar la fuente directamente
      audio.src = nuevaCancion;
      
      // Cargar la nueva canción
      audio.load();
      
      // Si la música estaba activada, reproducir automáticamente
      if (musicaActiva) {
        // Esperar un momento antes de reproducir
        setTimeout(() => {
          audio.play().catch(error => {
            console.error('Error al reproducir:', error);
          });
        }, 300);
      }
    }
  }

  if (corazones.length === 5) {
    const salaSecreta = document.getElementById('salaSecreta');
    if (salaSecreta) salaSecreta.style.display = 'flex';
  }
}

function coleccionar(id) {
  if (corazones.includes(id)) return;
  corazones.push(id);
  localStorage.setItem('corazones', JSON.stringify(corazones));
  alert('♥ Coleccionado');
}

function toggleMusica() {
  const audio = document.getElementById('audioAmbiente');
  musicaActiva = !musicaActiva;
  
  if (musicaActiva) {
    audio.play().catch(error => {
      console.log('Error al reproducir:', error);
    });
  } else {
    audio.pause();
  }
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

// ----------  GIRAR MARCOS  ----------
function girarMarco(elemento) {
  elemento.classList.toggle('girado');
}