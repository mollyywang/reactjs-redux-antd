import React,{ Component } from 'react';
import SearchCon from '../connectors/SearchCon'
import ProductlistCom from '../components/ProductlistCom';
import FooterCon from '../connectors/footerCon'
import { Link } from 'react-router-dom'
import '../styles/search.less'


class Search extends Component {

  constructor(props) {
    super(props);
  }

 render(){
   return(
    <div className='flex-layout search-wrap'>
      <header><h2>Price Comparison<Link to={{pathname:"/about"}} ><i className='btn-mine'/></Link></h2></header>
      <section className='flex-main'>  
        <SearchCon/>
        <ProductlistCom/>
      </section>
      <FooterCon url={this.props.location}/>
    </div>

   )
 }
}


export default Search
