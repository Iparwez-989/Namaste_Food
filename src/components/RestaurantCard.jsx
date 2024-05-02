import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
    const{resData}=props;
  //   console.log(props)
    return (
        <div className="res-card m-2 p-4 w-[240px] bg-gray-300">
        <img className="res-logo rounded-md " alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId} />   
        <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(" , ") }</h4>
        <h4>{resData.info.avgRating} ratings</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes delivery</h4>
        </div>
    )
  }

export default RestaurantCard;