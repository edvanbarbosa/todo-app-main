```markdown
# 📝 Todo App (Full Stack)

Uma aplicação web moderna e completa para gerenciamento de tarefas do dia a dia. O projeto foi arquitetado de forma desacoplada, contando com uma interface reativa em **React + TypeScript** no Front-end e uma API RESTful em **Node.js, Express e MongoDB** no Back-end.

🚀 **Acesse o Front-end online:** [todo-app-main-inky.vercel.app](https://todo-app-main-inky.vercel.app/)

---

## 🎨 Funcionalidades

- [x] **Adicionar tarefas:** Criação simples e rápida de novos itens.
- [x] **Marcar como concluída:** Alternância de status de cada tarefa.
- [x] **Filtragem de tarefas:** Filtre suas tarefas por estado (`Todas`, `Ativas` e `Concluídas`).
- [x] **Limpeza em lote:** Opção para remover todas as tarefas concluídas de uma só vez.
- [x] **Contador dinâmico:** Exibição em tempo real da quantidade de tarefas pendentes.
- [x] **Alternância de Tema (Light/Dark Mode):** Suporte a tema claro e escuro para melhor experiência visual.
- [x] **Drag and Drop (Reordenação):** Reordenação dinâmica de itens da lista com suporte a acessibilidade via teclado.
- [x] **Layout Responsivo:** Adaptado para dispositivos móveis e desktops.

---

## 🛠️ Stack Técnica

### Front-end
- **React:** Biblioteca para construção da interface de usuário baseada em componentes.
- **TypeScript:** Tipagem estática para maior segurança, autocompletar e prevenção de erros em tempo de desenvolvimento.
- **Vite:** Build tool rápida para desenvolvimento e bundling do projeto.
- **CSS3 / CSS Modules:** Estilização modular e responsiva.

### Back-end
- **Node.js & Express:** Framework para criação da API RESTful e manipulação de rotas.
- **MongoDB & Mongoose:** Banco de dados NoSQL com modelagem e validação de esquemas.
- **CORS & Dotenv:** Gerenciamento de segurança cross-origin e variáveis de ambiente.

### Deploy & Versionamento
- **Vercel:** Hospedagem e deploy contínuo do Front-end.
- **Git & GitHub:** Controle de versão e gestão do código fonte.

---

## 🎯 Aprendizados e Destaques Técnicos

Neste projeto, o foco esteve em aplicar boas práticas de desenvolvimento de software:
- **Arquitetura Desacoplada (Client-Server):** Separação clara de responsabilidades entre a camada visual (Front-end) e a camada de negócios/dados (Back-end).
- **TypeScript no React:** Definição rigorosa de *interfaces* e *types* para entidades de tarefas, estados do filtro e *props* dos componentes.
- **Persistência de Dados & Modelagem:** Modelagem de Schemas no Mongoose para persistência real dos dados no MongoDB.
- **Acessibilidade (a11y):** Cuidados com navegação por teclado e avisos durante a reordenação de itens via *Drag and Drop*.

---
