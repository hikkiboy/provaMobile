# provaMobile

Um repo pra armazenar minha prova de desenvolvimento mobile.

# Funcionalidades

```
Adicionar produtos
Carrinho de produtos
"Comprar produtos" (remove tudo do carrinho basicamente)
Pesquisar produtos
Fazer login
Fazer cadastro
Navegar entre os produtos
Descrição e detalhes de cada produto
```

# Login e cadastro

O login e o cadastro funcionam usando o Firebase para autenticação do usuario.

# API

Acesse o arquivo api.js dentro da pasta services e edite a variavel "api";
```
const api = axios.create({
    baseURL: 'http://SEU-IP:3000/'
})
```

# Banco de dados
Usei a biblioteca JsonServer pra fazer um banco de dados mockado em um arquivo Json;
Para iniciar o banco de dados, que contem as informações de todos os produtos, use o comando abaixo.

```json-server --watch --host SEU-IP db.json```

quando você ver essa mensagem
```
  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://seuip/produtos
  http://seuip:3000/destaques

  Home
  http://seuip:3000
```

Significa que o servidor iniciou sem problemas;
Caso você não esteja vendo nenhum produto, verifique o arquivo "api.js" e certifique que o Ip dentro da api corresponde ao seu Ip.

# db.json
Arquivo que contem todas as informações dos produtos registrados no app.




