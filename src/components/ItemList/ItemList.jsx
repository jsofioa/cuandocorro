import { Link } from "react-router-dom";
import "./ItemList.css";
import { Item } from "../Item/Item";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Disclaimer } from "../Disclaimer/Disclaimer";

export const ItemList = ({products}) => {

    if (!products.length){
        return <p>No hay carreras próximas</p>;
    }

    return(<article>
        <section className="intro-box">
            <div><Disclaimer /></div>
        </section>
        <section>
            <div className="product-container">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <Item {...product}/>
                    </Link>
                )) }
            </div>
        </section>
    </article>);
};

