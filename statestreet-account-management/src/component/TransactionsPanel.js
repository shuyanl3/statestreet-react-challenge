import React, { Fragment } from 'react';
import Filters from './Filters';
import AccountListTable from './AccountListTable';
import './TransactionsPanel.css'

const TransactionsPanel = props => (
    <Fragment>
        <div className="title">
            <h1>My Transactions</h1>
            <hr/>
        </div>
        <div className="grid-container">
            <div className="grid-item">
                <Filters
                    filterSet={props.filterSet}
                    handleFilterChange={props.handleFilterChange} 
                />
            </div>
            <div className="grid-item">
                <AccountListTable accountsData={props.accountsData}/>
            </div>
        </div>
    </Fragment>
);

export default TransactionsPanel;