import { Route , Switch } from 'react-router-dom'

import Homepage from './homepage/homepage'
import ContactUs from './contact-us/contact-us'
import LogIn from './log-in/log-in'
import SignUp from './sign-up/sign-up'

const Routes = () =>{
    return(
        <Switch>
            < Route exact path="/" component={Homepage} />
            < Route path="/Contact-Us" component={ContactUs} />
            < Route path="/Log-In" component={LogIn} />
            < Route path="/Sign-Up" component={SignUp} />
        </Switch>
    )
}

export default Routes