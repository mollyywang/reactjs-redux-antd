import { connect } from 'react-redux';
import MeCom from '../components/meCom';
import { withRouter } from 'react-router';
import { getIsLogin, getName, getToken } from '../action/userAt';

const mapStateToProps = (state, props) => {
    return {
        isLogin: getIsLogin(state),
        username: getName(state),
        token: getToken(state)
    }
}

export default withRouter(connect(mapStateToProps)(MeCom));
