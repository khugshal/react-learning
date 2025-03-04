import { data } from "../../data/dummy-data"
import CardComponent from "./restaurant-component/CardComponent";

const Body = () => {
    return <div id="body" className="body">
        <div id="search-component" className="search-component">
            <input id="search-input" className="search-input" type="text"/>
            <button id="search-button" className="search-button">Search</button>
        </div>
        <div id="cards" className="cards"> 
            {data.map( restaurant => <CardComponent key={data.position} data={restaurant.item}/>)}           
                        
        </div>
    </div>
}

export default Body;