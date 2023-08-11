import { useState } from 'react';
import './App.css';
import JobsTable from './components/JobsTable';
import SearchForm from './components/SearchForm';
import { Spin } from 'antd';

function App() {
  const [tableData, setTableData] = useState([])
  const [tableLoading, setTableLoading] = useState(false)


  return (
    <div className="App">
      <SearchForm setTableData={setTableData} setTableLoading={setTableLoading}/>
      {tableLoading ? <Spin/> : <JobsTable tableData={tableData} />}
    </div>
  );
}

export default App;
