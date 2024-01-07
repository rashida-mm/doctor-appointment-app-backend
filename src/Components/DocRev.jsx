import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function DocRev({rev}) {
  console.log(rev);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>  
  <Button variant="primary" style={{color:'white'}}  onClick={handleShow}>
        View Reviews
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div>
              {rev?.map(item=>(
                  <ListGroup className='mb-3'>
                  <ListGroup.Item>{item.date}</ListGroup.Item>
                  <ListGroup.Item>Patient Name : {item.patient_name}
                  <p>Rating : {item.rating} <i style={{color:'#F6C026'}} class="fa-solid fa-star"></i> </p>
                  <p>Comments : {item.comments}</p>
                  </ListGroup.Item>
              </ListGroup>
              ))}
            </div>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

export default DocRev