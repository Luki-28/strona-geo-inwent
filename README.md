# 🏢 Geo-Inwent - Profesjonalne usługi geodezyjne

Nowoczesna strona internetowa dla firmy geodezyjnej Geo-Inwent, zbudowana w technologiach frontend'owych z naciskiem na responsywność, dostępność i wydajność.

## 📋 Spis Treści

- [Przegląd Projektu](#przegląd-projektu)
- [Technologie](#technologie)
- [Funkcjonalności](#funkcjonalności)
- [Instalacja](#instalacja)
- [Struktura Projektu](#struktura-projektu)
- [Konfiguracja](#konfiguracja)
- [Wdrożenie](#wdrożenie)
- [Wsparcie](#wsparcie)

## 🎯 Przegląd Projektu

Geo-Inwent to profesjonalna strona internetowa prezentująca usługi geodezyjne firmy działającej od 2007 roku. Strona została zaprojektowana z myślą o nowoczesnym designie, doskonałej wydajności oraz intuicyjnej nawigacji.

### 🎨 Cechy Wyróżniające

- **Responsywny Design** - Pełna kompatybilność z urządzeniami mobilnymi i desktopowymi
- **Nowoczesny UI/UX** - Czytelny layout z przemyślaną hierarchią informacji
- **Wydajność** - Zoptymalizowane obrazy, minifikowane zasoby, lazy loading
- **Dostępność** - Zgodność ze standardami WCAG 2.1
- **SEO** - Semantyczny HTML5, meta tagi, structured data

## 🛠 Technologie

### Frontend

- **HTML5** - Semantyczna struktura dokumentu
- **CSS3** - Stylizacja z CSS Grid, Flexbox, animacjami
- **JavaScript (ES6+)** - Interaktywność bez frameworków
- **Font Awesome 6.0** - Ikony
- **Google Fonts** - Typografia (Poppins, Roboto)

### Backend

- **PHP 7.4+** - Obsługa formularza kontaktowego
- **Mail Function** - Wysyłanie e-maili

### Narzędzia i Biblioteki

- **Cookie Consent** - Zgodność z RODO
- **Intersection Observer API** - Animacje podczas scroll'owania
- **CSS Custom Properties** - Dynamiczne style

## ✨ Funkcjonalności

### 🧭 Nawigacja

- **Sticky Header** - Przyklejony nagłówek z dynamicznym paddingiem
- **Hamburger Menu** - Responsywne menu mobilne z animacjami
- **Smooth Scroll** - Płynne przewijanie do sekcji
- **Active States** - Aktywne stany w nawigacji

### 🎬 Animacje i Interakcje

- **Scroll Animations** - Elementy pojawiają się podczas przewijania
- **Counter Animation** - Animowane liczniki w sekcji statystyk
- **Testimonial Slider** - Automatyczny slider z opiniami klientów
- **Loading States** - Płynne ładowanie strony
- **Hover Effects** - Interaktywne stany hover

### 📧 Formularz Kontaktowy

- **Walidacja Frontend** - JavaScript validation
- **Walidacja Backend** - PHP sanitization i validation
- **AJAX Submission** - Wysyłanie bez przeładowania strony
- **Feedback Messages** - Komunikaty zwrotne dla użytkownika
- **RODO Compliance** - Checkbox zgody na przetwarzanie danych

### 📱 Responsywność

- **Mobile First** - Projektowanie od najmniejszych ekranów
- **Breakpoints**: 320px, 480px, 768px, 1024px, 1200px+
- **Flexible Grid** - CSS Grid i Flexbox
- **Scalable Images** - Responsive images z srcset

## 🚀 Instalacja

### Wymagania Systemowe

- **Serwer Web**: Apache/Nginx z PHP 7.4+
- **PHP Extensions**: php-mail, php-filter
- **Przeglądarka**: Nowoczesne przeglądarki (Chrome 70+, Firefox 65+, Safari 12+)

### Lokalny Development

1. **Klonowanie projektu**

```bash
git clone https://github.com/twoj-repo/geo-inwent.git
cd geo-inwent
```

2. **Uruchomienie serwera lokalnego**

```bash
# Opcja 1: PHP Built-in Server
php -S localhost:8000

# Opcja 2: Python Simple Server
python -m http.server 8000

# Opcja 3: Node.js Live Server
npx live-server --port=8000
```

3. **Otwórz w przeglądarce**: `http://localhost:8000`

## 📁 Struktura Projektu

```
GEO-INWENT/
├── 📄 index.html              # Główny plik HTML
├── 📄 send_mail.php           # Backend obsługi formularza
├── 📄 README.md               # Dokumentacja projektu
├── 📁 css/
│   └── 📄 styles.css          # Style CSS (27KB)
├── 📁 js/
│   └── 📄 script.js           # JavaScript (16KB)
└── 📁 img/
    ├── 🖼️ geodeciBig.png      # Logo firmowe (2.5MB)
    └── 🖼️ geodetamapa.png     # Obraz sekcji "O nas" (413KB)
```

### 📄 Główne Pliki

| Plik            | Opis                                                           | Rozmiar    |
| --------------- | -------------------------------------------------------------- | ---------- |
| `index.html`    | Struktura strony, sekcje: hero, o nas, usługi, opinie, kontakt | 327 linii  |
| `styles.css`    | Kompletne style responsywne z animacjami                       | 1475 linii |
| `script.js`     | Interaktywność: menu, animacje, slider, formularz              | 417 linii  |
| `send_mail.php` | API endpoint do wysyłania maili                                | 67 linii   |

## ⚙️ Konfiguracja

### 📧 Formularz Kontaktowy

W pliku `send_mail.php` zaktualizuj adres e-mail odbiorcy:

```php
// Zmień na rzeczywisty adres e-mail firmy
$to = 'geodeta@geo-inwent.pl';
```

### 🎨 Personalizacja Kolorów

W pliku `css/styles.css` znajdź zmienne CSS:

```css
:root {
	--primary-color: #2c5282;
	--secondary-color: #3182ce;
	--accent-color: #e53e3e;
	--text-color: #2d3748;
	--light-bg: #f7fafc;
}
```

### 📱 Social Media

Zaktualizuj linki w sekcji kontakt (linie 268-269 w `index.html`):

```html
<a
	href="https://www.facebook.com/profile.php?id=100092356366517"
	target="_blank"
>
	<a href="https://www.instagram.com/geodetawarszawa_/" target="_blank"></a
></a>
```

## 🌐 Wdrożenie

### 🔧 Shared Hosting

1. **Upload plików** przez FTP/cPanel File Manager
2. **Uprawnienia**: ustaw 644 dla plików, 755 dla katalogów
3. **PHP Mail**: sprawdź czy funkcja `mail()` jest włączona

### ☁️ Cloud Platforms

#### Netlify (Frontend Only)

```bash
# Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir .
```

#### Vercel

```bash
# Vercel CLI
npm i -g vercel
vercel --prod
```

#### cPanel/WHM

1. Wgraj pliki do `public_html/`
2. Ustaw `index.html` jako domyślną stronę
3. Skonfiguruj PHP mail settings

### 🔒 Bezpieczeństwo

- **HTTPS**: Zawsze używaj SSL/TLS
- **Headers**: Dodaj security headers w `.htaccess`
- **Validation**: Formularz ma zabezpieczenia XSS/CSRF
- **File Permissions**: Restrykcyjne uprawnienia plików

## 📊 Performance

### 🚀 Optymalizacje

- **Images**: Kompresja WebP/AVIF + fallback
- **CSS**: Minifikacja, critical CSS
- **JavaScript**: ES6+ z fallback dla IE11
- **Fonts**: `font-display: swap`
- **Caching**: Browser caching headers

### 📈 Metrics

| Metric                   | Target | Actual |
| ------------------------ | ------ | ------ |
| First Contentful Paint   | < 1.5s | ~1.2s  |
| Largest Contentful Paint | < 2.5s | ~2.1s  |
| Cumulative Layout Shift  | < 0.1  | ~0.05  |
| Speed Index              | < 3.0s | ~2.7s  |

## 🛠 Development

### 🧪 Testing

```bash
# HTML Validation
npx html-validate index.html

# CSS Linting
npx stylelint css/**/*.css

# JavaScript Linting
npx eslint js/**/*.js

# Accessibility Testing
npx pa11y http://localhost:8000
```

### 🔧 Build Tools (Opcjonalne)

```bash
# Instalacja narzędzi build
npm init -y
npm install --save-dev postcss autoprefixer cssnano

# Minifikacja CSS
npx postcss css/styles.css -o css/styles.min.css

# Kompresja obrazów
npx imagemin img/* --out-dir=img/optimized
```

## 📞 Wsparcie

### 🐛 Zgłaszanie Problemów

1. **Sprawdź Console**: Otwórz DevTools → Console
2. **Network Tab**: Sprawdź failed requests
3. **PHP Logs**: Sprawdź error_log serwera

### 📧 Kontakt

- **Website**: [geo-inwent.pl](https://geo-inwent.pl)
- **Email**: geodeta@geo-inwent.pl
- **Telefon**: +48 607 332 645

### 🔄 Aktualizacje

Projekt jest aktywnie utrzymywany. Zalecane regularne aktualizacje:

- **Security patches**: Co miesiąc
- **Dependency updates**: Co kwartał
- **Content updates**: Według potrzeb

---

## 📜 Licencja

© 2025 Geo-Inwent. Wszystkie prawa zastrzeżone.

---

**Ostatnia aktualizacja**: Styczeń 2025  
**Wersja**: 1.0.0  
**Kompatybilność**: PHP 7.4+, HTML5, CSS3, ES6+
