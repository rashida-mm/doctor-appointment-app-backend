import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import DocCard from './DocCard'


function Alldoc() {

  const  base_url = 'https://doctor-app-backend-rashida.onrender.com/doctors'

  //to hold array of data
  const[AllDoc,setAlldoc] = useState([])

  //api fetching
  const fetchData=async()=>{
    const res=await axios.get(base_url)
    console.log(res.data);
    setAlldoc(res.data)
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <Row className='mt-4' style={{backgroundColor:'skyblue'}}>
        {
          AllDoc.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <DocCard doctor = {item}/>
            </Col>
          ))
        }

      </Row>
    </div>
  )
}

export default Alldoc