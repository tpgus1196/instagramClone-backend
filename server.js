import {ApolloServer, gql} from "apollo-server";
//import { PrismaClient } from "@prisma/client";
import pkg from '@prisma/client';

import {ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
//이 코드 추가해줘야 sandbox로 안넘어가고 진행 가능

//클라언트 생성
const {PrismaClient} = pkg;
const client = new PrismaClient(); 
//@prisma/client에서 import되는 것
//설명문에서 movies를 활용한 예시 보여줌
//이 클라이언트는 우리 스키마에 맞춤형으로 생성된 것

//type definition 외 graphQL 파일을 사용할 수도 있다
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
        movie: Movie
    }
    type Mutation{
        createMovie(title:String!):Boolean
        deleteMovie(title:String!):Boolean
    }
`;


const resolvers = {
    Query: {
        movies: () => client.movie.findMany(), //우리 데이터베이스로 가서 모든 영화들 검색
        movie: () => ({"title": "Hello", year: 2022}),
    },
    Mutation: {
        //괄호 내 root, {title}, context, info 가진다 
        //root 대신 _ 사용 가능(아무거나 다 가능): _쓰는 이유는 첫 번째 인자 무시하기 위해
        //두번째인 인자가 mutation이나 query에게 주는 argument
        //createMovie: (_, {title}) 이렇게 적는 대신 인자들을 열어 원하는 것들 꺼낼 수 있다.
        //=구조 분해 할당(destructuring)
        createMovie: (_, {title, year, genre}) => {
            console.log({title});
            return true;
        }, 
        deleteMovie: (_, {title}) => {
            console.log({title});
            return true;
        },
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], //있어야 playground 작동 가능
    });


server.listen().then(()=> console.log("Server is running on http://localhost:4000/"))