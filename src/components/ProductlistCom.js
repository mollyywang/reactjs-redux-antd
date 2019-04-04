import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import ProductCon from '../connectors/ProductCon';
import {debounce} from '../util/uiUtil'
import { Spin } from 'antd';

import '../styles/product.less'

class ProductList extends Component{
    constructor(props) {
        super(props);
    }
    
    static defaultProps = {
        
    }



    handleScroll = (dom)=>{
        //2.每一次都要这样拿变量吗？都要去prop去取
        
        const {productsGet,name,indexx,allNums,counts} = this.props;
        console.log(dom.scrollHeight-dom.scrollTop-dom.offsetHeight);
        //翻页 loading
        if(dom.scrollHeight-dom.scrollTop-dom.offsetHeight<100){
            if(indexx>=allNums){
                //3.怎么把fn解绑
                console.log('end')
            }else{
                productsGet(name,()=>{console.log(333)});
            }
        }
    }

    componentDidMount  = ()=>{
        //获取items
        const {productsGet,name} = this.props;
        productsGet(name);
        //监听下拉加载
        const pro = this.refs.productlist;
        let fn = debounce(this.handleScroll,100,pro);
        pro.addEventListener('touchmove', fn);
    }

    componentWillUnmount  = ()=>{

    }

    
    render (){
        const {items} = this.props;
        console.log(items)
        console.log('0.1------------------')
        return(
                <ul className="productlist"  ref="productlist">
                {items.map(product => (
                    <li key={product.id} className="productlist-item">
                        <ProductCon {...product} />
                    </li>
                ))}
                <Spin size="large" />
                </ul>
        )
    }
}

ProductList.propTypes = {
    name:PropTypes.string,
    items: PropTypes.array,
    productsGet: PropTypes.func,
    allNums: PropTypes.number,
    indexx:PropTypes.number,
    counts:PropTypes.number
}

export default ProductList;
