
import { useEffect, useState } from 'react'
import './App.css'
import { fatchProjects } from './utils/api';
import Table from './components/Table';

function App() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getProjects() {
      setIsLoading(true);
      let projects = await fatchProjects();
      setTableData(projects);
      setIsLoading(false);
    }
    getProjects();
  }, [])
  return (
    <>
      <h1> Kikstarter Project </h1>
      {isLoading && <div> Loading... </div>}
      {!isLoading && <Table data={tableData}/>}
      

    </>
  )
}

export default App
