import React, { Component } from 'react'
import UserCon from '../connectors/userCon'
import FooterCon from '../connectors/footerCon'
import { Link } from 'react-router-dom'

import '../styles/user.less'


class User extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {

  }

  render() {
    return (
      <div className='user-wrap'>
        <header><h2>Price Comparison<Link to={{ pathname: "/user/me" }}><i className='btn-mine cur' /></Link></h2></header>
        <section className='user-main'>
          <UserCon />
        </section>
        <FooterCon url={this.props.location} />
      </div>
    )
  }
}
export default User
