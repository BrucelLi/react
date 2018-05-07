import React  from 'react';
// 加载顶部公共模板
import HomeTopLayer from '../../components/layer/HomeTopLayer';
// 加顶部导航模板
import HomeNav from '../../components/nav/HomeNav';

class HomeIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <div>
                <HomeTopLayer />
                <HomeNav />
            </div>
        );
    }
}

export default HomeIndex