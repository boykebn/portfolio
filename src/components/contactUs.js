// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_wob6cl6', 'template_btj0ebx', form.current, 'fssnSis9KvwbzEifL')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Subject</label>
//       <input className='text-black' type="text" name="subject" />
//       <label>Name</label>
//       <input className='text-black' type="text" name="name" />
//       <label>Email</label>
//       <input className='text-black' type="email" name="email" />
//       <label>Message</label>
//       <textarea className='text-black' name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default ContactUs;