import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./newTrainees.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
import { useRef, useContext, useEffect } from 'react'
import CreateContext from '../../context/CreateData';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authContext';
import {useToast} from "@chakra-ui/toast"




const NewTrainees = () => {

  const toast = useToast()
  const [file, setFile] = useState("");
  const [selectedCourse, setSelectedCourse] = useState('Frontend Web Development');
  const [selectedDuration, setSelectedDuration] = useState('6 Months');
  const [selectedLevel, setSelectedLevel] = useState('Basic');

  const [selectedFee, setSelectedFee] = useState(120000);

  let {createTrainee} = useContext(CreateContext)
  let {msg} = useContext(CreateContext)

  let user = "Uyo"
  
  const handleChangeCourse = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleChangeDuration = (event) => {
    setSelectedDuration(event.target.value);
  };

  const handleChangeFee = (event) => {
    setSelectedFee(event.target.value);
  };

  const handleChangeLevel = (event) => {
    setSelectedLevel(event.target.value);
  };

  let first = useRef()
  let last = useRef()
  let other = useRef()
  let amount = useRef()
  let balance = useRef()
  let myfile = useRef()
  let location = useRef()
  let phone = useRef()
  let email = useRef()

  let submitForm = (e) => {
    e.preventDefault()
    // const Imagefile = new File([PH], PH);
    let firstName = first.current.value
    let lastName = last.current.value
    let otherName = other.current.value
    let Email = email.current.value
    let phoneNumber = phone.current.value
    let amountPaid = amount.current.value
    let Balance = selectedFee - amount.current.value
    console.log(Balance)
    let Duration = selectedDuration
    let Location = location.current.value
    let Course = selectedCourse
    let Fee = selectedFee
    let Level = selectedLevel
    let mypic = myfile.current.value
    // let pic = URL.createObjectURL(file)
    let formData = new FormData();
    formData.append("profile_picture", file);
    formData.append('first_name', firstName);
    formData.append("last_name", lastName);
    formData.append("other_names", otherName);
    formData.append("level", Level);
    formData.append("email", Email);
    formData.append("phone_number", phoneNumber);
    formData.append("course_learning", Course);
    formData.append("course_duration", Duration);
    formData.append("amount_paid", amountPaid);
    formData.append("balance", Balance);
    formData.append("location", Location);
    formData.append("training_fee", Fee);
    createTrainee(formData)
  }

  
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h4> Add New Trainee </h4>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
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
                <input type="text" required ref={last} />
              </div>
              <div className="formInput">
                <label>First Name</label>
                <input type="text" required ref={first}/>
              </div>
              <div className="formInput">
                <label>Other Name</label>
                <input type="text" required ref={other}/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" required ref={email}/>
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="number" required ref={phone}/>
              </div>
              <div className="formInput">
                <label>Course</label>
                <select id="course" name="course" value={selectedCourse} onChange={handleChangeCourse} >
                  <option value="Frontend Web Development">Frontend Web Development</option>
                  <option value="Backend Web Development">Backend Web Development</option>
                  <option value="Full Stack Web Development">Full Stack Web Development</option>
                  <option value="Visual Communications">Visual Communications</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="App Developement">App Developement</option>
                  <option value="Computer Basics">Computer Basics</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Photography">Photography</option>
                </select>
              </div>
              <div className="formInput">
                <label>Course Duration</label>
                <select id="course_duration" name="course_duration" value={selectedDuration} onChange={handleChangeDuration}>
                  <option value="6 Months">6 Months</option>
                  <option value="4 Months">4 Months</option>
                  <option value="3 Months">3 Months</option>
                  <option value="1 Month">1 Month</option>
                </select>
              </div>
              <div className="formInput">
                <label>Training Fee</label>
                <select id="training_fee" name="training_fee" value={selectedFee} onChange={handleChangeFee}>
                  <option value="120000">120000</option>
                  <option value="150000">150000</option>
                  <option value="180000">180000</option>
                  <option value="130000">130000</option>
                  <option value="40000">40000</option>
                </select>
              </div>
              <div className="formInput">
                <label>Level</label>
                <select id="level" name="level" value={selectedLevel} onChange={handleChangeLevel}>
                  <option value="Basic">Basic</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advance">Advance</option>
                </select>
              </div>
              <div className="formInput" style={{display:"none"}}>
                <label>Location</label>
                <input type="text" defaultValue={user} required ref={location} />
              </div>
              <div className="formInput">
                <label>Amount Paid</label>
                <input type="number" required ref={amount}/>
              </div>

              {/* <Link to="/trainees"> */}
                <button type='submit'>
                  Add
                </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewTrainees