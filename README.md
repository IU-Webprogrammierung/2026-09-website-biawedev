# Meine Chili-Welt

**Studienprojekt Web-Programmierung (DLBUXPWP01) | B.Sc. Informatik**
**IU Internationale Hochschule**

## Projektbeschreibung

„Meine Chili-Welt“ ist ein responsiver, statischer Webauftritt rund um das Hobby
Chili-Anbau: Chilis selbst anbauen, ernten und verarbeiten. Die Website zeigt Einsteigern, wie sie
Chilis von der Aussaat bis zur fertigen Sauce selbst ziehen können. Die Inhalte stammen
aus eigenen Erfahrungen mit dem Anbau auf der Fensterbank und im Hochbeet.

**Zielgruppe:** Hobbygärtner:innen, Einsteiger im Chili-Anbau und alle, die gerne
scharf essen.

**Technischer Schwerpunkt:** semantisches HTML5, Mobile-First-Entwicklung und
Barrierefreiheit nach WCAG 2.1 und WAI-ARIA.

**[Live-Version ansehen](https://iu-webprogrammierung.github.io/2026-09-website-biawedev/)**

## Inhaltsverzeichnis

- [Entwicklungsstand](#entwicklungsstand)
- [Seitenstruktur & Inhalte](#seitenstruktur--inhalte)
- [Konzept & Wireframes](#konzept--wireframes)
- [Responsive Design & Breakpoint-Konzept](#responsive-design--breakpoint-konzept)
- [Design: Farben, Schriften, Dark Mode](#design-farben-schriften-dark-mode)
- [Eingesetzte HTML-Elemente](#eingesetzte-html-elemente)
- [Barrierefreiheit](#barrierefreiheit)
- [JavaScript: Aufbau & Funktionen](#javascript-aufbau--funktionen)
- [Eingesetzte Funktionalitäten](#eingesetzte-funktionalitäten)
- [Ladeverhalten & Performance](#ladeverhalten--performance)
- [Testing & Qualitätssicherung](#testing--qualitätssicherung)
- [Git-Workflow](#git-workflow)
- [Repository-Struktur](#repository-struktur)
- [Bildnachweise](#bildnachweise)
- [Schriften](#schriften)
- [Autor](#autor)

## Entwicklungsstand

Das Portfolio entsteht in drei Phasen; jede Phase baut auf der vorherigen auf.

| Phase | Schwerpunkt | Stand | Git-Tag |
| :--- | :--- | :--- | :--- |
| **1 – Konzeption** | Konzept, Wireframes, semantisches HTML | abgeschlossen | `v1.0-konzept` |
| **2 – Erarbeitung** | CSS, JavaScript, Responsive Design, Tests | aktueller Stand | `v2.0-design` |
| **3 – Finalisierung** | abschließende Prüfung und Optimierung | folgt | `v3.0-final` |

### Phase 1 – Konzeption (abgeschlossen)

- **HTML5:** Alle 8 Seiten wurden als semantisches HTML mit ihren Inhalten angelegt,
  einschließlich der Detail-Fenster zu Anbauphasen, Sorten und Verarbeitungsmethoden.
- **Vorbereitung für Phase 2:** Die Klassen im HTML folgten schon der
  BEM-Namenskonvention (z. B. `card__title`, `site-nav__link`, `button--primary`), und
  die Bedienelemente waren vorbereitet: der Theme-Umschalter und die Buttons, die über
  `data-dialog` ihr Detail-Fenster referenzieren.
- **Konzept und Wireframes:** siehe [Konzept & Wireframes](#konzept--wireframes).
- **Versionskontrolle:** Git und GitHub mit Commits nach Conventional Commits, der
  Abgabestand ist mit dem Tag `v1.0-konzept` markiert.
- **Veröffentlichung:** automatisch über GitHub Pages (GitHub Actions bei jedem Push auf
  `main`).

### Phase 2 – Erarbeitung (aktueller Stand)

- **HTML5:** Header und Footer liegen als gemeinsame Bausteine in `components/` und werden
  per JavaScript in jede Seite geladen. Die Detail-Fenster sind als Web Component
  `<detail-dialog>` umgesetzt.
- **CSS:** `css/style.css` ist ein einziges, nach Themen gegliedertes Stylesheet
  (Schriften, Variablen, Basis, Layout, Komponenten, Seiten, Druck) mit BEM-Klassen.
- **JavaScript:** vier kleine Dateien in `js/` für Farbschema, Laden der Bausteine,
  Interaktionen und die Detail-Fenster (siehe [JavaScript](#javascript-aufbau--funktionen)).
- **Responsive:** Mobile First, getestet von 360 px bis 1920 px, hell und dunkel.
- **Überarbeitung nach Tutor-Feedback zu Phase 1:** `index.html` liegt jetzt in der
  obersten Ebene des Repositories, Sonderzeichen stehen direkt als UTF-8 statt als
  HTML-Entities.
- **Versionskontrolle:** Feature-Branches für größere Themen, kleinere Anpassungen direkt auf main.

### Phase 3 – Finalisierung

Abschließende Prüfung, Optimierung und Finalisierung des Gesamtergebnisses.

## Seitenstruktur & Inhalte

| Datei | Seite | Inhalte |
| :--- | :--- | :--- |
| `index.html` | Startseite | Hero mit Begrüßung, kurzer Vorstellung und Links zum Anbau-Guide und zu den Chilisorten; Zeitstrahl zur Geschichte der Chilis; „Warum sind Chilis scharf?“ |
| `growing.html` | Anbau | 6 Anbauphasen von der Aussaat bis zum Überwintern, Pflege während der Saison (Licht, Gießen, Düngen), Aussaat- und Erntekalender |
| `varieties.html` | Chilisorten | Die fünf kultivierten Chili-Arten; acht Sorten im Porträt (alphabetisch) mit Schärfeanzeige und Herkunft |
| `harvest.html` | Ernte & Verarbeitung | 6 Verarbeitungsmethoden: frisch, trocknen, Flocken, Pulver, Öl, Hot Sauce |
| `about.html` | Über mich / Kontakt | Geschichte hinter der Website, Kontaktwege, Kontaktformular |
| `impressum.html` | Impressum | Angaben gemäß § 5 DDG, Kontakt, Haftungsausschluss |
| `datenschutz.html` | Datenschutz | Verantwortliche Stelle, Hosting, Kontaktformular, lokale Speicherung, Rechte der Betroffenen |
| `404.html` | Fehlerseite | „Hier wächst leider nichts!“ mit Keimling-Illustration und Links zur Startseite und zum Anbau-Guide |

Die Hauptnavigation verlinkt die ersten fünf Seiten. Impressum und Datenschutz sind über
die Fußzeile jeder Seite erreichbar. Zu jeder Anbauphase, Sorte und Verarbeitungsmethode
gibt es ein Detail-Fenster (insgesamt 20: Schritt-für-Schritt-Anleitung, Steckbrief bzw.
Rezept), das sich über „Mehr erfahren“ öffnet.

## Konzept & Wireframes

Für Phase 1 wurden ein Konzept und LoFi-Wireframes erstellt (Abgabe als PDF in
PebblePad). Die Wireframes zeigen jede Seite in der Mobile- und Desktop-Ansicht, Anbau,
Chilisorten sowie Ernte & Verarbeitung zusätzlich in der Tablet-Ansicht, dazu die
Detail-Fenster. Sie legen Inhalte, Anordnung und responsives Verhalten fest.

In Phase 2 wurde das Konzept an einigen Stellen bewusst überarbeitet:

- **Kalender mobil:** Der Aussaat- und Erntekalender wird unter 768 px als 12 Monatsblöcke
  dargestellt statt als seitlich scrollende Tabelle.
- **Chili-Arten mobil:** Das Akkordeon startet komplett geschlossen (im Wireframe war die
  erste Art offen), damit die Seite mobil übersichtlich bleibt.
- **Chilisorten:** Statt fünf werden acht Sorten gezeigt, damit alle fünf Arten
  mit einem Beispiel vertreten sind.
- **Startseite:** Die Geschichte der Chilis ist als Zeitstrahl mit abwechselnden Karten
  gestaltet.
- **Detail-Fenster:** Mobil erscheinen sie als Bottom Sheet (Wischen am Titel schließt),
  ab 768 px zentriert; zwischen den Fenstern einer Seite kann geblättert werden.

## Responsive Design & Breakpoint-Konzept

Das Layout folgt dem **Mobile-First-Prinzip**: Das Basis-CSS gilt für kleine Bildschirme,
größere Viewports werden mit `min-width`-Media-Queries erweitert. Getestet ist der
Bereich von **360 px bis 1920 px**; der Inhalt steht ab 1200 px in einem zentrierten
Container mit maximal 1200 px Breite.

| Bereich | Breite | Verhalten |
| :--- | :--- | :--- |
| **Mobile** | < 768 px | Inhalte untereinander, Hamburger-Menü, Kalender als Monatsblöcke, Detail-Fenster als Bottom Sheet |
| **Tablet** | 768–1199 px | Karten zweispaltig, Kalender als Tabelle, Hamburger-Menü, Detail-Fenster zentriert |
| **Desktop** | ≥ 1200 px | Vollständige Navigationsleiste, Karten 3- bzw. 4-spaltig, Hero und Über-mich zweispaltig |

### Verhalten der Komponenten

- **Header & Navigation:** Unter 1200 px Logo, Theme-Umschalter und Hamburger-Button,
  das Menü öffnet sich per Button. Ab 1200 px steht die Navigation als Leiste im Header.
- **Karten (Anbau, Sorten, Ernte):** mobil 1 Spalte, ab 768 px 2 Spalten, ab 1200 px
  3 Spalten (Chilisorten 4 Spalten).
- **Chili-Arten (`<details>`):** unter 1200 px als Akkordeon, ab 1200 px liegen alle
  fünf Karten offen nebeneinander.
- **Kalender (`<table>`):** unter 768 px Monatsblöcke, darüber Tabelle; ist der Platz
  knapp, scrollt die Tabelle in einem eigenen Bereich, nicht die ganze Seite.
- **Zeitstrahl (Startseite):** mobil eine Spalte, ab 1200 px waagerecht mit abwechselnd
  oberhalb und unterhalb der Linie liegenden Karten.
- **Detail-Fenster:** unter 768 px Bottom Sheet, ab 768 px zentriert mit begrenzter Breite.
- **Bilder:** feste `width`/`height` und `aspect-ratio` verhindern Layout-Sprünge;
  das Hero-Bild nutzt `srcset` und `sizes`.

Zwei Ausnahmen vom Mobile-First-Prinzip nutzen eine `max-width`-Query:

- **Monatsblock-Ansicht des Kalenders** (`max-width: 767px`): Sonst müssten viele
  `display`-Regeln der Tabelle für größere Viewports wieder zurückgesetzt werden.
- **Aufklapp-Animation der Chili-Arten** (`max-width: 1199.98px`): Unter 1200 px sind die
  Chili-Arten ein Akkordeon, dessen Inhalt beim Öffnen sanft aufgleitet. Am Desktop sind
  dagegen alle fünf Karten dauerhaft offen: `script.js` öffnet sie direkt nach dem Laden. Die
  Animation darf dort nicht laufen, sonst würden sie bei jedem Seitenaufruf aufgleiten. Darum
  ist sie auf die Breiten unter 1200 px begrenzt.

## Design: Farben, Schriften, Dark Mode

Farben, Abstände und Schriften sind als **CSS-Variablen** (Custom Properties) in
`:root` definiert, sodass ein Design-Wechsel nur an einer Stelle erfolgt.

| Farbe | Wert (hell) | Verwendung |
| :--- | :--- | :--- |
| Chili-Rot | `#C62828` | Links, Buttons, Akzente (Kontrast 5,3:1) |
| Dunkelgrün | `#2E7D32` | Überschriften-Akzente, Zeitstrahl (4,8:1) |
| Orange | `#FF9800` | nur Dekoration, nie als Textfarbe |
| Beige | `#FFF8E1` | Seitenhintergrund |

- **Dark Mode:** Ein Umschalter im Header (Pill mit Sonne/Mond) setzt `data-theme` auf
  `<html>`. Die Wahl wird in `localStorage` gespeichert; ohne Wahl entscheidet die
  Systemeinstellung (`prefers-color-scheme`). Alle Farben des dunklen Designs sind
  ebenfalls Variablen und auf ausreichenden Kontrast geprüft.
- **Schriften:** Montserrat (Überschriften) und Open Sans (Text), selbst gehostet als
  variable `woff2`-Dateien (siehe [Schriften](#schriften)).
- **Abstände:** feste Skala (`--space-xs` bis `--space-xl`).
- **Druck:** Eine eigene `@media print`-Sektion druckt immer hell auf A4, blendet
  Bedienelemente aus, hängt bei externen Links die Adresse an und vermeidet Seitenumbrüche
  in Karten.

## Eingesetzte HTML-Elemente

- **Seitenstruktur:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`,
  `<figure>`, `<footer>`, `<address>`
- **`<details>` / `<summary>`:** aufklappbare Übersicht der fünf Chili-Arten
- **`<dialog>`:** Detail-Fenster mit `showModal()`, Schließen über `<form method="dialog">`;
  aufgebaut von der Web Component `<detail-dialog>` (siehe [JavaScript](#javascript-aufbau--funktionen))
- **`<table>`:** Aussaat- und Erntekalender mit `<caption>` und `<th scope>`
- **`<meter>`:** Schärfe der Sorten auf einer Skala von 0 bis 5 (`min="0" max="5"`)
- **`<ol>`:** Abfolgen mit fester Reihenfolge (Anbauphasen, Zeitstrahl)
- **`<ul>`:** Kartenlisten, Navigation
- **`<dl>`:** Begriff-Erklärung-Paare (Pflegethemen, Steckbriefe)
- **`<time>`:** maschinenlesbare Jahreszahlen im Zeitstrahl
- **`<form>`:** Kontaktformular mit `required`, `type="email"`, `autocomplete` und einer
  Pflicht-Checkbox für die Einwilligung (mit Link zur Datenschutzerklärung)
- **Bilder:** `srcset` und `sizes` für das Hero-Bild, `loading="lazy"` für Kartenbilder
- **Metadaten:** `<meta name="description">` je Seite, Favicon (SVG und PNG) und
  Apple-Touch-Icon

## Barrierefreiheit

- **Sprache:** `lang="de"` auf allen Seiten, lateinische Artnamen mit `lang="la"`
- **Struktur:** genau eine `<h1>` je Seite, keine übersprungenen Überschriftenebenen
  (auch in den Detail-Fenstern)
- **Skip-Link:** „Zum Inhalt springen“ zu Beginn jeder Seite
- **Tastatur:** alle Funktionen sind ohne Maus bedienbar; sichtbarer Fokusrahmen;
  Menü schließt mit Escape und gibt den Fokus an den Button zurück; Detail-Fenster
  schließen mit Escape, der Fokus kehrt zum auslösenden Button zurück, mit ←/→ wird
  zwischen den Fenstern geblättert
- **Navigation:** `aria-label` für die Hauptnavigation, aktuelle Seite mit
  `aria-current="page"`, Menü-Button mit `aria-expanded` und `aria-controls`
- **Abschnitte:** über `aria-labelledby` mit ihrer Überschrift verknüpft
- **Bilder:** beschreibende `alt`-Texte; leeres `alt` bei rein dekorativen Grafiken
  (404-Illustration) und beim Logo, dessen Link bereits den Text „Meine Chili-Welt“ trägt
- **Eindeutige Buttontexte:** „Mehr erfahren“ wird für Screenreader per versteckter
  Ergänzung (Klasse `visually-hidden`) zu z. B. „Mehr erfahren zu Aussaat“
- **Detail-Fenster:** `aria-haspopup="dialog"` an den auslösenden Buttons,
  `aria-labelledby` am `<dialog>` (von der Komponente gesetzt), Schließen-Button mit
  `aria-label`
- **Kalender:** Symbole (●) mit `aria-hidden="true"` und verstecktem Ersatztext „ja“;
  die Tabelle liegt in einem per Tastatur erreichbaren Bereich (`tabindex="0"`,
  `role="region"`)
- **Formular:** jedes Feld (auch die Einwilligungs-Checkbox) mit verknüpftem `<label>`,
  Pflichtfelder mit `required` und „*“, Hinweis auf Pflichtfelder über dem Formular;
  Fehlermeldungen per `aria-describedby` am Feld, Rückmeldung nach dem Absenden per
  `role="status"`, Fokus springt zum ersten fehlerhaften Feld
- **Theme-Umschalter:** `aria-pressed` für den Zustand, `aria-label` als Beschriftung
- **Kontraste:** Textfarben nach WCAG 2.1 AA (4,5:1, große Schrift 3:1) in beiden
  Designs; Feldrahmen mit mindestens 3:1; Orange wird nie für Text genutzt
- **Bewegung:** Animationen und weiches Scrollen sind nur aktiv, wenn der Nutzer keine
  reduzierte Bewegung eingestellt hat (`prefers-reduced-motion`)
- **Zoom und Textgröße:** Schriftgrößen in `rem`/`clamp()`, kein Zoom-Verbot im Viewport
  (Ausnahme: `pt` nur im Druck-CSS)

## JavaScript: Aufbau & Funktionen

Das JavaScript besteht aus vier Dateien in `js/` ohne Abhängigkeiten.

| Datei | Einbindung | Aufgabe |
| :--- | :--- | :--- |
| `theme.js` | im `<head>`, **ohne** `defer` | Setzt das Farbschema, bevor die Seite gezeichnet wird, damit sie nicht zuerst hell aufblitzt. Liest die Wahl aus `localStorage` (mit `try/catch`, falls blockiert), sonst gilt die Systemeinstellung. |
| `loader.js` | `defer` | Lädt `components/header.html` und `components/footer.html` per `fetch()`, markiert die aktuelle Seite mit `aria-current="page"` und meldet das Einfügen über das Ereignis `componentloaded`. Blendet die Seite erst ein, wenn Header, Footer und Schriften da sind. |
| `script.js` | `defer` | Menü-Button, Theme-Umschalter, Öffnen der Detail-Fenster, Chili-Arten (Akkordeon/Desktop), Back-to-Top-Link, Druckvorbereitung, Prüfung des Kontaktformulars. |
| `dialog.js` | `defer` | Web Component `<detail-dialog>` für die Detail-Fenster. |

**Event-Delegation:** Der Header wird erst nachträglich eingefügt. `script.js`
hängt die Listener deshalb an `document` und prüft das angeklickte Element, statt
Elemente zu suchen, die noch nicht existieren.

**`<detail-dialog>`:** Die Seite schreibt nur Titel, Bild und Inhalt als Attribute und
Kindelemente, die Komponente baut daraus das `<dialog>` samt Titel, Schließen-Button,
Kopfbild und Zurück/Weiter-Buttons. Die Reihenfolge der Buttons ergibt sich aus der
Reihenfolge der Fenster auf der Seite. Auf Mobilgeräten lässt sich das Fenster am Titel
nach unten wischen. Die Komponente verwendet kein Shadow DOM, damit `style.css` und die
Theme-Variablen unverändert greifen.

## Eingesetzte Funktionalitäten

| Funktionalität | Umsetzung |
| :--- | :--- |
| **Responsive Layout** | Flexbox und Grid, Mobile First, 360–1920 px |
| **CSS-Variablen** | Farben, Abstände, Schriften und Animationswerte zentral in `:root` |
| **Dark Mode** | Umschalter mit Speicherung in `localStorage`, Startwert aus `prefers-color-scheme` |
| **Hamburger-Navigation** | Per Button steuerbar, `aria-expanded`, Escape und Fokusrückgabe |
| **Detail-Fenster** | Web Component mit `<dialog>`, Schließen per ✕, Esc oder Klick daneben, Blättern per ←/→, Bottom Sheet mit Wischen mobil |
| **Aussaat- und Erntekalender** | Tabelle ab 768 px, Monatsblöcke darunter (`attr()` aus `data-label`) |
| **Akkordeon der Chili-Arten** | `<details>`; am Desktop automatisch geöffnet |
| **Zeitstrahl** | Karten mit Jahr und Ort, am Desktop waagerecht und abwechselnd |
| **Schärfeanzeige** | `<meter>` mit eigener Gestaltung für Chrome und Firefox |
| **Animationen** | Einblenden der Seite und der Dialoge, Scroll-Einblendung der Karten (`animation-timeline: view()`), Hover-Effekt der Karten; nur ohne `prefers-reduced-motion` |
| **Formularvalidierung** | Kontaktformular mit eigenen Fehlermeldungen unter jedem Feld (`aria-describedby`, `aria-invalid`), Rückmeldung nach dem Absenden in einem `role="status"`-Bereich; ohne JavaScript prüft der Browser selbst |
| **Back-to-Top-Link** | Erscheint nach etwas Scrollen, sanftes Scrollen nur ohne reduzierte Bewegung |
| **Druckansicht** | `@media print`: hell, A4, ohne Bedienelemente, mit Link-Adressen |
| **Favicon & Icons** | SVG-Favicon, PNG-Fallback, Apple-Touch-Icon |
| **404-Seite** | Eigene Fehlerseite im Design der Website |
| **Selbst gehostete Schriften** | Montserrat und Open Sans (OFL), keine Verbindung zu Google beim Seitenaufruf |
| **Automatisches Deployment** | GitHub Actions veröffentlicht `main` auf GitHub Pages |

Die Regeln des Kontaktformulars stehen im HTML (`required`, `type="email"`, Pflicht-Checkbox
für die Einwilligung), `script.js` liest sie nur über `field.validity` aus und zeigt eine
verständliche Fehlermeldung unter dem Feld, das rot umrandet wird (nicht nur Farbe als
Signal). Nach dem ersten Absendeversuch werden die Felder beim Verlassen erneut geprüft, und
eine Meldung verschwindet, sobald die Eingabe stimmt. Das Formular sendet nichts: Die Website
ist statisch und hat keinen Server, das Absenden wird mit `preventDefault()` abgefangen. Statt
dessen erscheint ein Hinweis, dass die Nachricht nicht verschickt wird. Die
[Datenschutzerklärung](datenschutz.html) sagt dasselbe.

## Ladeverhalten & Performance

- **Kein Aufblitzen:** `theme.js` setzt das Farbschema vor der ersten Darstellung; die
  Seite bleibt bis zum Einfügen von Header, Footer und Schriften unsichtbar und blendet
  dann ein.
- **Vorladen:** Schriften sowie `header.html` und `footer.html` werden im `<head>` per
  `<link rel="preload">` früh angefordert.
- **Schriften:** nur der lateinische Zeichensatz als variables `woff2`, `font-display: swap`.
- **Bilder:** auf 800 × 600 px zugeschnitten, das Hero-Bild zusätzlich in zwei Größen mit
  `srcset`; Kartenbilder mit `loading="lazy"`.
- **Animationen:** Eingeblendet wird über `opacity` und `transform`.

## Testing & Qualitätssicherung

Barrierefreiheit und responsives Verhalten wurden während der Entwicklung laufend im
Browser kontrolliert und zum Schluss mit Lighthouse und WAVE geprüft.

### Testmethoden

- **Lighthouse:** Kategorien Performance, Barrierefreiheit, Best Practices und SEO,
  jeweils für Desktop und Mobil.
- **WAVE:** Prüfung auf Barrierefreiheitsprobleme, alle 8 Seiten.
- **Manuelle Kontrolle:** Tastaturbedienung von Menü, Theme-Umschalter, Detail-Fenstern,
  Akkordeon und Kalender-Bereich sowie Layout bei verschiedenen Breiten, während der
  Entwicklung.

### Testergebnisse

**Testdatum:** 01.11.2026
**Browser:** Chromium 156 mit Lighthouse 13.5.0, getestet auf der veröffentlichten Seite (GitHub Pages)

#### Lighthouse

Werte: Performance / Barrierefreiheit / Best Practices / SEO

| Seite | Desktop | Mobil |
| :--- | :--- | :--- |
| `index.html` | 100 / 100 / 100 / 100 | 99 / 100 / 100 / 100 |
| `growing.html` | 100 / 100 / 100 / 100 | 92 / 97 / 100 / 100 |
| `varieties.html` | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| `harvest.html` | 100 / 100 / 100 / 100 | 99 / 100 / 100 / 100 |
| `about.html` | 100 / 100 / 100 / 100 | 99 / 100 / 100 / 100 |
| `404.html` ¹ | 100 / 100 / 96 / 91 | 100 / 100 / 96 / 91 |

¹ Mit absichtlich nicht vorhandener Adresse aufgerufen, damit die 404-Seite erscheint.
Der Server antwortet dann mit Status 404, daher meldet Lighthouse „Seite hat einen
nicht erfolgreichen HTTP-Statuscode“ (SEO) und einen Konsolenfehler (Best Practices).

#### WAVE

Alle 8 Seiten wurden geprüft: **0 Errors, 0 Contrast Errors, AIM Score 10/10.**
Einziger Hinweis (Alert, kein Fehler) ist „Redundant link“: Logo und „Startseite“
führen im Header auf dasselbe Ziel, ebenso Header- und Footer-Navigation. Das ist
bewusst so belassen, weil eine einheitliche Navigation auf jeder Seite (WCAG 3.2.3) und
mehrere Wege zu einer Seite (WCAG 2.4.5) gefordert sind.

### Bekannte Einschränkungen

- Ohne JavaScript fehlen Header und Footer, weil sie per `fetch()` geladen werden.
- Das Kontaktformular ist eine Demonstration und sendet keine Nachricht (kein Server); auch die Hinweise dazu stehen auf der Seite und in der Datenschutzerklärung.

## Git-Workflow

Größere Themen entstehen auf eigenen **Feature-Branches** (z. B. `feat/cards-dialogs`,
`feat/calendar-blocks`, `feat/print`) und werden nach Abschluss in `main` gemergt;
kleinere Anpassungen werden direkt auf `main` committet. Commits folgen dem Standard
[Conventional Commits](https://www.conventionalcommits.org/de/):

| Präfix | Verwendung |
| :--- | :--- |
| `feat:` | Neue Seite, neuer Abschnitt oder neue Funktion |
| `fix:` | Fehlerkorrektur |
| `style:` | Reine Formatierung ohne Änderung der Funktion |
| `refactor:` | Umstrukturierung ohne Änderung der Funktion |
| `docs:` | Dokumentation und Code-Kommentare |
| `chore:` | Wartung, z. B. Bilder und Projektdateien |
| `ci:` | Änderungen an der Deployment-Pipeline (GitHub Actions) |

Als Scope steht die betroffene Seite oder Komponente, z. B. `feat(growing): …` oder
`fix(css): …`.

### Git-Tags der Abgabephasen

- **Phase 1 (Konzeption):** `v1.0-konzept`
- **Phase 2 (Erarbeitung):** `v2.0-design`
- **Phase 3 (Finalisierung):** `v3.0-final`

## Repository-Struktur

```text
.
├── .github/
│   └── workflows/
│       └── pages.yml        # Deployment auf GitHub Pages (GitHub Actions)
├── components/
│   ├── header.html          # Kopfzeile mit Logo, Navigation, Theme-Umschalter
│   └── footer.html          # Fußzeile mit Links und Back-to-Top
├── css/
│   └── style.css            # ein Stylesheet, gegliedert in Abschnitte 0–6
├── fonts/                   # Montserrat und Open Sans (woff2) mit OFL-Lizenztexten
├── images/                  # Logo, Fotos und 404-Illustration
├── js/
│   ├── theme.js             # Farbschema vor dem ersten Zeichnen
│   ├── loader.js            # lädt Header und Footer
│   ├── script.js            # Menü, Theme-Umschalter, Dialoge, Akkordeon, Back-to-Top
│   └── dialog.js            # Web Component <detail-dialog>
├── index.html               # Startseite
├── growing.html             # Anbau
├── varieties.html           # Chilisorten
├── harvest.html             # Ernte & Verarbeitung
├── about.html               # Über mich / Kontakt
├── impressum.html           # Impressum
├── datenschutz.html         # Datenschutzerklärung
├── 404.html                 # Fehlerseite
└── README.md                # Projektdokumentation
```

## Bildnachweise

### Eigene Fotos

Diese Fotos sind selbst aufgenommen:
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

Diese Fotos stammen von [Wikimedia Commons](https://commons.wikimedia.org/). Bei den
CC-BY-Lizenzen ist die Namensnennung samt Lizenzangabe Pflicht, bei CC BY-SA müssen
bearbeitete Fassungen zusätzlich unter derselben Lizenz stehen. Diese Quellenzeile steht
für Aji Amarillo und Rocoto deshalb auch auf der Website: auf `varieties.html` direkt unter
dem Foto, auf der Karte und im Detail-Fenster. Gemeinfreie und CC0-Fotos sind
unbeschränkt nutzbar und hier nur der Vollständigkeit halber aufgeführt.
Sie wurden auf 800 × 600 px (4:3) zugeschnitten und verkleinert.

| Datei | Foto | Urheber/in | Lizenz |
|---|---|---|---|
| `variety-aji-amarillo.jpg` | [Aji amarillo flickr](https://commons.wikimedia.org/wiki/File:Aji_amarillo_flickr.jpg) | Marianne Serra | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| `variety-rocoto.jpg` | [Capsicum pubescens (Rocoto)](https://commons.wikimedia.org/wiki/File:Capsicum_pubescens_(Rocoto).JPG) | Falcodigiada | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `variety-tabasco.jpg` | [Tabasco pepper Nov 2010](https://commons.wikimedia.org/wiki/File:Tabasco_pepper_Nov_2010.JPG) | Supportstorm | gemeinfrei |
| `variety-thai-chili.jpg` | [Bird's eye chili](https://commons.wikimedia.org/wiki/File:Bird%27s_eye_chili.jpg) | Jiafei Slay Queen | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) |

### Logo und Illustration

Das Logo (`logo.svg`, davon abgeleitet `logo.png` und `logo-512.png` für das Favicon
und das Apple-Touch-Icon) und die Keimling-Illustration der 404-Seite
(`404-seedling.svg`) sind nicht selbst gezeichnet: Beide wurden mit Unterstützung der
KI **Claude** (Anthropic) als SVG-Grafiken erstellt. Die Dateien `logo.svg` und die
daraus erzeugten PNGs tragen dazu entsprechende Herkunftsangaben (C2PA-Metadaten). Alle
Fotos der Website sind dagegen echte Fotos (siehe oben), es wurden keine KI-generierten
Fotos verwendet.

## Schriften

Beide Schriften stehen unter der [SIL Open Font License 1.1](https://openfontlicense.org/)
und liegen mit ihren Lizenztexten in `fonts/`. Sie sind als variable `woff2`-Dateien
(nur lateinischer Zeichensatz) selbst gehostet, beim Seitenaufruf findet keine
Verbindung zu Google statt.

| Schrift | Verwendung | Urheber | Lizenztext |
|---|---|---|---|
| Montserrat | Überschriften | The Montserrat Project Authors | `fonts/OFL-Montserrat.txt` |
| Open Sans | Fließtext | The Open Sans Project Authors | `fonts/OFL-OpenSans.txt` |

## Autor

**Julian Biebl**
GitHub: [@BiaweDev](https://github.com/BiaweDev)
