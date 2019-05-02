import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import StarCom from '../components/starCom';
import { getIsLogin, getName, getToken } from '../action/userAt';
import { getItems, getFetching, removeFromStar, starGet } from '../action/starAt';

const mapStateToProps = (state, props) => {
    return {
        isLogin: getIsLogin(state),
        isFetching: getFetching(state),
        username: getName(state),
        token: getToken(state),
        items: getItems(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromStar: (id) => dispatch(removeFromStar(id)),
    starGet: () => dispatch(starGet()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StarCom))
