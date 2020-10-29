import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
// dayjs
import * as dayjs from 'dayjs';
// store
import { useSelector, useDispatch } from 'react-redux';
import { actionRemoveHistory, actionLoadHistory } from '../../store/test/actions';
// antd
import { Table, Button, Space, Popconfirm, message } from 'antd';
import {
  CloudDownloadOutlined,
  CloudUploadOutlined,
  DeleteOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';
// css
import './index.scss';
// file loader and saver
import CustomFile from '../../plugins/CustomFile';
const cf = new CustomFile();

function HistoryIndex() {
  const dispatch = useDispatch();
  // get router match
  const match = useRouteMatch();
  // get all history
  const history = useSelector((state) => {
    return state.getIn(['test', 'history']).toJS();
  });

  return (
    <div className="history-index">
      <div className="history-wrapper">
        <Table
          dataSource={history}
          rowKey={(record) => record.historyID}
          pagination={false}
          size="small"
          tableLayout="fixed"
        >
          <Table.Column
            title="ID"
            dataIndex="historyID"
            key="historyID"
            align="center"
            width="15%"
          />
          <Table.Column
            title="日期/时间"
            key="date"
            align="center"
            render={(value) => dayjs(value.date).format('YYYY-MM-DD HH:mm')}
          />
          <Table.Column
            title="正确率"
            dataIndex="correctRate"
            key="correctRate"
            align="center"
            width="20%"
          />
          <Table.Column
            title="控制"
            key="control"
            align="center"
            render={(record) => (
              <Space>
                <Link
                  to={`${match.path}/${record.historyID}`}
                  component={Button}
                  type="primary"
                  icon={<FileDoneOutlined />}
                >
                  详情
                </Link>
                <Popconfirm
                  placement="bottom"
                  title="确定要删除本条记录吗"
                  onConfirm={() => {
                    dispatch(actionRemoveHistory(record.historyID));
                    message.success('已删除本条记录');
                  }}
                  onCancel={() => message.error('已取消删除本条记录')}
                >
                  <Button danger={true} icon={<DeleteOutlined />}>
                    删除
                  </Button>
                </Popconfirm>
              </Space>
            )}
          />
        </Table>
      </div>
      <div className="history-ctrl">
        <div className="crtl-wrapper">
          <Button
            size="large"
            icon={<CloudUploadOutlined />}
            onClick={async () => {
              const obj = await cf.load();
              dispatch(actionLoadHistory(obj));
            }}
          />
          <Button
            type="primary"
            size="large"
            icon={<CloudDownloadOutlined />}
            onClick={() => cf.save(history)}
          />
        </div>
      </div>
    </div>
  );
}

export default HistoryIndex;
