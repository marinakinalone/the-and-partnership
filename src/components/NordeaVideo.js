import React from 'react'
import {Banner, Header, BackButton } from './Index';
import politeInitImg from '../resources/nordeavideo.png';


const NordeaVideo = () => {
  const headerContent = "Nordea Video"
  const nordeaVideo = "nordea-video"

  return (
    <>
    <Header content={headerContent} />
    <BackButton />
    <main className="presentation">
    <section className="presentation__banner banner-video">
      <div className="banner" id={nordeaVideo}>
      <Banner id={nordeaVideo} title={"Nordea Video"}  displayTitle={false} htmlFile={"/the-and-partnership/html/Nordea Video/index.html"} width={350} height={600} />

      </div>
    </section>
    <section className="presentation-details">
      <h2>about the project</h2>
      <p>Add a polite load through JavaScript (and using Studio Doubleclick's guidelines)</p>
      <details>
        <summary>Implement polite loading</summary>
        <ul>
          <li>create a function that displays the ad once the scripts are loaded</li>
          <img src={politeInitImg} alt="code screenshot"/>
          <li><a href="https://loading.io/css/" target="_blank" rel="noreferrer">use a CSS loader for performance</a></li>
        </ul>
      </details>
      <details>
        <summary>Add a backup image</summary>
        <ul>
          <li>follow <a href="https://support.google.com/richmedia/answer/6305280?hl=fr&ref_topic=6277136#zippy=%2Cla-taille-de-limage-de-back-up-est-sup%C3%A9rieure-%C3%A0-ko%2Cla-cr%C3%A9ation-ne-comporte-pas-de-bordure" target="_blank" rel="noreferrer">Studio's QA checklist</a></li>
        </ul>
      </details>

    </section>
    </main>
    </>)
}

export default NordeaVideo