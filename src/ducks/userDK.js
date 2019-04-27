import axios from 'axios';

// actions

const initialState = {
    username: '' ,
    token: '',
    logining:false
};

// reducer
export default function user(state = initialState, action = {}) {
    switch (action.type) {
        case  'CHANGE/NAME':
            return handleChangeName(state, action.payload)
        case 'LOGIN/SUCCESS':
            return handleLoginSuccess(state, action.payload)
        case 'LOGIN/ERROR':
            return handleLoginError(state, action.payload)
        case 'LOGIN/ING':
            return handleLoginIng(state)
        default:
            return state;
    }
}

function handleChangeName(state = initialState, payload) {
    return {
        ...state,
        username:payload.username
    };
}
function handleLoginSuccess(state, payload){
    return {
        ...state,
        username:payload.data.username,
        token:payload.data.token,
        logining:false,
    }
}

function handleLoginError(state, payload){
    console.error(payload)
    return {
        ...state
    }
}

function handleLoginIng(state){
    return {
        ...state,
        logining:true
    }
}

export const userDoLogin = (username,password) => {
    return async (dispatch, getState) => {
        dispatch(loginIng())
        setTimeout(async ()=>{
            try{
                const res = await axios.post('http://127.0.0.1:5001/public/user/login', {
                    "username":username,
                    "password":password,
                })
                console.log(res.data);
                if(res.data.code==0){
                    return dispatch(loginSuccess(res.data))
                }else{
                    return dispatch(loginError(res.data))
                }
            }catch(e){
                dispatch(loginError(e))
            }
        },2000)
    };
};


// action creators
export function loginIng() {
    return {
        type: 'LOGIN/ING',
        payload: {
        }
    }
}


// action creators
export function loginSuccess(data) {
    return {
        type: 'LOGIN/SUCCESS',
        payload: data
    }
}

// action creators
export function loginError(error) {
    return {
        type: 'LOGIN/ERROR',
        payload: {
            error:error,
        }
    }
}



// action creators
export function changeName(username) {
    return {
        type:  'CHANGE/NAME',
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

