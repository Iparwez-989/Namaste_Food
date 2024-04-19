import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constants'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
    const [resMenu,setResMenu]= useState('')
    const {resId} = useParams()     //This will show the restaurant id
    console.log(resId)
    
    useEffect(()=>{
        fetchMenu();
    },[])
    
    const fetchMenu=async ()=>{
        const data = await fetch(MENU_API+resId)
        const json = await data.json()
        console.log(json.data)
        setResMenu(json.data)
    }
    
    
    
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
