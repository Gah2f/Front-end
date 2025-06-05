import React from 'react'
function Header({title}) {
  return (
    <div className='w-full px-1 bg-[#C9A25F] text-[aliceblue]   text-center items-center border border-gray-200 rounded-lg shadow-md'>
        <h1 className="text-xl font-semibold ">{title}</h1> 
    </div>
    
  )

  }


export default Header