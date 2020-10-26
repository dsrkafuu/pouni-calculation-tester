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
import Start from './views/Start';

/**
 * 应用主界面
 */
const App = withRouter(({ history }) => {
  // router match
  const match = useRouteMatch();
  // menu items
  const menuItems = [
    {
      key: 'start',
      icon: <SettingOutlined />,
      text: '开始',
    },
    {
      key: 'test',
      icon: <FormOutlined />,
      text: '测试',
    },
    {
      key: 'history',
      icon: <HistoryOutlined />,
      text: '历史记录',
    },
    {
      key: 'about',
      icon: <InfoCircleOutlined />,
      text: '关于',
    },
  ];
  // DOM
  return (
    <div className="app">
      <Menu className="app-nav" mode="horizontal" selectedKeys={[history.location.pathname]}>
        {menuItems.map((val) => (
          <Menu.Item key={`${match.url}/${val.key}`}>
            <Link to={`${match.url}/${val.key}`}>
              {val.icon}
              <span>{val.text}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
      <div className="app-content">
        <Switch>
          <Route path={`${match.path}/start`} component={Start} />
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
