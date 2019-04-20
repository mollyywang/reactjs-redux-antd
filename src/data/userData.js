export function userLogin(values) {
    return async (dispatch, getState) => {
        const state = getState()
        dispatch(fetchIng())
        setTimeout(async ()=>{
            try{
                const res = await axios.post('http://127.0.0.1:1234/api/p/products', {
                    "indexx":state.productlists.indexx,
                    "counts":state.productlists.counts,
                    "name":name
                })
                dispatch(fetchSuccess(res.data))
            } catch (e){
                dispatch(fetchError(e))
            }
        },2000)
        
    };
};
