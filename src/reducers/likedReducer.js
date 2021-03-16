const initialState = {
    likedMovie: [],
}

const likedReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'GET_LIKED_MOVIE' :
            return {
                ...state,
                likedMovie: [...state.likedMovie, action.payload]
            }
        case 'DELETE_LIKED_FAV' :
            return {
                ...state,
                likedMovie: state.likedMovie.filter((res) => res.id !== action.payload)
            }


        default:
            return state
    }
}

export default likedReducer;