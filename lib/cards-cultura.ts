import { TacticCardData } from './manual-content';

export const culturaTactics: TacticCardData[] = [
  // TÁTICAS LEVES
  {
    title: "O Otimismo Tóxico",
    icon: "😃",
    subtitle: "Sorria, tá tudo ótimo!",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["Positividade Excessiva"],
    modusOperandi: [
      "Responda a qualquer reclamação ou problema com frases como 'vai dar tudo certo!' ou 'pense positivo!'.",
      "Ignore sinais de burnout, conflitos ou falhas sistêmicas em nome do 'bom clima'.",
      "Transforme reuniões de feedback em sessões de autoajuda, onde só é permitido falar de conquistas e sentimentos bons."
    ],
    effects: [
      "Problemas reais deixam de ser discutidos, perpetuando disfunções.",
      "Ambiente de negação coletiva e superficialidade.",
      "Colaboradores se sentem isolados ou culpados por emoções legítimas."
    ],
    antidote: "Estabeleça acordos explícitos sobre como lidar com críticas e desconfortos. Crie rituais regulares para revisar práticas e ajustar rotas coletivamente, de modo que qualquer pessoa possa propor mudanças e que decisões sejam tomadas apenas quando não houver objeção fundamentada.",
    tags: ["#Cultura", "#OtimismoTóxico", "#Negação", "#Feedback"]
  },
  {
    title: "A Campanha de Engajamento Unilateral",
    icon: "📢",
    subtitle: "Engaje-se! (mas só do meu jeito)",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["Engajamento Fake"],
    modusOperandi: [
      "Lance campanhas de engajamento baseadas em slogans e brindes, sem consultar ninguém sobre o que realmente importa.",
      "Ignore sugestões vindas da base e celebre apenas as ideias da liderança.",
      "Transforme qualquer crítica em 'falta de espírito de equipe'."
    ],
    effects: [
      "Desconexão entre discurso e prática.",
      "Apatia generalizada e cinismo em relação a iniciativas institucionais.",
      "Reforço da cultura top-down e da alienação dos trabalhadores."
    ],
    antidote: "Construa acordos claros sobre o que significa engajamento e permita que qualquer pessoa possa propor iniciativas. Decisões sobre campanhas devem ser tomadas apenas após escuta ativa e ajustes para contemplar objeções relevantes, tornando o engajamento um pacto real e revisável.",
    tags: ["#Cultura", "#Engajamento", "#TopDown", "#Alienação"]
  },
  {
    title: "A Pesquisa de Clima Decorativa",
    icon: "📊",
    subtitle: "Finja ouvir e arquive",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["Pesquisa Inócua"],
    modusOperandi: [
      "Realize pesquisas de clima anuais com perguntas genéricas e respostas anônimas que nunca geram ação.",
      "Divulgue relatórios coloridos, mas ignore as demandas mais críticas.",
      "Use a pesquisa como argumento de que 'a empresa se importa', mesmo sem mudar nada."
    ],
    effects: [
      "Descrédito completo dos processos participativos.",
      "Naturalização da ausência de mudanças reais.",
      "Aumento do cinismo e da desmobilização coletiva."
    ],
    antidote: "Procure criar condições para que toda pesquisa resulte em compromissos explícitos e revisáveis, pactuados com quem será impactado. Torne visíveis os critérios de decisão e permita que qualquer pessoa questione ou proponha ajustes antes da implementação.",
    tags: ["#Cultura", "#PesquisaDeClima", "#Inação", "#PrestaçãoDeContas"]
  },
  {
    title: "Elogio em Público, Correção no Privado",
    icon: "🔊",
    subtitle: "Critique alto, celebre baixo",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["Feedback Público"],
    modusOperandi: [
      "Repreenda colaboradores por pequenos erros em reuniões abertas, usando tom didático ou sarcástico.",
      "Ignore conquistas relevantes ou trate-as como obrigação mínima.",
      "Crie um ambiente onde o medo do ridículo supera qualquer motivação por reconhecimento."
    ],
    effects: [
      "Clima de insegurança e retraimento.",
      "Desestímulo à inovação e à exposição de ideias.",
      "Aumento da rotatividade e da competição tóxica."
    ],
    antidote: "Defina acordos transparentes sobre reconhecimento e feedback, de modo que todos possam questionar publicamente práticas injustas. Valorize a reparação imediata e a revisão coletiva de padrões de comunicação, sempre priorizando o consentimento dos envolvidos.",
    tags: ["#Cultura", "#Feedback", "#Reconhecimento", "#PsicologiaDoMedo"]
  },
  {
title: "Guerra das cadeiras",
    icon: "💺",
    subtitle: "Sobreviva à guerra das cadeiras",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["Escassez Artificial"],
    modusOperandi: [
      "Distribua poucos recursos básicos (cadeiras, monitores, materiais) e incentive disputas silenciosas por eles.",
      "Premie quem 'se vira' ou faz favores para conseguir o mínimo necessário.",
      "Naturalize o ressentimento e a competição entre colegas."
    ],
    effects: [
      "Relações deterioradas e clima de desconfiança.",
      "Desvio de foco do trabalho para questões banais.",
      "Reforço de hierarquias informais e favoritismos."
    ],
    antidote: "Estabeleça critérios claros e pactuados para distribuição de recursos, revisando-os regularmente com participação aberta. Permita que qualquer pessoa levante objeções e proponha ajustes sempre que perceber desigualdade ou privilégio oculto.",
    tags: ["#Cultura", "#Escassez", "#Competição", "#GestãoColetiva"]
  },
  {
title: "Burnout premium",
    icon: "⏰",
    subtitle: "Quem sai cedo não é comprometido",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["Horas Extras", "Produtividade Tóxica"],
    modusOperandi: [
      "Valorize publicamente quem permanece no escritório até tarde, independentemente da produtividade real.",
      "Crie rankings informais de 'dedicação' baseados em horas trabalhadas.",
      "Estigmatize quem cumpre apenas sua jornada regular."
    ],
    effects: [
      "Normalização do excesso de trabalho e do burnout.",
      "Desvalorização do equilíbrio entre vida e trabalho.",
      "Redução da eficiência e aumento de erros por exaustão."
    ],
    antidote: "Formalize acordos sobre limites de jornada e critérios de reconhecimento, tornando-os públicos e revisáveis. Procure criar condições para que qualquer alteração só ocorra após consulta e consentimento do grupo, priorizando autonomia e equilíbrio real.",
    tags: ["#Cultura", "#HorasExtras", "#Burnout", "#Autonomia"]
  },
  {
    title: "O 'Team Building' Forçado",
    icon: "🥳",
    subtitle: "Diversão obrigatória",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["Integração Artificial", "Falta de Consentimento"],
    modusOperandi: [
      "Organize eventos de integração fora do horário de trabalho, sem consultar preferências ou limites dos participantes.",
      "Torne a participação obrigatória, sob pena de ser visto como 'descomprometido'.",
      "Escolha atividades genéricas e descontextualizadas, ignorando diversidade e necessidades reais."
    ],
    effects: [
      "Aumento do ressentimento e da sensação de invasão de privacidade.",
      "Desconexão entre os objetivos do evento e as demandas do grupo.",
      "Desgaste das relações interpessoais."
    ],
    antidote: "Estabeleça que toda atividade de integração deve ser proposta e ajustada coletivamente, com participação sempre voluntária. Decisões só avançam se nenhum participante levantar objeção relevante, respeitando limites e interesses diversos.",
    tags: ["#Cultura", "#Integração", "#Consentimento", "#Autogestão"]
  },

  {
    title: "Do grego “Strategía”",
    icon: "🧠",
    subtitle: "Reúna um petit comitê de pessoas estratégicas, de preferência fora do escritório para dar ares de algo mais importante do que é de fato",
    level: "Tática Drástica",
    damageLevel: 5,
    dangerTags: ["EstratégiaSuperficial", "AbstraçãoExcessiva"],
    modusOperandi: [
      "Reúna um petit comitê de pessoas estratégicas, de preferência fora do escritório para dar ares de algo mais importante do que é de fato",
      "Introduza um ou mais frameworks de alguma consultoria ou livro de autoajuda organizacional para conferir autoridade ao trabalho",
      "Diga a palavra “propósito” a cada cinco palavras ditas",
      "Mantenha a conversa num nível alto de abstração: missão, visão, valores, arenas de competição, must-win-battles, BHAGs, moonshots, etc",
      "Não faça renúncias. Não discuta implicações práticas das escolhas desejadas. Não aprofunde como materializar nada. Apenas sonhe os próximos 5 anos.",
      "Responsabilize a liderança por cascatear o que foi produzido. Mesmo que seja nada. Estabeleça prazos para isso ser realizado.",
      "Peça ao RH para registrar tudo e fazer o tracking disso. Juntamente com qualquer outro time como Escritório de Projeto; Governança; Change Management etc. Cada um do seu jeito."
    ],
    effects: [
      "Sensação superficial de dever cumprido e posterior insônia",
      "Bate cabeça da peãozada que não faz a menor ideia do que precisa fazer",
      "Ansiedade generalizada por algo esperado que ninguém sabe direito o que é ou como será entregue",
      "Burnout devido ao excesso de trabalho que só aumenta com novas prioridades, metas contraditórias e cobrança de vários lugares"
    ],
    antidote: "Não trate estratégia como um evento glamouroso da casta dos nobres, mas como um processo regular e participativo. Entenda quais são as tensões vividas no dia a dia da organização através de diferentes perspectivas: área, papel, tempo de casa e outras demografias. Traduza essas tensões em grandes desafios da organização. Escolha caminhos para tratar os principais desafios partindo de hipóteses que podem ser testadas. Abra um espaço de diálogo para que pessoas de diferentes estratos organizacionais explicitem as implicações práticas e renúncias necessárias para seguir nesses caminhos. Verifique regularmente que ajustes de rota estão sendo requeridos.",
    tags: ["#Cultura", "#Strategia", "#Abstracao"]
  },
  {
    title: "Treinamento da Firma",
    icon: "🎓",
    subtitle: "Assuma que um determinado time tem algum problema genérico e resolva tudo com um curso motivacional externo",
    level: "Tática Moderada",
    damageLevel: 3,
    dangerTags: ["TreinamentoMotivacional", "PerdaDeTempo"],
    modusOperandi: [
      "Assuma que um determinado time tem algum problema genérico como: falta de proatividade; trabalha em silos; não se compromete com o resultado; é infantil e não lida bem com feedbacks; não sabe tirar o melhor de suas pessoas; não tem fit com a nossa cultura; não está preparado para o que vem por aí…",
      "Contrate um treinamento externo que ensine essas pessoas a fazer o que devem fazer",
      "Exija que todas essas pessoas participem desse treinamento, mesmo se for durante o período mais tenso do ano",
      "Peça que as pessoas dêem uma nota de 1 a 5 ao treinamento, mas nunca pergunte sobre o diagnóstico que originou o treinamento",
      "Considere a realização desse treinamento como entregável de algum plano de ação para alguma pesquisa ou mapeamento realizados previamente. Não importa o tema."
    ],
    effects: [
      "Nada muda, apesar das plumas e paetês",
      "Muitas atualizações dos campos “Educação” nos perfis do linkedIn",
      "Sobrecarga pelo trabalho que fica pendente enquanto rola o treinamento da firma",
      "Desânimo em identificar que a organização cobra o indivíduo de mudar uma situação que depende mais das estruturas do que de comportamentos"
    ],
    antidote: "Não realize treinamentos massivos. Principalmente aqueles que se propõem a resolver “problemas comportamentais”. Gaste mais tempo e dinheiro compreendendo as dificuldades que as pessoas têm ao realizar seus trabalhos. Assuma que as pessoas querem fazer um bom trabalho, mas precisam de condições adequadas para isso. Prefira iniciativas que valorizem os saberes e quereres das pessoas mais do que opiniões de especialistas externos ou gurus da liderança. Arrume os recursos e a coragem necessária para mexer nas estruturas organizacionais que fazem diferença nos resultados obtidos vs. esperados, em vez de tapar o sol com a peneira dos treinamentos motivacionais.",
    tags: ["#Cultura", "#Treinamento", "#Desalinhamento"]
  },

  // TÁTICAS DRASTICAS
  {
    title: "Troféu Tóxico",
    icon: "🏆",
    subtitle: "Resultado > tudo",
    level: "Tática Drástica",
    damageLevel: 5,
    dangerTags: ["Abuso", "Performance Tóxica"],
    modusOperandi: [
      "Celebre e premie líderes ou colaboradores que entregam resultados, mesmo às custas do sofrimento da equipe.",
      "Ignore denúncias de abuso, justificando pelo 'alto desempenho'.",
      "Transforme o agressor em exemplo a ser seguido."
    ],
    effects: [
      "Normalização do abuso e do sofrimento psíquico.",
      "Desmobilização das vítimas e conivência coletiva.",
      "Reprodução sistêmica de práticas violentas."
    ],
    antidote: "Crie pactos claros de conduta e responsabilização, com mecanismos para que qualquer pessoa possa sinalizar abusos sem medo de retaliação. Decisões sobre consequências devem ser tomadas apenas após escuta de todos os envolvidos e busca ativa por reparação.",
    tags: ["#Cultura", "#Abuso", "#Responsabilização", "#ProteçãoColetiva"]
  },
  {
    title: "Ouvido surdo",
    icon: "👂",
    subtitle: "Ouça tudo, mude nada",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Escuta Fake"],
    modusOperandi: [
      "Realize rodas de conversa, pesquisas e entrevistas apenas para cumprir protocolo.",
      "Ignore ou descarte sistematicamente as demandas apresentadas.",
      "Use a escuta como ferramenta de legitimação do status quo."
    ],
    effects: [
      "Desconfiança e descrédito total nas instâncias de participação.",
      "Reforço da cultura de fachada e da alienação institucional.",
      "Desmobilização dos grupos minoritários e críticos."
    ],
    antidote: "Procure criar condições para que toda decisão importante só avance após consulta aberta e acolhimento de objeções. Torne explícito quem decide o quê e com base em quais critérios, permitindo revisão contínua e participação de todos os impactados.",
    tags: ["#Cultura", "#Escuta", "#Fachada", "#Deliberação"]
  },
  {
    title: "O Salário Emocional",
    icon: "💖",
    subtitle: "Reconhecimento não paga boleto",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Remuneração Injusta", "Romantização"],
    modusOperandi: [
      "Ofereça 'clima bom', 'ambiente descontraído' e 'sentimento de propósito' como compensação por baixos salários e benefícios ruins.",
      "Desencoraje negociações coletivas e trate qualquer reivindicação como 'falta de gratidão'.",
      "Romantize a precarização do trabalho."
    ],
    effects: [
      "Desvalorização do trabalho e da força coletiva.",
      "Aumento da rotatividade e insatisfação.",
      "Reforço da desigualdade estrutural."
    ],
    antidote: "Formalize critérios de reconhecimento e recompensa em acordos explícitos, tornando-os acessíveis e revisáveis por todos. Decisões sobre remuneração devem ser tomadas apenas após consulta aberta e possibilidade real de objeção.",
    tags: ["#Cultura", "#SalárioEmocional", "#Precarização", "#NegociaçãoColetiva"]
  },
  {
    title: "A Meritocracia",
    icon: "🥇",
    subtitle: "Quem fala melhor, sobe mais alto",
    level: "Tática Drástica",
    damageLevel: 5,
    dangerTags: ["Meritocracia Fake", "Política Interna"],
    modusOperandi: [
      "Promova quem domina o discurso e a política interna, mesmo com baixo desempenho real.",
      "Ignore critérios objetivos e desestimule avaliações transparentes.",
      "Desmotive quem produz de fato, reforçando a lógica do 'QI' (quem indica)."
    ],
    effects: [
      "Desigualdade de oportunidades e injustiça sistêmica.",
      "Desengajamento dos profissionais mais competentes.",
      "Reprodução de estruturas de poder excludentes."
    ],
    antidote: "Construa acordos claros sobre critérios de promoção e mobilidade, permitindo revisão e questionamento por qualquer pessoa. Decisões só avançam quando todos os envolvidos consentem e entendem os critérios aplicados.",
    tags: ["#Cultura", "#Meritocracia", "#Promoção", "#AvaliaçãoColetiva"]
  },
  {
    title: "A Política do Medo Velada",
    icon: "😨",
    subtitle: "Aqui, quem ousa questionar, dança",
    level: "Tática Drástica",
    damageLevel: 5,
    dangerTags: ["Medo", "Controle"],
    modusOperandi: [
      "Realize demissões exemplares ou espalhe boatos para manter todos na linha.",
      "Desencoraje qualquer questionamento ou iniciativa autônoma.",
      "Use o medo como principal ferramenta de gestão."
    ],
    effects: [
      "Ambiente de terror psicológico e paralisia coletiva.",
      "Desaparecimento da criatividade e do senso crítico.",
      "Reprodução de relações autoritárias e submissão."
    ],
    antidote: "Estabeleça acordos explícitos sobre segurança no trabalho e liberdade de expressão, com condições para que ninguém será penalizado por levantar dúvidas ou propor mudanças. Toda decisão de desligamento deve ser justificada e aberta a questionamento coletivo antes de ser efetivada.",
    tags: ["#Cultura", "#Medo", "#Controle", "#Proteção"]
  },
  {
    title: "Bem estar Fake",
    icon: "🍏",
    subtitle: "Yoga e frutas para disfarçar a pressão",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Bem-Estar Fake", "Pressão Psicológica"],
    modusOperandi: [
      "Ofereça aulas de ioga, frutas e massagens enquanto mantém metas inalcançáveis e cobranças abusivas.",
      "Use o discurso do autocuidado para individualizar problemas estruturais.",
      "Ignore sinais de adoecimento coletivo e sobrecarga."
    ],
    effects: [
      "Desresponsabilização da organização pelos danos causados.",
      "Aprofundamento do sofrimento psíquico.",
      "Naturalização da precarização e da pressão constante."
    ],
    antidote: "Pactue limites de carga de trabalho e critérios de bem-estar de forma clara e revisável. Qualquer pessoa pode propor ajustes sempre que perceber risco à saúde, e decisões sobre metas só avançam após acolhimento de objeções fundamentadas.",
    tags: ["#Cultura", "#BemEstar", "#SaúdeMental", "#GestãoParticipativa"]
  },
  {
    title: "A Normalização do Assédio Moral",
    icon: "🫥",
    subtitle: "Passivo-agressivo é quem pode",
    level: "Tática Drástica",
    damageLevel: 5,
    dangerTags: ["Assédio", "Exclusão Social"],
    modusOperandi: [
      "Permita ou ignore comportamentos passivo-agressivos, piadas depreciativas e exclusão social praticados por líderes ou colegas influentes.",
      "Descredibilize denúncias e proteja os agressores sob o argumento de 'brincadeira'.",
      "Naturalize o sofrimento de quem é alvo, culpabilizando a vítima."
    ],
    effects: [
      "Ambiente hostil e adoecimento coletivo.",
      "Desmobilização dos grupos mais vulneráveis.",
      "Reprodução de práticas violentas e exclusão."
    ],
    antidote: "Formalize acordos práticos de convivência e respeito, com mecanismos para revisão imediata de condutas e reparação de danos. Toda denúncia deve ser acolhida e tratada com busca ativa por consenso sobre reparação e prevenção.",
    tags: ["#Cultura", "#Assédio", "#Exclusão", "#Diversidade"]
  },
  {
    title: "A Incoerência entre Discurso e Prática",
    icon: "🫣",
    subtitle: "Transparência só no PowerPoint",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Incoerência", "Fachada"],
    modusOperandi: [
      "Divulgue valores como 'transparência' e 'inovação', mas tome decisões importantes em segredo.",
      "Pune quem tenta inovar e falha, mesmo que o discurso seja de incentivo ao erro.",
      "Use a comunicação institucional para mascarar contradições."
    ],
    effects: [
      "Perda de confiança na liderança e nas instâncias formais.",
      "Desengajamento e apatia coletiva.",
      "Reforço da cultura de fachada e do cinismo institucional."
    ],
    antidote: "Torne explícitos os critérios e processos de decisão, de modo que qualquer pessoa possa propor, revisar e ajustar práticas sem medo de punição. Decisões só avançam quando todos os impactados entendem e aceitam as consequências, promovendo aprendizado coletivo.",
    tags: ["#Cultura", "#Incoerência", "#Transparência", "#Experimentação"]
  }
];
