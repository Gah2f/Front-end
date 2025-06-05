import React from 'react'
import { useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import List from './Components/List/List'
import AddItems from './Components/AddItems/AddItems'
import SearchItem from './Components/SearchItem/SearchItem'
import { useEffect } from 'react'
import apiRequest from './Components/util/apiRequest'
function App() {

const API_URL='http://localhost:3500/items';
const [items, setItems] = useState(() => {
  try {
    const savedItems = JSON.parse(localStorage.getItem('shoppinglist'));
    return Array.isArray(savedItems) ? savedItems : []; // Ensure it's an array
  } catch (err) {
    console.error('Error parsing localStorage data:', err);
    return [];
  }
});
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [error,setErr]=useState([null]);
  useEffect (( )=>{
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems= await response.json();
        setItems(listItems);
      } catch (err){
        setErr(err.message)
      }
    }
    fetchItems();
  },[items])
   
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    // Create-- POST
  }
  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    // UPDATE --- PATCH
  }
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    
    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    // Delete --- DELETE
  }
  const handleNewItem = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem)
    setNewItem('');
  }


  return (
    <div className='w-100   justify-center border border-gray-300 rounded-lg shadow-md p-4 mx-auto my-10 bg-white'>
      <Header title="KURAZ TASK MANAGER "/>
      <AddItems 
      newItem={newItem}
      setNewItem={setNewItem}
      handleNewItem={handleNewItem}
      />
       <SearchItem 
      search={search}
      setSearch={setSearch}/>
      <List 
   items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
      <Footer
      length={items.length}/>
    </div>
  )
}

export default App