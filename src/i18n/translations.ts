export type Lang = 'pl' | 'en' | 'uk';

export interface TranslationData {
  langCode: Lang;
  langName: string;
  flag: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    process: string;
    pricing: string;
    caseStudies: string;
    faq: string;
    contact: string;
    callUs: string;
    multiGuard: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPhone: string;
    ctaContact: string;
    statsYears: string;
    statsYearsLabel: string;
    statsGuarantee: string;
    statsGuaranteeLabel: string;
    statsSuccess: string;
    statsSuccessLabel: string;
    cashNotice: string;
    pillCash: string;
    pillFast: string;
    pillService: string;
    pillDiagnosis: string;
    pillGuarantee: string;
    pillQuote: string;
  };
  services: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    tvTitle: string;
    tvDesc: string;
    tvPoints: string[];
    laptopTitle: string;
    laptopDesc: string;
    laptopPoints: string[];
    pcTitle: string;
    pcDesc: string;
    pcPoints: string[];
    cctvTitle: string;
    cctvDesc: string;
    cctvPoints: string[];
  };
  process: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  pricing: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    cashNotice: string;
    plan1Name: string;
    plan1Price: string;
    plan1Period: string;
    plan1Desc: string;
    plan1Features: string[];
    plan2Name: string;
    plan2Price: string;
    plan2Period: string;
    plan2Desc: string;
    plan2Features: string[];
    plan3Name: string;
    plan3Price: string;
    plan3Period: string;
    plan3Desc: string;
    plan3Features: string[];
    cta: string;
  };
  caseStudies: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    item1Title: string;
    item1Category: string;
    item1Desc: string;
    item2Title: string;
    item2Category: string;
    item2Desc: string;
    item3Title: string;
    item3Category: string;
    item3Desc: string;
    item4Title: string;
    item4Category: string;
    item4Desc: string;
    viewAll: string;
  };
  testimonials: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    t1Quote: string;
    t1Author: string;
    t1Role: string;
    t2Quote: string;
    t2Author: string;
    t2Role: string;
    t3Quote: string;
    t3Author: string;
    t3Role: string;
  };
  faq: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    namePlaceholder?: string;
    phonePlaceholder?: string;
    devicePlaceholder?: string;
    messagePlaceholder?: string;
    submitButton?: string;
    addressLabel: string;
    addressVal: string;
    phoneLabel: string;
    phoneVal: string;
    hoursLabel: string;
    hoursVal: string;
    emailLabel: string;
    emailVal: string;
    ownerLabel: string;
    ownerVal: string;
    paymentLabel: string;
    paymentVal: string;
    rodoNotice?: string;
    noticeBadge: string;
    noticeTitle: string;
    noticeP1: string;
    noticeP2?: string;
    callButton: string;
    callNote: string;
    phoneNoticeShort: string;
  };
  footer: {
    rights: string;
  };
  multiGuardPromo: {
    badge: string;
    title: string;
    subtitle: string;
    standardTitle: string;
    standardDesc: string;
    proTitle: string;
    proDesc: string;
    tagDefender: string;
    tagPrivacy: string;
    tagHardware: string;
    tagRemote: string;
    learnMoreBtn: string;
    askInShopBtn: string;
    previewNotice: string;
  };
}

export const translations: Record<Lang, TranslationData> = {
  pl: {
    langCode: 'pl',
    langName: 'Polski',
    flag: '🇵🇱',
    seo: {
      title: 'Multi-Servis Bydgoszcz | Naprawa Telewizorów, Laptopów, PC i Montaż Monitoringu',
      description: 'Serwis elektroniki w Bydgoszczy (Ku Wiatrakom 18). Naprawa TV, laptopów, komputerów oraz montaż monitoringu CCTV. Rzetelna diagnoza i indywidualna wycena. Tel: 505 012 914.',
      keywords: 'naprawa telewizorów Bydgoszcz, serwis laptopów Bydgoszcz, montaż monitoringu Bydgoszcz, naprawa komputerów',
    },
    nav: {
      home: 'Strona główna',
      about: 'O nas',
      services: 'Usługi',
      process: 'Zasady',
      pricing: 'Cennik',
      caseStudies: 'Realizacje',
      faq: 'FAQ',
      contact: 'Kontakt',
      callUs: 'Zadzwoń teraz',
      multiGuard: 'Multi-Guard',
    },
    hero: {
      badge: 'Ponad 20 lat doświadczenia w Bydgoszczy',
      title: 'Naprawa TV, laptopów i PC oraz montaż monitoringu',
      subtitle: 'Ku Wiatrakom 18, Bydgoszcz. Rzetelna diagnoza usterki, indywidualna wycena przed naprawą i gwarancja od 3 do 24 m-cy.',
      ctaPhone: 'Zadzwoń: 505 012 914 ',
      ctaContact: 'Zgłoś usterkę',
      statsYears: '20+ lat',
      statsYearsLabel: 'Doświadczenia',
      statsGuarantee: 'Indywidualna',
      statsGuaranteeLabel: 'Wycena usterki',
      statsSuccess: '100%',
      statsSuccessLabel: 'Uczciwa wycena',
      cashNotice: '',
      pillCash: '📍 Bydgoszcz Wyżyny',
      pillFast: '⚡ Szybka realizacja',
      pillService: '😊 Miła i fachowa obsługa',
      pillDiagnosis: '🔍 Diagnoza i wycena usterki',
      pillGuarantee: '🛡️ Gwarancja 3-24 m-ce',
      pillQuote: '🤝 Uczciwa wycena przed naprawą',
    },
    services: {
      sectionBadge: 'Nasza oferta',
      sectionTitle: 'Co robimy w Multi-Servis?',
      sectionSubtitle: 'Naprawiamy telewizory, laptopy i komputery stacjonarne oraz profesjonalnie montujemy systemy monitoringu kamer.',
      tvTitle: 'Naprawa Telewizorów',
      tvDesc: 'Diagnoza i naprawa telewizorów LED, OLED i QLED wszystkich popularnych marek.',
      tvPoints: [
        'Wymiana podświetlenia matrycy LED',
        'Naprawa zasilaczy i przetwornic',
        'Naprawa płyt głównych i modułów T-CON',
        'Gwarancja od 3 do 24 m-cy'
      ],
      laptopTitle: 'Naprawa Laptopów',
      laptopDesc: 'Zaawansowana diagnostyka płyt głównych, mikrolutowanie BGA oraz wymiana uszkodzonych matryc i gniazd.',
      laptopPoints: [
        'Lutowanie i reballing układów BGA',
        'Czyszczenie po zalaniu (myjka ultradźwiękowa)',
        'Wymiana matryc, klawiatur i gniazd zasilania',
        'Konserwacja chłodzenia i ochrona Multi-Guard'
      ],
      pcTitle: 'Naprawa Komputerów PC',
      pcDesc: 'Kompleksowy serwis jednostek stacjonarnych, komputerów gamingowych i biurowych.',
      pcPoints: [
        'Diagnostyka problemów z uruchamianiem',
        'Wymiana podzespołów (zasilacze, GPU, RAM)',
        'Modernizacja i składanie komputerów',
        'Optymalizacja Windows i diagnostyka Multi-Guard'
      ],
      cctvTitle: 'Montaż Monitoringu CCTV',
      cctvDesc: 'Projektowanie i profesjonalny montaż nowoczesnych systemów kamer (montujemy nowe instalacje, nie naprawiamy starych kamer).',
      cctvPoints: [
        'Nowoczesne kamery IP i 4K',
        'Konfiguracja rejestratora NVR i dysków',
        'Podgląd na żywo w aplikacji na telefonie',
        'Dobór sprzętu dopasowany do obiektu'
      ],
    },
    process: {
      sectionBadge: 'Jasne zasady',
      sectionTitle: '3 proste kroki',
      sectionSubtitle: 'Przejrzyste zasady bez ukrytych opłat. Zawsze wiesz, na czym stoisz przed podjęciem decyzji.',
      step1Title: 'Rzetelna diagnoza',
      step1Desc: 'Przynosisz sprzęt na ul. Ku Wiatrakom 18 w Bydgoszczy. Sprawdzamy dokładnie, co jest uszkodzone.',
      step2Title: 'Kontakt i Wycena',
      step2Desc: 'Dzwonimy do Ciebie z informacją: co uległo usterce, jak należy to naprawić, jaki będzie całkowity koszt i czas oczekiwania.',
      step3Title: 'Decyzja i Odbiór',
      step3Desc: 'Jeśli się zgadzasz – naprawiamy i otrzymujesz od min. 3  do 24 m-cy gwarancji. Jeśli nie wyrażasz zgody – odbierasz sprzęt. Terminy odbioru ustalamy elastycznie.',
    },
    pricing: {
      sectionBadge: 'Przejrzyste zasady',
      sectionTitle: 'Cennik usług',
      sectionSubtitle: 'Każda naprawa wyceniana jest indywidualnie po rzetelnej diagnozie. O kosztach decydujesz sam przed rozpoczęciem prac.',
      cashNotice: '',
      plan1Name: 'Diagnoza sprzętu',
      plan1Price: 'Indywidualna',
      plan1Period: 'przed naprawą',
      plan1Desc: 'Dokładne sprawdzenie usterki w warsztacie i telefoniczna wycena.',
      plan1Features: [
        'Lokalizacja uszkodzonego komponentu',
        'Telefon z wyceną części i robocizny',
        'Określenie czasu oczekiwania',
        'Wycena przedstawiana przed rozpoczęciem naprawy'
      ],
      plan2Name: 'Naprawa TV / Laptop / PC',
      plan2Price: 'Wycena',
      plan2Period: 'po diagnozie',
      plan2Desc: 'Naprawa realizowana wyłącznie po Twojej wcześniejszej zgodzie.',
      plan2Features: [
        'Oryginalne lub sprawdzone części OEM',
        'Gwarancja od 3 do 24 m-cy',
        'Testy obciążeniowe po wykonaniu usługi',
        'Rozliczenie przy odbiorze sprzętu'
      ],
      plan3Name: 'Montaż Monitoringu CCTV',
      plan3Price: 'Wycena',
      plan3Period: 'za montaż',
      plan3Desc: 'Instalacja systemów kamer dla domów i firm.',
      plan3Features: [
        'Dobór kamer i okablowanie',
        'Czysty montaż wewnątrz i na zewnątrz',
        'Konfiguracja podglądu na smartfonie',
        'Szkolenie z obsługi aplikacji'
      ],
      cta: 'Skontaktuj się z nami',
    },
    caseStudies: {
      sectionBadge: 'Galeria napraw',
      sectionTitle: 'Przykładowe realizacje',
      sectionSubtitle: 'Zobacz, jak przywracamy sprzęt do sprawności w warsztacie na Ku Wiatrakom 18.',
      beforeLabel: 'Usterka',
      afterLabel: 'Po naprawie',
      item1Title: 'Wymiana podświetlenia TV LED',
      item1Category: 'Telewizory',
      item1Desc: 'Ciemny ekran pomimo obecności dźwięku. Wymiana kompletu listew LED na nowe podłoże aluminiowe.',
      item1Duration: '24h',
      item1Cost: 'Indywidualna wycena',
      item2Title: 'Naprawa sekcji zasilania laptopa',
      item2Category: 'Laptopy',
      item2Desc: 'Brak reakcji na zasilacz po zwarciu w gnieździe USB. Wymiana uszkodzonych tranzystorów MOSFET.',
      item2Duration: '48h',
      item2Cost: 'Indywidualna wycena',
      item3Title: 'Regeneracja karty graficznej PC',
      item3Category: 'Komputery PC',
      item3Desc: 'Artefakty i przegrzewanie w grach. Wymiana termopadów, pasty termoprzewodzącej i czyszczenie chłodzenia.',
      item3Duration: '24h',
      item3Cost: 'Indywidualna wycena',
    },
    testimonials: {
      sectionBadge: 'Opinie',
      sectionTitle: 'Co mówią nasi klienci?',
      sectionSubtitle: 'Wieloletnie zaufanie mieszkańców Bydgoszczy i regionu.',
      t1Quote: 'Rzetelna diagnoza, szybki telefon z konkretną wyceną i telewizor 65 cali znów świeci jak nowy.',
      t1Author: 'Marek W.',
      t1Role: 'Klient z Bydgoszczy (Wyżyny)',
      t2Quote: 'Laptop po zalaniu kawą uratowany. Bardzo uczciwe podejście – powiedziano mi dokładnie co jest do zrobienia.',
      t2Author: 'Krzysztof P.',
      t2Role: 'Klient z Bydgoszczy (Fordon)',
      t3Quote: 'Montaż kamer wokół domu wykonany czysto i profesjonalnie. Podgląd na smartfonie działa bez zarzutu.',
      t3Author: 'Piotr K.',
      t3Role: 'Klient z Osielska',
    },
    faq: {
      sectionBadge: 'Częste pytania',
      sectionTitle: 'Baza wiedzy i odpowiedzi',
      sectionSubtitle: 'Wszystko o diagnozie, wycenie, gwarancji i odbiorze sprzętu.',
      questions: [
        {
          question: 'Gdzie znajduje się warsztat Multi-Servis i jak dojechać?',
          answer: 'Nasz warsztat mieści się przy ul. Ku Wiatrakom 18 w Bydgoszczy (osiedle Wyżyny). Przed lokalem dostępny jest bezpłatny parking dla klientów.'
        },
        {
          question: 'Czy muszę wcześniej dzwonić przed przyjazdem do serwisu?',
          answer: 'Zapraszamy od poniedziałku do piątku w godzinach 10:00 – 17:00. Nie musisz się wcześniej umówić na oddanie sprzętu do diagnozy, ale krótki telefon (505 012 914) pozwoli nam wstępnie ocenić usterkę i przygotować się na Twoją wizytę.'
        },
        {
          question: 'Ile trwa diagnoza usterki i ile kosztuje?',
          answer: 'Każdą diagnozę i wycenę naprawy przygotowujemy indywidualnie po rozebraniu urządzenia i pomiarach podzespołów. Zawsze dzwonimy do Ciebie z dokładną kwotą przed podjęciem jakichkolwiek działań naprawczych.'
        },
        {
          question: 'Czy przed rozpoczęciem naprawy poznam dokładny koszt?',
          answer: 'Tak, zawsze kontaktujemy się telefonicznie po wykonaniu diagnostyki i przedstawiamy całkowity kosztorys usługi oraz niezbędnych podzespołów. Naprawę rozpoczynamy wyłącznie po Twojej akceptacji wyceny. Nie ma żadnych ukrytych kosztów.'
        },
        {
          question: 'Czy mogę odebrać naprawiony sprzęt w innych godzinach?',
          answer: 'Tak, jesteśmy w pełni elastyczni. Po zakończeniu naprawy kontaktujemy się z Tobą i wspólnie ustalamy dogodny termin odbioru w godzinach pracy serwisu.'
        },
        {
          question: 'Jaką gwarancję otrzymuję na naprawę?',
          answer: 'Na każdą wykonaną naprawę i wymienione podzespoły udzielamy od 3 do 24 miesięcy gwarancji.'
        },
        {
          question: 'Mój laptop strasznie muli, wolno działa i głośno chodzi. Czy można go przyspieszyć i wyczyścić w Bydgoszczy?',
          answer: 'Tak! W Multi-Servis przy ul. Ku Wiatrakom 18 w Bydgoszczy wymieniamy stare dyski na superszybkie dyski SSD NVMe, klonujemy Twój system bez utraty danych oraz kompleksowo czyścimy układ chłodzenia z wymianą pasty termoprzewodzącej. Po serwisie laptop uruchamia się w kilka sekund i działa cicho.'
        },
        {
          question: 'W telewizorze słychać dźwięk, ale ekran jest ciemny/czarny. Czy naprawa jest opłacalna?',
          answer: 'Zdecydowanie tak! To najczęstsza usterka – uszkodzenie podświetlenia matrycy LED. Wymieniamy komplet listew na fabrycznie nowe aluminiowe listwy, co przywraca pełną sprawność obrazu za ułamek ceny nowego telewizora. Przed naprawą przedstawiamy dokładną wycenę.'
        },
        {
          question: 'Czym jest program Multi-Guard i jak zabezpiecza komputer po serwisie?',
          answer: 'Multi-Guard to nasze autorskie oprogramowanie dla Windows 10 i 11, instalowane wyłącznie stacjonarnie w warsztacie Multi-Servis (Ku Wiatrakom 18, Bydgoszcz). Podczas instalacji testujemy sprzęt i dołączamy wyłącznie sterowniki czujników dla Twojej konkretnej płyty głównej, dzięki czemu program jest ultralekki, szybki i nie spowalnia Windowsa. Pilnuje temperatur CPU/GPU po czyszczeniu chłodzenia, integruje ochronę Microsoft Defender, umożliwia wyłączanie i pełną kontrolę nad kamerą i mikrofonem oraz zapewnia bezpieczną zdalną pomoc serwisu na żądanie.'
        }
      ],
    },
    contact: {
      sectionBadge: 'Kontakt',
      sectionTitle: 'Zadzwoń do nas przed przyjazdem',
      sectionSubtitle: 'Multi-Servis • Ku Wiatrakom 18, Bydgoszcz',
      namePlaceholder: 'Imię i nazwisko',
      phonePlaceholder: 'Numer telefonu',
      devicePlaceholder: 'Sprzęt (np. TV Samsung 55", Laptop Asus)',
      messagePlaceholder: 'Opisz objawy usterki...',
      submitButton: 'Wyślij zapytanie',
      addressLabel: 'Adres warsztatu',
      addressVal: 'Ku Wiatrakom 18, 85-856 Bydgoszcz (Wyżyny)',
      phoneLabel: 'Telefon',
      phoneVal: '505 012 914',
      hoursLabel: 'Godziny',
      hoursVal: 'Pon. - Pt. 10:00 - 17:00 (elastyczny odbiór)',
      emailLabel: 'Email',
      emailVal: 'kontakt@multi-servis.pl',
      ownerLabel: 'Serwis',
      ownerVal: 'Multi-Servis Bydgoszcz',
      paymentLabel: 'Rozliczenie',
      paymentVal: 'Przy odbiorze sprzętu',
      rodoNotice: 'Administratorem danych jest Multi-Servis (ul. Ku Wiatrakom 18, Bydgoszcz).',
      noticeBadge: 'Kontakt telefoniczny',
      noticeTitle: 'Preferujemy kontakt telefoniczny',
      noticeP1: 'Otrzymujemy bardzo dużą liczbę ofert handlowych i spamu reklamowego. W związku z powyższym nie odpowiadamy na wiadomości SMS – prosimy o bezpośredni kontakt telefoniczny.',
      callButton: 'Zadzwoń: 505 012 914',
      callNote: 'Pon. - Pt. 10:00 - 17:00',
      phoneNoticeShort: 'W związku z dużą ilością spamu nie odpowiadamy na wiadomości SMS – prosimy o kontakt telefoniczny.',
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
    },
    multiGuardPromo: {
      badge: 'Autorskie Oprogramowanie Multi-Servis',
      title: 'Multi-Guard — Bezpieczeństwo i Kondycja Komputera',
      subtitle: 'Nowoczesny program dla Windows 10 i 11: ochrona z Microsoft Defender, wyłączanie i pełna kontrola kamery oraz mikrofonu, monitoring podzespołów w czasie rzeczywistym oraz zdalna pomoc serwisu.',
      standardTitle: 'Multi-Guard Standard',
      standardDesc: 'Ochrona i codzienna kontrola komputera. Granatowo-grafitowy interfejs z czerwonymi akcentami, Browser Shield i diagnostyka temperatur.',
      proTitle: 'Multi-Guard Pro',
      proDesc: 'Więcej możliwości i bezpieczna pomoc techniczna na Twoich warunkach. Każda sesja zdalna wymaga Twojej wyraźnej zgody.',
      tagDefender: 'Microsoft Defender & Firewall',
      tagPrivacy: 'Prywatność i uprawnienia',
      tagHardware: 'Monitoring CPU / RAM / GPU',
      tagRemote: 'Zdalne wsparcie na życzenie',
      learnMoreBtn: 'Poznaj Multi-Guard →',
      askInShopBtn: 'Zapytaj o program w serwisie',
      previewNotice: 'Interfejs programu Multi-Guard — widok poglądowy',
    },
  },

  en: {
    langCode: 'en',
    langName: 'English',
    flag: '🇬🇧',
    seo: {
      title: 'Multi-Servis Bydgoszcz | TV, Laptop & PC Repair | CCTV Installation',
      description: 'Electronics repair shop in Bydgoszcz (Ku Wiatrakom 18). TV, laptop, PC repair and CCTV camera installation. Accurate diagnosis and individual quote. Tel: +48 505 012 914.',
      keywords: 'TV repair Bydgoszcz, laptop repair Bydgoszcz, CCTV installation Bydgoszcz',
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      process: 'Process',
      pricing: 'Pricing',
      caseStudies: 'Cases',
      faq: 'FAQ',
      contact: 'Contact',
      callUs: 'Call us',
      multiGuard: 'Multi-Guard',
    },
    hero: {
      badge: '20+ Years Experience in Bydgoszcz',
      title: 'TV, Laptop & PC Repair + CCTV Camera Installation',
      subtitle: 'Ku Wiatrakom 18, Bydgoszcz. Defect diagnosis, individual quote before repair, and 3-24 months warranty.',
      ctaPhone: 'Call: 505 012 914 ',
      ctaContact: 'Report defect',
      statsYears: '20+ yrs',
      statsYearsLabel: 'Experience',
      statsGuarantee: 'Individual',
      statsGuaranteeLabel: 'Repair quote',
      statsSuccess: '100%',
      statsSuccessLabel: 'Fair pricing',
      cashNotice: '',
      pillCash: '📍 Bydgoszcz Wyżyny',
      pillFast: '⚡ Fast turnaround',
      pillService: '😊 Friendly & expert service',
      pillDiagnosis: '🔍 Fault diagnosis & quote',
      pillGuarantee: '🛡️ 3-24 months warranty',
      pillQuote: '🤝 Honest quote before repair',
    },
    services: {
      sectionBadge: 'Our Services',
      sectionTitle: 'What We Do at Multi-Servis',
      sectionSubtitle: 'We repair TVs, laptops, and desktop computers, and professionally install CCTV camera systems.',
      tvTitle: 'TV Repair',
      tvDesc: 'Diagnosis and component repair for LED, OLED, and QLED TVs.',
      tvPoints: [
        'LED backlight replacement',
        'Power supply & inverter repair',
        'Mainboard & T-CON repairs',
        '3-24 months warranty'
      ],
      laptopTitle: 'Laptop Repair',
      laptopDesc: 'Advanced motherboard diagnostics, BGA soldering, and component replacement.',
      laptopPoints: [
        'BGA chip soldering & reballing',
        'Liquid damage ultrasonic cleaning',
        'Screen, keyboard & DC jack replacement',
        'Cooling service & Multi-Guard hardware health'
      ],
      pcTitle: 'PC & Desktop Repair',
      pcDesc: 'Comprehensive repair and maintenance of desktop and gaming PCs.',
      pcPoints: [
        'Power and boot issue diagnostics',
        'Faulty hardware replacement',
        'Upgrades & custom PC assembly',
        'Windows optimization & Multi-Guard diagnostics'
      ],
      cctvTitle: 'CCTV Camera Installation',
      cctvDesc: 'Professional installation of modern security camera systems (we install systems, we do not repair old cameras).',
      cctvPoints: [
        'Modern IP and 4K cameras',
        'NVR setup & hard drive storage',
        'Live streaming on smartphone app',
        'System tailored to your property'
      ],
    },
    process: {
      sectionBadge: 'Simple Workflow',
      sectionTitle: '3 Simple Steps',
      sectionSubtitle: 'Clear rules with no hidden costs. You decide after receiving our inspection quote.',
      step1Title: 'Thorough Diagnosis',
      step1Desc: 'Bring your device to Ku Wiatrakom 18 in Bydgoszcz. We inspect and find the exact defect.',
      step2Title: 'Contact & Quote',
      step2Desc: 'We call you explaining what is broken, how to fix it, total cost, and estimated turnaround. You decide.',
      step3Title: 'Decision & Pickup',
      step3Desc: 'If you agree – we repair and you receive from min. 3 to 24 months warranty. If you do not agree – you pick up your equipment. Pickup times are flexible.',
    },
    pricing: {
      sectionBadge: 'Pricing',
      sectionTitle: 'Transparent Pricing',
      sectionSubtitle: 'Each repair is priced individually after diagnosis. Work proceeds only after your explicit approval.',
      cashNotice: '',
      plan1Name: 'Device Diagnosis',
      plan1Price: 'Individual',
      plan1Period: 'before repair',
      plan1Desc: 'Detailed defect diagnosis and phone consultation.',
      plan1Features: [
        'Faulty component identification',
        'Phone quote for parts & labor',
        'Turnaround time estimate',
        'Quote provided before starting work'
      ],
      plan2Name: 'TV / Laptop / PC Repair',
      plan2Price: 'By Quote',
      plan2Period: 'after diagnosis',
      plan2Desc: 'Carried out only upon your acceptance of the cost estimate.',
      plan2Features: [
        'Original or high-grade OEM parts',
        '3-24 months warranty',
        'Burn-in & load testing',
        'Payment upon device pickup'
      ],
      plan3Name: 'CCTV Installation',
      plan3Price: 'By Quote',
      plan3Period: 'installation',
      plan3Desc: 'Security camera installations for homes and businesses.',
      plan3Features: [
        'Equipment selection & cabling',
        'Clean indoor/outdoor installation',
        'Live smartphone app setup',
        'System usage walkthrough'
      ],
      cta: 'Contact us',
    },
    caseStudies: {
      sectionBadge: 'Portfolio',
      sectionTitle: 'Sample Repairs',
      sectionSubtitle: 'Proven quality in electronics repairs and camera setups in Bydgoszcz.',
      item1Title: 'LED Backlight Replacement - 65" Samsung TV',
      item1Category: 'TV Repair',
      item1Desc: 'Sound with black screen. Full LED strips replacement and current tuning.',
      item2Title: 'Spill Damage Repair - MacBook Laptop',
      item2Category: 'Laptop Repair',
      item2Desc: 'Ultrasonic cleaning, micro-soldering corroded power traces, full recovery.',
      item3Title: 'Power Supply Short Circuit - Gaming PC',
      item3Category: 'PC Repair',
      item3Desc: 'Thermal imaging short detection and MOSFET transistor replacement.',
      item4Title: '4K IP Camera Installation - Residential',
      item4Category: 'CCTV Installation',
      item4Desc: '6 cameras with night vision and live smartphone streaming configured.',
      viewAll: 'View all cases',
    },
    testimonials: {
      sectionBadge: 'Reviews',
      sectionTitle: 'Customer Feedback',
      sectionSubtitle: 'Over 20 years of trusted electronics service in Bydgoszcz.',
      t1Quote: 'Accurate diagnosis, straightforward phone quote, and my 65" TV works like new.',
      t1Author: 'Marek W.',
      t1Role: 'Customer from Bydgoszcz (Wyżyny)',
      t2Quote: 'Saved my liquid-damaged laptop. Very honest approach, explained every detail.',
      t2Author: 'Krzysztof P.',
      t2Role: 'Customer from Bydgoszcz (Fordon)',
      t3Quote: 'Camera installation was clean and professional. App live stream works flawlessly.',
      t3Author: 'Piotr K.',
      t3Role: 'Customer from Osielsko',
    },
    faq: {
      sectionBadge: 'FAQ',
      sectionTitle: 'Frequently Asked Questions',
      sectionSubtitle: 'Diagnosis, repair quotes, warranty, and pickup policy.',
      items: [
        {
          question: 'How does the device diagnosis and quote work?',
          answer: 'Each device is inspected individually in our workshop. We disassemble the equipment, locate the root cause, and call you with an exact price and turnaround time before proceeding with any repair.'
        },
        {
          question: 'How fast is diagnosis completed?',
          answer: 'Initial diagnosis is typically performed within 24 to 48 hours after dropping off your device at Ku Wiatrakom 18. We then contact you by phone with a complete cost estimate.'
        },
        {
          question: 'Do you repair CCTV security cameras?',
          answer: 'We do not repair old security cameras. We specialize in the installation and setup of new CCTV camera systems.'
        },
        {
          question: 'How does the repair decision work?',
          answer: 'After diagnosis, we call you with the quote. You decide. We only proceed with repairs after your explicit approval.'
        },
        {
          question: 'Are pickup times flexible?',
          answer: 'Yes, we are very flexible with pickup appointments during our business hours.'
        },
        {
          question: 'What warranty is provided?',
          answer: 'We provide from 3 to 24 months warranty on repaired devices and installed parts.'
        },
        {
          question: 'My laptop is running extremely slow, freezing and fan is loud. Can you speed it up and clean it in Bydgoszcz?',
          answer: 'Yes! At Multi-Servis (Ku Wiatrakom 18, Bydgoszcz) we replace slow HDDs with ultra-fast NVMe SSDs, clone your OS without data loss, and thoroughly clean cooling fans with fresh thermal paste. Your laptop will run like new.'
        },
        {
          question: 'My TV has sound but black screen (no picture). Is it worth repairing?',
          answer: 'Yes! This is the most common TV failure – damaged LED backlight strips. We replace the entire set of LED bars with brand-new aluminum strips, restoring perfect brightness at a fraction of a new TV cost. An exact quote is provided prior to repair.'
        },
        {
          question: 'What is Multi-Guard and how does it protect my PC after service?',
          answer: 'Multi-Guard is our proprietary software for Windows 10 and 11, configured and installed exclusively in our workshop at Ku Wiatrakom 18, Bydgoszcz. We bench-test your machine and inject only the sensor drivers needed for your exact motherboard, keeping the utility ultra-lightweight and fast without dragging down Windows. It monitors CPU/GPU temperatures after cooling maintenance, integrates Microsoft Defender, provides complete camera and microphone toggle controls, and offers secure on-demand remote support.'
        }
      ],
    },
    contact: {
      sectionBadge: 'Contact',
      sectionTitle: 'Please call us before visiting',
      sectionSubtitle: 'Multi-Servis • Ku Wiatrakom 18, Bydgoszcz',
      namePlaceholder: 'Full Name',
      phonePlaceholder: 'Phone Number',
      devicePlaceholder: 'Device (e.g. Samsung 55" TV, Asus Laptop)',
      messagePlaceholder: 'Describe the issue...',
      submitButton: 'Send inquiry',
      addressLabel: 'Address',
      addressVal: 'Ku Wiatrakom 18, 85-856 Bydgoszcz',
      phoneLabel: 'Phone',
      phoneVal: '+48 505 012 914',
      hoursLabel: 'Hours',
      hoursVal: 'Mon. - Fri. 10:00 - 17:00 (flexible pickup)',
      emailLabel: 'Email',
      emailVal: 'kontakt@multi-servis.pl',
      ownerLabel: 'Service',
      ownerVal: 'Multi-Servis Bydgoszcz',
      paymentLabel: 'Payment',
      paymentVal: 'Upon device pickup',
      rodoNotice: 'Your data controller is Multi-Servis (Ku Wiatrakom 18, Bydgoszcz).',
      noticeBadge: 'Phone Contact',
      noticeTitle: 'Phone contact preferred',
      noticeP1: 'We receive a large volume of commercial offers and spam daily. In connection with the above, we do not respond to SMS messages – please contact us by phone.',
      callButton: 'Call us: +48 505 012 914',
      callNote: 'Mon. - Fri. 10:00 - 17:00',
      phoneNoticeShort: 'Due to high spam volume, we do not respond to SMS – please call us.',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    multiGuardPromo: {
      badge: 'Developed by Multi-Servis',
      title: 'Multi-Guard — PC Security & Hardware Health',
      subtitle: 'Modern Windows 10 & 11 utility: Microsoft Defender integration, camera and microphone shut-off & controls, real-time hardware telemetry, and remote technical assistance.',
      standardTitle: 'Multi-Guard Standard',
      standardDesc: 'Daily protection and system overview. Sleek dark interface with red accents, Browser Shield, and thermal monitoring.',
      proTitle: 'Multi-Guard Pro',
      proDesc: 'Enhanced diagnostics and remote support on your terms. Remote assistance strictly requires user approval for every session.',
      tagDefender: 'Microsoft Defender & Firewall',
      tagPrivacy: 'Privacy & Device Controls',
      tagHardware: 'Real-time CPU / RAM / GPU',
      tagRemote: 'On-demand Remote Support',
      learnMoreBtn: 'Explore Multi-Guard →',
      askInShopBtn: 'Ask about Multi-Guard at workshop',
      previewNotice: 'Multi-Guard interface — preview mockup',
    },
  },

  uk: {
    langCode: 'uk',
    langName: 'Українська',
    flag: '🇺🇦',
    seo: {
      title: 'Multi-Servis Бидгощ | Ремонт телевізорів, ноутбуків, ПК та монтаж камер CCTV',
      description: 'Сервіс електроніки у Бидгощі (Ku Wiatrakom 18). Ремонт ТБ, ноутбуків, комп’ютерів та монтаж відеоспостереження. Точна діагностика та індивідуальна оцінка. Тел: +48 505 012 914.',
      keywords: 'ремонт телевізорів Бидгощ, ремонт ноутбуків Бидгощ, монтаж камер відеоспостереження Бидгощ',
    },
    nav: {
      home: 'Головна',
      about: 'Про нас',
      services: 'Послуги',
      process: 'Правила',
      pricing: 'Ціни',
      caseStudies: 'Роботи',
      faq: 'FAQ',
      contact: 'Контакти',
      callUs: 'Зателефонувати',
      multiGuard: 'Multi-Guard',
    },
    hero: {
      badge: 'Понад 20 років досвіду у Бидгощі',
      title: 'Ремонт ТБ, ноутбуків, ПК та монтаж відеоспостереження',
      subtitle: 'Ku Wiatrakom 18, Бидгощ. Точна діагностика несправності, індивідуальна оцінка вартості до ремонту та гарантія від 3 до 24 міс.',
      ctaPhone: 'Тел: 505 012 914 ',
      ctaContact: 'Замовити ремонт',
      statsYears: '20+ р.',
      statsYearsLabel: 'Досвіду',
      statsGuarantee: 'Індивідуальна',
      statsGuaranteeLabel: 'Оцінка ремонту',
      statsSuccess: '100%',
      statsSuccessLabel: 'Чесні умови',
      cashNotice: '',
      pillCash: '📍 Bydgoszcz Wyżyny',
      pillFast: '⚡ Швидке виконання',
      pillService: '😊 Ввічливе та якісне обслуговування',
      pillDiagnosis: '🔍 Діагностика та оцінка несправності',
      pillGuarantee: '🛡️ Гарантія 3-24 міс.',
      pillQuote: '🤝 Чесна оцінка перед ремонтом',
    },
    services: {
      sectionBadge: 'Послуги',
      sectionTitle: 'Що ми робимо в Multi-Servis?',
      sectionSubtitle: 'Ми ремонтуємо телевізори, ноутбуки та ПК, а також професійно монтуємо системи відеоспостереження.',
      tvTitle: 'Ремонт Телевізорів',
      tvDesc: 'Діагностика та ремонт телевізорів LED, OLED та QLED усіх популярних брендів.',
      tvPoints: [
        'Заміна підсвічування LED матриці',
        'Ремонт блоків живлення та інверторів',
        'Ремонт материнських плат і модулів T-CON',
        'Гарантія від 3 до 24 міс.'
      ],
      laptopTitle: 'Ремонт Ноутбуків',
      laptopDesc: 'Компонентний ремонт материнських плат, BGA паяння та механічні заміни.',
      laptopPoints: [
        'Паяння та реболінг BGA чіпів',
        'Ремонт плат після залиття рідиною',
        'Заміна матриць, клавіатур та роз’ємів',
        'Чищення охолодження та захист Multi-Guard'
      ],
      pcTitle: 'Ремонт Комп’ютерів ПК',
      pcDesc: 'Комплексний ремонт робочих та ігрових комп’ютерних систем.',
      pcPoints: [
        'Діагностика проблем із запуском',
        'Заміна несправних комплектуючих',
        'Модернізація та збирання нових ПК',
        'Оптимізація Windows та діагностика Multi-Guard'
      ],
      cctvTitle: 'Монтаж Відеоспостереження CCTV',
      cctvDesc: 'Професійний монтаж та налаштування нових систем камер (ми монтуємо системи, а не ремонтуємо старі камери).',
      cctvPoints: [
        'Встановлення сучасних IP та 4K камер',
        'Налаштування відеореєстратора NVR',
        'Перегляд онлайн на смартфоні та планшеті',
        'Підбір обладнання під вашу територію'
      ],
    },
    process: {
      sectionBadge: 'Простий порядок',
      sectionTitle: 'Процес у 3 простих кроки',
      sectionSubtitle: 'Прозорі умови без прихованих платежів. Ви завжди знаєте точну ціну до початку робіт.',
      step1Title: 'Точна діагностика',
      step1Desc: 'Приносите пристрій за адресою Ku Wiatrakom 18 у Бидгощі. Ми детально перевіряємо, що саме зламано.',
      step2Title: 'Дзвінок і Оцінка',
      step2Desc: 'Дзвонимо вам і повідомляємо: що пошкоджено, як ремонтувати, скільки це коштуватиме і термін очікування.',
      step3Title: 'Рішення та Отримання',
      step3Desc: 'Якщо ви згодні – ремонтуємо та ви отримуєте від мін. 3 до 24 міс. гарантії. Якщо не даєте згоди – забираєте техніку. Терміни отримання узгоджуємо гнучко.',
    },
    pricing: {
      sectionBadge: 'Прайс-лист',
      sectionTitle: 'Прозорі ціни',
      sectionSubtitle: 'Кожен ремонт оцінюється індивідуально після діагностики. Ви самі вирішуєте, чи робити ремонт після узгодження вартості.',
      cashNotice: '',
      plan1Name: 'Діагностика пристрою',
      plan1Price: 'Індивідуальна',
      plan1Period: 'до ремонту',
      plan1Desc: 'Детальна перевірка несправності в майстерні та узгодження телефоном.',
      plan1Features: [
        'Визначення пошкодженого вузла',
        'Дзвінок з точною ціною деталей і роботи',
        'Визначення терміну ремонту',
        'Оцінка надається до початку будь-яких робіт'
      ],
      plan2Name: 'Ремонт ТБ / Ноутбука / ПК',
      plan2Price: 'За оцінкою',
      plan2Period: 'після діагностики',
      plan2Desc: 'Виконується лише після вашої повної згоди на вартість.',
      plan2Features: [
        'Оригінальні або перевірені деталі OEM',
        'Гарантія від 3 до 24 місяців',
        'Стрес-тести перед видачею',
        'Розрахунок при отриманні техніки'
      ],
      plan3Name: 'Монтаж Відеоспостереження',
      plan3Price: 'За оцінкою',
      plan3Period: 'за монтаж',
      plan3Desc: 'Встановлення систем камер для будинків та бізнесу.',
      plan3Features: [
        'Підбір камер та прокладання кабелів',
        'Акуратний монтаж зовні та всередині',
        'Налаштування додатку на смартфоні',
        'Навчання користуванню системою'
      ],
      cta: 'Зв’язатися з нами',
    },
    caseStudies: {
      sectionBadge: 'Досвід',
      sectionTitle: 'Приклади робіт',
      sectionSubtitle: 'Ремонтуємо електроніку та монтуємо камери у Бидгощі та регіоні.',
      item1Title: 'Заміна LED підсвічування - ТБ Samsung 65"',
      item1Category: 'Ремонт ТБ',
      item1Desc: 'Звук є, зображення немає. Повна заміна планок LED та корекція живлення.',
      item2Title: 'Ремонт після залиття - MacBook',
      item2Category: 'Ремонт Ноутбука',
      item2Desc: 'Ультразвукова чистка, мікропаяння пошкоджених ланцюгів живлення.',
      item3Title: 'Коротке замикання живлення - Gaming PC',
      item3Category: 'Ремонт ПК',
      item3Desc: 'Пошук замикання тепловізором і заміна силових транзисторів MOSFET.',
      item4Title: 'Монтаж відеоспостереження 4K IP - Осельсько',
      item4Category: 'Монтаж Камер',
      item4Desc: 'Встановлення 6 камер із нічним баченням та онлайн-доступом на телефоні.',
      viewAll: 'Усі роботи',
    },
    testimonials: {
      sectionBadge: 'Відгуки',
      sectionTitle: 'Що кажуть клієнти?',
      sectionSubtitle: 'Багаторічна довіра жителів Бидгоща.',
      t1Quote: 'Швидка діагностика, дзвінок із точною ціною, і телевізор 65 дюймів знову показує відмінно.',
      t1Author: 'Марек В.',
      t1Role: 'Клієнт з Бидгоща (Вижини)',
      t2Quote: 'Врятували ноутбук після залиття кавою. Дуже чесний підхід майстра.',
      t2Author: 'Кшиштоф П.',
      t2Role: 'Клієнт з Бидгоща (Фордон)',
      t3Quote: 'Камери навколо будинку встановлені чисто та швидко. Додаток на телефоні працює супер.',
      t3Author: 'Пйотр К.',
      t3Role: 'Клієнт з Осельська',
    },
    faq: {
      sectionBadge: 'FAQ',
      sectionTitle: 'Часті запитання',
      sectionSubtitle: 'Діагностика, погодження цін, гарантія та отримання техніки.',
      items: [
        {
          question: 'Як відбувається діагностика та оцінка техніки?',
          answer: 'Кожен пристрій ми перевіряємо індивідуально в майстерні. Після розбирання та локалізації несправності телефонуємо вам, пояснюємо причину поломки, точну вартість і терміни до початку робіт.'
        },
        {
          question: 'Як швидко проводиться діагностика?',
          answer: 'Зазвичай діагностика триває 24–48 годин з моменту доставки техніки до майстерні на вул. Ku Wiatrakom 18. Після цього ми одразу телефонуємо з детальною інформацією.'
        },
        {
          question: 'Чи ремонтуєте ви камери відеоспостереження?',
          answer: 'Ми не ремонтуємо старі камери. Ми займаємося професійним монтажем і встановленням нових систем відеоспостереження CCTV.'
        },
        {
          question: 'Як відбувається погодження ремонту?',
          answer: 'Після діагностики ми дзвонимо вам із точним кошторисом. Ви вирішуєте – ремонт виконується лише після вашої згоди.'
        },
        {
          question: 'Чи гнучкий графік видачі техніки?',
          answer: 'Так, ми дуже гнучкі та завжди домовляємося про зручний для вас час отримання.'
        },
        {
          question: 'Яку гарантію ви надаєте?',
          answer: 'На всі ремонти та встановлені запчастини надаємо від 3 до 24 місяців гарантії.'
        },
        {
          question: 'Ноутбук дуже гальмує, повільно працює та шумить кулер. Чи можна прискорити його в Бидгощі?',
          answer: 'Так! У Multi-Servis на вул. Ku Wiatrakom 18 у Бидгощі ми замінюємо старі диски на надшвидкі SSD NVMe, клонуємо систему без втрати файлів та проводимо чистку охолодження із заміною термопасти. Ноутбук запускатиметься за секунди та працюватиме тихо.'
        },
        {
          question: 'У телевізорі є звук, але чорний екран (немає зображення). Чи варто ремонтувати?',
          answer: 'Однозначно так! Це найпоширеніша несправність – перегорання LED підсвічування. Ми замінюємо комплект планок на нові алюмінієві, повертаючи яскравість за значно менші гроші, ніж покупка нового ТВ. Точну вартість озвучуємо перед ремонтом.'
        },
        {
          question: 'Що таке програма Multi-Guard і як вона захищає ПК після ремонту?',
          answer: 'Multi-Guard — це наше власне програмне забезпечення для Windows 10 та 11, яке встановлюється виключно у майстерні Multi-Servis (Ku Wiatrakom 18, Бидгощ). Ми тестуємо пристрій і підключаємо драйвери лише під вашу материнську плату, завдяки чому програма надлегка, швидка і не гальмує Windows. Вона контролює температури CPU/GPU після заміни термопасти, інтегрує захист Microsoft Defender, дозволяє вимикати камеру і мікрофон та надає повний контроль над дозволами додатків, а також забезпечує безпечну віддалену підтримку за запитом.'
        }
      ],
    },
    contact: {
      sectionBadge: 'Контакти',
      sectionTitle: 'Зателефонуйте нам перед візитом',
      sectionSubtitle: 'Multi-Servis • Ku Wiatrakom 18, Bydgoszcz',
      namePlaceholder: 'Ім’я та прізвище',
      phonePlaceholder: 'Номер телефону',
      devicePlaceholder: 'Пристрій (напр. TV Samsung 55", Ноутбук Asus)',
      messagePlaceholder: 'Опишіть ознаки несправності...',
      submitButton: 'Надіслати запит',
      addressLabel: 'Адреса майстерні',
      addressVal: 'Ku Wiatrakom 18, 85-856 Bydgoszcz',
      phoneLabel: 'Телефон',
      phoneVal: '+48 505 012 914',
      hoursLabel: 'Години роботи',
      hoursVal: 'Пн. - Пт. 10:00 - 17:00 (гнучкий прийом)',
      emailLabel: 'Email',
      emailVal: 'kontakt@multi-servis.pl',
      ownerLabel: 'Сервіс',
      ownerVal: 'Multi-Servis Бидгощ',
      paymentLabel: 'Розрахунок',
      paymentVal: 'При отриманні техніки',
      rodoNotice: 'Адміністратором даних є Multi-Servis (Ku Wiatrakom 18, Бидгощ).',
      noticeBadge: 'Телефонний зв’язок',
      noticeTitle: 'Надаємо перевагу дзвінкам',
      noticeP1: 'Щодня ми отримуємо велику кількість комерційних пропозицій та спаму. У зв’язку з цим ми не відповідаємо на SMS-повідомлення – просимо звертатися за телефоном.',
      callButton: 'Зателефонувати: +48 505 012 914',
      callNote: 'Пн. - Пт. 10:00 - 17:00',
      phoneNoticeShort: 'У зв’язку зі спамом ми не відповідаємо на SMS – просимо телефонувати.',
    },
    footer: {
      rights: 'Усі права захищено.',
    },
    multiGuardPromo: {
      badge: 'Розробка Multi-Servis',
      title: 'Multi-Guard — Безпека та Стан Вашого Комп’ютера',
      subtitle: 'Сучасна програма для Windows 10 та 11: захист на базі Microsoft Defender, вимикання та повний контроль камери і мікрофона, моніторинг температури та дистанційна підтримка.',
      standardTitle: 'Multi-Guard Standard',
      standardDesc: 'Щоденний захист та контроль системи. Графітовий інтерфейс з червоними акцентами, Browser Shield та моніторинг навантаження.',
      proTitle: 'Multi-Guard Pro',
      proDesc: 'Розширена діагностика та безпечна технічна допомога. Кожне віддалене підключення вимагає вашої обов’язкової згоди.',
      tagDefender: 'Microsoft Defender & Firewall',
      tagPrivacy: 'Конфіденційність та дозволи',
      tagHardware: 'Моніторинг CPU / RAM / GPU',
      tagRemote: 'Дистанційна допомога на запит',
      learnMoreBtn: 'Дізнатися більше про Multi-Guard →',
      askInShopBtn: 'Запитати про програму в майстерні',
      previewNotice: 'Інтерфейс програми Multi-Guard — демонстраційний вигляд',
    },
  },
};
