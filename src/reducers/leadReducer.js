const initialState = {
    leadActor: null,
    leadTvActor: null
}

const leadReducer = (state = initialState, action) => {
    switch (action.type) {

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


        default:
            return state
    }
}

export default leadReducer;