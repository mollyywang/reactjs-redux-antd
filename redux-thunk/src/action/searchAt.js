
// action creators
export function changeName(name) {
    return {
        type:  'NAME/CHANGE',
        payload: {
            name
        }
    }
}

export function changeSearching(searching) {
    return {
        type:  'SERCHING/CHANGE',
        payload: {
            searching
        }
    }
}

// selectors
export function getName(state, props) {
    return state.search.name;
}
export function getSearching(state, props) {
    return state.search.searching;
}

