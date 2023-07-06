import './App.scss'
import { useState } from 'react'
import {
  analyzeText
} from './utils'

import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

// \n for paragraph
// (.!?,) marks

const App = () => {
  const [text, setText] = useState('');

  const handleText = (value: any) => {
    setText(value)
  };

  const { words,
    characters,
    sentences,
    paragraphs,
    pronouns,
    averageReadingTime,
    longestWord,
  } = analyzeText(text)



  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox
            pronouns={pronouns}
            words={words}
            paragraphs={paragraphs}
            characters={characters}
            sentences={sentences} />
          <TextArea handleText={handleText} />
          <BottomResultBox
            averageTime={averageReadingTime}
            longestWord={longestWord}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
