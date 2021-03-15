export const getLikedMovie = (liked) => dispatch => {
    dispatch({type: 'GET_LIKED_MOVIE', payload: liked })
}

export const deleteFav = (id) => dispatch => {
    dispatch({type: 'DELETE_LIKED_FAV', payload: id })
}