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
export default {
    fetchMovieById,
    fetchMovieBySearch
};