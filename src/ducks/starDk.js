

const initialState = {
    items: [] ,// array of product
    itemIds:[]
};

// reducer
export default function star(state = initialState, action = {}) {
    switch (action.type) {
        case 'Star/Add':
            return handleStarAdd(state, action.payload);
        case 'Star/Remove':
            return handleStarRemove(state, action.payload);
        case 'Star/Get':
            return handleStarGet(state, action.payload);
        default:
            return state;
    }
}

function handleStarAdd(state, payload) {
    return {
        ...state,
        items: [ ...state.items, payload.productDetail ],
        itemIds:[...state.itemIds,payload.productDetail._id]
    };
}

function handleStarRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(item => item._id !== payload.productId),
        itemIds: state.itemIds.filter(id => id !== payload.productId),
    };
}

function handleStarGet(state, payload) {////
    return {
        ...state
    };
}
// action creators
export function addToStar(productDetail) {
    return {
        type: 'Star/Add',
        payload: {
            productDetail
        }
    }
}

export function removeFromStar(productId) {
    return {
        type: 'Star/Remove',
        payload: {
            productId
        }
    }
}
export function starGet() {
    console.log('starGet');
    return {
        type: 'Star/Get',
        payload: {
        }
    }
}
// selectors
export function isInStar(state, props) {
    return state.star.itemIds.indexOf(props._id) !== -1;
}

export function getItems(state) {
    return state.star.items;
}
