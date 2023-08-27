
import { combineReducers } from 'redux';
import Dialog from '../reducers/dialog/dialog'
import Shop from '../reducers/shop/shop.js'
import Cart from '../reducers/cart/cart'
import filterValue from './filterValue/filterValue';
import products from './products/products';
import quantity from './quantity/quantity';
import snackbar from './snackbar/snackbar';
const rootReducer = combineReducers({
box: Dialog,
page: Shop,
item: Cart,
count:filterValue,
product:products,
snackbar:snackbar,
quantity:quantity,
});

export default rootReducer;
