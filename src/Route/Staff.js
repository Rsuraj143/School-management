import React, { useEffect, useState } from 'react'
import axios from "axios"
import Navbar from '../Components/Navbar'
import "./staff.css"

const Staff = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get("https://61ef7787732d93001778e3c3.mockapi.io/Staff")
    .then((Response)=>{
      setData(Response.data)
      console.log(Response.data)
    })
    
  },[])
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>

      <div className='staff'>
        <table className='table table-hover table-bordered' style={{width:"10%",Top:"30px"}}>
          <thead >
            <tr>
              <th>User Name</th>
              <th>E-Mail</th>
              <th>Phone Number</th>
              <th>DOB</th>
              
            </tr>
          </thead>
          <tbody>
          {
                data.map((item)=>
                  <tr>
                    <td key={item.username}>
                      <input type="text" value={item.name} />
                    </td>
                    <td>
                      <input type="email" value={item.email} />
                    </td>
                    <td>
                      <input type="number" value={item.mobile} />
                    </td>
                    <td>
                      <input type="number" value={item.dob} />
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

export default Staff