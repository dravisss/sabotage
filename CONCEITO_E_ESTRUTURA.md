# Manual de Sabotagem Corporativa – Conceito e Estrutura

## Conceito

O **Manual de Sabotagem Corporativa** é um projeto satírico e crítico que explora, com humor, os principais vícios e disfunções do ambiente corporativo. O objetivo é provocar reflexão e entretenimento, utilizando uma apresentação moderna e interativa. O site apresenta táticas, situações e comportamentos que sabotam empresas de dentro para fora, sempre com alertas de humor e disclaimers para evitar interpretações literais.

- **Tom:** Satírico, crítico e bem-humorado
- **Propósito:** Reflexão sobre disfunções organizacionais via entretenimento
- **Conteúdo:** Táticas de sabotagem, situações comuns, críticas e antídotos (boas práticas)

## Tecnologias Utilizadas

- **Next.js**: Framework React para SSR/SSG e rotas modernas
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Utilitário CSS para estilização rápida
- **Shadcn/UI**: Componentes UI acessíveis e modernos

## Estrutura do Projeto

```
/ (raiz)
├── app/                # Páginas, layout global, estilos e rotas
│   ├── page.tsx        # Página inicial
│   ├── layout.tsx      # Layout global
│   └── ...             # Outras rotas e utilitários
├── components/         # Componentes reutilizáveis (incluindo UI)
├── lib/                # Conteúdo dinâmico das seções e táticas
│   ├── manual-content.ts      # Estrutura e textos das seções
│   ├── cards-reunioes.ts      # Cards/táticas de sabotagem por seção
│   ├── cards-comunicacao.ts
│   ├── cards-processos.ts
│   ├── cards-tecnologia.ts
│   ├── cards-gestao-tempo.ts
│   └── cards-cultura.ts
├── public/             # Arquivos estáticos
├── README.md           # Documentação principal
└── ...                 # Configurações e dependências
```

## Convenções e Boas Práticas

- **Conteúdo Dinâmico:** Todas as seções do manual são definidas em `lib/manual-content.ts`.
- **Componentização:** Componentes reutilizáveis em `components/ui`.
- **Estilo:** Priorize Tailwind CSS.
- **Acessibilidade:** Siga padrões de acessibilidade.
- **Idioma:** Todo texto em português brasileiro.
- **Humor & Crítica:** Tom satírico com disclaimers obrigatórios.

## Seções do Manual

Cada seção possui título, subtítulo, introdução e um conjunto de táticas (cards). As principais seções são:

1. **Reuniões** – “A arte de juntar pessoas para adiar decisões”
2. **Comunicação** – “Fale bastante sem dizer quase nada”
3. **Processos** – “Quanto mais camadas, menos responsabilidade”
4. **Tecnologia** – “Faça o time rezar pelo retorno do papel e caneta”
5. **Gestão de Tempo** – “Substitua estratégia por adrenalina”
6. **Cultura** – “Missão, Visão, Valores (e outras lendas urbanas)”
7. **Quiz do Sabotador Interno** – “Descubra sua potência de sabotagem!”
8. **Encerramento** – “Missão (Quase) Cumprida: E Agora, Agente?”

Cada introdução é uma crítica bem-humorada ao tema.

## Cards/Táticas de Sabotagem

Cada seção possui vários cards/táticas, com:
- **Título**
- **Ícone (emoji)**
- **Subtítulo**
- **Nível** (leve, moderada, drástica)
- **Nível de dano**
- **Tags de perigo**
- **Modus operandi** (como sabotar)
- **Efeitos negativos**
- **Antídoto** (como neutralizar)

### Exemplos de Cards

#### Reuniões
- **Pegando Carona:** Desviar do foco com tangentes
- **Fica pra Próxima:** Reunião para marcar outra reunião
- **Querância:** Veto pessoal sem justificativa
- **Unanimidade Mítica:** Buscar consenso absoluto impede avanços

#### Comunicação
- **Crie mais um grupo:** Fragmentação de canais
- **O assunto vago:** E-mails genéricos dificultando entendimento
- **Agora vai!:** Feedbacks dispersos e versões infinitas de arquivos

#### Processos
- **Burocracia Express:** Justificativas longas para tudo
- **Selo Supremo:** Centralização de aprovações
- **Paranoia Formal:** Auditorias excessivas travando o trabalho

#### Tecnologia
- **A planilha onipresente:** Planilhas para tudo, gerando caos
- **O empata software:** Bloquear acessos sob pretexto de segurança
- **App novo, denovo:** Forçar adoção de ferramentas sem critério

#### Gestão de Tempo
- **Pra Ontem:** Prazos impossíveis e urgência artificial
- **Incêndio Diário:** Mudança de prioridades constante
- **Multitasking:** Incentivo à dispersão, nada termina

#### Cultura
- **O Otimismo Tóxico:** Ignorar problemas em nome do “bom clima”
- **Engajamento Unilateral:** Só as ideias da liderança valem
- **Pesquisa Decorativa:** Pesquisas de clima que não mudam nada

---

Todo conteúdo é propositalmente exagerado e crítico, mas sempre há um “antídoto” (boas práticas). O projeto é focado em UX, humor e reflexão sobre o ambiente corporativo.
