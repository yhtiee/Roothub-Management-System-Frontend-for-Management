import React,  {useContext, useEffect, useState}  from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./listInterns.scss"
import ListContext from '../../context/ListData';
import RetrieveContext from '../../context/retrieveContext'
import { useNavigate } from "react-router-dom";
import CreateContext from '../../context/CreateData'
import DeleteConfirmation from '../../components/deleteConfirm/DeleteConfirmation'
import AuthContext from '../../context/authContext'
// import 'react-bootstrap/dist/react-bootstrap.css'

// import { shouldForwardProp } from '@mui/styled-engine'

const ListInterns = () => {
  // let user = "smart"

  let {getInternsList} = useContext(ListContext)
  let {internsList} = useContext(ListContext)
  let {retrievedIntern} = useContext(RetrieveContext)
  let {retrievedInternData} = useContext(RetrieveContext)
  let {deleteIntern} = useContext(CreateContext)
  // let {user} = useContext(AuthContext)
  let user = "Uyo"
  let navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(false)

  function handleDeleteClick(event, params) {
    setDeleteId(params.row.id)
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handleModalConfirm() {
    deleteIntern(deleteId)
    setShowModal(false);
    window.location.reload()
  }

  
  let view = (event, params) => {
    // console.log(params.row.id)
    retrievedIntern(params.row.id)
    // navigate(`${params.row.id}`)
    console.log(retrievedInternData)
  
  }
  
  const columns = [
    {
      field: 'profile_picture',
      headerName: '',
      sortable: false,
      width: 70,
      renderCell: (params) => {
          return (
              <>
                <div className ="imageContainer">
                  <img className="cellImage" src={params.row.profile_picture} alt="profile" />
                </div>
              </>
          )
      }
    },
    { field: 'last_name', headerName: 'Last name', width: 130 },
    { field: 'first_name', headerName: 'First name', width: 130 },
    { field: 'email', headerName: 'Email', width: 270},
    // { field: 'phone_number', headerName: 'Phone Number', width: 130 },
    { field: 'attached_area', headerName: 'Attached Area', width: 150 },
    {field: "registrationDate", headerName: "Registration Date", width: 130},
    
    {
      field: 'action',
      headerName: 'Actions',
      sortable: false,
      width: 250,
      renderCell: (params) => {
          return (
              <>
                  <div className='actions'>
                      <a href="/Intern">
                        <button onClick={event => view(event, params)} className='view'>
                          View
                        </button>
                      </a>
                      <button onClick={event => handleDeleteClick(event, params)} className='delete'>
                          Delete
                      </button>
                      <a href="/editIntern">
                        <button onClick={event => view(event, params)} className='edit'>
                          Edit
                        </button>
                      </a>
                      <button className='move'>
                          Move
                      </button>
                  </div>
              </>
          )
      }
    },
  ];
  
  

  
  console.log(internsList)

  useEffect(() => {
   getInternsList(user)
  }, [])

  let data = {"rows":internsList, "columns":columns}
  return (
    <div className='listTrainees'>
      
      <Sidebar/>
      <div className="listTraineesContainer">
        <Navbar/>
        <div className="info">
          <h4> Interns </h4>
          <a href="/newIntern">
            <button> Add Intern</button>
          </a>
        </div>
        <DeleteConfirmation show={showModal} onHide={handleModalClose} onConfirm={handleModalConfirm}/>
        <Datatable value={data}/>
      </div>
    </div>
  )
}

export default ListInterns