export type Lang = 'fr' | 'en';

export const routes = {
  home:    { fr: '/',         en: '/en' },
  cours:   { fr: '/cours',    en: '/en/courses' },
  aPropos: { fr: '/a-propos', en: '/en/about' },
  contact: { fr: '/contact',  en: '/en/contact' },
} as const;

export type PageKey = keyof typeof routes;

export const nav = {
  fr: {
    cours: 'Cours',
    aPropos: 'À propos',
    contact: 'Contact',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  en: {
    cours: 'Courses',
    aPropos: 'About',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
} as const;

export const home = {
  fr: {
    title: 'Nisaba — École de français à Chalabre, Aude',
    eyebrow: 'École de français · Chalabre, Aude',
    heroLead: 'Apprenez le français',
    heroHighlight: 'comme un habitant.',
    heroSub: "Des cours de français pour s'intégrer vraiment dans la vie locale — à Chalabre et dans le Quercorb.",
    heroCta: 'Découvrir les cours',
    coursesEyebrow: 'Nos cours',
    coursesHeading: 'Ce que nous proposons',
    courses: [
      {
        number: '01',
        name: 'Le français au quotidien',
        description: 'Mairie, commerces, médecin, voisinage — le français qui sert vraiment dans la vie de Chalabre et du Quercorb.',
        anchor: '#c1',
      },
      {
        number: '02',
        name: 'Préparation DELF B1/B2',
        description: 'Préparez votre diplôme officiel avec une méthode éprouvée et un suivi personnalisé à chaque étape.',
        anchor: '#c2',
      },
      {
        number: '03',
        name: 'Ateliers Prononciation',
        description: "Sons, intonation, rythme. Prenez confiance à l'oral et parlez sans hésiter ni rougir.",
        anchor: '#c3',
      },
      {
        number: '04',
        name: 'Cours Individuels',
        description: 'À votre rythme, selon vos objectifs. Une formule sur mesure, entièrement adaptée à vous.',
        anchor: '#c4',
      },
    ],
    coursesLinkLabel: 'Découvrir',
    aboutEyebrow: 'À propos',
    aboutHeadingLead: 'Le français par',
    aboutHeadingHighlight: "quelqu'un du coin",
    aboutParagraph1: "Installée à Chalabre depuis plus de dix ans, j'enseigne le français à des résidents étrangers qui veulent vraiment s'enraciner dans la vie locale — pas seulement survivre aux conversations.",
    aboutParagraph2: 'Mes cours partent de la réalité du Quercorb : les marchés, la mairie, les voisins, les médecins. Un français qui sert, appris dans un cadre bienveillant et sans jugement.',
    aboutLinkLabel: 'En savoir plus',
    contactHeading: 'Prêt·e à commencer ?',
    contactParagraph: 'Contactez-moi pour discuter de vos objectifs et trouver la formule qui vous convient.',
    contactCta: 'Prendre contact',
  },
  en: {
    title: 'Nisaba — French Language School in Chalabre, Aude',
    eyebrow: 'French Language School · Chalabre, Aude',
    heroLead: 'Learn French',
    heroHighlight: 'like a local.',
    heroSub: "French courses to help you truly settle into local life — in Chalabre and the Quercorb.",
    heroCta: 'Discover our courses',
    coursesEyebrow: 'Our courses',
    coursesHeading: 'What we offer',
    courses: [
      {
        number: '01',
        name: 'Everyday French',
        description: "Town hall, shops, doctor, neighbours — the French you'll actually use living in Chalabre and the Quercorb.",
        anchor: '#c1',
      },
      {
        number: '02',
        name: 'DELF B1/B2 Preparation',
        description: 'Prepare for your official diploma with a proven method and personal support at every step.',
        anchor: '#c2',
      },
      {
        number: '03',
        name: 'Pronunciation Workshops',
        description: 'Sounds, intonation, rhythm. Build confidence speaking without hesitation or embarrassment.',
        anchor: '#c3',
      },
      {
        number: '04',
        name: 'Private Lessons',
        description: 'At your own pace, tailored to your goals. A fully bespoke programme, adapted entirely to you.',
        anchor: '#c4',
      },
    ],
    coursesLinkLabel: 'Discover',
    aboutEyebrow: 'About',
    aboutHeadingLead: 'French, taught by',
    aboutHeadingHighlight: 'a local',
    aboutParagraph1: "Based in Chalabre for over ten years, I teach French to foreign residents who want to truly put down roots in local life — not just survive conversations.",
    aboutParagraph2: 'My lessons start from real life in the Quercorb : markets, the town hall, neighbours, doctors. French that actually serves you, taught in a supportive, judgement-free setting.',
    aboutLinkLabel: 'Learn more',
    contactHeading: 'Ready to get started?',
    contactParagraph: 'Get in touch to talk through your goals and find the course that suits you.',
    contactCta: 'Get in touch',
  },
} as const;

export const cours = {
  fr: {
    title: 'Nos cours — Nisaba, École de français à Chalabre',
    heroEyebrow: 'Nos cours',
    heroHeading: 'Ce que nous proposons',
    heroSub: 'Des cours de français conçus pour la vie réelle à Chalabre et dans le Quercorb — en groupe, en atelier, ou en individuel.',
    programmeLabel: 'Au programme',
    howLabel: 'Comment ça marche',
    ctaLabel: "S'inscrire ou en savoir plus →",
    includedHeading: 'Inclus dans chaque formule',
    includedSub: 'Ce qui accompagne tous les cours, sans supplément.',
    included: [
      {
        title: 'Ressources en ligne',
        body: "Une page d'accompagnement avec le contenu de chaque cours et des exercices auto-correctifs.",
      },
      {
        title: "La vie de l'école",
        body: 'Événements ponctuels — sorties, soirées jeux, soirées conversation au bar du village.',
      },
      {
        title: 'Bibliothèque & devoirs',
        body: 'Accès à la bibliothèque de Nisaba et devoirs optionnels, selon votre rythme.',
      },
      {
        title: 'Tarifs flexibles',
        body: "Un tarif réduit est disponible selon vos moyens — n'hésitez pas à me contacter.",
      },
    ],
    courses: [
      {
        id: 'c1',
        eyebrow: "Objectif : l'intégration dans la société française",
        name: 'Le français au quotidien',
        blurb: 'Le français pour la vie de tous les jours.',
        summary: 'Des situations de la vie réelle — médecin, garagiste, voisins, téléphone — pour un français qui sert vraiment à Chalabre et dans le Quercorb.',
        programme: [
          'Les situations de la vie quotidienne (médecin, garagiste, problème domestique…)',
          'Interagir au téléphone',
          'Interagir en société (histoires, blagues, proverbes, expressions familières)',
        ],
        how: [
          'Dans une salle de classe au centre du village',
          'Pédagogie non scolaire — centrée sur la communication orale',
          'Simulations dans la rue et les commerces du village',
          '4–9 élèves · différents groupes de niveau',
          'Conversation, grammaire, vocabulaire · exercices en groupe, sous-groupes ou individuel',
        ],
        freqLabel: 'Fréquence',
        freq: 'Cours de 1h30 · 2 cours/semaine · sessions de 7 semaines',
        price: '250 €',
        priceUnit: '/session',
        priceNote: '21h sur 7 semaines — soit 12 €/heure',
        alt: false,
      },
      {
        id: 'c2',
        eyebrow: "Réussir l'examen, même avec un niveau imparfait",
        name: 'Préparation DELF B1/B2',
        blurb: 'Une méthode éprouvée pour réussir votre examen.',
        summary: "En tant qu'ancienne examinatrice DELF certifiée, je vous donne les clés méthodologiques pour maximiser vos chances le jour de l'examen.",
        programme: [
          "Ce n'est pas un cours de langue, mais un cours de préparation méthodologique",
          'Comprendre les épreuves et ce que les examinateurs attendent',
          'Stratégies pour gagner des points sur chacune des 4 épreuves (CO, CE, PO, PE)',
          "Entraînement sur sujets réels et simulations d'oral",
          'Maîtriser la pensée argumentative en français',
        ],
        how: [
          '4–6 élèves',
          'Préparation aux 4 épreuves : Compréhension Orale, Compréhension Écrite, Production Orale, Production Écrite',
        ],
        freqLabel: 'Fréquence',
        freq: '15h + travail maison · 1 × 3h/semaine · 5 semaines/session (ou 1 × 2h30 sur 6 semaines)',
        price: '245 €',
        priceUnit: '/session',
        priceNote: null,
        alt: true,
      },
      {
        id: 'c3',
        eyebrow: 'Mieux prononcer pour mieux se faire comprendre',
        name: 'Ateliers Prononciation',
        blurb: 'Gagnez en clarté et en confiance à l\'oral.',
        summary: "Un atelier intensif en petit groupe pour gagner en clarté et en confiance à l'oral — sons, rythme, enchaînements.",
        programme: [
          'La prosodie (le rythme) du français',
          "L'enchaînement des mots",
          'Les sons problématiques, adaptés à votre langue maternelle',
        ],
        how: [
          '3–5 élèves',
          '3 × 1h30/semaine pendant 2 semaines (= 9h)',
        ],
        freqLabel: 'Fréquence',
        freq: '9h sur 2 semaines',
        price: '135 €',
        priceUnit: null,
        priceNote: null,
        alt: false,
      },
      {
        id: 'c4',
        eyebrow: 'Sur mesure',
        name: 'Cours individuels',
        blurb: 'Un accompagnement entièrement personnalisé.',
        summary: 'Une formule entièrement sur mesure — contenu, pédagogie et modalités adaptés à vos objectifs et à votre rythme.',
        programme: null,
        how: [
          'Dans une salle de classe au centre du village, ou à domicile à Chalabre si besoin',
          'Pédagogie et contenu adaptés à vos besoins et préférences',
          'Modalités selon vos besoins',
        ],
        freqLabel: 'Tarif',
        freq: "Facturation à l'heure, sans engagement de durée.",
        price: '35 €',
        priceUnit: '/heure',
        priceNote: null,
        alt: true,
      },
    ],
    footerHeading: 'Pas sûr·e par où commencer ?',
    footerParagraph: 'Contactez-moi et nous trouverons ensemble la formule qui vous convient.',
    footerCta: 'Prendre contact →',
  },
  en: {
    title: 'Our Courses — Nisaba, French Language School in Chalabre',
    heroEyebrow: 'Our courses',
    heroHeading: 'What we offer',
    heroSub: 'French courses designed for real life in Chalabre and the Quercorb — in groups, workshops, or one-to-one.',
    programmeLabel: "What you'll cover",
    howLabel: 'How it works',
    ctaLabel: 'Sign up or find out more →',
    includedHeading: 'Included with every course',
    includedSub: 'What comes with every course, at no extra cost.',
    included: [
      {
        title: 'Online resources',
        body: "A companion page with the content of each lesson and self-correcting exercises.",
      },
      {
        title: 'School life',
        body: 'Occasional events — outings, games nights, conversation evenings at the village bar.',
      },
      {
        title: 'Library & homework',
        body: 'Access to the Nisaba library and optional homework, at your own pace.',
      },
      {
        title: 'Flexible pricing',
        body: 'A reduced rate is available depending on your means — feel free to get in touch.',
      },
    ],
    courses: [
      {
        id: 'c1',
        eyebrow: 'Goal: integrating into French society',
        name: 'Everyday French',
        blurb: 'French for everyday life.',
        summary: "Real-life situations — the doctor, the mechanic, neighbours, phone calls — for French that's genuinely useful in Chalabre and the Quercorb.",
        programme: [
          'Everyday situations (doctor, mechanic, household issues…)',
          'Handling phone calls',
          'Social interaction (stories, jokes, proverbs, everyday expressions)',
        ],
        how: [
          'In a classroom in the centre of the village',
          'A non-academic approach, focused on spoken communication',
          'Role-play out in the village streets and shops',
          '4–9 students · grouped by level',
          'Conversation, grammar, vocabulary · group, subgroup, or individual exercises',
        ],
        freqLabel: 'Schedule',
        freq: '1.5-hour lessons · 2 lessons/week · 7-week sessions',
        price: '250 €',
        priceUnit: '/session',
        priceNote: '21h over 7 weeks — €12/hour',
        alt: false,
      },
      {
        id: 'c2',
        eyebrow: 'Pass the exam, even with imperfect French',
        name: 'DELF B1/B2 Preparation',
        blurb: 'A proven method to pass your exam.',
        summary: "As a former certified DELF examiner, I'll give you the methodology to maximise your chances on exam day.",
        programme: [
          "This isn't a language course, but methodological exam preparation",
          'Understand the exam sections and what examiners are looking for',
          'Strategies to score points on each of the 4 sections (listening, reading, speaking, writing)',
          'Practice on real past papers and mock oral exams',
          'Master argumentative thinking in French',
        ],
        how: [
          '4–6 students',
          'Preparation for all 4 sections: Listening, Reading, Speaking, Writing',
        ],
        freqLabel: 'Schedule',
        freq: '15h + homework · 1 × 3h/week · 5-week sessions (or 1 × 2.5h over 6 weeks)',
        price: '245 €',
        priceUnit: '/session',
        priceNote: null,
        alt: true,
      },
      {
        id: 'c3',
        eyebrow: 'Better pronunciation, better understood',
        name: 'Pronunciation Workshops',
        blurb: 'Gain clarity and confidence speaking.',
        summary: 'An intensive small-group workshop to gain clarity and confidence speaking — sounds, rhythm, linking words.',
        programme: [
          'French prosody (rhythm)',
          'Linking words together',
          'Tricky sounds, tailored to your native language',
        ],
        how: [
          '3–5 students',
          '3 × 1.5h/week for 2 weeks (= 9h total)',
        ],
        freqLabel: 'Schedule',
        freq: '9h over 2 weeks',
        price: '135 €',
        priceUnit: null,
        priceNote: null,
        alt: false,
      },
      {
        id: 'c4',
        eyebrow: 'Tailor-made',
        name: 'Private Lessons',
        blurb: 'Fully personalised support.',
        summary: 'A fully bespoke course — content, teaching style and format adapted to your goals and pace.',
        programme: null,
        how: [
          'In a classroom in the centre of the village, or at home in Chalabre if needed',
          'Teaching style and content adapted to your needs and preferences',
          'Format based on your needs',
        ],
        freqLabel: 'Rate',
        freq: 'Billed hourly, no minimum commitment.',
        price: '35 €',
        priceUnit: '/hour',
        priceNote: null,
        alt: true,
      },
    ],
    footerHeading: 'Not sure where to start?',
    footerParagraph: "Get in touch and we'll find the right course for you together.",
    footerCta: 'Get in touch →',
  },
} as const;

export const common = {
  fr: {
    contactCtaHeading: 'Prêt·e à commencer ?',
    contactCtaParagraph: 'Contactez-moi pour discuter de vos objectifs et trouver la formule qui vous convient.',
    contactCtaLabel: 'Prendre contact',
  },
  en: {
    contactCtaHeading: 'Ready to get started?',
    contactCtaParagraph: 'Get in touch to talk through your goals and find the course that suits you.',
    contactCtaLabel: 'Get in touch',
  },
} as const;

export const aPropos = {
  fr: {
    title: 'À propos — Nisaba, École de français à Chalabre',
    eyebrow: 'À propos',
    heading: "Bonjour, je m'appelle Céline !",
    photoAlt: 'Céline, professeure de français à Nisaba',
    sections: [
      {
        heading: 'Qui suis-je ?',
        paragraphs: [
          "Je suis professeur diplômée de Français Langue Étrangère et examinatrice certifiée du DELF depuis plus de 15 ans, dont 10 ans à l'étranger sur différents continents. Mon expérience de coordinatrice d'une Alliance française en Équateur m'a permis de pouvoir ouvrir cet institut de langues en toute confiance.",
        ],
      },
      {
        heading: 'Ma philosophie',
        paragraphs: [
          "Apprendre une langue est un vrai voyage culturel. En effet, chaque langue reflète une manière de penser, une perception du monde. Dans sa grammaire, dans la structure de ses phrases, dans les mots qu'elle utilise ou qu'elle n'a pas, dans ses expressions idiomatiques. Les nuances ne sont pas les mêmes, on ne raconte pas de la même manière dans une langue ou dans une autre.",
          'Mais apprendre une langue est aussi un vrai défi. C\'est accepter de remettre en question ce que l\'on croyait "logique" afin d\'accepter une manière de penser différente. C\'est tout simplement faire l\'expérience de la diversité culturelle. C\'est tellement enrichissant !',
        ],
      },
      {
        heading: "Mon style d'enseignement",
        paragraphs: [
          "Il existe plusieurs façons d'apprendre une langue. Pour ma part, je suis convaincue qu'on apprend avant tout en faisant.",
          "Mes cours sont centrés sur l'interaction orale : vous êtes acteur de votre apprentissage. Vous manipulez la langue, vous l'explorez, vous la comprenez et vous l'utilisez dans des situations concrètes, proches de la vie réelle.",
          "Je m'adapte à votre style d'apprentissage si vous choisissez des cours particuliers.",
        ],
      },
    ],
  },
  en: {
    title: 'About — Nisaba, French Language School in Chalabre',
    eyebrow: 'About',
    heading: "Hi, I'm Céline!",
    photoAlt: 'Céline, French teacher at Nisaba',
    sections: [
      {
        heading: 'Who am I?',
        paragraphs: [
          "I'm a qualified French as a Foreign Language teacher and certified DELF examiner with over 15 years of experience, including 10 years abroad across several continents. My experience coordinating an Alliance Française in Ecuador gave me the confidence to open this language school.",
        ],
      },
      {
        heading: 'My philosophy',
        paragraphs: [
          "Learning a language is a genuine cultural journey. Every language reflects a way of thinking, a perception of the world — in its grammar, in the structure of its sentences, in the words it uses (or doesn't have), in its idiomatic expressions. The nuances differ, and stories aren't told the same way from one language to another.",
          "But learning a language is also a real challenge. It means questioning what once seemed \"logical\" in order to embrace a different way of thinking. It's simply experiencing cultural diversity firsthand — and it's so rewarding!",
        ],
      },
      {
        heading: 'My teaching style',
        paragraphs: [
          "There are many ways to learn a language. For my part, I'm convinced that we learn, above all, by doing.",
          "My lessons are centred on spoken interaction: you're an active participant in your own learning. You handle the language, explore it, understand it, and use it in concrete situations close to real life.",
          'I adapt to your learning style if you choose private lessons.',
        ],
      },
    ],
  },
} as const;

export const contact = {
  fr: {
    title: 'Contact — Nisaba, École de français à Chalabre',
    eyebrow: 'Contact',
    heading: 'Parlons de vos objectifs',
    sub: "Remplissez le formulaire ci-dessous et je vous répondrai rapidement pour discuter de vos besoins.",
    nameLabel: 'Nom',
    emailLabel: 'Email',
    phoneLabel: 'Téléphone',
    phoneOptional: '(optionnel)',
    courseLabel: 'Quel cours vous intéresse ?',
    courseUnsure: 'Je ne sais pas encore',
    levelLabel: 'Quel est votre niveau de français ?',
    levelOptions: ['Aucun', 'Débutant', 'Intermédiaire', 'Avancé'],
    messageLabel: 'Message',
    messagePlaceholder: 'Parlez-moi de vos objectifs, vos disponibilités…',
    submitLabel: 'Envoyer',
  },
  en: {
    title: 'Contact — Nisaba, French Language School in Chalabre',
    eyebrow: 'Contact',
    heading: "Let's talk about your goals",
    sub: "Fill in the form below and I'll get back to you quickly to talk through what you need.",
    nameLabel: 'Name',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    phoneOptional: '(optional)',
    courseLabel: 'Which course are you interested in?',
    courseUnsure: 'Not sure yet',
    levelLabel: "What's your level of French?",
    levelOptions: ['None', 'Beginner', 'Intermediate', 'Advanced'],
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your goals, your availability…',
    submitLabel: 'Send',
  },
} as const;

export const testimonials = {
  fr: {
    eyebrow: 'Elles et ils ont appris avec nous',
    heading: 'Ce que disent nos élèves',
  },
  en: {
    eyebrow: 'People who learned with us',
    heading: 'What our students say',
  },
} as const;

// Quotes are intentionally left in the language each student would speak —
// this reassures foreign learners that people like them succeed here.
export const testimonialsData = [
  {
    initials: 'SH',
    quote: "Six months in and I can finally handle the doctor, the bank, the neighbours — in French. The classes are about real life, not textbooks.",
    name: 'Sarah H.',
    course: 'Le français au quotidien',
    flag: 'EN',
  },
  {
    initials: 'MK',
    quote: 'Ich habe mein DELF B2 bestanden! Die Vorbereitung war genau auf die Prüfung zugeschnitten — jede Stunde hat sich gelohnt.',
    name: 'Markus K.',
    course: 'Préparation DELF B1/B2',
    flag: 'DE',
  },
  {
    initials: 'EM',
    quote: 'Por fin la gente me entiende cuando hablo. El taller de pronunciación cambió mi confianza por completo.',
    name: 'Elena M.',
    course: 'Ateliers Prononciation',
    flag: 'ES',
  },
] as const;

export const footer = {
  fr: {
    tagline: 'École de français · Chalabre, Aude',
    legal: 'Mentions légales',
    copyright: '© 2026 Nisaba — École de français, Chalabre',
  },
  en: {
    tagline: 'French Language School · Chalabre, Aude',
    legal: 'Legal notice',
    copyright: '© 2026 Nisaba — French Language School, Chalabre',
  },
} as const;
