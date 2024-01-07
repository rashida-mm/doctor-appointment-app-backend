import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'

function DocCard({doctor}) {
  console.log(doctor);
  return (
    <div className='p-2'>
 <MDBCard border='primary' alignment='center' className='doccard mx-3 my-4 text-dark' style={{height:'280px'}}>
      <MDBCardHeader className='text-primary'>{doctor.hospital}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{doctor.name} </MDBCardTitle>
        <MDBCardText style={{height:'105px'}}>
          <p className='text-danger'>{doctor.specialty}</p>
          Address : {doctor.address}
        </MDBCardText>
        <Link  to = {`view/${doctor.id}`}> 
        <MDBBtn>View More</MDBBtn>
        </Link>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default DocCard