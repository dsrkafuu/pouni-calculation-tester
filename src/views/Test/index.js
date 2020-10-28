import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// antd
import { Spin } from 'antd';
// css
import './index.scss';
// exp gens
import ExpGen from '../../plugins/ExpGen';
import genQuestions from '../../plugins/genQuestions';
// store
import { actionAllQuestions } from './store/actions';
// components
import TestSection from './components/TestSection';
import TestCtrl from './components/TestCtrl';

// exp generator
const expGen = new ExpGen();

function Test() {
  const dispatch = useDispatch();
  // get settings data
  const { fillBlank, judge, select } = useSelector((state) =>
    state.getIn(['start', 'questionTypes']).toJS()
  );
  const questionSettings = useSelector((state) =>
    state.getIn(['start', 'questionSettings']).toJS()
  );
  // get questions
  const { fillBlankQuestions, judgeQuestions, selectQuestions } = useSelector((state) => {
    return state.get('test').toJS();
  });
  // check question status
  const questionsAreEmpty = !(
    fillBlankQuestions.length > 0 ||
    judgeQuestions.length > 0 ||
    selectQuestions.length > 0
  );
  // question loading animation
  const [loading, setLoading] = useState(true);

  // update questions when data changed
  // and if currentQuestions been reset to {}
  // it will run again to gen new questions
  useEffect(() => {
    // if question arrays are empty
    if (questionsAreEmpty) {
      (async () => {
        const rawExps = await expGen.getExpressions(fillBlank + judge + select, questionSettings);
        const questions = genQuestions(rawExps, fillBlank, judge, select, questionSettings);
        setTimeout(() => {
          dispatch(actionAllQuestions(questions));
          setLoading(false);
        }, 500);
      })();
    } else {
      setLoading(false);
    }
  }, [dispatch, fillBlank, judge, questionSettings, questionsAreEmpty, select]);

  return (
    <div className="test">
      <Spin spinning={loading}>
        <div className="test-wrapper">
          <TestSection questions={fillBlankQuestions} questionType="fillBlank" />
          <TestSection questions={judgeQuestions} questionType="judge" />
          <TestSection questions={selectQuestions} questionType="select" />
        </div>
      </Spin>
      <TestCtrl setLoading={setLoading} />
    </div>
  );
}

export default Test;
