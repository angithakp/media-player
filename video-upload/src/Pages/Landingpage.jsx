
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

  // usrNavigate() it is hook
    const navigate=useNavigate()

  const handleNavigate=()=>{
    // navigate to home
    navigate('/home')
  }
  return (
    <div>
        <Row className='align-items-center'>

            <Col></Col>
            <Col lg={6}>
                <h1>Welcome to video.com</h1>
                <p style={{textAlign:"justify"}}>when user can use their favourite videos user can upload any youtube videos by copy and paste
                   their url video,com will allow to add and remove their uploaded videos and also arrange then
                   in different categories by drag and drop it is free try iy now!!!! 
                   </p>

                   <button onClick={handleNavigate} className='btn btn-success'>Click Here to know more !!!!</button>
            </Col>

            <Col lg={4}>
                <img className='img-fluid' src="https://img.freepik.com/premium-photo/girl-listens-music-with-headphones_917664-17079.jpg" alt="no image" />
            </Col>

        </Row>
    </div>
  )
}

export default Landingpage