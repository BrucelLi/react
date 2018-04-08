import ReactDOM from 'react-dom';

// 加载路由
import route from './route';

// 加载公共样式
import './static/style/common.styl';


  ReactDOM.render(
    route,
    document.getElementById('root')
  );

  