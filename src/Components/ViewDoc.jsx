import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import DocRev from './DocRev';

function ViewDoc() {
  //create a state
  const[docDetails,setDocdetails]=useState({})
  //for parameter accessing, for accessing the id
  // const paramId = useParams() 
  // console.log(paramId.id); //object->id

  // destructring
  const {id} = useParams() 
  console.log(id); //object->id
  //api call
  const  base_url = 'https://doctor-app-backend-rashida.onrender.com/doctors'

  const fetchDoc = async()=>{
    const result = await axios.get(`${base_url}/${id}`)//to get the details of particular id
  setDocdetails(result.data)
  }
  console.log(docDetails);

  useEffect(()=>{
    fetchDoc()
  },[])
  return (
    <div className='container border border-primary rounded my-5' style={{backgroundImage: 'url("https://repository-images.githubusercontent.com/534554721/d6a3f991-a7c5-4a44-aa67-d792c12341ce")',backgroundPosition:'center',backgroundSize:'800px',backgroundRepeat:'no-repeat',backgroundColor:'#E4FEFF'}}>
      <Row className='text-center m-2 p-4'>
        <Col className='my-3'>
        <img style={{width:'250px'}} src="https://www.freeiconspng.com/uploads/doctor-pediatrician-icon-round-dr-logo-7.png" alt="" />
        <h2 className='text-dark mt-1'>{docDetails.name} ({docDetails.specialty})</h2>
        <h4 className='text-dark'>{docDetails.rating} <i style={{color:'#F6C026'}} class="fa-solid fa-star"></i></h4>
        </Col>
        <Col>
        <div>
        <MDBListGroup style={{opacity:'0.95' }} light>
      <MDBListGroupItem
        tag='button'
        action
        noBorders
        active
        aria-current='true'
        type='button'
        className='px-3'
      >
        <h2 className='text-white'>{docDetails.hospital}</h2>
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action type='button' className='px-3'>
      <i class="fa-solid fa-location-dot"></i> : {docDetails.address}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action type='button' className='px-3'>
      <i class="fa-solid fa-phone"></i> : {docDetails.phone}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action type='button' className='px-3'>
      <i class="fa-solid fa-envelope"></i> : {docDetails.email}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action type='button' className='px-3'>
      <i class="fa-solid fa-clock"></i> Timing : {docDetails.available_hours}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action type='button' className='px-3'>
      <i class="fa-solid fa-calendar-days"></i> Available Days: {docDetails.available_days?.join(' | ')}
    </MDBListGroupItem>
      <MDBListGroupItem>
        <DocRev rev = {docDetails.reviews}/>      
      </MDBListGroupItem>
    </MDBListGroup>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default ViewDoc