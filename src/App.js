import React from 'react'
import "./App.css"
const App = () => {
  return (
    <>
      <div className="container">
        <form >
          <div className="my">
            <label htmlFor="todo">enter your todo here </label>
            <input type="text" placeholder='enter your text here...' />
            <button className="btn">submit</button>
          </div>
        </form>
      </div>


    </>
  )
}

export default App