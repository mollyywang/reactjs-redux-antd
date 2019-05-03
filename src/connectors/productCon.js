import { connect } from 'react-redux';
import ProductCom from '../components/productCom';
import { addToStar, removeFromStar, isInStar } from '../actions/starAt';
import { getIsLogin } from '../actions/userAt';
import { withRouter } from 'react-router';

const mapStateToProps = (state, props) => {
    return {
        isLogin: getIsLogin(state),
        isInStar: isInStar(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToStar: (id) => dispatch(addToStar(id)),
    removeFromStar: (id) => dispatch(removeFromStar(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductCom))
