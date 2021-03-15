const initialState = {
    movies: [],
    likedMovie: [],
    singleMovie: null,
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIE_LIST':
            return {
                ...state,
                movies: action.payload
            }
        case 'GET_SINGLE_MOVIE' :
            return {
                ...state,
                singleMovie: action.payload
            }
        case 'GET_LIKED_MOVIE' :
            return {
                ...state,
                likedMovie: [...state.likedMovie, action.payload]
            }

        default:
            return state
    }
}

export default movieReducer;