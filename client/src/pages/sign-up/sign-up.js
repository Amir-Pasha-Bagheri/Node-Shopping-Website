import React, {Component} from 'react'
import axios from 'axios'
import history from '../../history'

class SignUp extends Component {

    render(){

        const ShowPasswordChange = () => {
            document.getElementById("checkbox").checked?document.getElementById("ShowPassword").style.backgroundColor="rgba(214, 214, 214, 0.904)":document.getElementById("ShowPassword").style.backgroundColor="rgba(214, 214, 214, 0)"

            const pass = document.getElementById('password')
            if(pass.type === 'password') {
                pass.type = 'text'
                pass.setAttribute('autoComplete','off')
            }
            else {
                pass.type = 'password'
            }
        }

        const ShowConfirmPasswordChange = () =>{
            document.getElementById("checkboxConfirm").checked?document.getElementById("ShowConfirmPassword").style.backgroundColor="rgba(214, 214, 214, 0.904)":document.getElementById("ShowConfirmPassword").style.backgroundColor="rgba(214, 214, 214, 0)"

            const pass = document.getElementById('ConfirmPassword')
            if(pass.type === 'password') {
                pass.type = 'text'
                pass.setAttribute('autoComplete','off')
            }
            else {
                pass.type = 'password'
            }
        }

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

        const TypePassword = () =>{
            const pass = document.getElementById("password").value

            const PassProgress = {
                az:0, //max 15
                AZ:0, //max 35
                num:0, //max 29
                let:0 //max 21
            }

            if(pass.match(/[a-z]/)) PassProgress.az = 15
            if(pass.match(/[A-Z]/)) PassProgress.AZ = 35
            if(pass.match(/[1-9]/)) PassProgress.num = 29
            if(pass.length>=6) PassProgress.let = 21

            const ProgressBar = document.getElementById("PasswordProgress")
            ProgressBar.style.width = PassProgress.az + PassProgress.AZ + PassProgress.num + PassProgress.let + '%'
            
            if(ProgressBar.style.width === '0%') ProgressBar.innerText = ''
            else if(ProgressBar.style.width <= '25%' && ProgressBar.style.width !== '100%' ){
                ProgressBar.innerText = 'Low'
                ProgressBar.style.backgroundColor = 'rgb(153, 0, 0)'
                ProgressBar.style.color = 'rgb(218, 216, 216)'
            }
            else if(ProgressBar.style.width <= '60%' && ProgressBar.style.width > '25%'){
                ProgressBar.innerText = 'Normal'
                ProgressBar.style.backgroundColor = '#ffc107'
                ProgressBar.style.color = 'black'
            }
            else if(ProgressBar.style.width > '60%' && ProgressBar.style.width !== '100%'){
                ProgressBar.innerText = 'Almost There !'
                ProgressBar.style.backgroundColor = '#17a2b8'
                ProgressBar.style.color = 'black'
            }
            else if(ProgressBar.style.width === '100%' ){
                ProgressBar.innerText = 'Perfect !'
                ProgressBar.style.backgroundColor = '#28a745'
                ProgressBar.style.color = 'white'
            }
            else ProgressBar.innerText = ''
        }

        const SubmitSignUp = (e) =>{
            e.preventDefault()
            if(document.getElementById("password").value!==document.getElementById("ConfirmPassword").value){
                document.getElementById("ConfirmPasswordTitle").style.display = "block"
                document.getElementById("ConfirmPasswordTitle").innerText = "Your Entered Password Are Not Same !"
            }
            else{
                document.getElementById("ConfirmPasswordTitle").style.display = "none"
                document.getElementById("ConfirmPasswordTitle").innerText = ""

                axios.post('http://localhost:3001/SignUp',{
                    username : document.getElementById("username").value,
                    password : document.getElementById("password").value
                })
                .then(res=>{
                    if(res.data!=='ok'){
                        document.getElementById("ConfirmPasswordTitle").style.display = "block"
                        document.getElementById("ConfirmPasswordTitle").innerText = res.data
                    }
                    else{
                        document.getElementById("ConfirmPasswordTitle").style.display = "none"
                        document.getElementById("ConfirmPasswordTitle").innerText = ""

                        axios.post('http://localhost:3001/LogIn',{
                            username : document.getElementById("username").value,
                            password : document.getElementById("password").value
                        },{
                            withCredentials:true
                        })
                        .then(res=>{
                            localStorage.setItem('token', res.data.accessToken)
                            localStorage.setItem('refreshToken', res.data.refreshToken)
                            
                            history.push('/')
                        })
                    }
                })
            }
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

                <form className="SignUpForm" method="POST" onSubmit={SubmitSignUp}>
                    <div className="SeuggestionBox" ><h2>Create Account Form</h2></div>
                    <hr/>

                    <div id="ConfirmPasswordTitle" style={{textAlign:'center'}}></div>

                    <div className ="ContainerForm">
                        <label htmlFor="name">Username :</label><br/>
                        <input type="text" id="username" className="FormControl" pattern=".{8,}" name="username" title="Your Username Must Contain 8 Characters." placeholder="Username..." required/><br/>
                            
                        <label htmlFor="name">Password :</label><br/>
                        <input type="password" id="password" onChange={TypePassword} className="FormControl" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,}" name="password" placeholder="Password..." title="Your Password Must Contain at least 6 Characters one Lowercase, one Uppercase and Number." required/>
                        
                        <div className="ShowPassword" id="ShowPassword">
                            <input type="checkbox" id="checkbox" onChange={ShowPasswordChange}/><span>Show Password</span><br/>
                        </div>

                        <input type="password" id="ConfirmPassword" className="FormControl" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,}" name="confirmpassword" placeholder="Confirm Password..." title="Your Password Must Contain at least 6 Characters one Lowercase, one Uppercase and Number." required/>
                        
                        <div className="ShowPassword" id="ShowConfirmPassword">
                            <input type="checkbox" id="checkboxConfirm" onChange={ShowConfirmPasswordChange}/><span>Show Password</span><br/>
                        </div>

                        <div className="ProgressContainer">
                            <div className="PasswordProgress" id="PasswordProgress"></div>
                        </div>

                        <button className="SubmitForm">Submit</button>
                    </div>

                </form>

                <p className="CreateAccount">Already Have An Account ? <a href="http://localhost:3000/Log-In">Click Here For Log In</a></p>

                <br/><br/>
            </React.Fragment>
        )
    }
}

export default SignUp