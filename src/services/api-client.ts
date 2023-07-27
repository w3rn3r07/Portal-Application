import axios from "axios"

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
       key:"1845081d46054637b15fb3fb21c4138c" 
    }
})
