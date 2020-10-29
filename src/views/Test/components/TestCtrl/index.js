import React from 'react';
import { useHistory } from 'react-router-dom';
// store
import { useDispatch, useSelector } from 'react-redux';
import { actionAllQuestions, actionSaveAllQuestion } from '../../../../store/test/actions';
// antd
import { Button, Popconfirm, message } from 'antd';
import { RedoOutlined, LoginOutlined } from '@ant-design/icons';

/**
 * test control section
 * @param {object} props
 */
function TestCtrl(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  // get props
  const { setLoading } = props;
  // get history
  const qHistory = useSelector((state) => state.getIn(['test', 'history']).toJS());
  // gen id jump to
  let ID;
  if (qHistory[qHistory.length - 1]) {
    ID = qHistory[qHistory.length - 1].historyID + 1;
  } else {
    ID = 0;
  }

  return (
    <div className="test-ctrl">
      <div className="crtl-wrapper">
        <Popconfirm
          placement="bottom"
          title="确定要重新生成题目吗"
          onConfirm={() => {
            setLoading(true);
            dispatch(actionAllQuestions(null));
            message.success('已重新生成');
          }}
        >
          <Button size="large" icon={<RedoOutlined />} danger={true} />
        </Popconfirm>
        <Popconfirm
          placement="bottom"
          title="确定要提交答案吗"
          onConfirm={() => {
            dispatch(actionSaveAllQuestion());
            message.success('提交成功');
            history.push(`/app/history/${ID}`);
          }}
        >
          <Button type="primary" size="large" icon={<LoginOutlined />} />
        </Popconfirm>
      </div>
    </div>
  );
}

export default TestCtrl;
