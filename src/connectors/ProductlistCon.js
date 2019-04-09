import { connect } from 'react-redux';
import produlistCom from '../components/ProductlistCom';
import { getItems, getIndexx,productsGet,getCounts,getAllNums,getFetching } from '../ducks/productlistDk';
import { getName } from '../ducks/searchDk';


const mapStateToProps = (state, props) => {
    return {
        name: getName(state, props),
        items: getItems(state, props),
        allNums: getAllNums(state, props),
        indexx: getIndexx(state, props),
        counts:getCounts(state, props),
        isFetching:getFetching(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    productsGet: (name) => dispatch(productsGet(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(produlistCom);
