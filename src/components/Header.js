import React from 'react'

function Header({setIsAdding}) {
  return (
    <header>
        <h1>Contact List</h1>
        <div>
            <button onClick={()=> setIsAdding(true)} className='round-button'> Add Contact</button>
        </div>
    </header>
    
  )
}

export default Header