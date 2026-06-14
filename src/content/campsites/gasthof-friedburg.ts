import type { CampsiteConfig } from "../types";

const IMG = "/campsites/gasthof-friedburg";

const gasthofFriedburg: CampsiteConfig = {
  name: "Panoramastellplatz Friedburg",
  shortName: "Friedburg",
  slug: "gasthof-friedburg",
  ort: "Neukirchen am Großvenediger",
  region: "Salzburger Land",
  brandKind: "Wohnmobil-Stellplatz",
  regionLong: "Nationalpark Hohe Tauern · Pinzgau · Salzburg",

  heroVariant: "center",

  claim: "Dein Stellplatz hoch über dem Salzachtal",
  claimEmphasis: "über dem Salzachtal",
  intro:
    "Hoch über dem Salzachtal findest du ebene, befestigte Plätze mit grandiosem Rundblick auf die Kitzbüheler Alpen und die 3.000er der Hohen Tauern — ruhig gelegen und das ganze Jahr geöffnet.",

  logo: { src: `${IMG}/logo-01046f2635.png`, alt: "Logo Gasthof Friedburg & Wohnmobile" },

  statement: {
    text: "Nur wenige hundert Meter von der Bundesstraße entfernt — und doch mittendrin in der Ruhe der Berge.",
    emphasis: "in der Ruhe der Berge",
  },

  pillars: [
    {
      title: "Panorama über dem Tal",
      text: "Der Platz thront auf einer sonnigen Anhöhe — der Blick reicht über das Salzachtal bis zu den vergletscherten 3.000ern.",
      image: { src: `${IMG}/hero-6d2de8af34.webp`, alt: "Reisemobil am Panoramastellplatz mit Blick ins grüne Salzachtal" },
    },
    {
      title: "Ebene Plätze in Toplage",
      text: "Großzügig angelegte Stellplätze auf befestigtem Untergrund — wenige Meter, und du blickst hinaus über die Bergwelt.",
      image: { src: `${IMG}/gallery-521b462a9d.webp`, alt: "Geparkte Wohnmobile am Stellplatz mit Wolken über dem Tal" },
    },
    {
      title: "Gasthof & Bauernhof",
      text: "Geführt mit viel Freundlichkeit von Familie Unterrassner — der Gasthof Friedburg liegt direkt nebenan am Hang.",
      image: { src: `${IMG}/gallery-9be6788d9c.webp`, alt: "Luftaufnahme des Gasthof Friedburg am sonnigen Hang" },
    },
  ],

  usps: [
    "Panoramablick ins Tal",
    "Ganzjährig geöffnet",
    "Fester Schotteruntergrund",
    "Gratis WLAN",
    "Restaurant im Gasthof",
    "Mehrfach ausgezeichnet",
  ],

  trust: {
    heading: "Ein Stellplatz mit Weitblick",
    headingEmphasis: "Weitblick",
    intro:
      "Familiär geführt, nur wenige hundert Meter von der Bundesstraße und doch in herrlicher Ruhe: Hier stehst du auf festem Grund mit Blick auf Salzachtal, Kitzbüheler Alpen und die Gletscher der Hohen Tauern.",
  },

  awards: [
    { label: "stellplatz.info Award 2023", image: { src: `${IMG}/logo-84daaa4a29.png`, alt: "Auszeichnung stellplatz.info Award 2023" } },
    { label: "Beyond Camping · Top Campingplätze 2023", image: { src: `${IMG}/award-4dd99fb770.png`, alt: "Auszeichnung Beyond Camping 2023" } },
  ],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-c0e0c19226.webp`, alt: "Panoramastellplatz Friedburg mit weitem Blick ins Salzachtal" },
    sunset: { src: `${IMG}/amenity-c02bcb66f7.webp`, alt: "Morgenstimmung mit Nebel über dem Tal am Panoramastellplatz" },
  },

  breather: {
    image: { src: `${IMG}/gallery-72a2edb67e.webp`, alt: "Reisemobile in einer Reihe am Stellplatz mit Panoramablick ins Tal" },
    line: "Aufwachen über dem Tal — und der Tag gehört dir.",
  },

  camping: {
    heading: "Wohnmobil-Stellplatz mit Aussicht",
    intro:
      "Ebene, befestigte Plätze auf festem Schotteruntergrund — auch für große Reisemobile über 8 Meter und bei jedem Wetter. Strom, Wasser und gratis WLAN sind überall am Platz.",
    features: [
      {
        title: "Großzügige Panoramaplätze",
        text: "Die Stellplätze sind großzügig angelegt — mit Strom- und Wasseranschluss sowie gratis TV- und WLAN-Empfang direkt am Platz.",
        image: { src: `${IMG}/amenity-37978f31ca.webp`, alt: "Großzügiger Stellplatz mit Reisemobil und Blick ins Tal" },
      },
      {
        title: "Platz für große Reisemobile",
        text: "Der feste Schotteruntergrund trägt jede Gewichtsklasse und auch Fahrzeuge über 8 Meter — bei jedem Wetter gut befahrbar.",
        image: { src: `${IMG}/amenity-0ee330ba3f.webp`, alt: "Reisemobil am Stellplatz mit Aussicht ins Salzachtal und Bergpanorama" },
      },
      {
        title: "Das ganze Jahr geöffnet",
        text: "Ob Sommerfrische oder verschneite Wintertage — der Stellplatz hat das ganze Jahr über für dich geöffnet.",
        image: { src: `${IMG}/gallery-58223c6c3f.webp`, alt: "Verschneiter Stellplatz mit Reisemobilen im Winter" },
      },
      {
        title: "Garten & Liegewiese",
        text: "Zum Verweilen laden ein lauschiger Sitzplatz im Grünen und die Liegewiese mit weitem Blick über das Tal ein.",
        image: { src: `${IMG}/gallery-ead0afe26e.webp`, alt: "Liegewiese mit Sonnenliegen und weitem Panoramablick ins Salzachtal" },
      },
      {
        title: "Restaurant im Gasthof",
        text: "Direkt nebenan im Gasthof Friedburg kocht der Chef selbst — regionale und internationale Spezialitäten, dazu Brot- und Brötchenservice.",
        image: { src: `${IMG}/gallery-a452c80f10.webp`, alt: "Gasthof Friedburg am Hang mit Bergpanorama" },
      },
      {
        title: "Stellplatz am Bauernhof",
        text: "Zum Friedburg gehört der Bauernhof Oberscheffau mit Pony, Schafen und Ziegen — und einem Kinderspielplatz gleich nebenan.",
        image: { src: `${IMG}/gallery-1d747240af.webp`, alt: "Bauernhof Oberscheffau mit grünen Wiesen und Bergen" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Rosental",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Der Friedburg liegt im Ortsteil Rosental zwischen Neukirchen am Großvenediger und Wald im Pinzgau — in Rosental von der Bundesstraße abbiegen und der beschilderten Straße rund 3 km folgen.",
      },
      {
        title: "Mit der Bahn",
        text: "Internationale Züge bis Zell am See, weiter mit der Salzburger Lokalbahn oder dem Bus nach Neukirchen/Rosental — gerne holen wir dich vom Bahnhof ab.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Die nächstgelegenen Flughäfen sind Salzburg, Innsbruck und München — von dort über die Tauern- bzw. Inntalautobahn ins Oberpinzgau.",
      },
    ],
  },

  galerie: {
    heading: "Aussichten vom Friedburg",
    headingEmphasis: "Aussichten",
    intro:
      "Sonnenaufgänge über dem Tal, verschneite Gipfel und der weite Blick über die Berge — ein paar Eindrücke vom Panoramastellplatz.",
    tag: "Sommer wie Winter",
    moreCount: 18,
    images: [
      { src: `${IMG}/gallery-4e8b768983.webp`, alt: "Reisemobile am Panoramastellplatz im Gegenlicht der Berge" },
      { src: `${IMG}/hero-822d4ac310.webp`, alt: "Wohnmobile am Panoramastellplatz im Gegenlicht — Herbstlaub im Vordergrund, Blick ins Salzachtal" },
      { src: `${IMG}/gallery-03f3a626ab.webp`, alt: "Kapelle aus Stein beim Gasthof Friedburg" },
      { src: `${IMG}/gallery-1e97f5b140.webp`, alt: "Weiter Panoramablick vom Stellplatz über das Salzachtal" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Panoramaplatz",
    headingEmphasis: "Panoramaplatz",
    intro:
      "Sag uns deinen Zeitraum und wie viele ihr seid — Familie Unterrassner meldet sich persönlich mit der Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz € 20 pro Nacht — Strom (€ 5), Hund (€ 3) und Ortstaxe (ab 15 J.) kommen dazu. Doppelzimmer inkl. Frühstück, Appartement ohne Frühstück. Richtwerte laut Website — bitte bei der Anfrage bestätigen.",
    highlight: {
      title: "Ganzjährig geöffnet",
      text: "Der Panoramastellplatz ist das ganze Jahr über für dich da — Sommer wie Winter.",
    },
    categories: [
      { id: "stellplatz", label: "Wohnmobil-Stellplatz", perNight: 20 },
      { id: "zimmer", label: "Doppelzimmer im Gasthof", perNight: 55 },
      { id: "appartement", label: "Ferienappartement (2–4 Pers.)", perNight: 90 },
    ],
  },

  kontakt: {
    coords: { lat: 47.238807, lng: 12.241723 },
    tel: "+43 6565 6486-0",
    telHref: "tel:+43656564860",
    mail: "info@gasthof-friedburg.at",
    adresse: "Scheffau 96 · 5741 Neukirchen am Großvenediger · Österreich",
  },

  languages: ["DE", "EN", "NL"],

  nav: [
    { label: "Stellplatz", href: "#camping", children: [
      { label: "Plätze & Service", href: "#camping" },
      { label: "Bauernhof", href: "#camping" },
    ]},
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default gasthofFriedburg;
