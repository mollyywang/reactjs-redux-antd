import React,{ Component } from 'react'
import UserCon from '../connectors/userCon';
import FooterCon from '../connectors/footerCon'

import '../styles/user.less'


class User extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount=()=>{
    
  }
  
  render(){
    return(
      <div className='flex-layout user-wrap'>
        <header><h2>Price Comparison<i className='btn-mine cur'/></h2></header>
        <section className='flex-main'>
            <UserCon/>
        </section>
        <FooterCon url={this.props.location}/>
      </div>
    )
  }
}
export default User
