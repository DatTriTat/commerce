import React from 'react'
import Item from './Item'

export default function ItemList({ itemList }) {
  return (
    <div>
      {itemList.map(item => <Item 
        key={item.name} 
        name={item.name} 
        price={item.price} 
      />)}
    </div>
  )
}
