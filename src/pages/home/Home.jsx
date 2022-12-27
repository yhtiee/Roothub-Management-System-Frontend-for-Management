import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Chart from '../../components/charts/Chart'
import Navbar from '../../components/navbar/Navbar'
import PopularCourses from '../../components/popularCourses/PopularCourses'
import Sidebar from '../../components/sidebar/Sidebar'
import Widgets from '../../components/widgets/Widgets'
import WidgetsAbakiliki from '../../components/widgetsAbakiliki/WidgetsAbakiliki'
import WidgetsIbadan from '../../components/widgetsIbadan/WidgetsIbadan'
import WidgetsLagos from '../../components/widgetsLagos/WidgetsLagos'
import WidgetsPH from '../../components/widgetsPH/WidgetsPH'
import WidgetsUyo from '../../components/widgetsUyo/WidgetsUyo'
import DataContext from '../../context/TotalData'
import "./home.scss"

const Home = () => {

  const [widget, setWidget] = useState("general")
  let {getTotalAlumni} = useContext(DataContext)
  let {getTotalTrainee} = useContext(DataContext)
  let {getTotalTrainer} = useContext(DataContext)

  let general = () => {
    setWidget("general")
    let user = "General"
    getTotalAlumni(user)
    getTotalTrainee(user)
    getTotalTrainer(user)
  }

  useEffect(() => {
    general()
  }, [])
  

  let ibadan = () => {
    setWidget("ibadan")
    let user = "Ibadan"
    getTotalAlumni(user)
    getTotalTrainee(user)
    getTotalTrainer(user)
  }

  let uyo = () => {
    setWidget("uyo")
    let user = "Uyo"
    getTotalAlumni(user)
    getTotalTrainee(user)
    getTotalTrainer(user)
  }

  let abakiliki = () => {
    setWidget("abakiliki")
    let user = "Abakiliki"
    getTotalAlumni(user)
    getTotalTrainee(user)
    getTotalTrainer(user)
  }

  let lagos = () => {
    setWidget("lagos")
    let user = "Lagos"
    getTotalAlumni(user)
    getTotalTrainee(user)
    getTotalTrainer(user)
  }
  let ph = () => {
    setWidget("ph")
    let user = "PH"
    getTotalAlumni(user)
    getTotalTrainee(user)
    getTotalTrainer(user)
  }
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="toggle">
            <button onClick={general}>General</button>
            <button onClick={ibadan}>Ibadan</button>
            <button onClick={lagos}>Lagos</button>
            <button onClick={uyo}>Uyo</button>
            <button onClick={abakiliki}>Abakiliki</button>
            <button onClick={ph}>PH</button>
          </div>
          <div className={widget === "general"? "actiive": "notActive"}>
            <Widgets/>
          </div>
          <div className={widget === "abakiliki"? "actiive": "notActive"}>
            <WidgetsAbakiliki/>
          </div>
          <div className={widget === "lagos"? "actiive": "notActive"}>
            <WidgetsLagos/>
          </div>
          <div className={widget === "ph" ? "actiive": "notActive"}>
            <WidgetsPH/>
          </div>
          <div className={widget === "uyo" ? "actiive": "notActive"}>
            <WidgetsUyo/>
          </div>
          <div className={widget === "ibadan" ? "actiive": "notActive"}>
            <WidgetsIbadan/>
          </div>
          <div className="popCourse">
            <PopularCourses/>
          </div>
        </div>
    </div>
  )
}

export default Home