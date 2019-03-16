
const initialState ={
    allProducts: [],
    mensProducts: [],
    womensProducts: [],
    kidsProducts: [],
}

const reducer = (state= initialState, action) => {

    switch (action.type) {
        case 'GET_ALL':
        return {...state, allProducts: action.payload }

        case 'GET_MENS':
        return {...state, mensProducts: action.payload }
        
        case 'GET_WOMENS':
        return {...state, womensProducts: action.payload }
        
        case 'GET_KIDS':
        return {...state, kidsProducts: action.payload }
        default:
            return state;;
    }

}

export default reducer;