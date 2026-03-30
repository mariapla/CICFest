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
        title: 'Diseño de interiores: construir relatos habitables',
        time: '08:30',
        track: 'day',
        image: 'img/maria_canizares.jpg',
        description: '',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 2,
        name: 'Juan Cardosa',
        role: 'Workshop',
        title: 'Micropoesia i collage',
        time: '09:00',
        track: 'day',
        image: 'img/juan_cardosa.jpg',
        description: '',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 3,
        name: 'Riki Blanco',
        role: 'Talk',
        title: 'Caminar sobre nenúfares | Una charla sobre la aventura del proceso creativo',
        time: '10:00',
        track: 'day',
        image: 'img/Riki_Blanco.jpg',
        description: '',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 4,
        name: 'Txu Morillas',
        role: 'Workshop',
        title: 'Paisatges: arquitectura del moviment',
        time: '11:00',
        track: 'day',
        image: 'img/txu_morillas.jpg',
        description: '',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 5,
        name: 'Santi Vilanova',
        role: 'Workshop',
        title: 'Playmodes',
        time: '11:15',
        track: 'day',
        image: 'img/santi_vilanova.png',
        description: '',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 6,
        name: 'Mireia Domènech i Silvana Solias',
        role: 'Talk',
        title: 'Dissenyar Cultura',
        time: '11:30',
        track: 'day',
        image: 'img/misterio_studio.jpg',
        description: '',
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
        title: 'Taller concentrado de ilustración conceptual',
        time: '12:15',
        track: 'day',
        image: 'img/Riki_Blanco.jpg',
        description: '',
        ticketUrl: 'https://www.eventbrite.com/'
    },
    {
        id: 9,
        name: 'Carlos Pareja',
        role: 'Talk',
        title: 'No vull ser com tu i la meva divertida vida com a fotògraf',
        time: '13:00',
        track: 'day',
        image: 'img/Carlos_Pareja.jpg',
        description: '',
        ticketUrl: 'https://www.eventbrite.com/'
    }
];

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

function createArtistCard(item) {
    const accent = item.track === 'day' ? 'var(--violeta)' : 'var(--azul-rosa)';
    const buttonClass = item.track === 'day' ? 'button-day' : 'button-night';
    const tagBg = item.track === 'day' ? 'var(--violeta)' : 'var(--azul-rosa)';
    const safeDescription = item.description ? item.description : '';

    const article = document.createElement('article');
    article.className = 'artist-card reveal';

    article.innerHTML = `
        <div class="artist-media">
            <img src="${item.image}" alt="${item.name}">
            <div class="artist-tag" style="background:${tagBg}">${item.role}</div>
        </div>
        <div class="artist-content">
            <div class="artist-time" style="color:${accent}">${item.time}</div>
            <h4 class="artist-name">${item.name}</h4>
            <p class="artist-title">${item.title}</p>
            <p class="artist-description">${safeDescription}</p>
            <div class="artist-actions">
                <a class="button ${buttonClass}" href="${item.ticketUrl}" target="_blank" rel="noreferrer">Reserva</a>
            </div>
        </div>
    `;

    return article;
}

function renderCards() {
    const dayContainer = document.getElementById('day-cards');
    const nightContainer = document.getElementById('night-cards');

    if (!dayContainer || !nightContainer) return;

    const dayItems = speakers.filter((item) => item.track === 'day');
    const nightItems = speakers.filter((item) => item.track === 'night');

    dayContainer.innerHTML = '';
    nightContainer.innerHTML = '';

    dayItems.forEach((item, index) => {
        const card = createArtistCard(item);
        card.style.transitionDelay = `${Math.min(index * 0.05, 0.3)}s`;
        dayContainer.appendChild(card);
    });

    nightItems.forEach((item, index) => {
        const card = createArtistCard(item);
        card.style.transitionDelay = `${Math.min(index * 0.05, 0.3)}s`;
        nightContainer.appendChild(card);
    });
}

function setupReveal() {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.14
    });

    elements.forEach((el) => observer.observe(el));
}

function setupFloat() {
    const elements = document.querySelectorAll('[data-float]');
    let ticking = false;

    function update() {
        const scrollY = window.scrollY;

        elements.forEach((el) => {
            if (el.classList.contains('hero-circle')) return;

            const speed = parseFloat(el.dataset.float || '0');
            const rect = el.getBoundingClientRect();
            const offsetFromViewport = rect.top + rect.height / 2 - window.innerHeight / 2;
            const movement = (scrollY * speed * 0.15) + (offsetFromViewport * speed * -0.08);

            el.style.transform = `translate3d(0, ${movement}px, 0)`;
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }

    update();
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);
}

function setupHeroCircleScroll() {
    const circle = document.querySelector('.hero-circle');
    if (!circle) return;

    let ticking = false;

    function update() {
        const scrollY = window.scrollY;
        const rotate = Math.max(-8, Math.min(8, scrollY * 0.01));
        const y = Math.max(-10, Math.min(18, scrollY * 0.025));

        circle.style.transform = `translate3d(0, ${y}px, 0) rotate(${rotate}deg) scale(1.02)`;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }

    update();
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);
}

applyFestivalContent();
renderCards();
setupReveal();
setupFloat();
setupHeroCircleScroll();