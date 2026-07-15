import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  
  return (
    <div className="counter-page">
      <h1>Character Counter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
      />
      <p>Character Count: {text.length}</p>
      <p>Word Count: {wordCount}</p>
    </div>
  )
}

export default App