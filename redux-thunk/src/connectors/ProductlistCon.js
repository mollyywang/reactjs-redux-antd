import { connect } from 'react-redux';
import produlistCom from '../components/productlistCom';
import { getItems, getIndex,productsGet,getCounts,getAllNums,getFetching,resetIndex } from '../action/productlistAt';
import { getName } from '../action/searchAt';
import { getIsLogin } from '../action/userAt';

const mapStateToProps = (state, props) => {
    return {
        isLogin:getIsLogin(state),
        name: getName(state),
        items: getItems(state),
        allNums: getAllNums(state),
        index: getIndex(state),
        counts:getCounts(state),
        isFetching:getFetching(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    productsGet: (name) => dispatch(productsGet(name)),
    resetIndex:()=> dispatch(resetIndex()),
})

export default connect(mapStateToProps, mapDispatchToProps)(produlistCom);
