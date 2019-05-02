import axios from 'axios';

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

//selectors
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
