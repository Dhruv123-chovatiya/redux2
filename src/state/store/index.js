import { createStore } from 'redux';
import { itemReducer } from '../reducers';

const initialState = {
    items: [],
    data: []
};

const store = createStore(itemReducer, initialState);

export default store;