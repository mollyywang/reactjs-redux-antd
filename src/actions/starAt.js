import axios from 'axios';

export const starGet = () => {
    return async (dispatch, getState) => {
        dispatch(fetchIng())
        const state = getState().user
        console.log('getting stars')
        setTimeout(async () => {
            try {
                const res = await axios.get('http://127.0.0.1:5001/star/starlist', {
                    headers: {
                        'Authorization': 'Bearer ' + state.token,
                    }
                })
                dispatch(fetchSuccess(res.data.data))
            } catch (e) {
                dispatch(fetchError(e))
            }
        }, 2000)
    };
}

// action creators
export function fetchIng() {
    return {
        type: 'STARS/FETCH_ING',
        payload: {
        }
    }
}

export function fetchSuccess(data) {
    return {
        type: 'STARS/FETCH_SUCCESS',
        payload: data
    }
}

export function fetchError(error) {
    return {
        type: 'STARS/FETCH_ERROR',
        payload: {
            error: error,
        }
    }
}
export function addToStar(productDetail) {
    return {
        type: 'STAR/ADD',
        payload: {
            productDetail
        }
    }
}

export function removeFromStar(productId) {
    return {
        type: 'STAR/REMOVE',
        payload: {
            productId
        }
    }
}

// selectors
export function isInStar(state, props) {
    const ids = state.star.items.map(item => item._id)
    return ids.indexOf(props._id) == -1 ? false : true
}

export function getFetching(state) {
    return state.star.isFetching;
}

export function getItems(state) {
    return state.star.items;
}
