const initialState = {
    series: [],
    singleTV: null,
    leadTvActor: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_TV_LIST':
            return {
                ...state,
                series: action.payload
            }


        case 'GET_SINGLE_TV' :
            return {
                ...state,
                singleTV: action.payload
            }

        case 'GET_LEAD_TV_ACTOR' :
            return {
                ...state,
                leadTvActor: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;