import React from 'react'

const ContactMe = () => {
  return (
    <div className='contact-me my-5 py-5'>
        <form action="">
            <div className='contact-form container gap-5 '>
                <div className='row gap-5 row-1 ' >
                    <div className=' col-md gap-5-4'>  
                        <label htmlFor="name" className='fs-2 display-1 my-4'><h1>Name</h1></label>                      
                        <input type="text" id="name" name="name" placeholder="Your Name"  required />                        
                    </div>
                    <div className=' col-md gap-5'>
                        <label htmlFor="email" className='fs-2 display-1 my-4'> <h1>E-Mail</h1></label>
                        <input type="email" name="email" id="email" placeholder='E-Mail'  required/>                        
                    </div>
                </div>
                <div className='row gap-5 row-1'>
                    <div className='col-md gap-5'>

                        <label htmlFor="phoneNumber" className='fs-2 display-1 my-4'><h1>Phone Number</h1></label>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder='Phone Number'required/>
                    </div>
                    <div className='col-md gap-5'>
                        <label htmlFor="msg" className='fs-2 display-1 my-4'><h1>Message</h1></label>
                        <textarea type="text" name="msg" id="msg" placeholder='Message'  required/>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center '>
                    <button type="submit" className='btn btn-submit btn-lg custom-letter-spacing p-3 fs-3'>Send Message <i className='bi bi-arrow-right-square'></i></button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ContactMe