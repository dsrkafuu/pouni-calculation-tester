import React from 'react';
import { useDispatch } from 'react-redux';
// antd
import { Table, Input, Radio } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
// store
import {
  actionFillBlankQuestions,
  actionJudgeQuestions,
  actionSelectQuestions,
} from '../../../../store/test/actions';

/**
 * gen a test selection
 * @param {object} props
 */
function TestSection(props) {
  const dispatch = useDispatch();
  // get props
  const { questions, questionType } = props;

  // check question type
  let columnTitle = '';
  let columnRender = null;
  if (questionType === 'fillBlank') {
    columnTitle = '填空';
    columnRender = (record) => (
      <Input
        value={record.userAns}
        onChange={(e) => {
          const value = e.target.value;
          dispatch(actionFillBlankQuestions({ index: record.index, answer: value }));
        }}
      />
    );
  } else if (questionType === 'judge') {
    columnTitle = '判断';
    columnRender = (record) => (
      <Radio.Group
        className="radio-group-judge"
        optionType="button"
        options={[
          {
            label: <CheckOutlined />,
            value: true,
          },
          {
            label: <CloseOutlined />,
            value: false,
          },
        ]}
        value={record.userAns}
        onChange={(e) => {
          const value = e.target.value;
          dispatch(actionJudgeQuestions({ index: record.index, answer: value }));
        }}
      />
    );
  } else {
    columnTitle = '选择';
    columnRender = (record) => (
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
    );
  }

  return (
    <div className="test-section">
      <Table
        dataSource={questions}
        rowKey={(record) => record.index}
        pagination={false}
        size="middle"
        tableLayout="fixed"
      >
        <Table.Column title="题目" dataIndex="exp" key="exp" align="right" width="60%" />
        <Table.Column title={columnTitle} key="userAns" render={columnRender} />
      </Table>
    </div>
  );
}

export default TestSection;
