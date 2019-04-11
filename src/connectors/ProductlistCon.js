import { connect } from 'react-redux';
import produlistCom from '../components/productlistCom';
import { getItems, getIndexx,productsGet,getCounts,getAllNums,getFetching } from '../ducks/productlistDk';
import { getName } from '../ducks/searchDk';


const mapStateToProps = (state, props) => {
    return {
        name: getName(state),
        items: getItems(state),
        allNums: getAllNums(state),
        indexx: getIndexx(state),
        counts:getCounts(state),
        isFetching:getFetching(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    productsGet: (name) => dispatch(productsGet(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(produlistCom);
