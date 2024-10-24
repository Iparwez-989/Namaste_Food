import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = (props) => {
  const [arrow,setArrow] = useState("🔽")
  const handleArr = ()=>{
    arrow === "🔽"?setArrow("🔼"):setArrow("🔽");
  }
 
  // const {setShowIndex}= props
  function handleClick(){
      props.setShowIndex()
  }
  return (
    <div className='w-6/12 bg-gray-400  mx-auto my-2 rounded-md py-3 shadow-black shadow-md' >
        <div className='flex justify-between cursor-pointer ' onClick={()=>{handleClick() ; handleArr();}} >

      <span className='text-xl font-semibold mx-2'>{props.data.title}({props.data.itemCards.length})</span>
      <span className='mx-2'>{arrow}</span>
        </div>
        {props.showItems && <ItemList items={props.data.itemCards} />}
    </div>
  )
}

export default RestaurantCategory
