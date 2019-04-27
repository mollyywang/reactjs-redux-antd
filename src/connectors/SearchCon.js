import { connect } from 'react-redux'
import SearchForm from '../components/searchCom'
import { getName, changeName, getSearching, changeSearching } from '../ducks/searchDk'
import { productsGet,getAllNums,resetIndex } from '../ducks/productlistDk'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) => {
    return {
        name: getName(state, props),
        searching:getSearching(state, props),
        allNums:getAllNums(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeName: (name) => {
        dispatch(changeName(name))
        dispatch(resetIndex())//
    },
    changeSearching: (searching) => dispatch(changeSearching(searching)),
    productsGet:(name) => dispatch(productsGet(name)),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm))
