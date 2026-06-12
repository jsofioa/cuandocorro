import { Link } from "react-router-dom";
import "./ButtonBack.css";

export const ButtonBack = () => {
    return(<section className="btn-back-section">
        <Link to={"/"}><button className="btn-back">← Volver</button></Link>
    </section>
    );
};