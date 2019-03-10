import { storeProducts, detailProduct } from '../../data'


const initialState = {
    products: storeProducts
}
const reducer = (state= initialState, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
        return {...state }

        default:
            return state;;
    }

}

export default reducer;