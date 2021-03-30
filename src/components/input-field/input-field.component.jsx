import React from 'react'

import './input-field.styles.css'

const InputField = ({ ...otherProps}) => (
    <div className="input-field" >
        <input {...otherProps} />
    </div>
);

export default InputField;