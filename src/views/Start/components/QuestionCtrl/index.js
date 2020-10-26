import React from 'react';
// antd
import { Button } from 'antd';
import { DeleteOutlined, RestOutlined, GithubOutlined } from '@ant-design/icons';

function QuestionCtrl() {
  return (
    <div className="question-ctrl">
      <h3>全局功能</h3>
      <Button icon={<RestOutlined />}>清除应用缓存</Button>
      <Button icon={<DeleteOutlined />}>清空所有应用数据</Button>
      <Button icon={<GithubOutlined />}>查看 GitHub 仓库</Button>
    </div>
  );
}

export default QuestionCtrl;
