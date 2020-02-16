import React, {Component} from 'react';
import * as transactionAction from "../redux/module/transaction"
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import TransactionsPanel from '../component/TransactionsPanel';

class AccountList extends Component {

    allTransactions = {}

    filterSet = {
        "accountNameFilterSet": {
            "Savings Account": false,
            "Checking Account": false,
            "Auto Loan Account": false,
            "Credit Card Account": false,
            "Home Loan Account": false,
            "Investment Account": false,
            "Personal Loan Account": false,
            "Money Market Account": false,
        },
        "transactionTypeFilterSet": {
            "deposit": false,
            "withdrawal": false,
            "payment": false,
            "invoice": false,
        }
    }

    componentDidMount() {
        this.props.getTransaction()
        .then(() => {this.allTransactions = this.props.transaction})
    }

    handleFilterChange = filter => {
        const {updateList} = this.props
        this.filterSet = filter
        updateList(this.allTransactions, this.filterSet)
    }
  
    render() {
        return (
            <TransactionsPanel
                filterSet={this.filterSet}
                handleFilterChange={this.handleFilterChange} 
                accountsData={this.props.transaction}
            />
        )
    }
  }

const mapStateToProps = (state) => {
    return {
      transaction: state.transaction,
    };
  }
  
  const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
      ...transactionAction
    }, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
  