import { useState } from 'react';
import { ProTable } from "@ant-design/pro-components";
import { Table } from "@/components/Table";
import { Button } from 'antd';
import { columns } from './fields';

function TableDemo() {
  const [name, setName] = useState('');
  const nextFields = name === 'tudousi' ? [
    {
      title: '标题-更新的',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true,
    }
  ] : undefined;
  
  const handleUpdateName = () => {
    setName('tudousi')
  }
  
  return (
    <div>
      TableDemo
      <Button onClick={handleUpdateName}>更新 {name}</Button>
      <Table
        columns={columns}
        nextFields={nextFields}
        dataSource={[{ title: 'title 1', state: 'closed', progress: 80}, { title: 'title 2', state: 'open'}]}
      />
    </div>
  )
}

export default TableDemo;