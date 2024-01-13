import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Explore.css'
import { Link } from 'react-router-dom'

function Explore() {

  return (
    <div id='exp' style={{ background: 'linear-gradient(to top, #E6F0FE, #FFFFFF)',}}>
<Row className='w-100 justify-content-evenly p-5 text-center'>
<h2 className='text-center pb-5 text-dark'>Explore By Category</h2>
<Link to={'/view/10'} className='text-decoration-none' style={{width:'250px'}}>
<Col className='border rounded border-primary shadow m-1 col-hover p-2'>
<div>
    <img className="img-fluid" style={{ maxWidth: '100px' }} src="https://cdn-icons-png.flaticon.com/512/1453/1453589.png" alt="" /></div>
<div><h5 className='text-dark'>Dentist</h5></div>
</Col>
</Link>
<Link to={'/view/1'} className='text-decoration-none' style={{width:'250px'}}>
<Col  className='border rounded border-primary shadow m-1 col-hover p-2'>
<div>
    <img className="img-fluid" style={{ maxWidth: '100px' }} src="https://www.sarojhospital.com/images/sp-icon/Cardiac.png" alt="" /></div>
<div><h5 className='text-dark'>Cardiologist</h5></div>
</Col>
</Link>
<Link to={'/view/6'} className='text-decoration-none' style={{width:'250px'}}> 
<Col  className='border rounded border-primary shadow m-1 p-2 col-hover'>
<div>
    <img className="img-fluid" style={{ maxWidth: '100px' }} src="https://cdn-icons-png.flaticon.com/512/8125/8125694.png" alt="" /></div>
<div><h5 className='text-dark'>Neurologist</h5></div>
</Col>
</Link>
<Link to={'/view/4'} className='text-decoration-none' style={{width:'250px'}}>
<Col className='border rounded border-primary shadow m-1 p-2 col-hover'>
<div>
    <img className="img-fluid" style={{ maxWidth: '100px' }} src="https://www.narayanahealth.org/sites/default/files/orthopaedic-services.png" alt="" /></div>
<div><h5 className='text-dark'>Orthopedic</h5></div>
</Col>
</Link>
<Link  to={'/view/8'} className='text-decoration-none' style={{width:'250px'}}>
<Col className='border rounded border-primary shadow m-1 col-hover p-2'>
<div>
    <img className="img-fluid" style={{ maxWidth: '100px' }} src="https://cdn-icons-png.flaticon.com/512/2857/2857950.png" alt="" /></div>
<div><h5 className='text-dark'>Ophthamologist</h5></div>
</Col>
</Link>

</Row>
    </div>
  )
}

export default Explore