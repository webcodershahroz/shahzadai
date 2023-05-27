import React from 'react'
import { useState } from 'react';
const { Configuration, OpenAIApi } = require("openai");

export default function Chat() {
  const [message, setmessage] = useState('')


  const handleInputChange = (event) => {
    setmessage(event.target.value)
  }




  const getResponse = async () => {
    if (message !== '') {
      let input_msg = document.createElement('div');
      input_msg.innerHTML = `<div>${message}</div>`
      input_msg.classList.add('right')
      document.getElementById('msg').appendChild(input_msg)


      let output_msg = document.createElement('div');
      output_msg.innerHTML = `<div>typing...</div>`
      output_msg.classList.add('left')
      document.getElementById('msg').appendChild(output_msg)
      //Fetching data


      const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      });
      // console.log(completion.data.choices[0].message.content);

      output_msg.innerHTML = completion.data.choices[0].message.content;
      setmessage('')
    }
    else {
      alert("Type a message first")
    }
  }

  return (
    <>
      <div className='bg-dark chat-container d-block m-auto'>
        <div className="rounded items d-flex flex-column justify-content-between" style={{ 'height': "100%", 'width': '100%' }}>
          <div id='msg-container'>
            <h1 className='text-center text-light'>Chat with AI : By Muhammad Shahroz Shahzad</h1>
            <div id="msg" className='border-top text-light'></div>
          </div>
          <div className="msg-input d-flex align-items-center justify-content-center">
            <input id='message-input' className='mx-2 p-1 px-2' type="text" placeholder='Message...' value={message} onChange={handleInputChange} style={{ "width": '75%' }} />
            <button className='mx-2 btn btn-primary' style={{ "width": 'fitContent' }} onClick={getResponse} >Send</button>
          </div>
        </div>
      </div>
    </>
  )
}
