import { connect } from 'react-redux';
import ProductCom from '../components/ProductCom';
import { addToStar, removeFromStar, isInStar } from '../ducks/starDk';

const mapStateToProps = (state, props) => {
    return {
        isInStar: isInStar(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToStar: (id) => dispatch(addToStar(id)),
    removeFromStar: (id) => dispatch(removeFromStar(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCom);
