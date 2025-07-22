import React from 'react'


const Contact = () => {

  const handleform =(formData)=>{
    // console.log(FormData.entries());
    const forminputdata = Object.fromEntries(formData.entries()) //for get the form data 
    console.log(forminputdata);
    
    
  }

  return (
<>

<section className='section-contact'>
  <h2 className='container-title'>Contact Us</h2>


<div className="contact-wrapper container">
  <form action={handleform}>
    <input type="text" required autoCapitalize='false'  placeholder='Enter the name'  name='username' className='form-control'/>
    <input type="email" required autoCapitalize='false'  placeholder='Enter Your Mail'  name='email' className='form-control'/>
    <textarea name="messsage" required autoComplete='false' className='form-control' rows={10} placeholder='Type here...' ></textarea>
    <button type='submit' value="send">Send</button>
  </form>
  </div>
</section>
</>
  )
}

export default Contact