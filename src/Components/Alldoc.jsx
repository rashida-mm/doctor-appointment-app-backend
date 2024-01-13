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
    <div style={{backgroundColor:'#F7FAFF'}}>
            <h2 className='text-center text-dark py-5'>Meet Our Best Doctors</h2>
            <Row className='mt-4 justify-content-center w-100'>
  {
    AllDoc.map(item=>(
      <Col sm={12} md={6} lg={4} xl={3} key={item.id}>
        <DocCard doctor={item}/>
      </Col>
    ))
  }
</Row>

    </div>
  )
}

export default Alldoc