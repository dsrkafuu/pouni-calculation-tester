import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// antd
import { Table, Input, Radio } from 'antd';
// css
import './index.scss';
// exp gens
import ExpGen from '../../plugins/ExpGen';
import genQuestions from '../../plugins/genQuestions';
// store
import {
  actionAllQuestions,
  actionFillBlankQuestions,
  actionJudgeQuestions,
  actionSelectQuestions,
} from './store/actions';

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

  const questionsAreEmpty = !(
    fillBlankQuestions.length > 0 ||
    judgeQuestions.length > 0 ||
    selectQuestions.length > 0
  );

  // update questions when data changed
  // and if currentQuestions been reset to {}
  // it will run again to gen new questions
  useEffect(() => {
    console.log(questionsAreEmpty);
    // if question arrays are empty
    if (questionsAreEmpty) {
      (async () => {
        const rawExps = await expGen.getExpressions(fillBlank + judge + select, questionSettings);
        const questions = genQuestions(rawExps, fillBlank, judge, select);
        dispatch(actionAllQuestions(questions));
      })();
    }
  }, [dispatch, fillBlank, judge, questionSettings, questionsAreEmpty, select]);

  return (
    <div className="test">
      <button
        onClick={() =>
          dispatch(
            actionAllQuestions({ fillBlankQuestions: [], judgeQuestions: [], selectQuestions: [] })
          )
        }
      >
        测试
      </button>
      <Table dataSource={fillBlankQuestions} rowKey={(record) => record.index}>
        <Table.Column title="题目" dataIndex="exp" key="exp" />
        <Table.Column
          title="填空"
          key="userAns"
          render={(record) => (
            <Input
              value={record.userAns}
              onChange={(e) => {
                const value = e.target.value;
                dispatch(actionFillBlankQuestions({ index: record.index, answer: value }));
              }}
            />
          )}
        />
      </Table>
      <Table dataSource={judgeQuestions} rowKey={(record) => record.index}>
        <Table.Column title="题目" dataIndex="exp" key="exp" />
        <Table.Column
          title="判断"
          key="userAns"
          render={(record) => (
            <Radio.Group
              optionType="button"
              options={[
                { label: '正确', value: true },
                { label: '错误', value: false },
              ]}
              value={record.userAns}
              onChange={(e) => {
                const value = e.target.value;
                dispatch(actionJudgeQuestions({ index: record.index, answer: value }));
              }}
            />
          )}
        />
      </Table>
      <Table dataSource={selectQuestions} rowKey={(record) => record.index}>
        <Table.Column title="题目" dataIndex="exp" key="exp" />
        <Table.Column
          title="选择"
          key="userAns"
          render={(record) => (
            <Radio.Group
              options={[
                { label: record.selections[0], value: 0 },
                { label: record.selections[1], value: 1 },
                { label: record.selections[2], value: 2 },
              ]}
              value={record.userAns}
              onChange={(e) => {
                const value = e.target.value;
                dispatch(actionSelectQuestions({ index: record.index, answer: value }));
              }}
            />
          )}
        />
      </Table>
    </div>
  );
}

export default Test;
