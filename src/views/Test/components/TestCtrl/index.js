import React from 'react';
import { useDispatch } from 'react-redux';
// antd
import { Button } from 'antd';
import { RedoOutlined, LoginOutlined } from '@ant-design/icons';
// store
import { actionAllQuestions, actionSaveAllQuestion } from '../../../../store/test/actions';

/**
 * test control section
 * @param {object} props
 */
function TestCtrl(props) {
  const dispatch = useDispatch();
  // get props
  const { setLoading } = props;

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
        <Button
          type="primary"
          size="large"
          icon={<LoginOutlined />}
          onClick={() => dispatch(actionSaveAllQuestion())}
        />
      </div>
    </div>
  );
}

export default TestCtrl;
