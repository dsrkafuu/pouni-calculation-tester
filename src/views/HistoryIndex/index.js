import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// antd
import { Table, Button, Space } from 'antd';
import { useRouteMatch, Link } from 'react-router-dom';
// store
import { actionRemoveHistory } from '../../store/test/actions';

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
      <Table
        dataSource={history}
        rowKey={(record) => record.historyID}
        pagination={false}
        size="small"
        tableLayout="fixed"
      >
        <Table.Column title="ID" dataIndex="historyID" key="historyID" align="center" />
        <Table.Column
          title="控制"
          key="control"
          align="center"
          render={(value, record, index) => (
            <Space>
              <Link to={`${match.path}/${record.historyID}`} component={Button} type="primary">
                详情
              </Link>
              <Button danger={true} onClick={() => dispatch(actionRemoveHistory(index))}>
                删除
              </Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}

export default HistoryIndex;
