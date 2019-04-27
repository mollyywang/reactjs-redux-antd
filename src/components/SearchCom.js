import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Spin, Icon, Input, Button, Divider } from 'antd';
import { Redirect } from 'react-router-dom'

class Search extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        name:'',
        inputVal:''
    }
    
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    searchDetail=''
    
    componentDidUpdate = ()=>{
        //if users update the url,do search 用户手动更新url链接上的搜索名，执行搜索操作
        const { hash,name,changeName,productsGet } = this.props; 
        if(name!==""&&name!==hash.substr(1)){
            changeName(hash.substr(1));
            productsGet(hash.substr(1));
        }
    }

    componentDidMount  = ()=>{
        //do search when opening page first time 第一次打开页面url上面有搜索参数，执行搜索操作
        const { hash,changeName,productsGet } = this.props; 
        if(hash!==''){
            changeName(hash.substr(1));
            productsGet(hash.substr(1));
        }
    }

    handleSubmit = (e) => {
        //do search whenever click the button 点击一次按钮，执行一次搜索
        const { name,changeName,productsGet } = this.props; 
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err&&(name!=values.name)) {
                changeName(values.name);
                productsGet(values.name);
                this.context.router.history.push('/search#'+values.name)
            }
        });
    }

    render (){
        const { getFieldDecorator,name } = this.props.form;
        return (
            // <Spin tip="logining..." spinning={searching}>
            <div className={name==""?"search-form":"search-form up"}>
            <Form onSubmit={this.handleSubmit}>
                    <Form.Item className="search-in">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your product name!' }],
                        })(
                            <Input prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="product name" />
                        )}
                    </Form.Item>
                    <Form.Item className="search-button">
                        <span className="search-detail">Find the cheapest!</span>
                        <Button type="primary" htmlType="submit" className="btn-search">
                            Search
                        </Button>
                    </Form.Item>
            </Form>
            </div>)
        }
}

Search.propTypes = { 
    name: PropTypes.string,
    inputVal: PropTypes.string,
    searching:PropTypes.bool.isRequired,
    changeName: PropTypes.func.isRequired,
    productsGet:PropTypes.func.isRequired
}

const SearchForm = Form.create(
    { name: 'normal_login',
    //保持输入框里面的值跟url链接上的参数一致
    //keep the value in the input area the same as the url's hash
    mapPropsToFields(props) {
        return {
          name: Form.createFormField({
            ...props.name,
            value: props.name,
          }),
        };
      }}
    
    )(Search);

export default SearchForm;
