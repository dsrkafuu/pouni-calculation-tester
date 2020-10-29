import React from 'react';
import { useParams } from 'react-router-dom';
// store
import { useSelector } from 'react-redux';
// antd
import { Table, Button } from 'antd';
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  CloudDownloadOutlined,
} from '@ant-design/icons';
// css
import './index.scss';

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
 * @param {boolean} ans
 */
const renderAnswer = (ans) => (ans ? <CheckOutlined /> : <CloseOutlined />);

function History() {
  // get current history id
  const { historyID } = useParams();
  // get data of this id
  const allHistory = useSelector((state) => state.getIn(['test', 'history']).toJS());
  let history;
  allHistory.forEach((val) => {
    console.log(val.historyID, historyID);
    if (val.historyID === +historyID) {
      history = val;
    }
  });
  // get questions
  let fillBlankQuestions, judgeQuestions, selectQuestions;
  if (history) {
    fillBlankQuestions = history.historyQuestions.fillBlankQuestions;
    judgeQuestions = history.historyQuestions.judgeQuestions;
    selectQuestions = history.historyQuestions.selectQuestions;
  }

  return (
    <div className="history">
      <div className="history-wrapper">
        <Table
          dataSource={fillBlankQuestions}
          rowKey={(record) => record.index}
          pagination={false}
          size="small"
          tableLayout="fixed"
        >
          <Table.Column title="填空题目" dataIndex="exp" key="exp" align="center" width="50%" />
          <Table.Column title="正确答案" dataIndex="ans" key="ans" align="center" />
          <Table.Column title="你的答案" dataIndex="userAns" key="userAns" align="center" />
          <Table.Column
            title="状态"
            key="status"
            align="center"
            render={(record) => renderStatus(record.status)}
            width="10%"
          />
        </Table>
        <Table
          dataSource={judgeQuestions}
          rowKey={(record) => record.index}
          pagination={false}
          size="small"
          tableLayout="fixed"
        >
          <Table.Column title="判断题目" dataIndex="exp" key="exp" align="center" width="50%" />
          <Table.Column
            title="正确答案"
            dataIndex="ans"
            key="ans"
            align="center"
            render={(record) => renderAnswer(record.ans)}
          />
          <Table.Column
            title="你的答案"
            key="userAns"
            align="center"
            render={(record) => renderAnswer(record.userAns)}
          />
          <Table.Column
            title="状态"
            key="status"
            align="center"
            render={(record) => renderStatus(record.status)}
            width="10%"
          />
        </Table>
        <Table
          dataSource={selectQuestions}
          rowKey={(record) => record.index}
          pagination={false}
          size="small"
          tableLayout="fixed"
        >
          <Table.Column title="选择题目" dataIndex="exp" key="exp" align="center" width="50%" />
          <Table.Column title="正确答案" dataIndex="ans" key="ans" align="center" />
          <Table.Column title="你的答案" dataIndex="userAns" key="userAns" align="center" />
          <Table.Column
            title="状态"
            key="status"
            align="center"
            render={(record) => renderStatus(record.status)}
            width="10%"
          />
        </Table>
      </div>
      <div className="history-ctrl">
        <div className="crtl-wrapper">
          <Button size="large" icon={<DeleteOutlined />} danger={true} />
          <Button type="primary" size="large" icon={<CloudDownloadOutlined />} />
        </div>
      </div>
    </div>
  );
}

export default History;
