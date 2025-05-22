# Manual de Sabotagem Corporativa

Bem-vindo ao **Manual de Sabotagem Corporativa**, um projeto satírico e crítico que explora, de forma bem-humorada, os principais vícios e disfunções do ambiente corporativo. O objetivo é provocar reflexão e entretenimento, utilizando uma apresentação moderna e interativa.

## ✨ Visão Geral

Este site apresenta, em formato de manual, táticas, situações e comportamentos que sabotam empresas de dentro para fora. O conteúdo é dinâmico, dividido em seções temáticas (reuniões, processos, comunicação, cultura etc.), com alertas de humor e disclaimers.

## 🚀 Tecnologias Utilizadas

- **Next.js**: Framework React para SSR/SSG e rotas modernas.
- **TypeScript**: Tipagem estática para maior robustez e produtividade.
- **Tailwind CSS**: Utilitário CSS para estilização rápida e responsiva.
- **Shadcn/UI**: Componentes UI acessíveis e modernos (Alert, Button etc.).
- **Context7**: Para uso e atualização de bibliotecas modernas (ver regras).

## 📁 Estrutura do Projeto

```
/ (raiz)
├── app/
│   ├── page.tsx         # Página inicial dinâmica
│   └── layout.tsx       # Layout global
├── components/
│   └── ui/alert.tsx     # Componentes de UI reutilizáveis
├── lib/
│   └── manual-content.ts# Conteúdo dinâmico das seções
├── public/              # Arquivos estáticos
├── styles/              # Estilos globais
├── README.md            # Este arquivo
└── .windsurfrules       # Regras do projeto (ver abaixo)
```

## 🧑‍💻 Como Rodar Localmente

1. **Pré-requisitos:**
   - Node.js >= 18.18.0 (ideal: 20.x)
   - npm, yarn, pnpm ou bun

2. **Instale as dependências:**
   ```bash
   npm install
   # ou yarn ou pnpm ou bun install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou yarn dev ou pnpm dev ou bun dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000)

## 🏗️ Convenções e Boas Práticas

- **Conteúdo Dinâmico:** Todas as seções do manual são definidas em `lib/manual-content.ts`.
- **Componentização:** Use componentes reutilizáveis em `components/ui`.
- **Estilo:** Prefira classes utilitárias do Tailwind. Não escreva CSS customizado salvo necessidade clara.
- **Acessibilidade:** Siga padrões de acessibilidade nos componentes.
- **Internacionalização:** Todo conteúdo textual deve estar em português brasileiro.
- **Humor & Crítica:** Lembre-se: o tom é satírico, mas disclaimers são obrigatórios para evitar interpretações literais.

## 📦 Deploy

Recomendado o deploy na Vercel ou Netlify. O projeto está pronto para SSR/SSG.

## 🤝 Contribuições

Pull requests são bem-vindos! Siga o padrão de código, escreva commits claros e mantenha o tom do projeto.

## ⚠️ Aviso Legal

Este projeto é uma obra de ficção e crítica social. Não incentive práticas antiéticas no ambiente de trabalho.

---

# .windsurfrules

As regras abaixo devem ser seguidas por todos os desenvolvedores e automações:

- **Sempre utilize o context7 para consultar e instalar bibliotecas, garantindo versões mais recentes e seguras.**
- **Não utilize bibliotecas desatualizadas manualmente.**
- **Valide todas as dependências via context7 antes de instalar ou atualizar.**
- **Priorize componentes acessíveis e responsivos.**
- **Todo novo conteúdo deve ser revisado quanto ao tom satírico e à clareza dos disclaimers.**
- **Nunca publique conteúdo sensível, real ou identificável de empresas ou pessoas.**
- **Todo código deve passar por lint e testes antes de ser enviado para produção.**
