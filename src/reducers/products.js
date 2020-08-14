import * as productsActions from '../actions/products';

export function products(state = [], action) {
    switch (action.type) {
        case productsActions.RECEIVE_PRODUCTS:
            return [
                ...state,
                ...action.products.filter((product) => !state.some((prod) => prod.id === product.id)),
            ];
        case productsActions.ADD_PRODUCT:
            return [
                ...state,
                action.product
            ];
        case productsActions.EDIT_PRODUCT:
            return state.map((product) => {
                if (product.id === action.product.id) {
                    return action.product
                }
                return product
            });
        case productsActions.DELETE_PRODUCT:
            return state.filter((product) => product.id !== action.id);
        default:
            return state;
    }
}
