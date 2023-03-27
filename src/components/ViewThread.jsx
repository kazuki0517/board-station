import React from 'react'
import { useParams } from 'react-router-dom'

const ViewThread = () => {
 const { id } = useParams();
  return (
    <div>ViewThread {id} </div>
  )
}

export default ViewThread