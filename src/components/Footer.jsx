import React from 'react';

function Footer(){
    return(
        <div className='footer'> 
            <p>Copy@  {new Date().getFullYear()} Rights Reserved.</p>
        </div>
    );
}

export default Footer;