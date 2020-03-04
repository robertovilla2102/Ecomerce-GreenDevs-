import { RECEIVE_ONE_PRODUCT, RECIVE_ALL_PRODUCTS } from '../constants'

const inicialState = {
    list: [],
    selectedProduct: {}
}

export default (state = inicialState, action) => {
    switch (action.type) {
        case RECIVE_ALL_PRODUCTS:
            return Object.assign({}, state, { list: action.products })

        case RECEIVE_ONE_PRODUCT:
            return Object.assign({}, state, { selectedProduct: action.product })

        default:
            return state
    }
}



