import './index.scss'

interface IProp {
  handleText: (arg0: string) => void
}

const TextArea = ({ handleText }: IProp) => {


  return <textarea
    className="text-area"
    placeholder="Paste your text here..."
    onChange={(event) => handleText(event.target.value)} />
}

export default TextArea
