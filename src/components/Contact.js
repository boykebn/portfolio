import React, {useRef} from 'react';

// for send email
import emailjs from '@emailjs/browser';

// motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '../variants';

const Contact = () => {
  const form = useRef();

  const [succesMessage, setSuccesMessage] = React.useState();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wob6cl6', 'template_btj0ebx', form.current, 'fssnSis9KvwbzEifL')
      .then((result) => {
        if (result) {
          setTimeout(() => {
            setSuccesMessage('Message successfully sent')
          }, 2000);
        } else {
          console.log(result.text);
        }
      }, (error) => {
          throw error
      });
      form.current.reset()
  };
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto mt-20 lg:mt-[1000px]'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-gradient font-medium
              mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 border rounded-2xl flex flex-col 
            gap-y-6 pb-24 p-6 items-start'>
              <input 
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all' 
              type='text' 
              placeholder='Subject'
              name='subject'
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all' 
              type='text' 
              placeholder='Your name'
              name='name'
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all' 
              type='text' 
              placeholder='Your email'
              name='email'
            />
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full
              placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
              placeholder='Your message'
              name='message'
            />
            <div className='flex gap-24'>
              <button className='btn btn-lg'>Send message</button>
              {succesMessage && (
                <div className="font-bold text-green-500 text-center text-lg">
                  {succesMessage}
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
