const initialState = {
    filterMovies: [],
    filterSeries: [],
    filterPeople: [],

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

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

        default:
            return state
    }
}

export default rootReducer;