import React from 'react'
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'
import "./SnowFall.css"
function SnowFall() {
  return (
    <div>
          <Snowfall
  style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
  }}
/>
    </div>
  )
}

export default SnowFall