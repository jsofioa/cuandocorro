import { ItemFull } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({item}) =>{
    return (<div className="product-container">
        <ItemFull {...item} />
        </div>
    )
};