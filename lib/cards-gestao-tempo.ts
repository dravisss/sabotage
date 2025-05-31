import { TacticCardData } from './manual-content';

export const gestaoTempoTactics: TacticCardData[] = [
  // TÁTICAS LEVES
  {
    title: "Pra Ontem",
    icon: "🕰️",
    subtitle: "Pra ontem, sempre!",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["Pressão Artificial"],
    modusOperandi: [
      "Defina prazos impossíveis e comunique entregas como se já estivessem atrasadas.",
      "Cobre resultados de tarefas que nem foram combinadas ainda.",
      "Use o argumento do 'mercado' ou 'cliente' para justificar a urgência retroativa."
    ],
    effects: [
      "Sensação crônica de débito e ansiedade.",
      "Desorganização dos fluxos de trabalho.",
      "Culpa coletiva por metas inalcançáveis."
    ],
    antidote: "Formalize acordos de prazo antes de iniciar qualquer tarefa. Só aceite demandas retroativas mediante consenso explícito e revisão coletiva das prioridades, de modo que ninguém seja responsabilizado por prazos não pactuados.",
    tags: ["#GestãoDeTempo", "#Prazos", "#Pressão"]
  },
  {
    title: "Incêndio Diário",
    icon: "⏳",
    subtitle: "Cada dia um novo incêndio.",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["Confusão Sistêmica"],
    modusOperandi: [
      "Repriorize tarefas todos os dias, mudando o foco conforme o humor da liderança.",
      "Nunca explique o critério da mudança.",
      "Faça parecer que só quem se adapta sobrevive."
    ],
    effects: [
      "Sensação constante de instabilidade.",
      "Dificuldade de concluir tarefas e projetos.",
      "Desgaste emocional e perda de confiança na gestão."
    ],
    antidote: "Estabeleça critérios claros e revisáveis para mudanças de prioridade. Só altere o foco após consulta aberta e acolhimento de objeções, de modo que todos compreendam e aceitem o novo direcionamento.",
    tags: ["#GestãoDeTempo", "#Prioridades", "#Mudança"]
  },
  {
    title: "Multitasking",
    icon: "🤹‍♂️",
    subtitle: "Comece tudo, termine nada.",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["Dispersão"],
    modusOperandi: [
      "Incentive que todos trabalhem em múltiplas tarefas ao mesmo tempo.",
      "Valorize quem está sempre ocupado, mesmo sem entregar nada.",
      "Desencoraje foco profundo ou períodos de concentração."
    ],
    effects: [
      "Redução da qualidade e aumento de retrabalho.",
      "Sensação de estar sempre atrasado.",
      "Desgaste mental e queda de motivação."
    ],
    antidote: "Construa acordos sobre limites de tarefas simultâneas e incentive pausas para foco. Permita que cada pessoa negocie prioridades e bloqueie novas demandas até concluir o que já está em andamento.",
    tags: ["#GestãoDeTempo", "#Multitarefa", "#Foco"]
  },
  {
    title: "Estresse Viral",
    icon: "🧨",
    subtitle: "A urgência de um vira a urgência de todos.",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["Contágio de Estresse"],
    modusOperandi: [
      "Permita que demandas urgentes de um gestor se espalhem instantaneamente para toda a equipe.",
      "Ignore prioridades já pactuadas.",
      "Faça parecer que tudo depende de uma resposta imediata coletiva."
    ],
    effects: [
      "Desorganização das rotinas e prioridades.",
      "Aumento do estresse e do conflito interno.",
      "Dificuldade de planejar e entregar com qualidade."
    ],
    antidote: "Estabeleça acordos explícitos sobre como lidar com urgências, prevendo critérios para interrupção do fluxo e validando coletivamente a real necessidade de mobilização geral.",
    tags: ["#GestãoDeTempo", "#Urgência", "#Prioridades"]
  },
  {
    title: "Microdoses de Controle",
    icon: "📋",
    subtitle: "Detalhe tudo, avance nada.",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["Controle Exagerado"],
    modusOperandi: [
      "Institua reuniões diárias onde cada pessoa precisa relatar cada microtarefa.",
      "Foque em detalhes irrelevantes em vez de bloqueios reais.",
      "Use o tempo coletivo para controle, não para alinhamento."
    ],
    effects: [
      "Perda de tempo e energia.",
      "Desmotivação e sensação de vigilância constante.",
      "Bloqueio da autonomia e criatividade."
    ],
    antidote: "Defina acordos sobre o objetivo das reuniões diárias, priorizando bloqueios e ajustes colaborativos. Permita que qualquer pessoa questione o formato e proponha mudanças sempre que sentir perda de tempo ou excesso de controle.",
    tags: ["#GestãoDeTempo", "#Microgerenciamento", "#Reunião"]
  },
  {
    title: "Ansiedade Digital",
    icon: "⚡",
    subtitle: "Responder rápido é mais importante que pensar.",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["Ansiedade Digital"],
    modusOperandi: [
      "Espere que todas as mensagens sejam respondidas em minutos, não importa a complexidade.",
      "Cobre respostas fora do horário de trabalho.",
      "Trate qualquer demora como descompromisso."
    ],
    effects: [
      "Interrupção constante do trabalho focado.",
      "Aumento do estresse e da superficialidade das respostas.",
      "Dificuldade de aprofundamento e aprendizado real."
    ],
    antidote: "Pactue horários e critérios para resposta a mensagens, priorizando períodos de foco ininterrupto. Procure criar condições para que ninguém seja cobrado por não responder fora dos acordos estabelecidos e permita revisão coletiva desses pactos.",
    tags: ["#GestãoDeTempo", "#Comunicação", "#Foco"]
  },

  // TÁTICAS DRASTICAS
  {
    title: "Métrica Críptica",
    icon: "🧩",
    subtitle: "Siga o que você não entende.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Complexidade Artificial"],
    modusOperandi: [
      "Crie OKRs com linguagem rebuscada e metas vagas.",
      "Mude os indicadores no meio do ciclo sem explicar.",
      "Exija alinhamento cego, mesmo sem compreensão coletiva."
    ],
    effects: [
      "Desengajamento e confusão generalizada.",
      "Foco em métricas irrelevantes.",
      "Dificuldade de mensurar resultados reais."
    ],
    antidote: "Construa objetivos e indicadores de forma colaborativa, usando linguagem simples e pactuando o significado de cada meta. Só avance quando todos compreenderem e consentirem com os critérios de sucesso.",
    tags: ["#GestãoDeTempo", "#OKR", "#Metas"]
  },
  {
    title: "Meta Forçada",
    icon: "🎯",
    subtitle: "Meta boa é meta recebida por e-mail.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Imposição"],
    modusOperandi: [
      "Defina metas sem consultar quem vai realizá-las.",
      "Ignore sugestões e objeções da equipe.",
      "Altere as metas sem aviso prévio."
    ],
    effects: [
      "Desmotivação e sensação de injustiça.",
      "Baixa adesão e criatividade bloqueada.",
      "Aumento do turnover e do cinismo institucional."
    ],
    antidote: "Formalize acordos sobre metas e critérios de ajuste, garantindo espaço para objeções e propostas de quem vai executar. Só avance com metas quando houver entendimento e aceitação coletiva.",
    tags: ["#GestãoDeTempo", "#Metas", "#Participação"]
  },
  {
    title: "Plano Fantasma",
    icon: "📅",
    subtitle: "Planeje por semanas para operar no improviso.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Planejamento Fake"],
    modusOperandi: [
      "Gaste semanas elaborando planos detalhados que nunca serão usados.",
      "Ignore o planejamento assim que surgirem as primeiras urgências.",
      "Mantenha o documento em local de difícil acesso."
    ],
    effects: [
      "Desperdício de tempo e energia.",
      "Desalinhamento entre discurso e prática.",
      "Sensação de que o planejamento é só para 'inglês ver'."
    ],
    antidote: "Estabeleça revisões frequentes e pactue ajustes no planejamento conforme surgem novas demandas. Só altere o rumo após consulta aberta e validação coletiva da real necessidade de mudança.",
    tags: ["#GestãoDeTempo", "#Planejamento", "#Estratégia"]
  },
  {
    title: "Tudo Urgente",
    icon: "🚨",
    subtitle: "Tudo é urgente, nada é importante.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Prioridade Artificial"],
    modusOperandi: [
      "Crie uma categoria de prioridade acima de todas as outras.",
      "Declare que tudo é 'TOP URGENTE', tornando impossível qualquer triagem real.",
      "Cobre resultados impossíveis em prazos incompatíveis."
    ],
    effects: [
      "Paralisia decisória.",
      "Aumento do estresse e do conflito por recursos.",
      "Desorganização total das entregas."
    ],
    antidote: "Construa critérios explícitos para definição de urgências e permita que qualquer pessoa questione ou bloqueie demandas classificadas como 'prioridade zero' sem justificativa clara. Só avance após consenso sobre o que realmente é urgente.",
    tags: ["#GestãoDeTempo", "#PrioridadeZero", "#Urgência"]
  },
  {
    title: "O Projeto Zumbi",
    icon: "🧟‍♂️",
    subtitle: "Fracassou, mas ninguém admite.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Inércia Institucional"],
    modusOperandi: [
      "Mantenha projetos fracassados ativos para não admitir erro.",
      "Continue alocando recursos mesmo sem resultados.",
      "Evite conversas francas sobre encerramento."
    ],
    effects: [
      "Desperdício de tempo, dinheiro e energia.",
      "Desânimo coletivo e cinismo institucional.",
      "Impossibilidade de inovar ou recomeçar."
    ],
    antidote: "Pactue critérios objetivos e revisáveis para encerramento de projetos. Permita que qualquer pessoa proponha o fim de um projeto e permitindo que decisões de continuidade só avancem após análise aberta dos resultados e consentimento do grupo.",
    tags: ["#GestãoDeTempo", "#Projetos", "#Encerramento"]
  },
  {
    title: "A Delegação Reversa",
    icon: "🔄",
    subtitle: "O problema volta para quem delegou.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Fuga de Responsabilidade"],
    modusOperandi: [
      "Permita que a equipe devolva problemas ao gestor diante de qualquer obstáculo.",
      "Desestimule a busca autônoma por soluções.",
      "Centralize decisões e bloqueie a experimentação coletiva."
    ],
    effects: [
      "Sobrecarga da liderança e paralisia da equipe.",
      "Desenvolvimento bloqueado de autonomia e confiança.",
      "Cultura de dependência e medo de errar."
    ],
    antidote: "Construa acordos sobre autonomia e critérios para escalonamento de problemas. Procure criar condições para que cada pessoa tenha espaço para propor soluções e que o gestor só seja envolvido após tentativas reais de resolução coletiva, com apoio mútuo.",
    tags: ["#GestãoDeTempo", "#Delegação", "#Autonomia"]
  }
];
