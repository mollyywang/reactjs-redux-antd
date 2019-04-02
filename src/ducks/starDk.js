

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
        itemIds:[...state.itemIds,payload.productDetail.id]
    };
}

function handleStarRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(item => item.id !== payload.productId),
        itemIds: state.itemIds.filter(id => id !== payload.productId),
    };
}

function handleStarGet(state, payload) {
    console.log('eee');
    //去服务器拿...todo ????
    return {
        ...state,
        items: [
            {id: 99, name: 'name99',price:236,image: 'images/04.jpg',},
            {id: 2, name: 'name2',price:189,image: 'images/02.jpg',},

        ],
        itemIds: [99,2]
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
    return state.star.itemIds.indexOf(props.id) !== -1;
}

export function getItems(state) {
    return state.star.items;
}
