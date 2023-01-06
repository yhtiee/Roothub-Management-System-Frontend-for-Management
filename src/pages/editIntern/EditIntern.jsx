import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./editIntern.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
import { useRef, useContext, useEffect } from 'react'
// import CreateContext from '../../context/CreateData';
import { useNavigate } from 'react-router-dom';
import UpdateContext from '../../context/updateContext';
import { idID } from '@mui/material/locale';
import AuthContext from '../../context/authContext';


const EditIntern = () => {

  const [file, setFile] = useState("");
  const [ImageFile, setFileImage] = useState(null);
  let {updateIntern} = useContext(UpdateContext)
  let navigate = useNavigate()
  let InternData = JSON.parse(localStorage.getItem("intern"))
  // let {user} = useContext(AuthContext)
  let user = "Uyo"


  let first = useRef()
  let last = useRef()
  let other = useRef()
  let myfile = useRef()
  let location = useRef()
  let phone = useRef()
  let email = useRef()
  let area = useRef()

  async function getFile() {
    const response = await fetch(InternData.profile_picture);
    const blob = await response.blob();
    return blob;
  }

  useEffect(() => {
    getFile().then(blob => {
      const fileImage = new File([blob], 'image.jpg', { type: 'image/jpeg' });
      setFileImage(fileImage);
    });
  }, []);

  let submitForm = (e) => {
    e.preventDefault()
    let firstName = first.current.value
    let lastName = last.current.value
    let otherName = other.current.value
    let Email = email.current.value
    let phoneNumber = phone.current.value
    let Area = area.current.value
    let Location = location.current.value
    let mypic = myfile.current.value
    // let pic = URL.createObjectURL(file)
    let userId = InternData.id
    let formData = new FormData();
    formData.append("profile_picture", file? file : ImageFile);
    formData.append('first_name', firstName);
    formData.append("last_name", lastName);
    formData.append("other_names", otherName);
    formData.append("email", Email);
    formData.append("phone_number", phoneNumber);
    formData.append("attached_area", Area);
    formData.append("location", Location);
    updateIntern(formData, userId)
    navigate("/listInterns")
   
  }


  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h4> Edit Existing Intern </h4>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
                file
                  ? URL.createObjectURL(file)
                  : InternData.profile_picture
              } alt="" />
          </div>
          <div className="right">
            <form onSubmit={submitForm} encType="multipart/form-data">
              <div className="formInput">
                <label htmlFor='file'> Image: <DriveFolderUploadIcon className='icon'/> </label>
                <input type="file" id='file' onChange={(e) => setFile(e.target.files[0])} style={{display:"none"}} ref={myfile}/>
              </div>
              <div className="formInput">
                <label>Last Name</label>
                <input type="text" required ref={last} defaultValue={InternData.last_name} />
              </div>
              <div className="formInput">
                <label>First Name</label>
                <input type="text" required ref={first} defaultValue={InternData.first_name}/>
              </div>
              <div className="formInput">
                <label>Other Name</label>
                <input type="text" required ref={other} defaultValue={InternData.other_names}/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" required ref={email} defaultValue={InternData.email}/>
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="number" required ref={phone} defaultValue={InternData.phone_number}/>
              </div>
              <div className="formInput">
                <label>Attcahed Area</label>
                <input type="text" required ref={area} defaultValue={InternData.attached_area}/>
              </div>
              <div className="formInput" style={{display:"none"}}>
                <label>Location</label>
                <input type="text" defaultValue={user} required ref={location} />
              </div>
              {/* <Link to="/trainees"> */}
                <button type='submit'>
                  Edit
                </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditIntern