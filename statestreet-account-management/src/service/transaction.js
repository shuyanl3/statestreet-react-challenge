export const transactionQuery = require('../data.json');

export const singleTransaction = account => {
    let data = require('../data.json').transactions.filter(
        item => item.account === account
    )
    console.log(data)
    data = data[0] ?? null
    return data;
}