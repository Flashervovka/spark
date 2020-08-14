import Enzyme , { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ProductsList from '../components/Products/ProductsList';

Enzyme.configure({ adapter: new Adapter() });
let wrapper;
const products = [
    {
        receiptDate: new Date(),
        expirationDate: '',
        brand: 'Samsung',
        rating: 1,
        name: 'S20',
        itemsInStock: 2,
        categories: [{id:1}, {id:2}, {id:3}],
        featured: false,
        id:1
    },{
        receiptDate: new Date(),
        expirationDate: '',
        brand: 'IPhone',
        rating: 9,
        name: 'X',
        itemsInStock: 2,
        categories: [{id:1}, {id:2}, {id:3}],
        featured: true,
        id:2
    }
]

describe("Poduct list rendering test", () => {

    it('List must have 2 items', () => {
        wrapper = mount(<ProductsList products={products} onDelete={()=>{}} />);
       expect(wrapper.find('.card').length).toBe(2);

    });

    it('Second list item must have "Featured: Yes"', () => {
        wrapper = mount(<ProductsList products={products} onDelete={()=>{}} />);
        const text = wrapper.find('.card').at(1).find('.list-group-item').at(2).text();
        expect(text).toBe("Featured: Yes");

    })
});

