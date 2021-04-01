import React from 'react'
import { connect } from 'react-redux'
import './input-field.styles.css'

import { setNewItem } from '../../redux/new_item/new_item.actions'

const InputField = ({new_item, setNewItem, ...otherProps}) => (
    <div className="input-field" >
        <input value={new_item} onChange={(event) => setNewItem(event.target.value) } {...otherProps} />
    </div>
);

const mapStateToProps = state => ({
    new_item : state.newItem.new_item
})

const mapDispatchToProps = dispatch => ({
    setNewItem: item => dispatch(setNewItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField);