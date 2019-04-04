import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../connectors/ProductCon';


class Star extends Component {
    constructor() {
        super();
        //服务器拉取数据写在哪里
        
       
    }
    componentDidMount() {
        console.log('5、父组件挂载完成');
        const {starGet} = this.props;
        starGet();
    }
    render(){
        
        const {items} = this.props;

        return (
            <div className="star-con">
                    {items.length > 0 && (
                        <ul className="starlist-item">
                            {items.map(product => (
                                <li key={product.id} className="starlist-item">
                                    <Product {...product} typeS="delete"/>
                                </li>
                            ))}
                        </ul>
                    )}
                    {items.length === 0 && (
                        <div className="alert alert-info">Star List is empty</div>
                    )}
            </div>
        )
    }
}

Star.propTypes = {
    items: PropTypes.array,
}

export default Star;
