import React from 'react'
// antd组件引入
import {Row, Col, Dropdown, Avatar} from 'antd';
// antd样式引入
import 'antd/dist/antd.css';
// 顶部层样式引入
import '../../static/style/homeTopLayer.styl'; 

import 'animate.css';

// 加载对应的redux
import { connect } from 'react-redux'
import {testText} from '../../redux/actions';

class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            'anlist':"",
            'ani':"animated pulse"
        };
        console.log(props)
    }

    // 挂载
    componentDidMount(){
        if(this.props.ani)
            this.setState({'ani': this.props.ani});
    }

    checkAnlist(param) {
        let params = "";
        if(param === true)
            params = this.state.ani
        this.setState({'anlist': params});
        console.log(111)
    }

    render(){
    
        return (
            <div>
               <div className={this.state.anlist} onMouseOver={()=>this.checkAnlist(true)} onMouseOut={()=>this.checkAnlist(false)}>111111</div>
            </div>
        );
    }
}

class GameHidden extends React.Component{
    render() {
        return (
            <div className='game-hidden'>
                <div className='game-hidden-box'>
                    <div className='fl'>
                        <img src={require('../../static/img/headGameHidden1.jpg')} className='game-hidden-ltop' title='图片' alt='图片不见了' />                            
                        <Row className='game-hidden-lbottom-box' type="flex" justify="space-between" align="middle">
                            <Col span={8} className='game-hidden-lbottom hand-back-p'>
                                <img src={require('../../static/img/headGameHiddenLeftLable1.png')} title='图片' alt='图片不见了' />
                                <div>碧蓝航线</div>   
                            </Col>
                            <Col span={8} className='game-hidden-lbottom hand-back-p'>                                 
                                <img src={require('../../static/img/headGameHiddenLeftLable1.png')} title='图片' alt='图片不见了' />
                                <div>碧蓝航线</div>                               
                            </Col>
                            <Col span={8} className='game-hidden-lbottom hand-back-p'>
                                <img src={require('../../static/img/headGameHiddenLeftLable1.png')} title='图片' alt='图片不见了' />
                                <div>碧蓝航线</div>   
                            </Col>
                        </Row>   
                    </div>
                    <div className='game-hidden-r fr'>
                        <Row className='game-hidden-rtop'>
                            <Col>
                                <img className='fl' src={require('../../static/img/title.png')} title='图片' alt='图片不见了' />
                                <div className='fr hand'>游戏论坛</div>
                            </Col>
                        </Row>
                        <Row className='game-hidden-rbottom'>
                            <Col className='game-hidden-rbottom-list hand-back-p'>风之大陆</Col>
                            <Col className='game-hidden-rbottom-list hand-back-p'>风之大陆</Col>
                            <Col className='game-hidden-rbottom-list hand-back-p'>风之大陆</Col>
                            <Col className='game-hidden-rbottom-list hand-back-p'>风之大陆</Col>
                            <Col className='game-hidden-rbottom-list hand-back-p'>风之大陆</Col>
                            <Col className='game-hidden-rbottom-list hand-back-p'>风之大陆</Col>
                            <Col className='game-hidden-rbottom-list hand-back-p'>风之大陆</Col>
                        </Row>
                    </div>
                </div>
            </div>
        );          
      }
}

class LiveHidden extends React.Component{
    render(){
        return (
                <div className='live-hidden'>
                    <div className='live-hidden-box'>
                        <Row className='live-hidden-top' type="flex" justify="start" align="middle">
                            <Col span='12'><span>热门直播：</span></Col>
                            <Col span='12'><span>热门活动：</span></Col>
                        </Row>
                        <Row className='live-hidden-bottom' type="flex">
                            <Col span='12'>
                                <Row type="flex">
                                    <Col className='live-hidden-bottom-live hand'>
                                        <img src={require('../../static/img/headLiveLeftLable1.gif')} title='图片' alt='图片不见了' />
                                        <div>基佬爱上熊</div>
                                    </Col>
                                    <Col className='live-hidden-bottom-live hand'>
                                        <img src={require('../../static/img/headLiveLeftLable1.gif')} title='图片' alt='图片不见了' />
                                        <div>基佬爱上熊</div>
                                    </Col>
                                    <Col className='live-hidden-bottom-live hand'>
                                        <img src={require('../../static/img/headLiveLeftLable1.gif')} title='图片' alt='图片不见了' />
                                        <div>基佬爱上熊</div>
                                    </Col>
                                    <Col className='live-hidden-bottom-live hand'>
                                        <img src={require('../../static/img/headLiveLeftLable1.gif')} title='图片' alt='图片不见了' />
                                        <div>基佬爱上熊</div>
                                    </Col>
                                    <Col className='live-hidden-bottom-live hand'>
                                        <img src={require('../../static/img/headLiveLeftLable1.gif')} title='图片' alt='图片不见了' />
                                        <div>基佬爱上熊</div>
                                    </Col>
                                    <Col className='live-hidden-bottom-live hand'>
                                        <img src={require('../../static/img/headLiveLeftLable1.gif')} title='图片' alt='图片不见了' />
                                        <div>基佬爱上熊</div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span='12'>
                                <Row>
                                    <Col className='live-hidden-bottom-act hand'>
                                        <img src={require('../../static/img/headLiveRightLabel1.jpg')} title='图片' alt='图片不见了' />
                                    </Col>
                                    <Col className='live-hidden-bottom-act hand'>
                                        <img src={require('../../static/img/headLiveRightLabel1.jpg')} title='图片' alt='图片不见了' />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>    
        );
    }
}

class DownAppHidden extends React.Component{
    render(){
        return (
            <div className='down-app-hidden'>
                <div className='down-app-hidden-code'>
                    <img src={require('../../static/img/headDownAppCode.jpg')} title='图片' alt='图片不见了' />
                </div>
            </div>
        );
    }
}

class HomeTopLayer extends React.Component{
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            'topHiddenState':{
                'game':0,
                'live':0,
                'app':0
            }
        };
        console.log(props)
    }
    // 挂载
    componentDidMount(){
    }

    
    render(){
        const gameHidden = (
            <GameHidden />
        );
        const liveHidden = (
            <LiveHidden />
        );
        const downAppHidden =(
            <DownAppHidden />
        );
        return(
            <div>   
                <div id='topLayer'>
                    <div className='top-layer-top'>
                        <div className='top-layer-label'>
                           <div className='content-with top-layer-label-box'>
                                <Row className='fl'>
                                    <Col className='fl top-layer-label-left-nav hand' title='主站'><i className='iconfont icon-tv'></i>主站</Col>                                   
                                    <Col onClick={() => this.test1('111')} className='fl top-layer-label-left-nav hand' title='画友'>画友</Col>                                  
                                    <Dropdown overlay={gameHidden}>
                                        <Col className='fl top-layer-label-left-nav hand' title='游戏中心'>游戏中心</Col>    
                                    </Dropdown>   
                                    <Dropdown overlay={liveHidden}>
                                        <Col className='fl top-layer-label-left-nav hand' title='直播'>直播</Col>
                                    </Dropdown>                          
                                    <Col className='fl top-layer-label-left-nav hand' title='会员购'>会员购</Col>
                                    <Dropdown overlay={downAppHidden}>
                                        <Col className='fl top-layer-label-left-nav hand' title='下载APP'><i className='iconfont icon-shouji'></i>下载APP</Col>
                                    </Dropdown>                                   
                                </Row>
                                
                                <Row className='fr'>
                                    <Col className='fl hand'>
                                        <Avatar src={require('../../static/img/akari.jpg')} />
                                    </Col>
                                    <Col className='fl top-layer-label-left-nav hand'>历史</Col>
                                    <Col className='fl top-layer-label-left-nav hand'>投稿</Col>
                                </Row>
                           </div>
                        </div>
                        <div>
                            search
                        </div>
                    </div>
                    <div className='content-with top-layer-nav'>                  
                           bottom  {this.props.todos.text}                  
                    </div>
                </div>
                <Test ani='animated pulse rubberBand' />          
            </div>
        );
    }
}

// 获取属性
const mapStateToProps = state => {
    return {
      todos: state
    }
  }

// 注册动作
const mapDispatchToProps = dispatch => {
    return {
      onTodoClick: id => {
        dispatch(testText(id))
      }
    }
}

// 将属性传入对应的模型
const HomeTest = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeTopLayer)

// 暴露模型
export default HomeTest