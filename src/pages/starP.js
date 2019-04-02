import React,{ Component } from 'react'
import StarCon from '../connectors/StarCon';
import FooterCon from '../connectors/footerCon'
import { Link } from 'react-router-dom'
import '../styles/star.less'


class Star extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className='flex-layout star-wrap'>
        <header><h2>Price Comparison<Link to={{pathname:"/about"}}><i className='btn-mine'/></Link></h2></header>
        <section className='flex-main'>
        <StarCon/>
        </section>
        <FooterCon url={this.props.location}/>
      </div>
    )
  }
}
export default Star
