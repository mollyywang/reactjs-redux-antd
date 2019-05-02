import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../connectors/ProductCon';
import { Spin, Button } from 'antd';
import { Link } from 'react-router-dom'

class Star extends Component {
    constructor(props) {
        super(props);  
    }

    static defaultProps = {
        items: []
    }

    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    componentDidUpdate = () => {
        const { isLogin } = this.props;
        if(!isLogin){
            this.context.router.history.push('/user/login')
        }
    }

    componentDidMount() {
        const { starGet,isLogin } = this.props;
        if(isLogin){
            starGet();
            // this.context.router.history.push('/user/login')
        }
        
    }
    
    render(){
        const { isLogin, items, isFetching } = this.props;
        return (
            <div className="star-con">
                {items.length === 0 && (
                    <h2 className="alert-info">Star List is empty</h2>
                )}
                {isLogin ? "" : <Link to={{pathname:"/user/login"}} ><Button type="primary">login to get your starlist</Button></Link>}
                <Spin size="large" spinning={isFetching}/>
                <ul className="starlist-item">
                    {items.length > 0 && items.map(product => (
                        <li key={product._id} className="starlist-item">
                            <Product {...product} typeS="delete"/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

Star.propTypes = {
    items: PropTypes.array
}

export default Star;
