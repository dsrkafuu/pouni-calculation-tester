// deps
import React from 'react';
import { Switch, Route, Link, useRouteMatch, withRouter, Redirect } from 'react-router-dom';
import { Menu } from 'antd';
import {
  SettingOutlined,
  FormOutlined,
  HistoryOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
// views
import Footer from './components/Footer';
import Start from './views/Start';
import Test from './views/Test';
import History from './views/History';

/**
 * app main page
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
          <Route path={`${match.path}/test`} component={Test} />
          <Route path={`${match.path}/history`} component={History} />
          <Route path={`${match.path}/about`}>关于</Route>
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer divider={true} />
    </div>
  );
});

export default App;
