/* deps */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* css */
import 'normalize.css';
import './index.scss';
/* antd config provider */
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
/* views */
import Home from './views/Home';
import App from './App';

ReactDOM.render(
  <ConfigProvider autoInsertSpaceInButton={false} locale={zh_CN}>
    <Router>
      <Switch>
        <Route path="/app" component={App} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </ConfigProvider>,
  document.getElementById('root')
);
