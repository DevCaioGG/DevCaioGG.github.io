// ----------  VARIABLES GLOBALES  ----------
let corazones = JSON.parse(localStorage.getItem('corazones')||'[]');
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
    "[♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥]",
    "",
    "  WE'RE FINALLY TOGETHER",
    "",
    "  Cargado momentos inolvidables,",
    " regalos y pedidas de mano. jejejeje",
    "",
    "  Cargando...",
    "",
    "[♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥]",
    "",
    "> Sala lista."
  ],
  6: [
    "> Cargando sala 6...",
    "> Accediendo a nuevos recuerdos...",
    "",
    "[◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆]",
    "",
    "  SALA 6",
    "",
    "  Aquí puedes poner el título que quieras.",
    "  Personaliza este texto a tu gusto.",
    "",
    "[◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆]",
    "",
    "> Sala lista."
  ]
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
  document.body.classList.remove('terminal-romantica');
  
  // Restaurar el botón de música al salir de la terminal
  const salaActiva = document.querySelector('.sala.activa');
  if(salaActiva && salaActiva.dataset.sala !== '5'){
    botonMusica.style.background = 'var(--dorado)';
    botonMusica.style.color = 'var(--granate)';
    botonMusica.style.boxShadow = '0 4px 10px rgba(0, 0, 0, .4)';
  } else if(salaActiva && salaActiva.dataset.sala === '5'){
    botonMusica.style.background = 'linear-gradient(135deg, #ff8fa3 0%, #e6738c 100%)';
    botonMusica.style.color = 'white';
    botonMusica.style.boxShadow = '0 4px 15px rgba(230, 115, 140, 0.4)';
  }
  
  document.getElementById('museum').scrollIntoView({ behavior: 'smooth' });
}

// ----------  LUZ QUE SIGUE AL CURSOR  ----------
document.addEventListener('mousemove', e=>{
  const luz = document.getElementById('luz');
  if(luz){
    luz.style.setProperty('--x', e.clientX+'px');
    luz.style.setProperty('--y', e.clientY+'px');
  }
});

// ----------  MOSTRAR TERMINAL DE SALA  ----------
function mostrarTerminalSala(numeroSala){
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
  
  // Añadir clase romántica si es la sala 5
  if(numeroSala === 5){
    body.classList.add('terminal-romantica');
    // Cambiar el botón de música a colores románticos
    botonMusica.style.background = 'linear-gradient(135deg, #ff8fa3 0%, #e6738c 100%)';
    botonMusica.style.color = 'white';
    botonMusica.style.boxShadow = '0 4px 15px rgba(230, 115, 140, 0.4)';
  } else {
    body.classList.remove('terminal-romantica');
    // Restaurar el botón de música a colores normales
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
  
  // Cargar texto de la sala - USAR terminalesPorSala[2] si no existe
  textoTerminalActual = terminalesPorSala[numeroSala] || terminalesPorSala[2];
  lineaActual = 0;
  
  // Escribir terminal
  setTimeout(() => {
    escribirLinea(textoTerminalActual[0], 300);
  }, 500);
}

// ----------  FUNCIONES DEL MUSEO CON CAMBIO DE MÚSICA Y TERMINAL  ----------
function cambiarSala(n){
  document.querySelector('.sala.activa').classList.remove('activa');
  document.querySelector(`[data-sala="${n}"]`).classList.add('activa');
  
  // Mostrar terminal de la sala
  mostrarTerminalSala(n);
  
  // Cambiar música según la sala
  const audio = document.getElementById('audioAmbiente');
  const source = audio.querySelector('source');
  
  // Mapeo de canciones por sala
  const musicaPorSala = {
    2: 'audio/Head Over Heels - Tears for Fears.mp3',
    3: 'audio/cancion-sala-3.mp3',
    4: 'audio/cancion-sala-4.mp3',
    5: 'audio/cancion-romantica.mp3',
    6: 'audio/cancion-sala-6.mp3',  
  };
  
  // Cambiar la fuente de audio si existe una canción para esta sala
  if(musicaPorSala[n]){
    source.src = musicaPorSala[n];
    
    // Recargar el audio si está reproduciéndose
    if(musicaActiva){
      audio.load();
      audio.play();
    }
  }
  
  // Mostrar sala secreta si se coleccionaron todos los corazones
  if(corazones.length===5) {
    const salaSecreta = document.getElementById('salaSecreta');
    if(salaSecreta) salaSecreta.style.display='flex';
  }
}

function coleccionar(id){
  if(corazones.includes(id)) return;
  corazones.push(id);
  localStorage.setItem('corazones', JSON.stringify(corazones));
  alert('♥ Coleccionado');
}

function toggleMusica(){
  const a = document.getElementById('audioAmbiente');
  musicaActiva = !musicaActiva;
  musicaActiva ? a.play() : a.pause();
}

function cerrarModal(){
  document.getElementById('modal').style.display='none';
}

// ----------  GIRAR MARCOS  ----------
function girarMarco(elemento){
  elemento.classList.toggle('girado');
}