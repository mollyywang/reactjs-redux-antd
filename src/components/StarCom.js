import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../connectors/ProductCon';


class Star extends Component {
    constructor(props) {
        super(props);  
    }

    static defaultProps = {
        items: [],/////把这个去掉
        itemIds: []
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
                                <li key={product._id} className="starlist-item">
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
    itemIds: PropTypes.array,
}

export default Star;
