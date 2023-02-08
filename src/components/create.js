import React from 'react'

const create = (props) => {
    
    return (
      <>
      <form onSubmit={submithandler}>
          <input type={Text} value={Title} onChange={(e)=> setTitle(e.target.value)}  placeholder='Title' />
          <input type={Text}  value={Description} onChange={(e)=> setDescription(e.target.value)} placeholder='Description' />
          <button type='submit'>CREATE TASK</button>
        </form>
        </>
  )
}

export default create;