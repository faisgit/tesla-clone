import React from 'react'
import ReactPlayer from 'react-player'
import inth from '@/public/Tesla-Exp.mp4'
function ExpTesla() {
  return (
    <div>
      <ReactPlayer  url={inth}/>
    </div>
  )
}

export default ExpTesla