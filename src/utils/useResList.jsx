import React, { useEffect, useState } from 'react'

const useResList = () => {
    const [resList,setResList]= useState([])
    const [filteredRes, setFilteredRes]= useState([]); // This useState is used to render the fetched data from api so that our search function can work on every aspect.
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,"hey")
        
    }
  return [resList,setResList,filteredRes,setFilteredRes]
}

export default useResList
