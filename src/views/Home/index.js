import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import HomeChecked from '../../assets/svg/HomeChecked.svg';
import './index.scss';

/**
 * home page
 */
function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <img src={HomeChecked} className="home-title-logo" alt="Title Logo" />
        <h1 className="home-title-name">四则运算自测系统</h1>
        <div className="home-title-btns">
          <Space size="large">
            <Link to="/app/start" component={Button} type="primary" size="large">
              开始
            </Link>
            <Link to="/app/about" component={Button} size="large">
              关于
            </Link>
          </Space>
        </div>
      </div>
      <div className="home-footer">
        <span>Copyright DSRKafuU (B18030620) | Apache-2.0 License</span>
      </div>
    </div>
  );
}

export default Home;
