import "./Item.css";

export const Item = ({name, city, fecha, km, image, children}) => {
    const kmItems = km.split(', ');
        return (
        <article className="card">
            <img src={`./${image}`} alt={`Flyer Carrera ${name}`} />
            <h3>{name}</h3>
            <section>
                <p className="ciudad">({city})</p>
                <p>{fecha}</p>
                <div className="km-class">
                    <ul className="kilometros">
                        {kmItems.map((item, index) =>(
                            <li className="kilometros" key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <button className="btn-carrera">Ver más</button>
            </section>
            {children}
        </article>
        
    );
};

export const ItemFull = ({name, city, fecha, description, km, link, image, children}) => {
    const descriptionItems = description.split(', ');
    const kmItems = km.split(', ');
        return (
        <article className="card">
            <img src={`https://jsofioa.github.io/cuandocorro/${image}`} alt={`Flyer Carrera ${name}`} />
                <h3>{name}</h3>
                    <section>
                        <p className="ciudad">({city})</p>
                        <p>{fecha}</p>
                        <p className="km-class">{km}</p>
                        <div className="description-container">
                        <p>La participación incluye:</p>
                            <div className="description-list" >
                                <ul>
                                    {descriptionItems.map((item, index) =>(
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                        
                            </div>
                        </div>            
            <button className="btn-carrera"><a href={link} target="_blank">Registrarse</a></button>
            </section>
            {children}
        </article>
    );
};