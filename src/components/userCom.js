import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Spin, Icon, Input, Button, Checkbox, } from 'antd';


class User extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        username: '',
        token: ''
    }

    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    componentDidUpdate = () => {
        const { username,token } = this.props;
        if(username&&token){
            this.context.router.history.push('/user/me')
        }
    }

    componentDidMount  = ()=>{
        const { username,token } = this.props;
        if(username&&token){
            this.context.router.history.push('/user/me')
        }
    }

    handleSubmit = (e) => {
        const { userDoLogin } = this.props;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                userDoLogin(values.userName, values.passWord);
            }
        });
    }


    render() {
        const { logining } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
        <Spin tip="logining..." spinning={logining}>
        <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('passWord', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="#">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
            </Button>
                    Or <a href="#">register now!</a>
                </Form.Item>
        </Form></Spin>)
    }
}

User.propTypes = {
    username: PropTypes.string,
    token: PropTypes.string,
    logining: PropTypes.bool.isRequired
}

export default User;

