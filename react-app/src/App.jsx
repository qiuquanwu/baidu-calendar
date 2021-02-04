import React, { useState } from 'react'
import BaiduCalendar from "baidu-calendar"
import "./App.css"
function App() {
  let [date ,setDate]=useState('2021-2-5')
  let [range,setRange] =useState([2015,2026])
  const handle = ()=>{
    setDate('2021-4-2')
    setRange([2010,2030])
  }
  const change = (obj)=>{
    console.log(obj)
  }
  return (
    <div className="app">
      <BaiduCalendar  date={date} range={range} change={change}/>
    </div>
  )
}

export default App
