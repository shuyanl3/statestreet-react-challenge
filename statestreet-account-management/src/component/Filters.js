import React from 'react';
import CheckBox from './CheckBox';
import './Filters.css';

const Filters = props => {

    const handleChange = (label, filterCategory) => {
        let tempFilterSet = props.filterSet
        let tempSet = props.filterSet[filterCategory]
        tempSet[label] = !tempSet[label]
        tempFilterSet[filterCategory] = tempSet
        props.handleFilterChange(tempFilterSet)
    }
    
    const renderCheckbox = filterCategory => 
        Object.keys(props.filterSet[filterCategory]).map((key, idx) => {
            return (
                <CheckBox
                    key={idx}
                    label={key}
                    handleChange={() => {handleChange(key, filterCategory)}}
                />
            )
        })
        
    return (
        <div>
            <h4>FILTERS</h4>
            <div className="filter-box">
                <h3>Account Name</h3>
                {renderCheckbox("accountNameFilterSet")}
            </div>
            <div className="filter-box">
                <h3>Transaction Type</h3>
                {renderCheckbox("transactionTypeFilterSet")}  
            </div>
        </div>
    );
}

export default Filters;