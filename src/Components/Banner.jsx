import React from 'react'
import { Row , Col} from 'react-bootstrap'

function Banner() {
  return (
    <div className='container border border-primary my-4 rounded' style={{backgroundColor:'#FCFCFE'}}>
        <Row>
            <Col>
            <img style={{height:'340px'}} src="https://cdnl.iconscout.com/lottie/premium/thumb/male-patient-medical-record-5685903-4745614.gif" alt="" />
            </Col>
            <Col className='m-5 text-center'>
            <h1>Welcome to Med Expert 24/7</h1>
            <h4 className='text-dark'>"Your one-stop solution for hassle-free doctor appointments."</h4>
           <h5 className='text-success'>Why choose Med Expert 24/7? <br />
           Convenience , Access , Time-saving , Security</h5>
           <h6 style={{fontWeight:'600',border:'1px dashed',borderRadius:'30px',margin:'10px'}}>Download Med Expert 24/7 now and take control of your health journey!</h6>
            </Col>
        </Row>
    </div>
  )
}

export default Banner