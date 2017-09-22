type DataType = {
    Movies: MovieBySearch[];
    totalResults: number;
    Response: string;
};
const data: DataType = {
    Movies : [
        {
            Title: 'The Lord of the Rings: The Return of the King',
            Year: 2003,
            imdbID: 'tt0167260',
            Type: 'movie',
            Poster: 
            'https://images-na.ssl-images-amazon.com/images/M/MV5B\
            YWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGde\
            QXVyNDUyOTg3Njg@._V1_SX300.jpg'
        },
        {
            Title: 'The Lion King',
            Year: 1994,
            imdbID: 'tt0110357',
            Type: 'movie',
            Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV\
            5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGde\
            QXVyNjY5NDU4NzI@._V1_SX300.jpg'
        },
        {
            Title: 'King Kong',
            Year: 2005,
            imdbID: 'tt0360717',
            Type: 'movie',
            Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjY\
            xYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
            Title: 'The Last King of Scotland',
            Year: 2006,
            imdbID: 'tt0455590',
            Type: 'movie',
            Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1NTk\
            xNjkzMl5BMl5BanBnXkFtZTgwNDgwMDAxMzE@._V1_SX300.jpg'
        },
        {
            Title: 'King Arthur',
            Year: 2004,
            imdbID: 'tt0349683',
            Type: 'movie',
            Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTk1NjI\
            0OV5BMl5BanBnXkFtZTcwNDQxOTUyMQ@@._V1_SX300.jpg'
        },
        {
            Title: 'The Scorpion King',
            Year: 2002,
            imdbID: 'tt0277296',
            Type: 'movie',
            Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjkxNTA\
            wNTQ0M15BMl5BanBnXkFtZTYwMTQwMjM3._V1_SX300.jpg'
        },
        {
            Title: 'King Arthur: Legend of the Sword',
            Year: 2017,
            imdbID: 'tt1972591',
            Type: 'movie',
            Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODY3\
            Njc5Ml5BMl5BanBnXkFtZTgwMjQ5NjM5MTI@._V1_SX300.jpg'
        },
        {
            Title: 'King Kong',
            Year: 1933,
            imdbID: 'tt0024216',
            Type: 'movie',
            Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODM0\
            MTEyMjQxOF5BMl5BanBnXkFtZTgwNzYwNTk1MjE@._V1._CR8.883331298828125\
            ,6.5333404541015625,344,488_SY132_CR2,0,89,132_AL_.jpg_V1_SX300.jpg'
        },
        {
            Title: 'The Fisher King',
            Year: 1991,
            imdbID: 'tt0101889',
            Type: 'movie',
            Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOGZmMDM\
            1NTQtMzc0Yi00ODRiLWJjYjQtMGRmYWRlOTY2ODMxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
            Title: 'The King of Queens',
            Year: 1998,
            imdbID: 'tt0165581',
            Type: 'series',
            Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3\
            MDgyNTE4OV5BMl5BanBnXkFtZTcwMjU2ODA1MQ@@._V1_SX300.jpg'
        }
    ],
    totalResults: 2657,
    Response: 'True'
};
export const page2: DataType = {
    Movies: [
      {
        Title: 'King Arthur: Legend of the Sword',
        Year: 2017,
        imdbID: 'tt1972591',
        Type: 'movie',
        Poster: 'https://images-na.ssl-images-amazon.com/images/\
        M/MV5BMjM3ODY3Njc5Ml5BMl5BanBnXkFtZTgwMjQ5NjM5MTI@._V1_SX300.jpg',
      },
      {
        Title: 'The King of Comedy',
        Year: 1982,
        imdbID: 'tt0085794',
        Type: 'movie',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BN\
        TAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
      },
      {
        Title: 'The Lion King 2: Simba\'s Pride',
        Year: 1998,
        imdbID: 'tt0120131',
        Type: 'movie',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZT\
        ZlOGU3OTAtODY5NC00NGRlLWE5NmItY2JhYzk4OGY0ZTdkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg',
      },
      {
        Title: 'In the Name of the King: A Dungeon Siege Tale',
        Year: 2007,
        imdbID: 'tt0460780',
        Type: 'movie',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4\
        ODI0ODA1Ml5BMl5BanBnXkFtZTcwNzMzMjU1MQ@@._V1_SX300.jpg',
      },
      {
        Title: 'King of the Hill',
        Year: 1997,
        imdbID: 'tt0118375',
        Type: 'series',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzI5OD\
        k5MTMtMDE4OC00ZWM5LTg0MzYtNTJmZTY3OWY3NzEzXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      },
      {
        Title: 'The Man Who Would Be King',
        Year: 1975,
        imdbID: 'tt0073341',
        Type: 'movie',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZWQzYj\
        BjZmQtZDFiOS00ZDQ1LWI4MDAtMDk1NGE1NDBhYjNhL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
      },
      {
        Title: 'Anna and the King',
        Year: 1999,
        imdbID: 'tt0166485',
        Type: 'movie',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjVlMWU0\
        NjktNDkyOC00NzViLTg3Y2EtMTg0ZmY5N2FiNzgzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      },
      {
        Title: 'The King of Kong: A Fistful of Quarters',
        Year: 2007,
        imdbID: 'tt0923752',
        Type: 'movie',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzIwMmIw\
        NzEtODhhOS00ZjFjLWI1OGMtNjBiMDFkMTgzZTY2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
      },
      {
        Title: 'A Hologram for the King',
        Year: 2016,
        imdbID: 'tt2980210',
        Type: 'movie',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2MzU1N\
        Tg4NV5BMl5BanBnXkFtZTgwNzQ5MjAzODE@._V1_SX300.jpg',
      },
      {
        Title: 'The Lion King 1 1/2',
        Year: 2004,
        imdbID: 'tt0318403',
        Type: 'movie',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZWVkY2IxNT\
        UtYzIwNi00ZmYwLWE5YzEtMDYzNzE1NGM5MTZjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg',
      },
    ],
    totalResults: 2660,
    Response: 'True',
};
export default data;