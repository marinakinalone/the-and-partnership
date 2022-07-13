import React from 'react'
import Header from './Header';
import initImg1 from '../resources/lexusline functions before.png';
import initImg2 from '../resources/lexusline functions before bis.png';
import refactoredImg1 from '../resources/lexusline functions.png';
import refactoredImg2 from '../resources/lexusline functions bis.png';
import headlinesImg from '../resources/lexusline headlines.png';

const LexusLine = () => {
  const headerContent = "Lexus Line"
  return (
    <>
    <Header content={headerContent} />
    <main className="presentation">
    <section className="presentation__banner banner-lexus">
    <div className="banner" id="lexus-line">
          <iframe title="lexus-line" className="iframe__lexus-line" width="1000" height="400" src="/html/Lexus Line/index.html"></iframe>
        </div>
    </section>
    <section className="presentation-details">
      <h2>about the project</h2>
      <p>Add an additionnal text state (and respect Lexus brand guidelines).</p>
      <details>
        <summary>Initial code (before)</summary>
          <ul>
            <li>adding a new text state and two lines: modifications in three places of the codebase, adding a dozen lines of code</li>
            <li>easy to edit, but redundant and harder to maintain</li>
          </ul>
          <img src={initImg1} alt="" />
          <img src={initImg2} alt="" />
      </details>
      <details>
        <summary>Refactored codebase (for more flexibility when adding a new text state)</summary>
          <ul>
            <li>more performant code (without redundancy)</li>
            <li>easier modifications in just one place</li>
          </ul>
        <img src={headlinesImg} alt="" />
        <img src={refactoredImg1} alt="" />
        <img src={refactoredImg2} alt="" />
      </details>
    </section>
    </main>
    </>
  )
}

export default LexusLine