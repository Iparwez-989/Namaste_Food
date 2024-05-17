import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resMenu = useRestaurantMenu(resId); //useRestaurantMenu is the custom hook here
    const [showIndex,setShowIndex]= useState(0)
    // ------------------------------this line was throwing error-----------

    // const {itemCards}= resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // --------------------So we're using this line-----------------------
    
    const {cards} = resMenu || {}; // Destructure `cards` with a null check

    const itemCards = cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
    // console.log(cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards) //for finding categories
    const categories = cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
      c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

    )
    console.log(categories,"filtered category")
    return (resMenu==='')?<Shimmer /> : (
    <div>
        
        <p className='text-3xl font-bold text-center'>{resMenu.cards[2].card.card.info.name}</p>
        <p className='text-xl my-3 font-bold text-center'>{resMenu.cards[2].card.card.info.cuisines.join(', ')}</p>
        {/* Categories accordians */}
        {categories.map((category,index)=>(
          <RestaurantCategory data={category.card.card} 
          showItems={index===showIndex && true}
          setShowIndex={()=>setShowIndex(index)}
          />
          
        ) )}

    </div>
  )
}

export default RestaurantMenu
