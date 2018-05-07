import React from 'react'
import { connect } from 'react-redux'
import { testText } from '../../redux/actions';
import { Link } from 'react-router-dom'
// antd组件引入
import {Row, Col, Dropdown, Avatar, Button} from 'antd';
// antd样式引入
import 'antd/dist/antd.css';
// 引入滚动组件
import Slider from "react-slick";
// 引入滚动组件的样式
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// 顶部层样式引入
import '../../static/style/homeTopLayer.styl';  
// 引入动画库
import 'animate.css';
// 加载搜索组件
import SearchNav from '../search/SearchNav';

// http 请求封装测试
import * as api from '../../api'
let testData = api.getApi('home').indexItem()
console.log(testData)
console.log(process.env.NODE_ENV)

// 动画测试模板
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

// 游戏隐藏的窗口模板
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

// 直播隐藏的窗口模板
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

// 下载APP隐藏的窗口模板
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

// 登录隐藏的窗口模板
class LoginHidden extends React.Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 0,
            cssEase: "linear"
          };
        return (
            <div>
                <Row className='danmu-hidden-box'>
                    <Col>登录后可以看：</Col>
                    <Col className='img null-box'>
                    <Slider {...settings}>
                        <div>
                            <img src={require('../../static/img/danmu.png')} title='图片' alt='图片不见了' />
                        </div>
                        <div>
                            <img src={require('../../static/img/danmu.png')} title='图片' alt='图片不见了' />
                        </div>
                    </Slider>
                    </Col>
                    <Col><Button href='/login' style={{width:'100%'}} type="primary">登录</Button></Col>
                    <Col style={{textAlign:'center'}} className='null-box'>首次使用，<Link to='/reg/index'>点我去注册</Link></Col>
                </Row>
            </div>
        );
    }
}

// 历史记录的隐藏模板
class HistoryHidden extends React.Component{
    render(){
        return(
        <div>
            <Row className='history-hidden-box' justify='center'>
                <Col className='history-line'>登录后有更多功能哦~</Col>
                <Col className='history-line'><Button href='/login' type="primary">登录</Button></Col>
                <Col className='history-line'>没有数据哦，多看点视频吧</Col>
                <Col className='history-line'><Button style={{width:'100%'}} href='/history/more'>查看更多></Button></Col>
            </Row>
        </div>
        );
    }
}

// 投稿隐藏模板
class ContributeHidden extends React.Component{
    render(){
        return(
        <div className='contribute-text'>
            <Row type="flex" justify="space-between">
                <Link style={{color:'#df5584'}} to='/contribute/colnum'>
                    <Col className='hand-back-p'>
                        <Row>
                            <Col><i className='iconfont-red icon-icon-test'/></Col>
                            <Col>专栏投稿</Col>
                        </Row>
                    </Col>
                </Link>
                <Link style={{color:'#df5584'}} to='/contribute/music'>
                    <Col className='hand-back-p'>
                        <Row>
                            <Col><i className='iconfont-red icon-yinpin' /></Col>
                            <Col>音频投稿</Col>
                        </Row>
                    </Col>
                </Link>
                <Link style={{color:'#df5584'}} to='/contribute/movie'>
                    <Col className='hand-back-p'>
                        <Row>
                            <Col><i className='iconfont-red icon-shipin' /></Col>
                            <Col>视频投稿</Col>
                        </Row>
                    </Col>
                </Link>
                <Link style={{color:'#df5584'}} to='/contribute/manage'>
                    <Col className='hand-back-p'>
                        <Row>
                            <Col><i className='iconfont-red icon-dingdanguanli' /></Col>
                            <Col>投稿管理</Col>
                        </Row>
                    </Col>
                </Link>
                <Link style={{color:'#df5584'}} to='/contribute/creation'>
                    <Col className='hand-back-p'>
                        <Row>
                            <Col><i className='iconfont-red icon-chuangzaoli' /></Col>
                            <Col>创作中心</Col>
                        </Row>
                    </Col>
                </Link>
            </Row>
        </div>
        );
    }
}

// 首页顶部公共模板
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
        const downAppHidden = (
            <DownAppHidden />
        );
        const loginHidden = (
            <LoginHidden />
        );
        const historyHidden = (
            <HistoryHidden />
        );
        const contributeHidden = (
            <ContributeHidden />
        );
        
        return(
            <div>   
                <div id='topLayer'>
                    <div className='top-layer-top'>
                        <div className='top-layer-label'>
                           <div className='content-with top-layer-label-box'>
                                <Row className='fl'>
                                    <Link className='link-style' to="/index"><Col className='fl top-layer-label-left-nav hand' title='主站'><i className='iconfont icon-tv'></i>主站</Col></Link>                                                                   
                                    <Link className='link-style' to="/drawing/index"><Col className='fl top-layer-label-left-nav hand' title='画友'>画友</Col></Link>                                    
                                    <Link className='link-style' to="/game/index">
                                        <Dropdown overlay={gameHidden}>
                                            <Col className='fl top-layer-label-left-nav hand' title='游戏中心'>游戏中心</Col>    
                                        </Dropdown>
                                    </Link>
                                    <Link className='link-style' to="/live/index">   
                                        <Dropdown overlay={liveHidden}>
                                            <Col className='fl top-layer-label-left-nav hand' title='直播'>直播</Col>
                                        </Dropdown>
                                    </Link>
                                    <Link className='link-style' to="/member/buy/index">                             
                                        <Col className='fl top-layer-label-left-nav hand' title='会员购'>会员购</Col>
                                    </Link>
                                    <Link className='link-style' to="/download/app">        
                                        <Dropdown overlay={downAppHidden}>
                                            <Col className='fl top-layer-label-left-nav hand' title='下载APP'><i className='iconfont icon-shouji'></i>下载APP</Col>
                                        </Dropdown>
                                    </Link>                                   
                                </Row>
                                
                                <Row className='fr'>
                                    <Link className='link-style' to="/login">
                                        <Dropdown overlay={loginHidden}>
                                        <Col className='fl hand'>
                                            <Avatar src={require('../../static/img/akari.jpg')} />
                                        </Col>
                                        </Dropdown>  
                                    </Link>
                                    <Link className='link-style' to="/history/index">
                                        <Dropdown overlay={historyHidden}>     
                                            <Col className='fl top-layer-label-left-nav hand'>历史</Col>
                                        </Dropdown>  
                                    </Link>
                                    <Link className='link-style' to="/contribute/index">
                                        <Dropdown overlay={contributeHidden}>   
                                            <Col className='fl top-layer-label-left-nav hand'>投稿</Col>
                                        </Dropdown>  
                                    </Link>
                                </Row>
                           </div>
                        </div>
                        <div>
                            search
                        </div>
                    </div>
                </div>
                <Test ani='animated pulse rubberBand' />
                <div className='home-search-pos'>
                    <SearchNav />
                </div>   
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