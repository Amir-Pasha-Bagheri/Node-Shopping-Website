import axios from 'axios'

const AuthHeader = axios.create({
    baseURL : 'http://localhost:3001',
    withCredentials : true ,
    headers:{
      Authorization : `Bearer ${localStorage.getItem("token")}`
    }
})

export default AuthHeader