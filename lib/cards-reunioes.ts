import { TacticCardData } from './manual-content';

export const reunioesTactics: TacticCardData[] = [
  // TÁTICAS LEVES
  {
    title: "Pegando Carona",
    icon: "➡️",
    subtitle: "A arte de desviar do foco. Quando o 'só um parêntese' vira a pauta principal.",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["DesvioDeFoco", "Tangente"],
    modusOperandi: [
      "Permita desvios constantes do tema central para tópicos laterais sob pretexto de relevância futura.",
      "Não estabeleça limites claros para o tempo de fala ou para o retorno ao foco original."
    ],
    effects: [
      "Discussões longas e improdutivas.",
      "Dificuldade em cumprir a pauta prevista.",
      "Perda do objetivo principal da reunião."
    ],
    antidote: "Pactue coletivamente critérios de foco e permita que qualquer pessoa peça o retorno ao tema central. Use técnicas de facilitação para registrar tangentes e retomar o objetivo principal.",
    tags: ["#Reuniões", "#Tangente", "#Foco"]
  },
  {
    title: "Fica pra Próxima",
    icon: "⏭️",
    subtitle: "Reunião para marcar a próxima reunião. O ciclo infinito da indecisão.",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["Procrastinação", "ReuniãoInfinita"],
    modusOperandi: [
      "Evite decisões concretas e termine a reunião propondo agendar outro encontro para tratar do mesmo tema.",
      "Não defina responsáveis ou prazos para os próximos passos."
    ],
    effects: [
      "Ciclo interminável de reuniões sem avanços reais.",
      "Desmotivação e sensação de tempo desperdiçado.",
      "Falta de clareza sobre o andamento dos projetos."
    ],
    antidote: "Pactue critérios claros para fechamento de reuniões e defina responsáveis e prazos para os próximos passos. Permita revisão coletiva das pautas para evitar reuniões desnecessárias.",
    tags: ["#Reuniões", "#Procrastinação", "#FollowUp"]
  },
  // TÁTICAS DRASTICAS
  {
    title: "Querência",
    icon: "🚫",
    subtitle: "'Não gostei'. O veto pessoal que vale mais que qualquer argumento.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["BloqueioPessoal", "Arbitrariedade"],
    modusOperandi: [
      "Impeça decisões relevantes alegando preferências ou gostos pessoais, mesmo sem justificativa coletiva.",
      "Use argumentos subjetivos para travar o andamento dos temas."
    ],
    effects: [
      "Paralisação de decisões importantes.",
      "Clima de frustração e ressentimento.",
      "Desmobilização do grupo."
    ],
    antidote: "Pactue critérios objetivos para tomada de decisão e permita que qualquer pessoa questione bloqueios baseados em gostos pessoais. Revise coletivamente os motivos de paralisação sempre que necessário.",
    tags: ["#Reuniões", "#BloqueioPessoal", "#Decisão"]
  },
  {
    title: "Consenso Líquido",
    icon: "🌊",
    subtitle: "Consenso para tudo. A decisão que é de todos e de ninguém.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["ConsensoDiluído", "FugaDeResponsabilidade"],
    modusOperandi: [
      "Evite assumir responsabilidade individual, buscando sempre o consenso amplo mesmo quando não é necessário.",
      "Dilua decisões importantes em discussões coletivas intermináveis."
    ],
    effects: [
      "Dificuldade em avançar com decisões.",
      "Falta de clareza sobre quem decide o quê.",
      "Risco de inação e frustração coletiva."
    ],
    antidote: "Defina previamente quais decisões exigem consenso e quais podem ser tomadas por delegação. Torne explícita a responsabilidade de cada pessoa ou grupo e revise coletivamente os fluxos decisórios.",
    tags: ["#Reuniões", "#Consenso", "#Responsabilidade"]
  },
  {
    title: "Critério infinito",
    icon: "🗂️",
    subtitle: "Matriz de decisão com 50 critérios. A análise que paralisa.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["ComplexidadeExcessiva", "DecisãoParalisada"],
    modusOperandi: [
      "Solicite análises detalhadas e matrizes de decisão para temas simples.",
      "Inclua tantos critérios e pesos que a conclusão se torna inalcançável."
    ],
    effects: [
      "Paralisação por excesso de análise.",
      "Desperdício de tempo e energia.",
      "Falta de clareza sobre os próximos passos."
    ],
    antidote: "Pactue coletivamente critérios mínimos para análise e permita revisão dos processos sempre que a complexidade bloquear decisões. Priorize simplicidade e clareza nos fluxos de decisão.",
    tags: ["#Reuniões", "#Decisão", "#Complexidade"]
  },
  {
    title: "Unanimidade Mítica",
    icon: "🔒",
    subtitle: "Consenso de 100%. A busca pela unanimidade que impede qualquer avanço.",
    level: "Tática Drástica",
    damageLevel: 5,
    dangerTags: ["ConsensoAbsoluto", "Paralisia"],
    modusOperandi: [
      "Exija unanimidade em todas as decisões, não aceitando objeções ou dissensos.",
      "Permita que qualquer discordância paralise o andamento dos temas."
    ],
    effects: [
      "Dificuldade extrema em avançar com decisões.",
      "Clima de frustração e inércia.",
      "Risco de abandono de pautas importantes."
    ],
    antidote: "Defina coletivamente critérios para consenso e permita decisões por maioria qualificada quando necessário. Revise os processos sempre que a exigência de unanimidade bloquear avanços.",
    tags: ["#Reuniões", "#ConsensoAbsoluto", "#Paralisia"]
  },
  {
    title: "Veto Mudo",
    icon: "🤫",
    subtitle: "A careta que congela decisões. O poder do veto não dito.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["VetoSilencioso", "Paralisia"],
    modusOperandi: [
      "Permita que sinais não verbais ou indiretos sejam usados como justificativa para adiar decisões importantes.",
      "Evite explicitar objeções, mantendo o grupo em suspense e sem clareza sobre o real motivo do bloqueio."
    ],
    effects: [
      "Decisões paralisadas por sinais subjetivos.",
      "Aumento da insegurança e da especulação.",
      "Dificuldade em identificar e tratar objeções reais."
    ],
    antidote: "Pactue critérios claros para manifestação de objeções e permita que qualquer pessoa peça explicitação dos motivos do veto. Revise coletivamente os processos sempre que houver bloqueios subjetivos.",
    tags: ["#Reuniões", "#VetoSilencioso", "#Objeção"]
  },
  {
    title: "A Reunião de Alinhamento",
    icon: "👥", 
    subtitle: "Alinhamento sem pauta. Onde conversar é o único objetivo.",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["Pauta Vaga"],
    modusOperandi: [
      "Agende reuniões recorrentes com o título convidativo de 'Alinhamento Semanal' ou 'Sincronização da Equipe'. O segredo do sucesso aqui é a ausência total de uma pauta específica ou de um objetivo claro.",
      "Comece perguntando 'Então, pessoal, quem quer começar?' ou 'Alguém tem algo para trazer?'. Permita que a conversa flua para qualquer direção, desde atualizações de status que poderiam ser um e-mail até desabafos sobre o café da empresa."
    ],
    effects: [
      "Ao final de uma hora, todos terão falado, ninguém terá decidido nada e a única ação concreta será marcar a próxima 'reunião de alinhamento'.",
      "Horas de produtividade real evaporadas no ar condicionado da sala de reunião.",
      "A sensação generalizada de que 'muita coisa foi dita', mas pouca (ou nenhuma) foi resolvida.",
      "Cria um precedente onde se reunir é mais importante do que realizar."
    ],
    antidote: "Pactue coletivamente os objetivos e resultados esperados de cada reunião antes de aceitar o convite. Permita que qualquer pessoa questione a utilidade da reunião e proponha alternativas mais ágeis sempre que necessário.",
    tags: ["#Reuniões", "#PautaVaga", "#TempoDesperdiçado", "#FalsaProdutividade"]
  },
  {
    title: "Ritual sonífero",
    icon: "📄",
    subtitle: "Leitura da ata na íntegra. O ritual que consome tempo e paciência.",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["Procedimento Rígido"],
    modusOperandi: [
      "Inicie cada reunião de acompanhamento com a leitura solene e completa da ata da reunião anterior. Argumente que isso é 'fundamental para a continuidade' e para 'refrescar a memória de todos'. Não importa se a ata tem 5 páginas ou se foi distribuída dias antes com um 'Favor ler antes da reunião'.",
      "Leia em um ritmo constante, sem pular seções, mesmo as mais triviais. Se alguém tentar interromper, reforce a 'importância do processo'."
    ],
    effects: [
      "Os primeiros 15-30 minutos são consumidos, o nível de energia da sala cai drasticamente e todos se lembram por que evitam ler atas.",
      "Erosão do tempo disponível para as discussões do dia.",
      "Desestímulo à leitura prévia de qualquer material enviado.",
      "Fortalecimento da imagem da reunião como um ritual burocrático e lento."
    ],
    antidote: "Priorize a revisão apenas dos pontos de ação e pendências relevantes. Envie resumos objetivos antes da reunião e permita revisão coletiva do formato das atas, eliminando etapas desnecessárias.",
    tags: ["#Reuniões", "#Burocracia", "#AtaDesnecessária", "#ProcedimentoRígido"]
  },
  {
    title: "Julgamento sem dó",
    icon: "👎", 
    subtitle: "Ideias? Ótimo! Desde que sejam as minhas. As suas, nem tanto.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Feedback Destrutivo"],
    modusOperandi: [
      "Anuncie uma sessão de 'brainstorming para gerar ideias inovadoras', enfatizando um 'ambiente seguro'. Contudo, assim que alguém (que não seja você ou seu protegido) apresentar uma ideia um pouco fora da caixa:",
      "Interrompa com um 'Sim, mas...' seguido de uma lista de porquês a ideia não funcionaria. Questione a viabilidade, os custos, o alinhamento estratégico (mesmo que ninguém saiba qual é). Use frases como 'Já tentamos algo parecido e não deu certo' ou 'O mercado não está pronto para isso'."
    ],
    effects: [
      "As pessoas rapidamente aprendem a não se arriscar. As ideias se tornam cada vez mais tímidas e incrementais, ou o silêncio toma conta, e a sessão termina com 'boas discussões, mas nada concreto'.",
      "Inibição da criatividade e do pensamento original em toda a equipe.",
      "Reforço da cultura de 'não vale a pena tentar algo novo'.",
      "Emergência de um consenso em torno do status quo ou de soluções já conhecidas (e muitas vezes ineficazes)."
    ],
    antidote: "Separe claramente os momentos de geração de ideias (sem julgamento) e de avaliação (com critérios coletivos). Permita revisão das regras do brainstorming e escolha facilitadores neutros conforme necessário.",
    tags: ["#Reuniões", "#InovaçãoBloqueada", "#CulturaDoNão", "#FeedbackDestrutivo"]
  },
  {
    title: "O Comitê",
    icon: "📚",
    subtitle: "Mais um comitê. A solução para garantir que a decisão nunca chegue.",
    level: "Tática Drástica",
    damageLevel: 5,
    dangerTags: ["Governança Excessiva"],
    modusOperandi: [
      "Quando um grupo de trabalho ou subcomitê finalmente apresenta suas recomendações, especialmente após semanas de esforço, expresse a necessidade de uma 'validação superior' ou de um 'alinhamento com a estratégia macro'. A solução? Propor a formação de um novo comitê, composto por membros mais seniores (ou apenas diferentes), para revisar o trabalho do primeiro.",
      "Justifique como uma medida de 'governança' ou 'mitigação de riscos'. O novo comitê, por sua natureza, tenderá a encontrar falhas, pedir mais dados ou simplesmente demorar meses para se reunir."
    ],
    effects: [
      "A decisão original é adiada indefinidamente, o primeiro grupo se sente desvalorizado e a burocracia celebra mais uma vitória.",
      "Paralisia decisória institucionalizada.",
      "Desperdício do trabalho e esforço do comitê inicial.",
      "Aumento da complexidade organizacional sem benefício claro.",
      "Criação de um ciclo onde 'supervisão' se torna um fim em si mesma."
    ],
    antidote: "Questione coletivamente o valor de novos comitês e defenda a delegação de autoridade para o grupo original sempre que possível. Permita revisão dos fluxos de decisão e elimine etapas redundantes.",
    tags: ["#Reuniões", "#BurocraciaExtrema", "#EngarrafamentoDeDecisões", "#GovernançaExcessiva"]
  },
  {
    title: "Envenene os Acordos",
    icon: "🕷️",
    subtitle: "Destrustabilize acordos em grupo, criando insegurança sobre compromissos prévios.",
    level: "Tática Drástica",
    damageLevel: 5,
    dangerTags: ["Insegurança", "Dúvidas"],
    modusOperandi: [
      "Pergunte se aquela reunião semanal acordada há tempos vai mesmo acontecer. Estimule indiretamente outras pessoas a também fazerem o mesmo.",
      "Pergunte “como vamos tratar isso?” (o plural é importante) mesmo sabendo que é de responsabilidade de outra pessoa ou que é algo que poderia ser feito individualmente. Faça essa pergunta várias vezes sobre o mesmo tema, mas de modos diferentes em situações e grupos também diferentes.",
      "Sempre que alguém tentar esclarecer ou escrever um combinado, levante preocupações vagas que sugerem existir possíveis desdobramentos que ferem a segurança financeira ou a hierarquia. Por ex. “Parece bacana, só precisamos ver melhor a questão do impacto financeiro e garantir que a alta liderança não se sinta exposta”."
    ],
    effects: [
      "Desorganização e desmobilização causada pela falta de confiança nos acordos de trabalho",
      "Lentidão derivada da tentativa de combinar coisas entre muitas pessoas",
      "Exaustão por não compreender como avançar nem com pequenas resoluções"
    ],
    antidote: "Não deixe as falas vagas e genéricas prosperarem. Parafraseie até entender qual a intenção de cada fala. Responsabilize as pessoas por suas falas. Reforce o poder do que foi combinado explicitamente e se o combinado precisar mudar, mude o que está escrito. Trate preocupações e desejos sem acionáveis como desabafos e sonhos individuais, nunca como pautas ou propostas para deliberação coletiva.",
    tags: ["#Reuniões", "#Acordos", "#Insegurança"]
  },
  {
    title: "Fióti de Reunião",
    icon: "🎭",
    subtitle: "Reunião preparatória falsa que dispersa responsabilidade e gera confusão.",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["Pretexto", "Confusão"],
    modusOperandi: [
      "Agende uma reunião preparatória sobre qualquer pauta relevante sob o pretexto de estar preparando algo (pessoas, materiais, informações) para uma reunião mais importante.",
      "Convoque pessoas capazes de dar bastante pitaco, mas que não possuem responsabilidade ou autoridade alguma sobre o tema",
      "Deixe acidentalmente de fora pessoas que já possuem responsabilidade sobre o tema ou que poderiam resolver algo de fato",
      "Introduza falas ambíguas durante a reunião que façam as pessoas acreditarem que são parte de alguma iniciativa estratégica da companhia e que, essa iniciativa, depende delas individualmente",
      "Deixe subentendido, nunca por escrito, que essas pessoas precisam preparar coisas para a tal reunião mais importante que vai acontecer em breve (mesmo que isso não seja verdade)."
    ],
    effects: [
      "Confusão sobre quem é responsável pelo quê",
      "Desconfiança e especulação sobre o porquê algumas não foram convidadas para a reunião prévia. Será que vão ser demitidas? Será que não gostam delas? Será que algo secreto vai mudar ou acontecer?",
      "Desmotivação ao descobrir que seu trabalho nunca é usado para nada"
    ],
    antidote: "Não crie pré ou pós reunião. Não convoque ou participe de reuniões que se propõem a decidir coisas sem as pessoas que detêm autoridade para fazer isso. Não assume e nem incentive compromissos desconectados dos papéis que as pessoas já possuem. Em vez de realizar reuniões preparatórias para outras reuniões mais importantes, deixe que as pessoas que possuem alguma expectativa para as reuniões direcionem isso a quem já possui alguma responsabilidade relacionada ao tema.",
    tags: ["#Reuniões", "#Pretexto", "#Confusão"]
  },
  {
    title: "Combinados de Gaveta",
    icon: "🗄️",
    subtitle: "Esquive-se de registros formais e deixe acordos guardados em locais obscuros.",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["Pretexto", "Informalidade"],
    modusOperandi: [
      "Não registre nenhum combinado ou expectativa, apenas converse sobre eles e pergunte se todos estão de acordo.",
      "Se tiver que registrar algo, registre as expectativas das pessoas (responsabilidades, processos, rituais, restrições e outros acordos) nos lugares mais cômodos e esquecíveis possíveis tais como: ata via email, msgs de whatsapp, flip-charts, post-its na sala de reunião, chat do zoom ou teams, DMs ou canais de slack.",
      "Não detalhe nada. Se alguém insistir nisso diga apenas “gente, vamos seguir em frente? temos muita coisa importante pra discutir ainda” ou comece a responder msgs no celular."
    ],
    effects: [
      "Preguiça de explicitar acordos porque não tem valor algum",
      "Cinismo em relação a importância de coordenar o trabalho através de acordos em vez de hierarquia",
      "Resistência em enfrentar o desconforto e inércia de detalhar expectativas"
    ],
    antidote: "Trabalhe com um único repositório de acordos comum, organizado e acessível a todo o grupo afetado. Evite espaços cujos fluxo de mensagem podem diluir a atenção demais como grupos de whatsapp, assim como espaços ou ferramentas cujo uso é alienígena a maioria das pessoas como um software que somente o hacker do grupo sabe usar.",
    tags: ["#Reuniões", "#CombinadosGaveta", "#Informalidade"]
  }
];
