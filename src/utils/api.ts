const API_KEY = 'f42ed7e7';
const URL = 'http://www.omdbapi.com';
const fetchMovieById = (id: string) => (
    fetch(`${URL}/?i=${id}&apikey=${API_KEY}`)
        .then(response => {
            const res = response.json();
            return res;
        }).catch(e => {
            return e;
        })
);
const fetchMovieBySearch = (searchKey: string, page: number) => {
    console.log(page);
    return fetch(`${URL}/?s=${searchKey}&apikey=${API_KEY}&page=${page}`)
        .then(response => {
            const res = response.json();
            return res;
        }).catch(e => {
            return e;
        });
};
const apiGateway = {
    URL: ' https://ztml5s9spi.execute-api.ap-northeast-2.amazonaws.com/posting/replies',
  };
const getReplies = async (movieId: string) => {
    const path = `${apiGateway.URL}/${movieId}`;
    const result = await fetch(path);
    if (result.status !== 200) {
        throw new Error('failed to get replies');
    }
    return result.json();
};

const postReplies = async (movieId: string, content: string, rating: number, token: string) => {
    const path = `${apiGateway.URL}/${movieId}`;
    const body = {
        content: content,
        rating: rating
    };
    const method = 'POST';
    const headers = {
        Authorization: token,
        'Content-Type': 'application/json'

    };
    const result = await fetch(path, {
        body: JSON.stringify(body),
        headers,
        method
    });
    if (result.status !== 200) {
        throw new Error('failed to post replies');
    }
    return result.json();
};
const putReplies = async (movieId: string, content: string, rating: number, token: string) => {
    const path = `${apiGateway.URL}/${movieId}`;
    const body = {
        content: content,
        rating: rating
    };
    const method = 'PUT';
    const headers = {
        Authorization: token,
        'Content-Type': 'application/json'
    };
    const result = await fetch(path, {
        body: JSON.stringify(body),
        headers,
        method
    });
    if (result.status !== 200) {
        throw new Error('failed to put replies');
    }
    return result.json();
};
export default{ 
    fetchMovieById,
    fetchMovieBySearch,
    getReplies,
    postReplies,
    putReplies
};