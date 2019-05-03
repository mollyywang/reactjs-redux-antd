import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserCom from '../components/userCom';
import { logout, getIsLogin, getName, getToken, getLogining, changeName, userDoLogin } from '../actions/userAt';
import { Form } from 'antd';

const mapStateToProps = (state, props) => {
    return {
        isLogin: getIsLogin(state),
        username: getName(state),
        logining: getLogining(state),
        token: getToken(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    changeName: (username) => dispatch(changeName(username)),
    userDoLogin: (name, password) => dispatch(userDoLogin(name, password))
})

const loginForm = Form.create({ name: 'normal_login' })(UserCom);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(loginForm));
