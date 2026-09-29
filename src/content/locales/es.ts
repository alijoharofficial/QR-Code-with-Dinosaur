import type { PageContent } from '../pageContent'

export const content: PageContent = {
  chrome: {
    navHome: 'Inicio',
    navQrTools: 'Herramientas QR',
    navGuides: 'Guías',
    navServices: 'Servicios',
    navAbout: 'Acerca de',
    toolShort: {
      dinosaur: 'QR con dinosaurio',
      logo: 'QR con logo',
      custom: 'QR personalizado',
      menu: 'QR para menú',
      wifi: 'QR para WiFi',
    },
    footerToolsHeading: 'Herramientas',
    footerResourcesHeading: 'Recursos',
    footerServicesHeading: 'Servicios',
    footerCompanyHeading: 'Empresa',
    footerFaqLabel: 'Preguntas frecuentes',
    footerWhatWeOffer: 'Lo que ofrecemos',
    footerContact: 'Contacto',
    footerPrivacyPolicy: 'Política de privacidad',
    footerTerms: 'Términos',
    footerBuiltBy: 'Creado por',
    menuAriaLabel: 'Menú',
    switchToLightMode: 'Cambiar a modo claro',
    switchToDarkMode: 'Cambiar a modo oscuro',
    emailUsLabel: 'Escríbenos',
    getInTouchLabel: 'Ponte en contacto',
    questionsFeedback: '¿Tienes preguntas, comentarios o encontraste un error?',
    lastUpdatedLabel: 'Última actualización',
    faqHeadingDefault: 'Preguntas frecuentes',
    faqHeadingToolPage: 'Preguntas sobre esta página',
    relatedGuidesHeading: 'Guías relacionadas',
    backToGenerator: '← Volver al generador principal de códigos QR',
  },
  notFound: {
    pageTitle: 'Página no encontrada | Generador de códigos QR',
    eyebrow: '404',
    heading: 'Esta página se ha perdido',
    bodyWithPathPrefix: 'Ni siquiera el dinosaurio pudo escanear su camino hasta',
    bodyWithPathSuffix: '. Puede que se haya movido, o que el enlace esté desactualizado.',
    bodyWithoutPath:
      'Ni siquiera el dinosaurio pudo escanear su camino hasta esta página. Puede que se haya movido, o que el enlace esté desactualizado.',
    backToGenerator: 'Volver al generador',
    browseGuides: 'Explorar guías',
  },
  routes: {
    home: {
      title: 'Generador de códigos QR con logo de dinosaurio | Personalizado y gratis',
      description:
        'Crea un código QR gratis y personalizado con un logo de dinosaurio, un icono de animal o tu propia imagen. Códigos QR tiernos y escaneables en segundos, sin registro, funciona sin conexión.',
    },
    guidesIndex: {
      title: 'Guías y consejos sobre códigos QR | Generador de códigos QR',
      description:
        'Guías prácticas y originales sobre códigos QR: cómo añadir un logo, códigos estáticos frente a dinámicos, si caducan, y códigos QR para pequeños negocios. Todo gratis de leer.',
      h1: 'Guías y consejos sobre códigos QR',
    },
    services: {
      title: 'Servicios | Generador de códigos QR',
      description:
        '¿Necesitas algo más que un código QR? Descubre los servicios web, de marca y de marketing que ofrece TECH24, el equipo detrás de este generador gratuito de códigos QR.',
    },
    about: {
      title: 'Acerca de | Generador de códigos QR',
      description:
        'Acerca de este generador gratuito de códigos QR: qué hace, cómo protege tus datos y quién lo creó y lo mantiene.',
    },
    contact: {
      title: 'Contacto | Generador de códigos QR',
      description:
        'Ponte en contacto sobre este generador gratuito de códigos QR: preguntas, comentarios o reportes de errores son bienvenidos.',
    },
    privacy: {
      title: 'Política de privacidad | Generador de códigos QR',
      description:
        'Cómo maneja tus datos este generador de códigos QR: qué se queda en tu navegador, qué analíticas se usan y qué nunca se recopila.',
    },
    terms: {
      title: 'Términos de uso | Generador de códigos QR',
      description:
        'Los términos para usar este generador gratuito de códigos QR, incluyendo qué hace, qué no garantiza y cómo puede usarse.',
    },
  },
  home: {
    heroTitlePrefix: 'Generador de códigos QR con',
    heroTitleAccent: 'logo de dinosaurio',
    heroSubtitle:
      'Códigos QR gratuitos y personalizados con un dinosaurio, un mono, un tigre o tu propio logo: tiernos, escaneables y listos en segundos.',
    introPrefix: 'Este es un',
    introBold: 'generador de códigos QR personalizado',
    introSuffix:
      'gratuito que convierte cualquier enlace, red WiFi o tarjeta de contacto en un código escaneable, con un icono tierno de animal como un dinosaurio, un mono o un tigre, o tu propio logo. Cada código QR se crea por completo en tu navegador, se descarga en PNG o SVG, y funciona para siempre sin registro y sin marca de agua.',
    whatIsQrHeading: '¿Qué es un código QR?',
    whatIsQrBody:
      'Un código QR (respuesta rápida) es un pequeño patrón cuadrado que almacena datos que una cámara puede leer al instante, sin necesidad de app ni de escribir nada. Apunta la cámara de un teléfono hacia uno y lo decodifica directamente al enlace, la red WiFi o la tarjeta de contacto que contiene.',
    thisGeneratorSupports: 'Este generador admite',
    howItWorksSteps: [
      {
        title: 'Elige qué hace',
        body: 'Escoge un tipo: un enlace de sitio web, una red WiFi, una tarjeta de contacto, un menú y más, y completa los datos.',
      },
      {
        title: 'Elige un icono o logo',
        body: 'Selecciona un icono predefinido, incluyendo un dinosaurio, un mono o un tigre, o sube tu propia imagen de logo.',
      },
      {
        title: 'Personalízalo',
        body: 'Ajusta los colores, el estilo de los puntos y la forma hasta que combine con tu marca o la ocasión.',
      },
      {
        title: 'Descarga y escanea',
        body: 'Guárdalo como PNG o SVG, o cópialo directamente al portapapeles. Funciona de inmediato.',
      },
    ],
    featuresHeading: 'Características',
    features: [
      {
        title: 'Códigos QR gratis e ilimitados',
        body: 'Sin registro, sin marca de agua y sin límite en cuántos puedes crear.',
      },
      {
        title: 'Iconos tiernos de animales o tu propio logo',
        body: 'Un dinosaurio, un mono, un tigre, o sube cualquier imagen de logo que prefieras.',
      },
      {
        title: 'Totalmente personalizable',
        body: 'Colores, estilo de puntos y forma cuadrada o circular: hazlo coincidir con tu marca.',
      },
      {
        title: 'Diseñado para escanear de forma fiable',
        body: 'La corrección de errores alta mantiene cada código legible, incluso con un logo encima.',
      },
      {
        title: 'Privado por defecto',
        body: 'Todo se ejecuta en tu navegador. Nada de lo que introduces se envía a un servidor.',
      },
      {
        title: 'Descargas en PNG o SVG',
        body: 'Obtén un PNG para compartir rápido, o un SVG que se mantiene nítido a cualquier tamaño de impresión.',
      },
    ],
    moreWaysToUseIt: 'Más formas de usarlo',
    faq: [
      {
        question: '¿Este generador de códigos QR es realmente gratis?',
        answer:
          'Sí. Cada código QR que creas aquí es completamente gratis, sin registro, sin marca de agua y sin límite en cuántos puedes crear. No hay un nivel premium que esconda mejores funciones: los iconos de dinosaurio, mono y tigre, todos los colores y estilos de puntos, y ambos formatos de descarga son gratis para cualquiera.',
      },
      {
        question: '¿Funciona sin conexión a internet?',
        answer:
          'Una vez que la página ha cargado, sí. El código QR se genera por completo en tu navegador usando JavaScript, así que crear y descargar códigos no necesita conexión a internet. Solo necesitas estar en línea la primera vez que cargas la página (o si estás pegando una URL en vivo que quieres comprobar).',
      },
      {
        question: '¿Puedo añadir un logo o un icono de dinosaurio a mi código QR?',
        answer:
          'Sí, esa es toda la idea. Elige uno de los iconos de animales predefinidos (un dinosaurio en pixel art, un mono o un tigre), un icono social o de acción, o sube tu propia imagen de logo. Se coloca en una zona segura blanca protegida en el centro del código, y el QR se genera con corrección de errores alta para que siga escaneando limpiamente.',
      },
      {
        question: '¿Los códigos QR son permanentes, o caducan?',
        answer:
          'Los códigos son estáticos, lo que significa que los datos (un enlace, una contraseña de WiFi, una tarjeta de contacto, etc.) se codifican directamente en el patrón del propio código QR. No hay ningún servicio de redirección de terceros en medio, ninguna suscripción, y nada que pueda caducar o desactivarse más adelante. Una vez que lo descargas, funciona mientras exista la imagen del código QR.',
      },
      {
        question: '¿En qué formatos de archivo puedo descargar mi código QR?',
        answer:
          'Puedes descargarlo como PNG, que es el formato más fácil para compartir en línea o imprimir a un tamaño fijo, o como SVG, un formato vectorial que se mantiene perfectamente nítido sin importar lo grande que lo imprimas. Útil para pancartas, señalización o embalajes. También puedes copiar el PNG directamente al portapapeles.',
      },
      {
        question: '¿Necesito crear una cuenta o instalar una app?',
        answer:
          'No. No hay registro, no hay inicio de sesión y no hay nada que instalar. Abre la página, diseña tu código QR y descárgalo. Ese es todo el proceso.',
      },
      {
        question: '¿Mis datos o el logo que subo se envían a un servidor?',
        answer:
          'No. Todo, codificar tus datos, dar estilo al código QR y leer un archivo de logo subido, ocurre localmente en tu navegador. Nada de lo que escribes o subes se transmite a un servidor ni se almacena en ningún lugar.',
      },
      {
        question: '¿Un código QR con un icono o logo tierno seguirá escaneando de forma fiable?',
        answer:
          'Sí, si se construye de la manera correcta. Cada código aquí usa el nivel de corrección de errores H, el nivel más alto que admite el estándar QR, lo que significa que hasta un 30% aproximadamente del código puede estar cubierto o dañado y aun así se podrá escanear. El icono central está dimensionado para caber dentro de ese margen seguro, así que añadir un dinosaurio o tu propio logo no rompe la capacidad de escaneo.',
      },
    ],
    guidesAndTipsHeading: 'Guías y consejos',
    viewAllGuides: 'Ver todas las guías →',
  },
  toolPages: {
    dinosaur: {
      title: 'Código QR con logo de dinosaurio: generador gratis',
      description:
        'Crea un código QR gratis con un logo de dinosaurio en el centro. Elige colores y estilo de puntos, luego descarga en PNG o SVG. Sin registro, funciona sin conexión.',
      h1: 'Código QR con logo de dinosaurio',
      subtitle:
        'Un código QR divertido e inconfundible con un dinosaurio en pixel art en el centro, gratis y listo en segundos.',
      body: [
        'Un icono de dinosaurio convierte un código QR normal en algo que la gente realmente se detiene a mirar, lo cual importa cuando quieres un código que se escanee en lugar de ignorarse, en un póster, una pegatina, una invitación de fiesta o donde quiera que busques un toque de personalidad.',
        'Esta página abre el generador con el icono de dinosaurio en pixel art ya seleccionado, en el tema verde característico del sitio. Todo lo demás funciona exactamente igual que en la herramienta completa: cambia el tipo de QR, sustituye el icono por un mono o un tigre, sube tu propio logo, o ajusta los colores, el estilo de los puntos y la forma.',
      ],
      faq: [
        {
          question: '¿El logo de dinosaurio afecta a lo bien que escanea el código?',
          answer:
            'No. Cada código aquí se genera con el nivel de corrección de errores más alto que admite el estándar QR, y el icono se sitúa dentro de una zona segura protegida que nunca toca los tres cuadrados de localización de las esquinas de los que dependen los escáneres.',
        },
        {
          question: '¿Puedo cambiar a otro animal o a mi propio logo?',
          answer:
            'Sí, el selector de iconos también incluye un mono y un tigre, o puedes subir tu propia imagen de logo en cualquier momento. El dinosaurio es solo el predeterminado en esta página.',
        },
      ],
    },
    logo: {
      title: 'Código QR con logo: añade tu propia imagen, gratis',
      description:
        'Sube tu propio logo y genera un código QR que siga escaneando de forma fiable. Códigos QR gratuitos, con corrección de errores alta, con tu logo en el centro.',
      h1: 'Código QR con logo',
      subtitle:
        'Sube tu propio logo, mantenlo escaneable y descarga un código QR que realmente parezca tuyo.',
      body: [
        'Un logo en el centro de un código QR es la forma más rápida de hacerlo reconociblemente tuyo, en una tarjeta de presentación, una etiqueta de producto, una factura o una pegatina de escaparate. El truco está en hacerlo sin romper la capacidad de escaneo, que es exactamente para lo que está pensada esta página.',
        'El selector de iconos se abre directamente en la pestaña de subida. Suelta tu archivo de logo y el generador se encarga del resto: ajusta el tamaño de la imagen para que quepa en una zona segura protegida y codifica el código con el nivel de corrección de errores más alto, de modo que cubrir parte del patrón con tu logo no impide que se escanee.',
      ],
      faq: [
        {
          question: '¿Qué formatos de imagen puedo subir como logo?',
          answer:
            'Cualquier formato de imagen común (PNG, JPG, SVG y similares) de hasta 5 MB. Se queda enteramente en tu navegador; nada se sube a un servidor.',
        },
        {
          question: '¿Mi logo hará que el código sea más difícil de escanear?',
          answer:
            'No, si se mantiene dentro de la zona segura que le da el generador, lo cual hace por defecto. Se usa automáticamente corrección de errores alta (nivel H), de modo que aproximadamente el 30% del código puede estar cubierto y aun así se lee correctamente.',
        },
      ],
    },
    custom: {
      title: 'Generador de códigos QR personalizado: colores, forma y estilo',
      description:
        'Diseña un código QR totalmente personalizado: elige colores, estilo de puntos y forma, añade un icono o logo, y descárgalo gratis en PNG o SVG. No se requiere registro.',
      h1: 'Generador de códigos QR personalizado',
      subtitle:
        'Colores, estilo de puntos, forma de las esquinas e icono: personaliza cada parte de tu código QR y mantenlo totalmente escaneable.',
      body: [
        'Un generador de códigos QR personalizado debería dejarte cambiar de verdad algo más que el contenido que codifica. Aquí puedes ajustar el estilo de los puntos (cuadrado, redondeado o un aspecto más suave), alternar entre un marco exterior cuadrado o circular, elegir entre varios temas de color, y añadir un icono o tu propio logo, todo sin afectar la fiabilidad del código.',
        'Cada combinación se genera con el mismo nivel alto de corrección de errores, así que un código redondeado, colorido y con logo escanea exactamente tan bien como uno sencillo en blanco y negro.',
      ],
      faq: [
        {
          question: '¿Puedo cambiar el color de un código QR sin romperlo?',
          answer:
            'Sí, siempre que haya suficiente contraste entre el color de los puntos y el fondo. Dos colores de brillo similar es la principal forma en que un cambio de color perjudica la capacidad de escaneo.',
        },
        {
          question: '¿Qué más puedo personalizar además del color?',
          answer:
            'El estilo de los puntos, la forma de las esquinas (cuadrada o circular) y el icono o logo central, además, claro, de lo que el código codifica realmente: un enlace, una red WiFi, una tarjeta de contacto y más.',
        },
      ],
    },
    menu: {
      title: 'Código QR para menú de restaurante: generador gratis',
      description:
        'Crea un código QR para el menú de tu restaurante o cafetería en segundos. Enlaza tu menú en línea, añade tu logo y descárgalo gratis en PNG o SVG.',
      h1: 'Código QR para menú de restaurante',
      subtitle:
        'Enlaza tu menú, elige un icono que combine con tu restaurante, y descarga un código listo para exhibidores de mesa o pósteres.',
      body: [
        'Un código QR de menú solo necesita un enlace a tu menú alojado: una página de tu sitio web, un PDF, o un simple creador de páginas, todos funcionan. Esta página inicia el generador en el tipo "Sitio web" con un icono de menú ya seleccionado, listo para ese enlace.',
        'Como son códigos estáticos, el código QR en sí nunca necesita cambiar aunque tu menú sí lo haga. Actualiza la página detrás del enlace y cada exhibidor de mesa o pegatina que ya hayas impreso apuntará automáticamente a la nueva versión. Ajusta el tamaño según la distancia desde la que se leerá, y mantén limpio el fondo detrás del código para que escanee rápido incluso con poca luz.',
      ],
      faq: [
        {
          question: '¿Necesito reimprimir el código si actualizo el menú?',
          answer:
            'No, siempre que el menú se mantenga en el mismo enlace, actualizar lo que hay en esa página (precios, especiales, platos) no requiere un nuevo código QR. Solo necesitas un código nuevo si el enlace en sí cambia.',
        },
        {
          question: '¿A qué tamaño debería imprimir el código?',
          answer:
            'Como guía aproximada, mantén el código impreso en al menos unos 2 cm por metro de distancia de escaneo esperada. Un exhibidor de mesa que se lee a la distancia del brazo puede ser más pequeño que un póster pensado para escanearse desde el otro lado de una sala.',
        },
      ],
    },
    wifi: {
      title: 'Código QR para WiFi: generador gratis para compartir red',
      description:
        'Genera un código QR gratis para WiFi para que tus invitados se conecten con un escaneo en lugar de escribir una contraseña. Sin registro, funciona enteramente en tu navegador.',
      h1: 'Código QR para WiFi',
      subtitle:
        'Codifica el nombre y la contraseña de tu red WiFi en un solo código: tus invitados lo escanean y se conectan, sin necesidad de escribir nada.',
      body: [
        'Un código QR de WiFi codifica juntos el nombre y la contraseña de tu red, así que la cámara de un teléfono puede leerlo y ofrecer conectarse directamente, sin escribir una contraseña larga desde una nota adhesiva. Esta página abre el generador con el tipo WiFi ya seleccionado.',
        'Esto es especialmente útil para cafeterías, salas de espera, alquileres de corta estancia y oficinas con visitantes. Los datos de la red se quedan codificados en el propio código impreso o mostrado; nada se envía a ningún sitio cuando lo generas.',
      ],
      faq: [
        {
          question: '¿Es seguro poner mi contraseña de WiFi en un código QR?',
          answer:
            'La contraseña se codifica directamente en el código y solo se decodifica localmente por quien lo escanea, la misma información que cualquiera podría leer en una nota adhesiva o en la etiqueta del router. Trata el código impreso de la misma forma en que tratarías escribir la contraseña en un lugar visible.',
        },
        {
          question: '¿Esto funciona con redes ocultas?',
          answer:
            'Sí, el tipo WiFi incluye una opción para marcar la red como oculta, de modo que los dispositivos que escanean sepan que deben conectarse por nombre en lugar de por difusión.',
        },
      ],
    },
  },
  guidesIndex: {
    intro:
      'Guías prácticas y originales para sacarle el máximo partido a los códigos QR, desde añadir un logo sin romper la capacidad de escaneo hasta elegir el tipo de código adecuado para tu caso de uso.',
    lookingForTool: '¿Buscas la herramienta en sí?',
    goToGenerator: 'Ir al generador de códigos QR',
  },
  services: {
    introPrefix: 'Este generador de códigos QR es gratis y siempre lo será. Está creado y mantenido por',
    introSuffix:
      ', un pequeño equipo de marketing y desarrollo web impulsado por IA. Si eres un pequeño negocio y alguna vez necesitas algo más que un código QR, aquí tienes un resumen en lenguaje sencillo de en qué trabajan.',
    categories: [
      {
        title: 'Sitios web',
        body: 'Diseño y desarrollo para sitios de pequeños negocios y de marketing, el mismo enfoque que se usó para que esta herramienta fuera rápida y sencilla de usar.',
      },
      {
        title: 'Identidad de marca',
        body: 'Logos, sistemas de color e identidad visual para negocios que quieren verse tan cuidados como realmente son.',
      },
      {
        title: 'Marketing',
        body: 'Apoyo de marketing continuo, construido con el mismo flujo de trabajo asistido por IA que se usa para operar esta herramienta gratuita.',
      },
      {
        title: 'Comercio electrónico',
        body: 'Tiendas en línea rápidas de explorar y fáciles para completar la compra, en cualquier dispositivo.',
      },
      {
        title: 'SEO',
        body: 'El mismo enfoque técnico y de contenido usado para que esta herramienta gratuita se encuentre en las búsquedas, aplicado a tu sitio.',
      },
      {
        title: 'Soporte continuo',
        body: 'Un equipo que mantiene todo funcionando después del lanzamiento, no solo en la entrega.',
      },
    ],
    process: [
      { title: 'Hablarlo con calma', body: 'Una conversación breve y en lenguaje sencillo sobre lo que realmente necesitas.' },
      { title: 'Ver un plan', body: 'Un alcance y un precio claros antes de que empiece nada, sin sorpresas después.' },
      {
        title: 'Lanzar y dar soporte',
        body: 'Lanzamiento y luego ayuda continua, la misma fiabilidad a la que aspira esta herramienta gratuita.',
      },
    ],
    closingPrefix: 'Todos los detalles, incluyendo los paquetes actuales, están en',
  },
  about: {
    h1: 'Acerca de este generador de códigos QR',
    subtitle:
      'Una herramienta gratuita para crear códigos QR personalizados con un icono de dinosaurio, mono o tigre, o tu propio logo, todo dentro de tu navegador.',
    highlights: [
      {
        title: 'Sin registro, nunca',
        body: 'Abre la página, crea un código, descárgalo. Sin cuenta, sin correo, sin contraseña.',
      },
      {
        title: 'Ilimitado, sin marca de agua',
        body: 'Crea tantos códigos QR como quieras. Cada uno se descarga limpio.',
      },
      {
        title: 'Estático y permanente',
        body: 'Tus datos quedan incorporados en el propio código, así que sigue funcionando mientras exista la imagen.',
      },
    ],
    privacyHeading: 'Todo se queda en tu dispositivo',
    privacyPoints: [
      'Codificar tus datos ocurre en tu navegador',
      'Dar estilo al código ocurre en tu navegador',
      'Leer un logo subido ocurre en tu navegador',
      'Nada de lo que escribes o subes se envía jamás a un servidor',
    ],
    privacyClosingPrefix: 'Consulta la',
    privacyClosingSuffix: 'para todos los detalles, incluidas las analíticas usadas para entender cómo se usa el sitio.',
    tech24Prefix: 'Esta herramienta gratuita fue creada y es mantenida por',
    tech24Mid:
      ', un pequeño equipo de marketing y desarrollo web impulsado por IA. Si alguna vez necesitas algo más que un código QR, un sitio web, identidad de marca o marketing, puedes ver',
    tech24OfferLabel: 'lo que ofrecen',
  },
  contact: {
    h1: 'Contacto',
    intro:
      '¿Tienes preguntas sobre cómo funciona el generador, comentarios, o encontraste algo que no escanea bien? Envía un correo y te responderemos.',
  },
  privacy: {
    h1: 'Política de privacidad',
    sections: [
      {
        heading: 'Qué hace esta herramienta con tus datos',
        body: 'Generar un código QR, incluyendo cualquier enlace, contraseña de WiFi, datos de contacto u otro contenido que escribas, y cualquier imagen de logo que subas, ocurre enteramente en tu navegador. Nada de eso se envía, ni se almacena, en ningún servidor. Cerrar o recargar la página lo borra.',
      },
      {
        heading: 'Qué almacenamos localmente',
        body: 'Tu tema (claro u oscuro) y tu preferencia de idioma se guardan en el almacenamiento local de tu navegador para que persistan entre visitas. Esto se queda en tu dispositivo y nunca se transmite a ningún lugar.',
      },
      {
        heading: 'Analítica',
        body: 'Este sitio usa Google Tag Manager y Microsoft Clarity para entender, de forma agregada, cómo se usa el sitio, por ejemplo qué páginas se visitan y aproximadamente cómo interactúa la gente con ellas. Estas herramientas pueden establecer cookies y recopilar información técnica estándar (como el tipo de navegador y una ubicación aproximada derivada de la dirección IP). No reciben nada de lo que escribas en el generador de códigos QR en sí.',
      },
      {
        heading: 'Tipografías',
        body: 'Este sitio carga la tipografía Inter desde Google Fonts, lo que implica una solicitud a los servidores de Google al cargar la página.',
      },
      {
        heading: 'Sin cuentas, sin venta de datos',
        body: 'No hay sistema de registro ni de cuentas, así que no hay datos de cuenta que proteger ni que perder. No vendemos ningún dato a terceros.',
      },
      {
        heading: 'Preguntas',
        bodyPrefix: 'Para cualquier pregunta sobre privacidad, consulta los',
        bodySuffixOr: 'o escribe a',
      },
    ],
  },
  terms: {
    h1: 'Términos de uso',
    sections: [
      {
        heading: 'La herramienta',
        body: 'Este sitio ofrece un generador de códigos QR gratuito que funciona enteramente en tu navegador. Puedes usarlo para generar un número ilimitado de códigos QR con fines personales o comerciales, sin costo.',
      },
      {
        heading: 'Tu responsabilidad',
        body: 'Eres responsable del contenido que codificas en un código QR y de comprobar que un código generado escanea correctamente antes de confiar en él, por ejemplo, antes de imprimirlo a gran escala. Recomendamos escanear un código con más de un dispositivo antes de distribuirlo ampliamente.',
      },
      {
        heading: 'Sin garantía',
        body: 'Esta herramienta se ofrece "tal cual", sin garantía de ningún tipo. Hacemos lo posible por mantenerla precisa y fiable, pero no garantizamos disponibilidad ininterrumpida ni que cada código generado vaya a escanear en cualquier condición (por ejemplo, en una impresión dañada, mal impresa o de contraste extremadamente bajo).',
      },
      {
        heading: 'Uso aceptable',
        body: 'No uses esta herramienta para generar códigos QR de contenido ilegal, distribución de malware, phishing, o cualquier cosa destinada a engañar o dañar a las personas que escaneen el código resultante.',
      },
      {
        heading: 'Cambios',
        body: 'Estos términos pueden actualizarse de vez en cuando; la versión vigente es siempre la que se aplica.',
      },
      {
        heading: 'Preguntas',
        bodyPrefix: 'Consulta la',
        bodySuffixOr: 'o escribe a',
      },
    ],
  },
  guides: {
    logo: {
      title: 'Cómo hacer un código QR con logo (guía gratuita)',
      description:
        'Aprende a hacer un código QR con un logo en el centro que siga escaneando de forma fiable, paso a paso, incluyendo corrección de errores, tamaño y consejos de contraste.',
      h1: 'Cómo hacer un código QR con logo',
      excerpt:
        'Un logo en el centro hace que un código QR se reconozca al instante como tuyo. Así se añade uno sin romper la capacidad de escaneo.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Un código QR sencillo en blanco y negro funciona, pero no parece pertenecer a nadie. Coloca tu logo, o un icono divertido como un pequeño dinosaurio, en el centro y ese mismo código se siente al instante como parte de tu marca o tu evento. La buena noticia es que un ',
            },
            { t: 'b', v: 'código QR con logo' },
            {
              t: 'text',
              v: ' no es más difícil de hacer que uno sencillo, siempre que entiendas la única regla que realmente importa: la corrección de errores.',
            },
          ],
        },
        { type: 'h2', text: 'Por qué puedes cubrir parte de un código QR y aun así sigue funcionando' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Los códigos QR se construyen con una capa de corrección de errores incorporada en el propio estándar. Según el nivel elegido al generar el código, un código QR puede perder entre aproximadamente un 7% y un 30% de su patrón (cubierto por un logo, manchado, impreso sobre una superficie arrugada) y un lector aun así podrá reconstruir los datos originales. El nivel más alto, llamado nivel H, tolera aproximadamente un 30% de daño u obstrucción. Ese margen del 30% es exactamente lo que hace seguro colocar un logo en medio de un código QR, siempre que el generador que uses efectivamente aplique ese nivel. Esta herramienta siempre codifica en nivel H por esa razón.',
            },
          ],
        },
        { type: 'h2', text: 'Paso a paso: añadir un logo a tu código QR' },
        {
          type: 'ol',
          items: [
            [
              { t: 'b', v: 'Elige qué debe hacer el código QR.' },
              { t: 'text', v: ' En el ' },
              { t: 'link', v: 'generador de códigos QR con logo', to: '/qr-code-with-logo' },
              { t: 'text', v: ', elige un tipo (un enlace de sitio web, una red WiFi, una tarjeta de contacto, etc.) y completa los datos.' },
            ],
            [
              { t: 'b', v: 'Abre el selector de iconos.' },
              {
                t: 'text',
                v: ' Selecciona "Subir logo" y elige tu propio archivo de imagen, o escoge uno de los iconos predefinidos si no tienes a mano un archivo de logo.',
              },
            ],
            [
              { t: 'b', v: 'Revisa la vista previa.' },
              {
                t: 'text',
                v: ' El logo se coloca automáticamente dentro de un círculo blanco protegido en el centro del código, así que nunca toca los cuadrados de localización (los tres grandes cuadrados de las esquinas que un lector usa para orientarse); esa es la única parte de un código QR que nunca debería cubrirse.',
              },
            ],
            [
              { t: 'b', v: 'Elige colores y descarga.' },
              {
                t: 'text',
                v: ' Ajusta el estilo de los puntos y el tema de color si quieres, y luego descarga en PNG para compartir rápido o en SVG si planeas imprimirlo en gran tamaño.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'Consejos para un logo que escanee de forma fiable siempre' },
        {
          type: 'ul',
          items: [
            [
              { t: 'b', v: 'Mantén un contraste alto.' },
              {
                t: 'text',
                v: ' Un logo oscuro sobre el fondo claro del código QR (o viceversa) escanea mucho más fiablemente que uno de bajo contraste.',
              },
            ],
            [
              { t: 'b', v: 'No agrandes demasiado el logo.' },
              {
                t: 'text',
                v: ' Un buen generador limita cuánto puede cubrir tu logo del código, pero si estás construyendo el tuyo propio, mantenerte por debajo de aproximadamente un 20-25% del área total es un objetivo seguro.',
              },
            ],
            [
              { t: 'b', v: 'Prueba antes de imprimir en cantidad.' },
              {
                t: 'text',
                v: ' Escanea el código QR descargado con dos o tres teléfonos distintos antes de encargar señalización, exhibidores de mesa o embalajes. Toma diez segundos y evita una reimpresión.',
              },
            ],
            [
              { t: 'b', v: 'Deja en paz la zona de silencio.' },
              {
                t: 'text',
                v: ' El margen en blanco alrededor del exterior de un código QR no es espacio desperdiciado; los lectores lo usan para detectar dónde empieza y termina el código. No lo recortes ajustadamente al colocar el código en un diseño.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'Errores comunes' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'El fallo más común no es el logo en sí. Es usar un generador de QR que no eleva el nivel de corrección de errores cuando se añade un logo. Si alguna vez escaneaste un código QR con logo que simplemente no se leía, esa es casi siempre la razón. El segundo error más común es elegir colores casi idénticos para los puntos y el fondo (como puntos gris claro sobre blanco), lo que perjudica la capacidad de escaneo incluso sin ningún logo.',
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Una vez resueltas esas dos cosas, un código QR con logo es tan fiable como uno sencillo, y considerablemente más memorable. Pruébalo en nuestro ',
            },
            { t: 'link', v: 'generador de QR con logo →', to: '/qr-code-with-logo' },
          ],
        },
      ],
    },
    staticVsDynamic: {
      title: 'Códigos QR estáticos frente a dinámicos: ¿cuál es la diferencia?',
      description:
        'Los códigos QR estáticos codifican los datos directamente y nunca caducan. Los códigos dinámicos redirigen a través de un servicio y se pueden editar o rastrear, por un precio. Aquí está el equilibrio.',
      h1: 'Códigos QR estáticos frente a dinámicos: ¿cuál es la diferencia?',
      excerpt: 'Un tipo es gratis y permanente. El otro se puede editar después de imprimirlo, mediante suscripción. Así se elige.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: '"Estáticos" y "dinámicos" son dos tipos de códigos QR que se ven idénticos en la superficie (el mismo cuadrado en blanco y negro, o colorido, decorado con logo), pero funcionan de maneras fundamentalmente distintas por dentro. Entender la diferencia importa antes de imprimir unos cientos de ellos.',
            },
          ],
        },
        { type: 'h2', text: 'Códigos QR estáticos' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Un código QR estático tiene tus datos reales (una URL, una contraseña de WiFi, una tarjeta de contacto, texto plano, lo que hayas elegido) codificados directamente en el patrón de módulos en blanco y negro. Cuando un teléfono lo escanea, lee esos datos directamente del propio código. No hay ningún servidor en medio, ninguna cuenta detrás, y nada que pueda desconectarse o cerrarse más adelante. Funciona exactamente igual el día que lo imprimes que diez años después. Este es el tipo de código QR que crea este generador: constrúyelo una vez, y es tuyo gratis, para siempre. Consulta ',
            },
            { t: 'link', v: '¿los códigos QR caducan?', to: '/guides/do-qr-codes-expire' },
            { t: 'text', v: ' para más detalles sobre lo que eso significa exactamente en la práctica.' },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'El equilibrio es que un código estático es fijo. Si codificaste un enlace y más adelante necesitas que ese código apunte a otro lugar, tienes que generar e imprimir un código nuevo; no puedes editar lo que ya está incorporado en el patrón.',
            },
          ],
        },
        { type: 'h2', text: 'Códigos QR dinámicos' },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Un código QR dinámico, en cambio, codifica un enlace corto de redirección que pertenece a un servicio de terceros (por ejemplo, algo como ' },
            { t: 'code', v: 'qr.example.com/abc123' },
            {
              t: 'text',
              v: '). Al escanearse, ese enlace corto redirige a la URL de destino que hayas configurado, y como el destino de la redirección vive en el servidor del servicio en lugar de dentro del código, puedes cambiar el destino en cualquier momento sin reimprimir nada. La mayoría de los servicios que ofrecen esto también proporcionan analíticas de escaneo (cuántos escaneos, aproximadamente cuándo y dónde).',
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Esa flexibilidad es real, pero viene con condiciones: los códigos dinámicos normalmente requieren una cuenta con el servicio que aloja la redirección, y muchos proveedores imponen un límite de escaneos o un límite de tiempo en su nivel gratuito, después del cual el código deja de funcionar o necesita una suscripción de pago para seguir redirigiendo. Si ese servicio alguna vez cierra o dejas de pagarlo, cada código dinámico que ya hayas impreso se rompe en silencio, aunque el cuadrado impreso se vea igual que siempre.',
            },
          ],
        },
        { type: 'h2', text: '¿Cuál deberías usar?' },
        {
          type: 'table',
          headers: ['Situación', 'Mejor opción'],
          rows: [
            ['Un enlace, red WiFi o tarjeta de contacto que no va a cambiar', 'Estático: gratis, permanente, sin necesidad de cuenta'],
            ['Impreso una sola vez para un evento puntual o una tirada de menú única', 'Estático: nada que mantener después'],
            ['Necesitas analíticas de escaneo (cuántos, cuándo)', 'Dinámico: requiere un servicio de pago o basado en cuenta'],
            ['El enlace de destino puede cambiar tras imprimir miles de copias', 'Dinámico: puede valer la pena la suscripción a esa escala'],
          ],
        },
        { type: 'h2', text: 'El término medio práctico' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Para la mayoría de los usos individuales y de pequeños negocios (menús, acceso a WiFi, invitaciones a eventos, tarjetas de presentación, embalajes de productos, enlaces sociales), un código estático que apunta a un enlace que tú controlas (tu propio sitio web, una página que puedes editar cuando quieras) te da la mayor parte del beneficio de un código dinámico sin suscripción. No puedes cambiar el destino del código QR sin reimprimirlo, pero ',
            },
            { t: 'i', v: 'sí puedes' },
            {
              t: 'text',
              v: ' cambiar lo que se publica en ese destino cuando quieras, ya que el código simplemente apunta a un enlace, no a contenido fijo.',
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Esta herramienta genera códigos QR estáticos con un icono o logo personalizado, en los colores y la forma que elijas, descargables en PNG o SVG. Pruébala en nuestro ',
            },
            { t: 'link', v: 'generador de códigos QR personalizado →', to: '/custom-qr-code' },
          ],
        },
      ],
    },
    doQrCodesExpire: {
      title: '¿Los códigos QR caducan? La respuesta honesta',
      description:
        'Un código QR creado con un generador gratuito como este no caduca por sí solo. Esto es lo que realmente puede hacer que deje de funcionar, y cómo asegurarte de que el tuyo siga funcionando.',
      h1: '¿Los códigos QR caducan?',
      excerpt: 'El código en sí nunca caduca, pero unas pocas cosas sí pueden impedir que funcione. Esto es lo que realmente ocurre.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Respuesta corta: no, un código QR en sí no caduca. El patrón de cuadrados blancos y negros es solo una forma de codificar datos. No tiene un reloj, una conexión a servidor, ni una suscripción asociada. Una vez generado, es una imagen estática, y las imágenes estáticas no se echan a perder. Pero esa no es toda la historia, y vale la pena entender las excepciones antes de imprimir uno en algún lugar permanente.',
            },
          ],
        },
        { type: 'h2', text: 'Por qué un código QR estático no caduca' },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Un código QR creado con una herramienta gratuita como esta es un código ' },
            { t: 'b', v: 'estático' },
            {
              t: 'text',
              v: ': lo que sea que hayas escrito (un enlace, una contraseña de WiFi, una tarjeta de contacto) se codifica directamente en el patrón del código. No interviene ningún servidor de terceros al leerlo. Un lector escanea el patrón y reconstruye los datos originales en el acto, igual que lo habría hecho el primer día. Consulta ',
            },
            { t: 'link', v: 'códigos QR estáticos frente a dinámicos', to: '/guides/static-vs-dynamic-qr-codes' },
            {
              t: 'text',
              v: ' para el desglose completo de en qué se diferencia esto de los códigos "dinámicos" que venden algunos servicios de pago, que pasan por un enlace de redirección que ',
            },
            { t: 'i', v: 'sí' },
            { t: 'text', v: ' se puede desactivar.' },
          ],
        },
        { type: 'h2', text: 'Qué puede realmente hacer que un código QR deje de funcionar' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Si un código QR que creaste hace meses o años de repente "deja de funcionar", el código en sí casi nunca cambió. En su lugar, ocurrió una de estas cosas:',
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              { t: 'b', v: 'El destino desapareció.' },
              {
                t: 'text',
                v: ' Si el código codifica un enlace, escanearlo sigue funcionando bien, pero el teléfono simplemente llega a una página rota si ese sitio web, ficha de producto o enlace de menú se dio de baja o se movió. Esta es, con diferencia, la causa más común, y en realidad no es que el código QR "caduque"; es que la página detrás de él desaparece.',
              },
            ],
            [
              { t: 'b', v: 'Un dominio venció.' },
              {
                t: 'text',
                v: ' Si el enlace apunta a un dominio que no se renovó, todo el sitio detrás de él se apaga, arrastrando consigo a cada código QR que apuntaba a él.',
              },
            ],
            [
              { t: 'b', v: 'Era un código dinámico en un servicio que cerró o dejó de pagarse.' },
              {
                t: 'text',
                v: ' Como se explica en la guía de estáticos frente a dinámicos, este es el único caso real en el que un código QR puede pasar de funcionar a estar roto sin que la imagen impresa cambie.',
              },
            ],
            [
              { t: 'b', v: 'La copia física se deterioró.' },
              {
                t: 'text',
                v: ' Una impresión desteñida, rota o muy rayada puede volverse imposible de escanear. Esto tampoco es que el código "caduque", solo desgaste normal del material sobre el que está impreso.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'Cómo hacer un código QR que siga funcionando' },
        {
          type: 'ol',
          items: [
            [
              { t: 'b', v: 'Apúntalo a un enlace que controles.' },
              { t: 'text', v: ' Tu propio sitio web o una página que puedas seguir renovando es mejor que una ficha de terceros que no controlas.' },
            ],
            [
              { t: 'b', v: 'Mantén tu dominio renovado' },
              { t: 'text', v: ': si el código apunta a tu propio sitio, configúralo para que se renueve automáticamente si tu registrador lo permite.' },
            ],
            [
              { t: 'b', v: 'Prefiere lo estático frente a lo dinámico' },
              {
                t: 'text',
                v: ' para cualquier cosa que quieras que dure indefinidamente sin pago continuo, a menos que necesites específicamente analíticas de escaneo o la posibilidad de redirigir el código a otro lugar más adelante.',
              },
            ],
            [
              { t: 'b', v: 'Imprime a un tamaño razonable y protégelo.' },
              { t: 'text', v: ' Lamina o sella los códigos que se van a manipular con frecuencia o que estarán expuestos a la intemperie.' },
            ],
            [
              { t: 'b', v: 'Usa corrección de errores alta' },
              {
                t: 'text',
                v: ', para que un desgaste menor, una mancha o un logo en el centro no impidan que escanee. Cada código de esta herramienta usa el nivel de corrección de errores más alto exactamente por esta razón.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'La versión corta' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Un código QR generado aquí no tiene fecha de caducidad, ni suscripción, ni ningún servicio de terceros que pueda desactivarlo en silencio. Lo que en la práctica rompe un código QR es casi siempre el destino detrás de él, no el código. Mantén el enlace vivo, y el código seguirá siendo escaneable indefinidamente. Crea uno en nuestro ',
            },
            { t: 'link', v: 'generador de códigos QR personalizado →', to: '/custom-qr-code' },
          ],
        },
      ],
    },
    smallBusiness: {
      title: 'Códigos QR para pequeños negocios: 6 usos prácticos',
      description:
        'Desde enlaces de pago hasta embalajes, tarjetas de presentación hasta reseñas: formas prácticas y de bajo costo en que un pequeño negocio puede aprovechar un código QR gratis.',
      h1: 'Códigos QR para pequeños negocios',
      excerpt: 'Formas prácticas y de bajo costo en que un pequeño negocio puede aprovechar un código QR, más allá del menú obvio.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Un código QR es una de las herramientas de marketing más baratas que tiene un pequeño negocio: gratis de generar, gratis de imprimir junto a lo que ya estés imprimiendo, y convierte cualquier superficie física (un recibo, una pegatina de escaparate, un paquete) en un enlace a algo en línea. Dos de los usos más comunes, menús y acceso a WiFi, tienen sus propias herramientas dedicadas aquí: consulta ',
            },
            { t: 'link', v: 'códigos QR para menús', to: '/qr-code-for-menu' },
            { t: 'text', v: ' y ' },
            { t: 'link', v: 'códigos QR para WiFi', to: '/qr-code-for-wifi' },
            { t: 'text', v: '. Esta guía cubre el resto.' },
          ],
        },
        { type: 'h2', text: '1. Enlaces de pago y propinas' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Un código que abre un enlace de pago o una página de propinas es común en recibos, en mostradores, o en embalajes de entrega. Mantén este especialmente con alto contraste y pruébalo a fondo, ya que los clientes se rinden rápido con un código que no escanea al primer intento cuando hay dinero de por medio.',
            },
          ],
        },
        { type: 'h2', text: '2. Perfiles sociales y enlaces de reseñas' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Un único código cerca de la caja o en un recibo que enlaza a tu página de reseñas de Google Business o Yelp elimina la mayor barrera para conseguir reseñas: tener que buscarte. Un segundo código, o una página de enlaces en la biografía, puede agrupar tus perfiles sociales.',
            },
          ],
        },
        { type: 'h2', text: '3. Tarjetas de presentación' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Un código QR en una tarjeta de presentación que codifica una tarjeta de contacto (esta herramienta tiene un tipo dedicado para eso) permite que alguien guarde tu nombre, número y correo en su teléfono con un solo escaneo en lugar de escribirlo a mano más tarde, que es también justo cuando la mayoría de los contactos escritos a mano nunca llegan a guardarse.',
            },
          ],
        },
        { type: 'h2', text: '4. Embalaje de productos' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Un código en el embalaje puede enlazar a instrucciones de cuidado, un registro de garantía, una lista de ingredientes o alérgenos, o un video de "cómo usar esto": información que de otro modo necesitaría un folleto impreso. También es una forma natural de enlazar a una página de reseñas después de una compra.',
            },
          ],
        },
        { type: 'h2', text: '5. Volantes y pósteres de eventos' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Un código que enlaza directamente a una página de entradas o a un formulario de confirmación de asistencia en un volante elimina un paso entre que alguien vea tu póster y realmente se inscriba, en comparación con hacer que busque tu evento por nombre más tarde.',
            },
          ],
        },
        { type: 'h2', text: '6. Un código con marca y a juego' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Un código QR genérico parece que podría pertenecer a cualquiera. Elegir un icono distintivo o subir tu logo hace que tus códigos se reconozcan de un vistazo en recibos, embalajes y señalización. Prueba el ',
            },
            { t: 'link', v: 'generador de códigos QR personalizado', to: '/custom-qr-code' },
            { t: 'text', v: " para que combine con los colores y el estilo de tu marca, o el " },
            { t: 'link', v: 'generador con logo', to: '/qr-code-with-logo' },
            { t: 'text', v: ' para usar tu propio logo directamente.' },
          ],
        },
        { type: 'h2', text: 'Antes de imprimir en cantidad' },
        {
          type: 'ul',
          items: [
            [{ t: 'text', v: 'Escanea cada código con al menos dos teléfonos distintos primero.' }],
            [{ t: 'text', v: 'Mantén el contraste alto y evita cubrir los tres cuadrados de las esquinas.' }],
            [
              { t: 'text', v: 'Recuerda que estos son códigos estáticos. Consulta ' },
              { t: 'link', v: 'códigos QR estáticos frente a dinámicos', to: '/guides/static-vs-dynamic-qr-codes' },
              { t: 'text', v: ' si esperas que un enlace de destino cambie con frecuencia después de imprimirlo.' },
            ],
            [{ t: 'text', v: 'Ajusta el tamaño del código según la distancia desde la que realmente se escaneará.' }],
          ],
        },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Cada caso de uso anterior empieza igual: abre el ' },
            { t: 'link', v: 'generador de códigos QR', to: '/' },
            { t: 'text', v: ', elige el tipo que se ajusta a lo que necesitas, y personaliza el icono y los colores para que combinen con tu negocio.' },
          ],
        },
      ],
    },
  },
}
