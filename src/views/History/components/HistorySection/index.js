import React from 'react';
// antd
import { Table } from 'antd';
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';

/**
 * status render
 * @param {boolean} status
 */
const renderStatus = (status) =>
  status ? (
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  ) : (
    <CloseCircleTwoTone twoToneColor="#ff7875" />
  );
/**
 * answer render
 * fix: prevent null rendered to CloseOutlined
 * @param {boolean} ans
 */
const renderAnswer = (ans) => (ans === false ? <CloseOutlined /> : <CheckOutlined />);

/**
 * gen a history selection
 * @param {object} questions question array
 * @param {object} questionType question type of this array
 */
function HistorySection(props) {
  // get props
  const { questions, questionType } = props;

  // check question type
  let columnTitle = '';
  let ansRender = null;
  let userAnsRender = null;
  // gen different columns
  if (questionType === 'fillBlank') {
    columnTitle = '填空题目';
    ansRender = 'ans';
    userAnsRender = 'userAns';
  } else if (questionType === 'judge') {
    columnTitle = '判断题目';
    ansRender = (record) => renderAnswer(record.ans);
    userAnsRender = (record) => renderAnswer(record.userAns);
  } else {
    columnTitle = '选择题目';
    ansRender = (record) => record.selections[record.ans];
    userAnsRender = (record) => record.selections[record.userAns];
  }

  return (
    <Table
      dataSource={questions}
      rowKey={(record) => record.index}
      pagination={false}
      size="small"
      tableLayout="fixed"
    >
      <Table.Column title={columnTitle} dataIndex="exp" key="exp" align="center" width="50%" />
      <Table.Column
        title="正确答案"
        key="ans"
        align="center"
        dataIndex={typeof ansRender === 'string' ? ansRender : null}
        render={typeof ansRender === 'function' ? ansRender : null}
      />
      <Table.Column
        title="你的答案"
        key="userAns"
        align="center"
        dataIndex={typeof userAnsRender === 'string' ? userAnsRender : null}
        render={typeof userAnsRender === 'function' ? userAnsRender : null}
      />
      <Table.Column
        title="状态"
        key="status"
        align="center"
        render={(record) => renderStatus(record.status)}
        width="10%"
      />
    </Table>
  );
}

export default HistorySection;
