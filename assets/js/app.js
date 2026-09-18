const translations = {
    es: {
        "nav_home": "Inicio",
        "nav_about": "Quiénes Somos",
        "nav_what": "Lo que hacemos",
        "nav_pricing": "Planes",
        "nav_cases": "Casos de éxito",
        "nav_contact": "Contacto",
        "btn_login": "INICIAR SESIÓN",
        "btn_register": "REGISTRARSE",
        "hero_title": "Sistema para la gestión de inventario y distribución de productos perecibles",
        "hero_subtitle": "Monitorea temperatura, gestiona stock, reduce pérdidas y mejora tus operaciones logísticas desde un solo lugar.",
        "btn_demo": "PRUEBA AHORA",
        "vision_title": "Visión",
        "vision_desc": "Ser la plataforma líder en el mercado para optimizar la cadena de frío, garantizando la frescura y calidad en cada entrega.",
        "mision_title": "Misión",
        "mision_desc": "Ofrecer soluciones tecnológicas innovadoras para monitorear inventarios y la cadena de frío, conectando de forma eficiente a toda la red logística.",
        "feat_title": "Ventajas",
        "feat1_title": "Control de Temperatura",
        "feat1_desc": "Monitoreo continuo y alertas automáticas para mantener la cadena de frío intacta en todo momento.",
        "feat2_title": "Rastreo GPS en Tiempo Real",
        "feat2_desc": "Visibilidad completa de tu flota con actualizaciones cada segundo y geofencing inteligente.",
        "feat3_title": "Analítica operativa",
        "feat3_desc": "Dashboards intuitivos con métricas clave y predicciones basadas en IA para optimizar rutas.",
        "feat4_title": "Gestión de Inventario",
        "feat4_desc": "Control automático de stock, alertas de vencimiento y optimización de espacios de almacenamiento.",
        "feat5_title": "Reabastecimiento inteligente",
        "feat5_desc": "Anticipa quiebres de stock y genera recomendaciones de reposición según demanda.",
        "feat6_title": "Carga y despacho",
        "feat6_desc": "Algoritmos inteligentes que reducen tiempos de entrega y costos operativos hasta en un 30%.",
        "steps_title": "Empieza a optimizar en 4 pasos simples",
        "steps_subtitle": "No necesitas conocimientos técnicos. Te guiamos en todo el proceso.",
        "step1_title": "Integra tu operación",
        "step1_desc": "Conectamos REFRIO con tus procesos logísticos y levantamos la información clave.",
        "step2_title": "Configura inventario",
        "step2_desc": "Define productos, lotes, niveles críticos y parámetros de monitoreo.",
        "step3_title": "Activa monitoreo",
        "step3_desc": "Supervisa temperatura, stock, trazabilidad y eventos en tiempo real.",
        "step4_title": "Optimiza decisiones",
        "step4_desc": "Gestiona salidas, reabastecimiento y análisis desde un solo lugar.",
        "test_title": "Casos de éxito",
        "test_subtitle": "Conoce lo que dicen de nosotros en el mercado",
        "prc_title": "Planes",
        "prc_subtitle": "Elige el plan que mejor se adapte a tu operación"
    },
    en: {
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_what": "What We Do",
        "nav_pricing": "Pricing",
        "nav_cases": "Success Stories",
        "nav_contact": "Contact",
        "btn_login": "LOGIN",
        "btn_register": "TRY IT OUT",
        "hero_title": "System for inventory management and distribution of perishable goods",
        "hero_subtitle": "Monitor temperature, manage stock, reduce losses and improve your logistics operations from a single place.",
        "btn_demo": "TRY IT NOW",
        "vision_title": "Vision",
        "vision_desc": "To be the leading platform in the market for optimizing the cold chain, guaranteeing freshness and quality in every delivery.",
        "mision_title": "Mission",
        "mision_desc": "Offer innovative technological solutions to monitor inventories and the cold chain, efficiently connecting the entire logistics network.",
        "feat_title": "Advantages",
        "feat1_title": "Temperature Control",
        "feat1_desc": "Continuous monitoring and automatic alerts to keep the cold chain intact at all times.",
        "feat2_title": "Real-Time GPS Tracking",
        "feat2_desc": "Complete visibility of your fleet with updates every second and smart geofencing.",
        "feat3_title": "Operational Analytics",
        "feat3_desc": "Intuitive dashboards with key metrics and AI-based predictions to optimize routes.",
        "feat4_title": "Inventory Management",
        "feat4_desc": "Automatic stock control, expiration alerts and storage space optimization.",
        "feat5_title": "Smart Replenishment",
        "feat5_desc": "Anticipate stockouts and generate replenishment recommendations based on demand.",
        "feat6_title": "Loading and Dispatch",
        "feat6_desc": "Smart algorithms that reduce delivery times and operational costs by up to 30%.",
        "steps_title": "Start optimizing in 4 simple steps",
        "steps_subtitle": "No technical knowledge required. We guide you through the entire process.",
        "step1_title": "Integrate your operation",
        "step1_desc": "We connect REFRIO with your logistics processes and gather key inventory data.",
        "step2_title": "Configure inventory",
        "step2_desc": "Define products, batches, critical levels, and monitoring parameters.",
        "step3_title": "Activate monitoring",
        "step3_desc": "Supervise temperature, stock, traceability, and events in real-time.",
        "step4_title": "Optimize decisions",
        "step4_desc": "Manage departures, replenishment, and analysis from a single place.",
        "test_title": "Success Stories",
        "test_subtitle": "See what the market says about us",
        "prc_title": "Pricing Plans",
        "prc_subtitle": "Choose the plan that best fits your operation"
    }
};

function switchLanguage(lang) {
    localStorage.setItem('refrio_lang', lang);
    const btnEs = document.getElementById('lang-es');
    const btnEn = document.getElementById('lang-en');
    
    if (btnEs && btnEn) {
        btnEs.className = (lang === 'es') ? 'active' : '';
        btnEn.className = (lang === 'en') ? 'active' : '';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú Hamburguesa
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('#mobileMenu nav a');
    
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('open');
            });
        });
    }

    // 2. Traducciones
    let savedLang = localStorage.getItem('refrio_lang') || 'es';
    switchLanguage(savedLang);

    // 3. Modal de Autenticación
    const btnLogin = document.getElementById('btnLogin');
    const btnRegister = document.getElementById('btnRegister');
    const authModal = document.getElementById('authModal');
    const closeModalBtn = document.getElementById('closeModal');
    
    const modalTitle = document.getElementById('modalTitle');
    const authSubmitBtn = document.getElementById('authSubmitBtn');
    const phoneGroup = document.getElementById('phoneGroup');
    const authPhone = document.getElementById('authPhone');
    const authForm = document.getElementById('authForm');
    const authSwitchText = document.getElementById('authSwitchText');
    const authSwitchLink = document.getElementById('authSwitchLink');
    
    let isLoginMode = true; 

    function openModal(mode = 'login') {
        isLoginMode = (mode === 'login');
        updateModalUI();
        authModal.classList.add('show');
        
        if(hamburgerBtn.classList.contains('active')) {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('open');
        }
    }

    function closeAuthModal() {
        authModal.classList.remove('show');
        authForm.reset();
    }

    function updateModalUI() {
        if (isLoginMode) {
            modalTitle.textContent = 'Iniciar Sesión';
            authSubmitBtn.textContent = 'Ingresar';
            phoneGroup.style.display = 'none'; 
            authPhone.removeAttribute('required');
            authSwitchText.textContent = '¿No tienes cuenta?';
            authSwitchLink.textContent = 'Regístrate aquí';
        } else {
            modalTitle.textContent = 'Registro';
            authSubmitBtn.textContent = 'Crear cuenta';
            phoneGroup.style.display = 'block'; 
            authPhone.setAttribute('required', 'true');
            authSwitchText.textContent = '¿Ya tienes cuenta?';
            authSwitchLink.textContent = 'Inicia sesión aquí';
        }
    }

    if (btnLogin) btnLogin.addEventListener('click', () => openModal('login'));
    if (btnRegister) btnRegister.addEventListener('click', () => openModal('register'));
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeAuthModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === authModal) closeAuthModal();
    });

    if (authSwitchLink) {
        authSwitchLink.addEventListener('click', (e) => {
            e.preventDefault();
            isLoginMode = !isLoginMode;
            updateModalUI();
        });
    }

    // 4. Validar inputs de celular (Solo números y + al inicio)
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let val = this.value;
            val = val.replace(/[^\d+]/g, '');
            val = val.replace(/(?!^)\+/g, '');
            this.value = val;
        });
    });

    // 5. Slider de Testimonios
    const track = document.getElementById('testimonialTrack');
    const cards = track ? track.querySelectorAll('.testimonial-card') : [];
    const dots = document.querySelectorAll('#testimonialDots .dot');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    let currentTestimonial = 0;

    function updateSlider(index) {
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
            card.style.display = (i === index) ? 'block' : 'none';
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentTestimonial = index;
    }

    if(prevBtn && nextBtn && cards.length > 0) {
        prevBtn.addEventListener('click', () => {
            let prev = currentTestimonial - 1;
            if(prev < 0) prev = cards.length - 1;
            updateSlider(prev);
        });
        nextBtn.addEventListener('click', () => {
            let next = currentTestimonial + 1;
            if(next >= cards.length) next = 0;
            updateSlider(next);
        });
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => updateSlider(i));
        });
    }

    // 6. Interruptor de Planes (Mensual / Anual)
    const billingToggle = document.getElementById('billingToggle');
    const labelMensual = document.getElementById('labelMensual');
    const labelAnual = document.getElementById('labelAnual');
    const priceBasic = document.getElementById('priceBasic');
    const pricePro = document.getElementById('pricePro');
    const priceEnt = document.getElementById('priceEnt');

    let isAnnual = false;
    const prices = {
        basic: { mo: 'S/ 59', yr: 'S/ 590' },
        pro: { mo: 'S/ 129', yr: 'S/ 1290' },
        ent: { mo: 'S/ 249', yr: 'S/ 2490' }
    };

    function updatePricing() {
        if (isAnnual) {
            billingToggle.classList.add('annual');
            labelAnual.classList.add('active');
            labelMensual.classList.remove('active');
            if(priceBasic) priceBasic.innerHTML = `${prices.basic.yr} <span>/yr</span>`;
            if(pricePro) pricePro.innerHTML = `${prices.pro.yr} <span>/yr</span>`;
            if(priceEnt) priceEnt.innerHTML = `${prices.ent.yr} <span>/yr</span>`;
        } else {
            billingToggle.classList.remove('annual');
            labelMensual.classList.add('active');
            labelAnual.classList.remove('active');
            if(priceBasic) priceBasic.innerHTML = `${prices.basic.mo} <span>/mo</span>`;
            if(pricePro) pricePro.innerHTML = `${prices.pro.mo} <span>/mo</span>`;
            if(priceEnt) priceEnt.innerHTML = `${prices.ent.mo} <span>/mo</span>`;
        }
    }

    if(billingToggle) {
        billingToggle.addEventListener('click', () => { isAnnual = !isAnnual; updatePricing(); });
        labelMensual.addEventListener('click', () => { isAnnual = false; updatePricing(); });
        labelAnual.addEventListener('click', () => { isAnnual = true; updatePricing(); });
    }

    // 7. Botones de Prueba/Comenzar abren el Modal de Registro
    const actionRegisterBtns = document.querySelectorAll('.action-register-btn');
    actionRegisterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('register');
        });
    });
});
