import React from "react";

const Aside = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <aside className="my-6 bg-zinc-50 border-l-4 border-zinc-300 px-6 py-4 rounded-md flex gap-3 items-start shadow-sm">
    <span className="text-2xl select-none mt-1">{icon}</span>
    <div className="text-base text-zinc-700 font-mono leading-relaxed">{children}</div>
  </aside>
);

export default function MatrioskaGamePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 md:px-0 font-title text-zinc-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center font-title tracking-tight">🎲 Projeto Matrioska</h1>
      <div className="w-20 h-1 bg-zinc-300 mx-auto rounded mb-8" />
      <p className="text-lg md:text-xl text-center mb-6 italic text-zinc-700 font-mono">Um jogo e uma experiência narrativa para quem leva o Manual de Sabotagem sarcasticamente à sério</p>
      <div className="w-full h-1 bg-zinc-100 rounded mb-10" />

      <h2 className="text-2xl font-bold mb-2 mt-8">Que diabo é isso?</h2>
      <p className="mb-6 text-base md:text-lg font-mono leading-relaxed">
        Projeto Matrioska é um jogo de realidade alternativa (ARG) cujo objetivo é tentar observar e aplicar as táticas e antídotos do Manual de Sabotagem no seu próprio contexto organizacional através de uma experiência narrativa coletiva.
      </p>

      <h2 className="text-2xl font-bold mb-2 mt-8">Experiência narrativa</h2>
      <Aside icon="🛠">
        No jogo você é um agente integrante de uma célula de contraespionagem da Agência Matrioska. Seu trabalho é realizar as missões recorrentes que a agência disponibiliza e, se for um bom agente, ajudar sua célula a escalar os ranking de reputação da Agência. O propósito da Matrioska é infiltrar e neutralizar o maior número de táticas de sabotagem disseminadas pela BIG4, uma organização sombria que sabota sistematicamente as organizações, inoculando sofrimento psíquico no trabalho para ter ainda mais lucros.
      </Aside>

      <h2 className="text-2xl font-bold mb-2 mt-8">Como Funciona?</h2>
      <Aside icon="🛠">
        A interação dos jogadores funciona basicamente pelo whatsapp da célula, onde recebe as atualizações das missões, faz escolhas e envia suas Anedotas de campo (causos reais vividos por você em sua organização).
      </Aside>

      <h2 className="text-2xl font-bold mb-2 mt-8">Quanto tempo eu preciso para dedicar para jogar?</h2>
      <Aside icon="⏰">
        A primeira fase do jogo dura aproximadamente 10 dias. A cada 02 dias haverá novas missões disponíveis. As outras fases do jogo dependem exclusivamente das decisões que tomar e de sua reputação no jogo. Se for para estimar, diria que o jogo vai te roubar nada mais que alguns momentos de conversa fiada no whatsapp (pelo menos vai ser para algo que pode fazer a diferença em seu trabalho).
      </Aside>

      <h2 className="text-2xl font-bold mb-2 mt-8">O que aprendo ou ganho com isso?</h2>
      <Aside icon="💡">
        É uma maneira lúdica, sarcástica e divertida de aprender mais sobre os problemas da sua organização usando o Manual de Sabotagem como ponto de partida. Além disso, você terá um grupo para ouvir e compartilhar histórias de campo e aprender com elas. Afinal, se é pra sofrer no caos da burocracia organizacional, que seja pelo menos rindo em grupo.
      </Aside>

      <h2 className="text-2xl font-bold mb-2 mt-8">Posso sair quando quiser?</h2>
      <Aside icon="💨">
        Claro, mas saiba que pode prejudicar de alguma forma as interações de sua célula. Faça uma avaliação se realmente gosta de jogos narrativos e tá afim de refletir e conversar sobre o seu contexto em grupos.
      </Aside>

      <h2 className="text-2xl font-bold mb-2 mt-8">Qual é intenção da TT com esse Jogo?</h2>
      <Aside icon="🔥">
        Resposta simples: Desdominar o mundo.<br />
        Resposta longa: Já faz parte de nossa história criar artefatos que ajudem as pessoas a perceberem e experimentarem novas práticas e premissas no trabalho. Especificamente com esse jogo temos a ambição de criar a maior base de dados de causos organizacionais e experimentos da galáxia. E você pode participar ativamente disso e ainda se divertir no processo.
      </Aside>

      <h2 className="text-2xl font-bold mb-2 mt-8">Quando começa o jogo?</h2>
      <Aside icon="🏃🏽">
        O jogo inicia no dia <span className="font-bold">15/07 às 19:00</span> somente para inscritos.
      </Aside>

      <h2 className="text-2xl font-bold mb-2 mt-8">Quanto custa participar do jogo?</h2>
      <Aside icon="🤑">
        Desde que seja membro do Clube de Agentes de mudança, apenas sua indignação e entusiasmo!<br />
        Custo financeiro <span className="font-bold">ZERO!</span>
      </Aside>

      <h2 className="text-2xl font-bold mb-2 mt-8">Gostei da proposta do jogo e quero ser um agente da Matrioska</h2>
      <p className="mb-3 font-mono text-base">Então, futuro agente, basta se inscrever aqui que Matrioska entra em contato para o próxima Temporada:</p>
      <Aside icon="📢">
        Registre-se logo pois só temos vagas apenas para <span className="font-bold">40 agentes!</span><br />
        <a
          href="https://www.notion.so/223d09dcb06680ca9e42d42efbf8e47b?pvs=21"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-zinc-900 text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-zinc-700 transition-colors duration-200 text-lg font-title tracking-wide"
        >
          INSCREVA-SE
        </a>
      </Aside>
    </div>
  );
}
