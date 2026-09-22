export type TranslationKey =
  | 'appTitle'
  | 'appTagline'
  | 'heroTitlePrefix'
  | 'heroTitleAccent'
  | 'heroSubtitle'
  | 'urlLabel'
  | 'urlPlaceholder'
  | 'generate'
  | 'urlHint'
  | 'urlError'
  | 'qrTypeLabel'
  | 'centerIcon'
  | 'uploadLogo'
  | 'uploadHint'
  | 'dotStyle'
  | 'qrShape'
  | 'colorTheme'
  | 'howItWorks'
  | 'downloadPng'
  | 'downloadSvg'
  | 'copyImage'
  | 'copied'
  | 'copyFailed'
  | 'samplePreview'
  | 'language'
  | 'faq1q'
  | 'faq1a'
  | 'faq2q'
  | 'faq2a'
  | 'faq3q'
  | 'faq3a'
  | 'faq4q'
  | 'faq4a'

export const translations: Record<string, Record<TranslationKey, string>> = {
  en: {
    appTitle: 'QR Code Generator',
    appTagline: 'QR Code Generator runs entirely in your browser',
    heroTitlePrefix: 'Turn any link into a',
    heroTitleAccent: 'custom QR code',
    heroSubtitle:
      'Paste a URL, pick a logo, icon, style, and color, and download a scannable QR code in seconds. Free, no signup, works entirely in your browser.',
    urlLabel: 'Your website URL',
    urlPlaceholder: 'example.com',
    generate: 'Generate',
    urlHint: 'We\'ll add "https://" automatically if you leave it out.',
    urlError: 'Enter a valid URL, like example.com',
    qrTypeLabel: 'QR code type',
    centerIcon: 'Center icon',
    uploadLogo: 'Upload logo',
    uploadHint: 'PNG, JPG, or SVG. Used in place of a preset icon.',
    dotStyle: 'Dot style',
    qrShape: 'QR shape',
    colorTheme: 'Color theme',
    howItWorks: 'How it works',
    downloadPng: 'Download PNG',
    downloadSvg: 'Download SVG',
    copyImage: 'Copy image',
    copied: 'Copied!',
    copyFailed: 'Copy failed',
    samplePreview: 'Sample preview:',
    language: 'Language',
    faq1q: 'Is it really free?',
    faq1a:
      'Yes. There is no signup, no watermark, and no limit on how many codes you can generate.',
    faq2q: 'Will the QR code still scan with a logo or icon on it?',
    faq2a:
      'Every code is generated with high error-correction (level H), and the center image sits in a rounded white safe zone, so scanners can read through the missing data.',
    faq3q: 'Does my data or uploaded logo get sent anywhere?',
    faq3a:
      'No. Everything, encoding, styling, and your uploaded logo, happens locally in your browser. Nothing is uploaded to a server.',
    faq4q: 'What formats can I download?',
    faq4a:
      'PNG for quick sharing and printing, or SVG for crisp scaling at any size. You can also copy the image straight to your clipboard.',
  },
  zh: {
    appTitle: '二维码生成器',
    appTagline: '二维码生成器完全在您的浏览器中运行',
    heroTitlePrefix: '将任何链接转换为',
    heroTitleAccent: '自定义二维码',
    heroSubtitle:
      '粘贴链接,选择标志、图标、样式和颜色,几秒钟内下载可扫描的二维码。免费,无需注册,完全在浏览器中运行。',
    urlLabel: '您的网站链接',
    urlPlaceholder: 'example.com',
    generate: '生成',
    urlHint: '如果您省略"https://",我们会自动添加。',
    urlError: '请输入有效的链接,例如 example.com',
    qrTypeLabel: '二维码类型',
    centerIcon: '中心图标',
    uploadLogo: '上传标志',
    uploadHint: 'PNG、JPG 或 SVG。用于替代预设图标。',
    dotStyle: '点样式',
    qrShape: '二维码形状',
    colorTheme: '配色方案',
    howItWorks: '使用说明',
    downloadPng: '下载 PNG',
    downloadSvg: '下载 SVG',
    copyImage: '复制图像',
    copied: '已复制!',
    copyFailed: '复制失败',
    samplePreview: '示例预览:',
    language: '语言',
    faq1q: '真的免费吗?',
    faq1a: '是的。无需注册,没有水印,生成数量不限。',
    faq2q: '带标志或图标的二维码还能扫描吗?',
    faq2a:
      '每个二维码都使用高纠错级别(H级)生成,中心图像位于圆形白色安全区内,因此扫描器仍可读取缺失的数据。',
    faq3q: '我的数据或上传的标志会被发送到别处吗?',
    faq3a: '不会。编码、样式设置和上传的标志都在您的浏览器本地完成,不会上传到服务器。',
    faq4q: '可以下载哪些格式?',
    faq4a: 'PNG 便于快速分享和打印,SVG 可在任意尺寸下保持清晰。您也可以直接将图像复制到剪贴板。',
  },
  es: {
    appTitle: 'Generador de códigos QR',
    appTagline: 'El generador de códigos QR funciona totalmente en tu navegador',
    heroTitlePrefix: 'Convierte cualquier enlace en un',
    heroTitleAccent: 'código QR personalizado',
    heroSubtitle:
      'Pega una URL, elige un logo, icono, estilo y color, y descarga un código QR escaneable en segundos. Gratis, sin registro, funciona totalmente en tu navegador.',
    urlLabel: 'La URL de tu sitio web',
    urlPlaceholder: 'ejemplo.com',
    generate: 'Generar',
    urlHint: 'Añadiremos "https://" automáticamente si lo omites.',
    urlError: 'Introduce una URL válida, como ejemplo.com',
    qrTypeLabel: 'Tipo de código QR',
    centerIcon: 'Icono central',
    uploadLogo: 'Subir logo',
    uploadHint: 'PNG, JPG o SVG. Se usa en lugar de un icono predefinido.',
    dotStyle: 'Estilo de puntos',
    qrShape: 'Forma del QR',
    colorTheme: 'Combinación de colores',
    howItWorks: 'Cómo funciona',
    downloadPng: 'Descargar PNG',
    downloadSvg: 'Descargar SVG',
    copyImage: 'Copiar imagen',
    copied: '¡Copiado!',
    copyFailed: 'Error al copiar',
    samplePreview: 'Vista previa de ejemplo:',
    language: 'Idioma',
    faq1q: '¿Es realmente gratis?',
    faq1a:
      'Sí. No hay registro, ni marca de agua, ni límite en la cantidad de códigos que puedes generar.',
    faq2q: '¿El código QR seguirá funcionando con un logo o icono encima?',
    faq2a:
      'Cada código se genera con corrección de errores alta (nivel H), y la imagen central se sitúa en una zona segura blanca redondeada, para que los lectores puedan leer los datos faltantes.',
    faq3q: '¿Mis datos o el logo subido se envían a algún sitio?',
    faq3a:
      'No. Todo, la codificación, el estilo y tu logo subido, ocurre localmente en tu navegador. Nada se sube a un servidor.',
    faq4q: '¿Qué formatos puedo descargar?',
    faq4a:
      'PNG para compartir e imprimir rápidamente, o SVG para una escala nítida a cualquier tamaño. También puedes copiar la imagen directamente al portapapeles.',
  },
  ar: {
    appTitle: 'مولد رمز الاستجابة السريعة',
    appTagline: 'يعمل المولد بالكامل داخل متصفحك',
    heroTitlePrefix: 'حوّل أي رابط إلى',
    heroTitleAccent: 'رمز QR مخصص',
    heroSubtitle:
      'الصق رابطًا، اختر شعارًا وأيقونة ونمطًا ولونًا، وحمّل رمز QR قابلاً للمسح خلال ثوانٍ. مجاني، بدون تسجيل، يعمل بالكامل داخل متصفحك.',
    urlLabel: 'رابط موقعك',
    urlPlaceholder: 'example.com',
    generate: 'إنشاء',
    urlHint: 'سنضيف "https://" تلقائيًا إذا لم تُدرجه.',
    urlError: 'أدخل رابطًا صالحًا، مثل example.com',
    qrTypeLabel: 'نوع رمز QR',
    centerIcon: 'الأيقونة المركزية',
    uploadLogo: 'رفع شعار',
    uploadHint: 'PNG أو JPG أو SVG. يُستخدم بدلاً من أيقونة جاهزة.',
    dotStyle: 'نمط النقاط',
    qrShape: 'شكل الرمز',
    colorTheme: 'نظام الألوان',
    howItWorks: 'كيف يعمل',
    downloadPng: 'تحميل PNG',
    downloadSvg: 'تحميل SVG',
    copyImage: 'نسخ الصورة',
    copied: 'تم النسخ!',
    copyFailed: 'فشل النسخ',
    samplePreview: 'معاينة نموذجية:',
    language: 'اللغة',
    faq1q: 'هل هو مجاني فعلاً؟',
    faq1a: 'نعم. لا يوجد تسجيل، ولا علامة مائية، ولا حد لعدد الرموز التي يمكنك إنشاؤها.',
    faq2q: 'هل سيظل رمز QR قابلاً للمسح مع وجود شعار أو أيقونة عليه؟',
    faq2a:
      'يُنشأ كل رمز بمستوى تصحيح أخطاء عالٍ (المستوى H)، وتوضع الصورة المركزية داخل منطقة آمنة بيضاء دائرية، بحيث تستطيع الماسحات قراءة البيانات الناقصة.',
    faq3q: 'هل تُرسل بياناتي أو الشعار الذي رفعته إلى أي مكان؟',
    faq3a:
      'لا. كل شيء، من الترميز إلى التنسيق والشعار الذي رفعته، يحدث محليًا داخل متصفحك. لا شيء يُرفع إلى خادم.',
    faq4q: 'ما الصيغ التي يمكنني تحميلها؟',
    faq4a:
      'PNG للمشاركة والطباعة السريعة، أو SVG لوضوح تام بأي حجم. يمكنك أيضًا نسخ الصورة مباشرة إلى الحافظة.',
  },
  fr: {
    appTitle: 'Générateur de code QR',
    appTagline: 'Le générateur fonctionne entièrement dans votre navigateur',
    heroTitlePrefix: 'Transformez n\'importe quel lien en',
    heroTitleAccent: 'code QR personnalisé',
    heroSubtitle:
      'Collez une URL, choisissez un logo, une icône, un style et une couleur, puis téléchargez un code QR scannable en quelques secondes. Gratuit, sans inscription, fonctionne entièrement dans votre navigateur.',
    urlLabel: 'L\'URL de votre site',
    urlPlaceholder: 'exemple.com',
    generate: 'Générer',
    urlHint: 'Nous ajouterons "https://" automatiquement si vous l\'omettez.',
    urlError: 'Saisissez une URL valide, comme exemple.com',
    qrTypeLabel: 'Type de code QR',
    centerIcon: 'Icône centrale',
    uploadLogo: 'Importer un logo',
    uploadHint: 'PNG, JPG ou SVG. Utilisé à la place d\'une icône prédéfinie.',
    dotStyle: 'Style des points',
    qrShape: 'Forme du QR',
    colorTheme: 'Thème de couleurs',
    howItWorks: 'Comment ça marche',
    downloadPng: 'Télécharger en PNG',
    downloadSvg: 'Télécharger en SVG',
    copyImage: 'Copier l\'image',
    copied: 'Copié !',
    copyFailed: 'Échec de la copie',
    samplePreview: 'Aperçu d\'exemple :',
    language: 'Langue',
    faq1q: 'Est-ce vraiment gratuit ?',
    faq1a:
      'Oui. Aucune inscription, aucun filigrane, et aucune limite sur le nombre de codes que vous pouvez générer.',
    faq2q: 'Le code QR restera-t-il scannable avec un logo ou une icône dessus ?',
    faq2a:
      'Chaque code est généré avec une correction d\'erreur élevée (niveau H), et l\'image centrale se trouve dans une zone de sécurité blanche arrondie, afin que les scanners puissent lire les données manquantes.',
    faq3q: 'Mes données ou mon logo importé sont-ils envoyés quelque part ?',
    faq3a:
      'Non. Tout, l\'encodage, le style et votre logo importé, se passe localement dans votre navigateur. Rien n\'est envoyé à un serveur.',
    faq4q: 'Quels formats puis-je télécharger ?',
    faq4a:
      'PNG pour un partage et une impression rapides, ou SVG pour une mise à l\'échelle nette à toute taille. Vous pouvez aussi copier l\'image directement dans le presse-papiers.',
  },
  pt: {
    appTitle: 'Gerador de código QR',
    appTagline: 'O gerador funciona totalmente no seu navegador',
    heroTitlePrefix: 'Transforme qualquer link em um',
    heroTitleAccent: 'código QR personalizado',
    heroSubtitle:
      'Cole uma URL, escolha um logotipo, ícone, estilo e cor, e baixe um código QR escaneável em segundos. Grátis, sem cadastro, funciona totalmente no seu navegador.',
    urlLabel: 'A URL do seu site',
    urlPlaceholder: 'exemplo.com',
    generate: 'Gerar',
    urlHint: 'Adicionaremos "https://" automaticamente se você omitir.',
    urlError: 'Digite uma URL válida, como exemplo.com',
    qrTypeLabel: 'Tipo de código QR',
    centerIcon: 'Ícone central',
    uploadLogo: 'Enviar logotipo',
    uploadHint: 'PNG, JPG ou SVG. Usado no lugar de um ícone predefinido.',
    dotStyle: 'Estilo dos pontos',
    qrShape: 'Formato do QR',
    colorTheme: 'Tema de cores',
    howItWorks: 'Como funciona',
    downloadPng: 'Baixar PNG',
    downloadSvg: 'Baixar SVG',
    copyImage: 'Copiar imagem',
    copied: 'Copiado!',
    copyFailed: 'Falha ao copiar',
    samplePreview: 'Pré-visualização de exemplo:',
    language: 'Idioma',
    faq1q: 'É realmente gratuito?',
    faq1a:
      'Sim. Não há cadastro, sem marca d\'água e sem limite de quantos códigos você pode gerar.',
    faq2q: 'O código QR ainda vai funcionar com um logotipo ou ícone nele?',
    faq2a:
      'Cada código é gerado com alta correção de erros (nível H), e a imagem central fica em uma zona segura branca arredondada, para que os leitores consigam ler os dados faltantes.',
    faq3q: 'Meus dados ou o logotipo enviado são enviados para algum lugar?',
    faq3a:
      'Não. Tudo, a codificação, a estilização e o logotipo enviado, acontece localmente no seu navegador. Nada é enviado a um servidor.',
    faq4q: 'Quais formatos posso baixar?',
    faq4a:
      'PNG para compartilhamento e impressão rápidos, ou SVG para uma escala nítida em qualquer tamanho. Você também pode copiar a imagem diretamente para a área de transferência.',
  },
  de: {
    appTitle: 'QR-Code-Generator',
    appTagline: 'Der Generator läuft vollständig in deinem Browser',
    heroTitlePrefix: 'Verwandle jeden Link in einen',
    heroTitleAccent: 'individuellen QR-Code',
    heroSubtitle:
      'Füge eine URL ein, wähle Logo, Symbol, Stil und Farbe, und lade in Sekunden einen scanbaren QR-Code herunter. Kostenlos, ohne Anmeldung, läuft vollständig in deinem Browser.',
    urlLabel: 'Deine Website-URL',
    urlPlaceholder: 'beispiel.de',
    generate: 'Erstellen',
    urlHint: 'Wir fügen automatisch "https://" hinzu, falls du es weglässt.',
    urlError: 'Gib eine gültige URL ein, z. B. beispiel.de',
    qrTypeLabel: 'QR-Code-Typ',
    centerIcon: 'Mittleres Symbol',
    uploadLogo: 'Logo hochladen',
    uploadHint: 'PNG, JPG oder SVG. Wird anstelle eines Standardsymbols verwendet.',
    dotStyle: 'Punktstil',
    qrShape: 'QR-Form',
    colorTheme: 'Farbschema',
    howItWorks: 'So funktioniert\'s',
    downloadPng: 'PNG herunterladen',
    downloadSvg: 'SVG herunterladen',
    copyImage: 'Bild kopieren',
    copied: 'Kopiert!',
    copyFailed: 'Kopieren fehlgeschlagen',
    samplePreview: 'Beispielvorschau:',
    language: 'Sprache',
    faq1q: 'Ist es wirklich kostenlos?',
    faq1a:
      'Ja. Keine Anmeldung, kein Wasserzeichen und keine Begrenzung, wie viele Codes du erstellen kannst.',
    faq2q: 'Lässt sich der QR-Code mit Logo oder Symbol noch scannen?',
    faq2a:
      'Jeder Code wird mit hoher Fehlerkorrektur (Stufe H) erstellt, und das mittlere Bild sitzt in einer abgerundeten weißen Schutzzone, sodass Scanner die fehlenden Daten rekonstruieren können.',
    faq3q: 'Werden meine Daten oder mein hochgeladenes Logo irgendwohin gesendet?',
    faq3a:
      'Nein. Alles, Kodierung, Gestaltung und dein hochgeladenes Logo, geschieht lokal in deinem Browser. Nichts wird an einen Server gesendet.',
    faq4q: 'Welche Formate kann ich herunterladen?',
    faq4a:
      'PNG zum schnellen Teilen und Drucken, oder SVG für scharfe Skalierung in jeder Größe. Du kannst das Bild auch direkt in die Zwischenablage kopieren.',
  },
}
