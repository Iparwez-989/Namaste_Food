import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resMenu = useRestaurantMenu(resId); //useRestaurantMenu is the custom hook here
    
    
    
    return (resMenu==='')?<Shimmer /> : (
    <div>
        
        <h1>{resMenu.cards[0].card.card.text}</h1>
        {/* <h3>{resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[1].card.info.name}</h3>
        <h3>{resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[2].card.info.name}</h3>
        <h3>{resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[3].card.info.name}</h3> */}
    <ol>
        
    {resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((item, index) => (
    <li key={index}>{item.card.info.name}</li>
    ))}

    </ol>
    </div>
  )
}

export default RestaurantMenu
