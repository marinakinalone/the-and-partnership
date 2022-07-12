import React from 'react'
import Header from './Header';

const NordeaFleet = () => {
  const headerContent = "Nordea Fleet"
  return (
    <>
    <Header content={headerContent} />
    <main className="presentation">
    <section className="presentation__banner banner-fleet">
      <div className="banner" id="nordea-fleet">
          <iframe title="nordea-fleet" className="iframe__nordea-fleet" width="600" height="420" src="/html/Nordea Fleet/index.html"></iframe>
      </div>
    </section>
    <section className="presentation-details">
      <h2>about the project</h2>
      <p>To code a working banner based on a sketch. 1 format, 4 states.</p>
      <details>
        <summary>Code the banner's main template</summary>
        <ul>
          <li>export all the elements from adobe XD</li>
          <li>use "developer's view" from adobe XD</li>
          <li>implement a clicktag with Studio</li>
        </ul>
      </details>
      <details>
        <summary>Implement the logic to move from one state to another (using JavaScript)</summary>
        <ul>
          <li>flexibility and modularity</li>
          <li>accessibility</li>
        </ul>
      </details>
      <details>
      
        <summary>Add a "cool animation"</summary>
        <a href="https://www.minimamente.com/project/magic/">Magic Library for CSS</a>
      </details>
    </section>
    </main>
    </>
  )
}

export default NordeaFleet