import {Component} from "react";
import "./style.css";
import { MenuItems } from "./Menuitems";
import { Link } from "react-router-dom";




class Navbar extends Component{
   
    state = { clicked: false };
     handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
     }
    
    
   
    render(){
        return( 
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    Trippy
                </h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fa fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}> 
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>
                    )
                })}
                
             <button className="nav-links-mobile" href="/signup">Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;