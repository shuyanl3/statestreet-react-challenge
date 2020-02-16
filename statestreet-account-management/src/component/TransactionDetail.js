import React from 'react';
import {singleTransaction} from '../service/transaction';
import './TransactionDetail.css'

const TransactionDetail = props => {
    const transaction = singleTransaction(props.match.params.account);
    return (
        <div className="detail-page">
            <div className="header">
                <span>Transaction</span>
                <span>{props.match.params.account}</span>
            </div>
            <hr/>
            <table>
                <tbody>
                    <tr>
                        <td>Account No: </td>
                        <td>{props.match.params.account}</td>
                    </tr>
                    <tr>
                        <td>Account Name: </td>
                        <td>{transaction?.accountName}</td>
                    </tr>
                    <tr>
                        <td>Amount: </td>
                        <td>{transaction?.amount}</td>
                    </tr>
                    <tr>
                        <td>Currency: </td>
                        <td>{transaction?.currencyCode}</td>
                    </tr>
                    <tr>
                        <td>Transaction Type: </td>
                        <td>{transaction?.transactionType}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TransactionDetail;