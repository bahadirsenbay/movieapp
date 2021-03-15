import axios from "axios"

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