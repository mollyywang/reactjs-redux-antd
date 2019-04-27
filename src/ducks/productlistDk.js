import axios from 'axios';

const initialState = {
    items: [],// array of product
    counts:16,
    index:0,
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
        case 'INDEX/RESET':
            return handleIndexReset(state)
        default:
            return state;
    }
}

function handleProductsSuccess(state, payload){
    return {
        ...state,
        index:state.index+state.counts,
        isFetching:false,
        allNums:payload.allNums,
        items:state.items.concat(payload.productData),
    }
}

function handleIndexReset(state){
    return {
        ...state,
        index:0,
        isFetching:false,
        allNums:0,
        items:[],
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
    return async (dispatch,getState) => {
        dispatch(fetchIng())
        const state = getState().productlist
        console.log('getting product,from index:'+state.index)
        setTimeout(async ()=>{
            try{
                const res = await axios.post('http://127.0.0.1:5001/public/products/getlist', {
                    "name":name,
                    "index":state.index,
                    "counts":state.counts
                })
                dispatch(fetchSuccess(res.data.data))
            } catch (e){
                dispatch(fetchError(e))
            }
        },2000)
        
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
        payload: data
    }
}

export function fetchError(error) {
    return {
        type: 'PRODUCTS/FETCH_ERROR',
        payload: {
            error:error,
        }
    }
}

export function resetIndex(){
    return {
        type: 'INDEX/RESET'
    }
}

export function getItems(state) {
    return state.productlist.items;
}
export function getAllNums(state) {
    return state.productlist.allNums;
}
export function getCounts(state) {
    return state.productlist.counts;
}
export function getIndex(state) {
    return state.productlist.index;
}
export function getFetching(state) {
    return state.productlist.isFetching;
}
export function getProduct(state, props) {
    return state.productlist.find(item => item.id === props.id);
}
