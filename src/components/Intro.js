import React from 'react'
import { Header, Banner } from './Index'

const Intro = () => {
  const headerContent = "The&Partnership - 13/07/2022  - Marina Kinalone Simonnet"
  const nordeaFleet = "nordea-fleet"
  const lexusLine = "lexus-line"
  const nordeaVideo = "nordea-video"
  return (
    <>
      <Header content={headerContent} />
      <section className="banners">
        <div className="banner" id={nordeaFleet}>
          <Banner id={nordeaFleet} title={"Nordea Fleet"}  displayTitle={true} htmlFile={"/the-and-partnership/html/Nordea Fleet/index.html"} width={600} height={420} />
        </div>
        
        <div className="banner" id={lexusLine}>
          <Banner id={lexusLine} title={"Lexus Line"}  displayTitle={true} htmlFile={"/the-and-partnership/html/Lexus Line/index.html"} width={1000} height={400} />
        </div>
        <div className="banner" id={nordeaVideo}>
          <Banner id={nordeaVideo} title={"Nordea Video"}  displayTitle={true} htmlFile={"/the-and-partnership/html/Nordea Video/index.html"} width={350} height={600} />
        </div> 
      </section>
    </>

  )
}

export default Intro