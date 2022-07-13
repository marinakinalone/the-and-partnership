import React from 'react'
import { Link } from 'react-router-dom'


const Banner = ({id, title, displayTitle, htmlFile, width, height}) => {
  return (
    <>
        {displayTitle ? (<h2 className="intro__title"><Link to={`/${id}`}>{title}&#8250;</Link></h2>) : (<></>)}   
          <iframe title={id} className={`iframe__${id}`} width={width} height={height} src={htmlFile}></iframe>
    </>
  )
}

export default Banner