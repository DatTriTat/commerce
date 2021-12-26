import React, { useState } from "react"
import ItemList from "./ItemList"
import ItemForm from "./ItemForm"
//import NavBar from "./NavBar/NavBar";
//import SplashPage from "./SplashPage/SplashPage";

export default function App() {
  const [itemList, setItemList] = useState([
    {
      "name": "PC",
      "price": 15
    },
    {
      "name": "GPA",
      "price": 20
    },
  ])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handleAddItem = e => {
    e.preventDefault()
    setItemList(itemList.concat({ name, price }))
  }
  
  return (
    <div>
      <h2>Add New Item</h2>
      <ItemForm 
        name={name}
        handleNameChange={e => setName(e.target.value)}
        price={price}
        handlePriceChange={e => setPrice(e.target.value)}
        handleAddItem={handleAddItem}
      />
      <h2>Item List</h2>
      <ItemList itemList={itemList} />
    </div>
  )
}