/* deps */
import React from 'react';
import { Switch, Route, Link, useRouteMatch, withRouter, Redirect } from 'react-router-dom';
import { Menu } from 'antd';
import {
  SettingOutlined,
  FormOutlined,
  HistoryOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
/* views */

/**
 * 应用主界面
 */
const App = withRouter(({ history }) => {
  // router match
  const match = useRouteMatch();
  // DOM
  return (
    <div className="app">
      <Menu className="app-nav" mode="horizontal" selectedKeys={[history.location.pathname]}>
        <Menu.Item key={`${match.url}/start`}>
          <Link to={`${match.url}/start`}>
            <SettingOutlined />
            <span>开始</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={`${match.url}/test`}>
          <Link to={`${match.url}/test`}>
            <FormOutlined />
            <span>测试</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={`${match.url}/history`}>
          <Link to={`${match.url}/history`}>
            <HistoryOutlined />
            <span>历史记录</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={`${match.url}/about`}>
          <Link to={`${match.url}/about`}>
            <InfoCircleOutlined />
            <span>关于</span>
          </Link>
        </Menu.Item>
      </Menu>
      <div className="app-content">
        <Switch>
          <Route path={`${match.path}/start`}>开始</Route>
          <Route path={`${match.path}/test`}>测试</Route>
          <Route path={`${match.path}/history`}>历史记录</Route>
          <Route path={`${match.path}/about`}>关于</Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
});

export default App;
