import React from 'react'
function SearchItem({search,setSearch}) {
  return (
<form action="" onSubmit={(e)=>{e.preventDefault}} className="w-full mt-1 px-2 pb-1 border-b border-gray-200">
<label htmlFor=""></label>
<input id='search'type="text" 
placeholder="Search..." 
role='searchbox' 
value={search} 
onChange={(e)=>setSearch(e.target.value)}
className="w-full h-12 text-base p-1 rounded outline-none border border-gray-300"/>
</form>
  
  )
}

export default SearchItem