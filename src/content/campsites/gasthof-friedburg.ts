import type { CampsiteConfig } from "../types";

/**
 * Panoramastellplatz Friedburg — Neukirchen am Großvenediger (Ortsteil Rosental).
 * Wohnmobil-Stellplatz auf einer Anhöhe über dem Salzachtal, beim Gasthof Friedburg
 * & Bauernhof Oberscheffau. Inhalte zu 100 % aus raw/digest abgeleitet (Du-Anrede).
 */
const IMG = "/campsites/gasthof-friedburg";

const gasthofFriedburg: CampsiteConfig = {
  name: "Panoramastellplatz Friedburg",
  shortName: "Friedburg",
  slug: "gasthof-friedburg",
  ort: "Neukirchen am Großvenediger",
  region: "Salzburger Land",
  brandKind: "Wohnmobil-Stellplatz",
  regionLong: "Nationalparkregion Hohe Tauern · Pinzgau · Salzburg",

  theme: "schiefer",
  heroVariant: "left",

  claim: "Dein Logenplatz hoch über dem Salzachtal",
  claimEmphasis: "über dem Salzachtal",
  intro:
    "Auf einer sonnigen Anhöhe am Waldrand findest du großzügige Stellplätze auf festem Schotter — mit Weitblick ins Salzachtal, auf die Kitzbüheler Alpen und die Dreitausender der Hohen Tauern.",

  statement: {
    text: "Nur wenige hundert Meter von der Bundesstraße — und doch thronst du in herrlicher Ruhe hoch über dem Tal.",
    emphasis: "herrlicher Ruhe",
  },

  pillars: [
    {
      title: "Logenplatz über dem Salzachtal",
      text: "Von deinem Stellplatz reicht der Blick weit ins Salzachtal, auf die Kitzbüheler Alpen und die vergletscherten Dreitausender der Hohen Tauern.",
      image: { src: `${IMG}/hero-6d2de8af34.webp`, alt: "Wohnmobil-Stellplatz mit Blick ins grüne Salzachtal" },
    },
    {
      title: "Fester Untergrund für jede Größe",
      text: "Der feste Schotter trägt jede Gewichtsklasse und auch Fahrzeuge über 8 Meter — bei jedem Wetter, das ganze Jahr über.",
      image: { src: `${IMG}/amenity-37978f31ca.webp`, alt: "Großes Expeditionsfahrzeug auf dem Stellplatz über dem Tal" },
    },
    {
      title: "Restaurant direkt nebenan",
      text: "Im Gasthof Friedburg kocht der Chef selbst: regionale und internationale Schmankerl, dazu der Blick auf das Tal.",
      image: { src: `${IMG}/gallery-7792c58887.webp`, alt: "Gasthof Friedburg mit sonniger Terrasse im Sommer" },
    },
  ],

  usps: [
    "Ganzjährig geöffnet",
    "Strom & Wasser am Platz",
    "Fester Schotteruntergrund",
    "Auch für Fahrzeuge über 8 m",
    "Gratis WLAN",
    "Restaurant nebenan",
  ],

  trust: {
    heading: "Hoch oben, mitten in der Natur",
    headingEmphasis: "mitten in der Natur",
    intro:
      "Familie Unterrassner führt den Panoramastellplatz mit viel Herz: ebener Schotter für jede Fahrzeuggröße, Strom und Wasser am Platz, dazu der Gasthof gleich nebenan — und ringsum der Nationalpark Hohe Tauern.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-c0e0c19226.webp`, alt: "Panoramastellplatz Friedburg: Wohnmobil mit weitem Blick ins Salzachtal" },
  },

  breather: {
    image: { src: `${IMG}/amenity-c02bcb66f7.webp`, alt: "Abendstimmung über dem Salzachtal mit Nebel im Tal" },
    line: "Wenn am Abend Nebel ins Salzachtal zieht, bleibt es hier oben still.",
  },

  camping: {
    heading: "Der Panoramastellplatz",
    intro:
      "Fester Schotter für jede Gewichtsklasse, großzügig angelegte Plätze mit Strom und Wasser, dazu Brötchenservice und das Restaurant nebenan — alles, was ein guter Stopp braucht.",
    features: [
      {
        title: "Großzügige Stellplätze",
        text: "Großzügig angelegte Plätze mit Strom- und Wasseranschluss — selbst große Wohnmobile finden hier bequem ihren Platz.",
        image: { src: `${IMG}/gallery-521b462a9d.webp`, alt: "Wohnmobile auf dem Stellplatz mit Talblick" },
      },
      {
        title: "Liegewiese mit Bergblick",
        text: "Stell Tisch und Stühle ins Gras, lehn dich zurück und lass den Blick über das Tal und die Berge wandern.",
        image: { src: `${IMG}/amenity-0ee330ba3f.webp`, alt: "Wohnmobil mit Tisch und Stühlen vor verschneiter Bergkulisse" },
      },
      {
        title: "Morgenstille über dem Tal",
        text: "Die Anhöhe liegt ruhig über dem Salzachtal — ab 22 Uhr gilt Nachtruhe, und morgens weckt dich höchstens das Tal im Nebel.",
        image: { src: `${IMG}/gallery-4e8b768983.webp`, alt: "Wohnmobil am Morgen mit Nebel im Tal" },
      },
      {
        title: "Gasthof & Bauernhof am Waldrand",
        text: "In sonniger Ruhelage am Waldrand liegen Gasthof und Bauernhof Oberscheffau beieinander — kurze Wege, viel Platz ringsum.",
        image: { src: `${IMG}/gallery-9be6788d9c.webp`, alt: "Luftaufnahme von Gasthof und Bauernhof am Waldrand im Sommer" },
      },
      {
        title: "Das ganze Jahr geöffnet",
        text: "Ob Sommerpanorama oder verschneite Bergwelt: Der Stellplatz ist ganzjährig geöffnet und ein idealer Stopp Richtung Süden.",
        image: { src: `${IMG}/gallery-165d9a05a0.webp`, alt: "Gasthof Friedburg im tiefen Winterschnee vor den Bergen" },
      },
      {
        title: "Im Landschaftsschutzgebiet",
        text: "Der Platz liegt im Landschaftsschutzgebiet — offenes Feuer und Grillen entfallen zugunsten der Natur, dafür ist die Ruhe echt.",
        image: { src: `${IMG}/gallery-03f3a626ab.webp`, alt: "Kleine Steinkapelle in den Wiesen beim Stellplatz" },
      },
    ],
  },

  kinder: {
    heading: "Bauernhof zum Anfassen",
    headingEmphasis: "zum Anfassen",
    intro:
      "Pony Tina, Schafe, Ziegen und Hasen, dazu der Spielplatz im Obstgarten — am Bauernhof Oberscheffau wird Kindern garantiert nicht langweilig.",
    features: [
      {
        title: "Tiere am Bauernhof",
        text: "Pony Tina, Schafe, Ziegen, Hasen, Katzen und Gänse — beim Streicheln und Beobachten vergeht der Tag wie im Flug.",
        image: { src: `${IMG}/gallery-70fc3ccc88.webp`, alt: "Gänse und Enten auf der Wiese am Bauernhof" },
      },
      {
        title: "Spielplatz im Obstgarten",
        text: "Gleich neben den Tieren toben sich die Kinder am Kinderspielplatz im Obstgarten aus — schaukeln, klettern, springen.",
        image: { src: `${IMG}/gallery-84c350c08a.webp`, alt: "Kinderspielplatz mit Schaukel im Obstgarten" },
      },
      {
        title: "Zwergenweg",
        text: "Auf dem Zwergenweg gibt es zwischen Moos und Bäumen allerhand kleine Wichtel und Figuren zu entdecken.",
        image: { src: `${IMG}/gallery-aaa761ef91.webp`, alt: "Zwergenfiguren zwischen Moos und Pflanzen am Wegrand" },
      },
    ],
  },

  anreise: {
    heading: "Herauf nach Rosental",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Der Stellplatz liegt im Ortsteil Rosental zwischen Neukirchen am Großvenediger und Wald im Pinzgau. In Rosental biegst du von der Bundesstraße ab und folgst rund 3 km der gut ausgebauten, beschilderten Straße bergauf.",
      },
      {
        title: "Mit der Bahn",
        text: "Mit dem Zug bis Zell am See, weiter mit der Salzburger Lokalbahn oder dem Bus nach Neukirchen. Vom Bahnhof in Rosental holen wir dich gerne ab.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Die nächsten Flughäfen sind Salzburg, Innsbruck und München — von dort rund zwei Stunden über Mittersill und den Pass Thurn.",
      },
    ],
  },

  galerie: {
    heading: "Friedburg in jeder Jahreszeit",
    headingEmphasis: "jeder Jahreszeit",
    intro:
      "Sommerpanorama, verschneite Bergwelt und stille Abende über dem Salzachtal — ein paar Eindrücke vom Platz.",
    tag: "Ganzjährig geöffnet",
    moreCount: 18,
    images: [
      { src: `${IMG}/gallery-1d747240af.webp`, alt: "Luftaufnahme von Gasthof und Bauernhof über dem Salzachtal" },
      { src: `${IMG}/gallery-1f0b4ed1ff.webp`, alt: "Kapelle und Chalet im winterlichen Schnee" },
      { src: `${IMG}/hero-822d4ac310.webp`, alt: "Wohnmobile im Gegenlicht der Abendsonne" },
      { src: `${IMG}/amenity-179d8c9e52.webp`, alt: "Wohnmobile am Stellplatz mit Blick über das Tal" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz mit Aussicht",
    headingEmphasis: "mit Aussicht",
    intro:
      "Sag uns Zeitraum und Fahrzeug — Familie Unterrassner meldet sich persönlich mit deiner Reservierung.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz Wohnmobil — € 20 pro Nacht · zzgl. Strom (€ 5 nach Verbrauch), Hund € 3, Anhänger € 4 · exkl. Ortstaxe ab 15 J.",
    highlight: {
      title: "Ganzjährig geöffnet",
      text: "Unser Stellplatz ist das ganze Jahr über geöffnet — auch als Stopp Richtung Süden.",
    },
    categories: [
      { id: "stellplatz", label: "Wohnmobil-Stellplatz", perNight: 20 },
    ],
  },

  kontakt: {
    coords: { lat: 47.238807, lng: 12.241723 },
    tel: "+43 6565 6486-0",
    telHref: "tel:+43656564860",
    mail: "info@gasthof-friedburg.at",
    adresse: "Scheffau 96 · 5741 Neukirchen am Großvenediger · Salzburg",
  },

  languages: ["DE", "EN", "NL"],

  nav: [
    { label: "Stellplatz", href: "#camping" },
    { label: "Bauernhof", href: "#kinder" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default gasthofFriedburg;
