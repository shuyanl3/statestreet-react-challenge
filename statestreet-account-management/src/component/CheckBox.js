import React from 'react';
import './CheckBox.css'

const CheckBox = props => {
    return (
        <div className="checkbox">
            <label>
                <input type="checkbox" onChange={props.handleChange}/>
                <span>{props.label}</span>
            </label>
        </div>
    );
};

export default CheckBox;