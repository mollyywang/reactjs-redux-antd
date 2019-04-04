import { connect } from 'react-redux';
import produlistCom from '../components/ProductlistCom';
import { getItems, getIndexx,fetchGithubData,getCounts,getAllNums } from '../ducks/productlistDk';
import { getName } from '../ducks/searchDk';


const mapStateToProps = (state, props) => {
    return {
        name: getName(state, props),
        items: getItems(state, props),
        allNums: getAllNums(state, props),
        indexx: getIndexx(state, props),
        counts:getCounts(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    productsGet: (name) => dispatch(fetchGithubData())
})

export default connect(mapStateToProps, mapDispatchToProps)(produlistCom);
