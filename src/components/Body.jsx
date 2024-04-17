import React from "react";
import { useState, useEffect } from "react";
// import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";





const Body = ()=>{
    const [resList,setResList]= useState([]);
    const [filteredRes, setFilteredRes]= useState([]); // This useState is used to render the fetched data from api so that our search function can work on every aspect.
    const[search,setSearch]= useState('');
   
    let filterData = filteredRes.filter((res)=>res.info.avgRating>4)
    // console.log("filterdata",filterData)
    
    useEffect(()=>{  
        fetchData();
    },[])
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setResList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        
    }
    const searchFilter = ()=>{
        // reslist is the original data coming from api which is used to filter the data according to 
        // search text and it will copy its filtered data to filtered res which will be rendered on the home screen
       const filteredSearch =  resList.filter(
        (res)=>res.info.name.toLowerCase().includes(search.toLowerCase())
        );
        // console.log(filteredSearch)
        setFilteredRes(filteredSearch)
        // console.log('clicked')
        
    }
    // if (resList.length === 0) {
    //     return(
    //         <>
    //         <Shimmer />
    //         <Shimmer />
            
            
    //         </>)
    // }
    // console.log('body rendered')
    return resList.length===0? <Shimmer />: (
        <div className="body">
            
            <div className="search">
                <input type="text" placeholder="Search your favourite Restaurant" className="searchbar" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                <button className="btn" onClick={searchFilter}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{setFilteredRes(filterData) }}>Find top Restaurants</button>
            </div>
            
            <div className="res-container">
                {/* <RestaurantCard resData={resObj[0]} />
                <RestaurantCard resData={resObj[1]} />
                <RestaurantCard resData={resObj[2]} />
                <RestaurantCard resData={resObj[3]} />
                <RestaurantCard resData={resObj[4]} /> */}


{/* Not using keys(Not Acceptable) <<<<<<<<<  index <<<<<<< using unique id (Best Practice )*/}
                {
                    filteredRes.map((restaurant)=>
                    
                    <Link 
                    to={"/restaurant/"+restaurant.info.id} 
                    key={restaurant.info.id}>
                    
                    <RestaurantCard resData={restaurant} />
                    
                    </Link>
                    )
                }
            </div>

        </div>
    )
}
export default Body;