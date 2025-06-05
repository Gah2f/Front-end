import React from 'react'
import { GoArchive } from "react-icons/go";


function List({items, handleCheck,  handleDelete}) {

  return (
    <div>
      
<ul className="w-full list-none px-1 pb-1">
  {items.map((item) => (
    <li className='flex justify-start items-center py-2 pl-2 my-1 bg-gray-200' key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} className="w-6 h-6 mr-2 cursor-pointer  accent-[#C9A25F]"/>
      <label  className="text-xs flex-grow select-none">{item.item}</label>
     <button  onClick={() => handleDelete(item.id)}  className="ml-2 px-2 py-1 cursor-pointer text-red-500 hover:text-red-700 focus:outline-none">
      <GoArchive />
     </button>
    </li>
  ))}
</ul>

    
    </div>
  )
}

export default List