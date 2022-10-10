import React from 'react'
// this is the header section 
function Header({setIsAdding}) {
  return (
    <header>
        {/* title of the page  */}
        <h1>Contact List</h1>
        <div>
          {/* button to add new contact  */}
            <button onClick={()=> setIsAdding(true)} className='round-button'> Add Contact</button>
        </div>
    </header>
    
  )
}

export default Header