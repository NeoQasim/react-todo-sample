import React from 'react'

const TODOS = ({ task }) => {
    return (
        <>
            <div className="border border-2">
                <h1 className="m-3">{task}</h1>
            </div>
        </>
    )
}

export default TODOS