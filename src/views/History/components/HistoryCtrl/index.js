import React from 'react';
// antd
import { Button } from 'antd';
import { DeleteOutlined, ShareAltOutlined } from '@ant-design/icons';
// store
import { useDispatch } from 'react-redux';
import { actionRemoveHistory } from '../../../../store/test/actions';

/**
 * history control section
 * @param {string} historyID
 */
function HistoryCtrl(props) {
  const dispatch = useDispatch();
  const { historyID } = props;

  return (
    <div className="history-ctrl">
      <div className="crtl-wrapper">
        <Button
          size="large"
          icon={<DeleteOutlined />}
          danger={true}
          onClick={() => dispatch(actionRemoveHistory(historyID))}
        />
        <Button type="primary" size="large" icon={<ShareAltOutlined />} />
      </div>
    </div>
  );
}

export default HistoryCtrl;
