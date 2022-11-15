import React from 'react';

function Foot (){
    return( 
<div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' ,top:"50px"}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    );
}
export default Foot;