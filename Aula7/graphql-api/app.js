const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema, graphql } = require('graphql')

//modo static - usamos os metodos/ funcoes dos modulos graphql para criar o schema e o resolvers sem a necessidade de instaciar a classe
//mais rapido, mas com menor customizacao

//buildSchema eh responsavel pelo tipo requisicao e o retorno da mesma
const schemaTeste = buildSchema(
  `type Query {
    hello: String
    helloWithParams(nome: String): String
  }`
);

//aqui estamos definindo o a solucoes das queries/ requisiçoes do graphql
const resolvers = {
  hello: () => "Hello somebody",
  helloWithParams: ({ nome }) => "Hello " + nome
};

// Exemplo de como testar lolcamente, para mais detalhes do graphql buscar na documentaçao do mundo ou online https://graphql.org/
// graphql({ schema: schemaTeste, source: "{ hello }", rootValue: resolvers }).then((response) => console.log(response));

const app = express()

//precisamo se atentar aos parametros padroes do graphqlHTTP, esse modulo (express-graphql) traduçao a requisicao para o padrao graphql
app.use('/graphql', graphqlHTTP(
  {
    schema: schemaTeste,
    rootValue: resolvers,
    graphiql: true
  }
))

app.listen(3030, () => console.log('Server is online'))
