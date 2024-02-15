import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'




import image from '../assets/images.png'
import Header from '../components/Header'

function Home() {
  return (
    <>
    <Header></Header>
    <div style={{ height: '100vh' }} className='bg-warning d-flex justify-content-center align-items-center'>
        <div className='row w-100'>
        <Col style={{padding:'10%'}} lg={6}>
              <h1>Education</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ea totam, ratione aliquam aperiam molestiae laudantium sint, porro suscipit in, est itaque blanditiis explicabo quaerat sequi nemo.</p>
              <p>New Student? Click Here to <Link to={'/register'}><button className='btn btn-success'>Register</button></Link></p>
          </Col>
          <Col className='d-flex justify-content-center align-items-center' lg={6}>
            <img style={{height:'70%'}} src={image} alt="" />
          </Col>

        </div>
    </div>
    </>
  )
}


export default Home