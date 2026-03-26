const theme = {
    dayBg: '#e52421',
    nightInk: '#2a4b9b',
    paper: '#f4f1ec',
    textLight: '#fffdf9',
    textDark: '#25286e',
    border: '#25286e',
    gridRed: 'rgba(241, 38, 38, 0.14)',
    gridBlue: 'rgba(37, 40, 110, 0.08)'
};

const festival = {
    date: '7.5.26',
    title: 'CIC FEST',
    topTitle: 'CIC FEST 2026',

    introTitle: 'Un festival per connectar creativitat, coneixement i comunitat.',

    introText1: 'CIC Fest neix amb la voluntat de connectar persones vinculades a l’art, el disseny i la transferència de coneixement amb estudiants, especialment no universitaris. Al llarg del dia, professionals destacats compartiran experiències, idees i mirades per inspirar la pròxima generació creativa.',

    introText2: 'És un esdeveniment obert a estudiants d’altres escoles que vol convertir-se en un punt de trobada per descobrir què fan altres creatius, compartir inquietuds i generar comunitat. Al DAY, els tallers ofereixen un espai pràctic per explorar i experimentar, i al NIGHT, la Portfolio Night connecta estudiants universitaris amb professionals en un format dinàmic de revisió de portfolis.',

    eventbrite: {
        day: '...',
        night: '...'
    }
};

const speakers = [
    {
        id: 1,
        name: 'María Cañizares',
        role: 'Talk',
        title: 'Diseño de interiores: construir relatos habitables',
        time: '08:30',
        track: 'day',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
        // description: 'Short description for this talk. Replace with the real artist bio and session summary.',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 2,
        name: 'Juan Cardosa',
        role: 'Workshop',
        title: 'Micropoesia i collage',
        time: '09:00',
        track: 'day',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
        // description: 'Short description for this talk. Replace with the real artist bio and session summary.',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 3,
        name: 'Riki Blanco',
        role: 'Talk',
        title: 'Caminar sobre nenúfares | Una charla sobre la aventura del proceso creativo',
        time: '10:00',
        track: 'day',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
        // description: 'Short description for this workshop. Replace with the real content and requirements.',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 4,
        name: 'Txu Morillas',
        role: 'Workshop',
        title: 'Paisatges: arquitectura del moviment',
        time: '11:00',
        track: 'day',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
        // description: 'Short description for this portfolio review. Replace with the real mentor and focus.',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 5,
        name: 'Santi Vilanova',
        role: 'Workshop',
        title: 'Playmodes',
        time: '11:15',
        track: 'day',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
        // description: 'Short description for this portfolio review. Replace with the real mentor and focus.',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 6,
        name: 'Mireia Domènech i Silvana Solias',
        role: 'Talk',
        title: 'Dissenyar Cultura',
        time: '11:30',
        track: 'day',
        image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=1200&q=80',
        // description: 'Short description for this portfolio review. Replace with the real mentor and focus.',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 7,
        name: 'Artist Name 06',
        role: 'Portfolio Review',
        title: 'Design for Real Contexts',
        time: '21:00',
        track: 'night',
        image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=1200&q=80',
        description: 'Short description for this portfolio review. Replace with the real mentor and focus.',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 8,
        name: 'Riki Blanco',
        role: 'Workshop',
        title: 'Taller concentrado de ilustración conceptual',
        time: '12:15',
        track: 'day',
        image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=1200&q=80',
        // description: 'Short description for this portfolio review. Replace with the real mentor and focus.',
        ticketUrl: 'https://www.eventbrite.com/'
    },
     {
        id:9,
        name: 'Carlos Pareja',
        role: 'Talk',
        title: 'No vull ser com tu i la meva divertida vida com a fotògraf',
        time: '13:00',
        track: 'day',
        image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=1200&q=80',
        // description: 'Short description for this portfolio review. Replace with the real mentor and focus.',
        ticketUrl: 'https://www.eventbrite.com/'
    }
];

function applyTheme() {
    const root = document.documentElement;
    root.style.setProperty('--day-bg', theme.dayBg);
    root.style.setProperty('--night-ink', theme.nightInk);
    root.style.setProperty('--paper', theme.paper);
    root.style.setProperty('--text-light', theme.textLight);
    root.style.setProperty('--text-dark', theme.textDark);
    root.style.setProperty('--border', theme.border);
    root.style.setProperty('--grid-red', theme.gridRed);
    root.style.setProperty('--grid-blue', theme.gridBlue);
}

function getValue(path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], window);
}

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

function createArtistCard(item, index) {
    const offsets = ['offset-a', 'offset-b', 'offset-c'];
    const accent = item.track === 'day' ? theme.dayBg : theme.nightInk;
    const tagBg = item.track === 'day' ? theme.dayBg : theme.nightInk;

    const article = document.createElement('article');
    article.className = `artist-card ${offsets[index % 3]}`;

    article.innerHTML = `
          <div class="artist-media">
            <img src="${item.image}" alt="${item.name}">
            <div class="artist-overlay"></div>
            <div class="artist-tag" style="background:${tagBg}">${item.role}</div>
          </div>
          <div class="artist-content">
            <div class="artist-time" style="color:${accent}">${item.time}</div>
            <h4 class="artist-name">${item.name}</h4>
            <p class="artist-title">${item.title}</p>
            <p class="artist-description">${item.description}</p>
            <div class="artist-actions">
              <a class="button ${item.track === 'day' ? 'day' : 'night'}" href="${item.ticketUrl}" target="_blank" rel="noreferrer">Reserva</a>
            </div>
          </div>
        `;

    return article;
}

function renderCards() {
    const dayContainer = document.getElementById('day-cards');
    const nightContainer = document.getElementById('night-cards');

    const dayItems = speakers.filter((item) => item.track === 'day');
    const nightItems = speakers.filter((item) => item.track === 'night');

    dayItems.forEach((item, index) => dayContainer.appendChild(createArtistCard(item, index)));
    nightItems.forEach((item, index) => nightContainer.appendChild(createArtistCard(item, index)));
}

function setupParallax() {
    const layers = document.querySelectorAll('[data-speed]');

    function updateParallax() {
        const scrollY = window.scrollY;

        layers.forEach((el) => {
            const speed = parseFloat(el.dataset.speed || '0');
            const direction = el.dataset.direction === 'up' ? -1 : 1;

            const movement = scrollY * speed * direction;

            el.style.transform = `translate3d(0, ${movement}px, 0) scale(${1 + speed * 0.3})`;
        });
    }

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
}

function setupReveal() {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
}

applyTheme();
applyFestivalContent();
renderCards();
setupParallax();
setupReveal();
