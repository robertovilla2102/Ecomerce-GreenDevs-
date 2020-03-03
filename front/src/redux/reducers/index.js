import { combineReducers } from 'redux'

//importando reducers
import productsReducer from './products-reducer'

export default combineReducers({
    productos: productsReducer
})