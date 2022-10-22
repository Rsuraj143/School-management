import React from 'react'
import {useNavigate} from "react-router-dom"

const SM_Index = () => {
    const navigate = useNavigate()
     const handleStaffClick = ()=>{
        navigate("/staff")

     }
     const handleStudentClick = ()=>{
        navigate("/student")

     }
     const handleCourseClick =()=>{
        navigate("/course")

     }
  return (
    <div className='container d-flex justify-content-center'>
        <div style={{marginTop:"300px"}}>
            <h2 onClick={handleStaffClick} style={{display:"inline",border:"1px solid black"}} className="p-4 btn-lg btn btn-primary">Staff</h2>
            <h2 onClick={handleStudentClick} style={{display:"inline",border:"1px solid black"}} className="mx-4 p-4 btn-lg btn btn-primary">Student</h2>
            <h2 onClick={handleCourseClick} style={{display:"inline",border:"1px solid black"}} className="p-4 btn-lg btn btn-primary">Course</h2>
        </div>
    </div>
  )
}

export default SM_Index