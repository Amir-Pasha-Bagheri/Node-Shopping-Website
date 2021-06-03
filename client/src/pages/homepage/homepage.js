import {Component} from 'react'
import pizza from './images/pizza.jpg'
import phone from './images/phone.jpg'
import ps5 from './images/ps5.jpg'
import shoe from './images/shoe.jpg'
import soda from './images/soda.jpg'
import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image'
import './homepage.css'
import {Comment} from '../exportedComponents'

class Homepage extends Component {
    
    componentDidMount(){
      const coll = document.getElementsByClassName("CollapseButton");
      let i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("Active");
          const content = this.nextElementSibling;
          if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            const height = content.scrollHeight + 30
            content.style.maxHeight = height + "px";
          } 
        });
      }
    }

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
                <a href="http://localhost:3000" className="NavLink">Cart <span>0</span></a>
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
                <a href="http://localhost:3000" className="NavLink">Cart <span>0</span></a>
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

            <div className="Slide-Container">
              <Slide easing="ease">

                <div className="each-slide">
                  <div style={{'backgroundImage': `url(${pizza})`}}>
                    <span>You can order fresh and hot Pizza !</span>
                  </div>
                </div>

                <div className="each-slide">
                  <div style={{'backgroundImage': `url(${ps5})`}}>
                    <span>We love <b>Gamers</b></span>
                  </div>
                </div>

                <div className="each-slide">
                  <div style={{'backgroundImage': `url(${phone})`}}>
                    <span>Check out our new brand of phones</span>
                  </div>
                </div>

                <div className="each-slide">
                  <div style={{'backgroundImage': `url(${soda})`}}>
                    <span>You can buy the best Soda from us!</span>
                  </div>
                </div>

                <div className="each-slide">
                  <div style={{'backgroundImage': `url(${shoe})`}}>
                    <span>Do you need Sport Shoes ?<br/>You are at the best place</span>
                  </div>
                </div>
              </Slide>
            </div>

            <br/>

            <h2 className="TakeALook">Take A Look At Our Products</h2><hr className="hr"/>

            <div className="CollapseBackGround">

              <button className="CollapseButton First">Sport Stuffs</button>
              <div className="CollapseContainer">
                <br/>Basketball Ball<br/>Hockey Clothes<br/>Football Ball<br/>Soccer Shoe<br/>Tennis Rocket<br/>Soccer Ball<br/><br/><b>More...</b><br/><hr/><button><b>Buy</b></button>
              </div>

              <button className="CollapseButton">Mobiles</button>
              <div className="CollapseContainer">
                <br/>iPhone X<br/>Samsung A50<br/>Galaxy S5<br/>iPhone 8<br/>Moto G4<br/><br/><b>More...</b><br/><hr/><button><b>Buy</b></button>
              </div>

              <button className="CollapseButton">Clothes</button>
              <div className="CollapseContainer">
                <br/>Hat<br/>Shoe<br/>Glasses<br/>Pants<br/>Shirt<br/>T-Shirt<br/><br/><b>More...</b><br/><hr/><button><b>Buy</b></button>
              </div>

              <button className="CollapseButton">Games</button>
              <div className="CollapseContainer">
                <br/>PS5<br/>X-Box ONE<br/>PS4<br/>Nintendo<br/>Different Games<br/><br/><b>More...</b><br/><hr/><button><b>Buy</b></button>
              </div>

              <button className="CollapseButton Last">Fresh Foods</button>
              <div className="CollapseContainer">
                <br/>Pizza<br/>Soda<br/>HotDog<br/>Pepperoni<br/>Italian Food<br/>Spanish Food<br/><br/><b>More...</b><br/><hr/><button><b>Buy</b></button>
              </div>

            </div>
            <br/><br/><br/>

            <h2 className="TakeALook NegativeMargin" style={{marginTop:"-20px"}} >What Do You Think About Us ?<br/><small style={{fontSize:'15px'}}>Please Let Us Know Our Weaknesses With Your Comments</small></h2><hr className="hr"/>

            <div>
              <button className="CommentBox"><h2>Comment Box</h2></button>

              <div className="Comment">
                <Comment user={{id:'1234' ,name:"Sofie",date:"May 21th 2021",message:"This website is so basic ! i think you need much exercise 😖",reply:"1"}} />
                <Comment user={{id:'5678' ,name:"Sofie",date:"May 21th 2021",message:"This website is so basic ! i think you need much exercise 😖",reply:"1"}} />
              </div>

            </div>

            <h2 className="TakeALook NegativeMargin" style={{marginTop:"30px",marginBottom:"30px"}}> Add New Comment</h2>

            <div className="Comment">
              <p className="AddCommentTitle">Message :</p>
              <textarea cols="60" rows="11" className="AddCommentTextArea" placeholder="Type Your Message..."></textarea>
              <a href="#Success"><button className="AddCommentSend">Send</button></a>
            </div><br/><br/>

            </>
        )
    }
}

export default Homepage