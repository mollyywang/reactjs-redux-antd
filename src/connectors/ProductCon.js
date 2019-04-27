import { connect } from 'react-redux';
import ProductCom from '../components/productCom';
import { addToStar, removeFromStar, isInStar } from '../ducks/starDk';
import { getToken } from '../ducks/userDK';

const mapStateToProps = (state, props) => {
    return {
        token:getToken(state),
        isInStar: isInStar(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToStar: (id) => dispatch(addToStar(id)),
    removeFromStar: (id) => dispatch(removeFromStar(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCom);
