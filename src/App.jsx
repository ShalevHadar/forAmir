import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import viteLogo from '../src/assets/amirPhoto.png'
import './App.css'

function App() {
  return (
    <>
      <Main/>
    </>
  )
}

function Main() {
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState('');
  
  const onClick = async () => {
    console.log('Sending Request to ChatGPT');

    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": text}],
    });

    console.log('Answer: ' + completion.data);

    setAnswer(completion.data.choices[0].message.content)
  }

  return (
    <div className="App">
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Amir GPT</h1>
        <textarea onChange={(e) => {setText(e.target.value)}} name="postContent" rows={4} cols={40} />
        <div>
        <button onClick={onClick}>Send to Chat</button>
        </div>
        <br></br>
        <div>{answer ? answer : 'Answer will be here'}</div>
    </div>
  )
}

export default App
