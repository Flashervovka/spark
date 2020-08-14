import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Input, Label} from "reactstrap";
const InputFormField = ({id, name, label, type, value, onChange, maxLength}) => {

    return(
        <FormGroup>
            <Label for={id}>{label}</Label>
            <Input type={type} name={name}id={id} value={value} onChange={onChange} maxLength={maxLength}/>
        </FormGroup>
    )
}
InputFormField.propTypes = {
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    value:PropTypes.any,
    maxLength:PropTypes.number,
};
export default InputFormField;