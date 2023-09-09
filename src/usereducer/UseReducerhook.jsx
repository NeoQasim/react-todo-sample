import React, { useReducer, useState } from 'react'
import { reducer } from './reducer'
import TODOS from './TODOS'
const UseReducerhook = () => {

  const initialstate = { //initialstate is an object that defines the initialstate of app
    todos: [],
    modal: false,
    modalcontent: " 'write to add your todo here' "
  }
  const [state, dispatch] = useReducer(reducer, initialstate)
  const [todo, settodo] = useState()

  const handleClick = (e) => {
    e.preventDefault()
    if (!todo) {
      dispatch({ type: "EMPTY_INPUT" })
    }
    else {
      dispatch({ type: "ADD_TODO", payload: todo })
    }
    settodo("")



    setTimeout(() => {
      dispatch({ type: "REMOVE_MODAL" })
    }, 1000);
  }
  return (
    <>
      <div className="container col- sm-6  m-ato">
        <form className='shadow col-lg-6 m-auto p-5 pt-2'>
          <h1 className="textinfo text-center display-2">Todolist</h1>
          <p className={`text-dager fw-bold ${state.modalcontent === "please enter text to add" ? "text-danger" : "text-success"}`}>{state.modal && state.modalcontent}</p>
          <label className=' my-2 ' htmlFor="you todo">Your Todo </label>
          <input value={todo} onChange={(e) => settodo(e.target.value)} className=' my-2 form-control shadow-none ' type="text" placeholder='enter todo here...' />
          <button onClick={handleClick} className="btn btn-dark w-100 my-3">Add To DO task</button>
        </form>
      </div>

      <div className="row w-75 my-5 mx-auto gap-5">
        {state.todos.map((task, index) => {
          return (<>
            <div className="mx-auto col-sm-4 col-lg-5 p-3 border-info rounded border">
              <TODOS key={index} task={task} />
            </div>
          </>)
        })}
      </div >

    </>
  )
}

export default UseReducerhook