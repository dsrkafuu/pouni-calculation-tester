import React from 'react';
// antd
import { Button } from 'antd';
import { DeleteOutlined, ShareAltOutlined } from '@ant-design/icons';

// history control section
function HistoryCtrl() {
  return (
    <div className="history-ctrl">
      <div className="crtl-wrapper">
        <Button size="large" icon={<DeleteOutlined />} danger={true} />
        <Button type="primary" size="large" icon={<ShareAltOutlined />} />
      </div>
    </div>
  );
}

export default HistoryCtrl;
