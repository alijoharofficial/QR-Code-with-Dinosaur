import type { PageContent } from '../pageContent'

export const content: PageContent = {
  chrome: {
    navHome: 'Accueil',
    navQrTools: 'Outils QR',
    navGuides: 'Guides',
    navServices: 'Services',
    navAbout: 'À propos',
    toolShort: {
      dinosaur: 'QR avec dinosaure',
      logo: 'QR avec logo',
      custom: 'QR personnalisé',
      menu: 'QR pour menu',
      wifi: 'QR pour WiFi',
    },
    footerToolsHeading: 'Outils',
    footerResourcesHeading: 'Ressources',
    footerServicesHeading: 'Services',
    footerCompanyHeading: 'Entreprise',
    footerFaqLabel: 'FAQ',
    footerWhatWeOffer: 'Ce que nous proposons',
    footerContact: 'Contact',
    footerPrivacyPolicy: 'Politique de confidentialité',
    footerTerms: "Conditions d'utilisation",
    footerBuiltBy: 'Conçu par',
    menuAriaLabel: 'Menu',
    switchToLightMode: 'Passer au mode clair',
    switchToDarkMode: 'Passer au mode sombre',
    emailUsLabel: 'Envoyez-nous un e-mail',
    getInTouchLabel: 'Nous contacter',
    questionsFeedback: 'Des questions, des retours, ou un bug à signaler ?',
    lastUpdatedLabel: 'Dernière mise à jour',
    faqHeadingDefault: 'Questions fréquentes',
    faqHeadingToolPage: 'Questions sur cette page',
    relatedGuidesHeading: 'Guides associés',
    backToGenerator: '← Retour au générateur de code QR principal',
  },
  notFound: {
    pageTitle: 'Page introuvable | Générateur de code QR',
    eyebrow: '404',
    heading: "Cette page s'est égarée",
    bodyWithPathPrefix: "Même le dinosaure n'a pas réussi à scanner son chemin jusqu'à",
    bodyWithPathSuffix: ". Elle a peut-être été déplacée, ou le lien n'est plus à jour.",
    bodyWithoutPath:
      "Même le dinosaure n'a pas réussi à scanner son chemin jusqu'à cette page. Elle a peut-être été déplacée, ou le lien n'est plus à jour.",
    backToGenerator: 'Retour au générateur',
    browseGuides: 'Parcourir les guides',
  },
  routes: {
    home: {
      title: 'Générateur de code QR avec logo dinosaure | Personnalisé et gratuit',
      description:
        "Créez un code QR personnalisé gratuit avec un logo dinosaure, une icône animale ou votre propre image. Codes QR mignons et scannables en quelques secondes, sans inscription, fonctionne hors ligne.",
    },
    guidesIndex: {
      title: 'Guides et astuces sur les codes QR | Générateur de code QR',
      description:
        "Guides pratiques et originaux sur les codes QR : ajouter un logo, codes statiques ou dynamiques, s'ils expirent, et codes QR pour petites entreprises. Tous gratuits à lire.",
      h1: 'Guides et astuces sur les codes QR',
    },
    services: {
      title: 'Services | Générateur de code QR',
      description:
        "Besoin de plus qu'un code QR ? Découvrez les services web, branding et marketing proposés par TECH24, l'équipe derrière ce générateur de code QR gratuit.",
    },
    about: {
      title: 'À propos | Générateur de code QR',
      description:
        "À propos de ce générateur de code QR gratuit : ce qu'il fait, comment il protège vos données, et qui l'a conçu et le maintient.",
    },
    contact: {
      title: 'Contact | Générateur de code QR',
      description: 'Contactez-nous à propos de ce générateur de code QR gratuit : questions, retours ou signalements de bugs bienvenus.',
    },
    privacy: {
      title: 'Politique de confidentialité | Générateur de code QR',
      description:
        "Comment ce générateur de code QR traite vos données : ce qui reste dans votre navigateur, quels outils d'analyse sont utilisés, et ce qui n'est jamais collecté.",
    },
    terms: {
      title: "Conditions d'utilisation | Générateur de code QR",
      description:
        "Les conditions d'utilisation de ce générateur de code QR gratuit, y compris ce qu'il fait, ce qu'il ne garantit pas, et comment il peut être utilisé.",
    },
  },
  home: {
    heroTitlePrefix: 'Générateur de code QR avec un',
    heroTitleAccent: 'logo dinosaure',
    heroSubtitle:
      'Codes QR personnalisés et gratuits avec un dinosaure, un singe, un tigre ou votre propre logo : mignons, scannables, et prêts en quelques secondes.',
    introPrefix: 'Voici un',
    introBold: 'générateur de code QR personnalisé gratuit',
    introSuffix:
      "qui transforme n'importe quel lien, réseau WiFi ou carte de contact en un code scannable, personnalisé avec une icône animale mignonne comme un dinosaure, un singe ou un tigre, ou votre propre logo. Chaque code QR est créé entièrement dans votre navigateur, se télécharge en PNG ou SVG, et fonctionne indéfiniment, sans inscription ni filigrane.",
    whatIsQrHeading: "Qu'est-ce qu'un code QR ?",
    whatIsQrBody:
      "Un code QR (Quick Response) est un petit motif carré qui stocke des données qu'un appareil photo peut lire instantanément, sans application ni saisie. Pointez l'appareil photo d'un téléphone vers un code et il le décode directement en lien, réseau WiFi ou carte de contact.",
    thisGeneratorSupports: 'Ce générateur prend en charge',
    howItWorksSteps: [
      {
        title: "Choisissez ce qu'il fait",
        body: 'Choisissez un type : lien vers un site web, réseau WiFi, carte de contact, menu, et plus encore, puis renseignez les détails.',
      },
      {
        title: 'Choisissez une icône ou un logo',
        body: 'Choisissez une icône intégrée, dont un dinosaure, un singe ou un tigre, ou importez votre propre image de logo.',
      },
      {
        title: 'Personnalisez-le',
        body: "Ajustez les couleurs, le style des points et la forme jusqu'à ce qu'il corresponde à votre marque ou à l'occasion.",
      },
      {
        title: 'Téléchargez et scannez',
        body: 'Enregistrez-le en PNG ou SVG, ou copiez-le directement dans votre presse-papiers. Il fonctionne immédiatement.',
      },
    ],
    featuresHeading: 'Fonctionnalités',
    features: [
      {
        title: 'Codes QR gratuits et illimités',
        body: "Sans inscription, sans filigrane, et sans limite sur le nombre que vous pouvez créer.",
      },
      {
        title: 'Icônes animales mignonnes ou votre propre logo',
        body: "Un dinosaure, un singe, un tigre, ou importez l'image de logo de votre choix.",
      },
      {
        title: 'Entièrement personnalisable',
        body: 'Couleurs, style des points, forme carrée ou circulaire : adaptez-le à votre marque.',
      },
      {
        title: 'Conçu pour scanner de manière fiable',
        body: "Une correction d'erreur élevée garde chaque code lisible, même avec un logo dessus.",
      },
      {
        title: 'Privé par défaut',
        body: "Tout s'exécute dans votre navigateur. Rien de ce que vous saisissez n'est envoyé à un serveur.",
      },
      {
        title: 'Téléchargements PNG ou SVG',
        body: "Récupérez un PNG pour un partage rapide, ou un SVG qui reste net à n'importe quelle taille d'impression.",
      },
    ],
    moreWaysToUseIt: "D'autres façons de l'utiliser",
    faq: [
      {
        question: 'Ce générateur de code QR est-il vraiment gratuit ?',
        answer:
          "Oui. Chaque code QR que vous créez ici est totalement gratuit, sans inscription, sans filigrane et sans limite sur le nombre que vous pouvez créer. Il n'existe pas de version premium cachant de meilleures fonctionnalités : les icônes dinosaure, singe et tigre, toutes les couleurs et tous les styles de points, ainsi que les deux formats de téléchargement, sont gratuits pour tout le monde.",
      },
      {
        question: 'Fonctionne-t-il hors ligne ?',
        answer:
          "Une fois la page chargée, oui. Le code QR est entièrement construit dans votre navigateur en JavaScript, donc générer et télécharger des codes ne nécessite pas de connexion internet. Vous devez seulement être en ligne la première fois que vous chargez la page (ou si vous collez une URL en direct que vous voulez vérifier).",
      },
      {
        question: 'Puis-je ajouter un logo ou une icône de dinosaure à mon code QR ?',
        answer:
          "Oui, c'est tout l'intérêt. Choisissez l'une des icônes animales intégrées (un dinosaure en pixel art, un singe ou un tigre), une icône sociale ou d'action, ou importez votre propre image de logo. Elle se place dans une zone de sécurité blanche protégée au centre du code, et le QR est généré avec une correction d'erreur élevée pour qu'il continue de scanner correctement.",
      },
      {
        question: 'Les codes QR sont-ils permanents, ou expirent-ils ?',
        answer:
          "Les codes sont statiques, ce qui signifie que les données (un lien, un mot de passe WiFi, une carte de contact, etc.) sont encodées directement dans le motif du code QR lui-même. Il n'y a pas de service de redirection tiers au milieu, pas d'abonnement, et rien qui puisse expirer ou être désactivé plus tard. Une fois téléchargé, il fonctionne aussi longtemps que l'image du code QR existe.",
      },
      {
        question: 'Dans quels formats de fichier puis-je télécharger mon code QR ?',
        answer:
          "Vous pouvez le télécharger en PNG, le format le plus simple pour le partage en ligne ou l'impression à une taille fixe, ou en SVG, un format vectoriel qui reste parfaitement net quelle que soit la taille d'impression. Utile pour les banderoles, la signalétique ou l'emballage. Vous pouvez aussi copier le PNG directement dans votre presse-papiers.",
      },
      {
        question: 'Dois-je créer un compte ou installer une application ?',
        answer:
          "Non. Il n'y a pas d'inscription, pas de connexion, et rien à installer. Ouvrez la page, concevez votre code QR, et téléchargez-le. C'est tout le processus.",
      },
      {
        question: 'Mes données ou mon logo importé sont-ils envoyés à un serveur ?',
        answer:
          "Non. Tout, l'encodage de vos données, la personnalisation du code QR et la lecture d'un fichier de logo importé, se passe localement dans votre navigateur. Rien de ce que vous saisissez ou importez n'est transmis à un serveur ni stocké où que ce soit.",
      },
      {
        question: 'Un code QR avec une icône ou un logo mignon scannera-t-il quand même de manière fiable ?',
        answer:
          "Oui, s'il est construit correctement. Chaque code ici utilise le niveau de correction d'erreur H, le plus élevé pris en charge par la norme QR, ce qui signifie que jusqu'à environ 30 % du code peut être recouvert ou endommagé tout en restant scannable. L'icône centrale est dimensionnée pour tenir dans cette marge de sécurité, donc ajouter un dinosaure ou votre propre logo ne compromet pas la scannabilité.",
      },
    ],
    guidesAndTipsHeading: 'Guides et astuces',
    viewAllGuides: 'Voir tous les guides →',
  },
  toolPages: {
    dinosaur: {
      title: 'Code QR avec logo dinosaure : générateur gratuit',
      description:
        "Créez un code QR gratuit avec un logo dinosaure au centre. Choisissez les couleurs et le style des points, puis téléchargez en PNG ou SVG. Sans inscription, fonctionne hors ligne.",
      h1: 'Code QR avec logo dinosaure',
      subtitle:
        "Un code QR ludique et instantanément reconnaissable, avec un dinosaure en pixel art au milieu, gratuit et prêt en quelques secondes.",
      body: [
        "Une icône de dinosaure transforme un code QR ordinaire en quelque chose que les gens s'arrêtent vraiment pour regarder, ce qui compte quand vous voulez un code qui se fait scanner plutôt qu'ignorer, sur une affiche, un autocollant, une invitation de fête, ou partout où vous voulez un peu de personnalité.",
        "Cette page ouvre le générateur avec l'icône de dinosaure en pixel art déjà sélectionnée, dans le thème vert caractéristique du site. Tout le reste fonctionne exactement comme l'outil complet : changez le type de code QR, remplacez l'icône par un singe ou un tigre, importez plutôt votre propre logo, ou ajustez les couleurs, le style des points et la forme.",
      ],
      faq: [
        {
          question: 'Le logo dinosaure affecte-t-il la qualité du scan du code ?',
          answer:
            "Non. Chaque code ici est généré avec le niveau de correction d'erreur le plus élevé pris en charge par la norme QR, et l'icône se place dans une zone de sécurité protégée qui ne touche jamais les trois carrés de repérage d'angle sur lesquels s'appuient les scanners.",
        },
        {
          question: 'Puis-je passer à un autre animal ou à mon propre logo ?',
          answer:
            "Oui, le sélecteur d'icônes inclut aussi un singe et un tigre, ou vous pouvez importer votre propre image de logo à tout moment. Le dinosaure n'est que l'option par défaut de cette page.",
        },
      ],
    },
    logo: {
      title: 'Code QR avec logo : ajoutez votre propre image, gratuit',
      description:
        "Importez votre propre logo et générez un code QR qui scanne toujours de manière fiable. Codes QR gratuits à correction d'erreur élevée avec votre logo au centre.",
      h1: 'Code QR avec logo',
      subtitle: "Importez votre propre logo, gardez-le scannable, et téléchargez un code QR qui a vraiment l'air d'être le vôtre.",
      body: [
        "Un logo au centre d'un code QR est le moyen le plus rapide de le rendre reconnaissable comme le vôtre, sur une carte de visite, une étiquette de produit, une facture ou un autocollant de vitrine. L'astuce consiste à le faire sans compromettre la scannabilité, ce à quoi cette page est justement conçue.",
        "Le sélecteur d'icônes s'ouvre directement sur l'onglet d'import. Déposez votre fichier de logo et le générateur s'occupe du reste : il dimensionne l'image pour qu'elle tienne dans une zone de sécurité protégée et encode le code au niveau de correction d'erreur le plus élevé, si bien que recouvrir une partie du motif avec votre logo n'empêche pas le scan.",
      ],
      faq: [
        {
          question: "Quels formats d'image puis-je importer comme logo ?",
          answer:
            "N'importe quel format d'image courant (PNG, JPG, SVG, et similaires) jusqu'à 5 Mo. Il reste entièrement dans votre navigateur ; rien n'est envoyé à un serveur.",
        },
        {
          question: 'Mon logo rendra-t-il le code plus difficile à scanner ?',
          answer:
            "Pas s'il reste dans la zone de sécurité que le générateur lui attribue, ce qui est le cas par défaut. Une correction d'erreur élevée (niveau H) est utilisée automatiquement, si bien qu'environ 30 % du code peut être recouvert tout en restant lisible.",
        },
      ],
    },
    custom: {
      title: 'Générateur de code QR personnalisé : couleurs, forme et style',
      description:
        "Concevez un code QR entièrement personnalisé : choisissez les couleurs, le style des points et la forme, ajoutez une icône ou un logo, et téléchargez gratuitement en PNG ou SVG. Aucune inscription requise.",
      h1: 'Générateur de code QR personnalisé',
      subtitle:
        "Couleurs, style des points, forme des angles et icône : personnalisez chaque partie de votre code QR tout en le gardant entièrement scannable.",
      body: [
        "Un générateur de code QR personnalisé devrait vous permettre de changer bien plus que le simple contenu encodé. Ici, vous pouvez ajuster le style des points (carré, arrondi, ou un rendu plus doux), basculer entre un cadre extérieur carré ou circulaire, choisir parmi plusieurs thèmes de couleurs, et ajouter une icône ou votre propre logo, le tout sans toucher à la fiabilité du code.",
        "Chaque combinaison est générée avec le même niveau de correction d'erreur élevé, si bien qu'un code arrondi, coloré et orné d'un logo scanne exactement aussi bien qu'un code noir et blanc classique.",
      ],
      faq: [
        {
          question: "Puis-je changer la couleur d'un code QR sans le rendre inutilisable ?",
          answer:
            "Oui, tant qu'il y a suffisamment de contraste entre la couleur des points et l'arrière-plan. Deux couleurs de luminosité similaire sont la principale façon dont un changement de couleur nuit à la scannabilité.",
        },
        {
          question: 'Que puis-je personnaliser à part la couleur ?',
          answer:
            "Le style des points, la forme des angles (carré ou cercle), et l'icône ou le logo central, sans oublier bien sûr ce que le code encode réellement : un lien, un réseau WiFi, une carte de contact, et plus encore.",
        },
      ],
    },
    menu: {
      title: 'Code QR pour menu de restaurant : générateur gratuit',
      description:
        "Créez un code QR menu pour votre restaurant ou café en quelques secondes. Reliez votre menu en ligne, ajoutez votre logo, et téléchargez gratuitement en PNG ou SVG.",
      h1: 'Code QR pour un menu de restaurant',
      subtitle: "Reliez votre menu, choisissez une icône adaptée à votre restaurant, et téléchargez un code prêt pour les chevalets de table ou les affiches.",
      body: [
        'Un code QR menu a simplement besoin d\'un lien vers votre menu hébergé : une page de votre site web, un PDF, ou un simple créateur de page conviennent tous. Cette page démarre le générateur sur le type « Site web » avec une icône de menu déjà sélectionnée, prête pour ce lien.',
        "Comme ce sont des codes statiques, le code QR lui-même n'a jamais besoin de changer, même si votre menu change. Mettez à jour la page derrière le lien et chaque chevalet de table ou autocollant déjà imprimé pointe automatiquement vers la nouvelle version. Dimensionnez-le selon la distance à laquelle il sera lu, et gardez l'arrière-plan derrière lui bien dégagé pour qu'il scanne rapidement même en faible luminosité.",
      ],
      faq: [
        {
          question: 'Dois-je réimprimer le code si je mets à jour le menu ?',
          answer:
            "Non, tant que le menu reste au même lien, mettre à jour ce qui figure sur cette page (prix, spécialités, plats) ne nécessite pas de nouveau code QR. Vous n'avez besoin d'un nouveau code que si le lien lui-même change.",
        },
        {
          question: 'À quelle taille dois-je imprimer le code ?',
          answer:
            "En règle générale, gardez le code imprimé à au moins environ 2 cm par mètre de distance de scan prévue. Un chevalet de table lu à bout de bras peut être plus petit qu'une affiche destinée à être scannée depuis l'autre bout d'une pièce.",
        },
      ],
    },
    wifi: {
      title: 'Code QR pour WiFi : générateur gratuit de partage de réseau',
      description:
        "Générez un code QR WiFi gratuit pour que vos invités se connectent en un scan au lieu de taper un mot de passe. Sans inscription, fonctionne entièrement dans votre navigateur.",
      h1: 'Code QR pour WiFi',
      subtitle: "Encodez le nom de votre réseau WiFi et son mot de passe dans un seul code : vos invités le scannent et se connectent, sans rien taper.",
      body: [
        "Un code QR WiFi encode ensemble le nom de votre réseau et son mot de passe, si bien qu'un appareil photo de téléphone peut le lire et proposer de se connecter directement, sans avoir à taper un long mot de passe depuis un post-it. Cette page ouvre le générateur avec le type WiFi déjà sélectionné.",
        "C'est particulièrement utile pour les cafés, les salles d'attente, les locations de courte durée et les bureaux recevant des visiteurs. Les détails du réseau restent encodés dans le code imprimé ou affiché lui-même ; rien n'est envoyé où que ce soit lors de sa génération.",
      ],
      faq: [
        {
          question: 'Est-il prudent de mettre mon mot de passe WiFi dans un code QR ?',
          answer:
            "Le mot de passe est encodé directement dans le code et n'est décodé que localement par la personne qui le scanne, la même information que n'importe qui pourrait lire sur un post-it ou une étiquette de routeur. Traitez le code imprimé comme vous traiteriez le fait d'écrire le mot de passe quelque part de visible.",
        },
        {
          question: 'Cela fonctionne-t-il pour les réseaux masqués ?',
          answer:
            "Oui, le type WiFi inclut une option pour marquer le réseau comme masqué, afin que les appareils qui scannent sachent se connecter par nom plutôt que par diffusion.",
        },
      ],
    },
  },
  guidesIndex: {
    intro:
      "Guides pratiques et originaux pour tirer le meilleur parti des codes QR, de l'ajout d'un logo sans compromettre la scannabilité au choix du bon type de code selon votre usage.",
    lookingForTool: "Vous cherchez l'outil lui-même ?",
    goToGenerator: 'Accéder au générateur de code QR',
  },
  services: {
    introPrefix: "Ce générateur de code QR est gratuit et le restera toujours. Il est conçu et maintenu par",
    introSuffix:
      ", une petite équipe de marketing et web assistée par IA. Si vous êtes une petite entreprise et avez un jour besoin de plus qu'un code QR, voici un aperçu en langage simple de ce sur quoi ils travaillent.",
    categories: [
      {
        title: 'Sites web',
        body: "Conception et développement de sites pour petites entreprises et sites marketing, la même approche que celle qui a permis de garder cet outil rapide et simple à utiliser.",
      },
      {
        title: 'Branding',
        body: "Logos, systèmes de couleurs et identité visuelle pour les entreprises qui veulent paraître aussi soignées qu'elles le sont.",
      },
      {
        title: 'Marketing',
        body: "Un accompagnement marketing continu, construit autour du même flux de travail assisté par IA que celui utilisé pour faire fonctionner cet outil gratuit.",
      },
      {
        title: 'E-commerce',
        body: "Des boutiques en ligne rapides à parcourir et faciles pour passer commande, sur n'importe quel appareil.",
      },
      {
        title: 'SEO',
        body: "La même approche technique et éditoriale utilisée pour faire trouver cet outil gratuit dans les résultats de recherche, appliquée à votre site.",
      },
      {
        title: 'Support continu',
        body: "Une équipe qui maintient les choses en marche après le lancement, pas seulement à la livraison.",
      },
    ],
    process: [
      { title: 'On en parle', body: "Une conversation courte, en langage simple, sur ce dont vous avez vraiment besoin." },
      { title: 'Vous voyez un plan', body: "Un périmètre et un prix clairs avant que quoi que ce soit ne commence, sans surprise ensuite." },
      {
        title: 'Livraison et support',
        body: "Lancement, puis aide continue, la même fiabilité que vise cet outil gratuit.",
      },
    ],
    closingPrefix: 'Tous les détails, y compris les forfaits actuels, sont sur',
  },
  about: {
    h1: 'À propos de ce générateur de code QR',
    subtitle:
      "Un outil gratuit pour créer des codes QR personnalisés avec une icône dinosaure, singe ou tigre, ou votre propre logo, entièrement dans votre navigateur.",
    highlights: [
      {
        title: 'Sans inscription, jamais',
        body: "Ouvrez la page, créez un code, téléchargez-le. Pas de compte, pas d'e-mail, pas de mot de passe.",
      },
      {
        title: 'Illimité, sans filigrane',
        body: 'Créez autant de codes QR que vous voulez. Chacun se télécharge sans filigrane.',
      },
      {
        title: 'Statique et permanent',
        body: "Vos données sont intégrées directement dans le code, qui continue donc de fonctionner aussi longtemps que l'image existe.",
      },
    ],
    privacyHeading: 'Tout reste sur votre appareil',
    privacyPoints: [
      "L'encodage de vos données se fait dans votre navigateur",
      'La personnalisation du code se fait dans votre navigateur',
      "La lecture d'un logo importé se fait dans votre navigateur",
      "Rien de ce que vous saisissez ou importez n'est jamais envoyé à un serveur",
    ],
    privacyClosingPrefix: 'Consultez la',
    privacyClosingSuffix: "pour tous les détails, y compris les outils d'analyse utilisés pour comprendre l'utilisation du site.",
    tech24Prefix: 'Cet outil gratuit a été conçu et est maintenu par',
    tech24Mid:
      ", une petite équipe de marketing et web assistée par IA. Si vous avez un jour besoin de plus qu'un code QR, d'un site web, d'une identité de marque ou de marketing, vous pouvez consulter",
    tech24OfferLabel: "ce qu'ils proposent",
  },
  contact: {
    h1: 'Contact',
    intro:
      "Des questions sur le fonctionnement du générateur, des retours, ou quelque chose qui ne scanne pas correctement ? Envoyez un e-mail et nous vous répondrons.",
  },
  privacy: {
    h1: 'Politique de confidentialité',
    sections: [
      {
        heading: 'Ce que cet outil fait de vos données',
        body: "La génération d'un code QR, y compris tout lien, mot de passe WiFi, coordonnées de contact ou autre contenu que vous saisissez, ainsi que toute image de logo que vous importez, se déroule entièrement dans votre navigateur. Rien de tout cela n'est envoyé à un serveur, ni stocké sur un serveur. Fermer ou actualiser la page l'efface.",
      },
      {
        heading: 'Ce que nous stockons localement',
        body: "Votre thème (clair ou sombre) et votre préférence de langue sont enregistrés dans le stockage local de votre navigateur afin de persister d'une visite à l'autre. Cela reste sur votre appareil et n'est jamais transmis où que ce soit.",
      },
      {
        heading: "Analyse d'audience",
        body: "Ce site utilise Google Tag Manager et Microsoft Clarity pour comprendre, de manière globale, comment le site est utilisé, par exemple quelles pages sont visitées et grosso modo comment les gens interagissent avec elles. Ces outils peuvent déposer des cookies et collecter des informations techniques standard (comme le type de navigateur et une localisation approximative déduite de l'adresse IP). Ils ne reçoivent rien de ce que vous saisissez dans le générateur de code QR lui-même.",
      },
      {
        heading: 'Polices de caractères',
        body: "Ce site charge la police Inter depuis Google Fonts, ce qui implique une requête vers les serveurs de Google au chargement de la page.",
      },
      {
        heading: 'Pas de comptes, pas de vente de données',
        body: "Il n'y a pas de système d'inscription ou de compte, donc pas de données de compte à protéger ou à perdre. Nous ne vendons aucune donnée à des tiers.",
      },
      {
        heading: 'Questions',
        bodyPrefix: 'Pour toute question sur la confidentialité, consultez les',
        bodySuffixOr: 'ou envoyez un e-mail à',
      },
    ],
  },
  terms: {
    h1: "Conditions d'utilisation",
    sections: [
      {
        heading: "L'outil",
        body: "Ce site propose un générateur de code QR gratuit qui fonctionne entièrement dans votre navigateur. Vous pouvez l'utiliser pour générer un nombre illimité de codes QR à des fins personnelles ou commerciales, sans frais.",
      },
      {
        heading: 'Votre responsabilité',
        body: "Vous êtes responsable du contenu que vous encodez dans un code QR et devez vérifier qu'un code généré se scanne correctement avant de vous y fier, par exemple avant de l'imprimer à grande échelle. Nous recommandons de scanner un code avec plusieurs appareils avant de le diffuser largement.",
      },
      {
        heading: 'Aucune garantie',
        body: "Cet outil est fourni « tel quel », sans garantie d'aucune sorte. Nous faisons de notre mieux pour le maintenir exact et fiable, mais nous ne garantissons ni une disponibilité ininterrompue ni que chaque code généré se scannera dans toutes les conditions (par exemple sur un support endommagé, mal imprimé, ou à très faible contraste).",
      },
      {
        heading: 'Utilisation acceptable',
        body: "N'utilisez pas cet outil pour générer des codes QR menant à du contenu illégal, à la diffusion de logiciels malveillants, au hameçonnage, ou à toute chose destinée à tromper ou nuire aux personnes qui scannent le code obtenu.",
      },
      {
        heading: 'Modifications',
        body: "Ces conditions peuvent être mises à jour de temps à autre ; la version actuelle s'applique toujours.",
      },
      {
        heading: 'Questions',
        bodyPrefix: 'Consultez les',
        bodySuffixOr: 'ou envoyez un e-mail à',
      },
    ],
  },
  guides: {
    logo: {
      title: 'Comment créer un code QR avec un logo (guide gratuit)',
      description:
        "Apprenez à créer un code QR avec un logo au centre qui scanne toujours de manière fiable, étape par étape, avec des conseils sur la correction d'erreur, le dimensionnement et le contraste.",
      h1: 'Comment créer un code QR avec un logo',
      excerpt: "Un logo au centre rend un code QR instantanément reconnaissable comme le vôtre. Voici comment en ajouter un sans compromettre la scannabilité.",
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Un code QR noir et blanc classique fonctionne, mais il ne donne pas l'impression d'appartenir à quelqu'un. Placez votre logo, ou une icône amusante comme un petit dinosaure, au centre et ce même code donne instantanément l'impression de faire partie de votre marque ou de votre événement. La bonne nouvelle, c'est qu'un ",
            },
            { t: 'b', v: 'code QR avec logo' },
            {
              t: 'text',
              v: " n'est pas plus difficile à créer qu'un code classique, tant que vous comprenez la seule règle qui compte vraiment : la correction d'erreur.",
            },
          ],
        },
        { type: 'h2', text: "Pourquoi vous pouvez recouvrir une partie d'un code QR et qu'il fonctionne quand même" },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Les codes QR intègrent une couche de correction d'erreur directement dans la norme elle-même. Selon le niveau choisi lors de la génération du code, un code QR peut perdre entre environ 7 % et environ 30 % de son motif (recouvert par un logo, maculé, imprimé sur une surface froissée) et un scanner peut quand même reconstituer les données d'origine. Le niveau le plus élevé, appelé niveau H, tolère environ 30 % de dommage ou d'obstruction. Cette marge de 30 % est exactement ce qui rend sûr le fait de placer un logo au milieu d'un code QR, à condition que le générateur que vous utilisez applique réellement ce niveau. Cet outil encode toujours au niveau H pour cette raison.",
            },
          ],
        },
        { type: 'h2', text: 'Étape par étape : ajouter un logo à votre code QR' },
        {
          type: 'ol',
          items: [
            [
              { t: 'b', v: 'Choisissez ce que le code QR doit faire.' },
              { t: 'text', v: ' Sur le ' },
              { t: 'link', v: 'générateur de code QR avec logo', to: '/qr-code-with-logo' },
              { t: 'text', v: ', choisissez un type (lien vers un site web, réseau WiFi, carte de contact, etc.) et renseignez les détails.' },
            ],
            [
              { t: 'b', v: "Ouvrez le sélecteur d'icônes." },
              {
                t: 'text',
                v: " Sélectionnez « Importer un logo » et choisissez votre propre fichier image, ou choisissez l'une des icônes intégrées si vous n'avez pas de fichier de logo sous la main.",
              },
            ],
            [
              { t: 'b', v: "Vérifiez l'aperçu." },
              {
                t: 'text',
                v: " Le logo se place automatiquement dans un cercle blanc protégé au milieu du code, de sorte qu'il ne touche jamais les carrés de repérage (les trois grands carrés d'angle qu'un scanner utilise pour s'orienter) ; c'est la seule partie d'un code QR qui ne doit jamais être recouverte.",
              },
            ],
            [
              { t: 'b', v: 'Choisissez les couleurs et téléchargez.' },
              {
                t: 'text',
                v: " Ajustez le style des points et le thème de couleurs si vous le souhaitez, puis téléchargez en PNG pour un partage rapide ou en SVG si vous prévoyez de l'imprimer en grand.",
              },
            ],
          ],
        },
        { type: 'h2', text: 'Conseils pour un logo qui scanne de manière fiable à chaque fois' },
        {
          type: 'ul',
          items: [
            [
              { t: 'b', v: 'Gardez un contraste élevé.' },
              {
                t: 'text',
                v: " Un logo sombre sur le fond clair du code QR (ou l'inverse) scanne bien plus fiablement qu'un logo à faible contraste.",
              },
            ],
            [
              { t: 'b', v: "N'étirez pas le logo trop grand." },
              {
                t: 'text',
                v: " Un bon générateur limite la part du code que votre logo peut recouvrir, mais si vous construisez le vôtre, rester sous environ 20 à 25 % de la surface totale est un objectif sûr.",
              },
            ],
            [
              { t: 'b', v: "Testez avant d'imprimer en grande quantité." },
              {
                t: 'text',
                v: " Scannez le code QR téléchargé avec deux ou trois téléphones différents avant de commander de la signalétique, des chevalets de table ou des emballages. Cela prend dix secondes et évite une réimpression.",
              },
            ],
            [
              { t: 'b', v: 'Laissez la zone de silence tranquille.' },
              {
                t: 'text',
                v: " La marge blanche autour de l'extérieur d'un code QR n'est pas un espace perdu ; les scanners s'en servent pour détecter où le code commence et se termine. Ne la recadrez pas trop serré en plaçant le code dans une mise en page.",
              },
            ],
          ],
        },
        { type: 'h2', text: 'Erreurs courantes' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "L'échec le plus courant ne vient pas du logo lui-même. C'est d'utiliser un générateur de code QR qui n'augmente pas le niveau de correction d'erreur lorsqu'un logo est ajouté. Si vous avez déjà scanné un code QR avec logo qui refusait tout simplement de se lire, c'est presque toujours la raison. La deuxième erreur la plus courante est de choisir des couleurs presque identiques pour les points et l'arrière-plan (comme des points gris clair sur blanc), ce qui nuit à la scannabilité même sans aucun logo.",
            },
          ],
        },
        {
          type: 'p',
          content: [
            { t: 'text', v: "Une fois ces deux points réglés, un code QR avec logo est tout aussi fiable qu'un code classique, et bien plus mémorable. Essayez-le dans notre " },
            { t: 'link', v: 'générateur de code QR avec logo →', to: '/qr-code-with-logo' },
          ],
        },
      ],
    },
    staticVsDynamic: {
      title: 'Codes QR statiques vs dynamiques : quelle est la différence ?',
      description:
        "Les codes QR statiques encodent les données directement et n'expirent jamais. Les codes dynamiques redirigent via un service et peuvent être modifiés ou suivis, moyennant un prix. Voici le compromis.",
      h1: 'Codes QR statiques vs dynamiques : quelle est la différence',
      excerpt: "Un type est gratuit et permanent. L'autre peut être modifié après impression, moyennant un abonnement. Voici comment choisir.",
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: '« Statique » et « dynamique » : ces codes QR se ressemblent en surface (le même carré noir et blanc, ou coloré et orné d\'un logo) mais ils fonctionnent de manières fondamentalement différentes en dessous. Comprendre la différence est important avant d\'en imprimer plusieurs centaines.',
            },
          ],
        },
        { type: 'h2', text: 'Codes QR statiques' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Un code QR statique contient vos données réelles (une URL, un mot de passe WiFi, une carte de contact, du texte brut, peu importe ce que vous avez choisi) encodées directement dans le motif de modules noirs et blancs. Quand un téléphone le scanne, il lit ces données directement depuis le code lui-même. Il n'y a pas de serveur intermédiaire, pas de compte derrière, et rien qui puisse tomber hors ligne ou être fermé plus tard. Il fonctionne exactement de la même façon le jour où vous l'imprimez que dix ans plus tard. C'est le type de code QR que crée ce générateur : construisez-le une fois, et il est à vous, gratuitement, pour toujours. Voir ",
            },
            { t: 'link', v: 'les codes QR expirent-ils ?', to: '/guides/do-qr-codes-expire' },
            { t: 'text', v: ' pour en savoir plus sur ce que cela signifie concrètement.' },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Le compromis, c'est qu'un code statique est fixe. Si vous avez encodé un lien et qu'il doive plus tard pointer ailleurs, vous devez générer et réimprimer un nouveau code ; vous ne pouvez pas modifier ce qui est déjà intégré dans le motif.",
            },
          ],
        },
        { type: 'h2', text: 'Codes QR dynamiques' },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Un code QR dynamique encode à la place un court lien de redirection appartenant à un service tiers (par exemple, quelque chose comme ' },
            { t: 'code', v: 'qr.example.com/abc123' },
            {
              t: 'text',
              v: "). Une fois scanné, ce lien court redirige vers l'URL de destination que vous avez définie, et comme la destination de redirection se trouve sur le serveur du service plutôt que dans le code lui-même, vous pouvez changer la destination à tout moment sans rien réimprimer. La plupart des services proposant cela fournissent aussi des statistiques de scan (combien de scans, à peu près quand et où).",
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Cette flexibilité est réelle, mais elle a un prix : les codes dynamiques nécessitent généralement un compte auprès du service qui héberge la redirection, et de nombreux prestataires imposent une limite de scans ou une limite de temps sur leur offre gratuite, au-delà de laquelle le code cesse de fonctionner ou nécessite un abonnement payant pour continuer à rediriger. Si ce service ferme un jour, ou si vous arrêtez de payer, chaque code dynamique déjà imprimé cesse silencieusement de fonctionner, même si le carré imprimé semble inchangé.",
            },
          ],
        },
        { type: 'h2', text: 'Lequel devriez-vous utiliser ?' },
        {
          type: 'table',
          headers: ['Situation', 'Meilleur choix'],
          rows: [
            ["Un lien, un réseau WiFi ou une carte de contact qui ne changera pas", 'Statique : gratuit, permanent, aucun compte nécessaire'],
            ["Imprimé une seule fois pour un événement ponctuel ou une seule édition de menu", 'Statique : rien à entretenir ensuite'],
            ['Vous avez besoin de statistiques de scan (combien, quand)', 'Dynamique : nécessite un service payant ou basé sur un compte'],
            ["Le lien de destination peut changer après l'impression de milliers d'exemplaires", "Dynamique : peut valoir l'abonnement à cette échelle"],
          ],
        },
        { type: 'h2', text: 'Le compromis pratique' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Pour la plupart des usages individuels et des petites entreprises (menus, accès WiFi, invitations à un événement, cartes de visite, emballages de produits, liens sociaux), un code statique pointant vers un lien que vous contrôlez (votre propre site web, une page que vous pouvez modifier à tout moment) vous apporte l'essentiel des avantages d'un code dynamique sans abonnement. Vous ne pouvez pas changer la destination du code QR sans le réimprimer, mais vous ",
            },
            { t: 'i', v: 'pouvez' },
            {
              t: 'text',
              v: " changer ce qui est publié à cette destination quand vous le souhaitez, puisque le code pointe simplement vers un lien, et non vers un contenu fixe.",
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Cet outil génère des codes QR statiques avec une icône ou un logo personnalisé, dans les couleurs et la forme de votre choix, téléchargeables en PNG ou SVG. Essayez-le dans notre ",
            },
            { t: 'link', v: 'générateur de code QR personnalisé →', to: '/custom-qr-code' },
          ],
        },
      ],
    },
    doQrCodesExpire: {
      title: 'Les codes QR expirent-ils ? La réponse honnête',
      description:
        "Un code QR créé avec un générateur gratuit comme celui-ci n'expire pas de lui-même. Voici ce qui peut réellement le faire cesser de fonctionner, et comment vous assurer que le vôtre continue de fonctionner.",
      h1: 'Les codes QR expirent-ils ?',
      excerpt: "Le code lui-même n'expire jamais, mais certaines choses peuvent quand même l'empêcher de fonctionner. Voici ce qui se passe réellement.",
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Réponse courte : non, un code QR en lui-même n'expire pas. Le motif de carrés noirs et blancs n'est qu'une façon d'encoder des données. Il n'a ni horloge, ni connexion serveur, ni abonnement attaché. Une fois généré, c'est une image statique, et les images statiques ne se périment pas. Mais ce n'est pas tout à fait toute l'histoire, et les exceptions méritent d'être comprises avant d'en imprimer un quelque part de façon permanente.",
            },
          ],
        },
        { type: 'h2', text: "Pourquoi un code QR statique n'expire pas" },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Un code QR créé avec un outil gratuit comme celui-ci est un code ' },
            { t: 'b', v: 'statique' },
            {
              t: 'text',
              v: " : ce que vous avez saisi (un lien, un mot de passe WiFi, une carte de contact) est encodé directement dans le motif du code. Aucun serveur tiers n'intervient dans sa lecture. Un scanner lit le motif et reconstitue les données d'origine sur place, exactement comme il l'aurait fait le premier jour. Voir ",
            },
            { t: 'link', v: 'codes QR statiques vs dynamiques', to: '/guides/static-vs-dynamic-qr-codes' },
            {
              t: 'text',
              v: " pour le détail complet de la différence avec les codes « dynamiques » que vendent certains services payants, lesquels passent par un lien de redirection qui ",
            },
            { t: 'i', v: 'peut' },
            { t: 'text', v: ' être désactivé.' },
          ],
        },
        { type: 'h2', text: "Ce qui peut réellement empêcher un code QR de fonctionner" },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Si un code QR que vous avez créé il y a des mois ou des années « cesse soudainement de fonctionner », le code lui-même n\'a presque jamais changé. C\'est plutôt l\'une de ces situations qui s\'est produite :',
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              { t: 'b', v: 'La destination a disparu.' },
              {
                t: 'text',
                v: " Si le code encode un lien, le scan fonctionne toujours parfaitement, mais le téléphone atterrit simplement sur une page brisée si ce site web, cette fiche produit ou ce lien de menu a été retiré ou déplacé. C'est de loin la cause la plus fréquente, et ce n'est pas vraiment le code QR qui « expire » ; c'est la page derrière lui qui disparaît.",
              },
            ],
            [
              { t: 'b', v: 'Un domaine a expiré.' },
              {
                t: 'text',
                v: " Si le lien pointe vers un domaine qui n'a pas été renouvelé, tout le site derrière s'éteint, entraînant avec lui chaque code QR qui y pointait.",
              },
            ],
            [
              { t: 'b', v: "C'était un code dynamique sur un service qui a fermé ou n'était plus payé." },
              {
                t: 'text',
                v: " Comme expliqué dans le guide statique vs dynamique, c'est le seul vrai cas où un code QR peut passer de fonctionnel à cassé alors que l'image imprimée reste inchangée.",
              },
            ],
            [
              { t: 'b', v: "L'exemplaire physique s'est dégradé." },
              {
                t: 'text',
                v: ' Une impression délavée, déchirée ou fortement rayée peut devenir impossible à scanner. Ce n\'est pas non plus le code qui « expire », juste l\'usure normale du support sur lequel il est imprimé.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'Comment créer un code QR qui continue de fonctionner' },
        {
          type: 'ol',
          items: [
            [
              { t: 'b', v: 'Faites-le pointer vers un lien que vous contrôlez.' },
              { t: 'text', v: " Votre propre site web ou une page que vous pouvez continuer à renouveler vaut mieux qu'une fiche tierce que vous ne contrôlez pas." },
            ],
            [
              { t: 'b', v: 'Gardez votre domaine renouvelé' },
              { t: 'text', v: " si le code pointe vers votre propre site, activez le renouvellement automatique si votre bureau d'enregistrement le permet." },
            ],
            [
              { t: 'b', v: 'Préférez le statique au dynamique' },
              {
                t: 'text',
                v: " pour tout ce que vous voulez faire durer indéfiniment sans paiement continu, sauf si vous avez spécifiquement besoin de statistiques de scan ou de la possibilité de rediriger le code ailleurs plus tard.",
              },
            ],
            [
              { t: 'b', v: 'Imprimez à une taille raisonnable et protégez-le.' },
              { t: 'text', v: ' Plastifiez ou protégez les codes qui seront manipulés souvent ou exposés aux intempéries.' },
            ],
            [
              { t: 'b', v: "Utilisez une correction d'erreur élevée" },
              {
                t: 'text',
                v: ", pour qu'une usure mineure, une tache ou un logo au centre n'empêchent pas le scan. Chaque code de cet outil utilise le niveau de correction d'erreur le plus élevé, précisément pour cette raison.",
              },
            ],
          ],
        },
        { type: 'h2', text: 'En résumé' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Un code QR généré ici n'a pas de date d'expiration, pas d'abonnement, et aucun service tiers qui puisse le désactiver discrètement. Ce qui casse un code QR en pratique, c'est presque toujours la destination derrière lui, pas le code. Gardez le lien vivant, et le code reste scannable indéfiniment. Créez-en un dans notre ",
            },
            { t: 'link', v: 'générateur de code QR personnalisé →', to: '/custom-qr-code' },
          ],
        },
      ],
    },
    smallBusiness: {
      title: 'Codes QR pour petites entreprises : 6 usages pratiques',
      description:
        "Des liens de paiement aux emballages, des cartes de visite aux avis clients : des moyens pratiques et peu coûteux pour une petite entreprise de mettre un code QR gratuit à profit.",
      h1: 'Codes QR pour petites entreprises',
      excerpt: "Des moyens pratiques et peu coûteux pour une petite entreprise de mettre un code QR à profit, au-delà du menu évident.",
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Un code QR est l'un des outils marketing les moins chers dont dispose une petite entreprise : gratuit à générer, gratuit à imprimer avec ce que vous imprimez déjà, et il transforme n'importe quelle surface physique (un reçu, un autocollant de vitrine, un emballage) en lien vers quelque chose en ligne. Deux des usages les plus courants, les menus et l'accès WiFi, ont leurs propres outils dédiés ici : voir ",
            },
            { t: 'link', v: 'les codes QR pour menus', to: '/qr-code-for-menu' },
            { t: 'text', v: ' et ' },
            { t: 'link', v: 'les codes QR pour WiFi', to: '/qr-code-for-wifi' },
            { t: 'text', v: '. Ce guide couvre le reste.' },
          ],
        },
        { type: 'h2', text: '1. Liens de paiement et de pourboire' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Un code qui ouvre un lien de paiement ou une page de pourboire est courant sur les reçus, aux comptoirs, ou sur les emballages de livraison. Gardez celui-ci particulièrement contrasté et testez-le soigneusement, car les clients abandonnent vite face à un code qui ne scanne pas du premier coup quand de l'argent est en jeu.",
            },
          ],
        },
        { type: 'h2', text: '2. Profils sociaux et liens vers les avis' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Un seul code près de la caisse ou sur un reçu qui renvoie vers votre fiche Google Business ou votre page Yelp supprime le plus gros obstacle à l'obtention d'avis : devoir vous rechercher. Un second code, ou une page de liens en bio, peut regrouper vos profils sociaux.",
            },
          ],
        },
        { type: 'h2', text: '3. Cartes de visite' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Un code QR sur une carte de visite qui encode une carte de contact (cet outil dispose d'un type dédié pour cela) permet à quelqu'un d'enregistrer votre nom, votre numéro et votre e-mail sur son téléphone en un scan plutôt qu'en les tapant plus tard, ce moment précis où la plupart des contacts saisis à la main ne sont en réalité jamais enregistrés.",
            },
          ],
        },
        { type: 'h2', text: '4. Emballage de produits' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Un code sur un emballage peut renvoyer vers des instructions d\'entretien, un enregistrement de garantie, une liste d\'ingrédients ou d\'allergènes, ou une vidéo « comment utiliser ceci » : des informations qui nécessiteraient autrement un encart imprimé. C\'est aussi un moyen naturel de renvoyer vers une page d\'avis après un achat.',
            },
          ],
        },
        { type: 'h2', text: "5. Flyers et affiches d'événement" },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Un code renvoyant directement vers une page de billetterie ou un formulaire de RSVP sur un flyer supprime une étape entre le moment où quelqu'un voit votre affiche et le moment où il s'inscrit réellement, par rapport à lui faire rechercher votre événement par son nom plus tard.",
            },
          ],
        },
        { type: 'h2', text: "6. Un code personnalisé, à l'image de votre marque" },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Un code QR générique donne l'impression de pouvoir appartenir à n'importe qui. Choisir une icône distincte ou importer votre logo rend vos codes reconnaissables au premier coup d'œil sur les reçus, les emballages et la signalétique. Essayez le ",
            },
            { t: 'link', v: 'générateur de code QR personnalisé', to: '/custom-qr-code' },
            { t: 'text', v: " pour l'adapter aux couleurs et au style de votre marque, ou le " },
            { t: 'link', v: 'générateur avec logo', to: '/qr-code-with-logo' },
            { t: 'text', v: ' pour utiliser directement votre propre logo.' },
          ],
        },
        { type: 'h2', text: "Avant d'imprimer en grande quantité" },
        {
          type: 'ul',
          items: [
            [{ t: 'text', v: "Scannez chaque code avec au moins deux téléphones différents d'abord." }],
            [{ t: 'text', v: "Gardez un contraste élevé et évitez de recouvrir les trois carrés d'angle." }],
            [
              { t: 'text', v: "N'oubliez pas que ce sont des codes statiques. Voir " },
              { t: 'link', v: 'codes QR statiques vs dynamiques', to: '/guides/static-vs-dynamic-qr-codes' },
              { t: 'text', v: " si vous prévoyez qu'un lien de destination change souvent après l'impression." },
            ],
            [{ t: 'text', v: 'Dimensionnez le code selon la distance à laquelle il sera réellement scanné.' }],
          ],
        },
        {
          type: 'p',
          content: [
            { t: 'text', v: "Chaque cas d'usage ci-dessus commence de la même façon : ouvrez le " },
            { t: 'link', v: 'générateur de code QR', to: '/' },
            { t: 'text', v: ", choisissez le type qui correspond à votre besoin, et personnalisez l'icône et les couleurs pour qu'elles correspondent à votre entreprise." },
          ],
        },
      ],
    },
  },
}
