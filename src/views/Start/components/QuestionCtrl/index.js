import React from 'react';
// antd
import { Button, Space } from 'antd';
import { RestOutlined, GithubOutlined } from '@ant-design/icons';

function QuestionCtrl() {
  return (
    <div className="question-ctrl">
      <h3>全局功能</h3>
      <Space>
        <Button icon={<RestOutlined />}>清除缓存</Button>
        <Button
          icon={<GithubOutlined />}
          href="https://github.com/amzrk2/pouni-calculation-tester"
          target="_blank"
        >
          GitHub
        </Button>
      </Space>
      <h3 className="question-ctrl-notice">提示</h3>
      <h4>小数开启</h4>
      <span>答案请化为与设置的位数相同的精度</span>
      <h4>负数和小数关闭</h4>
      <span>答案也将不会出现负数和小数</span>
    </div>
  );
}

export default QuestionCtrl;
