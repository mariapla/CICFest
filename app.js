/* ------------------ CONTENIDO ------------------ */

const festival = {
    date: '7.5.26',
    title: 'CIC FEST',
    topTitle: 'CIC FEST 2026',

    introTitle: 'Un festival per connectar creativitat, coneixement i comunitat.',

    introText1: 'CIC Fest neix amb la voluntat de connectar persones vinculades a l’art, el disseny i la transferència de coneixement amb estudiants.',

    introText2: 'Al DAY els tallers ofereixen un espai pràctic i al NIGHT la Portfolio Night connecta estudiants amb professionals.',

    eventbrite: {
        day: '#',
        night: '#'
    }
};

/* ------------------ SPEAKERS ------------------ */

const speakers = [
    {
        name: 'María Cañizares',
        role: 'Talk',
        title: 'Diseño de interiores: construir relatos habitables',
        time: '08:30',
        track: 'day',
        image: 'img/maria_canizares.jpg',
        ticketUrl: '#'
    },
    {
        name: 'Juan Cardosa',
        role: 'Workshop',
        title: 'Micropoesia i collage',
        time: '09:00',
        track: 'day',
        image: 'img/juan_cardosa.jpg',
        ticketUrl: '#'
    },
    {
        name: 'Riki Blanco',
        role: 'Talk',
        title: 'Caminar sobre nenúfares | Una charla sobre la aventura del proceso creativo',
        time: '10:00',
        track: 'day',
        image: 'img/Riki_Blanco.jpg',
        ticketUrl: '#'
    },
    {
        name: 'Txu Morillas',
        role: 'Workshop',
        title: 'Paisatges: arquitectura del moviment',
        time: '11:00',
        track: 'day',
        image: 'img/txu_morillas.jpg',
        ticketUrl: '#'
    },
    {
        name: 'Santi Vilanova',
        role: 'Workshop',
        title: 'Playmodes',
        time: '11:15',
        track: 'day',
        image: 'img/santi_vilanova.png',
        ticketUrl: '#'
    },
    {
        name: 'Mireia Domènech i Silvana Solias',
        role: 'Talk',
        title: 'Dissenyar cultura',
        time: '11:30',
        track: 'day',
        image: 'img/misterio_studio.jpg',
        ticketUrl: '#'
    },
    {
        name: 'Riki Blanco',
        role: 'Workshop',
        title: 'Taller concentrado de ilustración conceptual',
        time: '10:00',
        track: 'day',
        image: 'img/Riki_Blanco.jpg',
        ticketUrl: '#'
    },
    {
        name: 'Carlos Pareja',
        role: 'Talk',
        title: 'No vull ser com tu i la meva divertida vida com a fotògraf',
        time: '13:00',
        track: 'day',
        image: 'img/Carlos_Pareja.jpg',
        ticketUrl: '#'
    },
    {
        name: 'Portfolio Night',
        role: 'Review',
        title: 'Mentoring',
        time: '18:00',
        track: 'night',
        image: 'img/night.jpg',
        ticketUrl: '#'
    }
];

/* ------------------ CONTENT APPLY ------------------ */

function applyFestivalContent() {
    document.querySelectorAll('[data-edit]').forEach((el) => {
        const path = el.dataset.edit;
        const value = path.split('.').reduce((acc, key) => acc && acc[key], { festival });
        if (value) el.textContent = value;
    });

    document.querySelectorAll('[data-link]').forEach((el) => {
        const path = el.dataset.link;
        const value = path.split('.').reduce((acc, key) => acc && acc[key], { festival });
        if (value) el.href = value;
    });
}

/* ------------------ CARDS ------------------ */

function createArtistCard(item) {
    const isDay = item.track === 'day';

    const article = document.createElement('article');
    article.className = 'artist-card reveal';

    article.innerHTML = `
        <div class="artist-media">
            <img src="${item.image}" alt="${item.name}">
            <div class="artist-tag" style="background:${isDay ? 'var(--violeta)' : 'var(--azul-rosa)'}">
                ${item.role}
            </div>
        </div>
        <div class="artist-content">
            <div class="artist-time" style="color:${isDay ? 'var(--violeta)' : 'var(--azul-rosa)'}">
                ${item.time}
            </div>
            <h4 class="artist-name">${item.name}</h4>
            <p class="artist-title">${item.title}</p>
            ${item.description ? `<p class="artist-description">${item.description}</p>` : ''}
            <div class="artist-actions">
                <a
                    class="button ${isDay ? 'button-day' : 'button-night'}"
                    href="${item.ticketUrl || '#'}"
                    target="_blank"
                    rel="noreferrer"
                >
                    Reserva
                </a>
            </div>
        </div>
    `;

    return article;
}

function renderCards() {
    const day = document.getElementById('day-cards');
    const night = document.getElementById('night-cards');

    if (!day || !night) return;

    day.innerHTML = '';
    night.innerHTML = '';

    speakers.forEach((s, i) => {
        const card = createArtistCard(s);
        card.style.transitionDelay = `${i * 0.05}s`;

        if (s.track === 'day') {
            day.appendChild(card);
        } else {
            night.appendChild(card);
        }
    });
}

/* ------------------ REVEAL ------------------ */

function setupReveal() {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px"
    });

    elements.forEach((el) => observer.observe(el));
}

/* ------------------ SCROLL CINEMÁTICO ------------------ */

function smoothScrollTo(targetY, duration = 1400) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function ease(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(time) {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = ease(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

/* ------------------ NAV + REVEAL ------------------ */

function setupNavReveal() {
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            e.preventDefault();

            const offset = document.querySelector('.topbar')?.offsetHeight || 0;
            const y = target.getBoundingClientRect().top + window.scrollY - offset;

            target.querySelectorAll('.reveal').forEach(el => el.classList.remove('visible'));

            smoothScrollTo(y, 1500);

            setTimeout(() => {
                target.querySelectorAll('.reveal').forEach((el, i) => {
                    setTimeout(() => el.classList.add('visible'), i * 60);
                });
            }, 800);
        });
    });
}

/* ------------------ INIT ------------------ */

applyFestivalContent();
renderCards();
setupReveal();
setupNavReveal();