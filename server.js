import {ApolloServer, gql} from "apollo-server";

import {ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
//이 코드 추가해줘야 sandbox로 안넘어가고 진행 가능


const typeDefs = gql`
    type Query{
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => "hiiiiii",
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], //있어야 playground 작동 가능
    });


server.listen().then(()=> console.log("Server is running on http://localhost:4000/"))