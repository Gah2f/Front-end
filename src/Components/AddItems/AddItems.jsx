import React from 'react'
import { useRef } from 'react'
function AddItems({newItem, setNewItem, handleNewItem}) {
  const inputRef = useRef(null);
  return (
    <form action="" className='w-full flex justify-start mt-2 px-2 pb-1 border-b border-gray-200   ' onSubmit={handleNewItem}>
<label htmlFor="addItem"  className="sr-only">Add Item</label>
<input type="text" 
autoFocus
Ref={inputRef}
id='addItem'
placeholder='Add Item'
required
value={newItem}
onChange={(e) => setNewItem(e.target.value)}
className='flex-grow max-w-[calc(100%-50px)] h-12 text-base p-1 rounded mr-1 border border-gray-300 outline-none'/>
<button type='submit'
aria-label='Add Item' onClick={() => inputRef.current.focus()} className='h-12 w-12 rounded p-2 text-base bg-[#C9A25F] text-white cursor-pointer hover:bg-[#C9A25F]/10 focus:outline-none'>ADD</button>
    </form>
  )
}

export default AddItems