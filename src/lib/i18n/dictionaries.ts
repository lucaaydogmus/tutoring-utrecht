export type Locale = "nl" | "en";

export const locales: Locale[] = ["nl", "en"];

export interface Dictionary {
  nav: {
    home: string;
    forWhom: string;
    subjects: string;
    howItWorks: string;
    pricing: string;
    about: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustPoints: string[];
    photoAlt: string;
  };
  trustBar: {
    items: { title: string }[];
  };
  forWhom: {
    title: string;
    intro: string;
    cards: {
      title: string;
      text: string;
      points: string[];
    }[];
  };
  problemSolution: {
    title: string;
    text: string;
    text2: string;
    cards: { title: string; text: string }[];
  };
  subjects: {
    title: string;
    cards: { title: string; description: string }[];
    footerLine: string;
  };
  howItWorks: {
    title: string;
    steps: { title: string; text: string }[];
    parentNote: string;
    ctaTitle: string;
    ctaButton: string;
    ctaNote: string;
  };
  pricing: {
    title: string;
    cards: {
      title: string;
      price: string;
      label?: string;
      points: string[];
      button: string;
    }[];
    footnote: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    qualifications: string[];
    photoAlt: string;
    linkedinLabel: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    title: string;
    text: string;
    whatsappLabel: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    form: {
      name: string;
      email: string;
      phone: string;
      studentAge: string;
      schoolLevel: string;
      subject: string;
      subjectOptions: string[];
      preferredLanguage: string;
      preferredLanguageOptions: string[];
      modePreference: string;
      modePreferenceOptions: string[];
      availability: string;
      helpNeeded: string;
      privacyConsent: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successText: string;
      errorText: string;
      requiredError: string;
    };
    whatsappButton: string;
    reassurance: string[];
  };
  footer: {
    tagline: string;
    navTitle: string;
    legalTitle: string;
    privacy: string;
    terms: string;
    copyright: (year: number) => string;
  };
  languageSwitcherLabel: string;
  mobileMenuClose: string;
  mobileMenuOpen: string;
  legal: {
    reviewNotice: string;
    privacyTitle: string;
    privacyBody: string[];
    termsTitle: string;
    termsBody: string[];
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  nl: {
    nav: {
      home: "Home",
      forWhom: "Voor wie",
      subjects: "Vakken",
      howItWorks: "Werkwijze",
      pricing: "Tarieven",
      about: "Over Luca",
      faq: "Veelgestelde vragen",
      contact: "Contact",
      cta: "Plan een kennismaking",
    },
    hero: {
      label: "Persoonlijke bijles in Utrecht en online",
      title: "Rustige en duidelijke bijles die echt aansluit bij de leerling.",
      subtitle:
        "Persoonlijke begeleiding voor basisschoolleerlingen en middelbare scholieren. Voor rekenen, taal, wiskunde, natuurkunde, scheikunde en Engels — volledig in het Nederlands of Engels.",
      primaryCta: "Plan een gratis kennismaking",
      secondaryCta: "Stuur een WhatsApp",
      trustPoints: [
        "Ervaring als Learning Assistant",
        "Voor basisschool, VMBO, HAVO en VWO",
        "Volledig Nederlandstalig of Engelstalig",
      ],
      photoAlt: "Zicht op een gracht in de historische binnenstad van Utrecht.",
    },
    trustBar: {
      items: [
        { title: "Persoonlijke uitleg" },
        { title: "Rustige leeromgeving" },
        { title: "Lessen op maat" },
        { title: "Duidelijke communicatie" },
      ],
    },
    forWhom: {
      title: "Persoonlijke begeleiding voor iedere leerfase",
      intro:
        "Iedere leerling loopt ergens anders tegenaan. Daarom wordt de begeleiding aangepast aan het niveau, de leerstijl en het doel van de leerling.",
      cards: [
        {
          title: "Basisschool",
          text: "Ondersteuning bij rekenen, taal, spelling, begrijpend lezen, Engels, huiswerk en het ontwikkelen van goede leergewoontes.",
          points: [
            "Rekenen en basisvaardigheden",
            "Taal, spelling en begrijpend lezen",
            "Engels",
            "Huiswerkbegeleiding",
            "Plannen en zelfstandig werken",
            "Extra ondersteuning of uitdaging",
          ],
        },
        {
          title: "Middelbare school",
          text: "Gerichte bijles voor VMBO-, HAVO- en VWO-leerlingen die hun basis willen versterken, achterstanden willen inhalen of zich willen voorbereiden op een toets.",
          points: [
            "Wiskunde",
            "Natuurkunde",
            "Scheikunde",
            "Engels",
            "Huiswerkbegeleiding",
            "Toets- en examenvoorbereiding",
          ],
        },
        {
          title: "Engelstalige begeleiding",
          text: "De volledige les kan in het Engels plaatsvinden. Dit geldt niet alleen voor het vak Engels, maar ook voor wiskunde, natuurkunde, scheikunde en basisschoolondersteuning.",
          points: [
            "Mathematics tutoring in English",
            "Physics tutoring in English",
            "Chemistry tutoring in English",
            "English tutoring",
            "Homework support in English",
            "Geschikt voor internationale gezinnen",
          ],
        },
      ],
    },
    problemSolution: {
      title: "Meer dan alleen hulp bij het huiswerk",
      text: "Wanneer een leerling vastloopt, ligt het probleem niet altijd bij de opdracht van vandaag. Soms ontbreekt een belangrijk onderdeel van de basis, is eerdere uitleg niet goed blijven hangen of heeft een leerling weinig vertrouwen gekregen in het vak.",
      text2:
        "Tijdens de bijles kijken we daarom niet alleen naar het juiste antwoord, maar ook naar de kennis en denkstappen die nodig zijn om later zelfstandig verder te kunnen.",
      cards: [
        {
          title: "De oorzaak vinden",
          text: "We bekijken precies waar de leerling vastloopt en welke basiskennis nog extra aandacht nodig heeft.",
        },
        {
          title: "Stap voor stap uitleggen",
          text: "Moeilijke onderwerpen worden opgesplitst in duidelijke, overzichtelijke stappen die aansluiten bij de leerling.",
        },
        {
          title: "Zelfvertrouwen opbouwen",
          text: "De leerling leert niet alleen wat hij of zij moet doen, maar ook waarom een bepaalde aanpak werkt.",
        },
      ],
    },
    subjects: {
      title: "Waarmee kan ik helpen?",
      cards: [
        {
          title: "Basisschool",
          description:
            "Rekenen, taal, spelling, begrijpend lezen, Engels, huiswerkbegeleiding en leren plannen.",
        },
        {
          title: "Wiskunde",
          description:
            "Onder andere rekenen, algebra, vergelijkingen, functies, meetkunde, statistiek, kansrekening en examenvoorbereiding.",
        },
        {
          title: "Natuurkunde",
          description:
            "Onder andere krachten, beweging, energie, elektriciteit, warmte, golven, licht en het systematisch oplossen van opgaven.",
        },
        {
          title: "Scheikunde",
          description:
            "Onder andere atomen, moleculen, reacties, molberekeningen, zuren en basen, concentraties en chemisch rekenen.",
        },
        {
          title: "Engels",
          description:
            "Grammatica, woordenschat, lezen, schrijven, spreken, huiswerk, toetsvoorbereiding en extra taalondersteuning.",
        },
      ],
      footerLine: "Basisschool · VMBO · HAVO · VWO · Nederlandstalig of Engelstalig",
    },
    howItWorks: {
      title: "Zo werkt de begeleiding",
      steps: [
        {
          title: "Vrijblijvende kennismaking",
          text: "We bespreken het niveau, het vak, de doelen en waar de leerling tegenaan loopt.",
        },
        {
          title: "Persoonlijke aanpak",
          text: "Ik bepaal samen met de leerling welke onderwerpen prioriteit hebben en hoe we de lessen het beste kunnen opbouwen.",
        },
        {
          title: "Rustige en duidelijke lessen",
          text: "We werken stap voor stap aan begrip, toepassing, zelfvertrouwen en zelfstandigheid.",
        },
        {
          title: "Voortgang volgen",
          text: "We kijken regelmatig wat beter gaat en waar nog extra aandacht nodig is.",
        },
      ],
      parentNote:
        "Bij minderjarige leerlingen kan de ouder, in overleg met de leerling, een korte terugkoppeling over de voortgang ontvangen.",
      ctaTitle: "Benieuwd welke begeleiding past?",
      ctaButton: "Plan een gratis kennismaking",
      ctaNote: "Een korte en vrijblijvende kennismaking, geen volledige proefles.",
    },
    pricing: {
      title: "Duidelijke tarieven zonder langdurige verplichtingen",
      cards: [
        {
          title: "Online bijles",
          price: "€25 per uur",
          points: [
            "Persoonlijke één-op-éénbegeleiding",
            "Volledig Nederlands- of Engelstalig",
            "Geen reistijd",
            "Digitaal whiteboard",
            "Geschikt voor structurele begeleiding",
          ],
          button: "Informeer naar beschikbaarheid",
        },
        {
          title: "Bijles in Utrecht",
          price: "€30 per uur",
          label: "Meest gekozen",
          points: [
            "Persoonlijke één-op-éénbegeleiding",
            "Op een afgesproken locatie in Utrecht",
            "Nederlands of Engels",
            "Materiaal afgestemd op de leerling",
            "Rustige en directe begeleiding",
            "Eventuele reiskosten afhankelijk van de locatie",
          ],
          button: "Plan een kennismaking",
        },
      ],
      footnote:
        "Het exacte tarief en eventuele reiskosten worden altijd vooraf besproken. Er is geen langdurig abonnement nodig.",
    },
    about: {
      title: "Over Luca",
      paragraphs: [
        "Ik studeer wiskunde en natuurkunde en heb ervaring als Learning Assistant binnen het universitair onderwijs. In die rol begeleidde ik studenten tijdens lessen, besprak ik opgaven en leerde ik complexe onderwerpen op verschillende manieren uitleggen.",
        "Mijn manier van lesgeven is rustig, gestructureerd en persoonlijk. Niet iedere leerling begrijpt een onderwerp op dezelfde manier. Daarom pas ik mijn uitleg aan en neem ik de tijd om te ontdekken waar iemand precies vastloopt.",
        "Ik probeer niet alleen te laten zien welke stappen een leerling moet volgen, maar vooral waarom die stappen werken. Zo bouwen we aan een sterke basis, meer zelfvertrouwen en het vermogen om uiteindelijk zelfstandig verder te kunnen.",
        "Ik begeleid basisschoolleerlingen en middelbare scholieren bij rekenen, taal, wiskunde, natuurkunde, scheikunde en Engels. De volledige les kan zowel in het Nederlands als in het Engels plaatsvinden.",
      ],
      qualifications: [
        "Student wiskunde en natuurkunde",
        "Ervaring als Learning Assistant",
        "Begeleiding voor basisschool en middelbare school",
        "Wiskunde, natuurkunde, scheikunde en Engels",
        "Nederlands- en Engelstalige lessen",
        "Online en op locatie in Utrecht",
      ],
      photoAlt: "Portret van Luca Aydogmus",
      linkedinLabel: "Bekijk LinkedIn-profiel",
    },
    faq: {
      title: "Veelgestelde vragen",
      items: [
        {
          q: "Voor welke leeftijden geef je bijles?",
          a: "Ik begeleid leerlingen op de basisschool en scholieren op het VMBO, HAVO en VWO.",
        },
        {
          q: "Welke vakken geef je?",
          a: "Op de basisschool kan ik helpen met onder andere rekenen, taal, spelling, begrijpend lezen, Engels en huiswerkbegeleiding. Op de middelbare school geef ik bijles in wiskunde, natuurkunde, scheikunde en Engels.",
        },
        {
          q: "Kan de volledige bijles in het Engels?",
          a: "Ja. De hele begeleiding kan in het Engels plaatsvinden. Dit geldt voor wiskunde, natuurkunde, scheikunde, Engels en basisschoolondersteuning.",
        },
        {
          q: "Kan de bijles online plaatsvinden?",
          a: "Ja. Online lessen worden gegeven via videobellen en een digitaal whiteboard, zodat uitleg, berekeningen en opdrachten duidelijk zichtbaar zijn.",
        },
        {
          q: "Waar vinden fysieke lessen plaats?",
          a: "De locatie wordt in overleg afgesproken. Dit kan bijvoorbeeld bij de leerling thuis, in een rustige openbare studieruimte of op een andere geschikte locatie in Utrecht.",
        },
        {
          q: "Is er een gratis proefles?",
          a: "Er is een gratis korte kennismaking waarin we het niveau, de doelen en de verwachtingen bespreken. Dit is geen volledige bijles.",
        },
        {
          q: "Hoe vaak heeft een leerling bijles nodig?",
          a: "Dat hangt af van het doel. Voor structurele verbetering werkt één vast moment per week vaak goed. Voor een toets of examen kan tijdelijk een intensiever schema worden afgesproken.",
        },
        {
          q: "Krijgen ouders informatie over de voortgang?",
          a: "Bij minderjarige leerlingen kan, in overleg met de leerling, regelmatig een korte terugkoppeling worden gegeven.",
        },
        {
          q: "Kan mijn kind hulp krijgen bij meerdere vakken?",
          a: "Ja. De begeleiding kan worden gecombineerd, bijvoorbeeld wiskunde en natuurkunde of basisschoolrekenen en taal.",
        },
        {
          q: "Wat zijn de annuleringsvoorwaarden?",
          a: "De annuleringsvoorwaarden worden vooraf duidelijk gedeeld. Deze definitieve voorwaarden volgen zodra Luca ze heeft goedgekeurd.",
        },
      ],
    },
    contact: {
      title: "Bespreek vrijblijvend wat uw kind nodig heeft",
      text: "Vertel kort om welk vak, niveau en doel het gaat. U ontvangt zo snel mogelijk een reactie om een kennismaking in te plannen.",
      whatsappLabel: "WhatsApp",
      emailLabel: "E-mail",
      locationLabel: "Locatie",
      locationValue: "Utrecht en online",
      form: {
        name: "Naam ouder of leerling",
        email: "E-mailadres",
        phone: "Telefoonnummer",
        studentAge: "Leeftijd van de leerling",
        schoolLevel: "Schoolniveau en leerjaar",
        subject: "Gewenst vak",
        subjectOptions: [
          "Basisschool rekenen",
          "Basisschool taal",
          "Basisschool Engels",
          "Basisschool huiswerkbegeleiding",
          "Wiskunde",
          "Natuurkunde",
          "Scheikunde",
          "Engels",
          "Meerdere vakken",
          "Anders",
        ],
        preferredLanguage: "Voorkeurstaal",
        preferredLanguageOptions: ["Nederlands", "Engels"],
        modePreference: "Voorkeur",
        modePreferenceOptions: ["Online", "In Utrecht"],
        availability: "Gewenste dagen en tijden",
        helpNeeded: "Waar is begeleiding bij nodig?",
        privacyConsent:
          "Ik ga akkoord dat mijn gegevens worden gebruikt om contact met mij op te nemen over bijles.",
        submit: "Verstuur aanvraag",
        submitting: "Bezig met versturen...",
        successTitle: "Bedankt voor uw aanvraag",
        successText: "Uw bericht is verzonden. U ontvangt zo snel mogelijk een reactie.",
        errorText: "Er ging iets mis bij het versturen. Probeer het opnieuw of stuur een WhatsApp.",
        requiredError: "Vul dit veld in.",
      },
      whatsappButton: "Stuur direct een WhatsApp",
      reassurance: [
        "Vrijblijvende korte kennismaking",
        "Duidelijke tarieven vooraf",
        "Nederlands of Engels",
        "Online of in Utrecht",
        "Geen langdurig abonnement nodig",
      ],
    },
    footer: {
      tagline: "Utrecht en online",
      navTitle: "Navigatie",
      legalTitle: "Juridisch",
      privacy: "Privacyverklaring",
      terms: "Algemene voorwaarden",
      copyright: (year) => `© ${year} Utrecht Bijles. Alle rechten voorbehouden.`,
    },
    languageSwitcherLabel: "Taal",
    mobileMenuClose: "Sluit menu",
    mobileMenuOpen: "Open menu",
    legal: {
      reviewNotice:
        "Let op: deze conceptteksten moeten voor publicatie juridisch worden gecontroleerd.",
      privacyTitle: "Privacyverklaring",
      privacyBody: [
        "Deze privacyverklaring legt uit welke gegevens worden verzameld via het contactformulier op deze website, waarom dit gebeurt en hoe hiermee wordt omgegaan.",
        "Welke gegevens worden verzameld: naam, e-mailadres, telefoonnummer, leeftijd en schoolniveau van de leerling, gewenst vak, voorkeurstaal, voorkeur voor online of in Utrecht, gewenste dagen en tijden, en een toelichting op de hulpvraag.",
        "Waarom deze gegevens worden verzameld: uitsluitend om contact op te nemen over een mogelijke bijlesaanvraag en om de begeleiding goed te kunnen voorbereiden.",
        "Hoe Luca contact kan opnemen: via het opgegeven e-mailadres of telefoonnummer/WhatsApp.",
        "Bewaartermijn: gegevens worden niet langer bewaard dan redelijkerwijs nodig is om de aanvraag af te handelen en, bij een lopend bijlestraject, de begeleiding te ondersteunen.",
        "Gegevens worden nooit verkocht of gedeeld met derden voor marketingdoeleinden.",
        "Verwijdering: u kunt op elk moment vragen om uw gegevens te laten verwijderen door een e-mail te sturen naar lucaaydogmus@gmail.com.",
        "Voor vragen over privacy kunt u contact opnemen via lucaaydogmus@gmail.com.",
        "Deze website gebruikt geen niet-noodzakelijke cookies. Als er in de toekomst analytics worden toegevoegd, wordt hiervoor een passende toestemmingsoplossing geïmplementeerd.",
      ],
      termsTitle: "Algemene voorwaarden",
      termsBody: [
        "Deze algemene voorwaarden zijn van toepassing op alle bijlesafspraken tussen Luca Aydogmus (Utrecht Bijles) en de ouder, verzorger of leerling die de bijles afneemt.",
        "Kennismaking: een eerste kennismaking is kort, vrijblijvend en kosteloos, en geldt niet als volledige bijlesles.",
        "Duur van de les: een reguliere bijlesles duurt 60 minuten, tenzij vooraf een andere duur is afgesproken.",
        "Tarieven: het geldende tarief staat vermeld op de website en wordt, samen met eventuele reiskosten, altijd voorafgaand aan de eerste les besproken en overeengekomen.",
        "Betaling: betaling vindt plaats per bankoverschrijving of Tikkie, na afloop van elke les. Betaling wordt binnen 7 dagen na de les gevraagd.",
        "Annuleren of verzetten door de leerling of ouder: een les kan kosteloos worden afgezegd of verzet. We vragen wel om dit zo vroeg mogelijk te laten weten, zodat de vrijgekomen tijd eventueel aan een andere leerling kan worden aangeboden.",
        "Annuleren door Luca: als Luca een les moet afzeggen (bijvoorbeeld door ziekte), wordt deze kosteloos ingehaald op een nieuw afgesproken moment.",
        "Minderjarige leerlingen: bij leerlingen onder de 18 jaar wordt de afspraak aangegaan met een ouder of verzorger, die ook verantwoordelijk is voor de betaling.",
        "Lesmateriaal: tijdens de les gedeeld materiaal is uitsluitend bedoeld voor persoonlijk gebruik door de leerling en mag niet worden verspreid of doorverkocht.",
        "Aansprakelijkheid: Luca spant zich naar beste kunnen in om de leerling te begeleiden, maar kan geen specifieke resultaten (zoals cijfers of examenuitslagen) garanderen. Aansprakelijkheid is beperkt tot het bedrag van de betreffende les.",
        "Beëindigen: er is geen langdurig abonnement of opzegtermijn. De begeleiding kan door beide partijen op elk moment worden stopgezet.",
        "Toepasselijk recht: op deze algemene voorwaarden is Nederlands recht van toepassing. Eventuele onenigheid wordt bij voorkeur eerst in onderling overleg opgelost.",
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      forWhom: "Who it's for",
      subjects: "Subjects",
      howItWorks: "How it works",
      pricing: "Pricing",
      about: "About Luca",
      faq: "FAQ",
      contact: "Contact",
      cta: "Book an introduction",
    },
    hero: {
      label: "Personal tutoring in Utrecht and online",
      title: "Calm and clear tutoring tailored to each student.",
      subtitle:
        "Personal support for primary and secondary school students. Tutoring in mathematics, physics, chemistry, English and primary-school subjects — entirely in Dutch or English.",
      primaryCta: "Book a free introduction",
      secondaryCta: "Send a WhatsApp message",
      trustPoints: [
        "Learning Assistant experience",
        "Primary school, VMBO, HAVO and VWO",
        "Fully available in Dutch or English",
      ],
      photoAlt: "View of a canal in Utrecht's historic city center.",
    },
    trustBar: {
      items: [
        { title: "Personal explanations" },
        { title: "A calm learning environment" },
        { title: "Lessons tailored to the student" },
        { title: "Clear communication" },
      ],
    },
    forWhom: {
      title: "Personal support for every stage of learning",
      intro:
        "Every student runs into different challenges. That's why the support is tailored to the student's level, learning style and goals.",
      cards: [
        {
          title: "Primary school",
          text: "Support with math, language, spelling, reading comprehension, English, homework, and building good study habits.",
          points: [
            "Math and foundational skills",
            "Language, spelling and reading comprehension",
            "English",
            "Homework support",
            "Planning and independent work",
            "Extra support or extra challenge",
          ],
        },
        {
          title: "Secondary school",
          text: "Focused tutoring for VMBO, HAVO and VWO students who want to strengthen their foundation, catch up, or prepare for a test.",
          points: [
            "Mathematics",
            "Physics",
            "Chemistry",
            "English",
            "Homework support",
            "Test and exam preparation",
          ],
        },
        {
          title: "English-language support",
          text: "The entire lesson can take place in English. This applies not only to the subject of English, but also to mathematics, physics, chemistry and primary-school support.",
          points: [
            "Mathematics tutoring in English",
            "Physics tutoring in English",
            "Chemistry tutoring in English",
            "English tutoring",
            "Homework support in English",
            "Suitable for international families",
          ],
        },
      ],
    },
    problemSolution: {
      title: "More than just homework help",
      text: "When a student gets stuck, the problem isn't always today's assignment. Sometimes an important part of the foundation is missing, earlier explanations didn't stick, or a student has lost confidence in the subject.",
      text2:
        "During tutoring, we therefore look not only at getting the right answer, but also at the knowledge and thinking steps needed to keep going independently later on.",
      cards: [
        {
          title: "Finding the cause",
          text: "We look closely at exactly where the student gets stuck and which foundational knowledge needs extra attention.",
        },
        {
          title: "Explaining step by step",
          text: "Difficult topics are broken down into clear, manageable steps that fit the student.",
        },
        {
          title: "Building confidence",
          text: "The student learns not just what to do, but also why a particular approach works.",
        },
      ],
    },
    subjects: {
      title: "What can I help with?",
      cards: [
        {
          title: "Primary school",
          description:
            "Math, language, spelling, reading comprehension, English, homework support and learning to plan.",
        },
        {
          title: "Mathematics",
          description:
            "Including arithmetic, algebra, equations, functions, geometry, statistics, probability and exam preparation.",
        },
        {
          title: "Physics",
          description:
            "Including forces, motion, energy, electricity, heat, waves, light, and systematically solving problems.",
        },
        {
          title: "Chemistry",
          description:
            "Including atoms, molecules, reactions, mole calculations, acids and bases, concentrations and chemical calculations.",
        },
        {
          title: "English",
          description:
            "Grammar, vocabulary, reading, writing, speaking, homework, test preparation and extra language support.",
        },
      ],
      footerLine: "Primary school · VMBO · HAVO · VWO · Dutch or English",
    },
    howItWorks: {
      title: "How the tutoring works",
      steps: [
        {
          title: "A free introduction",
          text: "We discuss the level, subject, goals, and where the student is getting stuck.",
        },
        {
          title: "A personal approach",
          text: "Together with the student, I determine which topics take priority and how to best structure the lessons.",
        },
        {
          title: "Calm and clear lessons",
          text: "We work step by step on understanding, application, confidence and independence.",
        },
        {
          title: "Tracking progress",
          text: "We regularly review what's improving and where extra attention is still needed.",
        },
      ],
      parentNote:
        "For minor students, the parent can receive a brief progress update, in consultation with the student.",
      ctaTitle: "Curious which support fits best?",
      ctaButton: "Book a free introduction",
      ctaNote: "A short, no-obligation introduction — not a full trial lesson.",
    },
    pricing: {
      title: "Clear pricing, no long-term commitments",
      cards: [
        {
          title: "Online tutoring",
          price: "€25 per hour",
          points: [
            "Personal one-on-one support",
            "Entirely in Dutch or English",
            "No travel time",
            "Digital whiteboard",
            "Suitable for structural support",
          ],
          button: "Ask about availability",
        },
        {
          title: "Tutoring in Utrecht",
          price: "€30 per hour",
          label: "Most chosen",
          points: [
            "Personal one-on-one support",
            "At an agreed location in Utrecht",
            "Dutch or English",
            "Materials tailored to the student",
            "Calm and direct guidance",
            "Travel costs may be considered depending on the location",
          ],
          button: "Book an introduction",
        },
      ],
      footnote:
        "The exact rate and any travel costs are always discussed in advance. No long-term subscription is required.",
    },
    about: {
      title: "About Luca",
      paragraphs: [
        "I study mathematics and physics and have experience as a Learning Assistant in university education. In that role, I supported students during classes, discussed problem sets, and learned to explain complex topics in different ways.",
        "My teaching style is calm, structured and personal. Not every student understands a topic the same way. That's why I adapt my explanations and take the time to find out exactly where someone gets stuck.",
        "I try to show not just which steps a student needs to follow, but especially why those steps work. This builds a strong foundation, more confidence, and the ability to eventually continue independently.",
        "I support primary and secondary school students with math, language, mathematics, physics, chemistry and English. The entire lesson can take place in either Dutch or English.",
      ],
      qualifications: [
        "Mathematics and physics student",
        "Learning Assistant experience",
        "Support for primary and secondary school",
        "Mathematics, physics, chemistry and English",
        "Dutch and English-language lessons",
        "Online and in-person in Utrecht",
      ],
      photoAlt: "Portrait of Luca Aydogmus",
      linkedinLabel: "View LinkedIn profile",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What ages do you tutor?",
          a: "I support primary school students and secondary school students at VMBO, HAVO and VWO level.",
        },
        {
          q: "What subjects do you teach?",
          a: "For primary school, I can help with math, language, spelling, reading comprehension, English and homework support. For secondary school, I tutor mathematics, physics, chemistry and English.",
        },
        {
          q: "Can the entire lesson be in English?",
          a: "Yes. The entire lesson can take place in English. This applies to mathematics, physics, chemistry, English and primary-school support.",
        },
        {
          q: "Can tutoring take place online?",
          a: "Yes. Online lessons are given via video call and a digital whiteboard, so explanations, calculations and exercises are clearly visible.",
        },
        {
          q: "Where do in-person lessons take place?",
          a: "The location is agreed in consultation. This could be at the student's home, a quiet public study space, or another suitable location in Utrecht.",
        },
        {
          q: "Is there a free trial lesson?",
          a: "There is a free short introduction where we discuss the level, goals and expectations. This is not a full lesson.",
        },
        {
          q: "How often does a student need tutoring?",
          a: "That depends on the goal. For structural improvement, one fixed session per week often works well. For a test or exam, a more intensive schedule can be arranged temporarily.",
        },
        {
          q: "Do parents receive updates on progress?",
          a: "For minor students, a brief progress update can be given regularly, in consultation with the student.",
        },
        {
          q: "Can my child get help with multiple subjects?",
          a: "Yes. Support can be combined, for example mathematics and physics, or primary-school math and language.",
        },
        {
          q: "What are the cancellation terms?",
          a: "Cancellation terms will be clearly shared in advance. Final terms will follow once Luca has approved them.",
        },
      ],
    },
    contact: {
      title: "Let's discuss what your child needs, no obligation",
      text: "Briefly describe the subject, level and goal. You'll receive a reply as soon as possible to schedule an introduction.",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "Utrecht and online",
      form: {
        name: "Parent or student name",
        email: "Email address",
        phone: "Phone number",
        studentAge: "Student's age",
        schoolLevel: "School level and year",
        subject: "Subject",
        subjectOptions: [
          "Primary school math",
          "Primary school language",
          "Primary school English",
          "Primary school homework support",
          "Mathematics",
          "Physics",
          "Chemistry",
          "English",
          "Multiple subjects",
          "Other",
        ],
        preferredLanguage: "Preferred language",
        preferredLanguageOptions: ["Dutch", "English"],
        modePreference: "Preference",
        modePreferenceOptions: ["Online", "In Utrecht"],
        availability: "Preferred days and times",
        helpNeeded: "What support is needed?",
        privacyConsent:
          "I agree that my details will be used to contact me about tutoring.",
        submit: "Send request",
        submitting: "Sending...",
        successTitle: "Thank you for your request",
        successText: "Your message has been sent. You'll receive a reply as soon as possible.",
        errorText: "Something went wrong while sending. Please try again or send a WhatsApp message.",
        requiredError: "Please fill in this field.",
      },
      whatsappButton: "Send a WhatsApp message",
      reassurance: [
        "A free, short introduction",
        "Clear pricing upfront",
        "Dutch or English",
        "Online or in Utrecht",
        "No long-term subscription needed",
      ],
    },
    footer: {
      tagline: "Utrecht and online",
      navTitle: "Navigation",
      legalTitle: "Legal",
      privacy: "Privacy policy",
      terms: "Terms of service",
      copyright: (year) => `© ${year} Utrecht Bijles. All rights reserved.`,
    },
    languageSwitcherLabel: "Language",
    mobileMenuClose: "Close menu",
    mobileMenuOpen: "Open menu",
    legal: {
      reviewNotice: "Note: these draft texts must be reviewed by a legal professional before publication.",
      privacyTitle: "Privacy policy",
      privacyBody: [
        "This privacy policy explains what data is collected through the contact form on this website, why, and how it is handled.",
        "Data collected: name, email address, phone number, the student's age and school level, desired subject, preferred language, preference for online or in Utrecht, preferred days and times, and a description of the support needed.",
        "Why this data is collected: solely to get in touch about a possible tutoring request and to properly prepare the support.",
        "How Luca can be reached: via the provided email address or phone number/WhatsApp.",
        "Retention period: data is not kept longer than reasonably necessary to handle the request and, for an ongoing tutoring arrangement, to support the tutoring.",
        "Data is never sold or shared with third parties for marketing purposes.",
        "Deletion: you can request deletion of your data at any time by emailing lucaaydogmus@gmail.com.",
        "For privacy questions, please contact lucaaydogmus@gmail.com.",
        "This website does not use non-essential cookies. If analytics are added in the future, an appropriate consent solution will be implemented.",
      ],
      termsTitle: "Terms of service",
      termsBody: [
        "These terms apply to all tutoring arrangements between Luca Aydogmus (Utrecht Bijles) and the parent, guardian, or student receiving tutoring.",
        "Introduction: a first introduction is short, free of charge, and non-binding, and does not count as a full tutoring lesson.",
        "Lesson length: a regular tutoring lesson lasts 60 minutes, unless a different length is agreed in advance.",
        "Rates: the applicable rate is listed on the website and, together with any travel costs, is always discussed and agreed upon before the first lesson.",
        "Payment: payment is made by bank transfer or Tikkie after each lesson. Payment is requested within 7 days of the lesson.",
        "Cancelling or rescheduling by the student or parent: a lesson can be cancelled or rescheduled free of charge. We do ask that this be communicated as early as possible, so the freed-up time can potentially be offered to another student.",
        "Cancelling by Luca: if Luca needs to cancel a lesson (for example due to illness), it will be rescheduled free of charge to a new agreed time.",
        "Minor students: for students under 18, the arrangement is made with a parent or guardian, who is also responsible for payment.",
        "Lesson materials: materials shared during the lesson are intended solely for the student's personal use and may not be distributed or resold.",
        "Liability: Luca makes a genuine effort to support the student's learning but cannot guarantee specific outcomes (such as grades or exam results). Liability is limited to the amount of the lesson in question.",
        "Ending the arrangement: there is no long-term subscription or notice period. Either party may end the tutoring arrangement at any time.",
        "Governing law: these terms are governed by Dutch law. Any disagreement will preferably first be resolved through mutual consultation.",
      ],
    },
  },
};
