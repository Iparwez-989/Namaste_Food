const ItemList = ({items})=>{
    return(
        items.map(()=> 
            <div > 
                <span>{items.card.info.name}</span>
            </div>
        )
    )
}
export default ItemList;