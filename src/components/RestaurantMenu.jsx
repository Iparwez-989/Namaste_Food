import React from "react";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{
const [resMenu,setResMenu]= useState('')
useEffect(()=>{
    fetchMenu()
},[])
    const fetchMenu=async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=425&submitAction=ENTER")
        const json = await data.json()
        setResMenu(json.data)
        console.log(json)
    }

if (resMenu=== '') return <Shimmer/>

const {itemCards}=resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log(itemCards)
    return(
        <div>
            <h1>{resMenu?.cards[0]?.card?.card?.info.name}</h1>
            <h3>{resMenu?.cards[0]?.card?.card?.info.areaName}</h3>
            <p>{resMenu?.cards[0]?.card?.card?.info.cuisines.join(',')} - {resMenu?.cards[0]?.card?.card?.info.costForTwoMessage}</p>
            <h1>Menu</h1>
            <ul>
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li> */}
                {itemCards.map((item )=><li key={item.card.info.id}>{ item.card.info.name}- Rs {item.card.info.price/100}</li>
                 )}
            </ul>
        </div>
    )

}


export default RestaurantMenu;