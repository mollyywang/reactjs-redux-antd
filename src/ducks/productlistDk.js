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
        default:
            return state;
    }
}

function handleProductsSuccess(state, payload){
    console.log(payload)
    return {
        ...state
    }
}

function handleProductsError(state, payload){
    console.error(payload)
    return {
        ...state
    }
}


export const fetchGithubData = () => {
    return async (dispatch) => {

        try{
            // const data = await getData(2)
            const res = await axios.get(apiUrl)
            dispatch(fetchSuccess(res.data))
            // console.log(res)
        } catch (e){
            dispatch(fetchError(e))
            // console.error(e)
        }
        
    };
};



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
export function getProduct(state, props) {
    return state.productlists.find(item => item.id === props.id);
}
