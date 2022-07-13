import React from 'react'
import Header from './Header';
import politeInitImg from '../resources/nordeavideo.png';


const NordeaVideo = () => {
  const headerContent = "Nordea Video"
  return (
    <>
    <Header content={headerContent} />
    <main className="presentation">
    <section className="presentation__banner banner-video">
      <div className="banner" id="nordea-video">
          <iframe title="nordea-video" className="iframe__nordea-video" width="350" height="600" src="/html/Nordea Video/index.html"></iframe>
        </div>
    </section>
    <section className="presentation-details">
      <h2>about the project</h2>
      <p>Add a polite load through JavaScript (and using Studio Doubleclick's guidelines)</p>
      <details>
        <summary>Implement polite loading</summary>
        <ul>
          <li>create a function that displays the ad once the scripts are loaded</li>
          <img src={politeInitImg} alt=""/>
          <li><a href="https://loading.io/css/">use a CSS loader for performance</a></li>
        </ul>
      </details>
      <details>
        <summary>Add a backup image</summary>
        <ul>
          <li>follow <a href="https://support.google.com/richmedia/answer/6305280?hl=fr&ref_topic=6277136#zippy=%2Cla-taille-de-limage-de-back-up-est-sup%C3%A9rieure-%C3%A0-ko%2Cla-cr%C3%A9ation-ne-comporte-pas-de-bordure">Studio's QA checklist</a></li>
        </ul>
      </details>

    </section>
    </main>
    </>)
}

export default NordeaVideo