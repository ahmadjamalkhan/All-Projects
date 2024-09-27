import React from 'react'
import mail from "../images/mail.png"
import phone from "../images/phone.png"
import pin from "../images/pin.png"
function Location() {
  return (
    <div className='top-nav'>
        <div className="container items-center flex">
            <div className='left'>
                <p className='flex items-center gap-2' ><span> <img src={pin} alt="" /> </span> Rezilla, 18 Grattan St, Brooklyn</p>
            </div>
            <div className="right flex gap-4 ">
                <p className='flex gap-2 phone items-center'> <span> <img src={phone} alt="" /> </span> +1 206-214-2298</p>
                <p className='flex gap-2 items-center mail'><span> <img src={mail} alt="" /> </span> support@rezilla.com</p>
            </div>
        </div>
    </div>
  )
}

export default Location