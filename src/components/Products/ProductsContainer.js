import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import ProductsList from './ProductsList';
import {fetchCategories} from '../../actions/categories';
import {deleteProductAction, fetchProducts} from '../../actions/products';
import {getCategoriesById} from '../../reducers/categories';

class ProductsContainer extends Component {
    componentDidMount() {
        const {onGetCategoriesAndProducts} = this.props;
        onGetCategoriesAndProducts();
    }

    render() {
        const {products, onDeleteProduct} = this.props;

        return (
            <Fragment>
                <Header name="Products"/>
                <ProductsList products={products} onDelete={onDeleteProduct}/>
            </Fragment>
        );
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.array.isRequired,
    onGetCategoriesAndProducts:PropTypes.func.isRequired,
    onDeleteProduct:PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    const categoriesById = getCategoriesById(state);

    const products = state.products.map(product => {
        const categories = product.categories.map(id => categoriesById[id])

        return {
            ...product,
            categories
        };
    });

    return {
        products,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteProduct: (id) => {
            dispatch(deleteProductAction(id))
        },
        onGetCategoriesAndProducts: () => {
            dispatch(fetchCategories());
            dispatch(fetchProducts());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
