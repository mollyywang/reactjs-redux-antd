
// actions

const initialState = {
    name: '',
    searching: false
};

// reducer
export default function search(state = initialState, action = {}) {

    switch (action.type) {
        case 'NAME/CHANGE':
            return handleChangeName(state, action.payload)
        case 'SERCHING/CHANGE':
            return handleChangeSearching(state, action.payload)
        default:
            return state;
    }
}

function handleChangeName(state = initialState, payload) {
    return {
        ...state,
        name: payload.name
    };
}

function handleChangeSearching(state = initialState, payload) {
    return {
        ...state,
        inputVal: payload.searching
    };
}
