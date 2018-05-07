import React  from 'react';
// antd组件引入
import {Row, Col, Badge, Dropdown, Menu} from 'antd';
// 路由引入
import { Link } from 'react-router-dom'
// antd样式引入
import 'antd/dist/antd.css';
// 导航样式引入
import '../../static/style/homeNav.styl';

// 列表组件公共部分
class NavList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            listStyle:{
                margin:'0 10px'
            },
            listRightImg:{
                icon:''
            }
        };
    }

    checkState(params) {
        let listStyle = this.state.listStyle
        let listRightImg = this.state.listRightImg
        if (params) {
            listStyle = {
                margin:'0 5px'
            };
            listRightImg = {
                icon:'<'
            };
        } else {
            listStyle = {
                margin:'0 10px'
            };
            listRightImg = {
                icon:''
            };
        }
        this.setState({
            'listStyle':listStyle,
            'listRightImg':listRightImg
        });
    }

    render(){
        return (
            <Row onMouseOver={()=>this.checkState(true)} onMouseOut={()=>this.checkState(false)} className='nav-list' type="flex" justify="space-between">
                <Col style={{color:'#00a1d6'}}>></Col>
                <Col style={this.state.listStyle}>{this.props.value}</Col>
                <Col style={{color:'#00a1d6'}}>{this.state.listRightImg.icon}</Col>
            </Row>
        );
    }
}

// 动画下拉列表
const AnimateNavList = (
    <Menu>
        <Menu.Item>
            <Link to='/animate/mad-amv'>
                <NavList value='MAD-AMV' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/animate/mmd-3d'>
                <NavList value='MMD-3D' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/animate/voice'>
                <NavList value='短片·手书·配音' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/animate/comprehensive'>
                <NavList value='综合' />
            </Link>
        </Menu.Item>
    </Menu>
);

// 番剧下拉列表
const HisPlay = (
    <Menu>
        <Menu.Item>
            <Link to='/his-play/serial'>
                <NavList value='连载动画' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/his-play/end'>
                <NavList value='完结动画' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/his-play/consulte'>
                <NavList value='咨询' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/his-play/official-extension'>
                <NavList value='官方延伸' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/his-play/play-time'>
                <NavList value='新番时间表' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/his-play/play-index'>
                <NavList value='番剧索引' />
            </Link>
        </Menu.Item>
    </Menu>
);


class HomeNav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){

        const badgeStyle = {
            backgroundColor:'#df5584',
            fontSize:'10px',
            borderRadius:"5px",
            padding:'0 1px',
            height:'14px',
            lineHeight:'14px'
        };
        const badgeOverflowCount = 999;

        return (
            <div style={{margin:'0 auto'}} className='content-with'>
                <Row type="flex" justify="space-between"> 
                    <Link className='link-color' to='/'>
                        <Col>
                            <Row>
                                <Col><i className='iconfont-nav icon-shouye'></i></Col>
                                <Col className='note-color'>首页</Col>
                            </Row>
                        </Col>
                    </Link>
                    <Link className='link-color' to='/animate/index'>
                        <Dropdown overlay={AnimateNavList}>   
                            <Col>
                                <Row>
                                    <Col><Badge style={badgeStyle} count={9999} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>动画</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/his-play/index'>
                        <Dropdown overlay={HisPlay}>   
                            <Col>
                                <Row>
                                    <Col><Badge style={badgeStyle} count={112} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>番剧</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                </Row>
            </div>
        );
    }
}


export default HomeNav