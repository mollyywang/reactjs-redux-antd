
// actions

const initialState = {
    name: '' 
};

// reducer
export default function search(state = initialState, action = {}) {

    switch (action.type) {
        case  'CHANGE/NAME':
            return handleChangeName(state, action.payload)
        default:
            return state;
    }
}

function handleChangeName(state = initialState, payload) {
    return {
        ...state,
        name:payload.name
    };
}

// action creators
export function changeName(name) {
    return {
        type:  'CHANGE/NAME',
        payload: {
            name
        }
    }
}

// selectors
export function getName(state, props) {
    return state.search.name;
}


