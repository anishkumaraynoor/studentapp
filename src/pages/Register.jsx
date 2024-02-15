import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'



import students from '../assets/students.png'
import { registerAPI } from '../../services/allAPIs'
import Header from '../components/Header'


function Register() {
  const navigate = useNavigate()
  const [studentInput, setStudentInput] = useState({
    name:"", address:"", mobile:"", email:"", gender:"", dob:"", course:""
  })
  
  const handleRegister = async(e)=>{
    e.preventDefault()
    try {
      const result = await registerAPI(studentInput)
      if (result.status === 200) {
        setStudentInput({
          name:"", address:"", mobile:"", email:"", gender:"", dob:"", course:""
        })
        navigate('/details')
      } else {
        alert(result.response.data)
      }
    } catch (error) {
      console.log(error);
    }

  }


  const handleCancel = ()=>{
    setStudentInput({
      name:"", address:"", mobile:"", email:"", gender:"", dob:"", course:""
    })
  }

  return (
    <>
    <Header></Header>
      <div style={{ height: '100vh' }} className='bg-warning d-flex justify-content-center align-items-center'>
        <div className='row w-100 d-flex justify-content-center align-items-center'>
          <Col style={{ padding: '10%' }} lg={4}>
            <img className='text-center w-100' sizes='' src={students} alt="" />
            <h1 className='text-center'>Welcome</h1>
            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <p className='text-center'><Link to={'/'}><button className='btn btn-success'>Back</button></Link></p>
          </Col>
          <Col lg={8}>
            <h2 className='text-center'>Apply as a Student</h2>
            <div className='row'>
              <Col lg={6}>

                <div>
                  <label>Name</label>
                  <input onChange={e=>setStudentInput({...studentInput, name:e.target.value})} value={studentInput.name} type="text" className='form-control w-75' placeholder="Enter Your Name" />
                  <label>Address</label>
                  <textarea onChange={e=>setStudentInput({...studentInput, address:e.target.value})} value={studentInput.address} className='form-control w-75' placeholder="Enter Your Address" cols="10" rows="7"></textarea>
                  <label>Mobile</label>
                  <input onChange={e=>setStudentInput({...studentInput, mobile:e.target.value})} value={studentInput.mobile} type="text" className='form-control w-75' placeholder="Enter Your Mobile" />
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <label>Email</label>
                  <input onChange={e=>setStudentInput({...studentInput, email:e.target.value})} value={studentInput.email} type="text" className='form-control w-75' placeholder="Enter Your Email" />
                  
                  <label>Gender</label>
                  <select onChange={e=>setStudentInput({...studentInput, gender:e.target.value})} value={studentInput.gender} name="course" id="course" className='form-control w-75'>
                  <option >--select--</option>
                    <option >Male</option>
                    <option >Female</option>
                    <option >Other</option>
                  </select>

                  <label>Date of Birth</label>
                  <input onChange={e=>setStudentInput({...studentInput, dob:e.target.value})} value={studentInput.dob} type="date" className='form-control w-75' placeholder="Enter Your Date of Birth" />
                  <label >Course</label>

                  <select onChange={e=>setStudentInput({...studentInput, course:e.target.value})} value={studentInput.course} name="course" id="course" className='form-control w-75'>
                  <option >--select--</option>
                    <option >Biology</option>
                    <option >Computer Science</option>
                    <option >Commerce</option>
                    <option >Humanities</option>
                  </select>
                  <div className='d-flex justify-content-between w-75 mt-5'><button className='btn btn-success' onClick={handleRegister}>Register</button><button className='btn btn-danger' onClick={handleCancel}>Cancel</button></div>
                </div>
              </Col>
            </div>
          </Col>

        </div>
      </div>
    </>
  )
}

export default Register