export interface QuizOption {
  text: string;
  points: number;
}

export interface QuizQuestion {
  id: string; // Ex: "Q1", "Q2", ...
  scenario: string;
  options: QuizOption[];
}

export interface SabotageLevel {
  level: number; // 1 a 6
  title: string;
  emoji: string; // Emoji para representar o nível
  description: string;
  lema: string;
  minScore: number;
  maxScore: number;
  imageFileName: string; // Novo campo para o nome do arquivo da imagem
}

// --- DADOS DO QUIZ ---

export const sabotageLevels: SabotageLevel[] = [
  {
    level: 1,
    title: "Faísca da Distração",
    emoji: "✨",
    description: "Você tropeça na desordem mais do que a cria. Suas 'sabotagens' são geralmente fruto do acaso ou de uma incompreensão genuína das 'boas práticas'.",
    lema: "Foi sem querer... de novo.",
    minScore: 0,
    maxScore: 12,
    imageFileName: "faisca.png",
  },
  {
    level: 2,
    title: "Semente do Caos Sutil",
    emoji: "🌱",
    description: "Você já percebeu que uma pergunta 'inocente' na hora certa pode atrasar uma reunião. Começando a entender o poder da pequena confusão.",
    lema: "Só estou tentando entender o processo... bem devagar.",
    minScore: 13,
    maxScore: 25,
    imageFileName: "semente.png",
  },
  {
    level: 3,
    title: "Artífice da Procrastinação Eficaz",
    emoji: "⏳",
    description: "Você domina a arte de parecer ocupado enquanto adia o essencial. Reuniões para preparar outras reuniões são sua especialidade.",
    lema: "Vamos discutir isso na próxima call de alinhamento sobre o pré-planejamento.",
    minScore: 26,
    maxScore: 40,
    imageFileName: "artifice.png",
  },
  {
    level: 4,
    title: "Arquiteto(a) da Burocracia Criativa",
    emoji: "🏗️",
    description: "Novos formulários? Comitês para aprovar atas? Você vê oportunidades de 'melhoria de processo' em todo lugar, especialmente se adicionarem etapas.",
    lema: "Para garantir a qualidade, precisamos de mais um formulário e três assinaturas.",
    minScore: 41,
    maxScore: 55,
    imageFileName: "arquiteto.png",
  },
  {
    level: 5,
    title: "Estrategista da Desordem Planejada",
    emoji: "🗺️",
    description: "Suas ações têm um impacto mais amplo. Você não apenas atrasa projetos, você os redireciona para abismos de complexidade com um sorriso.",
    lema: "Não é sobre impedir o progresso, é sobre redefinir o que 'progresso' significa... constantemente.",
    minScore: 56,
    maxScore: 70,
    imageFileName: "estrategista.png",
  },
  {
    level: 6,
    title: "Eminência da Entropia Organizacional",
    emoji: "👑",
    description: "Você é uma força da natureza. Departamentos inteiros podem ser reestruturados (e paralisados) sob sua 'visão'. O caos o segue como uma sombra.",
    lema: "Ordem é para os fracos. Eu prefiro um 'ecossistema dinâmico de prioridades fluidas'.",
    minScore: 71,
    maxScore: 84,
    imageFileName: "eminencia.png",
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "Q1",
    scenario: "Você está em uma reunião e o tema principal está quase sendo resolvido. O que você faz?",
    options: [
      { text: "Ajudar a focar nos próximos passos e encerrar a discussão de forma objetiva.", points: 0 },
      { text: "Lembrar de um 'pequeno detalhe' relacionado a outro projeto, só para 'aproveitar que todos estão aqui'.", points: 3 },
      { text: "Sugerir que, antes de decidir, seria bom ouvir a opinião de um departamento que não foi convidado, talvez em uma nova reunião.", points: 5 },
      { text: "Iniciar um debate filosófico sobre o 'real significado' do problema, garantindo que a decisão seja adiada para um 'alinhamento estratégico' futuro.", points: 7 },
    ],
  },
  {
    id: "Q2",
    scenario: "Durante uma sessão de brainstorming, um colega apresenta uma ideia inovadora, mas um pouco diferente do usual. Sua reação é:",
    options: [
      { text: "Incentivar a ideia, explorando seus pontos positivos e como poderia ser desenvolvida.", points: 0 },
      { text: "Ficar em silêncio, mas fazer uma careta sutil de desaprovação que todos percebem.", points: 3 },
      { text: "Dizer 'Interessante, mas... não sei, não me agrada muito. Não consigo explicar o porquê.'", points: 5 },
      { text: "Interromper com 'Já tentamos algo parecido e foi um desastre. Além disso, o cliente X jamais aprovaria isso. Próxima ideia!'", points: 7 },
    ],
  },
  {
    id: "Q3",
    scenario: "Uma decisão precisa ser tomada rapidamente pela equipe, mas há algumas opiniões divergentes. Você propõe:",
    options: [
      { text: "Facilitar uma votação rápida ou seguir a recomendação de quem tem mais expertise no assunto.", points: 1 },
      { text: "Sugerir que todos escrevam suas opiniões anonimamente para serem 'analisadas depois'.", points: 3 },
      { text: "Insistir que a decisão só pode ser tomada com 100% de consenso, mesmo que isso signifique horas de debate sobre detalhes mínimos.", points: 5 },
      { text: "Formar um comitê especial para analisar todas as perspectivas e apresentar um relatório preliminar em duas semanas, para então marcar uma nova reunião de decisão.", points: 7 },
    ],
  },
  {
    id: "Q4",
    scenario: "A empresa está considerando adotar uma nova ferramenta tecnológica para simplificar um processo. Sua contribuição é:",
    options: [
      { text: "Participar dos testes, focar nos benefícios e ajudar na transição da equipe.", points: 0 },
      { text: "Perguntar se a nova ferramenta se integra com aquele sistema legado que ninguém mais usa, mas que você 'acha importante'.", points: 3 },
      { text: "Criar uma planilha comparativa com 57 critérios de avaliação entre a nova ferramenta e a antiga, incluindo 'aderência à cultura da empresa' e 'potencial de sinergia interdepartamental'.", points: 5 },
      { text: "Sugerir que, em vez de uma ferramenta, seria melhor desenvolver uma solução 'customizada internamente', liderada por um novo grupo de trabalho que você se oferece para coordenar (sem prazo definido).", points: 7 },
    ],
  },
  {
    id: "Q5",
    scenario: "Você precisa comunicar uma atualização importante para sua equipe. Como você procede?",
    options: [
      { text: "Enviar um e-mail claro, conciso e direto ao ponto, destacando as ações necessárias.", points: 0 },
      { text: "Mencionar casualmente durante o café, esperando que a informação se espalhe organicamente.", points: 2 },
      { text: "Enviar um e-mail longo e detalhado, com várias seções, anexos opcionais e cópia para todos os gerentes da empresa 'para ciência'.", points: 5 },
      { text: "Criar um novo grupo de WhatsApp chamado 'Alinhamento Urgente - ATUALIZAÇÃO', enviar um áudio de 5 minutos explicando, e depois marcar uma reunião 'rápida' de 1 hora para 'tirar dúvidas'.", points: 7 },
    ],
  },
  {
    id: "Q6",
    scenario: "Sua equipe identificou um pequeno gargalo em um fluxo de trabalho. Sua sugestão para 'otimizar' é:",
    options: [
      { text: "Propor uma solução simples e direta que resolva o gargalo com o mínimo de impacto.", points: 0 },
      { text: "Sugerir que o gargalo seja 'monitorado por mais algumas semanas' para 'coletar mais dados'.", points: 3 },
      { text: "Desenvolver um novo formulário de 'Solicitação de Análise de Gargalo', com aprovação de três níveis hierárquicos, antes de qualquer ação.", points: 5 },
      { text: "Organizar um workshop de um dia inteiro para 'mapeamento completo de todos os processos adjacentes', com o objetivo de criar um 'manual de boas práticas de prevenção de gargalos', a ser revisado trimestralmente por um comitê.", points: 7 },
    ],
  },
  {
    id: "Q7",
    scenario: "É uma terça-feira normal, e você tem uma lista clara de prioridades. De repente, surge uma 'nova iniciativa urgente' do departamento vizinho. Você:",
    options: [
      { text: "Avalia a urgência real, negocia prazos se necessário e tenta encaixar sem comprometer suas prioridades principais.", points: 1 },
      { text: "Suspira dramaticamente, diz que 'vai tentar ver o que consegue', e deixa a nova tarefa acumular poeira na sua caixa de entrada.", points: 3 },
      { text: "Abandona suas prioridades, mergulha de cabeça na 'nova urgência' e envia e-mails a cada hora para mostrar o quanto está 'correndo atrás do prejuízo'.", points: 5 },
      { text: "Convoca uma reunião de 'Força-Tarefa Interdepartamental para Sinergia em Novas Iniciativas Urgentes', se voluntaria para liderar e passa o resto da semana criando a apresentação de kick-off.", points: 7 },
    ],
  },
  {
    id: "Q8",
    scenario: "A empresa lança uma nova campanha sobre 'Inovação e Transparência'. Na primeira reunião sobre o tema, você:",
    options: [
      { text: "Faz perguntas construtivas sobre como esses valores serão aplicados na prática e se oferece para ajudar.", points: 0 },
      { text: "Comenta com o colega ao lado: 'Já vi esse filme antes...', mas não diz nada em público.", points: 2 },
      { text: "Pede a palavra para discorrer longamente sobre como a 'transparência', em sua essência filosófica, pode ser um paradoxo em ambientes corporativos, citando Foucault.", points: 5 },
      { text: "Propõe a criação de um 'Observatório de Inovação e Transparência', com relatórios mensais, dashboards e um prêmio anual para o 'Guardião(ã) da Transparência', a ser definido por um complexo sistema de votação.", points: 7 },
    ],
  },
  {
    id: "Q9",
    scenario: "Seu projeto foi concluído com sucesso. A etapa final é a documentação. Você decide:",
    options: [
      { text: "Criar um resumo objetivo dos resultados, lições aprendidas e próximos passos recomendados.", points: 1 },
      { text: "Adiar a documentação o máximo possível, afinal, 'o importante é que funcionou'.", points: 3 },
      { text: "Produzir um relatório detalhado de 80 páginas, incluindo o histórico completo de todas as atas de reunião, e-mails trocados e um apêndice com gráficos de pizza sobre o consumo de café da equipe.", points: 5 },
      { text: "Insistir que a documentação só pode ser considerada 'completa' após ser validada por um 'Comitê de Revisão de Documentação de Projetos Estratégicos', que ainda precisa ser formalmente instituído.", points: 7 },
    ],
  },
  {
    id: "Q10",
    scenario: "Você tem uma reunião de acompanhamento de projeto em 30 minutos. Como você se prepara?",
    options: [
      { text: "Revisa rapidamente os pontos principais, suas pendências e os objetivos da reunião.", points: 0 },
      { text: "Abre a pauta 2 minutos antes, enquanto pega um café.", points: 2 },
      { text: "Imprime todas as atas das reuniões anteriores do projeto e começa a lê-las em voz alta para 'entrar no clima', mesmo que esteja sozinho(a).", points: 4 },
      { text: "Prepara uma apresentação de slides de 15 minutos sobre 'A importância do alinhamento e da comunicação eficaz em projetos de alto impacto', para iniciar a reunião, mesmo que o objetivo seja apenas um status update rápido.", points: 6 },
    ],
  },
  {
    id: "Q11",
    scenario: "Um pequeno imprevisto técnico ameaça atrasar uma entrega secundária do projeto. Sua primeira ação é:",
    options: [
      { text: "Analisar a causa raiz rapidamente e buscar uma solução prática com a equipe técnica.", points: 1 },
      { text: "Enviar um e-mail para toda a liderança com o assunto 'ALERTA MÁXIMO: RISCO IMINENTE NO PROJETO!', sem oferecer soluções.", points: 3 },
      { text: "Sugerir uma 'reavaliação completa da arquitetura do sistema' para 'prevenir futuros imprevistos semelhantes', transformando o pequeno problema em um projeto de meses.", points: 6 },
      { text: "Culpar o departamento de TI, o fornecedor da ferramenta e as fases da lua, e propor uma 'reunião de crise' com todos os envolvidos para 'discutir responsabilidades'.", points: 7 },
    ],
  },
  {
    id: "Q12",
    scenario: "Uma nova iniciativa promissora está começando na empresa e buscam voluntários para ajudar a decolar. Você se oferece para:",
    options: [
      { text: "Contribuir com suas habilidades específicas nas tarefas que realmente impulsionam a iniciativa.", points: 0 },
      { text: "Participar das reuniões iniciais para 'entender melhor', mas sem se comprometer com entregas concretas.", points: 3 },
      { text: "Elaborar o 'Manual de Procedimentos Operacionais Padrão da Nova Iniciativa' antes mesmo da primeira entrega, com fluxogramas detalhados para cada possível cenário.", points: 5 },
      { text: "Propor e presidir o 'Comitê Consultivo Estratégico da Nova Iniciativa', responsável por aprovar cada etapa e garantir o 'alinhamento com as diretrizes corporativas globais'.", points: 7 },
    ],
  },
];
