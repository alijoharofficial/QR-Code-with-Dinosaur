import type { PageContent } from '../pageContent'

export const content: PageContent = {
  chrome: {
    navHome: 'Startseite',
    navQrTools: 'QR-Tools',
    navGuides: 'Anleitungen',
    navServices: 'Leistungen',
    navAbout: 'Über uns',
    toolShort: {
      dinosaur: 'QR mit Dinosaurier',
      logo: 'QR mit Logo',
      custom: 'Individueller QR',
      menu: 'QR für Speisekarte',
      wifi: 'QR für WLAN',
    },
    footerToolsHeading: 'Tools',
    footerResourcesHeading: 'Ressourcen',
    footerServicesHeading: 'Leistungen',
    footerCompanyHeading: 'Unternehmen',
    footerFaqLabel: 'FAQ',
    footerWhatWeOffer: 'Unser Angebot',
    footerContact: 'Kontakt',
    footerPrivacyPolicy: 'Datenschutzerklärung',
    footerTerms: 'Nutzungsbedingungen',
    footerBuiltBy: 'Entwickelt von',
    menuAriaLabel: 'Menü',
    switchToLightMode: 'Zum hellen Modus wechseln',
    switchToDarkMode: 'Zum dunklen Modus wechseln',
    emailUsLabel: 'Schreib uns eine E-Mail',
    getInTouchLabel: 'Kontakt aufnehmen',
    questionsFeedback: 'Fragen, Feedback oder einen Fehler gefunden?',
    lastUpdatedLabel: 'Zuletzt aktualisiert',
    faqHeadingDefault: 'Häufig gestellte Fragen',
    faqHeadingToolPage: 'Fragen zu dieser Seite',
    relatedGuidesHeading: 'Passende Anleitungen',
    backToGenerator: '← Zurück zum QR-Code-Generator',
  },
  notFound: {
    pageTitle: 'Seite nicht gefunden | QR-Code-Generator',
    eyebrow: '404',
    heading: 'Diese Seite hat sich verlaufen',
    bodyWithPathPrefix: 'Selbst der Dinosaurier hat es nicht bis zu',
    bodyWithPathSuffix: ' geschafft. Vielleicht wurde die Seite verschoben, oder der Link ist nicht mehr aktuell.',
    bodyWithoutPath:
      'Selbst der Dinosaurier hat es nicht bis zu dieser Seite geschafft. Vielleicht wurde sie verschoben, oder der Link ist nicht mehr aktuell.',
    backToGenerator: 'Zurück zum Generator',
    browseGuides: 'Anleitungen durchstöbern',
  },
  routes: {
    home: {
      title: 'QR-Code-Generator mit Dinosaurier-Logo | Individuell & kostenlos',
      description:
        'Erstelle einen kostenlosen individuellen QR-Code mit Dinosaurier-Logo, Tiersymbol oder eigenem Bild. Niedliche, scanbare QR-Codes in Sekunden, ohne Anmeldung, funktioniert offline.',
    },
    guidesIndex: {
      title: 'QR-Code-Anleitungen & Tipps | QR-Code-Generator',
      description:
        'Praktische, eigene Anleitungen rund um QR-Codes: Logo hinzufügen, statische vs. dynamische Codes, ob sie ablaufen, und QR-Codes für kleine Unternehmen. Alles kostenlos zu lesen.',
      h1: 'QR-Code-Anleitungen & Tipps',
    },
    services: {
      title: 'Leistungen | QR-Code-Generator',
      description:
        'Brauchst du mehr als einen QR-Code? Entdecke die Web-, Branding- und Marketingleistungen von TECH24, dem Team hinter diesem kostenlosen QR-Code-Generator.',
    },
    about: {
      title: 'Über uns | QR-Code-Generator',
      description:
        'Über diesen kostenlosen QR-Code-Generator: was er tut, wie er deine Daten schützt und wer ihn entwickelt und betreut.',
    },
    contact: {
      title: 'Kontakt | QR-Code-Generator',
      description: 'Kontaktiere uns rund um diesen kostenlosen QR-Code-Generator: Fragen, Feedback oder Fehlermeldungen sind willkommen.',
    },
    privacy: {
      title: 'Datenschutzerklärung | QR-Code-Generator',
      description:
        'Wie dieser QR-Code-Generator mit deinen Daten umgeht: was in deinem Browser bleibt, welche Analysetools verwendet werden und was niemals erfasst wird.',
    },
    terms: {
      title: 'Nutzungsbedingungen | QR-Code-Generator',
      description:
        'Die Nutzungsbedingungen für diesen kostenlosen QR-Code-Generator, einschließlich seiner Funktionen, seiner Grenzen und der zulässigen Nutzung.',
    },
  },
  home: {
    heroTitlePrefix: 'QR-Code-Generator mit',
    heroTitleAccent: 'Dinosaurier-Logo',
    heroSubtitle:
      'Kostenlose, individuelle QR-Codes mit Dinosaurier, Affe, Tiger oder deinem eigenen Logo: niedlich, scanbar und in Sekunden fertig.',
    introPrefix: 'Das ist ein kostenloser',
    introBold: 'individueller QR-Code-Generator',
    introSuffix:
      'zum Verwandeln jedes Links, jedes WLAN-Netzwerks oder jeder Kontaktkarte in einen scannbaren Code, gestaltet mit einem niedlichen Tiersymbol wie Dinosaurier, Affe oder Tiger, oder mit deinem eigenen Logo. Jeder QR-Code entsteht vollständig in deinem Browser, lässt sich als PNG oder SVG herunterladen und funktioniert für immer, ganz ohne Anmeldung und ohne Wasserzeichen.',
    whatIsQrHeading: 'Was ist ein QR-Code?',
    whatIsQrBody:
      'Ein QR-Code (Quick Response Code) ist ein kleines quadratisches Muster, das Daten speichert, die eine Kamera im Handumdrehen lesen kann, ganz ohne App oder Tippen. Richte die Handykamera darauf, und sie entschlüsselt sofort den Link, das WLAN-Netzwerk oder die Kontaktkarte, die darin steckt.',
    thisGeneratorSupports: 'Dieser Generator unterstützt',
    howItWorksSteps: [
      {
        title: 'Wähle, was er tun soll',
        body: 'Wähle einen Typ: einen Website-Link, ein WLAN-Netzwerk, eine Kontaktkarte, eine Speisekarte und mehr, und gib die Details ein.',
      },
      {
        title: 'Wähle ein Symbol oder Logo',
        body: 'Wähle ein integriertes Symbol, etwa einen Dinosaurier, Affen oder Tiger, oder lade dein eigenes Logo-Bild hoch.',
      },
      {
        title: 'Gestalte ihn',
        body: 'Passe Farben, Punktstil und Form an, bis es zu deiner Marke oder dem Anlass passt.',
      },
      {
        title: 'Herunterladen und scannen',
        body: 'Speichere ihn als PNG oder SVG, oder kopiere ihn direkt in die Zwischenablage. Er funktioniert sofort.',
      },
    ],
    featuresHeading: 'Funktionen',
    features: [
      {
        title: 'Kostenlose, unbegrenzte QR-Codes',
        body: 'Keine Anmeldung, kein Wasserzeichen und keine Begrenzung, wie viele du erstellen kannst.',
      },
      {
        title: 'Niedliche Tiersymbole oder dein eigenes Logo',
        body: 'Ein Dinosaurier, Affe, Tiger, oder lade ein beliebiges Logo-Bild hoch.',
      },
      {
        title: 'Vollständig anpassbar',
        body: 'Farben, Punktstil und quadratische oder runde Form: passe ihn an deine Marke an.',
      },
      {
        title: 'Für zuverlässiges Scannen gebaut',
        body: 'Hohe Fehlerkorrektur hält jeden Code lesbar, selbst mit einem Logo darauf.',
      },
      {
        title: 'Standardmäßig privat',
        body: 'Alles läuft in deinem Browser. Nichts, was du eingibst, wird an einen Server gesendet.',
      },
      {
        title: 'PNG- oder SVG-Downloads',
        body: 'Hol dir ein PNG zum schnellen Teilen oder ein SVG, das in jeder Druckgröße gestochen scharf bleibt.',
      },
    ],
    moreWaysToUseIt: 'Weitere Einsatzmöglichkeiten',
    faq: [
      {
        question: 'Ist dieser QR-Code-Generator wirklich kostenlos?',
        answer:
          'Ja. Jeder QR-Code, den du hier erstellst, ist völlig kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Begrenzung, wie viele du erstellst. Es gibt keine Premium-Stufe mit besseren Funktionen dahinter: Die Symbole für Dinosaurier, Affe und Tiger, jede Farbe und jeder Punktstil sowie beide Downloadformate sind für alle kostenlos.',
      },
      {
        question: 'Funktioniert er offline?',
        answer:
          'Sobald die Seite geladen ist, ja. Der QR-Code wird vollständig in deinem Browser mit JavaScript erstellt, daher brauchst du zum Erzeugen und Herunterladen keine Internetverbindung. Online sein musst du nur beim ersten Laden der Seite (oder wenn du eine Live-URL einfügst, die du gegenprüfen möchtest).',
      },
      {
        question: 'Kann ich ein Logo oder ein Dinosauriersymbol zu meinem QR-Code hinzufügen?',
        answer:
          'Ja, genau darum geht es. Wähle eines der integrierten Tiersymbole (einen Pixel-Art-Dinosaurier, einen Affen oder einen Tiger), ein Social- oder Aktionssymbol, oder lade dein eigenes Logo-Bild hoch. Es sitzt in einer geschützten weißen Schutzzone in der Mitte des Codes, und der QR-Code wird mit hoher Fehlerkorrektur erstellt, damit er trotzdem sauber scannt.',
      },
      {
        question: 'Sind die QR-Codes dauerhaft, oder laufen sie ab?',
        answer:
          'Die Codes sind statisch, das heißt, die Daten (ein Link, ein WLAN-Passwort, eine Kontaktkarte und so weiter) werden direkt in das Muster des QR-Codes selbst eingebettet. Es gibt keinen zwischengeschalteten Weiterleitungsdienst eines Drittanbieters, kein Abo und nichts, das später ablaufen oder abgeschaltet werden kann. Sobald du ihn heruntergeladen hast, funktioniert er, solange das QR-Code-Bild existiert.',
      },
      {
        question: 'In welchen Dateiformaten kann ich meinen QR-Code herunterladen?',
        answer:
          'Du kannst ihn als PNG herunterladen, das einfachste Format zum Teilen online oder zum Drucken in fester Größe, oder als SVG, ein Vektorformat, das in jeder Druckgröße perfekt scharf bleibt. Nützlich für Banner, Beschilderung oder Verpackungen. Du kannst das PNG auch direkt in die Zwischenablage kopieren.',
      },
      {
        question: 'Muss ich ein Konto erstellen oder eine App installieren?',
        answer:
          'Nein. Es gibt keine Anmeldung, kein Login und nichts zu installieren. Öffne die Seite, gestalte deinen QR-Code und lade ihn herunter. Das ist der gesamte Ablauf.',
      },
      {
        question: 'Werden meine Daten oder mein hochgeladenes Logo an einen Server gesendet?',
        answer:
          'Nein. Alles, das Kodieren deiner Daten, das Gestalten des QR-Codes und das Einlesen einer hochgeladenen Logodatei, geschieht lokal in deinem Browser. Nichts, was du eingibst oder hochlädst, wird übertragen oder irgendwo gespeichert.',
      },
      {
        question: 'Scannt ein QR-Code mit niedlichem Symbol oder Logo trotzdem zuverlässig?',
        answer:
          'Ja, wenn er richtig gebaut ist. Jeder Code hier verwendet die Fehlerkorrekturstufe H, die höchste Stufe, die der QR-Standard unterstützt. Das bedeutet, bis zu etwa 30% des Codes können verdeckt oder beschädigt sein, und er lässt sich trotzdem scannen. Das mittlere Symbol ist so bemessen, dass es innerhalb dieser Schutzmarge bleibt, daher beeinträchtigt ein Dinosaurier oder dein eigenes Logo die Scanbarkeit nicht.',
      },
    ],
    guidesAndTipsHeading: 'Anleitungen & Tipps',
    viewAllGuides: 'Alle Anleitungen ansehen →',
  },
  toolPages: {
    dinosaur: {
      title: 'QR-Code mit Dinosaurier-Logo: Kostenloser Generator',
      description:
        'Erstelle einen kostenlosen QR-Code mit einem Dinosaurier-Logo in der Mitte. Wähle Farben und Punktstil, lade ihn dann als PNG oder SVG herunter. Ohne Anmeldung, funktioniert offline.',
      h1: 'QR-Code mit Dinosaurier-Logo',
      subtitle:
        'Ein verspielter, sofort wiedererkennbarer QR-Code mit einem Pixel-Art-Dinosaurier in der Mitte, kostenlos und in Sekunden fertig.',
      body: [
        'Ein Dinosauriersymbol macht aus einem gewöhnlichen QR-Code etwas, bei dem Leute tatsächlich stehen bleiben und hinschauen, und das ist wichtig, wenn du einen Code willst, der gescannt statt ignoriert wird, auf einem Poster, einem Sticker, einer Partyeinladung oder überall, wo du ein bisschen Persönlichkeit zeigen willst.',
        'Diese Seite öffnet den Generator mit dem Pixel-Art-Dinosauriersymbol bereits ausgewählt, im charakteristischen grünen Design der Seite. Alles andere funktioniert genau wie im vollständigen Tool: Ändere den QR-Typ, tausche das Symbol gegen einen Affen oder Tiger, lade stattdessen dein eigenes Logo hoch, oder passe Farben, Punktstil und Form an.',
      ],
      faq: [
        {
          question: 'Beeinträchtigt das Dinosaurier-Logo, wie gut der Code scannt?',
          answer:
            'Nein. Jeder Code hier wird mit der höchsten Fehlerkorrekturstufe erstellt, die der QR-Standard unterstützt, und das Symbol sitzt in einer geschützten Schutzzone, die die drei Eckquadrate, auf die sich Scanner verlassen, niemals berührt.',
        },
        {
          question: 'Kann ich zu einem anderen Tier oder meinem eigenen Logo wechseln?',
          answer:
            'Ja, die Symbolauswahl enthält auch einen Affen und einen Tiger, oder du kannst jederzeit dein eigenes Logo-Bild hochladen. Der Dinosaurier ist auf dieser Seite nur die Standardeinstellung.',
        },
      ],
    },
    logo: {
      title: 'QR-Code mit Logo: Eigenes Bild hinzufügen, kostenlos',
      description:
        'Lade dein eigenes Logo hoch und erstelle einen QR-Code, der trotzdem zuverlässig scannt. Kostenlose QR-Codes mit hoher Fehlerkorrektur und deinem Logo in der Mitte.',
      h1: 'QR-Code mit Logo',
      subtitle: 'Lade dein eigenes Logo hoch, behalte die Scanbarkeit und lade einen QR-Code herunter, der wirklich aussieht, als würde er zu dir gehören.',
      body: [
        'Ein Logo in der Mitte eines QR-Codes ist der schnellste Weg, ihn erkennbar zu deinem eigenen zu machen, auf einer Visitenkarte, einem Produktetikett, einer Rechnung oder einem Schaufenster-Sticker. Der Trick besteht darin, das zu tun, ohne die Scanbarkeit zu beeinträchtigen, und genau dafür ist diese Seite gemacht.',
        'Die Symbolauswahl öffnet sich direkt im Upload-Tab. Lade deine Logodatei hoch, und der Generator erledigt den Rest: Er passt die Bildgröße an eine geschützte Schutzzone an und kodiert den Code mit der höchsten Fehlerkorrekturstufe, sodass dein Logo, auch wenn es einen Teil des Musters bedeckt, das Scannen nicht verhindert.',
      ],
      faq: [
        {
          question: 'Welche Bildformate kann ich als Logo hochladen?',
          answer:
            'Jedes gängige Bildformat (PNG, JPG, SVG und ähnliche) bis zu 5 MB. Es bleibt vollständig in deinem Browser; nichts wird an einen Server hochgeladen.',
        },
        {
          question: 'Macht mein Logo den Code schwerer scanbar?',
          answer:
            'Nicht, solange es innerhalb der Schutzzone bleibt, die der Generator ihm gibt, was standardmäßig der Fall ist. Hohe Fehlerkorrektur (Stufe H) wird automatisch verwendet, sodass etwa 30% des Codes verdeckt sein können und er trotzdem korrekt gelesen wird.',
        },
      ],
    },
    custom: {
      title: 'Individueller QR-Code-Generator: Farben, Form & Stil',
      description:
        'Gestalte einen vollständig individuellen QR-Code: wähle Farben, Punktstil und Form, füge ein Symbol oder Logo hinzu und lade ihn kostenlos als PNG oder SVG herunter. Keine Anmeldung erforderlich.',
      h1: 'Individueller QR-Code-Generator',
      subtitle: 'Farben, Punktstil, Eckenform und Symbol: passe jeden Teil deines QR-Codes an und behalte die volle Scanbarkeit.',
      body: [
        'Ein individueller QR-Code-Generator sollte dir erlauben, mehr zu ändern als nur den Inhalt, den er kodiert. Hier kannst du den Punktstil (eckig, abgerundet oder ein weicherer Look) anpassen, zwischen quadratischem oder rundem Außenrahmen wechseln, aus mehreren Farbthemen wählen und ein Symbol oder dein eigenes Logo hinzufügen, ganz ohne die Zuverlässigkeit des Codes zu beeinträchtigen.',
        'Jede Kombination wird mit derselben hohen Fehlerkorrekturstufe erstellt, sodass ein abgerundeter, bunter, mit Logo versehener Code genauso zuverlässig scannt wie ein einfacher schwarz-weißer.',
      ],
      faq: [
        {
          question: 'Kann ich die Farbe eines QR-Codes ändern, ohne ihn zu beschädigen?',
          answer:
            'Ja, solange genug Kontrast zwischen der Punktfarbe und dem Hintergrund besteht. Zwei ähnlich helle Farben sind der Hauptgrund, warum eine Farbänderung die Scanbarkeit beeinträchtigt.',
        },
        {
          question: 'Was kann ich außer der Farbe noch anpassen?',
          answer:
            'Den Punktstil, die Eckenform (eckig oder rund) und das mittlere Symbol oder Logo, sowie natürlich, was der Code tatsächlich kodiert: einen Link, ein WLAN-Netzwerk, eine Kontaktkarte und mehr.',
        },
      ],
    },
    menu: {
      title: 'QR-Code für die Speisekarte: Kostenloser Generator',
      description:
        'Erstelle in Sekunden einen QR-Code für die Speisekarte deines Restaurants oder Cafés. Verlinke deine Online-Speisekarte, füge dein Logo hinzu und lade ihn kostenlos als PNG oder SVG herunter.',
      h1: 'QR-Code für eine Restaurant-Speisekarte',
      subtitle: 'Verlinke deine Speisekarte, wähle ein passendes Symbol für dein Restaurant und lade einen Code herunter, der bereit für Tischaufsteller oder Poster ist.',
      body: [
        'Ein QR-Code für die Speisekarte braucht nur einen Link zu deiner gehosteten Speisekarte: eine Seite auf deiner Website, ein PDF oder ein einfacher Baukasten funktionieren alle. Diese Seite startet den Generator mit dem Typ "Website" und einem bereits ausgewählten Speisekarten-Symbol, bereit für diesen Link.',
        'Da es sich um statische Codes handelt, muss sich der QR-Code selbst nie ändern, selbst wenn sich deine Speisekarte ändert. Aktualisiere die Seite hinter dem Link, und jeder bereits gedruckte Tischaufsteller oder Sticker zeigt automatisch auf die neue Version. Bemesse ihn passend zum Leseabstand und halte den Hintergrund dahinter sauber, damit er auch bei schwachem Licht schnell scannt.',
      ],
      faq: [
        {
          question: 'Muss ich den Code neu drucken, wenn ich die Speisekarte aktualisiere?',
          answer:
            'Nein, solange die Speisekarte unter demselben Link bleibt, erfordert eine Aktualisierung der Inhalte dieser Seite (Preise, Aktionen, Gerichte) keinen neuen QR-Code. Einen neuen Code brauchst du nur, wenn sich der Link selbst ändert.',
        },
        {
          question: 'In welcher Größe sollte ich den Code drucken?',
          answer:
            'Als grobe Richtlinie: Drucke den Code mit mindestens etwa 2 cm pro Meter erwarteter Scan-Distanz. Ein Tischaufsteller, der aus Armlänge gelesen wird, kann kleiner sein als ein Poster, das quer durch einen Raum gescannt werden soll.',
        },
      ],
    },
    wifi: {
      title: 'QR-Code für WLAN: Kostenloser Generator zum Netzwerk teilen',
      description:
        'Erstelle einen kostenlosen WLAN-QR-Code, damit Gäste sich per Scan verbinden können, statt ein Passwort einzutippen. Ohne Anmeldung, läuft vollständig in deinem Browser.',
      h1: 'QR-Code für WLAN',
      subtitle: 'Kodiere Netzwerkname und Passwort deines WLANs in einen Code: Gäste scannen ihn und verbinden sich, ganz ohne Tippen.',
      body: [
        'Ein WLAN-QR-Code kodiert Netzwerkname und Passwort gemeinsam, sodass eine Handykamera sie liest und direkt eine Verbindung anbietet, ohne ein langes Passwort von einem Klebezettel abzutippen. Diese Seite öffnet den Generator mit bereits ausgewähltem WLAN-Typ.',
        'Das ist besonders nützlich für Cafés, Wartezimmer, Kurzzeitvermietungen und Büros mit Besuchern. Die Netzwerkdetails bleiben im gedruckten oder angezeigten Code selbst kodiert; beim Erstellen wird nichts irgendwohin gesendet.',
      ],
      faq: [
        {
          question: 'Ist es sicher, mein WLAN-Passwort in einen QR-Code zu packen?',
          answer:
            'Das Passwort wird direkt in den Code kodiert und nur lokal von der Person entschlüsselt, die ihn scannt, dieselbe Information, die jeder von einem Klebezettel oder Router-Etikett ablesen könnte. Behandle den gedruckten Code genauso, wie du es tun würdest, wenn du das Passwort sichtbar irgendwo hinschreibst.',
        },
        {
          question: 'Funktioniert das auch für versteckte Netzwerke?',
          answer:
            'Ja, der WLAN-Typ enthält eine Option, das Netzwerk als versteckt zu markieren, damit scannende Geräte wissen, dass sie sich per Name statt per Broadcast verbinden müssen.',
        },
      ],
    },
  },
  guidesIndex: {
    intro:
      'Praktische, eigene Anleitungen, um das Beste aus QR-Codes herauszuholen, vom Hinzufügen eines Logos ohne Einbußen bei der Scanbarkeit bis zur Wahl der richtigen Codeart für deinen Anwendungsfall.',
    lookingForTool: 'Suchst du das Tool selbst?',
    goToGenerator: 'Zum QR-Code-Generator',
  },
  services: {
    introPrefix: 'Dieser QR-Code-Generator ist kostenlos und wird es immer bleiben. Entwickelt und betreut wird er von',
    introSuffix:
      ', einem kleinen KI-gestützten Marketing- und Webteam. Falls du ein kleines Unternehmen hast und irgendwann mehr als nur einen QR-Code brauchst, hier ein unkomplizierter Überblick über das, womit sie sich beschäftigen.',
    categories: [
      {
        title: 'Websites',
        body: 'Design und Entwicklung für Websites von kleinen Unternehmen und für Marketing, dasselbe Denken, das auch in dieses schnelle und einfach zu bedienende Tool eingeflossen ist.',
      },
      {
        title: 'Branding',
        body: 'Logos, Farbsysteme und visuelle Identität für Unternehmen, die genauso durchdacht wirken wollen, wie sie sind.',
      },
      {
        title: 'Marketing',
        body: 'Laufende Marketingunterstützung, aufgebaut auf demselben KI-gestützten Workflow, mit dem dieses kostenlose Tool betrieben wird.',
      },
      {
        title: 'E-Commerce',
        body: 'Online-Shops, die schnell zu durchstöbern und auf jedem Gerät einfach zur Kasse zu bringen sind.',
      },
      {
        title: 'SEO',
        body: 'Derselbe technische und inhaltliche Ansatz, mit dem dieses kostenlose Tool in der Suche gefunden wird, angewendet auf deine Website.',
      },
      {
        title: 'Laufender Support',
        body: 'Ein Team, das die Dinge auch nach dem Launch am Laufen hält, nicht nur bis zur Übergabe.',
      },
    ],
    process: [
      { title: 'Durchsprechen', body: 'Ein kurzes, unkompliziertes Gespräch darüber, was du wirklich brauchst.' },
      { title: 'Einen Plan sehen', body: 'Ein klarer Umfang und Preis, bevor irgendetwas beginnt, keine Überraschungen später.' },
      {
        title: 'Umsetzen und begleiten',
        body: 'Launch, dann laufende Unterstützung, dieselbe Zuverlässigkeit, die auch dieses kostenlose Tool anstrebt.',
      },
    ],
    closingPrefix: 'Alle Details, einschließlich aktueller Pakete, findest du auf',
  },
  about: {
    h1: 'Über diesen QR-Code-Generator',
    subtitle:
      'Ein kostenloses Tool zum Erstellen individueller QR-Codes mit Dinosaurier-, Affen- oder Tigersymbol, oder deinem eigenen Logo, vollständig in deinem Browser.',
    highlights: [
      {
        title: 'Keine Anmeldung, nie',
        body: 'Öffne die Seite, erstelle einen Code, lade ihn herunter. Kein Konto, keine E-Mail, kein Passwort.',
      },
      {
        title: 'Unbegrenzt, ohne Wasserzeichen',
        body: 'Erstelle so viele QR-Codes, wie du willst. Jeder wird sauber heruntergeladen.',
      },
      {
        title: 'Statisch und dauerhaft',
        body: 'Deine Daten sind direkt in den Code eingebacken, sodass er funktioniert, solange das Bild existiert.',
      },
    ],
    privacyHeading: 'Alles bleibt auf deinem Gerät',
    privacyPoints: [
      'Das Kodieren deiner Daten geschieht in deinem Browser',
      'Das Gestalten des Codes geschieht in deinem Browser',
      'Das Einlesen eines hochgeladenen Logos geschieht in deinem Browser',
      'Nichts, was du eingibst oder hochlädst, wird jemals an einen Server gesendet',
    ],
    privacyClosingPrefix: 'Unsere',
    privacyClosingSuffix: 'verrät die vollständigen Details dazu, einschließlich der Analysetools, mit denen wir nachvollziehen, wie die Seite genutzt wird.',
    tech24Prefix: 'Dieses kostenlose Tool wurde entwickelt und wird betreut von',
    tech24Mid:
      ', einem kleinen KI-gestützten Marketing- und Webteam. Falls du jemals mehr als nur einen QR-Code brauchst, eine Website, Branding oder Marketing, findest du hier',
    tech24OfferLabel: 'was sie anbieten',
  },
  contact: {
    h1: 'Kontakt',
    intro:
      'Fragen dazu, wie der Generator funktioniert, Feedback, oder etwas gefunden, das nicht richtig scannt? Schick uns eine E-Mail, wir melden uns bei dir.',
  },
  privacy: {
    h1: 'Datenschutzerklärung',
    sections: [
      {
        heading: 'Was dieses Tool mit deinen Daten macht',
        body: 'Das Erstellen eines QR-Codes, einschließlich jedes Links, WLAN-Passworts, jeder Kontaktdaten oder anderer Inhalte, die du eingibst, sowie jedes Logo-Bildes, das du hochlädst, geschieht vollständig in deinem Browser. Nichts davon wird an einen Server gesendet oder dort gespeichert. Schließen oder Neuladen der Seite löscht alles.',
      },
      {
        heading: 'Was wir lokal speichern',
        body: 'Dein Theme (hell oder dunkel) und deine Spracheinstellung werden im lokalen Speicher deines Browsers gespeichert, damit sie zwischen Besuchen erhalten bleiben. Das bleibt auf deinem Gerät und wird niemals irgendwohin übertragen.',
      },
      {
        heading: 'Analysetools',
        body: 'Diese Seite verwendet Google Tag Manager und Microsoft Clarity, um in aggregierter Form nachzuvollziehen, wie die Seite genutzt wird, zum Beispiel welche Seiten besucht werden und ungefähr, wie Menschen damit interagieren. Diese Tools können Cookies setzen und übliche technische Informationen erfassen (etwa Browsertyp und ungefährer, aus der IP-Adresse abgeleiteter Standort). Sie erhalten nichts von dem, was du in den QR-Code-Generator selbst eingibst.',
      },
      {
        heading: 'Schriftarten',
        body: 'Diese Seite lädt die Schriftart Inter von Google Fonts, was beim Laden der Seite eine Anfrage an die Server von Google auslöst.',
      },
      {
        heading: 'Keine Konten, kein Verkauf von Daten',
        body: 'Es gibt kein Anmelde- oder Kontosystem, also gibt es auch keine Kontodaten zu schützen oder zu verlieren. Wir verkaufen keine Daten an Dritte.',
      },
      {
        heading: 'Fragen',
        bodyPrefix: 'Bei Fragen zum Datenschutz besuche unsere Seite',
        bodySuffixOr: 'oder schreib uns eine E-Mail an',
      },
    ],
  },
  terms: {
    h1: 'Nutzungsbedingungen',
    sections: [
      {
        heading: 'Das Tool',
        body: 'Diese Seite bietet einen kostenlosen QR-Code-Generator, der vollständig in deinem Browser läuft. Du kannst ihn nutzen, um für private oder geschäftliche Zwecke unbegrenzt viele QR-Codes zu erstellen, kostenlos.',
      },
      {
        heading: 'Deine Verantwortung',
        body: 'Du bist verantwortlich für die Inhalte, die du in einen QR-Code kodierst, und dafür, zu testen, dass ein erstellter Code korrekt scannt, bevor du dich darauf verlässt, zum Beispiel bevor du ihn in großer Auflage drucken lässt. Wir empfehlen, einen Code mit mehr als einem Gerät zu scannen, bevor du ihn breit verteilst.',
      },
      {
        heading: 'Keine Gewährleistung',
        body: 'Dieses Tool wird "wie besehen" bereitgestellt, ohne jegliche Gewährleistung. Wir tun unser Bestes, es genau und zuverlässig zu halten, garantieren aber weder ununterbrochene Verfügbarkeit noch, dass jeder erstellte Code unter allen Bedingungen scannt (zum Beispiel bei beschädigtem, schlecht gedrucktem oder extrem kontrastarmem Ausdruck).',
      },
      {
        heading: 'Zulässige Nutzung',
        body: 'Nutze dieses Tool nicht, um QR-Codes für illegale Inhalte, die Verbreitung von Schadsoftware, Phishing oder irgendetwas zu erstellen, das Menschen, die den entstandenen Code scannen, täuschen oder schaden soll.',
      },
      {
        heading: 'Änderungen',
        body: 'Diese Bedingungen können von Zeit zu Zeit aktualisiert werden; es gilt immer die aktuelle Fassung.',
      },
      {
        heading: 'Fragen',
        bodyPrefix: 'Sieh dir die Seite',
        bodySuffixOr: 'oder schreib uns eine E-Mail an',
      },
    ],
  },
  guides: {
    logo: {
      title: 'Wie man einen QR-Code mit Logo erstellt (kostenlose Anleitung)',
      description:
        'Erfahre Schritt für Schritt, wie du einen QR-Code mit Logo in der Mitte erstellst, der trotzdem zuverlässig scannt, inklusive Tipps zu Fehlerkorrektur, Größe und Kontrast.',
      h1: 'Wie man einen QR-Code mit Logo erstellt',
      excerpt: 'Ein Logo in der Mitte macht einen QR-Code sofort als deinen erkennbar. So fügst du eines hinzu, ohne die Scanbarkeit zu beeinträchtigen.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Ein einfacher schwarz-weißer QR-Code funktioniert, sieht aber nicht so aus, als würde er zu jemandem gehören. Platziere dein Logo, oder ein lustiges Symbol wie einen kleinen Dinosaurier, in der Mitte, und derselbe Code wirkt sofort wie ein Teil deiner Marke oder deiner Veranstaltung. Die gute Nachricht: Ein ',
            },
            { t: 'b', v: 'QR-Code mit Logo' },
            {
              t: 'text',
              v: ' ist nicht schwerer zu erstellen als ein einfacher, solange du die eine Regel verstehst, die wirklich zählt: Fehlerkorrektur.',
            },
          ],
        },
        { type: 'h2', text: 'Warum du einen Teil eines QR-Codes verdecken kannst und er trotzdem funktioniert' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'QR-Codes verfügen über eine Fehlerkorrekturebene, die direkt im Standard eingebaut ist. Je nach der beim Erstellen gewählten Stufe kann ein QR-Code etwa 7% bis etwa 30% seines Musters verlieren (verdeckt durch ein Logo, verschmiert oder auf eine zerknitterte Oberfläche gedruckt), und ein Scanner kann die ursprünglichen Daten trotzdem rekonstruieren. Die höchste Stufe, Stufe H genannt, verträgt rund 30% Beschädigung oder Verdeckung. Genau diese 30%-Marge macht es sicher, ein Logo in die Mitte eines QR-Codes zu setzen, vorausgesetzt, der verwendete Generator setzt diese Stufe auch tatsächlich. Dieses Tool kodiert aus genau diesem Grund immer mit Stufe H.',
            },
          ],
        },
        { type: 'h2', text: 'Schritt für Schritt: ein Logo zu deinem QR-Code hinzufügen' },
        {
          type: 'ol',
          items: [
            [
              { t: 'b', v: 'Wähle, was der QR-Code tun soll.' },
              { t: 'text', v: ' Öffne den ' },
              { t: 'link', v: 'Logo-QR-Code-Generator', to: '/qr-code-with-logo' },
              { t: 'text', v: ', wähle einen Typ (einen Website-Link, ein WLAN-Netzwerk, eine Kontaktkarte und so weiter) und gib die Details ein.' },
            ],
            [
              { t: 'b', v: 'Öffne die Symbolauswahl.' },
              {
                t: 'text',
                v: ' Wähle "Logo hochladen" und wähle deine eigene Bilddatei aus, oder wähle eines der integrierten Symbole, falls du gerade keine Logodatei zur Hand hast.',
              },
            ],
            [
              { t: 'b', v: 'Prüfe die Vorschau.' },
              {
                t: 'text',
                v: ' Das Logo sitzt automatisch in einem geschützten weißen Kreis in der Mitte des Codes, sodass es niemals die Finder-Quadrate berührt (die drei großen Eckquadrate, an denen sich ein Scanner orientiert); das ist der eine Teil eines QR-Codes, der niemals verdeckt werden sollte.',
              },
            ],
            [
              { t: 'b', v: 'Wähle Farben und lade herunter.' },
              {
                t: 'text',
                v: ' Passe bei Bedarf Punktstil und Farbthema an, und lade dann als PNG zum schnellen Teilen oder als SVG herunter, wenn du planst, ihn groß zu drucken.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'Tipps für ein Logo, das jedes Mal zuverlässig scannt' },
        {
          type: 'ul',
          items: [
            [
              { t: 'b', v: 'Halte den Kontrast hoch.' },
              {
                t: 'text',
                v: ' Ein dunkles Logo auf dem hellen Hintergrund des QR-Codes (oder umgekehrt) scannt deutlich zuverlässiger als eines mit niedrigem Kontrast.',
              },
            ],
            [
              { t: 'b', v: 'Zieh das Logo nicht zu groß.' },
              {
                t: 'text',
                v: ' Ein guter Generator begrenzt, wie viel vom Code dein Logo abdecken darf, aber wenn du deinen eigenen baust, ist es ein sicherer Richtwert, unter etwa 20-25% der Gesamtfläche zu bleiben.',
              },
            ],
            [
              { t: 'b', v: 'Teste, bevor du in großer Menge druckst.' },
              {
                t: 'text',
                v: ' Scanne den heruntergeladenen QR-Code mit zwei oder drei verschiedenen Handys, bevor du Beschilderung, Tischaufsteller oder Verpackungen bestellst. Das dauert zehn Sekunden und erspart einen Nachdruck.',
              },
            ],
            [
              { t: 'b', v: 'Lass die Ruhezone in Ruhe.' },
              {
                t: 'text',
                v: ' Der leere Rand rund um einen QR-Code ist kein verschwendeter Platz; Scanner nutzen ihn, um Anfang und Ende des Codes zu erkennen. Schneide ihn beim Platzieren des Codes in einem Design nicht zu knapp zu.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'Häufige Fehler' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Der häufigste Fehlschlag ist nicht das Logo selbst. Es ist die Verwendung eines QR-Generators, der die Fehlerkorrekturstufe nicht erhöht, wenn ein Logo hinzugefügt wird. Wenn du schon mal einen Logo-QR-Code gescannt hast, der sich einfach nicht lesen ließ, liegt genau das fast immer dahinter. Der zweithäufigste Fehler ist die Wahl fast identischer Farben für Punkte und Hintergrund (etwa hellgraue Punkte auf Weiß), was die Scanbarkeit auch ganz ohne Logo beeinträchtigt.',
            },
          ],
        },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Sind diese beiden Dinge geklärt, ist ein QR-Code mit Logo genauso zuverlässig wie ein einfacher, und deutlich einprägsamer. Probiere es in unserem ' },
            { t: 'link', v: 'Logo-QR-Generator →', to: '/qr-code-with-logo' },
          ],
        },
      ],
    },
    staticVsDynamic: {
      title: "Statische vs. dynamische QR-Codes: Was ist der Unterschied?",
      description:
        'Statische QR-Codes kodieren Daten direkt und laufen nie ab. Dynamische Codes leiten über einen Dienst weiter und lassen sich bearbeiten oder tracken, gegen Bezahlung. Hier der Kompromiss.',
      h1: "Statische vs. dynamische QR-Codes: Was ist der Unterschied",
      excerpt: 'Eine Art ist kostenlos und dauerhaft. Die andere lässt sich nach dem Druck noch bearbeiten, gegen Abo. So triffst du die Wahl.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: '"Statische" und "dynamische" QR-Codes sehen auf den ersten Blick identisch aus (dasselbe schwarz-weiße oder bunte, mit Logo versehene Quadrat), funktionieren darunter aber grundlegend unterschiedlich. Den Unterschied zu verstehen ist wichtig, bevor du ein paar Hundert davon druckst.',
            },
          ],
        },
        { type: 'h2', text: 'Statische QR-Codes' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Ein statischer QR-Code hat deine tatsächlichen Daten (eine URL, ein WLAN-Passwort, eine Kontaktkarte, einfachen Text, was auch immer du gewählt hast) direkt in das Muster aus schwarzen und weißen Modulen kodiert. Scannt ein Handy ihn, liest es diese Daten direkt aus dem Code selbst aus. Es gibt keinen Server dazwischen, kein Konto dahinter und nichts, das später offline gehen oder abgeschaltet werden kann. Er funktioniert am Tag des Drucks genauso wie zehn Jahre später. Das ist die Art von QR-Code, die dieser Generator erstellt: Erstelle ihn einmal, und er gehört dir, kostenlos, für immer. Sieh dir ',
            },
            { t: 'link', v: 'Laufen QR-Codes ab?', to: '/guides/do-qr-codes-expire' },
            { t: 'text', v: ' an, um genauer zu erfahren, was das in der Praxis bedeutet.' },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Der Kompromiss ist, dass ein statischer Code fest ist. Hast du einen Link kodiert und der Code soll später woanders hinzeigen, musst du einen neuen Code erstellen und neu drucken; du kannst nicht ändern, was bereits im Muster eingebacken ist.',
            },
          ],
        },
        { type: 'h2', text: 'Dynamische QR-Codes' },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Ein dynamischer QR-Code kodiert stattdessen einen kurzen Weiterleitungslink, der zu einem Drittanbieterdienst gehört (zum Beispiel etwas wie ' },
            { t: 'code', v: 'qr.example.com/abc123' },
            {
              t: 'text',
              v: '). Wird er gescannt, leitet dieser kurze Link zu der Zielseite weiter, die du dafür festgelegt hast, und weil das Weiterleitungsziel auf dem Server des Dienstes liegt statt im Code selbst, kannst du das Ziel jederzeit ändern, ohne irgendetwas neu zu drucken. Die meisten Dienste, die das anbieten, liefern außerdem Scan-Statistiken (wie viele Scans, ungefähr wann und wo).',
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Diese Flexibilität ist real, kommt aber mit Bedingungen: Dynamische Codes erfordern in der Regel ein Konto beim Dienst, der die Weiterleitung hostet, und viele Anbieter setzen in ihrer kostenlosen Stufe ein Scan- oder Zeitlimit, nach dem der Code entweder aufhört zu funktionieren oder ein kostenpflichtiges Abo braucht, um weiter weiterzuleiten. Stellt dieser Dienst irgendwann den Betrieb ein, oder zahlst du nicht mehr, bricht jeder bereits gedruckte dynamische Code lautlos zusammen, obwohl das gedruckte Quadrat unverändert aussieht.',
            },
          ],
        },
        { type: 'h2', text: 'Welchen solltest du verwenden?' },
        {
          type: 'table',
          headers: ['Situation', 'Bessere Wahl'],
          rows: [
            ['Ein Link, ein WLAN-Netzwerk oder eine Kontaktkarte, die sich nicht ändert', 'Statisch: kostenlos, dauerhaft, kein Konto nötig'],
            ['Einmal gedruckt für eine einmalige Veranstaltung oder eine einzelne Speisekartenauflage', 'Statisch: danach nichts zu pflegen'],
            ['Du brauchst Scan-Statistiken (wie viele, wann)', 'Dynamisch: erfordert einen kostenpflichtigen oder kontobasierten Dienst'],
            ['Der Ziellink könnte sich ändern, nachdem Tausende Kopien gedruckt wurden', 'Dynamisch: kann sich in diesem Umfang lohnen'],
          ],
        },
        { type: 'h2', text: 'Der praktische Mittelweg' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Für die meisten Privatpersonen und kleinen Unternehmen (Speisekarten, WLAN-Zugang, Veranstaltungseinladungen, Visitenkarten, Produktverpackungen, Social-Links) bringt dir ein statischer Code, der auf einen Link zeigt, den du selbst kontrollierst (deine eigene Website, eine Seite, die du jederzeit bearbeiten kannst), die meisten Vorteile eines dynamischen Codes, ohne Abo. Du kannst das Ziel des QR-Codes nicht ändern, ohne neu zu drucken, aber du ',
            },
            { t: 'i', v: 'kannst' },
            {
              t: 'text',
              v: ' jederzeit ändern, was an diesem Ziel veröffentlicht ist, da der Code nur auf einen Link zeigt, nicht auf feste Inhalte.',
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Dieses Tool erstellt statische QR-Codes mit individuellem Symbol oder Logo, in deiner Wahl von Farben und Form, herunterladbar als PNG oder SVG. Probiere es in unserem ',
            },
            { t: 'link', v: 'individuellen QR-Code-Generator →', to: '/custom-qr-code' },
          ],
        },
      ],
    },
    doQrCodesExpire: {
      title: 'Laufen QR-Codes ab? Die ehrliche Antwort',
      description:
        'Ein mit einem kostenlosen Generator wie diesem erstellter QR-Code läuft nicht von selbst ab. Hier erfährst du, was einen tatsächlich kaputt machen kann und wie du dafür sorgst, dass deiner weiter funktioniert.',
      h1: 'Laufen QR-Codes ab?',
      excerpt: 'Der Code selbst läuft nie ab, aber ein paar Dinge können ihn trotzdem stoppen. Hier erfährst du, was wirklich passiert.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Kurze Antwort: Nein, ein QR-Code selbst läuft nicht ab. Das Muster aus schwarzen und weißen Quadraten ist einfach eine Art, Daten zu kodieren. Es hat keine Uhr, keine Serververbindung und kein Abo daran hängen. Ist er einmal erstellt, ist er ein statisches Bild, und statische Bilder verderben nicht. Aber das ist nicht die ganze Geschichte, und die Ausnahmen sind es wert, sie zu verstehen, bevor du einen irgendwo dauerhaft aufhängst.',
            },
          ],
        },
        { type: 'h2', text: 'Warum ein statischer QR-Code nicht abläuft' },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Ein mit einem kostenlosen Tool wie diesem erstellter QR-Code ist ein ' },
            { t: 'b', v: 'statischer' },
            {
              t: 'text',
              v: ' Code: Was auch immer du eingegeben hast (ein Link, ein WLAN-Passwort, eine Kontaktkarte), ist direkt in das Muster des Codes kodiert. Beim Lesen ist kein Server eines Drittanbieters beteiligt. Ein Scanner liest das Muster und rekonstruiert die ursprünglichen Daten direkt vor Ort, genauso, wie er es am ersten Tag getan hätte. Sieh dir ',
            },
            { t: 'link', v: 'statische vs. dynamische QR-Codes', to: '/guides/static-vs-dynamic-qr-codes' },
            {
              t: 'text',
              v: ' an für die vollständige Aufschlüsselung, wie sich das von den "dynamischen" Codes unterscheidet, die manche kostenpflichtigen Dienste verkaufen und die über einen Weiterleitungslink laufen, der sich ',
            },
            { t: 'i', v: 'abschalten' },
            { t: 'text', v: ' lässt.' },
          ],
        },
        { type: 'h2', text: 'Was einen QR-Code tatsächlich am Funktionieren hindern kann' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Wenn ein QR-Code, den du vor Monaten oder Jahren erstellt hast, plötzlich "nicht mehr funktioniert", hat sich der Code selbst fast nie geändert. Stattdessen war es eines der folgenden:',
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              { t: 'b', v: 'Das Ziel ist verschwunden.' },
              {
                t: 'text',
                v: ' Wenn der Code einen Link kodiert, funktioniert das Scannen weiterhin einwandfrei, aber das Handy landet einfach auf einer defekten Seite, wenn diese Website, dieser Produkteintrag oder Speisekartenlink entfernt oder verschoben wurde. Das ist mit Abstand die häufigste Ursache, und eigentlich "läuft" dabei nicht der QR-Code "ab"; die dahinterliegende Seite verschwindet.',
              },
            ],
            [
              { t: 'b', v: 'Eine Domain ist abgelaufen.' },
              {
                t: 'text',
                v: ' Zeigt der Link auf eine Domain, die nicht verlängert wurde, geht die gesamte dahinterliegende Website offline, und jeder QR-Code, der darauf zeigt, fällt mit ihr aus.',
              },
            ],
            [
              { t: 'b', v: 'Es war ein dynamischer Code bei einem Dienst, der eingestellt wurde oder nicht mehr bezahlt wird.' },
              {
                t: 'text',
                v: ' Wie in der Anleitung zu statisch vs. dynamisch beschrieben, ist das der eine echte Fall, in dem ein QR-Code funktionierend zu defekt werden kann, während das gedruckte Bild unverändert bleibt.',
              },
            ],
            [
              { t: 'b', v: 'Die physische Kopie ist beschädigt.' },
              {
                t: 'text',
                v: ' Ein verblasster, eingerissener oder stark zerkratzter Ausdruck kann unscannbar werden. Auch das ist kein "Ablaufen" des Codes, sondern einfach normaler Verschleiß am Material, auf das er gedruckt ist.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'Wie du einen QR-Code erstellst, der weiter funktioniert' },
        {
          type: 'ol',
          items: [
            [
              { t: 'b', v: 'Zeig damit auf einen Link, den du kontrollierst.' },
              { t: 'text', v: ' Deine eigene Website oder eine Seite, die du selbst am Laufen halten kannst, schlägt einen Drittanbieter-Eintrag, den du nicht kontrollierst.' },
            ],
            [
              { t: 'b', v: 'Halte deine Domain verlängert' },
              { t: 'text', v: ', wenn der Code auf deine eigene Website zeigt. Stelle sie auf automatische Verlängerung, falls dein Registrar das unterstützt.' },
            ],
            [
              { t: 'b', v: 'Bevorzuge statisch gegenüber dynamisch' },
              {
                t: 'text',
                v: ' für alles, das unbegrenzt lange ohne laufende Zahlung halten soll, außer du brauchst konkret Scan-Statistiken oder die Möglichkeit, den Code später woanders hinzuleiten.',
              },
            ],
            [
              { t: 'b', v: 'Drucke in angemessener Größe und schütze ihn.' },
              { t: 'text', v: ' Laminiere oder versiegle Codes, die häufig angefasst oder Witterung ausgesetzt werden.' },
            ],
            [
              { t: 'b', v: 'Nutze hohe Fehlerkorrektur,' },
              {
                t: 'text',
                v: ' damit leichter Verschleiß, Verschmieren oder ein Logo in der Mitte das Scannen nicht verhindern. Jeder Code aus diesem Tool nutzt genau aus diesem Grund die höchste Fehlerkorrekturstufe.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'Die Kurzfassung' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Ein hier erstellter QR-Code hat kein Ablaufdatum, kein Abo und keinen Drittanbieterdienst, der ihn leise abschalten kann. Was einen QR-Code in der Praxis kaputt macht, ist so gut wie immer das Ziel dahinter, nicht der Code. Halte den Link am Leben, und der Code bleibt unbegrenzt scanbar. Erstelle einen in unserem ',
            },
            { t: 'link', v: 'individuellen QR-Code-Generator →', to: '/custom-qr-code' },
          ],
        },
      ],
    },
    smallBusiness: {
      title: 'QR-Codes für kleine Unternehmen: 6 praktische Einsatzmöglichkeiten',
      description:
        'Von Zahlungslinks bis Verpackung, Visitenkarten bis Bewertungen: praktische, kostengünstige Wege, wie ein kleines Unternehmen einen kostenlosen QR-Code einsetzen kann.',
      h1: 'QR-Codes für kleine Unternehmen',
      excerpt: 'Praktische, kostengünstige Wege, wie ein kleines Unternehmen einen QR-Code einsetzen kann, über die naheliegende Speisekarte hinaus.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Ein QR-Code ist eines der günstigsten Marketing-Werkzeuge, die ein kleines Unternehmen hat: kostenlos zu erstellen, kostenlos neben allem, was du ohnehin schon druckst, mitzudrucken, und er verwandelt jede physische Oberfläche (einen Kassenbon, einen Fensteraufkleber, ein Paket) in einen Link zu etwas Online. Zwei der häufigsten Einsatzzwecke, Speisekarten und WLAN-Zugang, haben hier eigene dedizierte Tools: siehe ',
            },
            { t: 'link', v: 'QR-Codes für Speisekarten', to: '/qr-code-for-menu' },
            { t: 'text', v: ' und ' },
            { t: 'link', v: 'QR-Codes für WLAN', to: '/qr-code-for-wifi' },
            { t: 'text', v: '. Diese Anleitung deckt den Rest ab.' },
          ],
        },
        { type: 'h2', text: '1. Zahlungs- und Trinkgeld-Links' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Ein Code, der einen Zahlungslink oder eine Trinkgeldseite öffnet, findet sich häufig auf Kassenbons, an Theken oder auf Lieferverpackungen. Achte hier besonders auf hohen Kontrast und teste gründlich, denn Kund:innen geben schnell auf, wenn ein Code beim ersten Versuch nicht scannt und es dabei um Geld geht.',
            },
          ],
        },
        { type: 'h2', text: '2. Social-Profile und Bewertungslinks' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Ein einzelner Code an der Kasse oder auf dem Kassenbon, der zu deiner Google-Unternehmens- oder Yelp-Bewertungsseite führt, beseitigt die größte Hürde beim Sammeln von Bewertungen: dich erst suchen zu müssen. Ein zweiter Code, oder eine Link-in-Bio-Seite, kann deine Social-Profile bündeln.',
            },
          ],
        },
        { type: 'h2', text: '3. Visitenkarten' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Ein QR-Code auf einer Visitenkarte, der eine Kontaktkarte kodiert (dieses Tool hat dafür einen eigenen Typ), lässt jemanden Namen, Nummer und E-Mail mit einem Scan direkt aufs Handy speichern, statt sie später von Hand einzutippen, und genau das ist der Moment, in dem die meisten handgetippten Kontakte nie wirklich gespeichert werden.',
            },
          ],
        },
        { type: 'h2', text: '4. Produktverpackung' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Ein Code auf der Verpackung kann zu Pflegehinweisen, einer Garantieregistrierung, einer Zutaten- oder Allergenliste oder einem "So verwendest du es"-Video führen: Informationen, für die sonst eine gedruckte Beilage nötig wäre. Es ist auch eine naheliegende Möglichkeit, nach einem Kauf zu einer Bewertungsseite zu verlinken.',
            },
          ],
        },
        { type: 'h2', text: '5. Veranstaltungsflyer und Poster' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Ein Code, der auf einem Flyer direkt zu einer Ticketseite oder einem Anmeldeformular führt, spart einen Schritt zwischen dem Anblick deines Posters und der tatsächlichen Anmeldung, verglichen damit, deine Veranstaltung später erst suchen zu müssen.',
            },
          ],
        },
        { type: 'h2', text: '6. Ein gebrandeter, thematisch passender Code' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Ein generischer QR-Code sieht aus, als könnte er jedem gehören. Ein unverwechselbares Symbol zu wählen oder dein Logo hochzuladen, macht deine Codes auf einen Blick wiedererkennbar, über Kassenbons, Verpackungen und Beschilderung hinweg. Probiere den ',
            },
            { t: 'link', v: 'individuellen QR-Code-Generator', to: '/custom-qr-code' },
            { t: 'text', v: ', um Farben und Stil deiner Marke anzupassen, oder den ' },
            { t: 'link', v: 'Logo-Generator', to: '/qr-code-with-logo' },
            { t: 'text', v: ', um direkt dein eigenes Logo zu verwenden.' },
          ],
        },
        { type: 'h2', text: 'Bevor du in großer Menge druckst' },
        {
          type: 'ul',
          items: [
            [{ t: 'text', v: 'Scanne jeden Code zuerst mit mindestens zwei verschiedenen Handys.' }],
            [{ t: 'text', v: 'Halte den Kontrast hoch und vermeide es, die drei Eckquadrate zu verdecken.' }],
            [
              { t: 'text', v: 'Denk daran, dass das statische Codes sind. Sieh dir ' },
              { t: 'link', v: 'statische vs. dynamische QR-Codes', to: '/guides/static-vs-dynamic-qr-codes' },
              { t: 'text', v: ' an, falls du erwartest, dass sich ein Ziellink nach dem Drucken häufig ändert.' },
            ],
            [{ t: 'text', v: 'Bemesse den Code passend zu der Distanz, aus der er tatsächlich gescannt wird.' }],
          ],
        },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Jeder Anwendungsfall oben beginnt gleich: Öffne den ' },
            { t: 'link', v: 'QR-Code-Generator', to: '/' },
            { t: 'text', v: ', wähle den Typ, der zu deinem Bedarf passt, und passe Symbol und Farben an dein Unternehmen an.' },
          ],
        },
      ],
    },
  },
}
