import { useState } from 'react'
import SentMessage from './SentMessage'

function MessageBox() {

  const [message, setMessage] = useState("");

  const [messageList, setMessageList] = useState<{ sender: "user" | "chatgpt"; text: string }[]>([]);


const sendMessage = async () => {
  if (!message.trim()) return;


  setMessageList(prev => [...prev, { sender: "user", text: message }]);
  

  setMessage("");

  try {
    // insane backend call using async await this time instead of promises
    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    
    // response added
    if (data.response) {
      setMessageList(prev => [...prev, { sender: "chatgpt", text: data.response }]);
    } else {
      setMessageList(prev => [...prev, { sender: "chatgpt", text: "Oops! No response from server." }]);
    }
  } catch (error) {
    setMessageList(prev => [...prev, { sender: "chatgpt", text: "Error connecting to server." }]);
  }
};

    return (
    <>

    {messageList.map((msg, index) => (
      <SentMessage key={index} messageSend={msg.text} sender={msg.sender} />
    ))}



      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-2xl mx-auto flex items-center space-x-2">

          <input
              

              onChange={(e) => {
                setMessage(e.target.value);
                
          }
              }
              onKeyDown={(e) => {if (e.key == 'Enter'){
              
                  sendMessage();
                  e.currentTarget.value = "";
                  
              }

              } }
              type="text"
              placeholder="Send a message..."
              
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          </button>
          
        </div>
      </div>
    </>
  )
}

export default MessageBox
