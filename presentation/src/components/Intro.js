import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Intro = () => {
  const headerContent = "The&Partnership - 13/07/2022  - Marina Kinalone Simonnet"
  return (
    <>
      <Header content={headerContent} />
      <section className="banners">
        <div className="banner" id="nordea-fleet">
          <h2 className="intro__title"><Link to="/nordea-fleet">Nordea Fleet</Link></h2>
          <iframe title="nordea-fleet" className="iframe__nordea-fleet" width="600" height="420" src="/html/Nordea Fleet/index.html"></iframe>
        </div>
        <div className="banner" id="lexus-line">
          <h2 className="intro__title"><Link to="/lexus-line">Lexus Line</Link></h2>
          <iframe title="lexus-line" className="iframe__lexus-line" width="1000" height="400" src="/html/Lexus Line/index.html"></iframe>
        </div>
        <div className="banner" id="nordea-video">
          <h2 className="intro__title"><Link to="/nordea-video">Nordea Video</Link></h2>
          <iframe title="nordea-video" className="iframe__nordea-video" width="350" height="600" src="/html/Nordea Video/index.html"></iframe>
        </div> 
      </section>
    </>

  )
}

export default Intro