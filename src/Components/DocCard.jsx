import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link, useParams} from 'react-router-dom'

function DocCard({doctor}) {

  const getDoctorImg = () => {
    switch (doctor.id.toString()) {
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

  console.log(doctor);
  return (
    <div id='docCard'>
    <div className='container p-4 mx-2 mb-3'>
      <Link to={`view/${doctor.id}`} className='text-decoration-none'>
        <Card>
          <Card.Img variant="top" src={getDoctorImg()} alt={`${doctor.name} Image`} />
          <Card.Body className='text-center'>
            <Card.Title>{doctor.name}</Card.Title>
            <Card.Text>
            {doctor.specialty}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  </div>
  )
}

export default DocCard