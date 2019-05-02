import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCon from '../connectors/productCon';
import { debounce } from '../util/uiUtil'
import { Spin } from 'antd';
import '../styles/product.less'

class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {

    }

    handleScroll = (dom) => {
        const { productsGet, name, index, allNums, isFetching } = this.props;
        if (!name || name == "") {
            console.log(name);
            return false;
        }

        //翻页 loading
        if (dom.scrollHeight - dom.scrollTop - dom.offsetHeight < 100) {
            if (index >= allNums) {
                console.log('fetching end')
            } else {
                if (!!isFetching) {
                    return false;
                }
                productsGet(name);
                return dom.scrollTop = dom.scrollHeight
            }
        }
    }

    componentDidMount = () => {
        //监听下拉加载
        const pro = this.refs.productlist;
        let fn = debounce(this.handleScroll, 100, pro);
        pro.addEventListener('touchmove', fn);
    }

    componentWillUnmount = () => {

    }


    render() {
        const { items, isFetching } = this.props;
        return (
            <ul className="productlist" ref="productlist">
                {items.map(product => (
                    <li key={product._id} className="productlist-item">
                        <ProductCon {...product} />
                    </li>
                ))}
                <Spin size="large" spinning={isFetching} />
            </ul>
        )
    }
}

ProductList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    name: PropTypes.string,
    items: PropTypes.array.isRequired,
    productsGet: PropTypes.func.isRequired,
    allNums: PropTypes.number,
    index: PropTypes.number,
    counts: PropTypes.number
}

export default ProductList;
