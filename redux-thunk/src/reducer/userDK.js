
const initialState = {
    username: '' ,
    token: '',
    logining:false
};

// reducer
export default function user(state = initialState, action = {}) {
    switch (action.type) {
        case  'USER/LOGOUT':
            return handleLogout(state, action.payload)
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

function handleLogout(state, payload){
    return {
        ...state,
        username:'',
        token:''
    };
}
function handleChangeName(state, payload) {
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
