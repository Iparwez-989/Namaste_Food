import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = (props) => {
  // const {setShowIndex}= props
  function handleClick(){
       console.log('Clicked')
      props.setShowIndex()
  }
  return (
    <div className='w-6/12 bg-gray-400  mx-auto my-2 ' >
        <div className='flex justify-between cursor-pointer ' onClick={handleClick}>

      <span className='text-xl font-semibold'>{props.data.title}({props.data.itemCards.length})</span><span>🔽</span>
        </div>
        {props.showItems && <ItemList items={props.data.itemCards} />}
    </div>
  )
}

export default RestaurantCategory
