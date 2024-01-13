import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DocCard from './DocCard'

function Banner() {
  return (
    <div style={{ background: 'linear-gradient(to right, #E6F0FE, #FFFFFF)'}}>
      <Row className='w-100 justify-content-evenly p-5'>

        <Col lg={5} md={5} xl={5} xxl={5} className='m-5 text-start'>
          <h6 className='text-dark'>STAY STRONG, LIVE LONG</h6>
          <h2>Take care of your body, and it will take care of you</h2>
          <h3 className='text-dark'>Search And Find Your</h3>
          <h3>Suitable Doctors</h3>
          <h5 className='text-dark'>"Your one-stop solution for hassle-free doctor appointments."</h5>
          <a href="#docCard" className='btn btn-primary rounded-9 mt-2'>Get Appointment</a>
        </Col>
        
        <Col lg={5} md={5} xl={5} xxl={5} className='text-center'>
          <img className='mt-3 img-fluid'
            style={{ width: '100%', maxWidth: '550px', height: 'auto', borderRadius: '800px 200px' }}
            src="https://uploads-ssl.webflow.com/606b1a109c3b857f6d84ad01/60c3855c4289af120b280b2a_SmileFemaleDoctor_750.jpg"
          />
        </Col>

      </Row>
    </div>
  );
}

export default Banner;
