import client from "../client";

export default {
    Mutation: {
        createMovie: (_, {title, year, genre}) => 
        client.movie.create({ //title:title 할 필요 없음
            data: {
              title,
              year,
              genre,
            },
        }),
        deleteMovie: (_, {id}) => 
            client.movie.delete({where:{id}}),
        updateMovie: (_, {id, year}) => 
            client.movie.update({where: {id}, data:{year}}), //where:{id:id} 와 같음(단축문법)
    },
    
};