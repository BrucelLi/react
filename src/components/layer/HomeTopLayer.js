import React from 'react'
// antd组件引入
import {Row, Col} from 'antd';
// antd样式引入
import 'antd/dist/antd.css';
// 顶部层样式引入
import '../../static/style/homeTopLayer.styl'; 

class GameHidden extends React.Component{
    render() {
        if(this.props.value === 0) {
        return null;
        } else {
            return (
                <div>{this.props.value}</div>
              );
        }            
      }
}  

export default class HomeTopLayer extends React.Component{

    constructor() {
        super();
        this.state = {
            'topHiddenState':{
                'game':0,
                'live':0,
                'app':0
            }
        };
    }
    

    changeHiddenState(type, state)
    {
        const topHiddenState = this.state.topHiddenState;
        switch(type)
        {
            case 'game':
                topHiddenState.game = state;
                break;
            case 'live':
                topHiddenState.live = state;
                break;
            case 'app':
                topHiddenState.app = state;
                break;
            default:
                break;
        }
        this.setState({'topHiddenState': topHiddenState});
        console.log(this.state.topHiddenState)
    }
    test1(msg)
    {
        console.log(msg)
    }
    render(){
        return(
            <div>   
                <div id='topLayer'>
                    <div className='top-layer-top'>
                        <div className='top-layer-label'>
                           <div className='content-with top-layer-label-box'>
                                <Row className='fl'>
                                    <Col onMouseOver={()=> this.changeHiddenState('app', 1)} onMouseOut={()=>this.changeHiddenState('app', 0)} className='fl top-layer-label-left-nav hand' title='主站'><i className='iconfont icon-tv'></i>主站</Col>
                                    <Col onClick={() => this.test1('111')} className='fl top-layer-label-left-nav hand' title='画友'>画友</Col>
                                    <Col className='fl top-layer-label-left-nav hand' title='游戏中心'>游戏中心</Col>
                                    <Col className='fl top-layer-label-left-nav hand' title='直播'>直播</Col>
                                    <Col className='fl top-layer-label-left-nav hand' title='会员购'>会员购</Col>
                                    <Col className='fl top-layer-label-left-nav hand' title='下载APP'><i className='iconfont icon-shouji'></i>下载APP</Col>
                                </Row>
                                
                                <Row className='fr'>
                                    <Col className='fl top-layer-label-left-nav hand'>头像</Col>
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
                        bottom
                    </div>
                </div> 
                <GameHidden value={this.state.topHiddenState.app} />  
            </div>
        );
    }
}