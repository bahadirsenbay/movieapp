import axios from "axios"

export const getSearchMovie = (queryData) => dispatch => {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR&query='+queryData+'&page=1')
    .then((res) => {
        dispatch({type: 'GET_SEARCH_MOVIE', payload: res.data})
    })
}

export const getSearchTV = (queryData) => dispatch => {
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR&query='+queryData+'&page=1')
    .then((res) => {
        dispatch({type: 'GET_SEARCH_TV', payload: res.data})
    })
}

export const getSearchPeople = (queryData) => dispatch => {
    axios.get('https://api.themoviedb.org/3/search/person?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR&query='+queryData+'&page=1')
    .then((res) => {
        dispatch({type: 'GET_SEARCH_PEOPLE', payload: res.data})
    })
}