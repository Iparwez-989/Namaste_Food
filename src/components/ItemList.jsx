import { CDN_URL } from "../utils/constants";
const ItemList = ({items})=>{
    return(
        items.map((items)=> 
            <div className="m-2 p-2 border-gray-100 border-b-2 flex justify-between " > 
            <div className="w-9/12">
            <div className="py-1">
                <p className="text-md font-bold ">{items?.card?.info?.name}</p>
                <p>₹{items?.card?.info?.price/100}</p>
            </div>
                <p className="text-xs">{items?.card?.info?.description}</p>
            </div>
            <div className="w-3/12">
                <div className="absolute mx-24 ">
                    <button className="rounded border bg-black text-white border-black shadow-lg px-2 py-0.5 hover:text-black hover:bg-green-400">Add+</button>
                </div>
            <img src={CDN_URL + items.card.info.imageId} alt="img" className="object-cover"  />
            </div>
            </div>
        )
    )
}
export default ItemList;