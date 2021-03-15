const initialState = {
    movies: [],
    series: [],
    people: [],
    likedMovie: [],
    filterMovies: [],
    filterSeries: [],
    filterPeople: [],
    singleMovie: null,
    singleTV: null,
    singlePeople: null,
    leadActor: null,
    leadTvActor: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIE_LIST':
            return {
                ...state,
                movies: action.payload
            }

        case 'GET_TV_LIST':
            return {
                ...state,
                series: action.payload
            }

        case 'GET_PEOPLE_LIST':
            return {
                ...state,
                people: action.payload
            }

        case 'GET_SINGLE_MOVIE' :
            return {
                ...state,
                singleMovie: action.payload
            }

        case 'GET_SINGLE_TV' :
            return {
                ...state,
                singleTV: action.payload
            }

        case 'GET_SINGLE_PEOPLE' :
            return {
                ...state,
                singlePeople: action.payload
            }

        case 'GET_LEAD_ACTOR' :
            return {
                ...state,
                leadActor: action.payload
            }
        case 'GET_LEAD_TV_ACTOR' :
            return {
                ...state,
                leadTvActor: action.payload
            }
        case 'GET_SEARCH_MOVIE' :
            return {
                ...state,
                filterMovies: action.payload
            }
        case 'GET_SEARCH_TV' :
            return {
                ...state,
                filterSeries: action.payload
            }
        case 'GET_SEARCH_PEOPLE':
            return {
                ...state,
                filterPeople: action.payload
            }
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

export default rootReducer;