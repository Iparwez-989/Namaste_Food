import React from 'react'
import ItemList from './ItemList'

const RestaurantCategory = (props) => {
  return (
    <div className='w-6/12 bg-gray-400  mx-auto'>
        <div className='flex justify-between' >

      <span>{props.data.title}</span><span>🔽</span>
        </div>
        <ItemList items={props.data.itemCards} />
    </div>
  )
}

export default RestaurantCategory
