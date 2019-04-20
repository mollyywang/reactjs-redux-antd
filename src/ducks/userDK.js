
// actions

const initialState = {
    name: '' ,
    getLogining:false
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
        name:payload.name
    };
}
function handleLoginSuccess(state, payload){
    console.log('登陆成功')
    console.log('payload')
    return {
        ...state,
        getLogining:false,
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
        isLoginIng:true
    }
}

export const userDoLogin = (name,password) => {
    console.log(name);
    console.log(password);///
    // return async (dispatch, getState) => {
    //     const state = getState()
    //     dispatch(loginIng())
    //     setTimeout(async ()=>{
    //         try{
    //             const res = await axios.post('', {
    //                 "name":name,
    //                 "password":password,
    //             })
    //             dispatch(loginSuccess(res.data))
    //         } catch (e){
    //             dispatch(loginError(e))
    //         }
    //     },2000)
    // };
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
        payload: {
            data:data,
        }
    }
}

// action creators
export function fetchError(error) {
    return {
        type: 'LOGIN/ERROR',
        payload: {
            error:error,
        }
    }
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
    return state.user.name;
}

export function getLogining(state) {
    return state.user.getLogining;
}

