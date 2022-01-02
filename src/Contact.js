import React,{useState} from 'react'
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('');
    const[loader,setLoader]=useState(false);
    const isValidEmail = email => {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(String(email).toLowerCase());
  };
  const handleSubmit=(e)=>{
    if(isValidEmail && name &&message){
    
      e.preventDefault()
      emailjs.sendForm('service_9vbkg3p', 'alina.iacob', e.target, 'user_ZzW70dBKaOy8Q8Ff0pvPP')
      .then((result) => {
          console.log(result.text);
          setLoader(true)
          alert('Email was send')
      }, (error) => {
          console.log(error.text);
          setLoader(false)
      });
      e.target.reset()
      setName('');
      setEmail('');
      setMessage('')
      

    }
  }
   
    
    
    
    return (
        <form className='contact' onSubmit={handleSubmit} id='contact'>
         
              <div className='contactTop'>
               
                   <h1>Get in touch</h1>
                   <p className='contactTopInfo'>I am available to work on your projects and bring your ideas to life.</p>
                </div>
               <div className='contactCenter'>
                 <div className='contactLeft'>
                 <div className='name'>
                  <p>Name</p>
                  <input  type='text' value={name}
                   placeholder='Name'
                   name='name'
                   onChange={(e)=>setName(e.target.value)}/>
               </div>
                <div className='email'>
                  <p>Email</p>
                  <input  type='email' value={email}
                   placeholder='Email'
                   name='email'
                   onChange={(e)=>setEmail(e.target.value)}/>
               </div>

                
                <div className='message'>
                  <p>Message</p>
                
                   <textarea  value={message} rows='7' cols='1'
                   className='textarea'
                   placeholder='Message'
                   name='message'
                   onChange={(e)=>setMessage(e.target.value)}></textarea>
           </div>
                 </div>
              
           <div className='contactRight'>
             <img src='/contact-illustration.png'/>
            
           </div>
               </div>
                
     
            
            
           
          <div className='contactBottomSection'>
               <button type='submit'
               className={loader?'contact__buttonLoad':"contact__button"}
               >Submit</button>
          </div>
         
       
        </form>
    )
}

export default Contact;
