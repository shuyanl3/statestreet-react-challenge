import {combineReducers} from 'redux';
import transactionRedcer from './module/transaction'

const allReducers = combineReducers({
    transaction: transactionRedcer
})

export default allReducers