import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom'


class Me extends Component {
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
        const { isLogin } = this.props;
        if (!isLogin) {
            this.context.router.history.push('/user/login')
        }
    }

    componentDidMount = () => {
        const { isLogin } = this.props;
        if (!isLogin) {
            this.context.router.history.push('/user/login')
        }
    }

    render() {
        const { username } = this.props;
        return (
            <div className="user-detail">
                <b className="user-pic" style={{ backgroundImage: 'url(../../images/avatar.png)' }} ></b>
                <h1><Icon type="user" />{username}</h1>
                <p><Link to={{ pathname: "/search" }} ><Button type="primary">click to search</Button></Link></p>
                <p><Link to={{ pathname: "/star" }} ><Button type="primary">see your starlist</Button></Link></p>
                <p><Link to={{ pathname: "/user/login" }} ><Button>logout</Button></Link></p>
            </div>
        )
    }
}

Me.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    username: PropTypes.string,
    token: PropTypes.string,
}

export default Me;

