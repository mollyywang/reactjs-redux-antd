import React,{ Component } from 'react'
import MeCon from '../connectors/meCon'
import FooterCon from '../connectors/footerCon'
import { Link } from 'react-router-dom'

import '../styles/user.less'

class Me extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount=()=>{
    
  }
  
  render(){
    return(
      <div className='flex-layout user-wrap'>
        <header><h2>Price Comparison<Link to={{pathname:"/user/me"}} ><i className='btn-mine cur'/></Link></h2></header>
        <section className='flex-main'>
            <MeCon/>
        </section>
        <FooterCon url={this.props.location}/>
      </div>
    )
  }
}
export default Me