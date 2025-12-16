# Muzeum Wybrzeże 1939

Kompletna, skalowalna strona internetowa dla muzeum, zbudowana w React + Vite, gotowa do dalszego rozwoju.

## 🎯 Opis Projektu

Aplikacja webowa dla Muzeum Wybrzeże 1939 - instytucji kulturalnej poświęconej pamięci obrony polskiego wybrzeża podczas kampanii wrześniowej 1939 roku. Projekt obejmuje stronę publiczną dla odwiedzających oraz panel administracyjny do zarządzania treścią.

## ✨ Funkcjonalności

### Strona Publiczna
- **Strona główna** - aktualności i zapowiedzi wydarzeń
- **O muzeum** - historia, misja i wartości
- **Wystawy** - aktualne i archiwalne
- **Wydarzenia** - kalendarz wydarzeń muzealnych
- **Edukacja** - oferta edukacyjna i warsztaty
- **Zbiory** - informacje o kolekcjach muzealnych
- **Zwiedzanie** - godziny otwarcia, bilety, dojazd
- **Aktualności** - blog z wiadomościami
- **Kontakt** - dane kontaktowe i formularz

### Panel Administracyjny
- **Dashboard** - statystyki i szybki dostęp
- **Zarządzanie aktualnościami** - dodawanie, edycja, usuwanie newsów
- **Zarządzanie wydarzeniami** - administracja kalendarzem wydarzeń
- **Zarządzanie wystawami** - kontrola wystaw aktualnych i archiwalnych
- **System logowania** - bezpieczny dostęp do panelu admina

## 🏗️ Architektura

### Struktura Projektu

```
src/
├── components/          # Komponenty wielokrotnego użytku
│   ├── common/         # Wspólne komponenty (Hero, Card, itp.)
│   └── layout/         # Komponenty układu (Navigation, Footer, Layouts)
├── pages/              # Strony aplikacji
│   ├── public/         # Strony publiczne
│   └── admin/          # Strony panelu administratora
├── services/           # Warstwa danych i API
├── data/               # Mock dane (JSON)
├── hooks/              # Custom React hooks (gotowe do rozbudowy)
└── utils/              # Funkcje pomocnicze (gotowe do rozbudowy)
```

### Technologie

- **React 19** - biblioteka UI
- **Vite** - bundler i dev server
- **React Router** - routing
- **CSS Custom Properties** - system designu
- **ESLint** - linting kodu

## 🚀 Instalacja i Uruchomienie

### Wymagania
- Node.js 16+ i npm

### Instalacja

```bash
# Klonowanie repozytorium
git clone https://github.com/4L3M/Wybrzeze1939.git
cd Wybrzeze1939

# Instalacja zależności
npm install
```

### Uruchomienie

```bash
# Tryb deweloperski
npm run dev

# Build produkcyjny
npm run build

# Podgląd buildu
npm run preview

# Linting
npm run lint
```

## 🎨 Design System

Aplikacja wykorzystuje minimalistyczny, instytucjonalny design odpowiedni dla muzeum:

### Kolorystyka
- **Primary**: `#2c3e50` - główny kolor nawigacji i nagłówków
- **Accent**: `#8b7355` - akcenty i wyróżnienia
- **Background**: `#ffffff` / `#f8f9fa` - tła
- **Text**: `#2c3e50` - tekst główny

### Responsywność
Aplikacja jest w pełni responsywna i działa poprawnie na:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (<768px)

## 👤 Panel Administracyjny

### Logowanie
```
URL: /admin/login
Username: admin
Password: admin123
```

**UWAGA**: To są dane demonstracyjne. W produkcji należy zaimplementować właściwe uwierzytelnianie.

### Funkcje Admina
1. **Dashboard** - przegląd statystyk
2. **Zarządzanie treścią** - CRUD dla aktualności, wydarzeń, wystaw
3. **Formularz edycji** - intuicyjne formularze z walidacją

## 📊 Dane

Aplikacja obecnie używa mock danych z plików JSON w katalogu `src/data/`:
- `news.json` - aktualności
- `events.json` - wydarzenia
- `exhibitions.json` - wystawy

### Integracja z Backend

Warstwa serwisowa (`src/services/dataService.js`) jest zaprojektowana tak, aby łatwo podpiąć backend:

```javascript
// Przykład podpięcia REST API
export const newsService = {
  async getAll() {
    const response = await fetch('/api/news');
    return response.json();
  },
  // ... inne metody
};
```

Zalecane backendy:
- **Supabase** - dla szybkiego startu
- **REST API** - custom backend
- **Strapi** - headless CMS
- **Firebase** - dla prostych rozwiązań

## 🔒 Bezpieczeństwo

- Panel admin chroniony mock autentykacją (do zastąpienia w produkcji)
- Dane użytkownika przechowywane w localStorage (do zastąpienia w produkcji)
- Przygotowane pod implementację JWT/OAuth
- ESLint sprawdza jakość kodu

## 🧪 Testowanie

Projekt nie zawiera testów jednostkowych, ale struktura jest przygotowana do łatwego dodania:
- Jest-friendly structure
- Komponenty są odizolowane i testowalne
- Service layer umożliwia łatwe mockowanie

## 📝 Dobre Praktyki

Projekt został zbudowany zgodnie z best practices:
- ✅ Modularna struktura kodu
- ✅ Oddzielenie logiki biznesowej od UI
- ✅ Reusable components
- ✅ Semantic HTML
- ✅ Accessibility considerations
- ✅ Clean code principles
- ✅ Komentarze w kluczowych miejscach

## 🔄 Dalszy Rozwój

Aplikacja jest gotowa do rozbudowy o:

1. **Backend Integration**
   - Podpięcie prawdziwej bazy danych
   - Implementacja REST API / GraphQL
   - System uwierzytelniania (JWT, OAuth)

2. **Dodatkowe Funkcje**
   - System rezerwacji biletów online
   - Wirtualne zwiedzanie 3D
   - Newsletter
   - Wyszukiwarka w zbiorach
   - Multilanguage support

3. **SEO i Performance**
   - Meta tags optimization
   - Image optimization
   - Code splitting
   - Server-side rendering (Next.js)

4. **Testy**
   - Unit tests (Jest, React Testing Library)
   - E2E tests (Playwright, Cypress)
   - Integration tests

5. **DevOps**
   - CI/CD pipeline
   - Docker containerization
   - Deployment automation

## 📄 Licencja

Ten projekt został stworzony dla Muzeum Wybrzeże 1939.

## 👥 Kontakt

Dla pytań technicznych lub wsparcia, proszę otworzyć issue w repozytorium GitHub.

---

**Projekt gotowy do produkcji po dodaniu prawdziwego backendu i systemu uwierzytelniania.**
