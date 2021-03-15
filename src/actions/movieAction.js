import axios from "axios"

export const getAPI = (page=1) => dispatch => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR&page='+page)
    .then((res) => {
        dispatch({type: 'GET_MOVIE_LIST', payload: res.data})
    })
}

export const singleMovie = (movieID) => dispatch => {
    axios.get('https://api.themoviedb.org/3/movie/'+ movieID +'?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR')
    .then((res) => {
        dispatch({type: 'GET_SINGLE_MOVIE', payload: res.data})
    })
}
