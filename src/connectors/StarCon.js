import { connect } from 'react-redux';
import StarCom from '../components/starCom';
import { getToken } from '../ducks/userDK';
import { getItems, removeFromStar,starGet } from '../ducks/starDk';

const mapStateToProps = (state, props) => {
    return {
        token:getToken(state),
        items: getItems(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromStar: (id) => dispatch(removeFromStar(id)),
    starGet: () => dispatch(starGet()),
})

export default connect(mapStateToProps, mapDispatchToProps)(StarCom);
