import { useState } from "react";
import axios from 'axios'
import{ useNavigate} from "react-router-dom";
import logo from "./assets/images/logo.png";

function Signup() {
    const[name,setName] = useState()
    const[email,setEmail] = useState()
    const[password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit= (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
       .then(result => {console.log(result)
        navigate('/login')
    })
        .catch(err=> console.log(err))
    }

    return(
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg bg-opacity-50">
            <div className="flex justify-center mb-6">
                <img src={logo} alt="Logo" className="h-20" />
            </div>
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    );
}

export default Signup;