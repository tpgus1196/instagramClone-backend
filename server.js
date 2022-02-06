import {ApolloServer, gql} from "apollo-server";
import {ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import {PrismaClient} from '@prisma/client';
// "type": "module"
//package.json에서 제거함


// import pkg from '@prisma/client';
// const {PrismaClient} = pkg;

const client = new PrismaClient(); 

const typeDefs = gql`
    type Movie{
        id: Int!
        title: String!
        year: Int!
        genre : String
        createdAt : String!
        updatedAt : String!

    }
    type Query{
        movies: [Movie]
        movie(id:Int!): Movie
    }
    type Mutation{
        createMovie(title:String!, year:Int!, genre: String):Movie
        deleteMovie(id:Int!):Movie
        updateMovie(id:Int! year:Int!):Movie
    }
`;//mutation에 year, genre title 추가하기
    //createMovie의 반환 값을 boolean에서 Movie로 수정
    //create가 반환하는 값이 Movie임
    //deleteMovie도 마찬가지

    //id로 새로운 영화 찾기(query movie(id:Int!)로 수정)

const resolvers = {
    Query: {
        movies: () => client.movie.findMany(), //새로운 client에 대해 하는 작업
        movie: (_,{id}) => client.movie.findUnique({where:{id}}),
    },
    Mutation: {
        createMovie: (_, {title, year, genre}) => 
        client.movie.create({ //title:title 할 필요 없음
            data: {
              title,
              year,
              genre,
            },
        }),
        deleteMovie: (_, {id}) => client.movie.delete({where:{id}}),
        updateMovie: (_, {id, year}) => 
            client.movie.update({where: {id}, data:{year}})
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], //있어야 playground 작동 가능
    });


server.listen().then(()=> console.log("Server is running on http://localhost:4000/"))