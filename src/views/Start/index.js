import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// antd
import { Row, Col, Slider, InputNumber } from 'antd';
// css
import './index.scss';
// store
import { actionUpdateQuestionTypes } from './store/actions';

function Start() {
  const dispatch = useDispatch();
  // get question type numbers
  const questionTypes = useSelector((state) => state.start.questionTypes);
  /**
   * update question types
   * @param {number} value
   * @param {string} key
   */
  const updateQuestionTypes = (value, key) => {
    if (isNaN(value)) {
      return;
    }
    dispatch(actionUpdateQuestionTypes({ [key]: value }));
  };

  return (
    <div className="start">
      <Row gutter={[0, 32]}>
        <Col span={8}>
          <div className="question-types">
            <h3>题目数量调整</h3>
            <div className="question-types-item">
              <span>填空题</span>
              <Slider
                min={0}
                max={10}
                value={questionTypes.fillBlank}
                onChange={(value) => updateQuestionTypes(value, 'fillBlank')}
              />
              <InputNumber
                min={0}
                max={10}
                value={questionTypes.fillBlank}
                onChange={(value) => updateQuestionTypes(value, 'fillBlank')}
              />
            </div>
            <div className="question-types-item">
              <span>判断题</span>
              <Slider
                min={0}
                max={10}
                value={questionTypes.judge}
                onChange={(value) => updateQuestionTypes(value, 'judge')}
              />
              <InputNumber
                min={0}
                max={10}
                value={questionTypes.judge}
                onChange={(value) => updateQuestionTypes(value, 'judge')}
              />
            </div>
            <div className="question-types-item">
              <span>选择题</span>
              <Slider
                min={0}
                max={10}
                value={questionTypes.select}
                onChange={(value) => updateQuestionTypes(value, 'select')}
              />
              <InputNumber
                min={0}
                max={10}
                value={questionTypes.select}
                onChange={(value) => updateQuestionTypes(value, 'select')}
              />
            </div>
          </div>
        </Col>
        <Col span={8} />
        <Col span={8} />
      </Row>
    </div>
  );
}

export default Start;
