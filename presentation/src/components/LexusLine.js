import React from 'react'
import initImg1 from '../resources/lexusline functions before.png';
import initImg2 from '../resources/lexusline functions before bis.png';
import refactoredImg1 from '../resources/lexusline functions.png';
import refactoredImg2 from '../resources/lexusline functions bis.png';
import headlinesImg from '../resources/lexusline headlines.png';
import {Banner, Header, BackButton} from './Index';

const LexusLine = () => {
  const headerContent = "Lexus Line"
  const lexusLine = "lexus-line"
  return (
    <>
    <Header content={headerContent} />
    <BackButton />
    <main className="presentation">
    <section className="presentation__banner banner-lexus">
      <div className="banner" id="lexus-line">
        <Banner id={lexusLine} title={"Lexus Line"} displayTitle={false} htmlFile={"/html/Lexus Line/index.html"} width={1000} height={400} />
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
          <img src={initImg1} alt="code screenshot" />
          <img src={initImg2} alt="code screenshot" />
      </details>
      <details>
        <summary>Refactored codebase (for more flexibility when adding a new text state)</summary>
          <ul>
            <li>more performant code (without redundancy)</li>
            <li>easier modifications in just one place</li>
          </ul>
        <img src={headlinesImg} alt="code screenshot" />
        <img src={refactoredImg1} alt="code screenshot" />
        <img src={refactoredImg2} alt="code screenshot" />
      </details>
    </section>
    </main>
    </>
  )
}

export default LexusLine