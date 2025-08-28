import { useState } from 'react'
import SentMessage from './SentMessage'

function MessageBox() {

  const messageRecieve = <h1></h1>

  const [message, setMessage] = useState("Meow");
    return (
    <>

<div className="pb-24">
  <SentMessage />
</div>


<div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4">
  <div className="max-w-2xl mx-auto flex items-center space-x-2">

    <input
        onKeyDown={(e) => {if (e.key == 'Enter'){
            console.log("working");
            setMessage("wow")   
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
