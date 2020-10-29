import React from 'react';
// css
import './index.scss';

// about page
function About() {
  return (
    <div className="about">
      <h2>四则运算自测系统</h2>
      <p>项目由 Create React App 创建。</p>
      <h3>项目日程</h3>
      <p>
        <ul>
          <li>2020-10-26: 基础架构/主页设计/存储架构/题目生成设置</li>
          <li>2020-10-27: 题目生成设置/路由设置/测试内容页面/表达式生成器</li>
          <li>2020-10-28: 答案检查器/历史页面样式/存储架构修改</li>
          <li>2020-10-29: 历史页面功能/用户体验优化/错误修复/图标优化</li>
        </ul>
      </p>
      <h3>开源依赖</h3>
      <p>
        <ul>
          <li>基础框架: React/React Router</li>
          <li>数据存储: Redux/Immutable.js</li>
          <li>样式: normalize.css/Ant Design/Sass</li>
          <li>其他: Math.js/dayjs/craco/cross-env</li>
        </ul>
      </p>
    </div>
  );
}

export default About;
