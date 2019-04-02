import { connect } from 'react-redux';
import SearchCom from '../components/SearchCom';
import { getName, changeName } from '../ducks/searchDk';


const mapStateToProps = (state, props) => {
    return {
        name: getName(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeName: (name) => dispatch(changeName(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCom);
