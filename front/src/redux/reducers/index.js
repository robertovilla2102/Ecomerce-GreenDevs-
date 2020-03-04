import { combineReducers } from 'redux'

//importando reducers
import productsReducer from './products-reducer'
import registerReducer from './register-reducer'

export default combineReducers({
    productos: productsReducer,
    register: registerReducer
})

