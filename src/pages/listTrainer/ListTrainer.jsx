import React,  {useContext, useEffect, useState}  from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./listTrainers.scss"
import ListContext from '../../context/ListData';
import RetrieveContext from '../../context/retrieveContext'
import { Link, useNavigate } from "react-router-dom";
import CreateContext from '../../context/CreateData'
import DeleteConfirmation from '../../components/deleteConfirm/DeleteConfirmation'
import AuthContext from '../../context/authContext'

const ListTrainer = () => {
    let {getTrainersList} = useContext(ListContext)
    let {trainersList} = useContext(ListContext)
    let {retrievedTrainer} = useContext(RetrieveContext)
    let {retrievedTrainerData} = useContext(RetrieveContext)
    let {deleteTrainer} = useContext(CreateContext)
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
      deleteTrainer(deleteId)
      getTrainersList(user)
      setShowModal(false);
      window.location.reload()
    }
  
    
    let view = (event, params) => {
      retrievedTrainer(params.row.id)
      console.log(retrievedTrainerData)
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
      { field: "course_teaching", headerName: 'Course', width: 220 },
      {field: "registrationDate", headerName: "Registration Date", width: 150},
      { field: 'qualification', headerName: 'Qualification', width: 270 },
      {
        field: 'action',
        headerName: 'Actions',
        sortable: false,
        width: 250,
        renderCell: (params) => {
            return (
                <>
                    <div className='actions'>
                        <Link to="/trainer">
                          <button onClick={event => view(event, params)} className='view'>
                            View
                          </button>
                        </Link>
                        <button onClick={event => handleDeleteClick(event, params)} className='delete'>
                            Delete
                        </button>
                        <Link to="/editTrainer">
                          <button onClick={event => view(event, params)} className='edit'>
                            Edit
                          </button>
                        </Link>
                    </div>
                </>
            )
        }
      },
    ];
    
    useEffect(() => {
        getTrainersList(user)
        console.log(trainersList)
    }, [])
  
    let data = {"rows":trainersList, "columns":columns}
  return (
    <div className='listTrainees'>
      <Sidebar/>
      <div className="listTraineesContainer">
        <Navbar/>
        <div className="info">
          <h4> Trainers </h4>
          <Link to="/newTrainer">
            <button> Add Trainer</button>
          </Link>
        </div>
        <DeleteConfirmation show={showModal} onHide={handleModalClose} onConfirm={handleModalConfirm}/>
        <Datatable value={data}/>
      </div>
    </div>
  )
}

export default ListTrainer