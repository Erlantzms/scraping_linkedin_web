import { Table } from 'antd';

function JobsTable({tableData}) {
    const dataSource = tableData;
    
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Job Title',
        dataIndex: 'jobTitle',
        key: 'jobTitle',
      },
      {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
      },
      {
        title: 'Publication Date',
        dataIndex: 'publicationDate',
        key: 'publicationDate',
      },
      {
        title: 'Remote',
        dataIndex: 'remote',
        key: 'remote',
      },
      {
        title: 'Link',
        dataIndex: 'link',
        key: 'link',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      }
    ]

    return (     
      <Table dataSource={dataSource} columns={columns} />
    )
  }
  
export default JobsTable;