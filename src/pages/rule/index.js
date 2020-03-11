import React from 'react';
import { Table } from 'antd';
import './style.css';

const columns = [
  {
    title: '项目名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '版本',
    dataIndex: 'version',
    key: 'version',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>使用当前版本</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'site',
    version: '1.2.0',
  },
  {
    key: '2',
    name: 'site',
    version: '1.1.0',
  },
  {
    key: '3',
    name: '项目3',
    version: '1.0.0',
  },
]; 

function Rule() {
    return (
      <div className="rule_container">
          <Table columns={columns} dataSource={data} />
      </div>
    );
  }
  
  export default Rule;