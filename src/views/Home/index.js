import { Button } from 'antd';
import { Link } from 'react-router-dom';
import ReactLogo from '../../assets/svg/ReactLogo.svg';
import HomeChecked from '../../assets/svg/HomeChecked.svg';
import './index.scss';

/**
 * 主页/引导页
 */
function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <img src={HomeChecked} className="home-title-logo" alt="Title Logo" />
        <h1 className="home-title-name">四则运算自测系统</h1>
        <div className="home-title-btns">
          <Link to="/app" component={Button} type="primary" size="large">
            开始
          </Link>
          <Link to="/about" component={Button} size="large">
            关于
          </Link>
        </div>
      </div>
      <div className="home-footer">
        <span>Copyright DSRKafuU (B18030620) | Apache-2.0 License</span>
        <img src={ReactLogo} className="home-footer-logo" alt="React Logo" />
      </div>
    </div>
  );
}

export default Home;
