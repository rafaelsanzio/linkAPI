<h1 align="center">
  <h1 align="center">
    <img style="background-color: #312e38; border-radius: 10px;" alt="linkAPI-logo" src="https://media.glassdoor.com/sqll/2469862/linkapi-squarelogo-1552545271182.png" />
  </h1>

LinkAPI Technical

  <p align="center">
    <a href="https://nodejs.org/en/">
      <img src="https://img.shields.io/badge/-NodeJS-006400?style=flat&logo=Node.js&logoColor=#339933" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=TypeScript&logoColor=#007ACC" />
    </a>
    <a href="https://www.mongodb.com/">
      <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=MongoDB&logoColor=006400" />
    </a>
  </p>
</h1>

## 🔖 Sobre o desafio

O desafio proposto foi desenvolver uma API RESTful usando a tecnologia NodeJS.

- Criar contas testes nas plataformas Pipedrive e Bling.

- Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

- Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça

- Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

- Criar endpoint para trazer os dados consolidados da collection do MongoDB.

## 💻 Tecnologias

- <img width="20px" src="https://img.icons8.com/color/2x/nodejs.png" /> [NodeJS](https://nodejs.org/en/ 'NodeJS')
- <img width="20px" src="https://img.icons8.com/color/2x/typescript.png" /> [TypeScript](https://www.typescriptlang.org/ 'TypeScript')
- <img width="20px" src="https://res.cloudinary.com/practicaldev/image/fetch/s--00h6CjGb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.maxrooted.com/panduan-membangun-rest-api-expressjs-mysql/cover.png" /> [Express](https://expressjs.com/ 'Express')
- <img width="20px" src="https://img.icons8.com/color/2x/mongodb.png"/> [MongoDB](https://www.mongodb.com/ 'MongoDB')
- <img width="20px" src="https://avatars2.githubusercontent.com/u/20165699?s=400&v=4" /> [TypeORM](https://typeorm.io/#/ 'TypeORM')
- <img width="20px" src="https://img.icons8.com/dusk/2x/docker.png" /> [Docker](https://www.docker.com/ 'Docker')

## ▶️ Getting Started

- **Passo 1️⃣** : git clone do projeto [LinkAPI](https://github.com/rafaelsanzio/linkAPI 'linkAPI')
- **Passo 2️⃣** : executar a instalação de: [Node](https://nodejs.org/en/ 'Node') e [Docker](https://www.docker.com/ 'Docker')
- **Passo 3️⃣** : rodando a aplicação executando os seguintes comandos:

```bash
  # Navegando até a pasta do projeto
  $ cd linkAPI

  # Instalando todas as depêndencias necessárias
  $ yarn
  # Criando cluster no banco de dados mongoDB usando o docker
  $ docker run --name linkapi -p 27017:27017 -d -t mongo

  # Iniciando o banco de dados
  $ docker start linkapi

  # Starting o backend da aplicação
  $ yarn dev:server
```

## ㊗️ Considerações

- Projeto desenvolvido by:

  - <a href="https://github.com/rafaelsanzio">
      <img src="https://img.shields.io/badge/-Rafael%20Sanzio-000000?style=flat&logo=GitHub&logoColor=#000000" />
    </a>

  - <a href="https://www.linkedin.com/in/rafael-sanzio-012778143/">
      <img src="https://img.shields.io/badge/-Rafael%20Sanzio-0077B5?style=flat&logo=LinkedIN&logoColor=#000000" />
    </a>
