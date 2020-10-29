import React from 'react';
// antd
import { Button, Space } from 'antd';
import { RestOutlined, GithubOutlined } from '@ant-design/icons';

// question control question
function QuestionCtrl() {
  return (
    <div className="question-ctrl">
      <h3 className="question-ctrl-func">全局功能</h3>
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
      <h4>负数/小数/数值范围</h4>
      <span>这些设置项对生成的答案同样有效</span>
    </div>
  );
}

export default QuestionCtrl;
