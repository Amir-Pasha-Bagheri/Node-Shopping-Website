import React, { Component } from "react";
import history from '../../history'
import './products.css'
import clothes from './images/clothes.jpg'
import food from './images/food.jpg'
import mobile from './images/mobile.jpg'
import sport from './images/sport.jpg'
import games from './images/games.webp'

class Products extends Component{
    render(){

        const DropDown = () => document.getElementById("DropdownContent").classList.toggle("Show");
            
        // Close the dropdown if the user clicks outside of it
        window.onclick = function(e) {
        if (!e.target.matches('.DropButton')) {
        const myDropdown = document.getElementById("DropdownContent");
        const myResponsiveDropdown = document.getElementById("ResponsiveDropdownContent");
            if (myDropdown.classList.contains('Show')||myResponsiveDropdown.classList.contains('Show')) {
            myDropdown.classList.remove('Show');
            myResponsiveDropdown.classList.remove('Show')
            }
        }
        }

        const ResponsiveDropDown = () => document.getElementById("ResponsiveDropdownContent").classList.toggle("Show");


        const IconBar = () => {
            document.getElementById("BarIcon").classList.toggle("Change")
            const Navbar = document.getElementById("SecondNavbar")
            if(document.getElementById("BarIcon").classList.contains("Change")){
            if(window.screen.width<801) Navbar.style.height = "550px"
            else if(window.screen.width<401) Navbar.style.height = "600px"
            }
            else Navbar.style.height = "100px"
        }

        return(
            <React.Fragment>
                <ul className="Navbar FirstNavbar">
                    <a href="http://localhost:3000" className="Brand rounded" title="Name Of Website">Website</a>
                    <a href="http://localhost:3000" className="NavLink">Home</a>
                    <a href="http://localhost:3000/Products" className="NavLink">Products</a>
                    <a href="http://localhost:3000/Cart" className="NavLink">Cart <span>0</span></a>
                    <div className="DropDown">
                        <button className="DropButton" onClick={DropDown}>Contact Us
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="DropdownContent" id="DropdownContent">
                            <a href="http://localhost:3000/Contact-Us">Phone Number</a><hr/>
                            <a href="http://localhost:3000/Contact-Us">E-Mail</a>
                        </div>
                    </div>
                    <a href="http://localhost:3000/Log-In" className="NavLink" id="LogIn">Log In</a>
                </ul>

                <ul className="Navbar SecondNavbar" id="SecondNavbar">
                    <a href="http://localhost:3000" className="Brand rounded" title="Name Of Website">Website</a>
                    <button className="BarIcon" id="BarIcon" onClick={IconBar}>
                    <div className="Bar1"></div>
                    <div className="Bar2"></div>
                    <div className="Bar3"></div>
                    </button><br/>
                    <a href="http://localhost:3000" className="NavLink">Home</a>
                    <a href="http://localhost:3000/Products" className="NavLink">Products</a>
                    <a href="http://localhost:3000/Cart" className="NavLink">Cart <span>0</span></a>
                    <div className="DropDown">
                        <button className="DropButton" onClick={ResponsiveDropDown}>Contact Us
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="DropdownContent" id="ResponsiveDropdownContent">
                            <a href="http://localhost:3000/Contact-Us">Phone Number</a><hr/>
                            <a href="http://localhost:3000/Contact-Us">E-Mail</a>
                        </div>
                    </div>
                    <a href="http://localhost:3000/Log-In" className="NavLink" id="LogIn">Log In</a>
                </ul>

                <div className="EachProductCard Sport">
                    <div className="Header"><h2>Sport Stuffs</h2></div>
                    <div className="Body"><img src={sport} alt="Clothes" width="100%" height="300px"/><button onClick={()=>history.push('/Products/Sport')}>Buy</button></div>
                </div>

                <hr style={{border:'0.001em solid #e0e0e0'}}/>

                <div className="EachProductCard Mobile">
                    <div className="Header"><h2>Mobiles</h2></div>
                    <div className="Body"><img src={mobile} alt="Clothes" width="100%" height="300px"/><button onClick={()=>history.push('/Products/Mobile')}>Buy</button></div>
                </div>

                <hr style={{border:'0.001em solid #e0e0e0'}}/>

                <div className="EachProductCard Clothes">
                    <div className="Header"><h2>Clothes</h2></div>
                    <div className="Body"><img src={clothes} alt="Clothes" width="100%" height="300px"/><button onClick={()=>history.push('/Products/Clothes')}>Buy</button></div>
                </div>

                <hr style={{border:'0.001em solid #e0e0e0'}}/>

                <div className="EachProductCard Games">
                    <div className="Header"><h2>Games</h2></div>
                    <div className="Body"><img src={games} alt="Clothes" width="100%" height="300px"/><button onClick={()=>history.push('/Products/Games')}>Buy</button></div>
                </div>

                <hr style={{border:'0.001em solid #e0e0e0'}}/>

                <div className="EachProductCard Food">
                    <div className="Header"><h2>Fresh Foods</h2></div>
                    <div className="Body"><img src={food} alt="Clothes" width="100%" height="300px"/><button onClick={()=>history.push('/Products/Food')}>Buy</button></div>
                </div>
            </React.Fragment>
        )
    }
}

export default Products