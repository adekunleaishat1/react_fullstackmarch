import { editableInputTypes } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import axios  from 'axios'

const Profile = () => {
    const [image, setimage] = useState("")
    const [newimage, setnewimage] = useState("")
    const email = localStorage.getItem('email')

    const filechange = (e) =>{
       console.log(e.target.files[0]);
       let myimage = e.target.files[0]
       let reader = new FileReader()
       reader.readAsDataURL(myimage)
       reader.onload = () =>{
        console.log(reader.result);
        setimage(reader.result)
       }
    }
    const upload = () =>{
        console.log(image);
        axios.post("http://localhost:5006/student/upload", {image, email})
        .then((res)=>{
            console.log(res.data.myimage);
            setnewimage(res.data.myimage)
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <input onChange={(e)=>filechange(e)} type="file" />
        <button onClick={upload}>Upload image</button>
        <img src={newimage} alt="" />
    </div>
  )
}

export default Profile