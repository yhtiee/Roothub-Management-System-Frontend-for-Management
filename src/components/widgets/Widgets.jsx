import React, { useContext, useEffect, useState } from 'react'
import "./widgets.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AuthContext from '../../context/authContext';
// import RetrieveContext from '../../context/retrieveContext';
import DataContext from '../../context/TotalData';
import LoadingAnimation from '../loading/Loading';


const Widgets = () => {

    // let {user} = useContext(AuthContext)
    let [trainer, setTrainer] = useState("0")
    let user = "General"
    let {getTotalAlumni} = useContext(DataContext)
    let {getTotalTrainee} = useContext(DataContext)
    let {getTotalTrainer} = useContext(DataContext)
    let {getTotalNYSC} = useContext(DataContext)
    let {getTotalRoles} = useContext(DataContext)
    let {getTotalInterns} = useContext(DataContext)


    let {totalAlumni} = useContext(DataContext)
    let {totalTrainee} = useContext(DataContext)
    let {totalTrainer} = useContext(DataContext)
    let {totalNYSC} = useContext(DataContext)
    let {totalIntern} = useContext(DataContext)
    let {totalRoles} = useContext(DataContext)


    // let {user} = useContext(AuthContext)

    useEffect(() => {
      getTotalAlumni(user)
      getTotalTrainee(user)
      getTotalTrainer(user)
      getTotalNYSC(user)
      getTotalRoles(user)
      getTotalInterns(user)
      setTrainer(totalTrainer)
      console.log(trainer)
    }, [])
    
  return (
    <div className='widget'>
        <div className="wid1">
            <div className="icon">
                <PersonOutlineOutlinedIcon className='icon1'/>
            </div>
            <div className="counter">
                <span>{ totalIntern === null? <LoadingAnimation/>:totalIntern}</span>
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
                <span>{totalTrainee === null? <LoadingAnimation/>:totalTrainee}</span>
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
                <span>{totalTrainer === null? <LoadingAnimation/>:totalTrainer}</span>
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
                <span>{totalAlumni === null? <LoadingAnimation/>: totalAlumni}</span>
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
                <span>{totalNYSC === null? <LoadingAnimation/>: totalNYSC}</span>
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
                <span>{totalRoles === null? <LoadingAnimation/>: totalRoles}</span>
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

export default Widgets