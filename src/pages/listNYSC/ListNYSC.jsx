import React,  {useContext, useEffect, useState}  from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./listNYSC.scss"
import ListContext from '../../context/ListData';
import RetrieveContext from '../../context/retrieveContext'
import { Link, useNavigate } from "react-router-dom";
import CreateContext from '../../context/CreateData'
import DeleteConfirmation from '../../components/deleteConfirm/DeleteConfirmation'
import AuthContext from '../../context/authContext'
// import 'react-bootstrap/dist/react-bootstrap.css'

// import { shouldForwardProp } from '@mui/styled-engine'

const ListNYSC = () => {
  // let user = "smart"

  let {getNYSCList} = useContext(ListContext)
  let {NYSCList} = useContext(ListContext)
  let {retrievedNYSC} = useContext(RetrieveContext)
  let {retrievedNYSCData} = useContext(RetrieveContext)
  let {deleteNYSC} = useContext(CreateContext)
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
    deleteNYSC(deleteId)
    setShowModal(false);
    window.location.reload()
  }

  
  let view = (event, params) => {
    // console.log(params.row.id)
    retrievedNYSC(params.row.id)
    // navigate(`${params.row.id}`)
    console.log(retrievedNYSCData)
  
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
                      <Link to="/NYSC">
                        <button onClick={event => view(event, params)} className='view'>
                          View
                        </button>
                      </Link>
                      <button onClick={event => handleDeleteClick(event, params)} className='delete'>
                          Delete
                      </button>
                      <Link to="/editingNYSC">
                        <button onClick={event => view(event, params)} className='edit'>
                          Edit
                        </button>
                      </Link>
                      <button className='move'>
                          Move
                      </button>
                  </div>
              </>
          )
      }
    },
  ];
  
  

  
  console.log(NYSCList)

  useEffect(() => {
   getNYSCList(user)
  }, [])

  let data = {"rows":NYSCList, "columns":columns}
  return (
    <div className='listTrainees'>
      
      <Sidebar/>
      <div className="listTraineesContainer">
        <Navbar/>
        <div className="info">
          <h4> NYSC </h4>
          <Link to="/newNYSC">
            <button> Add NYSC</button>
          </Link>
        </div>
        <DeleteConfirmation show={showModal} onHide={handleModalClose} onConfirm={handleModalConfirm}/>
        <Datatable value={data}/>
      </div>
    </div>
  )
}

export default ListNYSC