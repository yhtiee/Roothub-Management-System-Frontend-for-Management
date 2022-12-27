import React, { useContext, useEffect } from 'react'
import "./widgets.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AuthContext from '../../context/authContext';
// import RetrieveContext from '../../context/retrieveContext';
import DataContext from '../../context/TotalData';


const WidgetsAbakiliki = () => {

    // let {user} = useContext(AuthContext)
    let user = "Abakiliki"
    let {getTotalAlumni} = useContext(DataContext)
    let {getTotalTrainee} = useContext(DataContext)
    let {getTotalTrainer} = useContext(DataContext)

    let {totalAlumni} = useContext(DataContext)
    let {totalTrainee} = useContext(DataContext)
    let {totalTrainer} = useContext(DataContext)

    // let {user} = useContext(AuthContext)

    useEffect(() => {
      getTotalAlumni(user)
      getTotalTrainee(user)
      getTotalTrainer(user)

    }, [])
    
  return (
    <div className='widget'>
        <div className="wid1">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>50</span>
            </div>
            <div className="info">
                <span> Interns </span>
                <span> {user} Branch </span>
            </div>
            <div className="link">
                <a href="#" > View Interns  <KeyboardArrowRightIcon className='icon2'/></a>
            </div>
        </div>
        <div className="wid2">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>{totalTrainee}</span>
            </div>
            <div className="info">
                <span> Trainees </span>
                <span> {user} Branch </span>
            </div>
            <div className="link">
                <a href="#" > View Trainees <KeyboardArrowRightIcon className='icon2'/></a>
            </div>
        </div>
        <div className="wid3">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>{totalTrainer}</span>
            </div>
            <div className="info">
                <span> Trainers </span>
                <span> {user} Branch </span>
            </div>
            <div className="link">
                <a href="#" > View Trainers <KeyboardArrowRightIcon className='icon2'/></a>
            </div>
        </div>
        <div className="wid4">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>{totalAlumni}</span>
            </div>
            <div className="info">
                <span> Alumni </span>
                <span> {user} Branch </span>
            </div>
            <div className="link">
                <a href="#" > View Alumni <KeyboardArrowRightIcon className='icon2'/></a>
            </div>
        </div>
        <div className="wid5">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>20</span>
            </div>
            <div className="info">
                <span> NYSC</span>
                <span> {user} Branch </span>
            </div>
            <div className="link">
                <a href="#" > View NYSC <KeyboardArrowRightIcon className='icon2'/></a>
            </div>
        </div>
        <div className="wid6">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>10</span>
            </div>
            <div className="info">
                <span> Other Roles </span>
                <span> {user} Branch </span>
            </div>
            <div className="link">
                <a href="#" > View Other Roles <KeyboardArrowRightIcon className='icon2'/></a>
            </div>
        </div>
    </div>
  )
}

export default WidgetsAbakiliki