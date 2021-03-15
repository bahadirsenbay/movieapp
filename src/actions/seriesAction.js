import axios from "axios"

export const getTV = (page=1) => dispatch => {
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR&page='+page)
    .then((res) => {
        dispatch({type: 'GET_TV_LIST', payload: res.data})
    })
}

export const singleTV = (tvID) => dispatch => {
    axios.get('https://api.themoviedb.org/3/tv/'+ tvID +'?api_key=357393f7e184680fc18a3790c07e3b01&language=tr-TR')
    .then((res) => {
        dispatch({type: 'GET_SINGLE_TV', payload: res.data})
    })
}

export const getLikedMovie = (liked) => dispatch => {
    dispatch({type: 'GET_LIKED_MOVIE', payload: liked })
}

export const deleteFav = (id) => dispatch => {
    dispatch({type: 'DELETE_LIKED_FAV', payload: id })
}