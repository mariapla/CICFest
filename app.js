const festival = {
    date: '7.5.26',
    title: 'CIC FEST',
    topTitle: 'CIC FEST 2026',

    introTitle: 'Un festival per connectar creativitat, coneixement i comunitat.',

    introText1: 'CIC Fest neix amb la voluntat de connectar persones vinculades a l’art, el disseny i la transferència de coneixement amb estudiants, especialment no universitaris. Al llarg del dia, professionals destacats compartiran experiències, idees i mirades per inspirar la pròxima generació creativa.',

    introText2: 'És un esdeveniment obert a estudiants d’altres escoles que vol convertir-se en un punt de trobada per descobrir què fan altres creatius, compartir inquietuds i generar comunitat.'
};

const speakers = [
    {
        id: 1,
        name: 'María Cañizares',
        role: 'Talk',
        title: 'Diseño de interiores',
        time: '08:30',
        track: 'day',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        description: '',
        ticketUrl: '#'
    }
];

/* ------------------ CONTENT ------------------ */

function applyFestivalContent() {
    document.querySelectorAll('[data-edit]').forEach((el) => {
        const path = el.dataset.edit;
        const value = path.split('.').reduce((acc, key) => acc && acc[key], { festival });
        if (value) el.textContent = value;
    });
}

/* ------------------ CARDS ------------------ */

function createArtistCard(item) {
    const article = document.createElement('article');
    article.className = 'artist-card reveal';

    article.innerHTML = `
        <div class="artist-media">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="artist-content">
            <div class="artist-time">${item.time}</div>
            <h4 class="artist-name">${item.name}</h4>
            <p class="artist-title">${item.title}</p>
        </div>
    `;

    return article;
}

function renderCards() {
    const dayContainer = document.getElementById('day-cards');
    if (!dayContainer) return;

    speakers.forEach((item) => {
        dayContainer.appendChild(createArtistCard(item));
    });
}

/* ------------------ REVEAL SCROLL ------------------ */

let revealObserver;

function setupReveal() {
    const elements = document.querySelectorAll('.reveal');

    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px"
    });

    elements.forEach((el) => revealObserver.observe(el));
}

/* ------------------ SMOOTH SCROLL (CINEMATIC) ------------------ */

function smoothScrollTo(targetY, duration = 1400) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function ease(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = ease(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

/* ------------------ NAV REVEAL ------------------ */

function resetRevealInSection(section) {
    const items = section.querySelectorAll('.reveal');

    items.forEach((el) => el.classList.remove('visible'));

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            items.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, i * 60);
            });
        });
    });
}

function setupNavReveal() {
    const links = document.querySelectorAll('.nav a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            e.preventDefault();

            const offset = document.querySelector('.topbar')?.offsetHeight || 0;
            const targetY = target.getBoundingClientRect().top + window.scrollY - offset;

            // quitar visible antes
            target.querySelectorAll('.reveal').forEach(el => el.classList.remove('visible'));

            // scroll lento
            smoothScrollTo(targetY, 1500);

            // reactivar reveal
            setTimeout(() => {
                resetRevealInSection(target);
            }, 900);
        });
    });
}

/* ------------------ FLOAT ------------------ */

function setupFloat() {
    const elements = document.querySelectorAll('[data-float]');
    let ticking = false;

    function update() {
        const scrollY = window.scrollY;

        elements.forEach((el) => {
            const speed = parseFloat(el.dataset.float || '0');
            const movement = scrollY * speed;
            el.style.transform = `translateY(${movement}px)`;
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
}

/* ------------------ INIT ------------------ */

applyFestivalContent();
renderCards();
setupReveal();      // ← ESTO ES CLAVE (NO BORRAR)
setupNavReveal();   // ← navegación animada
setupFloat();