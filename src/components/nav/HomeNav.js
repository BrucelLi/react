import React  from 'react';
// antd组件引入
import {Row, Col, Badge, Dropdown, Menu} from 'antd';
// 路由引入
import { Link } from 'react-router-dom'
// antd样式引入
import 'antd/dist/antd.css';
// 导航样式引入
import '../../static/style/homeNav.styl';

// http 请求封装测试
import * as api from '../../api'

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

// 国创
const Aimtron = (
    <Menu>
        <Menu.Item>
            <Link to='/aimtron/animate'>
                <NavList value='国产动画' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/aimtron/original'>
                <NavList value='国产原创相关' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/aimtron/doll'>
                <NavList value='布袋戏' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/aimtron/message'>
                <NavList value='资讯' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/aimtron/official'>
                <NavList value='官方延伸' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/aimtron/new-time'>
                <NavList value='新番时间表' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/aimtron/original-index'>
                <NavList value='国产动画索引' />
            </Link>
        </Menu.Item>
    </Menu>
);

// 音乐
const Music = (
    <Menu>
        <Menu.Item>
            <Link to='/music/original'>
                <NavList value='原创音乐' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/music/cover'>
                <NavList value='翻唱' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/music/utau'>
                <NavList value='VOCALOID·UTAU' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/music/play'>
                <NavList value='演奏' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/music/three'>
                <NavList value='三次元音乐' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/music/ost'>
                <NavList value='OP/ED/OST' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/music/anthology'>
                <NavList value='音乐选集' />
            </Link>
        </Menu.Item>
    </Menu>
);

// 舞蹈
const Dance = (
    <Menu>
        <Menu.Item>
            <Link to='/dance/house'>
                <NavList value='宅舞' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/dance/three'>
                <NavList value='三次元舞蹈' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/dance/course'>
                <NavList value='舞蹈教程' />
            </Link>
        </Menu.Item>
    </Menu>
);

// 游戏
const Game = (
    <Menu>
        <Menu.Item>
            <Link to='/dance/house'>
                <NavList value='单机游戏' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/dance/three'>
                <NavList value='电子竞技' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/game/phone'>
                <NavList value='手机游戏' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/game/net'>
                <NavList value='网络游戏' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/game/board'>
                <NavList value='桌游·棋牌' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/game/GMV'>
                <NavList value='GMV' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/game/music'>
                <NavList value='音游' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/game/mugen'>
                <NavList value='Mugen' />
            </Link>
        </Menu.Item>
    </Menu> 
);

// 科技
const Science = (
    <Menu>
        <Menu.Item>
            <Link to='/science/cultural'>
                <NavList value='趣味科普人文' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/science/wild'>
                <NavList value='野生技术协会' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/science/speech'>
                <NavList value='演讲·公开课' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/science/xinghai'>
                <NavList value='星海' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/science/digital'>
                <NavList value='数码' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/science/mechanical'>
                <NavList value='机械' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/science/car'>
                <NavList value='汽车' />
            </Link>
        </Menu.Item>
    </Menu> 
);

// 生活
const Life = (
    <Menu>
    <Menu.Item>
        <Link to='/life/funny'>
            <NavList value='搞笑' />
        </Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/life/daily'>
            <NavList value='日常' />
        </Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/life/food'>
            <NavList value='美食圈' />
        </Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/life/animal'>
            <NavList value='动物圈' />
        </Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/life/manual'>
            <NavList value='手工' />
        </Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/life/drawing'>
            <NavList value='绘画' />
        </Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/life/aswr'>
            <NavList value='ASMR' />
        </Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/life/sport'>
            <NavList value='运动' />
        </Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/life/other'>
            <NavList value='其他' />
        </Link>
    </Menu.Item>
</Menu>  
);

// 鬼畜
const Demon = (
    <Menu>
        <Menu.Item>
            <Link to='/demon/guide'>
                <NavList value='鬼畜调教' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/demon/mad'>
                <NavList value='音MAD' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/demon/vocaloid'>
                <NavList value='人力VOCALOID' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/demon/course'>
                <NavList value='教程演示' />
            </Link>
        </Menu.Item>
    </Menu> 
);

// 时尚
const Fashion = (
    <Menu>
        <Menu.Item>
            <Link to='/fashion/beauty'>
                <NavList value='美妆' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/fashion/dress'>
                <NavList value='服饰' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/fashion/fitness'>
                <NavList value='健身' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/fashion/message'>
                <NavList value='资讯' />
            </Link>
        </Menu.Item>
    </Menu> 
); 

// 广告
const Advertising = (
    <Menu>
        <Menu.Item>
            <Link to='/advertising/index'>
                <NavList value='广告' />
            </Link>
        </Menu.Item>
    </Menu> 
);
// 娱乐
const Entertainment = (
    <Menu>
        <Menu.Item>
            <Link to='/entertainment/variety'>
                <NavList value='综艺' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/entertainment/star'>
                <NavList value='明星' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/entertainment/korea'>
                <NavList value='Korea相关' />
            </Link>
        </Menu.Item>
    </Menu> 
);

// 影视
const Film = (
    <Menu>
        <Menu.Item>
            <Link to='/film/gossip'>
                <NavList value='影视杂谈' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/film/clips'>
                <NavList value='影视剪辑' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/film/short'>
                <NavList value='短片' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/film/trailer'>
                <NavList value='预告·资讯' />
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/film/closeup'>
                <NavList value='特摄' />
            </Link>
        </Menu.Item>
    </Menu> 
);

// 放映厅
const Screens = (
<Menu>
    <Menu.Item>
        <Link to='/screens/documentary'>
            <NavList value='纪录片' />
        </Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/screens/movie'>
            <NavList value='电影' />
        </Link>
    </Menu.Item>
    <Menu.Item>
        <Link to='/screens/series'>
            <NavList value='电视剧' />
        </Link>
    </Menu.Item>
</Menu> 
);

class SquareList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squareListStyle:{
                padding:'7px 20px',
                backgroundColor:'#ffffff'
            }
        };
    }

    checkActive(params){
        let squareListStyle = {};
        if(params) {
            squareListStyle = {
                padding:'7px 15px 7px 25px',
                backgroundColor:'#e5e9ef'
            };
        }else{
            squareListStyle = {
                padding:'7px 20px',
                backgroundColor:'#ffffff'
            };
        }
        
        this.setState({
            squareListStyle:squareListStyle
        });
    }

    render (){
        return (
            <Row style={this.state.squareListStyle} onMouseOver={()=>this.checkActive(true)} onMouseOut={()=>this.checkActive(false)} type="flex">
                <Col><i style={{padding:'0 5px'}} className={this.props.Ivalue}></i></Col>
                <Col style={{color:'#000000'}}>{this.props.value}</Col>
            </Row>
        );
    }
}
// 广场
class Square extends React.Component {
    render(){
        return(
            <Row className='square-box' type="flex" justify="space-between">
                <Col>
                    <Row>
                        <Link className='link-color' to='/square/member-buy'>
                            <Col>
                                <SquareList Ivalue='iconfont-huang icon-goumaibanquan' value='会员购' />
                            </Col>
                        </Link>
                        <Link className='link-color' to='/square/activity'>
                            <Col>
                                <SquareList Ivalue='iconfont-lan icon-huodongguanli' value='活动中心' />
                            </Col>
                        </Link>
                        <Link className='link-color' to='/square/game'>
                            <Col>
                                <SquareList Ivalue='iconfont-blue icon-youxi' value='游戏中心' />
                            </Col>
                        </Link>
                        <Link className='link-color' to='/square/news'>
                            <Col>
                                <SquareList Ivalue='iconfont-hong icon-news_icon' value='新闻中心' />
                            </Col>
                        </Link>
                        <Link className='link-color' to='/square/draw'>
                            <Col>
                                <SquareList Ivalue='iconfont-zi icon-noun__cc' value='画友' />
                            </Col>
                        </Link>
                        <Link className='link-color' to='/square/tv'>
                            <Col>
                                <SquareList Ivalue='iconfont-huang icon-TV' value='芒果TV' />
                            </Col>
                        </Link>
                    </Row>
                </Col>
                <Col>
                    <Row style={{margin:'5px', borderLeft:'1px solid #e5e9ef'}}>
                        <Link className='link-color' to='/square/tv'>
                            <Col style={{padding:'10px'}}>
                                <img src={require('../../static/img/headNavR1.jpg')} title='图片' alt='图片不见了' />
                            </Col>
                        </Link>
                        <Link className='link-color' to='/square/tv'>
                            <Col style={{padding:'10px'}}>
                                <img src={require('../../static/img/headNavR2.jpg')} title='图片' alt='图片不见了' />
                            </Col>
                        </Link>
                    </Row>
                </Col>
            </Row>
        );
    }
}

class HomeNav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            badgeCount:{
                animateCount:1,
                hisPlayCount:1,
                aimtronCount:1,
                musicCount:1,
                danceCount:1,
                gameCount:1,
                scienceCount:1,
                lifeCount:1,
                demonCount:1,
                fashionCount:1,
                advertisingCount:1,
                entertainmentCount:1,
                filmCount:1,
                screensCount:1,
            }
        };
    }

     // 挂载
     componentDidMount(){
        api.getApi('home').indexNavCount().then(r => {
            this.setState({
                badgeCount:r
            });
        })
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

        const squareNav = (
            <Square />
        );

        return (
            <div style={{margin:'0 auto'}} className='content-with'>
                <Row type="flex" justify="space-between"> 
                    <Link className='link-color' to='/'>
                        <Col>
                            <Row>
                                <Col style={{textAlign:'center'}}><i className='iconfont-nav icon-shouye'></i></Col>
                                <Col className='note-color'>首页</Col>
                            </Row>
                        </Col>
                    </Link>
                    <Link className='link-color' to='/animate/index'>
                        <Dropdown overlay={AnimateNavList}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.animateCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>动画</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/his-play/index'>
                        <Dropdown overlay={HisPlay}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.hisPlayCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>番剧</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/aimtron/index'>
                        <Dropdown overlay={Aimtron}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.aimtronCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>国创</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/music/index'>
                        <Dropdown overlay={Music}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.musicCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>音乐</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/dance/index'>
                        <Dropdown overlay={Dance}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.danceCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>舞蹈</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    
                    <Link className='link-color' to='/game/index'>
                        <Dropdown overlay={Game}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.gameCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>游戏</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/science/index'>
                        <Dropdown overlay={Science}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.scienceCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>科技</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/life/index'>
                        <Dropdown overlay={Life}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.lifeCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>生活</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/demon/index'>
                        <Dropdown overlay={Demon}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.demonCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>鬼畜</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/fashion/index'>
                        <Dropdown overlay={Fashion}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.fashionCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>时尚</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/advertising/index'>
                        <Dropdown overlay={Advertising}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.advertisingCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>广告</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/entertainment/index'>
                        <Dropdown overlay={Entertainment}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.entertainmentCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>娱乐</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/film/index'>
                        <Dropdown overlay={Film}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.filmCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>影视</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/screens/index'>
                        <Dropdown overlay={Screens}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><Badge style={badgeStyle} count={this.state.badgeCount.screensCount} showZero overflowCount={badgeOverflowCount}></Badge></Col>
                                    <Col className='note-color'>放映厅</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/column/index'>
                        <Col>
                            <Row>
                                <Col style={{textAlign:'center'}}><i className='iconfont-blue icon-qimaizhuanlan'></i></Col>
                                <Col className='note-color'>专栏</Col>
                            </Row>
                        </Col>
                    </Link>
                    <Link className='link-color' to='/square/index'>
                        <Dropdown overlay={squareNav}>   
                            <Col>
                                <Row>
                                    <Col style={{textAlign:'center'}}><i className='iconfont-zi icon-liebiaodaohang_guangchangwu'></i></Col>
                                    <Col className='note-color'>广场</Col>
                                </Row>
                            </Col>
                        </Dropdown>
                    </Link>
                    <Link className='link-color' to='/live/index'>
                        <Col>
                            <Row>
                                <Col style={{textAlign:'center'}}><i className='iconfont-hong icon-zhibo'></i></Col>
                                <Col className='note-color'>直播</Col>
                            </Row>
                        </Col>
                    </Link>
                    <Link className='link-color' to='/house/index'>
                        <Col>
                            <Row>
                                <Col style={{textAlign:'center'}}><i className='iconfont-huang icon-scale1'></i></Col>
                                <Col className='note-color'>小黑屋</Col>
                            </Row>
                        </Col>
                    </Link>
                    <Link className='link-color' to='/goods-job/index'>
                        <Col>
                        <img src={require('../../static/img/headNavR.gif')} title='图片' alt='图片不见了' />
                        </Col>
                    </Link>
                </Row>
            </div>
        );
    }
}


export default HomeNav