# 🚀 Docker Nginx/Node/MySQL Challenge

Este projeto foi desenvolvido como parte do desafio Docker no curso **Full Cycle 3.0**.

## 📝 Sobre o Desafio

O objetivo deste desafio é colocar em prática os conceitos de utilização do **Nginx como proxy reverso**. O fluxo principal do projeto é o seguinte:

1. O usuário acessa o **Nginx**.
2. O Nginx atua como um proxy reverso, redirecionando a requisição para a aplicação Node.js.
3. A aplicação Node.js:
   - Adiciona um registro no banco de dados **MySQL**, cadastrando um nome na tabela `people`.
   - Retorna uma resposta com:
     - A mensagem: `<h1>Full Cycle Rocks!</h1>`
     - Uma lista de nomes cadastrados no banco de dados.

## 📦 Como Executar

Para executar o projeto em sua máquina, utilize o seguinte comando:

```bash
docker-compose up -d --build
```

Após a execução, você poderá acessar o serviço no endereço http://localhost:8080 para ver a mensagem e a lista de nomes.


## 🛠️ Tecnologias Utilizadas

- **Nginx**: Proxy reverso para gerenciamento de requisições.
- **Node.js**: Backend para registrar e exibir dados.
- **MySQL**: Banco de dados para armazenar os registros.
  

## 🌟 Funcionalidades

- Redirecionamento de requisições via Nginx.
- Integração da aplicação Node.js com o banco de dados MySQL.
- Cadastro automático de nomes na tabela `people` do MySQL.
- Exibição da mensagem e da lista de nomes cadastrados.

## 🧑‍💻 Como Funciona

1. Ao acessar o endereço do serviço (via Nginx), a aplicação Node.js é acionada.
2. A aplicação adiciona um nome ao banco de dados MySQL.
3. O retorno exibido no navegador contém:
   - A mensagem principal: `<h1>Full Cycle Rocks!</h1>`
   - A lista de nomes cadastrados no banco de dados.
