import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from "reactstrap";
import InputFormField from "./InputFormFiled";
import FormCategoriesList from "./FormCategoriesList";
import FormDateTimePicker from "./FormDateTimePicker";

const future = new Date();
future.setDate(future.getDate() + 30);
const emptyProductData = {
    receiptDate: new Date(),
    expirationDate: future,
    brand: '',
    rating: '',
    name: '',
    itemsInStock: 0,
    categories: [],
    featured: false
}

const ProductForm = ({onFormAction, categoriesList, product}) => {
    const [productData, setProductData] = useState(
        product ? product : {
          ...emptyProductData
        });

    useEffect(() => {
        const future = new Date();
        future.setDate(future.getDate() + 30);
        setProductData(product ? product : {
           ...emptyProductData
        })
    }, [product])

    const onSubmitForm = () => {
        onFormAction(productData, product)
    }

    const onChange = (filed) => (event) => {
        switch (filed) {
            case 'rating':
                const value = Math.min(Math.max(parseInt(event.target.value), 0), 10);
                setProductData({
                    ...productData,
                    rating: isNaN(value) ? '' : value,
                    featured: value > 8
                })
                break;
            case 'receiptDate':
                setProductData({
                    ...productData,
                    receiptDate: event
                })
                break;
            case 'expirationDate':
                setProductData({
                    ...productData,
                    expirationDate: event
                })
                break;
            case 'categories':
                setProductData({
                    ...productData,
                    categories: [...productData.categories, event.target.value].filter((category) =>
                        event.target.checked || parseInt(event.target.value) !== parseInt(category)
                    )
                })
                break;
            default:
                setProductData({
                    ...productData,
                    [filed]: event.target.value
                });
        }
    }

    return (
        <Form>
            <InputFormField
                value={productData.name}
                label="* Name"
                type="text" id="productName"
                name="productName"
                onChange={onChange("name")}
                maxLength={200}/>
            <InputFormField
                value={productData.brand}
                label="Brand"
                type="text" id="productBrand"
                name="productBrand"
                onChange={onChange("brand")}/>
            <InputFormField
                value={productData.rating}
                label="* Rating"
                type="number"
                id="productRate"
                name="productRate"
                onChange={onChange("rating")}/>
            <InputFormField
                value={productData.itemsInStock}
                label="Items In Stock"
                type="number" id="itemsInStock"
                name="itemsInStock"
                onChange={onChange("itemsInStock")}/>

            <FormCategoriesList
                label="Categories"
                onChange={onChange("categories")}
                values={categoriesList}
                selected={productData.categories}/>
            <FormDateTimePicker
                label="Receipt Date"
                onChange={onChange('receiptDate')}
                value={productData.receiptDate}/>
            <FormDateTimePicker
                label="Expiration Date"
                minDate={future}
                onChange={onChange('expirationDate')}
                value={productData.expirationDate}/>
            <Button onClick={onSubmitForm}
                    disabled={productData.name === '' || productData.rating === '' || productData.categories.length === 0}>
                {product ? 'Save' : 'Add'}
            </Button>
        </Form>
    )
}
ProductForm.propTypes = {
    categoriesList: PropTypes.array.isRequired,
    onFormAction: PropTypes.func.isRequired,
    product: PropTypes.object
};
export default ProductForm;