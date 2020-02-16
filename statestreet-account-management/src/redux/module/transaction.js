import {transactionQuery} from '../../service/transaction'
/**
 * name the type as the URL is one of the typical way of naming
 */
const GETTRANS = "xxx"
const SETFILTER = "aaa"
const ERROR = "yyy"


/**
 * get transaction action creator
 */
function getTransactionActionCreator(data) {
    return {
        type: GETTRANS,
        payload: {transactions: data}
    }
}

/**
 * set filter
 */
function setFilterActionCreator(data) {
    return {
        type: SETFILTER,
        payload: {transactions: data}
    }
}

function error() {
    return {
        type: ERROR,
        payload: "Something Went Wrong. Please try again"
    }
}

/**
 * Action
 */
export function getTransaction() {
    return async(dispatch, getState) => {
        try {
            //get data
            let data = transactionQuery.transactions
            dispatch(getTransactionActionCreator(data))
        }
        catch {
            dispatch(error())
        }
    }
}

export function updateList(transactions, filterSet) {
    return async(dispatch, getState) => {
        try {
            let data = transactions.transactions
            let noFilterAccountName = true
            let noFilterTransactionType = true
            Object.keys(filterSet.accountNameFilterSet).forEach(
                key => {if (filterSet.accountNameFilterSet[key]) {
                    noFilterAccountName = false; 
                    return
                }}
            )
            Object.keys(filterSet.transactionTypeFilterSet).forEach(
                key => {if (filterSet.transactionTypeFilterSet[key]) {
                    noFilterTransactionType = false; 
                    return
                }}
            )
            data = transactions.transactions.filter(
                item => (filterSet.accountNameFilterSet[item.accountName] || noFilterAccountName)
                && (filterSet.transactionTypeFilterSet[item.transactionType] || noFilterTransactionType)
            )
            dispatch(setFilterActionCreator(data))
        }
        catch {
            dispatch(error())
        }
    }
}

/**
 * transaction reducer
 */
function transactionRedcer(state = {transactions: []}, action) {
    switch (action.type) {
        case GETTRANS:
            return action.payload
        case SETFILTER:
            return action.payload
        default:
            return state
    }
}

export default transactionRedcer