export const LOCALES = [
  { code: "et", label: "Eesti", short: "ET", flag: "🇪🇪" },
  { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
];

export const translations = {
  et: {
    nav: {
      home: "Avaleht",
      about: "Meist",
      services: "Teenused",
      prices: "Hinnad",
      contact: "Kontakt",
      cta: "Küsige pakkumist",
    },
    hero: {
      titleLine1: "Teie maja puhtus.",
      titleLine2: "Meie igapäevatöö.",
      subtitle: "Trepikodade ja üldruumide koristus Tallinnas.",
      selectService: "Valige teenus",
      location: "Maja asukoht",
      cta: "Küsige pakkumist",
      services: {
        stairwell: "Trepikodade koristus",
        common: "Üldruumide puhastus",
        windows: "Akende pesu",
      },
    },
    trust: {
      clean: "Puhas ja hoolitsetud elukeskkond",
      reliable: "Usaldusväärne ja kindel teenus",
      daily: "Puhtamad üldruumid iga päev",
    },
    homeServices: {
      title: "Korras maja algab heast hoolest.",
    },
    homeAbout: {
      eyebrow: "Meist",
      title: "Puhas maja, meeldiv elukeskkond.",
      text: "Puhas Tuus OÜ pakub professionaalset koristusteenust kortermajadele ja ettevõtetele üle Tallinna. Keskendume trepikodadele ja üldruumidele — et elanikud ja külastajad astuksid iga päev hoolitsetud ruumi.",
      cta: "Lugege lähemalt",
    },
    process: {
      title: "Kuidas see käib?",
      steps: [
        {
          title: "Kirjeldage vajadust",
          text: "Valige teenus ja jagage maja asukohta.",
        },
        {
          title: "Saage pakkumine",
          text: "Koostame teie majale sobiva lahenduse.",
        },
        {
          title: "Nautige puhtust",
          text: "Hoolitseme kokkulepitud töö eest — usaldusväärselt ja õigel ajal.",
        },
      ],
    },
    services: {
      stairwell: {
        title: "Trepikodade koristus",
        short: "Regulaarne trepikodade koristus, et ühisruumid oleksid puhtad ja korras.",
        long: "Puhastame trepiastmeid, trepimademeid, käsipuid ja sissekäike teie majale sobiva graafiku järgi. Eemaldame tolmu, pori ja muud mustust, et kodutulek oleks alati meeldiv.",
        includes: ["Trepiastmed ja trepimademed", "Käsipuud ja piirded", "Sissekäigu matid ja uksed", "Nädala- või kohandatud graafik"],
      },
      common: {
        title: "Üldruumide puhastus",
        short: "Koridorid, fuajeed ja ühisruumid hoolikalt ning järjepidevalt.",
        long: "Fuajeed, koridorid, liftid ja ühisruumid püsivad iga päev esinduslikud. Koostame koristusplaani maja suuruse ja ruumide kasutuskoormuse järgi, et tihedamad kohad saaksid vajaliku tähelepanu.",
        includes: ["Fuajeed ja koridorid", "Liftikabiinid", "Ühiskasutatavad pesuköögid ja panipaigad", "Prügiruumi puhastus"],
      },
      windows: {
        title: "Akende pesu",
        short: "Selge klaas, mis laseb rohkem valgust maja ühisruumidesse.",
        long: "Sissekäigu klaasid, trepikodade aknad ja ühisruumide klaaspinnad pestakse professionaalsete vahenditega triibuvabalt. Puhtad aknad muudavad ruumid valgemaks ja meeldivamaks.",
        includes: ["Sissekäiguuksed ja klaasid", "Trepikodade aknad", "Ühisruumide klaaspinnad", "Hooajaline põhjalik pesu"],
      },
    },
    servicesPage: {
      eyebrow: "Teenused",
      title: "Puhtad ja korras üldruumid.",
      subtitle: "Trepikojad, üldruumid ja aknad — planeeritud teie maja vajaduste järgi.",
      ask: "Küsige selle teenuse kohta",
    },
    aboutPage: {
      eyebrow: "Meist",
      title: "Puhas maja, meeldiv elukeskkond.",
      subtitle: "Puhas Tuus OÜ pakub professionaalset koristusteenust kortermajadele ja ettevõtetele üle Tallinna.",
      whoTitle: "Kes me oleme",
      whoP1:
        "Oleme Tallinnas tegutsev koristusettevõte, mis keskendub trepikodadele ja üldruumidele. Meie eesmärk on lihtne: ühisruumid, mis tunduvad hoolitsetud — iga päev, mitte ainult kontrollpäeval.",
      whoP2:
        "Väikestest kortermajadest suuremate ühistute ja kontoriteni koostame koristusplaanid, mis sobivad liikluse, suuruse ja eelarvega.",
      valuesTitle: "Mille eest seisame",
      values: [
        {
          title: "Usaldusväärne rutiin",
          text: "Selged graafikud, püsivad meeskonnad ja töö, millele saate nädalast nädalasse toetuda.",
        },
        {
          title: "Austus elanike vastu",
          text: "Vaikne ja hoolikas töö ühisruumides — igapäevaelu häirimata.",
        },
        {
          title: "Läbipaistev teenus",
          text: "Selged pakkumised, arusaadav maht ja avatud suhtlus esimesest päevast.",
        },
      ],
      teamTitle: "Kuidas töö käib",
      team: [
        {
          name: "Operatsioonimeeskond",
          role: "Planeerimine ja kvaliteet",
          text: "Koordineerib külastusi, kontrollib standardeid ja hoiab iga maja graafikus.",
        },
        {
          name: "Koristusspetsialistid",
          role: "Töö objektil",
          text: "Koolitatud töötajad, kes tunnevad trepikodasid, fuajeesid ja tiheda liiklusega ühisruume.",
        },
        {
          name: "Klienditugi",
          role: "Pakkumised ja järeltegevus",
          text: "Aitab juhatustel ja haldajatel pakkumisi küsida ning teenust vajadusel kohandada.",
        },
      ],
    },
    pricesPage: {
      eyebrow: "Hinnad",
      title: "Selged paketid. Teie majale kohandatud.",
      subtitle: "Allpool olevad alghinnad — lõplik pakkumine sõltub suurusest, sagedusest ja mahust.",
      plans: [
        {
          id: "basic",
          name: "Baaspakett",
          price: "alates 120 €",
          period: "/ kuu",
          note: "Väiksemad kortermajad",
          features: [
            "Trepikodade koristus 1× / nädal",
            "Sissekäigu puhastus",
            "Põhilised üldruumid",
            "E-posti tugi",
          ],
        },
        {
          id: "standard",
          name: "Standard",
          price: "alates 220 €",
          period: "/ kuu",
          note: "Enamik elamuid",
          features: [
            "Trepikodade koristus 2× / nädal",
            "Üldruumide koristus hinna sees",
            "Igakuine akende kontroll",
            "Kindel kontaktisik",
          ],
        },
        {
          id: "premium",
          name: "Premium",
          price: "Kokkuleppel",
          period: "",
          note: "Suuremad majad ja kontorid",
          features: [
            "Paindlik koristussagedus",
            "Üldruumide koristusplaan",
            "Akende pesu pakett",
            "Prioriteetne vastus",
          ],
        },
      ],
      footnote:
        "Kõik hinnad on orienteeruvad. Pärast lühikest kirjeldust või maja ülevaatust koostame kindla kuutasu ilma peidetud lisadeta.",
      faqTitle: "Korduma kippuvad küsimused",
      faqs: [
        {
          q: "Kas koristusvahendid on hinna sees?",
          a: "Jah — toome kaasa trepikodade ja üldruumide jaoks vajalikud vahendid ja tarvikud.",
        },
        {
          q: "Kas sagedust saab hiljem muuta?",
          a: "Jah. Enamik kliente alustab baaspaketiga ja kohandab seda esimese kuu järel.",
        },
        {
          q: "Kas koristate ka kontoreid?",
          a: "Jah. Koristame ka kontorite ja äripindade üldruume — küsige kohandatud pakkumist.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Kontakt",
      title: "Rääkige meile oma majast.",
      subtitle: "Kirjeldage oma vajadusi ja koostame teile hinnapakkumise.",
      asideEyebrow: "Võtke ühendust",
      asideTitle: "Aitame leida sobiva koristuslahenduse.",
      asideText:
        "Eelistate otse suhelda? Kirjutage või helistage — või saatke vorm ja võtame peagi ühendust.",
      email: "E-post",
      phone: "Telefon",
      area: "Piirkond",
      areaValue: "Tallinn ja ümbrus",
      hours: "Tööaeg",
      hoursValue: "E–R, 9:00–17:00",
      formTitle: "Küsige pakkumist",
      formHint: "* märgitud väljad on kohustuslikud.",
      name: "Täisnimi *",
      namePh: "Teie nimi",
      emailLabel: "E-post *",
      emailPh: "teie@email.com",
      phoneLabel: "Telefon",
      phonePh: "+372 …",
      service: "Teenus *",
      selectService: "Valige teenus",
      other: "Muu / kombineeritud",
      location: "Maja asukoht *",
      locationPh: "Tänav, linnaosa või maja nimi",
      message: "Sõnum",
      messagePh: "Maja suurus, külastuste sagedus, erisoovid…",
      send: "Saatke päring",
      replyNote: "Vastame tavaliselt ühe tööpäeva jooksul.",
    },
    footer: {
      tagline: "Trepikodade ja üldruumide koristus Tallinnas.",
    },
    common: {
      requestQuote: "Küsige pakkumist",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      prices: "Prices",
      contact: "Contact",
      cta: "Request a quote",
    },
    hero: {
      titleLine1: "Your building’s cleanliness.",
      titleLine2: "Our everyday work.",
      subtitle: "Stairwell and common area cleaning in Tallinn.",
      selectService: "Select service",
      location: "Building location",
      cta: "Request a quote",
      services: {
        stairwell: "Stairwell cleaning",
        common: "Common area cleaning",
        windows: "Window washing",
      },
    },
    trust: {
      clean: "Clean and well-maintained living environment",
      reliable: "Reliable and secure service",
      daily: "Cleaner common areas every day",
    },
    homeServices: {
      title: "A well-kept building starts with good care.",
    },
    homeAbout: {
      eyebrow: "About us",
      title: "A cleaner environment for a better everyday life.",
      text: "Puhas Tuus OÜ provides professional cleaning services for apartment buildings and businesses across Tallinn. We focus on stairwells and common areas — so residents and visitors step into spaces that feel cared for, every day.",
      cta: "Read more",
    },
    process: {
      title: "How does it work?",
      steps: [
        {
          title: "Describe your needs",
          text: "Select a service and share your building’s location.",
        },
        {
          title: "Get a quote",
          text: "We prepare a solution that fits your building.",
        },
        {
          title: "Enjoy the cleanliness",
          text: "We take care of the work as agreed — reliably and on time.",
        },
      ],
    },
    services: {
      stairwell: {
        title: "Stairwell cleaning",
        short: "Regular cleaning of stairwells to keep shared spaces tidy and welcoming.",
        long: "We clean steps, landings, handrails, and entry areas on a schedule that fits your building. Dust, footprints, and winter grit are handled carefully so residents always feel welcome when they come home.",
        includes: ["Steps and landings", "Handrails and banisters", "Entrance mats and doors", "Weekly or custom schedule"],
      },
      common: {
        title: "Common area cleaning",
        short: "Corridors, lobbies, and shared rooms cleaned with care and consistency.",
        long: "Lobbies, corridors, elevators, and shared rooms stay presentable every day. We adapt the plan to traffic levels and building size so busy areas get the attention they need.",
        includes: ["Lobbies and corridors", "Elevator cabins", "Shared laundry / storage rooms", "Trash room wipe-downs"],
      },
      windows: {
        title: "Window washing",
        short: "Clear glass that lets more light into your building’s shared spaces.",
        long: "Entrance glass, stairwell windows, and shared-area panes are washed with professional tools for a streak-free finish. Brighter common spaces make the whole building feel cleaner.",
        includes: ["Entrance doors and glass", "Stairwell windows", "Shared-area panes", "Seasonal deep cleans"],
      },
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Cleaning that keeps shared spaces welcoming.",
      subtitle: "Stairwells, common areas, and windows — planned around your building’s needs.",
      ask: "Ask about this service",
    },
    aboutPage: {
      eyebrow: "About us",
      title: "A cleaner environment for a better everyday life.",
      subtitle: "Puhas Tuus OÜ provides professional cleaning services for apartment buildings and businesses across Tallinn.",
      whoTitle: "Who we are",
      whoP1:
        "We are a Tallinn-based cleaning company focused on stairwells and common areas. Our goal is simple: shared spaces that feel cared for — every day, not only on inspection day.",
      whoP2:
        "From small residential buildings to larger housing cooperatives and offices, we build cleaning plans that match traffic, size, and budget.",
      valuesTitle: "What we stand for",
      values: [
        {
          title: "Reliable routines",
          text: "Clear schedules, consistent teams, and work you can count on week after week.",
        },
        {
          title: "Respect for residents",
          text: "Quiet, careful work in shared spaces — without disrupting daily life.",
        },
        {
          title: "Transparent service",
          text: "Straightforward offers, clear scope, and open communication from day one.",
        },
      ],
      teamTitle: "How we work behind the scenes",
      team: [
        {
          name: "Operations team",
          role: "Scheduling & quality",
          text: "Coordinates visits, checks standards, and keeps every building on track.",
        },
        {
          name: "Cleaning specialists",
          role: "On-site work",
          text: "Trained staff who know stairwells, lobbies, and high-traffic shared spaces.",
        },
        {
          name: "Client support",
          role: "Quotes & follow-up",
          text: "Helps boards and managers request offers and adjust service when needed.",
        },
      ],
    },
    pricesPage: {
      eyebrow: "Prices",
      title: "Clear packages. Tailored to your building.",
      subtitle: "Starting prices below — final offers depend on size, frequency, and scope.",
      plans: [
        {
          id: "basic",
          name: "Basic Care",
          price: "from €120",
          period: "/ month",
          note: "Small apartment buildings",
          features: [
            "Stairwell cleaning 1× / week",
            "Entrance wipe-down",
            "Basic common areas",
            "Email support",
          ],
        },
        {
          id: "standard",
          name: "Standard",
          price: "from €220",
          period: "/ month",
          note: "Most residential buildings",
          features: [
            "Stairwell cleaning 2× / week",
            "Common areas included",
            "Monthly window check",
            "Dedicated contact person",
          ],
        },
        {
          id: "premium",
          name: "Premium",
          price: "Custom",
          period: "",
          note: "Larger buildings & offices",
          features: [
            "Flexible multi-visit schedule",
            "Full common-area plan",
            "Window washing package",
            "Priority response",
          ],
        },
      ],
      footnote:
        "All prices are indicative. After a short walkthrough or description of your building, we prepare a fixed monthly offer with no hidden extras.",
      faqTitle: "Common questions",
      faqs: [
        {
          q: "Is cleaning equipment included?",
          a: "Yes — we bring the tools and supplies needed for stairwells and common areas.",
        },
        {
          q: "Can we change frequency later?",
          a: "Absolutely. Most clients start with a base plan and adjust after the first month.",
        },
        {
          q: "Do you clean offices too?",
          a: "Yes. We also support office and commercial common areas — ask us for a custom quote.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Tell us about your building.",
      subtitle: "Share a few details and we will prepare a suitable cleaning offer.",
      asideEyebrow: "Get in touch",
      asideTitle: "We’ll reply with a clear next step.",
      asideText:
        "Prefer to talk directly? Reach us by email or phone — or send the form and we’ll get back to you shortly.",
      email: "Email",
      phone: "Phone",
      area: "Area",
      areaValue: "Tallinn & nearby",
      hours: "Hours",
      hoursValue: "Mon–Fri, 9:00–17:00",
      formTitle: "Request a quote",
      formHint: "Fields marked with * are required.",
      name: "Full name *",
      namePh: "Your name",
      emailLabel: "Email *",
      emailPh: "you@email.com",
      phoneLabel: "Phone",
      phonePh: "+372 …",
      service: "Service *",
      selectService: "Select service",
      other: "Other / combined",
      location: "Building location *",
      locationPh: "Street, district, or building name",
      message: "Message",
      messagePh: "Building size, visit frequency, special notes…",
      send: "Send request",
      replyNote: "We usually reply within one business day.",
    },
    footer: {
      tagline: "Stairwell and common area cleaning in Tallinn.",
    },
    common: {
      requestQuote: "Request a quote",
    },
  },
};

export const SERVICE_IDS = ["stairwell", "common", "windows"];

export const SERVICE_IMAGES = {
  stairwell: "/images/service-stairwell.jpg",
  common: "/images/service-common.jpg",
  windows: "/images/service-windows.jpg",
};

export const TEAM_IMAGES = [
  "/images/team-operations.jpg",
  "/images/team-specialists.jpg",
  "/images/team-support.jpg",
];

export const IMAGES = {
  aboutTeam: "/images/about-team.jpg",
  aboutStory: "/images/about-story.jpg",
};
