import {getData} from '../data/productsAj';
import axios from 'axios';
const apiUrl = 'https://api.github.com/users/KrunalLathiya';


const initialState = {
    items: [],// array of product
    counts:16,
    indexx:0,
    allNums:0,
    isFetching: false,
};

// reducer
export default function productlists(state = initialState,action={}) {
    switch (action.type) {
        case 'PRODUCTS/FETCH_SUCCESS':
            return handleProductsSuccess(state, action.payload)
        case 'PRODUCTS/FETCH_ERROR':
            return handleProductsError(state, action.payload)
        case 'PRODUCTS/FETCH_ING':
            return handleProductsIng(state)
        default:
            return state;
    }
}

function handleProductsSuccess(state, payload){
    console.log(payload)
    return {
        ...state,
        isFetching:false
    }
}

function handleProductsError(state, payload){
    console.error(payload)
    return {
        ...state
    }
}

function handleProductsIng(state){
    return {
        ...state,
        isFetching:true
    }
}

export const productsGet = (name) => {
    return async (dispatch) => {
        dispatch(fetchIng())
        try{
            const res = await axios.get(apiUrl)//改成post？？
            dispatch(fetchSuccess(res.data))
        } catch (e){
            dispatch(fetchError(e))
        }
    };
};


// action creators
export function fetchIng() {
    return {
        type: 'PRODUCTS/FETCH_ING',
        payload: {
        }
    }
}


// action creators
export function fetchSuccess(data) {
    return {
        type: 'PRODUCTS/FETCH_SUCCESS',
        payload: {
            data:data,
        }
    }
}

// action creators
export function fetchError(error) {
    return {
        type: 'PRODUCTS/FETCH_ERROR',
        payload: {
            error:error,
        }
    }
}


export function getItems(state) {
    return state.productlists.items;
}
export function getAllNums(state) {
    return state.productlists.allNums;
}
export function getCounts(state) {
    return state.productlists.counts;
}
export function getIndexx(state) {
    return state.productlists.indexx;
}
export function getFetching(state) {
    return state.productlists.isFetching;
}
export function getProduct(state, props) {
    return state.productlists.find(item => item.id === props.id);
}
