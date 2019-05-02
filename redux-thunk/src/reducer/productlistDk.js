
const initialState = {
    items: [],
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

function handleIndexReset(state){
    return {
        ...state,
        index:0,
        isFetching:false,
        allNums:0,
        items:[],
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
