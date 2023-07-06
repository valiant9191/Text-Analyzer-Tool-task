import './index.scss'

interface IProps {
  averageTime: Number,
  longestWord: String
}

const BottomResultBox = ({ averageTime, longestWord }: IProps) => {

  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: averageTime ? averageTime : '-',
    },
    {
      title: 'Longest word:',
      value: longestWord ? longestWord : '-',
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value.toString()}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
