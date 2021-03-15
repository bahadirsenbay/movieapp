import axios from "axios"

export const getAPI = (page=1) => dispatch => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR&page='+page)
    .then((res) => {
        dispatch({type: 'GET_MOVIE_LIST', payload: res.data})
    })
}

export const getTV = (page=1) => dispatch => {
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR&page='+page)
    .then((res) => {
        dispatch({type: 'GET_TV_LIST', payload: res.data})
    })
}

export const getPeople = (page=1) => dispatch => {
    axios.get('https://api.themoviedb.org/3/person/popular?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR&page='+page)
    .then((res) => {
        dispatch({type: 'GET_PEOPLE_LIST', payload: res.data})
    })
}


export const singleMovie = (movieID) => dispatch => {
    axios.get('https://api.themoviedb.org/3/movie/'+ movieID +'?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR')
    .then((res) => {
        dispatch({type: 'GET_SINGLE_MOVIE', payload: res.data})
    })
}

export const singleTV = (tvID) => dispatch => {
    axios.get('https://api.themoviedb.org/3/tv/'+ tvID +'?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR')
    .then((res) => {
        dispatch({type: 'GET_SINGLE_TV', payload: res.data})
    })
}

export const singlePerson = (personID) => dispatch => {
    axios.get('https://api.themoviedb.org/3/person/'+personID+'?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR')
    .then((res) => {
        dispatch({type: 'GET_SINGLE_PEOPLE', payload: res.data})
    })
}

export const leadActor = (movieID) => dispatch => {
    axios.get('https://api.themoviedb.org/3/movie/'+ movieID +'/credits?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR')
    .then((res) => {
        dispatch({type: 'GET_LEAD_ACTOR', payload: res.data.cast})
    })
}

export const leadTvActor = (tvID) => dispatch =>  {
    axios.get('https://api.themoviedb.org/3/tv/'+ tvID +'/credits?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR')
    .then((res) => {
        dispatch({type: 'GET_LEAD_TV_ACTOR', payload: res.data.cast})
    })
}

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

export const getLikedMovie = (liked) => dispatch => {
    dispatch({type: 'GET_LIKED_MOVIE', payload: liked })
}

export const deleteFav = (id) => dispatch => {
    dispatch({type: 'DELETE_LIKED_FAV', payload: id })
}