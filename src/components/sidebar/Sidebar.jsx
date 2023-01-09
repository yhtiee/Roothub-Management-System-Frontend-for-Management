import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AuthContext from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
const Sidebar = () => {
  let {logoutUser} = useContext(AuthContext)
  let navigate = useNavigate()

  let handleClick = ()=> {
    logoutUser()
    navigate("/login")
  }

  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">
          Roothub TMS
        </span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <a href="/">
              <DashboardIcon className='icon'/>
              <span> Dashboard </span>
            </a>
          </li>
          <p className="title">SERVICES</p>
          <a href="">
            <li>
              <SettingsIcon className='icon'/>
              <span>Analysis</span>
            </li>
          </a>
          <Link to ="https://web-production-0dc8.up.railway.app/admin/">
            <li>
              <SettingsIcon className='icon'/>
              <span> Admin Panel </span>
            </li>
          </Link>
          <p className="title">LIST</p>
          <li>
            <Link to="/trainees">
              <PersonOutlineOutlinedIcon className='icon'/>
              <span> Trainees </span>
            </Link>
          </li>
          <li>
            <Link to="/trainers">
            <PersonOutlineOutlinedIcon className='icon'/>
            <span> Trainers </span>
            </Link>
          </li>
          <li>
            <Link to="/alumni">
            <PersonOutlineOutlinedIcon className='icon'/>
            <span> Alumni </span>
            </Link>
          </li>
          <li>
            <Link to="/ListNYSC">
              <PersonOutlineOutlinedIcon className='icon'/>
              <span> NYSC </span>
            </Link>
          </li>
          <li>
            <PersonOutlineOutlinedIcon className='icon'/>
            <span> Other Roles </span>
          </li>
          <li>
            <Link to="/ListInterns">
            <PersonOutlineOutlinedIcon className='icon'/>
            <span> Interns </span>
            </Link>
          </li>
          
          {/* <p className="title"> BRANCH MANAGERS </p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span> Profile </span>
          </li> */}
          <li onClick={handleClick}>
            <ExitToAppIcon className='icon'/>
            <span> Logout </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar