import React from "react";
import { useState, useEffect } from "react";
// import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResList from "../utils/useResList";





const Body = ()=>{
    const[search,setSearch]= useState('');
    const onlineStatus = useOnlineStatus()
    const [resList,setResList,filteredRes,setFilteredRes]= useResList()
   
    let filterData = filteredRes.filter((res)=>res.info.avgRating>4)
    // console.log("filterdata",filterData)
    
    
    
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
    if(onlineStatus === false){
        return(
            <div>
         <center><h1>Oops !! looks like you are not connected to the internet</h1>
         <h3>Please check your <i> internet connection</i> and Try again</h3></center>
         </div>
        )
    }
    
    return  resList.length===0? <Shimmer />: (
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