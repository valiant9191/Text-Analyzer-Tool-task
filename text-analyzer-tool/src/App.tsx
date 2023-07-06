import './App.scss'
import { useEffect, useState } from 'react'
import {
  findCharacters,
  findParagraph,
  findPronouns,
  findSentecies,
  findWords,
  getAverageTime,
  getLongestWord
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
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);
  const [pronouns, setPronouns] = useState(0);

  const [averageTime, setAverageTime] = useState(0);
  const [longestWord, setlongestWord] = useState('');

  const handleText = (value: any) => {
    setText(value)
  };

  useEffect(() => {
    setParagraphs(findParagraph(text))
    setSentences(findSentecies(text))
    setCharacters(findCharacters(text))
    setWords(findWords(text))
    setPronouns(findPronouns(text))
    setAverageTime(getAverageTime(text))
    setlongestWord(getLongestWord(text))
  }, [text])


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
            averageTime={averageTime}
            longestWord={longestWord}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
