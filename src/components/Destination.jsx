import DestinationData from "../components/DestinationData";
import "./DestinationStyle.css"
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";

const Destination =() => {
    return(
    <div className="destination">
        <h1> Popular Destination</h1>
        <p> Tour gives you opportunity to see a lot, within a time frame. </p>
            <DestinationData className="first-des"
            heading="Taal Volacno, Batangas"
            text="Taal Volcano is a large caldera filled by Taal Lake in the province of Batangas, Philippines. 
            It is the second most active volcano in the country, with 38 recorded historical eruptions, 
            all of which were concentrated on Volcano Island, near the middle of Taal Lake. 
            The caldera was formed by prehistoric eruptions between 140,000 and 5,380 BP. 
            The northern half of Volcano Island falls under the jurisdiction of the lake shore town of Talisay,
             and the southern half in San Nicolas."
             img1={Mountain1}
             img2={Mountain2}
             
            />
            <DestinationData className="first-des-reverse"
            heading="Mt. Daguldul, Batangas"
            text="Mt. Daguldul, a coastal mountain in San Juan, Batangas, is a popular destination for hikers 
            due to its close proximity to the sea. 
            It stands at 672 meters above sea level and is classified as a minor climb with a difficulty level
             of 3/9. The major jump-off is located in Brgy.
              Hugom, San Juan, and it takes 1-2 days to reach the summit. 
              The mountain offers stunning views of the golden shores and blue sea of Laiya, 
              making it a popular destination for beginner hikers who wish to bask near the sea after a 
              tiring climb."
             img1={Mountain3}
             img2={Mountain4}
             
            />
    </div>
    )
}

export default Destination;