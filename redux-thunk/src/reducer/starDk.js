const initialState = {
    items: [],
    isFetching: false,
};

// reducer
export default function star(state = initialState, action = {}) {
    switch (action.type) {
        case 'STAR/ADD':
            return handleStarAdd(state, action.payload);
        case 'STAR/REMOVE':
            return handleStarRemove(state, action.payload);
        case 'STARS/FETCH_SUCCESS':
            return handleStarsSuccess(state, action.payload)
        case 'STARS/FETCH_ERROR':
            return handleStarsError(state, action.payload)
        case 'STARS/FETCH_ING':
            return handleStarsIng(state)
        default:
            return state;
    }
}

function handleStarAdd(state, payload) {
    return {
        ...state,
        items: [...state.items, payload.productDetail]
    };
}

function handleStarRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(item => item._id !== payload.productId)
    };
}

function handleStarsSuccess(state, payload) {
    return {
        ...state,
        isFetching: false,
        items: payload.starsData,
    }
}

function handleStarsError(state, payload) {
    console.error(payload)
    return {
        ...state
    }
}

function handleStarsIng(state) {
    return {
        ...state,
        isFetching: true
    }
}
