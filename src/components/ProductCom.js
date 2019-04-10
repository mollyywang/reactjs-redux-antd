import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/product.less'
import { Icon } from 'antd';
import { Popconfirm } from 'antd';


class Product extends Component{
    constructor() {
        super();
    }

    handleStarClick = () => {
        const { _id, name, price, image,urllink,from,isInStar, removeFromStar, addToStar } = this.props;
        if (isInStar) {
            removeFromStar(_id);
        } else {
            addToStar({
                _id:_id,
                name:name,
                price: price,
                image:image,
                urllink:urllink,
                from:from
            });
        }
    }
    confirm=()=> {
        this.handleStarClick();
      }
      
    isDoDelete = (typeS,isInStar)=>{
        if(typeS){
            return(
            <Popconfirm title="Detele item ?" okText="Yes" cancelText="No" onConfirm={this.confirm} >
            <button
                className="btn-delete"
            ><i className='delete'/>
            </button>
            </Popconfirm>)
        }else{
            return(             
            <button
                className="btn-star"
                onClick={this.handleStarClick}
            ><i className={isInStar ? 'star star-filled' : 'star'} />
            </button>)
        }
    }

    render (){
        const { name, price, image,urllink,from, isInStar,typeS} = this.props;
        return(
            
            <div className="product-con">
                <div className={'tag '+from}></div>
                <b style={{backgroundImage:'url('+image+')'}} alt="product" className="pic"/>
                <div className="detail">
                    <p className="name">{name}</p>
                    <p className="price"><Icon type="pay-circle" /> {price} AU </p>
                        {this.isDoDelete(typeS,isInStar)}
                </div>
            </div>
        )
    }
}

Product.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    url:PropTypes.string,
    from:PropTypes.string,
    isInStar: PropTypes.bool,
    removeFromStar: PropTypes.func,
    addToStar: PropTypes.func,
}

export default Product;
