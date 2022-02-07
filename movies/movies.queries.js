import client from "../client";

export default {
    Query: {
        movies: () => client.movie.findMany(), //새로운 client에 대해 하는 작업
        movie: (_,{id}) => client.movie.findUnique({ where: { id } }),
    },
};