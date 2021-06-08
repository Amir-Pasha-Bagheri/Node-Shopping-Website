import React , { Component } from "react";
import telegram from './Image/telegram.png'
import whatsapp from './Image/whatsapp.jpg'
import gmail from './Image/gmail.png'
import './contact-us.css'

class ContactUs extends Component{

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

                <div className="Container">
                    <h3>Contact Us</h3><hr/><br/>
                    Thank You For Checking Our Website.<br/>
                    I Hope You Like It.<br/><br/><br/>
                    Here Are Few Way Which You can Contact Us :<br/><br/>
                    <p className="SocialIcons"><img src={telegram} alt="Telegram" width="20px" height="20px"/> +98 937 345 2374</p>
                    <p className="SocialIcons"><img src={whatsapp} alt="Whatsapp" width="19px" height="19px"/> +98 937 345 2374</p>
                    You can text me in Whatsapp or Telegram.<br/>
                    Or send me e-mail.<br/><br/>
                    <p className="SocialIcons"><img src={gmail} alt="gmail" className="Gmail"/> a.p.bagheri83@gmail.com</p>
                    24 Hours available :)
                </div>
                <br/><br/>

            </React.Fragment>
        )
    }
}

export default ContactUs