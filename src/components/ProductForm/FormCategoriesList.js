import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, ListGroup, ListGroupItem, Label, Input} from "reactstrap";

const FormCategoriesList = ({label, values, onChange, selected}) => {

    const isDisabled = (id) => {
        return selected.length >= 5 ? !selected.some((category) => parseInt(category) === id) : false;
    }
    const isChecked = (id) => {
        return selected.some((category) => parseInt(category) === id)
    }

    return (
        <FormGroup>
            <Label>{label}</Label>
            <ListGroup>
                {
                    values.map((category, index) =>
                        <ListGroupItem key={`category_option__${index}`}>
                            <div className="category-list__checkbox">
                                <Input
                                    checked={isChecked(category.id)}
                                    disabled={isDisabled(category.id)}
                                    type="checkbox"
                                    value={category.id}
                                    onChange={onChange}/>{' '}
                                {category.name}
                            </div>
                        </ListGroupItem>
                    )
                }
            </ListGroup>
        </FormGroup>
    )
}
FormCategoriesList.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    values: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired,
};
export default FormCategoriesList;