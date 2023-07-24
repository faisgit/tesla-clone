import React from 'react'
import ModelSSpec from './components/ModelSSpec'
import ModelSInterior from './components/ModelSInterior'
function modelS() {
  return (
    <div>
      <div className='bg-black h-16' />
      <ModelSSpec />
      <ModelSInterior />
    </div>
  )
}

export default modelS