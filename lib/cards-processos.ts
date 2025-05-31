import { TacticCardData } from './manual-content';

export const processosTactics: TacticCardData[] = [
  // TÁTICAS LEVES
  {
    title: "Burocracia Express",
    icon: "📄",
    subtitle: "Qual é a justificativa?",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["JustificativaExcessiva"],
    modusOperandi: [
      "Solicite justificativas longas e detalhadas para qualquer pedido, mesmo os mais triviais.",
      "Crie modelos padronizados que dificultam solicitações rápidas e desestimulam a iniciativa."
    ],
    effects: [
      "Desperdício de tempo em tarefas administrativas.",
      "Desmotivação e perda de agilidade.",
      "Aumento da burocracia e do controle excessivo."
    ],
    antidote: "Pactue coletivamente critérios simples para solicitações rotineiras e permita dispensar justificativas para itens de baixo impacto. Revise periodicamente o processo para remover etapas desnecessárias.",
    tags: ["#Processos", "#Burocracia", "#JustificativaExcessiva"]
  },
  {
    title: "Selo Supremo",
    icon: "🔖",
    subtitle: "O carimbo essencial é refém de um guardião sobrecarregado.",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["Centralização", "AcessoRestrito"],
    modusOperandi: [
      "Centralize aprovações triviais em uma única pessoa, tornando o processo lento e dependente de sua disponibilidade.",
      "Dificulte o acesso ao responsável, criando filas e atrasos para tarefas simples."
    ],
    effects: [
      "Atrasos frequentes em processos simples.",
      "Dependência excessiva de uma única pessoa.",
      "Desmotivação pela sensação de controle desnecessário."
    ],
    antidote: "Descentralize aprovações triviais e permita que mais pessoas possam autorizar demandas simples. Reveja periodicamente as etapas obrigatórias e elimine cargos de controle meramente simbólicos.",
    tags: ["#Processos", "#Centralização", "#AcessoRestrito"]
  },
  // TÁTICAS DRASTICAS
  {
    title: "Paranoia Formal",
    icon: "🔍",
    subtitle: "Auditoria sem trégua. A conformidade que impede o trabalho.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["AuditoriaExcessiva", "ParalisiaOperacional"],
    modusOperandi: [
      "Realize auditorias preventivas em ciclos curtos, exigindo documentação detalhada para todas as etapas.",
      "Suspenda operações até a conclusão das auditorias, mesmo sem indícios de problemas reais."
    ],
    effects: [
      "Paralisação de atividades essenciais.",
      "Aumento do estresse e da sobrecarga administrativa.",
      "Desconfiança generalizada e clima de vigilância."
    ],
    antidote: "Defina coletivamente critérios claros para auditorias, priorizando situações de risco real. Permita revisão dos processos de auditoria e ajuste a frequência conforme necessidade do grupo.",
    tags: ["#Processos", "#Auditoria", "#ParalisiaOperacional"]
  },
  {
    title: "Guia Esquecido",
    icon: "📚",
    subtitle: "Tão complexo que ninguém lê.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["ManualIntransponível", "ComplexidadeExcessiva"],
    modusOperandi: [
      "Elabore manuais longos, confusos e pouco acessíveis, dificultando a compreensão dos processos.",
      "Exija que todos sigam o manual à risca, mesmo sem nunca tê-lo lido ou entendido."
    ],
    effects: [
      "Ninguém consegue cumprir os procedimentos corretamente.",
      "Aumento dos erros operacionais e retrabalho.",
      "Desresponsabilização coletiva por descumprimento."
    ],
    antidote: "Construa e revise manuais de forma colaborativa, usando linguagem acessível e exemplos práticos. Permita que qualquer pessoa questione ou proponha simplificações, tornando o documento vivo e útil.",
    tags: ["#Processos", "#Manual", "#ComplexidadeExcessiva"]
  },
  {
    title: "Mania de Evidência",
    icon: "📸",
    subtitle: "Mania de controle",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["EvidênciaExcessiva", "ControleAbusivo"],
    modusOperandi: [
      "Solicite evidências documentais para cada pequena etapa, tornando o processo lento e desconfiado.",
      "Crie sistemas de controle redundantes que consomem tempo e energia do time."
    ],
    effects: [
      "Aumento do retrabalho e do tempo gasto em documentação.",
      "Desconfiança e sensação de microgerenciamento.",
      "Desvio do foco do trabalho real para a produção de provas."
    ],
    antidote: "Pactue coletivamente quais evidências são realmente necessárias e elimine exigências redundantes. Permita revisão contínua das etapas de controle, priorizando a confiança e a autonomia do grupo.",
    tags: ["#Processos", "#EvidênciaExcessiva", "#Rastreabilidade"]
  },
  {
    title: "Fórmulário pra tudo",
    icon: "📝",
    subtitle: "Um problema? Novo formulário! A solução que multiplica papelada.",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["Formularite"],
    modusOperandi: [
      "Para cada nova solicitação, problema identificado ou ideia sugerida, institua a necessidade de preencher um novo formulário. Não importa se a demanda é simples ou se o formulário existente poderia ser adaptado.",
      "Crie formulários com campos redundantes, perguntas abertas de difícil resposta e, preferencialmente, que exijam informações que o solicitante não possui facilmente. Torne o processo de encontrar o formulário correto um desafio à parte."
    ],
    effects: [
      "A simples ideia de ter que preencher mais um formulário desestimula a iniciativa, atrasa solicitações e cria uma barreira burocrática para qualquer ação.",
      "Aumento do tempo gasto em tarefas administrativas em detrimento do trabalho produtivo.",
      "Desincentivo à resolução rápida de problemas ou à implementação de pequenas melhorias.",
      "Criação de um 'cemitério de formulários' digitais ou físicos.",
      "Frustração e a sensação de que 'tudo aqui é complicado'."
    ],
    antidote: "Revise coletivamente a necessidade de cada formulário, eliminando ou simplificando os que não trazem valor real. Priorize fluxos ágeis e acessíveis para demandas simples, permitindo que qualquer pessoa questione ou proponha melhorias.",
    tags: ["#Processos", "#Burocracia", "#Formularite", "#Ineficiencia", "#ResistenciaAMudanca"]
  },
  {
    title: "A Revisão",
    icon: "🧐",
    subtitle: "Revisão em looping. Cinco opiniões depois, o documento volta diferente.",
    level: "Tática Leve",
    damageLevel: 4,
    dangerTags: ["RevisaoInterminavel"],
    modusOperandi: [
      "Para qualquer documento, apresentação ou mesmo um e-mail mais elaborado, exija múltiplas rodadas de revisão por diversas pessoas, mesmo para tarefas triviais ou de baixo impacto.",
      "Inclua revisores que não têm o contexto completo, ou que têm opiniões divergentes sobre o assunto. Não defina claramente o escopo da revisão de cada um, permitindo que todos opinem sobre tudo, desde a vírgula até a estratégia."
    ],
    effects: [
      "O processo de aprovação se arrasta por dias ou semanas, o documento original sofre inúmeras alterações (muitas vezes contraditórias) e o autor original perde o controle (e a sanidade).",
      "Atrasos significativos na finalização de entregas.",
      "Versões conflitantes do mesmo documento circulando.",
      "Desgaste e desmotivação do responsável original pela tarefa.",
      "Falsa sensação de 'qualidade aprimorada' quando, na verdade, só houve mais opiniões."
    ],
    antidote: "Pactue coletivamente quem revisa o quê e com qual objetivo. Limite revisores ao mínimo necessário e estabeleça prazos claros. Permita revisão dos critérios de revisão sempre que houver confusão ou atraso.",
    tags: ["#Processos", "#Burocracia", "#RevisaoInterminavel", "#ParalisiaPorAnalise", "#retrabalho"]
  },
  {
    title: "A Validação Universal",
    icon: "🛡️",
    subtitle: "Validação universal. A arte de buscar aprovação para o óbvio.",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["ValidaçãoDesnecessária"],
    modusOperandi: [
      "Antes de prosseguir com qualquer ação, mesmo as mais rotineiras ou de baixo risco, crie o hábito de enviar 'para validação' a um superior, a um par ou a um comitê. Não especifique o que precisa ser validado, apenas use o termo genérico.",
      "Faça isso mesmo quando você tem autonomia para decidir. A meta é transferir a responsabilidade e, com sorte, criar um pequeno gargalo enquanto espera o 'ok' de alguém."
    ],
    effects: [
      "As decisões simples demoram mais, a autonomia individual é minada e cria-se uma cultura onde ninguém se sente seguro para agir sem uma bênção formal.",
      "Lentidão na execução de tarefas cotidianas.",
      "Redução da proatividade e da tomada de iniciativa.",
      "Sobrecarga dos 'validadores' com decisões que poderiam ser tomadas em níveis inferiores.",
      "Desenvolvimento de uma aversão ao risco, mesmo para pequenas coisas."
    ],
    antidote: "Deixe explícitos os níveis de autonomia e decisão para cada função, revisando-os coletivamente. Promova a tomada de decisão descentralizada e valide apenas o que for realmente crítico, permitindo revisão contínua dos fluxos.",
    tags: ["#Processos", "#Burocracia", "#ValidaçãoDesnecessária", "#MedoDeDecidir", "#Gargalo"]
  },
  {
    title: "A escala da aprovação",
    icon: "📈",
    subtitle: "Escalada de aprovação. A decisão sobe ao Olimpo e talvez um dia desça.",
    level: "Tática Drástica",
    damageLevel: 5,
    dangerTags: ["HierarquiaRígida"],
    modusOperandi: [
      "Crie ou defenda fluxos de aprovação que envolvam múltiplos níveis hierárquicos, mesmo para decisões que poderiam ser tomadas localmente. Quanto mais assinaturas e 'de acordos' de gestores seniores, melhor.",
      "Justifique a necessidade com termos como 'garantir o alinhamento estratégico', 'visibilidade para a liderança' ou 'mitigação de riscos em alto nível'. O ideal é que cada nível adicione seu próprio tempo de análise (ou de gaveta) ao processo."
    ],
    effects: [
      "Projetos e iniciativas simples levam semanas ou meses para serem aprovados, a agilidade é sacrificada no altar da hierarquia e os níveis mais baixos se sentem meros executores de pedidos.",
      "Lentidão paralisante em toda a organização.",
      "Desempoderamento das equipes e gestores de linha de frente.",
      "Aumento da frustração e da percepção de que 'nada anda' sem o aval do Olimpo corporativo.",
      "Perda de timing para oportunidades de mercado."
    ],
    antidote: "Simplifique os fluxos de aprovação em grupo, delegando autoridade para quem executa a tarefa. Torne os critérios e prazos transparentes, permitindo ajustes sempre que houver gargalos ou atrasos desnecessários.",
    tags: ["#Processos", "#BurocraciaExtrema", "#HierarquiaRígida", "#EngarrafamentoDecisorio", "#FaltaDeAgilidade"]
  },
  {
    title: "O cerco do compliance",
    icon: "⚠️",
    subtitle: "Compliance total. A prevenção que impede a ação e a inovação.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["ComplianceExcessivo"],
    modusOperandi: [
      "Institua ou apoie um departamento de Compliance (ou Jurídico, ou Riscos) com poderes quase ilimitados para vetar ou atrasar qualquer iniciativa em nome da 'conformidade' e da 'prevenção de riscos'.",
      "Exija que toda nova ideia, projeto, comunicado ou até mesmo a compra de canetas passe pelo crivo do Compliance. Crie processos de análise longos e detalhistas, onde qualquer desvio mínimo do 'manual' é motivo para bloqueio."
    ],
    effects: [
      "A inovação é sufocada, a aversão ao risco se torna a norma e a empresa se move na velocidade de uma tartaruga com artrite, tudo em nome da segurança absoluta.",
      "Paralisia da inovação e da tomada de decisões ágeis.",
      "Cultura de medo e excessiva cautela.",
      "Atraso na resposta a demandas de mercado ou oportunidades.",
      "Percepção do Compliance como um 'departamento do não' em vez de um parceiro estratégico."
    ],
    antidote: "Inclua o Compliance como parceiro desde o início, focando em soluções viáveis e não apenas em apontar riscos. Torne explícito o que precisa de análise rigorosa e o que pode seguir por fluxo simplificado, revisando critérios coletivamente.",
    tags: ["#Processos", "#Burocracia", "#ComplianceExcessivo", "#AversaoAoRisco", "#Lentidao"]
  }
];
