


interface Prop{
  messageSend: string;
  sender: "user" | "chatgpt";
}
function SentMessage(prop:Prop) {

    if (prop.sender === "chatgpt"){
      return(
      <div className="w-full flex justify-left px-4 mt-5 w-screen">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs shadow-md">
        <p>
            {prop.messageSend}
         </p>
    </div>
    </div>
      )
    }
    return (
    <>
      
      <div className="w-full flex justify-end px-4 mt-5">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs shadow-md">
        <p>
            {prop.messageSend}
         </p>
    </div>
    </div>
    </>
  )


  }


export default SentMessage
