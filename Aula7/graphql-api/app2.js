const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const graphql = require('graphql')


global_var = "Luiz"

const queryResolver = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    hello: {
      type: graphql.GraphQLString,
      resolve: () => "Hello world!"
    },
    helloWithParams: {
      type: graphql.GraphQLString,
      args: { 
        nome: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
        idade: { type: graphql.GraphQLInt }
      },
      resolve: async (parent, args, context, resolveInfo) => { 
        console.log(args)
        return "Hello " + args.nome
      } 
    }
  })
})

const mutationResolver = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    trocanome: {
      type: graphql.GraphQLString,
      args: { nome: { type: graphql.GraphQLNonNull(graphql.GraphQLString) } },
      resolve: ( parent, args, context, resolveInfo ) => {
        global_var = args.nome
        return "Hello " + global_var
      } 
    }
  })
})

const schema = new graphql.GraphQLSchema({ query: queryResolver, mutation: mutationResolver });

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);