import React from 'react'
function Footer({length}) {
  return (
    <div className='relative w-full p-1 bg-[#C9A25F] text-[aliceblue] grid place-content-center'>
        <h1 className='className="text-base font-medium"'>{length} List  {length===1 ? "item" : "items"}</h1>
    </div>
  )
}

export default Footer