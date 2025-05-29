// Dodanie klasy "loading" do body przed załadowaniem strony
document.documentElement.classList.add('js-loaded');
document.body.classList.add('loading');

// Obsługa menu mobilnego
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    // Inicjalizacja stanu menu mobilnego
    menuToggle.setAttribute('aria-expanded', 'false');
    
    // Przełączanie menu mobilnego
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        
        // Animacja hamburger menu
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
        
        // Zablokowanie przewijania strony, gdy menu jest otwarte
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            menuToggle.setAttribute('aria-expanded', 'true');
        } else {
            document.body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Zamykanie menu po kliknięciu w link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            
            // Resetowanie animacji hamburger menu
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
            
            // Przywrócenie przewijania strony
            document.body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Zamykanie menu po kliknięciu poza nim
    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
            
            // Resetowanie animacji hamburger menu
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
            
            // Przywrócenie przewijania strony
            document.body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Efekt przyklejania nagłówka
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '15px 0';
            header.classList.add('scrolled');
        } else {
            header.style.padding = '25px 0';
            header.classList.remove('scrolled');
        }
    });
    
    // Płynne przewijanie do sekcji po kliknięciu w menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Jeśli kliknięte tylko "#" (logo), przewijaj do samej góry
            if (targetId === "#") {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Obsługa przycisku przewiń w dół
    const scrollDownBtn = document.getElementById('scrollDown');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function() {
            const nextSection = document.getElementById('o-nas');
            const headerHeight = document.querySelector('header').offsetHeight;
            
            if (nextSection) {
                const targetPosition = nextSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Animowane liczniki
    function animateCounters() {
        const counters = document.querySelectorAll('.counter-number');
        const speed = 200; // Im niższa wartość, tym szybciej
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(() => animateCounters(), 1);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Slider z opiniami klientów
    const testimonialSlider = {
        currentSlide: 0,
        items: document.querySelectorAll('.testimonial-item'),
        dots: document.querySelectorAll('.dot'),
        prevBtn: document.querySelector('.testimonial-btn.prev'),
        nextBtn: document.querySelector('.testimonial-btn.next'),
        
        init: function() {
            if (!this.items.length) return;
            
            this.showSlide(this.currentSlide);
            
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => {
                    this.prevSlide();
                });
            }
            
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => {
                    this.nextSlide();
                });
            }
            
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    this.showSlide(index);
                });
            });
            
            // Automatyczne przełączanie slajdów co 5 sekund
            setInterval(() => {
                this.nextSlide();
            }, 5000);
        },
        
        showSlide: function(index) {
            this.currentSlide = index;
            
            // Sprawdzenie granic slidera
            if (this.currentSlide >= this.items.length) {
                this.currentSlide = 0;
            }
            
            if (this.currentSlide < 0) {
                this.currentSlide = this.items.length - 1;
            }
            
            // Ukrycie wszystkich slajdów
            this.items.forEach(item => {
                item.classList.remove('active');
            });
            
            // Usunięcie aktywnej klasy z kropek
            this.dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Pokazanie aktywnego slajdu
            this.items[this.currentSlide].classList.add('active');
            this.dots[this.currentSlide].classList.add('active');
        },
        
        nextSlide: function() {
            this.showSlide(this.currentSlide + 1);
        },
        
        prevSlide: function() {
            this.showSlide(this.currentSlide - 1);
        }
    };
    
    // Wywołanie inicjalizacji slidera
    testimonialSlider.init();
    
    // Obsługa formularza kontaktowego
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pobieranie danych z formularza
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            
            // Informacja o przetwarzaniu
            formStatus.innerHTML = '<div class="processing-message">Wysyłanie wiadomości...</div>';
            
            // Wysyłanie danych do serwera za pomocą fetch API
            fetch('send_mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Sukces
                    formStatus.innerHTML = '<div class="success-message">' + data.message + '</div>';
                    
                    // Czyszczenie formularza
                    contactForm.reset();
                    
                    // Ukrycie komunikatu po 5 sekundach
                    setTimeout(() => {
                        formStatus.innerHTML = '';
                    }, 5000);
                } else {
                    // Błąd
                    formStatus.innerHTML = '<div class="error-message">' + data.message + '</div>';
                    
                    // Ukrycie komunikatu po 5 sekundach
                    setTimeout(() => {
                        formStatus.innerHTML = '';
                    }, 5000);
                }
            })
            .catch(error => {
                // Błąd połączenia
                formStatus.innerHTML = '<div class="error-message">Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.</div>';
                
                // Ukrycie komunikatu po 5 sekundach
                setTimeout(() => {
                    formStatus.innerHTML = '';
                }, 5000);
            });
        });
    }
    
    // Animacja przy przewijaniu - funkcja sprawdzająca czy element jest widoczny
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight - 100 &&
            rect.bottom >= 0
        );
    }
    
    // Elementy do animacji przy przewijaniu
    const animatedElements = document.querySelectorAll('.service-card, .project-card, .feature-card, .about-content, .contact-container, .testimonial-slider, .counter-item, .cta-content');
    
    // Funkcja obsługująca animację przy przewijaniu
    function handleScrollAnimation() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
                
                // Uruchomienie animacji liczników, gdy sekcja jest widoczna
                if (element.classList.contains('counter-item') && !element.classList.contains('counted')) {
                    element.classList.add('counted');
                    animateCounters();
                }
            }
        });
    }
    
    // Wywołanie funkcji przy załadowaniu strony
    handleScrollAnimation();
    
    // Wywołanie funkcji przy przewijaniu
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Usunięcie klasy "loading" z body po załadowaniu strony
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.body.classList.remove('loading');
        }, 300);
        
        // Ponowne sprawdzenie animacji po pełnym załadowaniu
        handleScrollAnimation();
    });

    // Cookie Consent Initialization
    if (typeof CookieConsent !== 'undefined') {
        CookieConsent.run({
            categories: {
                necessary: {
                    enabled: true,  // Zawsze wymagane
                    readOnly: true
                },
                analytics: {},
                marketing: {}
            },
            language: {
                default: 'pl',
                translations: {
                    pl: {
                        consentModal: {
                            title: 'Ta strona używa plików cookies!',
                            description: 'Używamy plików cookie, aby poprawić komfort przeglądania, wyświetlać spersonalizowane reklamy lub treści oraz analizować nasz ruch. Klikając "Akceptuj wszystko", wyrażasz zgodę na używanie przez nas plików cookie. <a href="#polityka-prywatnosci" target="_blank" class="cc__link">Czytaj więcej</a>',
                            acceptAllBtn: 'Akceptuj wszystko',
                            acceptNecessaryBtn: 'Tylko niezbędne',
                            showPreferencesBtn: 'Ustawienia'
                        },
                        preferencesModal: {
                            title: 'Ustawienia preferencji cookies',
                            acceptAllBtn: 'Akceptuj wszystko',
                            acceptNecessaryBtn: 'Tylko niezbędne',
                            savePreferencesBtn: 'Zapisz ustawienia',
                            closeIconLabel: 'Zamknij okno',
                            sections: [
                                {
                                    title: 'Niezbędne Cookies',
                                    description: 'Te pliki cookie są niezbędne do prawidłowego funkcjonowania strony internetowej i nie mogą być wyłączone w naszych systemach. Zazwyczaj są one ustawiane tylko w odpowiedzi na działania podejmowane przez Ciebie, które są równoznaczne z żądaniem usług, takie jak ustawienie preferencji prywatności, logowanie lub wypełnianie formularzy.',
                                    linkedCategory: 'necessary'
                                },
                                {
                                    title: 'Cookies analityczne',
                                    description: 'Te pliki cookie pozwalają nam liczyć wizyty i źródła ruchu, dzięki czemu możemy mierzyć i poprawiać wydajność naszej strony. Pomagają nam dowiedzieć się, które strony są najbardziej i najmniej popularne oraz zobaczyć, jak odwiedzający poruszają się po stronie.',
                                    linkedCategory: 'analytics'
                                },
                                {
                                    title: 'Cookies marketingowe',
                                    description: 'Te pliki cookie mogą być ustawiane za pośrednictwem naszej strony przez naszych partnerów reklamowych. Mogą być one wykorzystywane przez te firmy do budowania profilu Twoich zainteresowań i wyświetlania odpowiednich reklam na innych stronach.',
                                    linkedCategory: 'marketing'
                                }
                            ]
                        }
                    }
                }
            }
        });
    }
});

// Dodatkowe style dla animacji przy przewijaniu
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .service-card, .project-card, .feature-card, .about-content, .contact-container, .testimonial-slider, .counter-item, .cta-content {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .service-card.visible, .project-card.visible, .feature-card.visible, .about-content.visible, .contact-container.visible, .testimonial-slider.visible, .counter-item.visible, .cta-content.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .success-message {
            color: #34c759;
            padding: 10px;
            border-radius: 4px;
            background-color: rgba(52, 199, 89, 0.1);
        }
        .processing-message {
            color: #007bff;
            padding: 10px;
            border-radius: 4px;
            background-color: rgba(0, 123, 255, 0.1);
        }
        .error-message {
            color: #dc3545;
            padding: 10px;
            border-radius: 4px;
            background-color: rgba(220, 53, 69, 0.1);
        }
        .menu-toggle span.active:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        .menu-toggle span.active:nth-child(2) {
            opacity: 0;
        }
        .menu-toggle span.active:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }
    `;
    document.head.appendChild(style);
}); 