import { Component } from "react";
import './cart.css'


class Cart extends Component{

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
            <>

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
                    <div class="Bar1"></div>
                    <div class="Bar2"></div>
                    <div class="Bar3"></div>
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

                <div className="PriceOrderCartPage">
                    <button className="PriceTitle">Price</button><br/>
                    <button className="OrderActived">Low To High</button>
                    <button className="PriceDetails">High To Low</button>
                </div>

                <div className="TypeOrderCartPage">
                    <button className="TypeTitle">Type</button><br/>
                    <button className="TypeDetails">Clothes</button>
                    <button className="TypeDetails">Mobiles</button>
                    <button className="TypeDetails">Games</button>
                    <button className="TypeDetails">Foods</button>
                    <button className="TypeDetails">Sport Stuffs</button>
                </div>

            </>
        )
    }
}

export default Cart