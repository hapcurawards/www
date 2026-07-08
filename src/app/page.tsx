"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// ============================================
// CONFIGURATION - Easy to edit slideshow images
// ============================================
const SLIDESHOW_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1920&q=80",
    alt: "Luxe custom award op display",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80",
    alt: "Ambachtelijke trofee creatie",
  },
  {
    src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1920&q=80",
    alt: "Premium award materialen",
  },
];

// ============================================
// CONFIGURATION - Easy to add/edit award cards
// ============================================
const AWARD_CARDS = [
  {
    id: 1,
    client: "Dutch Beatbox Champions League 2026",
    description: "Custom hout en acryl award met geïntegreerde LED-verlichting voor de organisatoren van het Nederlands kampioenschap human beatbox.",
    images: [
      "/img/award01.jpeg",
      "/img/award01.jpeg",
      "/img/award01.jpeg",
    ],
  },
  {
    id: 2,
    client: "Philharmonisch Orkest Utrecht",
    description: "Elegante glazen sculpturen met gegraveerde muzieknoten voor de jaarlijkse muziekprijzen.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/50f60d11e4b01990ba081956/1718813311220-17C3MLS26NEDVX0BM7AR/custom+modern+awards+for+lacework+-+Andrew+Watson+Design.jpg",
      "https://glendoratrophy.com/wp-content/uploads/2017/04/Modern_Acrylic_Award-1.jpg",
      "https://i.etsystatic.com/25614909/r/il/79c797/4649151931/il_570xN.4649151931_63yn.jpg",
    ],
  },
  {
    id: 3,
    client: "TechStart Innovation Awards",
    description: "Futuristische metalen trofeeën met bewegende delen en LED-strips voor tech startup competitie.",
    images: [
      "https://i.etsystatic.com/25614909/r/il/ff4958/4600909040/il_570xN.4600909040_dhgd.jpg",
      "https://i.etsystatic.com/25614909/r/il/06740c/4649121597/il_570xN.4649121597_m10m.jpg",
      "https://glendoratrophy.com/wp-content/uploads/2017/04/Modern_Acrylic_Award-1.jpg",
    ],
  },
  {
    id: 4,
    client: "Nationale Schaakkampioenschappen",
    description: "Houten awards met handgesneden schaakstukken en messing accenten.",
    images: [
      "https://i.etsystatic.com/25614909/r/il/3b299e/4661604419/il_570xN.4661604419_t263.jpg",
      "https://i.etsystatic.com/25614909/r/il/79c797/4649151931/il_570xN.4649151931_63yn.jpg",
      "https://i.etsystatic.com/25614909/r/il/ff4958/4600909040/il_570xN.4600909040_dhgd.jpg",
    ],
  },
];

// ============================================
// CONFIGURATION - Process steps
// ============================================
const PROCESS_STEPS = [
  {
    number: "01",
    titleNL: "CONTACT & BRIEFING",
    titleEN: "CONTACT & BRIEFING",
    descriptionNL: "Je benadert ons met je verzoek en/of budget. We bespreken je wensen en maken een eerste debrief.",
    descriptionEN: "You contact us with your request and/or budget. We discuss your wishes and create an initial debrief.",
  },
  {
    number: "02",
    titleNL: "GOEDKEURING DEBRIEF",
    titleEN: "DEBRIEF APPROVAL",
    descriptionNL: "Na goedkeuring van de debrief door de klant gaan we aan de slag met de eerste schetsen en ontwerpen.",
    descriptionEN: "After the client approves the debrief, we start working on the first sketches and designs.",
  },
  {
    number: "03",
    titleNL: "ONTWERP & SCHETSEN",
    titleEN: "DESIGN & SKETCHES",
    descriptionNL: "We maken gedetailleerde schetsen en 3D-visualisaties van je custom award voor je goedkeuring.",
    descriptionEN: "We create detailed sketches and 3D visualizations of your custom award for your approval.",
  },
  {
    number: "04",
    titleNL: "PRODUCTIE",
    titleEN: "PRODUCTION",
    descriptionNL: "Na goedkeuring van het ontwerp wordt de award vakkundig vervaardigd in ons atelier.",
    descriptionEN: "After design approval, the award is expertly crafted in our workshop.",
  },
  {
    number: "05",
    titleNL: "KWALITEITSCONTROLE",
    titleEN: "QUALITY CONTROL",
    descriptionNL: "Elke award wordt fotografisch vastgelegd en onderworpen aan strenge kwaliteitscontrole.",
    descriptionEN: "Every award is photographed and subjected to strict quality control.",
  },
  {
    number: "06",
    titleNL: "LEVERING",
    titleEN: "DELIVERY",
    descriptionNL: "Verzending per post of afhalen. Tegen meerprijs bezorgen we ook persoonlijk.",
    descriptionEN: "Shipping by mail or pick-up. For an additional fee, we also deliver personally.",
  },
];

// ============================================
// COMPONENTS
// ============================================

function Navigation({ language, setLanguage }: { language: "nl" | "en"; setLanguage: (lang: "nl" | "en") => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = language === "nl"
    ? [{ label: "OVER ONS", href: "#over-ons" }, { label: "EERDER WERK", href: "#eerder-werk" }, { label: "WERKWIJZE", href: "#werkwijze" }, { label: "CONTACT", href: "#contact" }]
    : [{ label: "ABOUT US", href: "#over-ons" }, { label: "PREVIOUS WORK", href: "#eerder-werk" }, { label: "HOW WE WORK", href: "#werkwijze" }, { label: "CONTACT", href: "#contact" }];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black/95 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand - Left */}
          <a href="#" className="group">
            <h1 className="font-display text-xl md:text-2xl tracking-wider text-foreground group-hover:text-gold transition-colors duration-300">
              HAPPY CURRENTS CUSTOM AWARDS
            </h1>
          </a>

          {/* Right side - Language, Email, Menu */}
          <div className="flex items-center space-x-6">
            {/* Language Toggle */}
            <button
              type="button"
              onClick={() => setLanguage(language === "nl" ? "en" : "nl")}
              className="hidden md:flex items-center space-x-1 text-foreground/80 hover:text-gold transition-colors duration-300"
            >
              <span className="text-sm font-body tracking-wider">{language === "nl" ? "NL" : "EN"}</span>
              <span className="text-foreground/40">/</span>
              <span className="text-sm font-body tracking-wider text-foreground/40">{language === "nl" ? "EN" : "NL"}</span>
            </button>

            {/* Email Icon Only */}
            <a
              href="mailto:hapcur.awards@gmail.com"
              className="text-foreground/80 hover:text-gold transition-colors duration-300"
              title="hapcur.awards@gmail.com"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* Menu Button */}
            <button
              type="button"
              className="flex items-center space-x-2 text-foreground hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="text-sm font-body tracking-widest">MENU</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mt-6 pb-6 border-t border-gold/20 pt-6">
            <ul className="flex flex-col lg:flex-row lg:justify-end lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-sm font-body tracking-widest text-foreground/80 hover:text-gold transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Mobile Language Toggle */}
              <li className="lg:hidden pt-4 border-t border-gold/10">
                <button
                  type="button"
                  onClick={() => setLanguage(language === "nl" ? "en" : "nl")}
                  className="text-sm font-body tracking-widest text-gold"
                >
                  {language === "nl" ? "SWITCH TO ENGLISH" : "NAAR NEDERLANDS"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow Images */}
      {SLIDESHOW_IMAGES.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: "1500ms" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover slideshow-image"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Logo Center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="animate-fade-in-up text-center">
          <Image
            src="/img/logo.png"
            alt="Happy Currents Logo"
            width={300}
            height={200}
            className="mx-auto mb-8 opacity-95"
          />
          <div className="w-24 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-sm tracking-[0.4em] text-foreground/70 uppercase">
            MAATWERK TROFEEËN & AWARDS
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#over-ons" className="text-foreground/50 hover:text-gold transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 right-12 flex space-x-3">
        {SLIDESHOW_IMAGES.map((_, index) => (
          <button
            key={`slide-${index}-indicator`}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-gold w-8" : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function AboutSection({ language }: { language: "nl" | "en" }) {
  const content = {
    nl: {
      label: "WIE WE ZIJN",
      title: "OVER ONS",
      subtitle: "VAKMANSCHAP & CREATIVITEIT",
      paragraphs: [
        "Happy Currents is al jarenlang een gevestigde naam in maatwerk elektronica en laserwerk. Nu breiden we onze expertise uit naar de wereld van custom awards en trofeeën – waar vakmanschap, creativiteit en innovatie samenkomen.",
        "Onze awards worden vervaardigd uit de meest uiteenlopende materialen: hout, acryl, metaal, glas – en nog veel meer. Niets is te gek. Of je nu een trofee wilt in de vorm van je logo, een abstracte sculptuur, of iets compleet unieks – wij maken het werkelijkheid.",
        "Wat ons onderscheidt is onze technische achtergrond. Wil je LED-verlichting in je award? Bewegende onderdelen? Interactieve elementen? Geen probleem. We integreren elektrische systemen naadloos in onze ontwerpen, waardoor je award niet alleen een prijs is, maar een echte beleving.",
        "Onze doelgroep is divers: van sporttournooien en muziekcompetities tot dance battles en bedrijfsevenementen. Of misschien zoek je een uniek geschenk voor je beste werknemer? Bij Happy Currents is alles maatwerk en praktisch alles is te verwezenlijken.",
      ],
    },
    en: {
      label: "WHO WE ARE",
      title: "ABOUT US",
      subtitle: "CRAFTSMANSHIP & CREATIVITY",
      paragraphs: [
        "Happy Currents has been an established name in custom electronics and laser work for years. Now we're expanding our expertise into the world of custom awards and trophies – where craftsmanship, creativity, and innovation come together.",
        "Our awards are crafted from the most diverse materials: wood, acrylic, metal, glass – and much more. Nothing is too outlandish. Whether you want a trophy shaped like your logo, an abstract sculpture, or something completely unique – we make it reality.",
        "What sets us apart is our technical background. Want LED lighting in your award? Moving parts? Interactive elements? No problem. We seamlessly integrate electrical systems into our designs, making your award not just a prize, but a true experience.",
        "Our audience is diverse: from sports tournaments and music competitions to dance battles and corporate events. Or perhaps you're looking for a unique gift for your best employee? At Happy Currents, everything is custom-made and practically anything is achievable.",
      ],
    },
  };

  const t = content[language];

  return (
    <section id="over-ons" className="py-32 px-6 lg:px-12 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-gold text-xs font-body tracking-[0.4em] uppercase mb-4">
          {t.label}
        </span>
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
          {t.title}
        </h2>
        <p className="font-display text-2xl text-gold/80 mb-16">
          {t.subtitle}
        </p>

        <div className="space-y-8 text-foreground/70 font-body text-lg leading-relaxed">
          {t.paragraphs.map((paragraph, index) => (
            <p key={`about-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {["HOUT", "ACRYL", "METAAL", "GLAS", "LED", "CUSTOM"].map((material) => (
            <div key={material} className="group">
              <span className="text-xs font-body tracking-[0.3em] text-foreground/40 group-hover:text-gold transition-colors duration-300">
                {material}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PreviousWorkSection({ language }: { language: "nl" | "en" }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const nextCard = useCallback(() => {
    setCurrentCard((prev) => (prev + 1) % AWARD_CARDS.length);
    setCurrentImage(0);
  }, []);

  const prevCard = useCallback(() => {
    setCurrentCard((prev) => (prev - 1 + AWARD_CARDS.length) % AWARD_CARDS.length);
    setCurrentImage(0);
  }, []);

  const card = AWARD_CARDS[currentCard];

  return (
    <section id="eerder-werk" className="py-32 px-6 lg:px-12 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-xs font-body tracking-[0.4em] uppercase mb-4">
            PORTFOLIO
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
            {language === "nl" ? "EERDER WERK" : "PREVIOUS WORK"}
          </h2>
        </div>

        {/* Card Gallery */}
        <div className="relative flex items-center justify-center gap-8">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={prevCard}
            className="absolute left-0 md:relative z-20 w-14 h-14 flex items-center justify-center border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Card */}
          <div className="w-full max-w-2xl bg-black/50 backdrop-blur-sm border border-gold/20 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={card.images[currentImage]}
                alt={card.client}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {card.images.map((_, imgIndex) => (
                  <button
                    key={`card-${card.id}-img-${imgIndex}`}
                    type="button"
                    onClick={() => setCurrentImage(imgIndex)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      imgIndex === currentImage ? "bg-gold w-6" : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <h3 className="font-display text-2xl text-gold mb-3">{card.client.toUpperCase()}</h3>
              <p className="font-body text-foreground/70 text-sm leading-relaxed">{card.description}</p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextCard}
            className="absolute right-0 md:relative z-20 w-14 h-14 flex items-center justify-center border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Card Indicator */}
        <div className="text-center mt-8">
          <span className="font-body text-sm text-foreground/40 tracking-wider">
            {currentCard + 1} / {AWARD_CARDS.length}
          </span>
        </div>
      </div>
    </section>
  );
}

function HowWeWorkSection({ language }: { language: "nl" | "en" }) {
  const content = {
    nl: {
      label: "PROCES",
      title: "HOE WE WERKEN",
      subtitle: "VAN IDEE TOT MEESTERWERK",
      timeline: "Over het algemeen duurt het 2-3 weken om je custom awards te maken.",
      lastMinute: "Last-minute is ook mogelijk, maar dat betekent alleen een textuele debrief en daarop aangepaste tarieven.",
      pricing: "We werken niet met vaste tarieven aangezien we uitsluitend maatwerk leveren.",
      startPrice: "ONZE GOEDKOOPSTE TROFEEËN WORDEN VANAF €150 AANGEBODEN.",
      cta: "Vraag vooral een vrijblijvende offerte aan.",
    },
    en: {
      label: "PROCESS",
      title: "HOW WE WORK",
      subtitle: "FROM IDEA TO MASTERPIECE",
      timeline: "Generally, it takes 2-3 weeks to create your custom awards.",
      lastMinute: "Last-minute is also possible, but this means only a textual debrief and adjusted rates.",
      pricing: "We don't work with fixed rates since we exclusively deliver custom work.",
      startPrice: "OUR MOST AFFORDABLE TROPHIES START FROM €150.",
      cta: "Feel free to request a non-binding quote.",
    },
  };

  const t = content[language];

  return (
    <section id="werkwijze" className="py-32 px-6 lg:px-12 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-gold text-xs font-body tracking-[0.4em] uppercase mb-4">
            {t.label}
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            {t.title}
          </h2>
          <p className="font-display text-2xl text-gold/80">
            {t.subtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="group p-8 border border-gold/10 hover:border-gold/40 transition-all duration-500 bg-card/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="font-display text-5xl text-gold/20 group-hover:text-gold/40 transition-colors duration-500">
                {step.number}
              </span>
              <h3 className="font-display text-xl text-foreground mt-4 mb-3">
                {language === "nl" ? step.titleNL : step.titleEN}
              </h3>
              <p className="font-body text-sm text-foreground/60 leading-relaxed">
                {language === "nl" ? step.descriptionNL : step.descriptionEN}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="h-px w-32 bg-gold/30 mx-auto mb-12" />

          <p className="font-body text-lg text-foreground/70">{t.timeline}</p>
          <p className="font-body text-foreground/50 text-sm">{t.lastMinute}</p>
          <p className="font-body text-foreground/50 text-sm">{t.pricing}</p>
          <p className="font-display text-2xl text-gold mt-8">{t.startPrice}</p>
          <p className="font-body text-foreground/70 text-lg mt-4">{t.cta}</p>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ language }: { language: "nl" | "en" }) {
  const content = {
    nl: {
      label: "CONTACT",
      title: "NEEM CONTACT OP",
      description: "Heb je vragen of wil je een vrijblijvende offerte aanvragen? Klik op het e-mailadres hieronder om direct contact met ons op te nemen.",
      directMail: "mail rechtstreeks naar",
    },
    en: {
      label: "CONTACT",
      title: "GET IN TOUCH",
      description: "Have questions or want to request a non-binding quote? Click the email address below to get in touch with us directly.",
      directMail: "email directly to",
    },
  };

  const t = content[language];

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-card relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <span className="inline-block text-gold text-xs font-body tracking-[0.4em] uppercase mb-4">
            {t.label}
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            {t.title}
          </h2>
          <p className="font-body text-foreground/60 max-w-2xl mx-auto text-base">
            {t.description}
          </p>
        </div>

        <div className="pt-8">
          <p className="font-body text-foreground/40 text-sm mb-3 tracking-widest uppercase">{t.directMail}</p>
          <a
            href="mailto:hapcur.awards@gmail.com"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-gold hover:text-white transition-colors duration-300 tracking-wide inline-block"
          >
            hapcur.awards@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ language }: { language: "nl" | "en" }) {
  return (
    <footer className="py-12 px-6 bg-black border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl text-foreground mb-1">HAPPY CURRENTS</h3>
            <p className="font-body text-xs tracking-widest text-gold">CUSTOM AWARDS</p>
          </div>

          <div className="flex items-center space-x-8">
            <a href="mailto:hapcur.awards@gmail.com" className="font-body text-sm text-foreground/60 hover:text-gold transition-colors">
              hapcur.awards@gmail.com
            </a>
          </div>

          <p className="font-body text-xs text-foreground/30">
            © {new Date().getFullYear()} Happy Currents. {language === "nl" ? "Alle rechten voorbehouden." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  const [language, setLanguage] = useState<"nl" | "en">("nl");

  return (
    <main className="min-h-screen bg-background">
      <Navigation language={language} setLanguage={setLanguage} />
      <HeroSlideshow />
      <AboutSection language={language} />
      <PreviousWorkSection language={language} />
      <HowWeWorkSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </main>
  );
}
