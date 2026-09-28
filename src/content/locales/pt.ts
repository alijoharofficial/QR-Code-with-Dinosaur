import type { PageContent } from '../pageContent'

export const content: PageContent = {
  chrome: {
    navHome: 'Início',
    navQrTools: 'Ferramentas QR',
    navGuides: 'Guias',
    navServices: 'Serviços',
    navAbout: 'Sobre',
    toolShort: {
      dinosaur: 'QR com dinossauro',
      logo: 'QR com logotipo',
      custom: 'QR personalizado',
      menu: 'QR para cardápio',
      wifi: 'QR para WiFi',
    },
    footerToolsHeading: 'Ferramentas',
    footerResourcesHeading: 'Recursos',
    footerServicesHeading: 'Serviços',
    footerCompanyHeading: 'Empresa',
    footerFaqLabel: 'Perguntas frequentes',
    footerWhatWeOffer: 'O que oferecemos',
    footerContact: 'Contato',
    footerPrivacyPolicy: 'Política de privacidade',
    footerTerms: 'Termos',
    footerBuiltBy: 'Desenvolvido por',
    menuAriaLabel: 'Menu',
    switchToLightMode: 'Mudar para o modo claro',
    switchToDarkMode: 'Mudar para o modo escuro',
    emailUsLabel: 'Envie-nos um e-mail',
    getInTouchLabel: 'Entre em contato',
    questionsFeedback: 'Dúvidas, sugestões ou encontrou um erro?',
    lastUpdatedLabel: 'Última atualização',
    faqHeadingDefault: 'Perguntas frequentes',
    faqHeadingToolPage: 'Dúvidas sobre esta página',
    relatedGuidesHeading: 'Guias relacionados',
    backToGenerator: '← Voltar ao gerador principal de código QR',
  },
  notFound: {
    pageTitle: 'Página não encontrada | Gerador de código QR',
    eyebrow: '404',
    heading: 'Esta página se perdeu por aí',
    bodyWithPathPrefix: 'Nem o dinossauro conseguiu escanear o caminho até',
    bodyWithPathSuffix: '. Ela pode ter sido movida, ou o link pode estar desatualizado.',
    bodyWithoutPath:
      'Nem o dinossauro conseguiu escanear o caminho até esta página. Ela pode ter sido movida, ou o link pode estar desatualizado.',
    backToGenerator: 'Voltar ao gerador',
    browseGuides: 'Ver os guias',
  },
  routes: {
    home: {
      title: 'Gerador de Código QR com Logotipo de Dinossauro | Personalizado e Grátis',
      description:
        'Crie um código QR personalizado e gratuito com um logotipo de dinossauro, ícone de animal ou sua própria imagem. Códigos QR fofos e escaneáveis em segundos, sem cadastro, funciona offline.',
    },
    guidesIndex: {
      title: 'Guias e Dicas de Código QR | Gerador de código QR',
      description:
        'Guias práticos e originais sobre códigos QR: como adicionar um logotipo, códigos estáticos vs. dinâmicos, se eles expiram, e códigos QR para pequenos negócios. Tudo gratuito para ler.',
      h1: 'Guias e Dicas de Código QR',
    },
    services: {
      title: 'Serviços | Gerador de código QR',
      description:
        'Precisa de mais do que um código QR? Conheça os serviços de web, branding e marketing oferecidos pela TECH24, a equipe por trás deste gerador gratuito de código QR.',
    },
    about: {
      title: 'Sobre | Gerador de código QR',
      description:
        'Sobre este gerador gratuito de código QR: o que ele faz, como protege seus dados e quem o desenvolveu e mantém.',
    },
    contact: {
      title: 'Contato | Gerador de código QR',
      description: 'Entre em contato sobre este gerador gratuito de código QR: dúvidas, sugestões ou relatos de erros são bem-vindos.',
    },
    privacy: {
      title: 'Política de Privacidade | Gerador de código QR',
      description:
        'Como este gerador de código QR trata seus dados: o que permanece no seu navegador, quais ferramentas de análise são usadas e o que nunca é coletado.',
    },
    terms: {
      title: 'Termos de Uso | Gerador de código QR',
      description:
        'Os termos para usar este gerador gratuito de código QR, incluindo o que ele faz, o que não garante e como pode ser utilizado.',
    },
  },
  home: {
    heroTitlePrefix: 'Gerador de Código QR com',
    heroTitleAccent: 'Logotipo de Dinossauro',
    heroSubtitle:
      'Códigos QR gratuitos e personalizados com um dinossauro, macaco, tigre ou seu próprio logotipo: fofos, escaneáveis e prontos em segundos.',
    introPrefix: 'Este é um',
    introBold: 'gerador de código QR personalizado',
    introSuffix:
      ' e gratuito que transforma qualquer link, rede WiFi ou cartão de contato em um código escaneável, estilizado com um ícone de animal fofo, como um dinossauro, macaco ou tigre, ou seu próprio logotipo. Cada código QR é criado inteiramente no seu navegador, pode ser baixado em PNG ou SVG, e funciona para sempre, sem cadastro e sem marca d\'água.',
    whatIsQrHeading: 'O que é um código QR?',
    whatIsQrBody:
      'Um código QR (Quick Response, ou Resposta Rápida) é um pequeno padrão quadrado que armazena dados que uma câmera consegue ler em um instante, sem precisar de aplicativo ou digitação. Aponte a câmera do celular para um deles e ele decodifica diretamente o link, a rede WiFi ou o cartão de contato guardado ali dentro.',
    thisGeneratorSupports: 'Este gerador é compatível com',
    howItWorksSteps: [
      {
        title: 'Escolha o que ele faz',
        body: 'Selecione um tipo: um link de site, rede WiFi, cartão de contato, cardápio e muito mais, e preencha os detalhes.',
      },
      {
        title: 'Escolha um ícone ou logotipo',
        body: 'Selecione um ícone integrado, incluindo um dinossauro, macaco ou tigre, ou envie sua própria imagem de logotipo.',
      },
      {
        title: 'Personalize',
        body: 'Ajuste as cores, o estilo dos pontos e o formato até combinar com sua marca ou a ocasião.',
      },
      {
        title: 'Baixe e escaneie',
        body: 'Salve como PNG ou SVG, ou copie diretamente para a área de transferência. Funciona imediatamente.',
      },
    ],
    featuresHeading: 'Recursos',
    features: [
      {
        title: 'Códigos QR gratuitos e ilimitados',
        body: 'Sem cadastro, sem marca d\'água e sem limite de quantos você pode criar.',
      },
      {
        title: 'Ícones de animais fofos ou seu próprio logotipo',
        body: 'Um dinossauro, macaco, tigre, ou envie qualquer imagem de logotipo que você quiser.',
      },
      {
        title: 'Totalmente personalizável',
        body: 'Cores, estilo dos pontos e formato quadrado ou circular: faça combinar com sua marca.',
      },
      {
        title: 'Feito para escanear com confiabilidade',
        body: 'A alta correção de erros mantém cada código legível, mesmo com um logotipo nele.',
      },
      {
        title: 'Privado por padrão',
        body: 'Tudo funciona no seu navegador. Nada do que você digita é enviado a um servidor.',
      },
      {
        title: 'Downloads em PNG ou SVG',
        body: 'Baixe um PNG para compartilhar rapidamente, ou um SVG que permanece nítido em qualquer tamanho de impressão.',
      },
    ],
    moreWaysToUseIt: 'Mais maneiras de usar',
    faq: [
      {
        question: 'Este gerador de código QR é realmente gratuito?',
        answer:
          'Sim. Cada código QR que você cria aqui é completamente gratuito, sem cadastro, sem marca d\'água e sem limite de quantos você pode criar. Não existe um plano premium escondendo recursos melhores: os ícones de dinossauro, macaco e tigre, todas as cores e estilos de pontos, e os dois formatos de download são gratuitos para qualquer pessoa.',
      },
      {
        question: 'Funciona offline?',
        answer:
          'Depois que a página tiver carregado, sim. O código QR é gerado inteiramente no seu navegador usando JavaScript, então criar e baixar códigos não precisa de conexão com a internet. Você só precisa estar online na primeira vez que carregar a página (ou se estiver colando uma URL ativa que queira conferir).',
      },
      {
        question: 'Posso adicionar um logotipo ou um ícone de dinossauro ao meu código QR?',
        answer:
          'Sim, essa é a ideia principal. Escolha um dos ícones de animais integrados (um dinossauro em pixel art, um macaco ou um tigre), um ícone social ou de ação, ou envie sua própria imagem de logotipo. Ele fica dentro de uma zona segura branca protegida no centro do código, e o QR é gerado com alta correção de erros para continuar escaneando corretamente.',
      },
      {
        question: 'Os códigos QR são permanentes, ou eles expiram?',
        answer:
          'Os códigos são estáticos, o que significa que os dados (um link, senha de WiFi, cartão de contato, e assim por diante) são codificados diretamente no padrão do próprio código QR. Não há nenhum serviço de redirecionamento de terceiros no meio, nenhuma assinatura, e nada que possa expirar ou ser desativado depois. Uma vez baixado, ele funciona enquanto a imagem do código QR existir.',
      },
      {
        question: 'Em quais formatos de arquivo posso baixar meu código QR?',
        answer:
          'Você pode baixar como PNG, o formato mais fácil para compartilhar online ou imprimir em um tamanho fixo, ou como SVG, um formato vetorial que permanece perfeitamente nítido não importa o quão grande você imprima. Útil para faixas, sinalização ou embalagens. Você também pode copiar o PNG diretamente para a área de transferência.',
      },
      {
        question: 'Preciso criar uma conta ou instalar um aplicativo?',
        answer:
          'Não. Não há cadastro, login, nem nada para instalar. Abra a página, crie seu código QR e baixe-o. Esse é todo o processo.',
      },
      {
        question: 'Meus dados ou o logotipo enviado são enviados para um servidor?',
        answer:
          'Não. Tudo, a codificação dos seus dados, a estilização do código QR e a leitura de um arquivo de logotipo enviado, acontece localmente no seu navegador. Nada do que você digita ou envia é transmitido a um servidor ou armazenado em qualquer lugar.',
      },
      {
        question: 'Um código QR com um ícone ou logotipo fofo ainda vai escanear com confiabilidade?',
        answer:
          'Sim, se for feito da maneira certa. Cada código aqui usa o nível H de correção de erros, o nível mais alto suportado pelo padrão QR, o que significa que até cerca de 30% do código pode ser coberto ou danificado e ele ainda vai escanear. O ícone central é dimensionado para caber dentro dessa margem de segurança, então adicionar um dinossauro ou seu próprio logotipo não compromete a escaneabilidade.',
      },
    ],
    guidesAndTipsHeading: 'Guias e dicas',
    viewAllGuides: 'Ver todos os guias →',
  },
  toolPages: {
    dinosaur: {
      title: 'Código QR com Logotipo de Dinossauro: Gerador Gratuito',
      description:
        'Crie um código QR gratuito com um logotipo de dinossauro no centro. Escolha cores e estilo dos pontos, depois baixe como PNG ou SVG. Sem cadastro, funciona offline.',
      h1: 'Código QR com Logotipo de Dinossauro',
      subtitle:
        'Um código QR divertido e instantaneamente reconhecível, com um dinossauro em pixel art no meio, gratuito e pronto em segundos.',
      body: [
        'Um ícone de dinossauro transforma um código QR comum em algo que as pessoas realmente param para olhar, o que importa quando você quer um código que seja escaneado em vez de ignorado, em um cartaz, um adesivo, um convite de festa, ou em qualquer lugar em que queira um pouco de personalidade.',
        'Esta página abre o gerador com o ícone de dinossauro em pixel art já selecionado, no tema verde característico do site. Todo o resto funciona exatamente como na ferramenta completa: mude o tipo de QR, troque o ícone por um macaco ou tigre, envie seu próprio logotipo, ou ajuste as cores, o estilo dos pontos e o formato.',
      ],
      faq: [
        {
          question: 'O logotipo de dinossauro afeta a qualidade da leitura do código?',
          answer:
            'Não. Cada código aqui é gerado com o nível mais alto de correção de erros suportado pelo padrão QR, e o ícone fica dentro de uma zona segura protegida que nunca toca nos três quadrados de localização dos cantos, dos quais os leitores dependem.',
        },
        {
          question: 'Posso trocar para outro animal ou meu próprio logotipo?',
          answer:
            'Sim, o seletor de ícones também inclui um macaco e um tigre, ou você pode enviar sua própria imagem de logotipo a qualquer momento. O dinossauro é apenas o padrão desta página.',
        },
      ],
    },
    logo: {
      title: 'Código QR com Logotipo: Adicione Sua Própria Imagem, Grátis',
      description:
        'Envie seu próprio logotipo e gere um código QR que continua escaneando com confiabilidade. Códigos QR gratuitos, com alta correção de erros, com seu logotipo no centro.',
      h1: 'Código QR com Logotipo',
      subtitle: 'Envie seu próprio logotipo, mantenha a escaneabilidade e baixe um código QR que realmente parece ser seu.',
      body: [
        'Um logotipo no centro de um código QR é a maneira mais rápida de torná-lo reconhecidamente seu, em um cartão de visita, um rótulo de produto, uma fatura ou um adesivo de vitrine. O truque é fazer isso sem comprometer a escaneabilidade, e é exatamente para isso que esta página foi criada.',
        'O seletor de ícones abre diretamente na aba de envio. Solte o arquivo do seu logotipo e o gerador cuida do resto: ele dimensiona a imagem para caber em uma zona segura protegida e codifica o código no nível mais alto de correção de erros, para que cobrir parte do padrão com seu logotipo não impeça a leitura.',
      ],
      faq: [
        {
          question: 'Quais formatos de imagem posso enviar como logotipo?',
          answer:
            'Qualquer formato de imagem comum (PNG, JPG, SVG e similares) até 5 MB. Ele permanece inteiramente no seu navegador; nada é enviado a um servidor.',
        },
        {
          question: 'Meu logotipo vai dificultar a leitura do código?',
          answer:
            'Não, desde que fique dentro da zona segura que o gerador oferece, o que acontece por padrão. A alta correção de erros (nível H) é usada automaticamente, então cerca de 30% do código pode ser coberto e ele ainda lê corretamente.',
        },
      ],
    },
    custom: {
      title: 'Gerador de Código QR Personalizado: Cores, Formato e Estilo',
      description:
        'Crie um código QR totalmente personalizado: escolha cores, estilo dos pontos e formato, adicione um ícone ou logotipo, e baixe gratuitamente como PNG ou SVG. Sem necessidade de cadastro.',
      h1: 'Gerador de Código QR Personalizado',
      subtitle: 'Cores, estilo dos pontos, formato dos cantos e ícone: personalize cada parte do seu código QR e mantenha a escaneabilidade total.',
      body: [
        'Um gerador de código QR personalizado deveria permitir que você realmente mude mais do que apenas o conteúdo codificado. Aqui você pode ajustar o estilo dos pontos (quadrado, arredondado, ou um visual mais suave), alternar entre uma moldura externa quadrada ou circular, escolher entre vários temas de cores, e adicionar um ícone ou seu próprio logotipo, tudo isso sem comprometer a confiabilidade do código.',
        'Cada combinação é gerada com o mesmo nível alto de correção de erros, então um código arredondado, colorido e decorado com logotipo escaneia com a mesma confiabilidade que um simples, em preto e branco.',
      ],
      faq: [
        {
          question: 'Posso mudar a cor de um código QR sem comprometê-lo?',
          answer:
            'Sim, desde que haja contraste suficiente entre a cor dos pontos e o fundo. Duas cores de brilho parecido são a principal forma como uma mudança de cor prejudica a escaneabilidade.',
        },
        {
          question: 'O que mais posso personalizar além da cor?',
          answer:
            'O estilo dos pontos, o formato dos cantos (quadrado ou círculo), e o ícone ou logotipo central, além, é claro, do que o código realmente codifica: um link, rede WiFi, cartão de contato e muito mais.',
        },
      ],
    },
    menu: {
      title: 'Código QR para Cardápio de Restaurante: Gerador Gratuito',
      description:
        'Crie um código QR de cardápio para seu restaurante ou café em segundos. Vincule seu cardápio online, adicione seu logotipo e baixe gratuitamente como PNG ou SVG.',
      h1: 'Código QR para Cardápio de Restaurante',
      subtitle: 'Vincule seu cardápio, escolha um ícone que combine com seu restaurante e baixe um código pronto para displays de mesa ou cartazes.',
      body: [
        'Um código QR de cardápio só precisa de um link para o seu cardápio hospedado: uma página no seu site, um PDF, ou um construtor de páginas simples, tudo funciona. Esta página inicia o gerador no tipo "Site" com um ícone de cardápio já selecionado, pronto para esse link.',
        'Como são códigos estáticos, o código QR em si nunca precisa mudar, mesmo que seu cardápio mude. Atualize a página por trás do link e todo display de mesa ou adesivo que você já imprimiu aponta automaticamente para a versão nova. Dimensione-o para a distância de onde será lido, e mantenha o fundo por trás dele limpo para que escaneie rapidamente até em pouca luz.',
      ],
      faq: [
        {
          question: 'Preciso reimprimir o código se eu atualizar o cardápio?',
          answer:
            'Não, desde que o cardápio permaneça no mesmo link, atualizar o que está naquela página (preços, promoções, itens) não exige um novo código QR. Você só precisa de um código novo se o link em si mudar.',
        },
        {
          question: 'Em que tamanho devo imprimir o código?',
          answer:
            'Como regra geral, mantenha o código impresso com pelo menos cerca de 2 cm por metro de distância esperada de leitura. Um display de mesa lido a um braço de distância pode ser menor do que um cartaz feito para ser escaneado do outro lado da sala.',
        },
      ],
    },
    wifi: {
      title: 'Código QR para WiFi: Gerador Gratuito de Compartilhamento de Rede',
      description:
        'Gere um código QR de WiFi gratuito para que seus convidados se conectem com um escaneamento em vez de digitar uma senha. Sem cadastro, funciona inteiramente no seu navegador.',
      h1: 'Código QR para WiFi',
      subtitle: 'Codifique o nome e a senha da sua rede WiFi em um único código: os convidados escaneiam e se conectam, sem precisar digitar nada.',
      body: [
        'Um código QR de WiFi codifica juntos o nome e a senha da sua rede, para que a câmera de um celular consiga lê-lo e ofereça a conexão diretamente, sem precisar digitar uma senha longa de um post-it. Esta página abre o gerador com o tipo WiFi já selecionado.',
        'Isso é especialmente útil para cafés, salas de espera, aluguéis de curta duração e escritórios com visitantes. Os detalhes da rede permanecem codificados no próprio código impresso ou exibido; nada é enviado a lugar nenhum quando você o gera.',
      ],
      faq: [
        {
          question: 'É seguro colocar minha senha de WiFi em um código QR?',
          answer:
            'A senha é codificada diretamente no código e decodificada apenas localmente por quem o escaneia, a mesma informação que qualquer pessoa poderia ler em um post-it ou na etiqueta do roteador. Trate o código impresso da mesma forma que trataria escrever a senha em algum lugar visível.',
        },
        {
          question: 'Isso funciona para redes ocultas?',
          answer:
            'Sim, o tipo WiFi inclui uma opção para marcar a rede como oculta, para que os dispositivos que escaneiam saibam que devem se conectar pelo nome, em vez de pela transmissão.',
        },
      ],
    },
  },
  guidesIndex: {
    intro:
      'Guias práticos e originais para aproveitar ao máximo os códigos QR, desde adicionar um logotipo sem comprometer a escaneabilidade até escolher o tipo certo de código para o seu caso de uso.',
    lookingForTool: 'Procurando a ferramenta em si?',
    goToGenerator: 'Ir para o gerador de código QR',
  },
  services: {
    introPrefix: 'Este gerador de código QR é gratuito e sempre será. Ele é feito e mantido pela',
    introSuffix:
      ', uma pequena equipe de marketing e web com apoio de IA. Se você é um pequeno negócio e algum dia precisar de mais do que um código QR, aqui está uma visão geral em linguagem simples do que eles fazem.',
    categories: [
      {
        title: 'Sites',
        body: 'Design e desenvolvimento para sites de pequenos negócios e marketing, o mesmo raciocínio que manteve esta ferramenta rápida e simples de usar.',
      },
      {
        title: 'Branding',
        body: 'Logotipos, sistemas de cores e identidade visual para negócios que querem parecer tão cuidados quanto realmente são.',
      },
      {
        title: 'Marketing',
        body: 'Suporte de marketing contínuo, construído em torno do mesmo fluxo de trabalho assistido por IA usado para operar esta ferramenta gratuita.',
      },
      {
        title: 'E-commerce',
        body: 'Lojas online rápidas de navegar e fáceis de finalizar a compra, em qualquer dispositivo.',
      },
      {
        title: 'SEO',
        body: 'A mesma abordagem técnica e de conteúdo usada para fazer esta ferramenta gratuita ser encontrada nas buscas, aplicada ao seu site.',
      },
      {
        title: 'Suporte contínuo',
        body: 'Uma equipe que mantém tudo funcionando depois do lançamento, não só na entrega.',
      },
    ],
    process: [
      { title: 'Conversamos', body: 'Uma conversa curta e em linguagem simples sobre o que você realmente precisa.' },
      { title: 'Você vê um plano', body: 'Um escopo e um preço claros antes de qualquer coisa começar, sem surpresas depois.' },
      {
        title: 'Entrega e suporte',
        body: 'Lançamento, depois ajuda contínua, a mesma confiabilidade que esta ferramenta gratuita busca oferecer.',
      },
    ],
    closingPrefix: 'Todos os detalhes, incluindo os pacotes atuais, estão em',
  },
  about: {
    h1: 'Sobre Este Gerador de Código QR',
    subtitle:
      'Uma ferramenta gratuita para criar códigos QR personalizados com um ícone de dinossauro, macaco ou tigre, ou seu próprio logotipo, inteiramente no seu navegador.',
    highlights: [
      {
        title: 'Sem cadastro, nunca',
        body: 'Abra a página, crie um código, baixe-o. Sem conta, sem e-mail, sem senha.',
      },
      {
        title: 'Ilimitado, sem marca d\'água',
        body: 'Crie quantos códigos QR quiser. Cada um é baixado limpo.',
      },
      {
        title: 'Estático e permanente',
        body: 'Seus dados são incorporados diretamente no código, então ele continua funcionando enquanto a imagem existir.',
      },
    ],
    privacyHeading: 'Tudo permanece no seu dispositivo',
    privacyPoints: [
      'A codificação dos seus dados acontece no seu navegador',
      'A estilização do código acontece no seu navegador',
      'A leitura de um logotipo enviado acontece no seu navegador',
      'Nada do que você digita ou envia é enviado a um servidor',
    ],
    privacyClosingPrefix: 'Veja a',
    privacyClosingSuffix: 'para todos os detalhes, incluindo as ferramentas de análise usadas para entender como o site é utilizado.',
    tech24Prefix: 'Esta ferramenta gratuita foi criada e é mantida pela',
    tech24Mid:
      ', uma pequena equipe de marketing e web com apoio de IA. Se você algum dia precisar de mais do que um código QR, um site, branding ou marketing, você pode ver',
    tech24OfferLabel: 'o que eles oferecem',
  },
  contact: {
    h1: 'Contato',
    intro:
      'Tem dúvidas sobre como o gerador funciona, sugestões, ou encontrou algo que não está escaneando direito? Envie um e-mail e entraremos em contato.',
  },
  privacy: {
    h1: 'Política de Privacidade',
    sections: [
      {
        heading: 'O que esta ferramenta faz com seus dados',
        body: 'Gerar um código QR, incluindo qualquer link, senha de WiFi, dados de contato ou outro conteúdo que você digitar, e qualquer imagem de logotipo que você enviar, acontece inteiramente no seu navegador. Nada disso é enviado a, ou armazenado em, nenhum servidor. Fechar ou atualizar a página apaga tudo.',
      },
      {
        heading: 'O que armazenamos localmente',
        body: 'Seu tema (claro ou escuro) e sua preferência de idioma são salvos no armazenamento local do seu navegador para persistirem entre visitas. Isso permanece no seu dispositivo e nunca é transmitido a lugar nenhum.',
      },
      {
        heading: 'Análise (Analytics)',
        body: 'Este site usa o Google Tag Manager e o Microsoft Clarity para entender, de forma agregada, como o site é utilizado, por exemplo, quais páginas são visitadas e mais ou menos como as pessoas interagem com elas. Essas ferramentas podem definir cookies e coletar informações técnicas padrão (como o tipo de navegador e a localização aproximada derivada do endereço IP). Elas não recebem nada do que você digita no gerador de código QR em si.',
      },
      {
        heading: 'Fontes',
        body: 'Este site carrega a fonte Inter a partir do Google Fonts, o que envolve uma requisição aos servidores do Google quando a página é carregada.',
      },
      {
        heading: 'Sem contas, sem venda de dados',
        body: 'Não há cadastro nem sistema de contas, então não há dados de conta para proteger ou perder. Não vendemos nenhum dado a terceiros.',
      },
      {
        heading: 'Dúvidas',
        bodyPrefix: 'Para qualquer dúvida sobre privacidade, veja os',
        bodySuffixOr: 'ou envie um e-mail para',
      },
    ],
  },
  terms: {
    h1: 'Termos de Uso',
    sections: [
      {
        heading: 'A ferramenta',
        body: 'Este site oferece um gerador de código QR gratuito que funciona inteiramente no seu navegador. Você pode usá-lo para gerar um número ilimitado de códigos QR para fins pessoais ou comerciais, sem nenhum custo.',
      },
      {
        heading: 'Sua responsabilidade',
        body: 'Você é responsável pelo conteúdo que codifica em um código QR e por testar se um código gerado escaneia corretamente antes de contar com ele, por exemplo, antes de imprimi-lo em grande escala. Recomendamos escanear um código com mais de um dispositivo antes de distribuí-lo amplamente.',
      },
      {
        heading: 'Sem garantia',
        body: 'Esta ferramenta é fornecida "como está", sem nenhum tipo de garantia. Fazemos o possível para mantê-la precisa e confiável, mas não garantimos disponibilidade ininterrupta nem que todo código gerado vai escanear em todas as condições (por exemplo, em impressões danificadas, mal impressas ou de contraste extremamente baixo).',
      },
      {
        heading: 'Uso aceitável',
        body: 'Não use esta ferramenta para gerar códigos QR para conteúdo ilegal, distribuição de malware, phishing, ou qualquer coisa destinada a enganar ou prejudicar pessoas que escaneiem o código resultante.',
      },
      {
        heading: 'Alterações',
        body: 'Estes termos podem ser atualizados de tempos em tempos; a versão atual sempre se aplica.',
      },
      {
        heading: 'Dúvidas',
        bodyPrefix: 'Veja a',
        bodySuffixOr: 'ou envie um e-mail para',
      },
    ],
  },
  guides: {
    logo: {
      title: 'Como Criar um Código QR com Logotipo (Guia Gratuito)',
      description:
        'Aprenda como criar um código QR com um logotipo no meio que continua escaneando com confiabilidade, passo a passo, incluindo correção de erros, dimensionamento e dicas de contraste.',
      h1: 'Como Criar um Código QR com Logotipo',
      excerpt: 'Um logotipo no centro torna um código QR instantaneamente reconhecível como seu. Veja como adicionar um sem comprometer a escaneabilidade.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Um código QR simples, em preto e branco, funciona, mas não parece pertencer a ninguém. Coloque seu logotipo, ou um ícone divertido como um pequeno dinossauro, no centro e o mesmo código passa a parecer instantaneamente parte da sua marca ou do seu evento. A boa notícia é que um ',
            },
            { t: 'b', v: 'código QR com logotipo' },
            {
              t: 'text',
              v: ' não é mais difícil de criar do que um simples, desde que você entenda a única regra que realmente importa: a correção de erros.',
            },
          ],
        },
        { type: 'h2', text: 'Por que você pode cobrir parte de um código QR e ele ainda funciona' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Os códigos QR são construídos com uma camada de correção de erros incorporada no próprio padrão. Dependendo do nível escolhido quando o código é gerado, um código QR pode perder entre cerca de 7% e cerca de 30% do seu padrão (coberto por um logotipo, borrado, impresso em uma superfície amassada) e um leitor ainda consegue reconstruir os dados originais. O nível mais alto, chamado Nível H, tolera aproximadamente 30% de dano ou obstrução. Essa margem de 30% é exatamente o que torna seguro colocar um logotipo no meio de um código QR, desde que o gerador que você usa realmente defina esse nível. Por isso, esta ferramenta sempre codifica no Nível H.',
            },
          ],
        },
        { type: 'h2', text: 'Passo a passo: adicionando um logotipo ao seu código QR' },
        {
          type: 'ol',
          items: [
            [
              { t: 'b', v: 'Escolha o que o código QR deve fazer.' },
              { t: 'text', v: ' No ' },
              { t: 'link', v: 'gerador de código QR com logotipo', to: '/qr-code-with-logo' },
              { t: 'text', v: ', escolha um tipo (um link de site, uma rede WiFi, um cartão de contato, e assim por diante) e preencha os detalhes.' },
            ],
            [
              { t: 'b', v: 'Abra o seletor de ícones.' },
              {
                t: 'text',
                v: ' Selecione "Enviar logotipo" e escolha seu próprio arquivo de imagem, ou escolha um dos ícones integrados se não tiver um arquivo de logotipo à mão.',
              },
            ],
            [
              { t: 'b', v: 'Confira a pré-visualização.' },
              {
                t: 'text',
                v: ' O logotipo fica automaticamente dentro de um círculo branco protegido no meio do código, então ele nunca toca nos quadrados de localização (os três grandes quadrados dos cantos que um leitor usa para se orientar); essa é a única parte de um código QR que nunca deve ser coberta.',
              },
            ],
            [
              { t: 'b', v: 'Escolha as cores e baixe.' },
              {
                t: 'text',
                v: ' Ajuste o estilo dos pontos e o tema de cores se quiser, depois baixe como PNG para compartilhamento rápido ou SVG se pretende imprimir em tamanho grande.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'Dicas para um logotipo que escaneia com confiabilidade sempre' },
        {
          type: 'ul',
          items: [
            [
              { t: 'b', v: 'Mantenha o contraste alto.' },
              {
                t: 'text',
                v: ' Um logotipo escuro sobre o fundo claro do código QR (ou vice-versa) escaneia com muito mais confiabilidade do que um de baixo contraste.',
              },
            ],
            [
              { t: 'b', v: 'Não estique o logotipo grande demais.' },
              {
                t: 'text',
                v: ' Um bom gerador limita o quanto o seu logotipo pode cobrir do código, mas se você estiver construindo o seu próprio, ficar abaixo de cerca de 20 a 25% da área total é um objetivo seguro.',
              },
            ],
            [
              { t: 'b', v: 'Teste antes de imprimir em grande quantidade.' },
              {
                t: 'text',
                v: ' Escaneie o código QR baixado com dois ou três celulares diferentes antes de encomendar sinalização, displays de mesa ou embalagens. Leva dez segundos e evita uma reimpressão.',
              },
            ],
            [
              { t: 'b', v: 'Não mexa na zona de silêncio.' },
              {
                t: 'text',
                v: ' A margem em branco ao redor da parte externa de um código QR não é espaço desperdiçado; os leitores a usam para detectar onde o código começa e termina. Não a corte de forma apertada ao posicionar o código em um design.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'Erros comuns' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'A falha mais comum não é o logotipo em si. É usar um gerador de QR que não aumenta o nível de correção de erros quando um logotipo é adicionado. Se você já escaneou um código QR com logotipo que simplesmente não lia, é quase sempre por isso. O segundo erro mais comum é escolher cores quase idênticas para os pontos e o fundo (como pontos cinza-claro sobre branco), o que prejudica a escaneabilidade mesmo sem nenhum logotipo.',
            },
          ],
        },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Depois que essas duas coisas estiverem resolvidas, um código QR com logotipo é tão confiável quanto um simples, e consideravelmente mais memorável. Experimente no nosso ' },
            { t: 'link', v: 'gerador de QR com logotipo →', to: '/qr-code-with-logo' },
          ],
        },
      ],
    },
    staticVsDynamic: {
      title: 'Códigos QR Estáticos vs. Dinâmicos: Qual é a Diferença?',
      description:
        'Códigos QR estáticos codificam os dados diretamente e nunca expiram. Códigos dinâmicos redirecionam por meio de um serviço e podem ser editados ou rastreados, por um preço. Veja a diferença.',
      h1: 'Códigos QR Estáticos vs. Dinâmicos: Qual é a Diferença',
      excerpt: 'Um tipo é gratuito e permanente. O outro pode ser editado depois de impresso, mediante assinatura. Veja como escolher.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Os códigos QR "estáticos" e "dinâmicos" parecem idênticos à primeira vista (o mesmo quadrado em preto e branco, ou colorido, decorado com logotipo), mas funcionam de maneiras fundamentalmente diferentes por baixo. Entender a diferença importa antes de você imprimir algumas centenas deles.',
            },
          ],
        },
        { type: 'h2', text: 'Códigos QR estáticos' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Um código QR estático tem seus dados reais (uma URL, uma senha de WiFi, um cartão de contato, texto simples, o que você escolher) codificados diretamente no padrão de módulos pretos e brancos. Quando um celular o escaneia, ele lê esses dados diretamente do próprio código. Não há servidor no meio, nenhuma conta por trás dele, e nada que possa sair do ar ou ser desligado depois. Ele funciona exatamente da mesma forma no dia em que você o imprime como funcionará daqui a dez anos. Este é o tipo de código QR que este gerador cria: construa uma vez, e ele é seu, de graça, para sempre. Veja ',
            },
            { t: 'link', v: 'os códigos QR expiram?', to: '/guides/do-qr-codes-expire' },
            { t: 'text', v: ' para mais detalhes sobre o que isso significa na prática.' },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'A contrapartida é que um código estático é fixo. Se você codificou um link e depois precisar que esse código aponte para outro lugar, terá que gerar e reimprimir um novo código; você não consegue editar o que já está incorporado no padrão.',
            },
          ],
        },
        { type: 'h2', text: 'Códigos QR dinâmicos' },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Um código QR dinâmico, em vez disso, codifica um link curto de redirecionamento que pertence a um serviço de terceiros (por exemplo, algo como ' },
            { t: 'code', v: 'qr.example.com/abc123' },
            {
              t: 'text',
              v: '). Ao ser escaneado, esse link curto redireciona para o destino que você definiu para ele, e como o destino do redirecionamento fica no servidor do serviço, e não dentro do código, você pode mudar o destino a qualquer momento sem reimprimir nada. A maioria dos serviços que oferecem isso também fornece análises de escaneamento (quantos escaneamentos, aproximadamente quando e onde).',
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Essa flexibilidade é real, mas vem com condições: os códigos dinâmicos geralmente exigem uma conta com o serviço que hospeda o redirecionamento, e muitos provedores impõem um limite de escaneamentos ou um limite de tempo no plano gratuito, depois do qual o código para de funcionar ou precisa de uma assinatura paga para continuar redirecionando. Se esse serviço algum dia sair do ar, ou você parar de pagar, todo código dinâmico que você já imprimiu quebra silenciosamente, mesmo que o quadrado impresso continue parecendo inalterado.',
            },
          ],
        },
        { type: 'h2', text: 'Qual você deve usar?' },
        {
          type: 'table',
          headers: ['Situação', 'Melhor opção'],
          rows: [
            ['Um link, rede WiFi ou cartão de contato que não vai mudar', 'Estático: gratuito, permanente, sem necessidade de conta'],
            ['Impresso uma vez para um evento único ou uma única tiragem de cardápio', 'Estático: nada para manter depois'],
            ['Você precisa de análises de escaneamento (quantos, quando)', 'Dinâmico: exige um serviço pago ou baseado em conta'],
            ['O link de destino pode mudar depois de imprimir milhares de cópias', 'Dinâmico: pode valer a assinatura nessa escala'],
          ],
        },
        { type: 'h2', text: 'O meio-termo prático' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Para a maioria dos usos individuais e de pequenos negócios (cardápios, acesso a WiFi, convites de eventos, cartões de visita, embalagens de produtos, links sociais), um código estático apontando para um link que você controla (seu próprio site, uma página que pode editar a qualquer momento) traz a maior parte do benefício de um código dinâmico sem uma assinatura. Você não consegue mudar o destino do código QR sem reimprimir, mas ',
            },
            { t: 'i', v: 'pode' },
            {
              t: 'text',
              v: ' mudar o que está publicado nesse destino sempre que quiser, já que o código apenas aponta para um link, não para um conteúdo fixo.',
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Esta ferramenta gera códigos QR estáticos com um ícone ou logotipo personalizado, nas cores e formato de sua escolha, disponíveis para download em PNG ou SVG. Experimente no nosso ',
            },
            { t: 'link', v: 'gerador de código QR personalizado →', to: '/custom-qr-code' },
          ],
        },
      ],
    },
    doQrCodesExpire: {
      title: 'Os Códigos QR Expiram? A Resposta Honesta',
      description:
        'Um código QR feito com um gerador gratuito como este não expira sozinho. Veja o que realmente pode quebrá-lo, e como garantir que o seu continue funcionando.',
      h1: 'Os Códigos QR Expiram?',
      excerpt: 'O código em si nunca expira, mas algumas coisas ainda podem impedi-lo de funcionar. Veja o que realmente acontece.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Resposta curta: não, um código QR em si não expira. O padrão de quadrados pretos e brancos é apenas uma forma de codificar dados. Ele não tem um relógio, uma conexão com servidor, nem uma assinatura vinculada a ele. Uma vez gerado, é uma imagem estática, e imagens estáticas não estragam. Mas essa não é bem toda a história, e vale a pena entender as exceções antes de imprimir um em algum lugar permanente.',
            },
          ],
        },
        { type: 'h2', text: 'Por que um código QR estático não expira' },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Um código QR feito com uma ferramenta gratuita como esta é um código ' },
            { t: 'b', v: 'estático' },
            {
              t: 'text',
              v: ': tudo o que você digitou (um link, uma senha de WiFi, um cartão de contato) é codificado diretamente no padrão do código. Não há nenhum servidor de terceiros envolvido na leitura dele. Um leitor lê o padrão e reconstrói os dados originais na hora, da mesma forma que faria no primeiro dia. Veja ',
            },
            { t: 'link', v: 'códigos QR estáticos vs. dinâmicos', to: '/guides/static-vs-dynamic-qr-codes' },
            {
              t: 'text',
              v: ' para o detalhamento completo de como isso difere dos códigos "dinâmicos" que alguns serviços pagos vendem, que passam por um link de redirecionamento que ',
            },
            { t: 'i', v: 'pode' },
            { t: 'text', v: ' ser desativado.' },
          ],
        },
        { type: 'h2', text: 'O que realmente pode impedir um código QR de funcionar' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Se um código QR que você fez meses ou anos atrás de repente "parou de funcionar", o código em si quase nunca mudou. Uma destas situações aconteceu em vez disso:',
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              { t: 'b', v: 'O destino desapareceu.' },
              {
                t: 'text',
                v: ' Se o código codifica um link, escaneá-lo ainda funciona normalmente, mas o celular simplesmente cai em uma página quebrada se aquele site, listagem de produto ou link de cardápio foi retirado do ar ou movido. Essa é, de longe, a causa mais comum, e não é exatamente o código QR "expirando"; é a página por trás dele desaparecendo.',
              },
            ],
            [
              { t: 'b', v: 'Um domínio venceu.' },
              {
                t: 'text',
                v: ' Se o link aponta para um domínio que não foi renovado, todo o site por trás dele sai do ar, derrubando junto todo código QR que aponta para ele.',
              },
            ],
            [
              { t: 'b', v: 'Era um código dinâmico em um serviço que saiu do ar ou deixou de ser pago.' },
              {
                t: 'text',
                v: ' Como mencionado no guia de estáticos vs. dinâmicos, esse é o único caso real em que um código QR pode deixar de funcionar com a imagem impressa permanecendo inalterada.',
              },
            ],
            [
              { t: 'b', v: 'A cópia física se degradou.' },
              {
                t: 'text',
                v: ' Uma impressão desbotada, rasgada ou muito arranhada pode se tornar ilegível. Isso também não é o código "expirando", apenas o desgaste comum do material em que foi impresso.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'Como criar um código QR que continua funcionando' },
        {
          type: 'ol',
          items: [
            [
              { t: 'b', v: 'Aponte-o para um link que você controla.' },
              { t: 'text', v: ' Seu próprio site ou uma página que você pode continuar renovando supera uma listagem de terceiros que você não controla.' },
            ],
            [
              { t: 'b', v: 'Mantenha seu domínio renovado' },
              { t: 'text', v: '; se o código aponta para o seu próprio site, configure a renovação automática se o seu registrador permitir.' },
            ],
            [
              { t: 'b', v: 'Prefira estático em vez de dinâmico' },
              {
                t: 'text',
                v: ' para tudo o que você quer que dure indefinidamente sem pagamento contínuo, a menos que precise especificamente de análises de escaneamento ou da capacidade de redirecionar o código para outro lugar depois.',
              },
            ],
            [
              { t: 'b', v: 'Imprima em um tamanho razoável e proteja-o.' },
              { t: 'text', v: ' Plastifique ou selar códigos que serão manuseados com frequência ou expostos ao tempo.' },
            ],
            [
              { t: 'b', v: 'Use alta correção de erros' },
              {
                t: 'text',
                v: ', para que um desgaste leve, uma mancha, ou um logotipo no centro não impeçam a leitura. Todo código desta ferramenta usa o nível mais alto de correção de erros exatamente por esse motivo.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'A versão resumida' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Um código QR gerado aqui não tem data de expiração, nenhuma assinatura, e nenhum serviço de terceiros que possa desativá-lo silenciosamente. O que quebra um código QR na prática é quase sempre o destino por trás dele, não o código. Mantenha o link ativo, e o código continua escaneável indefinidamente. Crie um no nosso ',
            },
            { t: 'link', v: 'gerador de código QR personalizado →', to: '/custom-qr-code' },
          ],
        },
      ],
    },
    smallBusiness: {
      title: 'Códigos QR para Pequenos Negócios: 6 Usos Práticos',
      description:
        'De links de pagamento a embalagens, cartões de visita a avaliações: formas práticas e de baixo custo de um pequeno negócio colocar um código QR gratuito para trabalhar.',
      h1: 'Códigos QR para Pequenos Negócios',
      excerpt: 'Formas práticas e de baixo custo de um pequeno negócio colocar um código QR para trabalhar, além do óbvio cardápio.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Um código QR é uma das ferramentas de marketing mais baratas que um pequeno negócio tem: gratuito para gerar, gratuito para imprimir junto com o que você já está imprimindo, e transforma qualquer superfície física (um recibo, um adesivo de vitrine, uma embalagem) em um link para algo online. Dois dos usos mais comuns, cardápios e acesso a WiFi, têm suas próprias ferramentas dedicadas aqui: veja ',
            },
            { t: 'link', v: 'códigos QR para cardápios', to: '/qr-code-for-menu' },
            { t: 'text', v: ' e ' },
            { t: 'link', v: 'códigos QR para WiFi', to: '/qr-code-for-wifi' },
            { t: 'text', v: '. Este guia cobre o resto.' },
          ],
        },
        { type: 'h2', text: '1. Links de pagamento e gorjeta' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Um código que abre um link de pagamento ou uma página de gorjeta é comum em recibos, balcões ou embalagens de entrega. Mantenha esse com contraste especialmente alto e teste-o cuidadosamente, já que os clientes desistem rapidamente de um código que não escaneia na primeira tentativa quando dinheiro está envolvido.',
            },
          ],
        },
        { type: 'h2', text: '2. Perfis sociais e links de avaliação' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Um único código perto do caixa ou em um recibo que leva à sua página de avaliações do Google Business ou Yelp remove a maior barreira para conseguir avaliações: ter que procurar por você. Um segundo código, ou uma página de link na bio, pode reunir seus perfis sociais.',
            },
          ],
        },
        { type: 'h2', text: '3. Cartões de visita' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Um código QR em um cartão de visita que codifica um cartão de contato (esta ferramenta tem um tipo dedicado para isso) permite que alguém salve seu nome, número e e-mail no celular com um único escaneamento, em vez de digitar tudo depois, que é justamente o momento em que a maioria dos contatos digitados à mão nunca chega a ser salva.',
            },
          ],
        },
        { type: 'h2', text: '4. Embalagens de produtos' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Um código na embalagem pode levar a instruções de cuidado, um registro de garantia, uma lista de ingredientes ou alérgenos, ou um vídeo de "como usar isso": informações que, de outra forma, precisariam de um encarte impresso. Também é uma forma natural de direcionar para uma página de avaliação depois de uma compra.',
            },
          ],
        },
        { type: 'h2', text: '5. Panfletos e cartazes de eventos' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Um código que leva diretamente a uma página de ingressos ou a um formulário de confirmação de presença em um panfleto remove uma etapa entre alguém ver seu cartaz e realmente se inscrever, em comparação a fazer essa pessoa procurar seu evento pelo nome depois.',
            },
          ],
        },
        { type: 'h2', text: '6. Um código personalizado e com a cara da sua marca' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'Um código QR genérico parece que poderia pertencer a qualquer um. Escolher um ícone distinto ou enviar seu logotipo torna seus códigos reconhecíveis à primeira vista em recibos, embalagens e sinalização. Experimente o ',
            },
            { t: 'link', v: 'gerador de código QR personalizado', to: '/custom-qr-code' },
            { t: 'text', v: ' para combinar com as cores e o estilo da sua marca, ou o ' },
            { t: 'link', v: 'gerador de logotipo', to: '/qr-code-with-logo' },
            { t: 'text', v: ' para usar seu próprio logotipo diretamente.' },
          ],
        },
        { type: 'h2', text: 'Antes de imprimir em grande quantidade' },
        {
          type: 'ul',
          items: [
            [{ t: 'text', v: 'Escaneie cada código com pelo menos dois celulares diferentes primeiro.' }],
            [{ t: 'text', v: 'Mantenha o contraste alto e evite cobrir os três quadrados dos cantos.' }],
            [
              { t: 'text', v: 'Lembre-se de que são códigos estáticos. Veja ' },
              { t: 'link', v: 'códigos QR estáticos vs. dinâmicos', to: '/guides/static-vs-dynamic-qr-codes' },
              { t: 'text', v: ' se você espera que um link de destino mude com frequência depois de impresso.' },
            ],
            [{ t: 'text', v: 'Dimensione o código para a distância de onde ele realmente será escaneado.' }],
          ],
        },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Todo caso de uso acima começa da mesma forma: abra o ' },
            { t: 'link', v: 'gerador de código QR', to: '/' },
            { t: 'text', v: ', escolha o tipo que combina com o que você precisa, e personalize o ícone e as cores para combinar com o seu negócio.' },
          ],
        },
      ],
    },
  },
}
