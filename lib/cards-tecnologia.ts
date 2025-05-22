import { TacticCardData } from './manual-content';

export const tecnologiaTactics: TacticCardData[] = [
  // TÁTICAS LEVES
  {
    title: "A planilha onipresente",
    icon: "📊",
    subtitle: "Criar planilhas para tudo e qualquer coisa.",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["PlanilhiteAguda"],
    modusOperandi: [
      "Para qualquer necessidade, a primeira solução é criar uma nova planilha.",
      "Multiplique abas, fórmulas e macros até que só o criador compreenda.",
      "Exija atualizações manuais e versões paralelas." 
    ],
    effects: [
      "Informações descentralizadas, inconsistentes e difíceis de manter.",
      "Dependência de 'gurus da planilha' e risco de erros manuais.",
      "Desperdício de tempo e retrabalho."
    ],
    antidote: "Pactue quando e por que usar planilhas, limitando seu uso a análises simples. Para colaboração e dados críticos, escolha ferramentas adequadas em acordo aberto com o grupo.",
    tags: ["#Tecnologia", "#Planilhas", "#FerramentaInadequada"]
  },
  {
    title: "O bloqueio de segurança paralisante",
icon: "🚫",
    subtitle: "Bloquear o acesso ao drive 'por segurança'.",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["BloqueioExcessivo"],
    modusOperandi: [
      "Implemente bloqueios e restrições de acesso a arquivos essenciais sob o pretexto de segurança.",
      "Dificulte o trabalho cotidiano exigindo permissões e autenticações desnecessárias."
    ],
    effects: [
      "Equipes perdem tempo pedindo acesso e buscando alternativas inseguras.",
      "A colaboração é prejudicada e a TI vira obstáculo."
    ],
    antidote: "Construa políticas de acesso com base em necessidades reais, revisando restrições coletivamente e priorizando o trabalho fluido e seguro, sem recorrer ao isolamento burocrático.",
    tags: ["#Tecnologia", "#Segurança", "#Bloqueio", "#Colaboração"]
  },
  {
    title: "O campeão da ferramenta obscura",
    icon: "🛠️",
    subtitle: "Insista que toda a equipe adote uma ferramenta nova e pouco conhecida para uma tarefa específica.",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["FerramentaObscura"],
    modusOperandi: [
      "Descubra uma ferramenta pouco conhecida e proponha sua adoção imediata para todos.",
      "Ignore o contexto, a curva de aprendizado e a opinião do grupo."
    ],
    effects: [
      "Adoção forçada gera confusão, resistência e retrabalho.",
      "Perda de tempo com testes e treinamentos desnecessários."
    ],
    antidote: "Avalie coletivamente a real necessidade antes de adotar novas ferramentas. Considere experiências prévias e permita experimentação voluntária antes de expandir o uso.",
    tags: ["#Tecnologia", "#FerramentaObscura", "#AdoçãoForçada"]
  },
  {
    title: "A senha super segura (e esquecida)",
    icon: "🔑",
    subtitle: "Políticas de senha impossíveis, post-its inevitáveis.",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["SenhaImpossível"],
    modusOperandi: [
      "Exija senhas longas, trocas frequentes e critérios absurdos (caracteres especiais, hieróglifos, etc.).",
      "Transforme o acesso em um desafio impossível, levando as pessoas a anotarem senhas em lugares inseguros."
    ],
    effects: [
      "Aumento de falhas de segurança por anotações inseguras.",
      "Frustração, perda de tempo e suporte sobrecarregado."
    ],
    antidote: "Defina critérios de senha em consulta aberta, equilibrando segurança e usabilidade. Incentive o uso de gerenciadores de senha e revise exigências de forma participativa.",
    tags: ["#Tecnologia", "#Senhas", "#Segurança", "#Usabilidade"]
  },
  {
    title: "A planilha que virou sistema",
    icon: "🗂️",
    subtitle: "Crie uma planilha tão complexa que se torna um sistema legado instável.",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["PlanilhaSistema"],
    modusOperandi: [
      "Adicione macros, integrações e dependências até que a planilha vire um sistema crítico e insubstituível.",
      "Centralize processos vitais em arquivos frágeis e pouco documentados."
    ],
    effects: [
      "Risco de falhas graves e perda de dados.",
      "Dependência de poucas pessoas para manutenção e ajustes."
    ],
    antidote: "Reveja periodicamente o papel das planilhas e proponha migração gradual para soluções sustentáveis, com participação de quem usa no dia a dia.",
    tags: ["#Tecnologia", "#PlanilhaSistema", "#Legado", "#Risco"]
  },
  {
    title: "O 'resolvemos com um app'",
    icon: "📱",
    subtitle: "Para qualquer problema, a primeira sugestão é desenvolver um aplicativo.",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["AppDesnecessário"],
    modusOperandi: [
      "Sugira desenvolver um app para qualquer demanda, sem avaliar alternativas ou custos.",
      "Ignore soluções já existentes e o tempo de desenvolvimento." 
    ],
    effects: [
      "Desperdício de recursos e tempo em projetos desnecessários.",
      "Acúmulo de apps pouco usados e manutenção difícil."
    ],
    antidote: "Avalie coletivamente o problema antes de sugerir um app. Considere soluções já disponíveis e só desenvolva algo novo com consenso sobre real necessidade.",
    tags: ["#Tecnologia", "#AppDesnecessário", "#SoluçõesExistentes"]
  },

  // TÁTICAS DRASTICAS
  {
    title: "A nova solução sem transição",
    icon: "🚀",
    subtitle: "Promover uma solução nova sem migração adequada.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["SemTransição"],
    modusOperandi: [
      "Implemente uma nova ferramenta ou sistema sem preparar a equipe ou migrar dados corretamente.",
      "Descontinue o antigo de surpresa e espere que tudo funcione imediatamente."
    ],
    effects: [
      "Perda de dados, confusão e queda brusca de produtividade.",
      "Equipe desamparada e resistência à mudança." 
    ],
    antidote: "Combine etapas de transição com quem será impactado, revisando necessidades e riscos antes de descontinuar sistemas antigos. Documente e compartilhe o processo de migração.",
    tags: ["#Tecnologia", "#Transição", "#MudançaDrástica"]
  },
  {
    title: "O sistema dependente obsoleto",
    icon: "🔗",
    subtitle: "Ter um sistema que depende de outro que ninguém usa mais.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["DependênciaObsoleta"],
    modusOperandi: [
      "Mantenha sistemas interligados a soluções já abandonadas ou sem suporte.",
      "Ignore alertas de risco e sugestões de atualização." 
    ],
    effects: [
      "Risco de falhas críticas e paralisação de processos.",
      "Dificuldade de integração e suporte." 
    ],
    antidote: "Mapeie dependências e discuta abertamente alternativas com o grupo. Planeje atualizações com participação de quem opera os sistemas e não só da TI.",
    tags: ["#Tecnologia", "#DependênciaObsoleta", "#Risco", "#Atualização"]
  },
  {
    title: "A guerra dos softwares incompatíveis",
    icon: "⚔️",
    subtitle: "Adquira softwares de diferentes fornecedores que não se integram.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["SoftwaresIncompatíveis"],
    modusOperandi: [
      "Implemente sistemas que não conversam entre si, exigindo retrabalho manual.",
      "Ignore padrões de integração e centralize dados em planilhas paralelas." 
    ],
    effects: [
      "Retrabalho constante, perda de tempo e dados inconsistentes.",
      "Equipe sobrecarregada com tarefas repetitivas." 
    ],
    antidote: "Antes de adquirir novos sistemas, avalie critérios de integração junto ao grupo. Priorize soluções que dialoguem entre si e revisite decisões quando surgirem dificuldades.",
    tags: ["#Tecnologia", "#SoftwaresIncompatíveis", "#Integração", "#Retrabalho"]
  },
  {
    title: "O legado intocável",
    icon: "🧓",
    subtitle: "Mantenha um sistema antigo e crucial rodando em hardware obsoleto.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["LegadoIntocável"],
    modusOperandi: [
      "Evite atualizar ou documentar sistemas antigos por medo de quebrar algo.",
      "Centralize o conhecimento em poucas pessoas e ignore sugestões de modernização." 
    ],
    effects: [
      "Risco de falhas graves e paralisação.",
      "Dependência de profissionais que podem sair a qualquer momento." 
    ],
    antidote: "Documente coletivamente o funcionamento de sistemas legados e discuta abertamente planos de modernização, mesmo que graduais. Estimule o compartilhamento de conhecimento e a revisão periódica dos riscos.",
    tags: ["#Tecnologia", "#Legado", "#Obsolescência", "#Conhecimento"]
  },
  {
    title: "A migração perpétua",
    icon: "⏳",
    subtitle: "Inicie um projeto de migração que nunca termina.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["MigraçãoEterna"],
    modusOperandi: [
      "Lance um projeto de migração de sistema sem planejamento realista ou prazos definidos.",
      "Mude de direção constantemente e evite fechar etapas." 
    ],
    effects: [
      "Consumo interminável de recursos e energia da equipe.",
      "Desmotivação e sensação de trabalho em vão." 
    ],
    antidote: "Defina coletivamente critérios para iniciar e encerrar migrações. Estabeleça etapas claras e revise prioridades com o grupo ao longo do processo.",
    tags: ["#Tecnologia", "#MigraçãoEterna", "#GestãoDeProjetos", "#Desmotivação"]
  },
  {
    title: "A TI como torre de marfim",
    icon: "🏰",
    subtitle: "Equipe de TI isolada e processos rígidos tornam o suporte uma jornada épica.",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["TIIsolada"],
    modusOperandi: [
      "Crie processos e barreiras que dificultem o contato direto com a TI.",
      "Exija abertura de chamados e aprovações para qualquer ajuste, por menor que seja." 
    ],
    effects: [
      "Demora excessiva para resolver problemas simples.",
      "Sensação de distância e falta de apoio à equipe." 
    ],
    antidote: "Reveja coletivamente os fluxos de suporte e incentive canais diretos de comunicação. Reduza barreiras e permita ajustes rápidos sempre que possível, priorizando a autonomia do grupo.",
    tags: ["#Tecnologia", "#TI", "#Isolamento", "#Burocracia"]
  }
];
