import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getCategoriesList} from "../../reducers/categories";
import {fetchCategories} from '../../actions/categories';
import {addProductAction, editProductAction, fetchProducts} from "../../actions/products";
import './styles.css';
import moment from "moment";
import ProductForm from "./ProductForm";


const ProductFormContainer = (props) => {
    const {categoriesList, onGetCategories, onAddNewProduct, onEditProduct, products, match} = props;

    useEffect(() => {
        onGetCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoriesList.length])

    const onFormAction = (productData, isEditState) => {
        if (isEditState) {
            onEditProduct(productData)
        } else {
            onAddNewProduct({
                ...productData,
                id: products.length + 1,
                createdAt: moment().format()
            })
        }

    }
    return (
        <ProductForm
            categoriesList={categoriesList}
            onFormAction={onFormAction}
            product={products.filter((product) => product.id === parseInt(match.params.id))[0]}/>
    );
}

ProductFormContainer.propTypes = {
    categoriesList: PropTypes.array.isRequired,
    onGetCategories: PropTypes.func.isRequired,
    onAddNewProduct: PropTypes.func.isRequired,
    onEditProduct: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    categoriesList: getCategoriesList(state),
    products: state.products

})

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCategories: () => {
            dispatch(fetchCategories());
            dispatch(fetchProducts());
        },
        onAddNewProduct: (product) => {
            dispatch(addProductAction(product));
        },
        onEditProduct: (product) => {
            dispatch(editProductAction(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormContainer);
