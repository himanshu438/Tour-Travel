import TripData from "./TripData";
import "./TripStyle.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";



function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trip </h1>
            <p> You can discover unique destination using Google Maps. </p> 

            <div className="tripcard">
                <TripData img={ Trip1 } 
                heading= "Trip in Indonesia"
                text ="Indonesia is a country located in Southeast Asia. It is the world's largest archipelagic state and 
                the 14th-largest country by area. With around 280 million people, Indonesia is the world's
                 fourth-most populous country and the most populous Muslim-majority country."
                />
                <TripData img={ Trip2 } 
                heading= "Trip in Malaysia"
                text ="Malaysia is a country in Southeast Asia, consisting of two noncontiguous 
                regions: Peninsular Malaysia, also known as West Malaysia, 
                located on the Malay Peninsula, and East Malaysia, located on the island of Borneo"
                />
                <TripData img={ Trip3 } 
                heading= "Trip in France"
                text ="France, officially known as the French Republic or French France, is a country 
                located in northwestern Europe. It is one of the most important nations in the Western world
                 and has played a significant 
                role in international affairs, with former colonies in every corner of the globe."
                />
            </div>
        </div>
    )
}

export default Trip;