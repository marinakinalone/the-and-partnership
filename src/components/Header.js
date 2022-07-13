import React from 'react'

const Header = ({content}) => {
  return (
    <header className="header">
        <h1 className="header-title">{content}</h1>
    </header>
  )
}

export default Header