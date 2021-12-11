import axios from 'axios'

const User = axios.create({
    baseURL:'https://reqres.in/api'
})

export default User



