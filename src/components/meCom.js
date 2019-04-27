import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon} from 'antd';


class Me extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        username: '',
        token: ''
    }

    //logout

    render() {
        const { username, token } = this.props;
        console.log(username,token)
        return (
            <div className="user-detail">
                <b className="user-pic" style={{backgroundImage:'url(../../images/avatar.png)'}} ></b>
                <h1><Icon type="user" />{username}</h1>
                <p><a href='/search'><Button type="primary">begin to search</Button></a></p>
                <p><a href='/star'><Button type="primary">see your stars</Button></a></p>
                <p><a href='/user/logout'><Button>logout</Button></a></p>
            </div>
        )
    }
}

Me.propTypes = {
    username: PropTypes.string,
    token: PropTypes.string,
}

export default Me;

