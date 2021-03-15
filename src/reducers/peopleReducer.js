const initialState = {
    people: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_PEOPLE_LIST':
            return {
                ...state,
                people: action.payload
            }
            
        default:
            return state
    }
}

export default rootReducer;