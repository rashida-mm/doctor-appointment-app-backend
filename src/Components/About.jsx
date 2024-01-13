import React from 'react'
import { Row, Col } from 'react-bootstrap';

function About() {
  return (
    <div id='about' style={{ background: 'linear-gradient(to bottom, #E6F0FE, #FFFFFF)'}}>
    <Row className='justify-content-evenly p-5 w-100'>

    <Col lg={5} md={5} xl={5} xxl={5} className='text-center'>
        <img className='mt-3 img-fluid'
          style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '1000px 5000px' }}
          src="https://media.istockphoto.com/id/157398968/photo/portrait-of-smiling-young-doctors.jpg?s=612x612&w=0&k=20&c=c8aI6DOP_RH-hVsb6SeQD-wJxGABnhLo6X-n2Yd_07g="
        />
      </Col>

      <Col lg={5} md={5} xl={5} xxl={5} className='m-5 text-start'>
        <h2 className='text-dark'>Good service and better health by our specialists </h2>
  <p> "Med Hub - Your Convenient Healthcare Companion. We understand the importance of your time and well-being, which is why we've crafted a user-friendly and efficient app to streamline your healthcare experience."
  </p>
<h5>Your health, your way — MedHub, where care meets convenience.</h5>
      </Col>

    </Row>
  </div>  )
}

export default About