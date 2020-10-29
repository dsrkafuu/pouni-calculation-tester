import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// css
import 'normalize.css';
import './index.scss';
// antd
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
// store
import { Provider } from 'react-redux';
import store from './store';
// views
import Home from './views/Home';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider autoInsertSpaceInButton={false} locale={zh_CN}>
      <Router>
        <Switch>
          <Route path="/app" component={App} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
