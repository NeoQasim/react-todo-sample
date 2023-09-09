import React, { useEffect, useState } from 'react'
import "./App.css"
const App = () => {
  const [text, settext] = useState("no text set")
  const handleclick = (e) => {
    let text = e.target.innerHTML;
    if (text === "users") {
      settext("clicked on Users")
    }
    if (text === "Posts") {
      settext("clicked on Posts")
    }
    if (text === "Comment ") {
      settext("clicked on Coments")
    }
  }

  useEffect(() => {
    console.log("sas");
  }, [text])

  return ( 
    <>
      <div className="container p-2 bg-warning mt-5 mx-auto">
        <div className="row bg justify-content-between w-50 m-auto">
          <button onClick={handleclick} className="btn w-25 btn-secondary">Posts</button>
          <button onClick={handleclick} className="btn w-25 btn-secondary">users</button>
          <button onClick={handleclick} className="btn w-25 btn-secondary">Comment </button>
        </div>
        <h1 className="text-center mt-4 ">{text}</h1>
      </div>


    </>
  )
}

export default App