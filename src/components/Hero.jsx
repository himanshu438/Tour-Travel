import "./HeroStyles.css";

function Hero() {
    return(
        <>
        <div className="hero">
            <img alt="HerpImg" src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
        <div className="hero-text">
            <h1>Your Journey Your Story</h1>
            <p> Choose Your Favourite Destination</p>
            <a href="/" > Travel Plan </a>
        </div>
        </div>
        </>
    )
}

export default Hero;