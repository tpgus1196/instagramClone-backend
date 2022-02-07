import { gql } from "apollo-server";

//error: Must provide typeDefs at makeExecutableSchema 
    //const typeDefs = gql~ => export default gql~ 
export default gql`
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

