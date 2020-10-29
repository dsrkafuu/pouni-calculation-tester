import React from 'react';
import { useHistory } from 'react-router-dom';
// antd
import { Button, Popconfirm, message } from 'antd';
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
  const h = useHistory();

  return (
    <div className="history-ctrl">
      <div className="crtl-wrapper">
        <Popconfirm
          placement="bottom"
          title="确定要删除本条记录吗"
          onConfirm={() => {
            dispatch(actionRemoveHistory(historyID));
            h.push('/app/history');
            message.success('已删除本条记录');
          }}
          onCancel={() => message.error('已取消删除本条记录')}
        >
          <Button size="large" icon={<DeleteOutlined />} danger={true} />
        </Popconfirm>
        <Button type="primary" size="large" icon={<ShareAltOutlined />} />
      </div>
    </div>
  );
}

export default HistoryCtrl;
