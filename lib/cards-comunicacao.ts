import { TacticCardData } from './manual-content';

export const comunicacaoTactics: TacticCardData[] = [
  // TÁTICAS LEVES
  {
    title: "A multiplicação de canais de WhatsApp",
    icon: "💬",
    subtitle: "Um novo projeto? Novo grupo!",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["Fragmentação", "WhatsApp"],
    modusOperandi: [
      "Crie um novo grupo de WhatsApp para cada projeto, tarefa ou evento, mesmo com os mesmos participantes de outros grupos.",
      "Justifique a criação pelo desejo de 'organizar melhor', mas não estabeleça regras claras de uso."
    ],
    effects: [
      "Dificuldade em encontrar informações importantes.",
      "Aumento da dispersão e do cansaço digital.",
      "Mensagens relevantes se perdem em múltiplos grupos."
    ],
    antidote: "Consolide grupos semelhantes e pactue critérios claros para a criação de novos canais. Permita revisão periódica da estrutura de grupos e incentive fusões sempre que possível.",
    tags: ["#Comunicação", "#WhatsApp", "#Fragmentação"]
  },
  {
    title: "O assunto vago",
    icon: "❓",
    subtitle: "Urgente! Só que não",
    level: "Tática Leve",
    damageLevel: 2,
    dangerTags: ["AssuntoVago"],
    modusOperandi: [
      "Envie e-mails com assuntos genéricos, dificultando a triagem e o entendimento da mensagem.",
      "Não detalhe o conteúdo no corpo do e-mail, obrigando o destinatário a abrir e ler tudo para descobrir do que se trata."
    ],
    effects: [
      "Dificuldade em priorizar e-mails.",
      "Aumento do risco de perder informações importantes.",
      "Sensação de desorganização e falta de transparência."
    ],
    antidote: "Pactue coletivamente padrões claros para assuntos de e-mail, incentivando a especificidade e revisão dos títulos antes do envio.",
    tags: ["#Comunicação", "#Email", "#AssuntoVago"]
  },
  {
    title: "O loop de feedback por e-mail",
    icon: "🔄",
    subtitle: "Feedback v3.docx",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["FeedbackFragmentado", "VersãoExcessiva"],
    modusOperandi: [
      "Solicite feedbacks individuais por e-mail para o mesmo documento, sem centralizar as respostas.",
      "Gere múltiplas versões do arquivo, dificultando o controle e a consolidação das sugestões."
    ],
    effects: [
      "Retrabalho para consolidar feedbacks.",
      "Risco de perda de informações importantes.",
      "Confusão sobre qual é a versão final do documento."
    ],
    antidote: "Centralize feedbacks em plataformas colaborativas e pactue critérios claros para controle de versões. Permita revisão dos processos sempre que houver confusão ou retrabalho.",
    tags: ["#Comunicação", "#Feedback", "#ControleDeVersão"]
  },
  // TÁTICAS DRASTICAS
  {
    title: "O repositório de informações fantasma",
    icon: "👻",
    subtitle: "Drive da infoxicação",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Desorganização", "RepositórioFantasma"],
    modusOperandi: [
      "Implemente um repositório digital sem estrutura lógica, sem treinamento e sem curadoria de conteúdo.",
      "Deixe os arquivos se acumularem sem revisão, tornando impossível localizar documentos relevantes."
    ],
    effects: [
      "Perda de tempo procurando informações.",
      "Retrabalho por desconhecimento de arquivos existentes.",
      "Sensação de caos informacional."
    ],
    antidote: "Construa e revise coletivamente a estrutura do repositório, com curadoria regular e treinamento acessível. Permita que qualquer pessoa proponha melhorias na organização.",
    tags: ["#Comunicação", "#Repositório", "#Desorganização"]
  },
  {
    title: "Comunicados contraditórios",
    icon: "⚡",
    subtitle: "A arte do Gaslighting",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Contradição", "Ruído"],
    modusOperandi: [
      "Distribua comunicados divergentes sobre o mesmo tema por canais distintos ou por diferentes lideranças.",
      "Não esclareça as contradições, deixando os destinatários confusos sobre o que seguir."
    ],
    effects: [
      "Dificuldade em saber qual orientação seguir.",
      "Aumento do estresse e da desconfiança.",
      "Risco de erros operacionais por falta de alinhamento."
    ],
    antidote: "Pactue fluxos claros de comunicação institucional e permita revisão dos processos sempre que houver ruído ou contradição. Torne explícito quem comunica o quê e por qual canal.",
    tags: ["#Comunicação", "#Contradição", "#Ruído"]
  },
  {
    title: "Mudez Oficial",
    icon: "🤐",
    subtitle: "Não diga nada sobre nada",
    level: "Tática Drástica",
    damageLevel: 5,
    dangerTags: ["Silêncio", "FaltaDeTransparência"],
    modusOperandi: [
      "Evite comunicados oficiais sobre temas sensíveis ou de grande impacto.",
      "Permita que boatos e rumores se espalhem, aumentando o clima de insegurança."
    ],
    effects: [
      "Ambiente de desconfiança e medo.",
      "Proliferação de boatos e ruídos informativos.",
      "Dificuldade de adaptação e alinhamento coletivo."
    ],
    antidote: "Construa acordos para comunicação transparente sobre temas sensíveis, garantindo espaço para perguntas e revisão coletiva dos processos de informação.",
    tags: ["#Comunicação", "#Silêncio", "#Transparência"]
  },
  {
    title: "O E-mail com Plateia",
    icon: "📧",
    subtitle: "Todo mundo precisa saber",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["Cultura do Copia"],
    modusOperandi: [
      "Ao redigir um e-mail, mesmo para uma solicitação simples ou uma informação de rotina, adicione generosamente pessoas ao campo 'Cc:'. Inclua chefes, chefes de chefes, pares de outras áreas e qualquer um que possa remotamente ter algum interesse (ou nenhum) no assunto.",
      "Justifique mentalmente como 'manter todos informados' ou 'para fins de registro'. O efeito real é que a maioria dos destinatários em cópia presumirá que outra pessoa no 'Para:' ou no 'Cc:' irá agir."
    ],
    effects: [
      "A ação solicitada se perde no mar de destinatários, a caixa de entrada de todos fica mais cheia e a chance de uma resposta clara ou ação rápida diminui exponencialmente.",
      "Diluição da responsabilidade individual por uma tarefa ou resposta.",
      "Aumento do volume de e-mails irrelevantes para a maioria dos copiados.",
      "Dificuldade em rastrear quem de fato precisa fazer o quê.",
      "Cultura de 'cobrir o meu lado' através da inclusão massiva de pessoas."
    ],
    antidote: "Direcione mensagens apenas para quem realmente precisa agir e use 'Cc:' com parcimônia. Para comunicações em grupo, privilegie canais coletivos claros e permita revisão dos critérios de comunicação sempre que surgirem excessos ou ruídos.",
    tags: ["#Comunicação", "#EmailExcessivo", "#CulturaDoCopia", "#InformacaoPerdida"]
  },
  {
    title: "Os canais múltiplos",
    icon: "📱",
    subtitle: "A fragmentação que esgota",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["Fragmentação"],
    modusOperandi: [
      "Para cada projeto, iniciativa, força-tarefa ou até mesmo para organizar o happy hour, crie um novo grupo de WhatsApp. Não importa se os membros são os mesmos de outros cinco grupos já existentes. A justificativa é 'manter os assuntos organizados'.",
      "Nomeie o grupo de forma grandiosa (Ex: 'Task Force Fênix - Inovação Disruptiva'). Comece com muito entusiasmo, enviando várias mensagens. Em poucos dias, observe o grupo se tornar um repositório de figurinhas, 'bom dias' e informações importantes que se perdem no fluxo."
    ],
    effects: [
      "As pessoas começam a silenciar os grupos, perdem informações cruciais e a comunicação que deveria ser ágil se torna fragmentada e caótica.",
      "Proliferação de notificações que levam à 'cegueira de banners'.",
      "Dificuldade em encontrar informações específicas devido à dispersão entre múltiplos grupos.",
      "Comunicação oficial misturada com assuntos informais, diminuindo a seriedade.",
      "Cansaço digital e a sensação de estar sempre 'de plantão'."
    ],
    antidote: "Consolide canais e grupos com objetivos similares, priorizando espaços institucionais e regras claras de uso. Permita revisão coletiva da estrutura de canais e incentive que qualquer pessoa proponha fusão ou eliminação de grupos redundantes.",
    tags: ["#Comunicação", "#WhatsAppCorporativo", "#Fragmentação", "#PerdaDeFoco"]
  },
  {
    title: "Podcast Forçado",
    icon: "🎤",
    subtitle: "Olha o podcast!",
    level: "Tática Drástica",
    damageLevel: 4,
    dangerTags: ["Falta de Objetividade"],
    modusOperandi: [
      "Em vez de digitar uma mensagem concisa ou fazer uma ligação rápida, opte por enviar um áudio no WhatsApp (ou outra plataforma de mensagens) com duração superior a 2 minutos. Divague, repita-se, inclua pausas longas e pensamentos laterais.",
      "Envie o áudio em um momento inconveniente para o destinatário (ex: durante uma reunião dele). A beleza desta tática é que obriga o outro a parar tudo para ouvir, ou a arriscar perder um detalhe 'crucial' escondido no meio de 5 minutos de explanação."
    ],
    effects: [
      "O destinatário perde tempo precioso, se irrita com a falta de objetividade e provavelmente terá que ouvir o áudio mais de uma vez para captar a mensagem (se houver uma).",
      "Interrupção do fluxo de trabalho do colega.",
      "Dificuldade em registrar ou buscar a informação posteriormente (áudios não são facilmente pesquisáveis).",
      "Impressão de desorganização e falta de consideração pelo tempo alheio.",
      "Aumento da ansiedade para quem recebe, que precisa 'decifrar' o que é importante."
    ],
    antidote: "Pactue coletivamente limites para áudios longos e incentive o uso de textos objetivos. Permita que qualquer pessoa peça resumos por escrito e revise periodicamente os acordos para evitar sobrecarga.",
    tags: ["#Comunicação", "#WhatsAppCorporativo", "#AudioLongo", "#FaltaDeObjetividade", "#PerdaDeTempo"]
  },
  {
    title: "A Redundância",
    icon: "🔁",
    subtitle: "A mesma mensagem, em todo lugar, o tempo todo",
    level: "Tática Leve",
    damageLevel: 3,
    dangerTags: ["Sobrecarga Informativa"],
    modusOperandi: [
      "Para garantir que uma informação (mesmo que simples) seja 'definitivamente' recebida, comunique-a através de múltiplos canais simultaneamente. Mande um e-mail, replique a mesma mensagem no grupo de WhatsApp da equipe, poste no canal do Slack/Teams e, se possível, comente verbalmente na primeira oportunidade.",
      "Não adapte a mensagem para cada plataforma. Copie e cole. O objetivo é criar uma avalanche informativa que deixe claro que VOCÊ comunicou. Se o outro não viu, o problema é dele."
    ],
    effects: [
      "As pessoas ficam confusas sobre qual canal é o 'oficial' ou prioritário, sentem-se bombardeadas e tendem a ignorar comunicações futuras por excesso.",
      "Criação de 'ruído' e fadiga informativa.",
      "Diminuição da atenção, pois as pessoas esperam que a informação importante seja repetida.",
      "Dificuldade em manter um histórico organizado das comunicações.",
      "Sensação de microgerenciamento ou desconfiança na capacidade da equipe de absorver informação."
    ],
    antidote: "Pactue coletivamente canais prioritários para cada tipo de informação e evite replicar mensagens idênticas em múltiplos espaços. Permita revisão dos acordos sempre que houver confusão ou ruído informativo.",
    tags: ["#Comunicação", "#Redundancia", "#SobrecargaInformativa", "#MultiplosCanais"]
  }
];
