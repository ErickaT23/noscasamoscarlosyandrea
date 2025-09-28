import { eventData } from './config.js';

document.addEventListener('DOMContentLoaded', () => {

  // --- Apertura del sobre ---
  const seal = document.getElementById('seal');
  const envelope = document.getElementById('envelope');
  const mainContent = document.querySelector('.main-content');
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseButton = document.getElementById('playPauseButton');

  seal.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
      envelope.style.display = 'none';
      mainContent.classList.remove('hidden');
      audioPlayer.play();
      playPauseButton.innerText = 'Pause';
    }, 1000);
  });

  // --- Cargar datos generales ---
  document.getElementById('couple-names').innerText = eventData.couple.names;
  document.getElementById('wedding-date').innerText = eventData.couple.date;
  document.getElementById('hero-image').src = eventData.couple.heroImage;

  // --- Música ---
  audioPlayer.src = eventData.song.file;
  document.getElementById('song-title').innerText = eventData.song.title;

  const progressBar = document.getElementById('progress-bar');
  const currentTime = document.getElementById('current-time');
  const durationTime = document.getElementById('duration-time');

  playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.innerText = 'Pause';
    } else {
      audioPlayer.pause();
      playPauseButton.innerText = 'Play';
    }
  });

  audioPlayer.addEventListener('loadedmetadata', () => {
    durationTime.textContent = formatTime(audioPlayer.duration);
  });

  audioPlayer.addEventListener('timeupdate', () => {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    currentTime.textContent = formatTime(audioPlayer.currentTime);
  });

  progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
  });

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

// --- Botón para añadir al calendario ---
window.addToCalendar = function () {
  const calendarURL = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=La%20boda%20de%20Carlos%20%26%20Andrea&dates=20251213/20251214&details=%C2%A1Acomp%C3%A1%C3%B1anos%20a%20celebrar%21&location=Patulul%2C%20Suchitepequez%2C%20Guatemala&sf=true&output=xml";
  window.open(calendarURL, "_blank");
};



// --- Itinerario ---
// --- Ceremonia ---
document.getElementById('ceremony-image').src = eventData.ceremony.image; // antes: ceremonyImage
document.getElementById('ceremony-place').innerText = eventData.ceremony.place;
document.getElementById('ceremony-address').innerText = eventData.ceremony.address;
document.getElementById('ceremony-date').innerText = eventData.ceremony.date;
document.getElementById('ceremony-time').innerText = eventData.ceremony.time;
document.getElementById('ceremony-map').onclick = () => window.open(eventData.ceremony.mapLink, '_blank');

// --- Recepción ---
document.getElementById('reception-image').src = eventData.reception.image; // antes: receptionImage
document.getElementById('reception-place').innerText = eventData.reception.place;
document.getElementById('reception-address').innerText = eventData.reception.address;
document.getElementById('reception-date').innerText = eventData.reception.date;
document.getElementById('reception-time').innerText = eventData.reception.time;
document.getElementById('reception-map').onclick = () => window.open(eventData.reception.mapLink, '_blank');

  // --- Lluvia de sobres ---
  document.getElementById('abroad-gift-message').innerText = eventData.abroadGiftMessage;

//BUENOS DESEOS
// script.js (normal, sin import)
document.getElementById('send-wish').addEventListener('click', () => {
  document.getElementById('wish-form').classList.toggle('hidden');
});

document.getElementById('submit-wish').addEventListener('click', () => {
  const name = document.getElementById('wish-name').value.trim();
  const message = document.getElementById('wish-message').value.trim();

  if (name && message) {
    guardarDeseo(name, message)
      .then(() => {
        alert("¡Deseo enviado!");
        document.getElementById('wish-name').value = '';
        document.getElementById('wish-message').value = '';
        document.getElementById('wish-form').classList.add('hidden');
      })
      .catch(err => console.error("❌ Error al guardar el deseo:", err));
  } else {
    alert("Por favor, completá ambos campos.");
  }
});

document.getElementById('show-wishes').addEventListener('click', () => {
  const container = document.getElementById('wishes-container');
  container.classList.toggle('hidden');

  if (!container.classList.contains('hidden')) {
    escucharDeseos((lista) => {
      container.innerHTML = '';
      lista.forEach(deseo => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${deseo.nombre}</strong>: ${deseo.mensaje}`;
        container.appendChild(p);
      });
    });
  }
});


  // --- Final: Foto y Frase ---
  document.getElementById('final-photo').src = eventData.finalPhoto;
  document.getElementById('final-message').innerText = eventData.finalMessage;

// --- Confirmaciones --- (espera a que loads.js defina eventData.rsvp)
const checkRSVP = setInterval(() => {
  if (window.eventData?.rsvp?.rsvpImage) {
    clearInterval(checkRSVP);

    // Imagen y mensaje
    const rsvpImg = document.getElementById('rsvp-image');
    if (rsvpImg) rsvpImg.src = eventData.rsvp.rsvpImage;
    const rsvpMsg = document.getElementById('rsvp-message');
    if (rsvpMsg) rsvpMsg.innerText = "Estamos organizando todo con mucho cariño:";

    // WhatsApp
    const phoneIntl = "50259394167"; // ← número destino con prefijo país
    const guestName =
      document.getElementById('guest-name')?.textContent
        ?.replace(/\s+/g, ' ')
        ?.trim() || ""; // intenta tomar nombre mostrado

    const defaultMsg = `Hola! Soy ${guestName || "invitado/a"}. Quiero confirmar mi asistencia a la boda de ${eventData.couple?.names || "la pareja"}.`;
    const waUrl = `https://wa.me/${phoneIntl}?text=${encodeURIComponent(defaultMsg)}`;

    const btn = document.getElementById('form-confirm');
    if (btn) {
      btn.textContent = "Confirmar por WhatsApp";
      btn.onclick = () => window.open(waUrl, "_blank");
    }
  }
}, 100);



  
  // --- Footer (redes sociales) ---
  const socialIcons = document.getElementById('social-icons');

/*socialIcons.innerHTML = `
  <a href="${eventData.footer.social.whatsapp}" target="_blank" aria-label="whatsapp">
    <i class="fab fa-whatsapp"></i>
  </a>
  <a href="${eventData.footer.social.facebook}" target="_blank" aria-label="Facebook">
    <i class="fab fa-facebook"></i>
  </a>
  <a href="${eventData.footer.social.instagram}" target="_blank" aria-label="Instagram">
    <i class="fab fa-instagram"></i>
  </a>
`;*/

document.getElementById('footer-logo').src = eventData.footer.logo;

// ===== GALERÍA =====
try {
  const mainImg = document.getElementById('gallery-main-img');
  const thumbsWrap = document.getElementById('gallery-thumbs');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lightbox-close');

  if (mainImg && thumbsWrap && prevBtn && nextBtn && lightbox && lbImg && lbClose) {
    const thumbs = Array.from(thumbsWrap.querySelectorAll('img'));
    let idx = 0;

    const setActive = (i) => {
      idx = (i + thumbs.length) % thumbs.length;
      const src = thumbs[idx].getAttribute('src');
      const alt = thumbs[idx].getAttribute('alt') || `Foto ${idx+1}`;
      mainImg.src = src;
      mainImg.alt = alt;
      thumbs.forEach(t => t.classList.remove('is-active'));
      thumbs[idx].classList.add('is-active');
    };

    // init
    setActive(0);

    // Navegación
    prevBtn.addEventListener('click', () => setActive(idx - 1));
    nextBtn.addEventListener('click', () => setActive(idx + 1));

    // Click en miniaturas
    thumbs.forEach(t => {
      t.addEventListener('click', () => {
        const i = parseInt(t.dataset.index || '0', 10);
        setActive(i);
        openLightbox();
      });
    });

    // Lightbox
    const openLightbox = () => {
      lbImg.src = mainImg.src;
      lbImg.alt = mainImg.alt;
      lightbox.classList.remove('hidden');
    };
    const closeLightbox = () => lightbox.classList.add('hidden');

    mainImg.addEventListener('click', openLightbox);
    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox(); // cerrar al hacer click fuera
    });
    window.addEventListener('keydown', (e) => {
      if (lightbox.classList.contains('hidden')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setActive(idx + 1);
      if (e.key === 'ArrowLeft') setActive(idx - 1);
    });

    // Swipe móvil (simple)
    let startX = 0;
    mainImg.addEventListener('touchstart', (e) => startX = e.touches[0].clientX, {passive:true});
    mainImg.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) (dx < 0 ? setActive(idx + 1) : setActive(idx - 1));
    }, {passive:true});
  }
} catch (err) {
  console.error('Galería: error inicializando', err);
}


  // --- Animaciones Scroll (fade-in) ---
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // --- Contador regresivo ---
  const [day, month, year] = eventData.couple.date.split('.').map(s => s.trim());
  const weddingDate = new Date(`${year}-${month}-${day}T00:00:00`);
  const countdown = setInterval(() => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      clearInterval(countdown);
      document.getElementById('countdown').innerHTML = "<h2>¡Hoy es el gran día!</h2>";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }, 1000);

});
function addToCalendar() {
    const title = encodeURIComponent('Boda de Isa & Roberto');
    const details = encodeURIComponent('¡Acompáñanos en nuestra boda!');
    const location = encodeURIComponent('Escuela de Cristo, Antigua Guatemala');
    const startDate = '20260627T170000Z'; // ⚡ Importante: Formato UTC YYYYMMDDTHHMMSSZ
    const endDate = '20260627T230000Z';   // ⚡ Final estimado
    
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}&sf=true&output=xml`;
  
    window.open(googleCalendarUrl, '_blank');
  }
  
  //OPTIMIZAR
  // Acordeón para sección de hospedaje
  document.querySelectorAll('.hotel-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const content = document.getElementById(targetId);

      // Ocultar los demás
      document.querySelectorAll('.hotel-content').forEach(div => {
        if (div.id !== targetId) div.classList.add('hidden');
      });

      // Toggle el actual
      content.classList.toggle('hidden');
    });
  });

  
  
// Quita overlays sueltos que puedan tapar (por si quedaron en el DOM)
document.querySelectorAll('.main-content > .overlay').forEach(el => el.remove());

// Debug rápido: ver si llegan los clics
const dbg = m => console.log('[CLICK]', m);
document.getElementById('playPauseButton')?.addEventListener('click', ()=>dbg('play/pause'));
document.getElementById('progress-container')?.addEventListener('click', ()=>dbg('progress'));
document.querySelector('#calendar-button button')?.addEventListener('click', ()=>dbg('calendar'));
