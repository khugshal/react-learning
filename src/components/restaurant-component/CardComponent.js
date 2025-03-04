const CardComponent = (props) => {
    const{name, image, servesCuisine, aggregateRating} = props?.data;
    return <div id="card-component" className="card-component">
        <img className="restaurant-image" src={image}/>
        <h3>{name}</h3>
        <h4>{servesCuisine.join(",")}</h4>
        <h4>{aggregateRating?.ratingValue}</h4>
    </div>
}

export default CardComponent;