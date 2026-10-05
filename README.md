# Meine Chili-Welt

**Studienprojekt Web-Programmierung (DLBUXPWP01) | B.Sc. Informatik**
**IU Internationale Hochschule**

## Projektbeschreibung

„Meine Chili-Welt“ ist ein responsiver, statischer Webauftritt rund um mein Hobby:
Chilis selbst anbauen, ernten und verarbeiten. Die Website zeigt Einsteigern, wie sie
Chilis von der Aussaat bis zur fertigen Sauce selbst ziehen können. Die Inhalte stammen
aus meinen eigenen Erfahrungen mit dem Anbau auf der Fensterbank und im Hochbeet.

**Zielgruppe:** Hobbygärtner:innen, Einsteiger im Chili-Anbau und alle, die gerne
scharf essen.

**Technischer Schwerpunkt:** semantisches HTML5, Mobile-First-Entwicklung und
Barrierefreiheit nach WCAG 2.1 und WAI-ARIA.

## Inhaltsverzeichnis

- [Entwicklungsstand (Phase 1)](#entwicklungsstand-phase-1)
- [Seitenstruktur & Inhalte](#seitenstruktur--inhalte)
- [Eingesetzte HTML-Elemente](#eingesetzte-html-elemente)
- [Barrierefreiheit](#barrierefreiheit)
- [Konzept & Wireframes](#konzept--wireframes)
- [Responsive Design & Breakpoint-Konzept](#responsive-design--breakpoint-konzept)
- [Git-Workflow](#git-workflow)
- [Repository-Struktur](#repository-struktur)
- [Bildnachweise](#bildnachweise)
- [Autor](#autor)

## Entwicklungsstand (Phase 1)

- **HTML5:** Alle 8 Seiten sind als semantisches HTML mit ihren Inhalten angelegt,
  einschließlich der Detail-Fenster zu Anbauphasen, Sorten und Verarbeitungsmethoden.
- **CSS:** `src/css/style.css` ist angelegt, aber noch leer. Die Klassen im HTML folgen
  bereits der BEM-Namenskonvention (z. B. `card__title`, `site-nav__link`,
  `button--primary`), sodass das Styling in Phase 2 direkt darauf aufsetzen kann.
- **JavaScript:** `src/js/script.js` ist angelegt, aber noch leer. Im HTML sind die
  Bedienelemente vorbereitet: der Theme-Umschalter (`<button class="theme-toggle">`)
  und die Buttons, die über `data-dialog` ihr Detail-Fenster referenzieren.
- **Versionskontrolle:** Git und GitHub mit Commits nach Conventional Commits.

## Seitenstruktur & Inhalte

| Datei | Seite | Inhalte |
| :--- | :--- | :--- |
| `index.html` | Startseite | Hero mit Begrüßung, kurzer Vorstellung und Links zum Anbau-Guide und zu den Chilisorten; Zeitleiste zur Geschichte der Chilis; „Warum sind Chilis scharf?“ |
| `growing.html` | Anbau | 6 Anbauphasen von der Aussaat bis zum Überwintern, Pflege während der Saison (Licht, Gießen, Düngen), Aussaat- und Erntekalender |
| `varieties.html` | Chilisorten | Die fünf kultivierten Chili-Arten; fünf Sorten im Porträt (alphabetisch) mit Schärfeanzeige und Herkunft |
| `harvest.html` | Ernte & Verarbeitung | 6 Verarbeitungsmethoden: frisch, trocknen, Flocken, Pulver, Öl, Hot Sauce |
| `about.html` | Über mich / Kontakt | Geschichte hinter der Website, Kontaktwege, Kontaktformular |
| `impressum.html` | Impressum | Angaben gemäß § 5 DDG, Kontakt, Haftungsausschluss |
| `datenschutz.html` | Datenschutz | Verantwortliche Stelle, Hosting, Kontaktformular, lokale Speicherung, Rechte der Betroffenen |
| `404.html` | Fehlerseite | „Hier wächst leider nichts!“ mit Keimling-Illustration und Links zur Startseite und zum Anbau-Guide |

Die Hauptnavigation verlinkt die ersten fünf Seiten. Impressum und Datenschutz sind über
die Fußzeile jeder Seite erreichbar. Zu jeder Anbauphase, Sorte und Verarbeitungsmethode
gibt es ein Detail-Fenster (Schritt-für-Schritt-Anleitung, Steckbrief bzw. Rezept), das
sich über „Mehr erfahren“ öffnet.

## Eingesetzte HTML-Elemente

- **Seitenstruktur:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`,
  `<figure>`, `<footer>`, `<address>`
- **`<details>` / `<summary>`:** aufklappbare Übersicht der fünf Chili-Arten
- **`<dialog>`:** Detail-Fenster, Schließen über `<form method="dialog">`
- **`<table>`:** Aussaat- und Erntekalender mit `<caption>` und `<th scope>`
- **`<meter>`:** Schärfe der Sorten auf einer Skala von 1 bis 5
- **`<ol>`:** Abfolgen mit fester Reihenfolge (Anbauphasen, Zeitleiste)
- **`<ul>`:** Kartenlisten, Navigation
- **`<dl>`:** Begriff-Erklärung-Paare (Pflegethemen, Steckbriefe der Arten)
- **`<time>`:** maschinenlesbare Jahreszahlen in der Zeitleiste
- **`<form>`:** Kontaktformular mit `required`, `type="email"` und `autocomplete`
- **Bilder:** `srcset` und `sizes` für das Hero-Bild, `loading="lazy"` für Kartenbilder

## Barrierefreiheit

- **Sprache:** `lang="de"` auf allen Seiten, lateinische Artnamen mit `lang="la"`
- **Skip-Link:** „Zum Inhalt springen“ zu Beginn jeder Seite
- **Navigation:** `aria-label` für die Hauptnavigation, aktuelle Seite mit
  `aria-current="page"`
- **Abschnitte:** über `aria-labelledby` mit ihrer Überschrift verknüpft
- **Bilder:** beschreibende `alt`-Texte; leeres `alt` bei rein dekorativen Grafiken
  (404-Illustration) und beim Logo, dessen Link bereits den Text „Meine Chili-Welt“ trägt
- **Eindeutige Buttontexte:** „Mehr erfahren“ wird für Screenreader per versteckter
  Ergänzung (Klasse `visually-hidden`) zu z. B. „Mehr erfahren zu Aussaat“
- **Detail-Fenster:** `aria-haspopup="dialog"` an den auslösenden Buttons,
  `aria-labelledby` am `<dialog>`
- **Kalender:** Symbole (●) mit `aria-hidden="true"` und verstecktem Ersatztext „ja“;
  die Tabelle liegt in einem per Tastatur erreichbaren Bereich (`tabindex="0"`,
  `role="region"`)
- **Formular:** jedes Feld mit verknüpftem `<label>`, Pflichtfelder mit `required` und
  „*“, Hinweis auf Pflichtfelder über dem Formular
- **Theme-Umschalter:** `aria-pressed` für den Zustand, `aria-label` als Beschriftung

## Konzept & Wireframes

Für Phase 1 wurden ein Konzept und LoFi-Wireframes erstellt (Abgabe als PDF in
PebblePad). Die Wireframes zeigen jede Seite in der Mobile- und Desktop-Ansicht, Anbau,
Chilisorten sowie Ernte & Verarbeitung zusätzlich in der Tablet-Ansicht, dazu die
Detail-Fenster. Sie legen Inhalte, Anordnung und responsives Verhalten fest; Farben und
Schriften werden in Phase 2 festgelegt.

## Responsive Design & Breakpoint-Konzept

Das Layout wird nach dem **Mobile-First-Prinzip** umgesetzt und soll von **360px bis
1920px** Breite fehlerfrei funktionieren. Das folgende Konzept stammt aus den Wireframes;
die CSS-Umsetzung erfolgt in Phase 2.

| Bereich | Breite | Verhalten |
| :--- | :--- | :--- |
| **Mobile** | < 768px | Inhalte untereinander, Hamburger-Menü, Kalender als Monatsblöcke |
| **Tablet** | 768–1199px | Karten auf Anbau, Chilisorten sowie Ernte & Verarbeitung zweispaltig, Kalender als Tabelle, Hamburger-Menü |
| **Desktop** | ≥ 1200px | Vollständige Navigationsleiste, 3- bis 5-spaltige Raster, Hero zweispaltig, Inhalt in einem zentrierten Container mit max. 1200px |

## Git-Workflow

Commits folgen dem Standard [Conventional Commits](https://www.conventionalcommits.org/de/):

| Präfix | Verwendung |
| :--- | :--- |
| `feat:` | Neue Seite, neuer Abschnitt oder neue Funktion |
| `fix:` | Fehlerkorrektur |
| `refactor:` | Umstrukturierung ohne Änderung der Funktion |
| `docs:` | Dokumentation und Code-Kommentare |
| `chore:` | Wartung, z. B. Bilder und Projektdateien |
| `ci:` | Änderungen an der Deployment-Pipeline (GitHub Actions) |

Der Abgabestand von Phase 1 ist mit dem Git-Tag `v1.0-konzept` markiert.

## Repository-Struktur

```text
.
├── .github/
│   └── workflows/
│       └── pages.yml        # Deployment auf GitHub Pages (GitHub Actions)
├── README.md                # Projektdokumentation
└── src/
    ├── index.html           # Startseite
    ├── growing.html         # Anbau
    ├── varieties.html       # Chilisorten
    ├── harvest.html         # Ernte & Verarbeitung
    ├── about.html           # Über mich / Kontakt
    ├── impressum.html       # Impressum
    ├── datenschutz.html     # Datenschutzerklärung
    ├── 404.html             # Fehlerseite
    ├── css/
    │   └── style.css        # Stylesheet (Phase 2)
    ├── js/
    │   └── script.js        # Skript (Phase 2)
    └── images/              # Logo, Fotos und 404-Illustration
```

## Bildnachweise

### Eigene Fotos

Diese Fotos habe ich selbst aufgenommen:
`growing-sowing.jpg`, `harvest-flakes.jpg`.

### Fotos von Pexels und Unsplash

Die folgenden Fotos stammen von [Pexels](https://www.pexels.com/de-de/lizenz/) bzw.
[Unsplash](https://unsplash.com/de/lizenz) und stehen unter der jeweiligen Lizenz
(kostenlose Nutzung, keine Namensnennung erforderlich).
Sie wurden auf 800 × 600 px (4:3) zugeschnitten, das Hero-Bild zusätzlich auf
1600 × 1200 px.

| Datei | Foto | Fotograf/in | Quelle |
|---|---|---|---|
| `hero-chilis.jpg` (inkl. `hero-chilis-800.jpg`) | [Selektive Fokusfotografie von roten Chilis](https://unsplash.com/photos/jri16E_lTl0) | Nick Artman | Unsplash |
| `harvest-fresh.jpg` | [Red Chili Peppers on a Bowl](https://www.pexels.com/photo/8365793/) | Ahsanjaya | Pexels |
| `harvest-drying.jpg` | [Row of Red Chili Peppers Hanging on a String](https://www.pexels.com/photo/5320086/) | Roman Odintsov | Pexels |
| `harvest-powder.jpg` | [Rotes Chili auf Klarglasschale](https://unsplash.com/photos/ul3G99O5oIA) | Towfiqu barbhuiya | Unsplash |
| `harvest-oil.jpg` | [Indonesian spicy chili oil with garlic](https://www.pexels.com/photo/36453286/) | Candra Bagus | Pexels |
| `harvest-hot-sauce.jpg` | [Glas mit roter Soße neben einer Schale Chilischoten](https://unsplash.com/photos/iNAxJX8rCNU) | Monika Borys | Unsplash |
| `growing-germination.jpg` | [Young sprouts growing in seed trays outdoors](https://www.pexels.com/photo/113335/) | Markus Spiske | Pexels |
| `growing-repotting.jpg` | [Seedling in a small black pot](https://unsplash.com/photos/6Tu1SzspgJ4) | Jonathan Kemper | Unsplash |
| `growing-planting-out.jpg` | [Green Plants Growing on Good Soil](https://www.pexels.com/photo/13533594/) | Mateusz Feliksik | Pexels |
| `growing-flowering.jpg` | [Pepper plant with white flowers](https://unsplash.com/photos/kZT8-l5mr0E) | Lhar Capili | Unsplash |
| `growing-overwintering.jpg` | [Red Chili Peppers](https://www.pexels.com/photo/3208324/) | Krisztina Papp | Pexels |
| `variety-jalapeno.jpg` | [Close-up of Vibrant Fresh Jalapeños at Market](https://www.pexels.com/photo/36033282/) | Tim Mossholder | Pexels |
| `variety-cayenne.jpg` | [Rote und grüne Jalapeno-Chilis](https://unsplash.com/photos/L2xhGmPmMNs) | Steve A Johnson | Unsplash |
| `variety-habanero.jpg` | [Abundance of Peppers](https://www.pexels.com/photo/19029815/) | Terrance Barksdale | Pexels |
| `variety-carolina-reaper.jpg` | [Bunch of Red Chili Peppers in Close Up Photography](https://www.pexels.com/photo/13400207/) | Anyasez | Pexels |

### Fotos unter Creative-Commons-Lizenz

Diese Fotos stammen von [Wikimedia Commons](https://commons.wikimedia.org/) und dürfen
nur mit Namensnennung und Angabe der Lizenz verwendet werden.
Sie wurden auf 800 × 600 px (4:3) zugeschnitten und verkleinert.

| Datei | Foto | Urheber/in | Lizenz |
|---|---|---|---|
| `variety-aji-amarillo.jpg` | [Aji amarillo flickr](https://commons.wikimedia.org/wiki/File:Aji_amarillo_flickr.jpg) | Marianne Serra | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |

## Autor

**Julian Biebl**
GitHub: [@BiaweDev](https://github.com/BiaweDev)
