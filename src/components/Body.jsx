import React from "react";
import { useState,useContext } from "react";
// import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResList from "../utils/useResList";




const Body = ()=>{
    const[search,setSearch]= useState('');
    const[filterBtn,setFilterBtn] = useState('Find top rated restaurant')
    const onlineStatus = useOnlineStatus()
    const [resList,setResList,filteredRes,setFilteredRes,showAll]= useResList()
   
    let filterData = filteredRes?.filter((res)=>res.info.avgRating>4.3)
    // console.log("filterdata",filterData)
    const handleFilterBtn = () =>{
        filterBtn==='Find top rated restaurant'?setFilterBtn('Show all'):setFilterBtn('Find top rated restaurant')
    }
    const handleShowAll=()=>{
        setFilteredRes(showAll);
    }
    
    const searchFilter = ()=>{
        // reslist is the original data coming from api which is used to filter the data according to 
        // search text and it will copy its filtered data to filtered res which will be rendered on the home screen
       const filteredSearch =  resList?.filter(
        (res)=>res?.info?.name.toLowerCase().includes(search.toLowerCase())
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
    
    return  resList?.length===0 ? <Shimmer />: (
        <div className="body">
            
            <div className="m-4 grid grid-flow-col p-4 gap-5  ">
                <div className="search flex mx-auto px-5 gap-10 grid-cols-8 ">
                <input type="text" placeholder="Search your favourite Restaurant" className="w-80 border border-solid border-black searchbar px-10 rounded-lg " value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                <button className="btn p-1 px-4 bg-green-500 rounded-md" onClick={searchFilter}>Search</button>
                </div>
            <div className="filter grid-cols-4 mx-auto ">
                <button className="filter-btn p-1 px-4 bg-gray-500 rounded-md mx-2 " onClick={()=>{
                    setFilteredRes(filterData);
                    handleFilterBtn();
                    if(filterBtn==='Show all'){
                        handleShowAll();
                    }
                      
                    
                    }}>{filterBtn}</button>
            </div>
         </div>
            
            <div className="res-container flex flex-wrap justify-evenly">
                {/* <RestaurantCard resData={resObj[0]} />
                <RestaurantCard resData={resObj[1]} />
                <RestaurantCard resData={resObj[2]} />
                <RestaurantCard resData={resObj[3]} />
                <RestaurantCard resData={resObj[4]} /> */}


{/* Not using keys(Not Acceptable) <<<<<<<<<  index <<<<<<< using unique id (Best Practice )*/}
                {
                    filteredRes?.map((restaurant)=>
                    
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