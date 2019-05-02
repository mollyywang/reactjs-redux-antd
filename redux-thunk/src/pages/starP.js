import React, { Component } from 'react'
import StarCon from '../connectors/starCon';
import FooterCon from '../connectors/footerCon'
import { Link } from 'react-router-dom'
import '../styles/star.less'


class Star extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='star-wrap'>
        <header><h2>Price Comparison<Link to={{ pathname: "/user/me" }}><i className='btn-mine' /></Link></h2></header>
        <section className='star-main'>
          <StarCon />
        </section>
        <FooterCon url={this.props.location} />
      </div>
    )
  }
}
export default Star
