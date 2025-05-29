import { AlertCircle } from "lucide-react";

export interface TacticCardData {
  title: string;
  icon?: string; // Emoji por padrão
  subtitle: string;
  level: string;
  damageLevel?: number; // 1 a 5 (barra de dano)
  dangerTags?: string[]; // Ex: ["Baixo Risco", "Eficácia Alta"]
  modusOperandi: string | string[]; // Pode ser string ou lista de passos
  effects: string[];
  antidote?: string; // Como neutralizar
  tags?: string[]; // Ex: ["#Reuniões", "#Burocracia"]
}


export interface ManualSection {
  slug: string;
  navTitle: string; // For sidebar navigation
  pageTitle: string; // For H1 on the page
  introSubtitle?: string;
  introParagraphs: string[];
  tacticsKey?: string; // Chave para identificar o array de táticas desta seção
  disclaimer?: {
    title: string;
    description: string;
    Icon?: React.ElementType; // Optional icon for disclaimer
  };
  finalDisclaimer?: {
    title: string;
    description: string;
    Icon?: React.ElementType;
  };
}


// As seções do manual devem começar com '1. Reuniões'.
import { reunioesTactics } from './cards-reunioes';
import { comunicacaoTactics } from './cards-comunicacao';
import { processosTactics } from './cards-processos';
import { tecnologiaTactics } from './cards-tecnologia';
import { gestaoTempoTactics } from './cards-gestao-tempo';
import { culturaTactics } from './cards-cultura';

export const tacticsMap = {
  reunioes: reunioesTactics,
  comunicacao: comunicacaoTactics,
  processos: processosTactics,
  tecnologia: tecnologiaTactics,
  'gestao-tempo': gestaoTempoTactics,
  cultura: culturaTactics,
};

export const sectionEmojis: Record<string, string> = {
  reunioes: "📅",
  comunicacao: "💬",
  processos: "🗂️",
  tecnologia: "💻",
  "gestao-tempo": "⏰",
  cultura: "🏛️",
  "sabotador-interno": "🧠",
  encerramento: "🏁",
};

export const manualSections: ManualSection[] = [
  {
    slug: "reunioes",
    navTitle: "Reuniões",
pageTitle: "1. Reuniões",
introSubtitle: "A arte de juntar pessoas para adiar decisões",
    introParagraphs: [
      "Ah, as reuniões! Os <strong>sagrados templos da procrastinação corporativa</strong>, os panteões onde as boas ideias vão para serem dissecadas até a insignificância e as decisões são adiadas com a maestria de um artista.",
      "Se a sua meta é <strong>sugar a energia vital de uma equipe</strong> e garantir que nada de útil aconteça, você veio ao lugar certo.",
      "Aprenda a convocar, conduzir e concluir (ou nunca concluir) encontros que entrarão para a história... da sua empresa, como mais uma hora perdida que poderia ter sido um e-mail. Ou melhor ainda, <strong>nada</strong>."
    ],
    tacticsKey: 'reunioes',
  },
  {
    slug: "comunicacao",
    navTitle: "Comunicação",
    pageTitle: "2. Comunicação Interna",
introSubtitle: "Fale bastante sem dizer quase nada",
    introParagraphs: [
      "No universo corporativo, a comunicação não é sobre clareza, mas sobre <strong>volume</strong>. Quanto mais canais, e-mails em cópia, grupos de WhatsApp e comunicados redundantes, melhor!",
      "O objetivo não é informar, mas criar uma <strong>cacofonia tão ensurdecedora</strong> que ninguém mais saiba o que é prioridade, quem é responsável ou, francamente, o que diabos está acontecendo.",
      "Domine a arte de transformar mensagens simples em <strong>épicos burocráticos</strong> e informações cruciais em <strong>sussurros perdidos no dilúvio digital</strong>."
    ],
    tacticsKey: 'comunicacao',
  },
  {
    slug: "processos",
    navTitle: "Processos",
    pageTitle: "3. Processos & Burocracia",
introSubtitle: "Quanto mais Camadas, menos responsabilidade",
    introParagraphs: [
      "Se as reuniões são o purgatório, os processos e a burocracia são o <strong>labirinto infernal</strong> desenhado por um M.C. Escher com TOC e um carimbo na mão.",
      "O objetivo é nobre: ordem e controle. O resultado? <strong>Paralisia por análise</strong>, formulários que se multiplicam como coelhos, e um fluxo de aprovação tão complexo que o simples ato de pedir um lápis requer a bênção de três gerentes e um comitê interdepartamental.",
      "Construa sua <strong>fortaleza de regulamentos</strong> e veja a agilidade morrer lentamente."
    ],
    tacticsKey: 'processos',
  },
  {
    slug: "tecnologia",
    navTitle: "Tecnologia",
    pageTitle: "4. Tecnologia & Sistemas",
introSubtitle: "Faça o time rezar pelo retorno do papel e caneta",
    introParagraphs: [
      "A tecnologia deveria ser nossa aliada, uma ferramenta para facilitar a vida. Mas, nas mãos de um <strong>verdadeiro sabotador corporativo</strong>, ela se torna uma arma de distração em massa, um buraco negro de recursos e uma fonte inesgotável de frustração.",
      "Desde a sugestão de trocar o sistema ERP a cada eclipse solar até a criação de planilhas que rivalizam em complexidade com o <strong>genoma humano</strong>.",
      "Explore como transformar bits e bytes em <strong>barreiras e obstáculos</strong>."
    ],
    tacticsKey: 'tecnologia',
  },
  {
    slug: "gestao-tempo",
    navTitle: "Gestão de Tempo",
    pageTitle: "5. Gestão de Tempo & Prioridades",
introSubtitle: "Substitua estratégia por adrenalina",
    introParagraphs: [
      "Bem-vindo à dança frenética do <strong>'pra ontem'</strong>, onde o planejamento estratégico é uma peça de ficção e a lista de tarefas é um ser mutante que se reescreve a cada hora.",
      "Aqui, a arte não é fazer o que é importante, mas parecer <strong>insanamente ocupado</strong> com o que é (supostamente) urgente.",
      "Aprenda a cultivar o caos, a transformar prioridades em <strong>sugestões vagas</strong> e a garantir que todos estejam correndo em círculos, de preferência com várias bolas no ar."
    ],
    tacticsKey: 'gestao-tempo',
  },
  {
    slug: "cultura",
    navTitle: "Cultura",
    pageTitle: "6. Cultura & Valores",
introSubtitle: "Missão, Visão, Valores (e outras lendas urbanas)",
    introParagraphs: [
      "Cultura organizacional é aquilo que está nos quadros da parede, mas <strong>raramente nas atitudes do dia a dia</strong>.",
      "Descubra como transformar valores em <strong>slogans vazios</strong> e promover o culto à resiliência (leia-se: <strong>aguentar calado</strong>).",
      "O objetivo final? Garantir que todo mundo finja acreditar que <strong>está tudo ótimo, mesmo quando não está</strong>."
    ],
    tacticsKey: 'cultura',
  },
  {
    slug: "sabotador-interno",
navTitle: "Quiz",
pageTitle: "7. Quiz do Sabotador Interno",
introSubtitle: "Descubra sua potência de sabotagem!",
    introParagraphs: [
      "Após esta jornada pelas artes obscuras da sabotagem corporativa, chegou o momento da verdade. Será que, por trás da sua fachada de profissional dedicado, existe um gênio da disfunção esperando para ser reconhecido? É hora de uma profunda autoanálise (corporativa, claro). Prepare-se para confrontar seus próprios hábitos e descobrir qual arquétipo de sabotador ressoa com sua alma (ou com seu crachá).",
      "Introdução ao Quiz: \"Responda com sinceridade (ou com a sinceridade que seu cargo permite) e revele seu potencial oculto para transformar ordem em caos elegante.\""
    ]
  },
  {
    slug: "encerramento",
    navTitle: "Encerramento",
    pageTitle: "8. Encerramento & Disclaimer Final",
    introSubtitle: "Missão (Quase) Cumprida: E Agora, Agente?",
    introParagraphs: [
      "Se você chegou até aqui, parabéns! Você não apenas sobreviveu a este compêndio de disfunções, como provavelmente se reconheceu em mais situações do que gostaria de admitir. A verdade inconveniente, caro agente, é que a sabotagem corporativa mais eficaz raramente é intencional. Ela nasce de boas intenções mal implementadas, de processos criados para proteger que acabam paralisando, e daquele eterno desejo humano de parecer ocupado, mesmo que seja apenas em reuniões.",
      "Este manual, apesar do tom, não é um chamado à destruição, mas um espelho. Um convite para rir das nossas próprias armadilhas corporativas e, quem sabe, encontrar a coragem para desarmá-las. Use este 'conhecimento proibido' para identificar os gargalos, questionar o status quo e, talvez, propor uma reunião a menos.",
      "Reconheceu, riu e se desesperou um pouquinho? Ótimo. Agora, que tal transformar essa epifania em algo... produtivo? Compartilhe este manual com aquele colega que entende a piada (ou que precisa urgentemente entendê-la). E lembre-se: a maior sabotagem é não aprender com os erros – especialmente os que cometemos com as melhores intenções."
    ],
    finalDisclaimer: {
title: "🚨 ÚLTIMO AVISO! 🚨",
      description: "Este material é uma SÁTIRA. Uma CRÍTICA. Uma BRINCADEIRA COM FUNDO DE VERDADE (bem fundo, às vezes). A aplicação literal das 'táticas' aqui descritas pode resultar em: perda de produtividade real (quem diria?), olhares de reprovação, feedback construtivo do seu gestor (o tipo que não é sanduíche) e, possivelmente, uma carreira brilhante como... consultor em como não fazer as coisas. <br/><strong>A responsabilidade por um ambiente de trabalho funcional e minimamente são ainda é sua.</strong> Não diga que não avisamos... duas vezes.",
      Icon: AlertCircle
    }
  }
];

export const getSectionData = (slug: string): ManualSection | undefined => {
  return manualSections.find(section => section.slug === slug);
};
