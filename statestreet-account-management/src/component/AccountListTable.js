import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AccountListTable.css'

const AccountListTable = props => {
    const renderTableContent = () => {
        return props.accountsData.transactions.map((item, index) => (
            <tr key={index} className="content">
                <td>
                    <Link to={`/${item.account}`}>
                        {item.account}
                    </Link>
                </td>
                <td>{item.accountName}</td>
                <td>{item.currencyCode}</td>
                <td>{item.amount}</td>
                <td>{item.transactionType}</td>
            </tr>
        ))
    }
    return (
        <table>
            <tbody>
                <tr>
                    <td><h4>ACCOUNT NO.</h4></td>
                    <td><h4>ACCOUNT NAME</h4></td>
                    <td><h4>CURRENCY</h4></td>
                    <td><h4>AMOUNT</h4></td>
                    <td><h4>TRASACTION TYPE</h4></td>
                </tr>
                {renderTableContent()}
            </tbody>
        </table>
    );
}

AccountListTable.propTypes = {
    accountsData: PropTypes.object
}


export default AccountListTable;