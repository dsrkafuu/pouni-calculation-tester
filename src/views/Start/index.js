import React from 'react';
// antd
import { Row, Col } from 'antd';
// css
import './index.scss';
// components
import QuestionType from './components/QuestionType';
import QuestionSettings from './components/QuestionSettings';
import QuestionCtrl from './components/QuestionCtrl';

function Start() {
  return (
    <div className="start">
      <Row gutter={[0, 32]}>
        <Col xs={24} md={8}>
          <div className="question-types">
            <h3>类型与数量调整</h3>
            <QuestionType typeText="填空题" typeKey="fillBlank" />
            <QuestionType typeText="判断题" typeKey="judge" />
            <QuestionType typeText="选择题" typeKey="select" />
          </div>
        </Col>
        <Col xs={24} md={8}>
          <QuestionSettings />
        </Col>
        <Col xs={24} md={8}>
          <QuestionCtrl />
        </Col>
      </Row>
    </div>
  );
}

export default Start;
