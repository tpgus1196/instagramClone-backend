import {ApolloServer} from "apollo-server";
import {ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
// import { typeDefs, resolvers } from "./schema"; 
import schema from "./schema";

//server를 만들고 작동시키는 일만 한다
const server = new ApolloServer({
    // typeDefs,
    // resolvers,
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], //있어야 playground 작동 가능
});


server.listen().then(()=> console.log("Server is running on http://localhost:4000/"))