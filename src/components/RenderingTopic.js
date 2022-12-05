import React from 'react'
import { Link } from 'react-router-dom'

const RenderingTopic = () => {
  return (
    <div id="rendering-div">
      <h3>Rendering in React</h3>
      <button id="rendering-back-button"><Link to = "/topics">Back</Link>

      </button>
    </div>
  )
}

export default RenderingTopic