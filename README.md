# 📌 Gerenciador de Produtos - Frontend

Este é o frontend de um **Gerenciador de Produtos**, desenvolvido em **NextJs** com **TailwindCSS** e **ShadCN UI** para estilização. A aplicação simula a listagem de produtos com carregamento, filtros e paginação, integrada a uma API mock com `json-server`.

## 🚀 Tecnologias Utilizadas

- 🌐 **[Next.js](https://nextjs.org/)** – Framework React com suporte a SSR e rotas.
- 🎨 **[TailwindCSS](https://tailwindcss.com/)** – Framework utilitário para estilização.
- 💅 **[ShadCN UI](https://ui.shadcn.com/)** – Componentes de UI acessíveis e personalizáveis.
- 🔧 **[Zustand](https://zustand-demo.pmnd.rs/)** – Gerenciamento de estado global simples e escalável.
- 🧪 **[Vitest](https://vitest.dev/)** + **[Testing Library](https://testing-library.com/)** – Ferramentas para testes unitários e de renderização.
- 🧪 **[json-server](https://github.com/typicode/json-server)** – Simulador de API REST para desenvolvimento local.
- 🔄 **[concurrently](https://www.npmjs.com/package/concurrently)** – Executa múltiplos processos (Next.js + API) simultaneamente.

## 📂 Estrutura de Pastas

```bash
src
├── app                # Páginas da aplicação (Next.js routing)
├── components         # Componentes reutilizáveis e baseados em ShadCN
├── features
│   └── products       # Implementação das funcionalidades por domínio
├── services           # Integrações com a API e abstrações de serviços HTTP
```

## 📦 Como Rodar o Projeto

### 1. Instalação das dependências

```sh
yarn install
```

### 2. Inicialização da aplicação

```sh
yarn dev
```

> Esse comando inicia tanto a aplicação Next.js quanto o servidor da API mock (`json-server`) simultaneamente usando `concurrently`.

### 3. API mock (json-server)

A API está disponível em `http://localhost:3333/products` para simular chamadas reais. O arquivo `db.json` com os dados está na raiz do projeto.

## 🧪 Testes

Para rodar os testes:

```sh
yarn test
```

Inclui testes de renderização e comportamento usando **Vitest** e **Testing Library**.

## 💡 Comentários Técnicos

- Organização por domínio (feature-based):
  - A estrutura do projeto está organizada por domínio (ex: features/products), o que facilita a escalabilidade, o isolamento de responsabilidades e a manutenção do código em times maiores.

- Uso de hooks para encapsular lógica de UI:
  - Lógicas de estado e efeitos foram extraídas para hooks reutilizáveis, seguindo a abordagem do MVVM (Model View View Model). Isso mantém os componentes de UI mais limpos e focados na renderização.

- Uso de componentes do ShadCN:
  - A escolha do ShadCN UI fornece componentes acessíveis, personalizáveis e já integrados com o TailwindCSS, acelerando o desenvolvimento sem abrir mão da consistência visual.

- Testes com Vitest + Testing Library:
  - Foram priorizados testes de comportamento e renderização com Testing Library, por serem mais próximos da experiência real do usuário e garantirem maior robustez na interface.

- Controle de estado global
  - Para atender à exigência de **gerenciamento de estado global** do teste, nas integrações com as APIs foi implementado o gerenciamento manual com Zustand. Porém, em uma aplicação real, abordagens como React Query ou SSR do Next.js poderiam ser alternativas mais eficientes para otimizar o gerenciamento de dados e cache.