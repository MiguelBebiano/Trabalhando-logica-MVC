# Gerenciador de Tarefas — Estrutura MVC em Node.js

## Visão geral

Este projeto representa a base inicial de uma aplicação web para gerenciamento de tarefas. O objetivo é aplicar, de forma prática, o padrão arquitetural **MVC (Model–View–Controller)** em Node.js, separando responsabilidades e preparando uma estrutura organizada para a evolução de um CRUD completo de tarefas.

No estado atual, o projeto está nas primeiras linhas de desenvolvimento. A fundação técnica já foi criada — servidor, conexão com banco de dados, modelo, rotas, controlador e views —, mas as funcionalidades de negócio ainda serão construídas progressivamente.

## Finalidade da aplicação

A aplicação deverá permitir o gerenciamento de tarefas, com informações como:

- título;
- descrição;
- status de conclusão.

Quando concluída, a proposta é oferecer operações de criação, visualização, atualização e remoção de tarefas, utilizando persistência em banco de dados relacional.

## Arquitetura MVC adotada

O projeto está organizado conforme o padrão MVC:

| Camada | Localização | Responsabilidade atual |
| --- | --- | --- |
| **Model** | `models/Task.js` | Define a entidade `Task` e seus campos para o Sequelize. |
| **View** | `views/` | Contém os templates Handlebars responsáveis pela interface. |
| **Controller** | `controllers/TaskController.js` | Recebe as requisições das tarefas e escolhe qual view renderizar. |
| **Routes** | `routes/tasksRoutes.js` | Mapeia as URLs relacionadas a tarefas para os métodos do controller. |
| **Conexão com dados** | `db/conn.js` | Configura a comunicação com o banco MySQL por meio do Sequelize. |
| **Inicialização** | `index.js` | Configura o Express, os middlewares, os arquivos estáticos, as rotas e a inicialização do servidor. |

Essa separação evita que regras de negócio, acesso a dados e interface fiquem misturados no mesmo arquivo. É uma prática essencial para aplicações mais fáceis de manter, testar e expandir.

## Tecnologias presentes

- **Node.js**: ambiente de execução JavaScript no servidor;
- **Express**: framework HTTP responsável pelo servidor e roteamento;
- **express-handlebars**: mecanismo de templates para renderização das páginas HTML;
- **Sequelize**: ORM utilizado para mapear modelos JavaScript para tabelas do banco;
- **MySQL / mysql2**: banco de dados relacional e seu driver para Node.js;
- **Nodemon**: ferramenta de desenvolvimento para reiniciar o servidor após alterações;
- **CSS**: estilos públicos organizados em `public/css/styles.css`.

## Fluxo já preparado

1. A aplicação é iniciada pelo arquivo `index.js`.
2. O Sequelize sincroniza o modelo `Task` com o banco configurado em `db/conn.js`.
3. O Express disponibiliza os arquivos da pasta `public/` e direciona `/tasks` para `tasksRoutes.js`.
4. As rotas atuais respondem a:
   - `GET /tasks`: exibe a tela de todas as tarefas;
   - `GET /tasks/add`: exibe a tela de criação de tarefa.
5. O controller renderiza os templates correspondentes usando o layout principal do Handlebars.

## Estado atual do desenvolvimento

Este repositório é, intencionalmente, uma estrutura inicial de estudo. No momento:

- o servidor Express e o mecanismo de views estão configurados;
- a conexão com MySQL e o modelo `Task` estão definidos;
- as rotas de exibição das telas foram criadas;
- as páginas ainda possuem conteúdo inicial e não exibem dados do banco;
- não há, até aqui, formulários funcionais, inserção, edição, exclusão, alteração de status ou validação de tarefas.

Portanto, o código atual não deve ser interpretado como um gerenciador de tarefas finalizado, mas como a base arquitetural sobre a qual essas funcionalidades serão implementadas.

## Próximas evoluções esperadas

- criar o formulário de cadastro de tarefas;
- persistir tarefas no MySQL com Sequelize;
- buscar e renderizar as tarefas cadastradas;
- implementar edição, remoção e marcação de tarefa concluída;
- validar entradas e tratar erros de forma adequada;
- melhorar a interface e a experiência de uso;
- adicionar testes e configurações apropriadas para produção.

## Execução em desenvolvimento

Com as dependências instaladas e o MySQL configurado conforme `db/conn.js`, o projeto pode ser iniciado com:

```bash
npm start
```

O servidor é configurado para iniciar na porta `3000`.

---

Este arquivo documenta fielmente o estágio atual do projeto: uma fundação MVC funcional para aprendizagem, preparada para evoluir para uma aplicação completa de gerenciamento de tarefas.
