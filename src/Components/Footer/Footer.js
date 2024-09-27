import React from 'react';
import '../Footer/Footer.css'
import {
  MDBFooter,
  MDBContainer,
  // MDBCol,
  // MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter  id ="footer" className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
      
          <MDBBtn outline color="light" floating className='mb-4' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='mb-4' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='mb-4' href='https://github.com/muqadus-khaliq' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
       
        </section>
        
        <div  id ="footercpyright" className='text-center p-3'  > 
        © 2020 Copyright:
        <a  id="footercpyright" className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
      </MDBContainer>
 
      {/* <div  id ="footercpyright" className='text-center p-3'  > 
        © 2020 Copyright:
        <a  id="footercpyright" className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div> */}
    </MDBFooter>
  );
}