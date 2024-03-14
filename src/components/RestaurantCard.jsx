import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
    const{resData}=props;
  //   console.log(props)
    return (
        <div className="res-card">
        <img className="res-logo" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId} />   
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(" , ") }</h4>
        <h4>{resData.info.avgRating} ratings</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes delivery</h4>
        </div>
    )
  }

export default RestaurantCard;