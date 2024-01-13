import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Steps() {
  return (
    <div id='steps' style={{ background: 'linear-gradient(to left, #E6F0FE, #FFFFFF)'}}>
        <Row className='justify-content-evenly p-5 text-center w-100'>
            <h2 className='text-center p-4 text-dark'>3 Easy Steps & Get Your Solution</h2>
            <Col className='text-center '>
                <div><img className="img-fluid" style={{ maxWidth: '100px' }} src="https://cdn-icons-png.flaticon.com/512/387/387571.png" alt="" /></div>
            <div><h5 className='text-dark'>Find best doctors</h5>
            <p className='mt-4'>Easily search and discover qualified healthcare professionals based on your preferences.</p></div>
            </Col>
            <Col>
            <div><img className="img-fluid" style={{ maxWidth: '100px' }} src="https://icon-library.com/images/doctor-appointment-icon/doctor-appointment-icon-7.jpg" alt="" /></div>
            <div><h5 className='text-dark'>Get Appointment</h5>
            <p className='mt-4'>Say goodbye to long waiting times! Book your appointments online at your convenience.</p></div>
            </Col>
            <Col>
            <div><img className="img-fluid rounded-circle" style={{ maxWidth: '100px' }} src="https://media.istockphoto.com/id/1133665489/vector/health-care-smart-phone.jpg?s=612x612&w=0&k=20&c=q1RxmGUGdVNioaJM8dMuiYNwcWecJTM584nTgRmEuSo=" alt="" /></div>
            <div><h5 className='text-dark'>Happy Consultaions</h5>
            <p className='mt-4'>Share your experiences with the community. Rate and review your appointments.</p></div>
            </Col>
        </Row>
    </div>
  )
}

export default Steps