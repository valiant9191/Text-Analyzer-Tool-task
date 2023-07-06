import { useEffect, useRef } from 'react';
import './index.scss'

interface IProp { handleText: (arg: string) => void }

const TextArea = ({ handleText }: IProp) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textAreaRef.current) { textAreaRef.current.focus() };
  }, []);

  return <textarea
    ref={textAreaRef}
    className="text-area"
    placeholder="Paste your text here..."
    onChange={(event) => handleText(event.target.value)} />
}

export default TextArea
