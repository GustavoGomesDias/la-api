# Uma APi aí

Para usar técnicas mais avançadas, eu criei essa API.

## 📕 Sumário
1. [O que eu aprendi de novo nesse projeto](https://github.com/GustavoGomesDias/la-api#1--o-que-eu-aprendi-de-novo-nesse-projeto)
2. [Tecnologias usadas](https://github.com/GustavoGomesDias/la-api#2--tecnologias-usadas)
3. [Para rodar](https://github.com/GustavoGomesDias/la-api#3--para-rodar-o-projeto)
4. [Documentação](https://github.com/GustavoGomesDias/la-api/tree/main#4--documenta%C3%A7%C3%A3o)

## 1. 🎓 O que eu aprendi de novo nesse projeto
* Aplicar técnicas do ES6+ (configurando o nodemon junto ao sucrase);
* Desenvolvimento com foco no POO (sério, isso aqui me chamou muita atenção, não sabia que dava pra fazer dessa forma).
* Apesar de ter usado o Sequelize e operar migrations antes, esse projeto me relembrou/ensinou muita coisa;
* Aprendi a receber arquivos estáticos (sendo o foco desse projeto em imagens);
* A mexer com .env (apesar de ter uma noção antes, esse projeto me ajudou a entender mais coisas);
* Uma outra forma de criar login na aplicação, salvando informações em "variáveis" da request;

## 2. 💻 Tecnologias usadas
* Node;
* MySQL;
* Express;
* Sequelize;
  * mysql2;
  * Sequelize cli.
* Eslint (Config da Airbnb);
* JWT;
* Bcrypt;
* Multer (tratamento de arquivos estáticos);
* Dotenv;
* Nodemon.
  * Sucrase.


## 3. 🎉 Para rodar o projeto
1. Instale todas es tec's usadas junto do Node JS:

    ```
    npm install
    ```
2. Rode o aplicativo

    ```
    npm run dev
    ```
3. Você precisará de uma ferramente de teste de requisições como o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/)
4. Digite localhost:3001 e siga a minha tentativa de documentação para usar a api

## 4. 📖 Documentação
### Users
#### GET
##### /users
Descrição   | Valor
--------- | ------
Autenticação | Requerido
Parâmetros | Não requerido
Status code | 200 (OK)

##### /users/id
Descrição   | Valor
--------- | ------
Autenticação | Requerido
Parâmetros | Id do usuário
Status code | 200 (OK)

#### POST
##### /users
Descrição   | Valor
--------- | ------
Autenticação | Não Requerido
Parâmetros | Não Requerido
Status code | 200 (OK) ou 400 (Bad Request)

#### PUT
##### /users
Descrição   | Valor
--------- | ------
Autenticação | Requerido
Parâmetros | Não Requerido
Status code | 200 (OK) ou 400 (Bad Request)

#### DELETE
##### /users
Descrição   | Valor
--------- | ------
Autenticação | Requerido
Parâmetros | Não Requerido
Status code | 200 (OK) ou 400 (Bad Request)

---

### Alunos
#### GET
##### /alunos
Descrição   | Valor
--------- | ------
Autenticação | Não Requerido
Parâmetros | Não requerido
Status code | 200 (OK)

##### /alunos/id
Descrição   | Valor
--------- | ------
Autenticação | Requerido
Parâmetros | Id do aluno
Status code | 200 (OK) ou 400 (Bad Request)

#### POST
##### /alunos
Descrição   | Valor
--------- | ------
Autenticação | Não Requerido
Parâmetros | Não Requerido
Status code | 200 (OK) ou 400 (Bad Request)

#### PUT
##### /users
Descrição   | Valor
--------- | ------
Autenticação | Requerido
Parâmetros | Id do Aluno
Status code | 200 (OK) ou 400 (Bad Request)

#### DELETE
##### /alunos
Descrição   | Valor
--------- | ------
Autenticação | Requerido
Parâmetros | Id do Aluno
Status code | 200 (OK) ou 400 (Bad Request

---

### Image
#### POST
##### /images
Descrição   | Valor
--------- | ------
Autenticação | Não Requerido
Parâmetros | Não Requerido
Status code | 200 (OK) ou 400 (Bad Request)

---

### Token (login)
#### POST
##### /tokens
Descrição   | Valor
--------- | ------
Autenticação | Não Requerido
Parâmetros | Não Requerido
Status code | 200 (OK) ou 400 (Bad Request)

## Autor
<table>
  <tr>
    <td align="center"><a href="https://github.com/GustavoGomesDias"><img src="https://github.com/GustavoGomesDias.png" width="100px;" alt="Profile"/><br /><sub><b>Gustavo</b></sub></a><br /><a href="https://github.com/GustavoGomesDias" title="Code">😎</a></td>
  <tr>
</table>
