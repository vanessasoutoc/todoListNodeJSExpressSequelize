## Api NodeJS/Express/Sequelize/Sequelize-cli/Mysql

Laboratório de criação de api com:
  - [NodeJS](nodejs.org)
  - [Express](http://expressjs.com/pt-br/)
  - [Sequelize/Sequelize-cli](http://docs.sequelizejs.com/)
  - [Mysql](https://www.mysql.com/)
  - [Postman](https://www.getpostman.com/)

### Iniciando Projeto / Instalando dependências
Crie uma pasta para o projeto com nome de "todolist"
Acesse a pasta do projeto e abra o terminal
```sh
$ mkdir todolist
$ cd todolist
$ npm init
```

Preencha as informações que devem ser contidas no package.json (npm init)

Instale as dependências:

```sh
$ npm i mysql2 --save
$ npm i sequelize --save
$ npm i sequelize-cli --save
$ npm i nodemon --save
$ npm i morgan --save
$ npm i cors --save
$ npm i body-parser --save
```

### Trabalhando com Sequelize-cli
Lista de comandos Sequelize-cli
```sh
$ node_modules/.bin/sequelize help
```
Iniciando Sequelize-cli
```sh
$ node_modules/.bin/sequelize init
```
Preencha as informações do seu DB em config/config.json
Cria model "tasks" - tabela tasks no mysql.
```sh
$ node_modules/.bin/sequelize model:create --name tasks --attributes description:STRING,date:DATE,finished:BOOLEAN
```
Cria model "users" - tabela users no mysql.
```sh
$ node_modules/.bin/sequelize model:generate --name users --attributes nome:string,email:string,password:string, telephone:integer
```

Cria as tabelas no mysql 
```sh
$ node_modules/.bin/sequelize db:migrate
```

