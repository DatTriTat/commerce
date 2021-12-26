import React from 'react'

export default function ItemForm({
  name,
  handleNameChange,
  price,
  handlePriceChange,
  handleAddItem
}) {
  return (
    <div>
      <form onSubmit={handleAddItem}>
        <div>
          name: <input 
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          price: <input 
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}