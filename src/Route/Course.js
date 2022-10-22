import axios from 'axios'
import  { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import "./course.css"
import Multiselect from 'multiselect-react-dropdown'


const Course = () => {

  const [data, setData] = useState([])
  const [staff, setStaff] = useState([])
  
  
  useEffect(()=>{
    axios.get("https://61ef7787732d93001778e3c3.mockapi.io/course")
    .then((Response)=>{
      setData(Response.data)
      setStaff(Response.data.map((e)=>e.staffName))
      // console.log(Response.data)
      // console.log(staff[0])

    })
    
  },[])
  return (
    <div>
      <div className="nav">
        <Navbar/>
      </div>
      <div className="course">
          <table className='table table-hover table-bordered' style={{width:"10%"}}>
            <thead >
              <tr>
                <th>Course Name</th>
                <th>ID</th>
                <th>Staff Name</th>
                
                
              </tr>
            </thead>
            <tbody>
            {
                  data.map((item)=>
                    <tr key={item.id}>
                      <td key={item.username}>
                        <input type="text" value={item.coursename} />
                      </td>
                      <td>
                        <input type="email" value={item.id} />
                      </td>
                      <td>
                        <Multiselect
                        isObject={false}
                        options ={staff[4]}
                        showCheckbox
                        />
                      </td>
                      
                    </tr>
                  )
                }
                
            </tbody>
          </table>
       </div>

    </div>
  )
}

export default Course