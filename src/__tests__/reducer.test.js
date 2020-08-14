import {products} from '../reducers/products.js'
import {ADD_PRODUCT, DELETE_PRODUCT} from '../actions/products'

const testProductData = {
    receiptDate: new Date(),
    expirationDate: '',
    brand: 'Samsung',
    rating: 1,
    name: 'S20',
    itemsInStock: 2,
    categories: [1, 2, 3],
    featured: false,
    id:1
}

describe('Products reducer test (Add and Delete actions)', () => {
    it('Add new product and products list length should equal 1', () => {
        const initialState = [];
        const action = {
            type: ADD_PRODUCT,
            product: testProductData
        }
        const newProdcuctsReducerState = products(initialState, action);
        expect(newProdcuctsReducerState.length).toBe(1)
    })

    it('Remove product from list and products list length should equal 0', () => {
        const initialState = [testProductData];
        const action = {
            type: DELETE_PRODUCT,
            id:1
        }
        const newProdcuctsReducerState = products(initialState, action);
        expect(newProdcuctsReducerState.length).toBe(0)
    })
});

