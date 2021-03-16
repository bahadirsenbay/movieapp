const initialState = {
    people: [],
    singlePeople: null,
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_PEOPLE_LIST':
            return {
                ...state,
                people: action.payload
            }

        case 'GET_SINGLE_PEOPLE' :
            return {
                ...state,
                singlePeople: action.payload
            }
            
        default:
            return state
    }
}

export default peopleReducer;