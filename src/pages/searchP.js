import React,{ Component } from 'react';
import SearchCon from '../connectors/SearchCon'
import ProductlistCon from '../connectors/ProductlistCon';
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
      <header><h2>Price Comparison<Link to={{pathname:"/user"}} ><i className='btn-mine'/></Link></h2></header>
      <section className='flex-main'>  
        <SearchCon hash={this.props.location.hash}/>
        <ProductlistCon/>
      </section>
      <FooterCon url={this.props.location}/>
    </div>

   )
 }
}


export default Search
