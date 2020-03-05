import { combineReducers } from 'redux'

//importando reducers
import productsReducer from './products-reducer'
import registerReducer from './register-reducer'
import loginReducer from './login-reducer'

export default combineReducers({
    productos: productsReducer,
    register: registerReducer,
    login: loginReducer
})

