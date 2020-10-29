import React from 'react';
import { Link } from 'react-router-dom';
// antd
import { Button, Space } from 'antd';
// css
import HomeChecked from '../../assets/svg/HomeChecked.svg';
import './index.scss';
// comps
import Footer from '../../components/Footer';

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
      <Footer divider={false} />
    </div>
  );
}

export default Home;
