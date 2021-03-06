import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import products from './products'
import slug from './slug'

const cosmicStore = combineReducers({
    products,
    slug,
    router: routerReducer
})

export default cosmicStore