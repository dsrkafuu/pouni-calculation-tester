import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// store
import { actionQuestionTypes } from '../../../../store/start/actions';
// antd
import { Slider, InputNumber } from 'antd';

/**
 * one question type
 * @param {string} typeText type name
 * @param {string} typeKey type key
 */
function QuestionType(props) {
  const dispatch = useDispatch();
  // get data from props
  const { typeText, typeKey } = props;
  // get question type numbers
  const number = useSelector((state) => state.getIn(['start', 'questionTypes', typeKey]));
  /**
   * update question types
   * @param {number} value
   */
  const updateQuestionTypes = (value) => {
    if (isNaN(value)) {
      return;
    }
    // dispatch update
    return dispatch(actionQuestionTypes({ [typeKey]: value }));
  };

  return (
    <div className="question-types-item">
      <span>{typeText}</span>
      <Slider min={0} max={10} value={number} onChange={updateQuestionTypes} />
      <InputNumber min={0} max={10} value={number} onChange={updateQuestionTypes} />
    </div>
  );
}

export default QuestionType;
