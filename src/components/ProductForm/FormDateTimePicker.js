import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Label} from "reactstrap";
import DateTimePicker from "react-datetime-picker";
const FormDateTimePicker = ({label, value, onChange, minDate}) => {
    return(
        <FormGroup>
            <Label>{label}</Label>
            <div className="date-picker__wraper">
                <DateTimePicker
                    format="dd/MM/yyyy HH:mm"
                    value={value}
                    onChange={onChange}
                    minDate={minDate}/>
            </div>
        </FormGroup>
    )
}
FormDateTimePicker.propTypes = {
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    value:PropTypes.any,
    minDate:PropTypes.instanceOf(Date)
};
export default FormDateTimePicker;