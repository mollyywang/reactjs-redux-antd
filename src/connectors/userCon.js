import { connect } from 'react-redux';
import UserCom from '../components/userCom';
import { getName, changeName,userDoLogin,getLogining} from '../ducks/userDK';
import {Form} from 'antd';

const mapStateToProps = (state, props) => {
    return {
        name:getName(state),
        logining:getLogining(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeName: (name) => dispatch(changeName(name)),
    userDoLogin: (name,password) => dispatch(userDoLogin(name,password))
})

const loginForm = Form.create({ name: 'normal_login' })(UserCom);

export default connect(mapStateToProps, mapDispatchToProps)(loginForm);
