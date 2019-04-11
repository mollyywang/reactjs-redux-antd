import { connect } from 'react-redux';
import SearchCom from '../components/searchCom';
import { getName, changeName } from '../ducks/searchDk';
import { productsGet,getAllNums } from '../ducks/productlistDk';

const mapStateToProps = (state, props) => {
    return {
        name: getName(state, props),
        allNums:getAllNums(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeName: (name) => dispatch(changeName(name)),
    doSearch:(name) => dispatch(productsGet(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCom);
