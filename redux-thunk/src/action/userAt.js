import axios from 'axios';

export const userDoLogin = (username, password) => {
    return async (dispatch, getState) => {
        dispatch(loginIng())
        setTimeout(async () => {
            try {
                const res = await axios.post('http://127.0.0.1:5001/public/user/login', {
                    "username": username,
                    "password": password,
                })
                console.log(res.data);
                if (res.data.code == 0) {
                    return dispatch(loginSuccess(res.data))
                } else {
                    return dispatch(loginError(res.data))
                }
            } catch (e) {
                dispatch(loginError(e))
            }
        }, 2000)
    };
};

// action creatorsexport 
export function logout() {
    return {
        type: 'USER/LOGOUT',
        payload: {
        }
    }
}

export function loginIng() {
    return {
        type: 'LOGIN/ING',
        payload: {
        }
    }
}

export function loginSuccess(data) {
    return {
        type: 'LOGIN/SUCCESS',
        payload: data
    }
}

export function loginError(error) {
    return {
        type: 'LOGIN/ERROR',
        payload: {
            error: error,
        }
    }
}

export function changeName(username) {
    return {
        type: 'CHANGE/NAME',
        payload: {
            username
        }
    }
}

// selectors
export function getName(state, props) {
    return state.user.username;
}
export function getToken(state, props) {
    return state.user.token;
}
export function getLogining(state) {
    return state.user.logining;
}
export function getIsLogin(state) {
    return state.user.username && state.user.token ? true : false
}