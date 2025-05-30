import React, { useEffect } from 'react'
import './Countdown.css'
// import { useState } from 'react'
export default function CountDownLightSwitch() {
    
   
  return (
    <>
    <div className="container">
        <div className="header">
            <h1>
                Countdown & Light Switch
            </h1>
            <div className="toggle-container">
                <input type="checkbox" id="themeToggle" />
                <label className="toggle-switch">
          <input type="checkbox" id="themeToggle" />
          <span className="slider"></span>
        </label>
        <span>Light Mode</span>
            </div>
        </div>
    </div>

    <div className="timer-section">
    <div className="progress-bar">
        <div className="progress" id="progress"></div>
      </div>
      <div className="timer" id="timerDisplay">30s</div>
      <div className="btn-group">
      <button id="startButton" onClick={()=>{

      }}>Start Timer</button>
        <button id="resetButton" style={{display:'none'}}>Reset Timer</button>
      </div>
      <div className="message" id="messageArea"></div>
    </div>

    </>
  )
}
