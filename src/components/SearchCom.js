import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Button,Input,Icon } from 'antd';
class Search extends Component {
    constructor(props) {
        super(props);
        //2、加载默认状态，共享状态
    }

    doSearch(name) {
        return {pathname:"/search", hash: name, query:{foo: 'bar', boo:'boz'}, state:{data:'miao'}}
    }

    render (){
        const {name, changeName} = this.props; 
        return(
            <div className="search-con">
                <Input className="search-in" onChange={(e)=>{changeName(e.target.value)}} prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="input goods name" />
                {/* 这些参数都被存放到this.props.location中 */}
                <Button type='primary' className="btn-search"><Link to={this.doSearch(name)} >Search</Link></Button>
            </div>
        );
    }
}

Search.propTypes = {
    name: PropTypes.string,
    changeName: PropTypes.func.isRequired,
}

export default Search;
