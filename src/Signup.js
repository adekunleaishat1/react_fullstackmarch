import React ,{useState} from 'react'
import axios from 'axios'

const Signup = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const register = () =>{
        let user = {
            username,
            email,
            password
        }
        console.log(user);
        axios.post("http://localhost:5006/student/register",{username, email, password})
        .then((res)=>{
           console.log(res);
        }).catch((err)=>{
              console.log(err?.response?.data?.message);
        })
    }
  return (
    <div>
        <div className='w-50 mx-auto shadow bg-white px-5 py-4'>
            <h1 className='text-center'>Sign up</h1>
           <div className='form-group mt-3'>
             <label htmlFor="username">username</label>
             <input onChange={(e)=> setusername(e.target.value)} className='form-control' type="text" />
           </div>
           <div className='form-group mt-3'>
             <label htmlFor="email">email</label>
             <input  onChange={(e)=>setemail(e.target.value)} className='form-control' type="email" />
           </div>
           <div className='form-group mt-3'>
             <label htmlFor="password">password</label>
             <input onChange={(e)=>setpassword(e.target.value)} className='form-control' type="text" />
           </div>
          
           <div className='mx-auto mt-3'>
             <button onClick={register} className='btn btn-dark'>Sign up</button>
           </div>
        </div>
    </div>
  )
}

export default Signup