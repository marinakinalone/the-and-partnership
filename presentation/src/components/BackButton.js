import React from 'react'
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <p className="button__back">&#8249; <Link to="/">back to main page</Link></p>
  )
}

export default BackButton