import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Button,Input,Icon } from 'antd';

class Search extends Component {
    constructor(props) {
        super(props);
        //2、加载默认状态，共享状态
    }

    static defaultProps = {
    }

    // shouldComponentUpdate(newProps, newState) {
        // console.log(newProps);
        // console.log(newState);
        // if (newState == null) return false;
    // }

    componentDidUpdate = ()=>{
        const {name,doSearch} = this.props; 
        doSearch(name)
    }
    componentDidMount  = ()=>{
        const {hash,changeName} = this.props; 
        if(hash!=''){
            this.searchDetail ="search results of"
            changeName(hash.substr(1))
        }
    }
    searchDetail=''

    linkSearch(name) {
        return {pathname:"/search", hash: name, query:{foo: 'bar', boo:'boz'}, state:{data:'miao'}}
    }

    render (){
        const {name, changeName,hash,allNums} = this.props; 
        return(
            <div className={hash==""? "search-con" : "search-con up"}>
                <Input className="search-in" onChange={(e)=>{changeName(e.target.value)}} prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="input goods name" />
                {/* 这些参数都被存放到this.props.location中 */}
                <Button type='primary' className="btn-search"><Link to={this.linkSearch(name)} >Search</Link></Button>
                <p className="search-detail"><span> {allNums} </span>{this.searchDetail}<span>{ ' '+hash.substr(1) }</span></p>
            </div>
        );
    }
}

Search.propTypes = { 
    name: PropTypes.string,
    changeName: PropTypes.func.isRequired,
    doSearch:PropTypes.func.isRequired
}

export default Search;
