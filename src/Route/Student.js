
import React,{useEffect, useState} from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import "./student.css"

const Student = () => {

  const [course, setCourse] = useState([])
  const formik=useFormik({
    initialValues:{
      username:"",
      email:"",
      phonenumber:"",
      password:"",
      id:"",
      DOB:"",
      BloodGroup:"",
      MotherName:"",
      Course:"",
      Staff:"",
      photo:""
    },
    onSubmit:values=>{
      axios.post("https://61ef7787732d93001778e3c3.mockapi.io/register",values)
    }
  })

  useEffect(()=>{
    axios.get("https://61ef7787732d93001778e3c3.mockapi.io/course")
    .then((Response)=>{
      setCourse(Response.data)
    })
  },[])


  return (
    <div>
      <div className="nav">
        <Navbar/>
      </div>
      
       <div className='form'>
          <h2>Registation Form</h2>
          <form onSubmit={formik.handleSubmit}>
              <dl>
                <dt>UserName</dt>
                <dd><input name="username" onChange={formik.handleChange} values={formik.values.username}/></dd>
                <dt>Email</dt>
                <dd><input name="email" onChange={formik.handleChange} values={formik.values.email}/></dd>
                <dt>PhoneNumber</dt>
                <dd><input name='phonenumber' onChange={formik.handleChange} values={formik.values.phonenumber}/></dd>
                <dt>password</dt>
                <dd><input name="password"type="Password" onChange={formik.handleChange} values={formik.values.password}/></dd>
                <dt>ID</dt>
                <dd><input type="number" name="id" onChange={formik.handleChange} values={formik.values.id}/></dd>
                <dt>DOB</dt>
                <dd><input name="DOB" onChange={formik.handleChange} values={formik.values.DOB}/></dd>
                <dt>BloodGroup</dt>
                <dd><input name="Bloodgroup" onChange={formik.handleChange} values={formik.values.BloodGroup}/></dd>
                <dt>MotherName</dt>
                <dd><input name="MotherName" onChange={formik.handleChange} values={formik.values.MotherName}/></dd>
                <dt>Course</dt>
                <dd>
                  <select name='Course' onChange={formik.handleChange} values={formik.values.Course} >
                    {
                      course.map((data)=>
                      <option>{data.coursename}</option>
                      )
                    }
                  </select>
                </dd>
                <dt>Staff Name</dt>
                <dd><input name="Staff" onChange={formik.handleChange} values={formik.values.Staff}/></dd>

                <dt>Upload Photo</dt>
                <dd><input type="file" onChange={formik.handleChange} values={formik.values.photo} name="photo" /></dd>
              </dl>
          <button className='btn btn-success'>Submit</button>
          </form>
    </div>
    </div>
  )
}

export default Student