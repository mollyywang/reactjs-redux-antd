import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/about.less'


class About extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className='about-wrap'>
        <header><h2>About Me</h2></header>
        <section className="about-main">
            <p>Hi , I am molly</p>
            <p>Nice to meet you ！</p>
            <Link to={{pathname:"/search"}}>back to the index</Link>
        </section>
      </div>
    )
  }
}
export default About
