import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";

import UserContext from "../utils/UserContext";
const RestaurantCard = (props)=>{
    const{resData}=props;
    const {name}= useContext(UserContext)
    
    // console.log(props)
    return (
        <div className="res-card m-2 p-4 w-[200px] ">
        <img className="res-logo rounded-md " alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId} />   
        <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(" , ") }</h4>
        <h4>{resData.info.avgRating} ratings</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes delivery</h4> 
        <h4>UserName: {name} </h4> 
        </div>
    )
  }
export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
      <Label>
        Promoted
      </Label>
      <RestaurantCard {...props} />
      </div>
    )
  }
}


export default RestaurantCard;