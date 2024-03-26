import React, {useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const login = () =>{
        console.log(email , password);
       axios.post("http://localhost:5006/student/login", {email, password})
       .then((res)=>{
        console.log(res.data.useremail);
        localStorage.setItem("email", res.data.useremail )
        navigate('/profile')
        toast.success(res.data.message)
       }).catch((err)=>{
        console.log(err?.response?.data?.message);
        toast.error(err?.response?.data?.message)
       })
    }
  return (
    <div>
         <div className='w-50 mx-auto shadow bg-white px-5 py-4'>
            <h1 className='text-center'>Login </h1>
           <div className='form-group mt-3'>
             <label htmlFor="email">email</label>
             <input  onChange={(e)=>setemail(e.target.value)} className='form-control' type="email" />
           </div>
           <div className='form-group mt-3'>
             <label htmlFor="password">password</label>
             <input onChange={(e)=>setpassword(e.target.value)} className='form-control' type="text" />
           </div>
          
           <div className='mx-auto mt-3'>
             <button onClick={login} className='btn btn-dark'>Login </button>
             <ToastContainer/>
           </div>
        </div>
    </div>
  )
}

export default Login