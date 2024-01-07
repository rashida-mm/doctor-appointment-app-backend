import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div className='header'>
       <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' style={{fontSize:'30px'}}>
           <img style={{width:'80px'}} src="https://www.acquirosolutions.com/images/about/image-19.png" alt="" />
            Med Expert 24/7
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header