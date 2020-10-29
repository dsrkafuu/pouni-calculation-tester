import React from 'react';
// antd
import { Divider } from 'antd';
import { CopyrightOutlined, AntDesignOutlined } from '@ant-design/icons';

/**
 * global footer
 * @param {boolean} divider
 */
function Footer(props) {
  return (
    <div className="footer">
      {props.divider && <Divider />}
      <div className="footer-content">
        <div>
          <CopyrightOutlined />
          <span>&nbsp;Copyright 2020 DSRKafuU | Apache-2.0 License</span>
        </div>
        <div>
          <AntDesignOutlined />
          <span>&nbsp;NJUPT B18030620</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
