import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { detailsAPI } from '../../services/allAPIs';







function Details() {
  const [allstudents, setAllStudents] = useState([])
  const getAllStudents = async()=>{
    const result = await detailsAPI()
    if(result.status===200){
      setAllStudents(result.data)
    }
  }
  useEffect(()=>{
    getAllStudents()
  },[allstudents])
  return (
    <>
    
<Container className='mt-5'>
<h3 className='text-center'>Student Details</h3>
    <Table striped bordered hover>
          <thead >
            <tr >
              <th className='bg-info'>#</th>
              <th className='bg-info'>Name</th>
              <th className='bg-info'>Address</th>
              <th className='bg-info'>Mobile</th>
              <th className='bg-info'>Email</th>
              <th className='bg-info'>Gender</th>
              <th className='bg-info'>Date of Birth</th>
              <th className='bg-info'>Course</th>
            </tr>
          </thead>
          <tbody>
            {allstudents?.length>0?allstudents.map((student, index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{student.name}</td>
              <td>{student.address}</td>
              <td>{student.mobile}</td>
              <td>{student.email}</td>
              <td>{student.gender}</td>
              <td>{student.dob}</td>
              <td>{student.course}</td>
            </tr>
            ))
              : <div>Nothing to display</div>
            }
          </tbody>
        </Table>
        <Link to={'/register'}><button className='btn btn-info'>Back</button></Link>
</Container>




    </>
  )
}

export default Details