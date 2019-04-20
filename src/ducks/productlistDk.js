import axios from 'axios';


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
    return {
        ...state,
        indexx:state.indexx+state.counts,
        isFetching:false,
        allNums:payload.data.data.allNums,
        items:state.items.concat(payload.data.data.data),
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

export const productsGet = (name,indexx,counts) => {
    return async (dispatch) => {
        dispatch(fetchIng())
        setTimeout(async ()=>{
            try{
                const res = await axios.post('http://127.0.0.1:1234/api/p/products', {
                    "indexx":indexx,
                    "counts":counts,
                    "name":name
                })
                dispatch(fetchSuccess(res.data))
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
