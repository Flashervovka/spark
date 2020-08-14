import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";
import { createHashHistory } from 'history';

const Header = ({name}) => {
    const history = createHashHistory ();

    return (
        <Fragment>
            <h2 className="h3">{name}</h2>
            <Button onClick={()=>{history.push('/create-product')}}>Add new product</Button>
            <hr/>
        </Fragment>
    );
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Header;
