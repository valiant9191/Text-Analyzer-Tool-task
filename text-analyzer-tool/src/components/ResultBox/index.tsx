import './index.scss'

interface IProp {
  sentences: Number,
  pronouns: Number,
  words: Number,
  paragraphs: Number,
  characters: Number,
}


const ResultBox = ({ sentences, pronouns, words, paragraphs, characters }: IProp) => {
  const resultBar = [
    {
      title: 'Words',
      value: words,
    },
    {
      title: 'Characters',
      value: characters,
    },
    {
      title: 'Sentences',
      value: sentences,
    },
    {
      title: 'Paragraphs ',
      value: paragraphs,
    },
    {
      title: 'Pronouns',
      value: pronouns,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value ? value.toString() : 0}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
