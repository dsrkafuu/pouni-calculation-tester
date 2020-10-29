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
  let ID;
  if (history[qHistory.length - 1]) {
    ID = history[qHistory.length - 1].historyID + 1;
  } else {
    ID = 0;
  }

  return (
    <div className="test-ctrl">
      <div className="crtl-wrapper">
        <Button
          size="large"
          icon={<RedoOutlined />}
          danger={true}
          onClick={() => {
            setLoading(true);
            return dispatch(actionAllQuestions(null));
          }}
        />
        <Popconfirm
          title="确定要提交答案吗?"
          onConfirm={() => {
            dispatch(actionSaveAllQuestion());
            message.success('提交成功');
            history.push(`/app/history/${ID}`);
          }}
          onCancel={() => message.error('已取消提交')}
        >
          <Button type="primary" size="large" icon={<LoginOutlined />} />
        </Popconfirm>
      </div>
    </div>
  );
}

export default TestCtrl;
