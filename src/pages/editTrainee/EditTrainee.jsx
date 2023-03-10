import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./editTrainee.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
import { useRef, useContext, useEffect } from 'react'
// import CreateContext from '../../context/CreateData';
import { useNavigate } from 'react-router-dom';
import UpdateContext from '../../context/updateContext';
import { idID } from '@mui/material/locale';
import AuthContext from '../../context/authContext';


const EditTrainee = () => {

  let traineeData = JSON.parse(localStorage.getItem("trainee"))
  const [file, setFile] = useState("");
  const [ImageFile, setFileImage] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(traineeData.course_learning);
  const [selectedDuration, setSelectedDuration] = useState(traineeData.course_duration);
  const [selectedFee, setSelectedFee] = useState(traineeData.training_fee);
  const [selectedLevel, setSelectedLevel] = useState(traineeData.level);
  const [calculatedBalance, setBalance] = useState(null);
  const [newState, setNew] = useState(false);
  const [totalAmount, setTotalAmount] = useState(null);

  


  let {updateTrainee} = useContext(UpdateContext)
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

  async function getFile() {
    const response = await fetch(traineeData.profile_picture);
    const blob = await response.blob();
    return blob;
  }

  useEffect(() => {
    getFile().then(blob => {
      const fileImage = new File([blob], 'image.jpg', { type: 'image/jpeg' });
      setFileImage(fileImage);
    });
    console.log(traineeData.training_fee)
  }, []);

  let changeState = (e) => [
    setNew(true)
  ]

  let calcBalance = (e) => {
    let Fee = selectedFee
    let amountPaid = amount.current.value
    console.log(amountPaid)
    let total = parseFloat(amountPaid) + parseFloat(traineeData.amount_paid)
    console.log(total)
    let Balance = Fee - total
    setBalance(Balance)
    setTotalAmount(total)
  }

  let submitForm = (e) => {
    e.preventDefault()
    if(newState){
      calcBalance()
    }
    let firstName = first.current.value
    let lastName = last.current.value
    let otherName = other.current.value
    let Email = email.current.value
    let phoneNumber = phone.current.value
    let amountPaid = newState? totalAmount : amount.current.value
    let Balance = newState? calculatedBalance : traineeData.balance
    let Duration = selectedDuration
    let Location = location.current.value
    let Course = selectedCourse
    let Fee = selectedFee
    let Level = selectedLevel
    let userId = traineeData.id
    console.log(ImageFile)
    console.log(file)

    let formData = new FormData();
    formData.append("profile_picture", file? file : ImageFile);
    formData.append('first_name', firstName);
    formData.append("last_name", lastName);
    formData.append("other_names", otherName);
    formData.append("email", Email);
    formData.append("level", Level);
    formData.append("phone_number", phoneNumber);
    formData.append("course_learning", Course);
    formData.append("course_duration", Duration);
    formData.append("amount_paid", amountPaid);
    formData.append("balance", Balance);
    formData.append("location", Location);
    formData.append("training_fee", Fee);
    updateTrainee(formData, userId)
  }

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h4> Edit Existing Trainee </h4>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
                file
                  ? URL.createObjectURL(file)
                  : traineeData.profile_picture
              } alt="alt"/>
          </div>
          <div className="right">
            <form onSubmit={submitForm} encType="multipart/form-data">
              <div className="formInput">
                <label htmlFor='file'> Image: <DriveFolderUploadIcon className='icon'/> </label>
                <input type="file" id='file' onChange={(e) => setFile(e.target.files[0])} style={{display:"none"}} ref={myfile}/>
              </div>
              <div className="formInput">
                <label>Last Name</label>
                <input type="text" required ref={last} defaultValue={traineeData.last_name} />
              </div>
              <div className="formInput">
                <label>First Name</label>
                <input type="text" required ref={first} defaultValue={traineeData.first_name}/>
              </div>
              <div className="formInput">
                <label>Other Name</label>
                <input type="text" required ref={other} defaultValue={traineeData.other_names}/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" required ref={email} defaultValue={traineeData.email}/>
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="number" required ref={phone} defaultValue={traineeData.phone_number}/>
              </div>
              <div className="formInput">
                <label>Course</label>
                <select id="course" name="course" value={selectedCourse} onChange={handleChangeCourse}>
                  <option value="Frontend Web Development">Frontend Web Development</option>
                  <option value="Backend Web Development">Backend Web Development</option>
                  <option value="Full Stack Web Development">Full Stack Web Development</option>
                  <option value="Visual Communications">Visual Communications</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="App Developement">App Developement</option>
                  <option value="Computer Basics">Computer Basics</option>
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
                  <option value={120000}>120000</option>
                  <option value={150000}>150000</option>
                  <option value={180000}>180000</option>
                  <option value={130000}>130000</option>
                  <option value={40000}>40000</option>
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
                <input type="number" required ref={amount} defaultValue={traineeData.amount_paid} onChange={changeState}/>
              </div>
              {/* <div className="formInput">
                <label>Balance</label>
                <input type="number" required ref={balance} defaultValue={traineeData.balance}/>
              </div> */}
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

export default EditTrainee