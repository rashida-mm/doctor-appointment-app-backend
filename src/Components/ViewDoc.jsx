import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import DocRev from './DocRev';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ViewDoc() {
  //create a state
  const [docDetails, setDocdetails] = useState({})
  //for parameter accessing, for accessing the id
  // const paramId = useParams() 
  // console.log(paramId.id); //object->id

  // destructring
  const { id } = useParams()
  console.log(id); //object->id
  //api call
  const base_url = 'https://doctor-app-backend-rashida.onrender.com/doctors'

  const fetchDoc = async () => {
    const result = await axios.get(`${base_url}/${id}`)//to get the details of particular id
    setDocdetails(result.data)
  }
  console.log(docDetails);

  useEffect(() => {
    fetchDoc()
  }, [])

  const getDoctorImage = () => {
    switch (id) {
      case '1':
        return "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg";
      case '2':
        return "https://www.shutterstock.com/image-photo/medical-concept-indian-beautiful-female-600nw-1635029716.jpg";
      case '3':
        return "https://t3.ftcdn.net/jpg/02/74/03/26/360_F_274032618_OhzkPv4gkPC7pIumPDQYlILKH6eB28WH.jpg";
      case '4':
        return "https://img.freepik.com/premium-photo/covid-19-coronavirus-outbreak-healthcare-workers-pandemic-concept_1258-19738.jpg";
      case '5':
        return "https://t4.ftcdn.net/jpg/02/71/29/57/360_F_271295768_z9N297UcflF0o3YOQlaUB2xUhDOpW6nL.jpg";
      case '6':
        return "https://img.freepik.com/premium-photo/horizontal-portrait-serious-mature-male-doctor-therapist-white-medical-uniforms-glasses-stethoscope-senior-old-man-doctor-healthcare-concept_168410-2851.jpg";
      case '7':
        return "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg";
      case '8':
        return "https://img.freepik.com/free-photo/confident-attractive-male-doctor-wearing-white-lab-coat-while-standing-with-arms-crossed-against-turquoise-background_662251-1654.jpg";
      case '9':
        return "https://t3.ftcdn.net/jpg/05/04/25/70/360_F_504257032_jBtwqNdvdMN9Xm6aDT0hcvtxDXPZErrn.jpg";
      case '10':
        return "https://www.shutterstock.com/image-photo/portrait-pretty-positive-lady-crossed-600nw-2162907825.jpg";

      default:
        return "DEFAULT_IMAGE_URL";
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='container border border-primary rounded my-5' style={{ background: 'linear-gradient(to bottom, #E6F0FE, #FFFFFF)'}}>
      <Row className='text-center m-2 p-4'>
        <Col className='my-3'>
          <img className='img-fluid' style={{ maxWidth: '100%',borderRadius:'550px' }} src={getDoctorImage()} alt="" />
          <h2 className='text-dark mt-1'>{docDetails.name} ({docDetails.specialty})</h2>
          <h4 className='text-dark'>{docDetails.rating} <i style={{ color: '#F6C026' }} class="fa-solid fa-star"></i></h4>
        
         <div> 
         <Button variant="primary" onClick={handleShow}>
        Get Appointment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <input className='form-control my-3' type="text" placeholder='Name' />
          <input className='form-control my-3' type="text" placeholder='Contact No' />
          <input className='form-control my-3' type="text" placeholder='Age' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
    handleClose();
    alert("Appointment Booked Successfully");
  }}>
    Submit
  </Button>
        </Modal.Footer>
      </Modal>
         </div>

        </Col>
        <Col>
          <div>
            <MDBListGroup style={{ opacity: '0.95' }} light>
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
                <DocRev rev={docDetails.reviews} />
              </MDBListGroupItem>
            </MDBListGroup>
          </div>
          
        </Col>
      </Row>
    </div>
  )
}

export default ViewDoc