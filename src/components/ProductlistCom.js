import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import ProductCon from '../connectors/ProductCon';
import productsData from '../data/products';
import '../styles/product.less'

class ProductList extends Component{
    constructor() {
        super();
    }
    
    static defaultProps = {
        productlist:productsData
    }

    render (){
        
        const {productlist} = this.props;

        return(
            <div>
                <ul className="productlist">
                {productlist.map(product => (
                    <li key={product.id} className="productlist-item">
                        <ProductCon {...product} />
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}

ProductList.propTypes = {
    products: PropTypes.array
}

export default ProductList;
