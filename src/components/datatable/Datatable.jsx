import React, { useEffect } from 'react'
import "./datatable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { useContext } from 'react';
import ListContext from '../../context/ListData';

const Datatable = (props) => {
  let {dataFetched} = useContext(ListContext)

  useEffect(() => {
    console.log(dataFetched)
  }, [])
  return (
    
    <div className='datatable'>
        <DataGrid
        rows={props.value.rows}
        columns={props.value.columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
      />
    </div>
  )
}

export default Datatable