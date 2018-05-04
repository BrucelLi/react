import React from 'react';
import '../../static/style/searchNav.styl';
// antd组件引入
import {Row, Col, Input} from 'antd';
import { Link } from 'react-router-dom'
// antd样式引入
import 'antd/dist/antd.css';

const Search = Input.Search;

class SearchNav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <div>              
                <Row className='search-nav-box' type="flex" justify="start" align="middle">
                    <Link style={{color:'#df5584'}} to='/rank/index'>
                        <Col className='search-nav-left' span='5'><i className='iconfont-red-small icon-paihangbang' /> 排行榜</Col>
                    </Link>                  
                    <Col span='19'>
                        <Search placeholder="父与子 战与魂" onSearch={value => console.log(value)}  enterButton />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SearchNav