import React from 'react';

// import image
import ava from '../assets/avatarme.png';

// icons
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

// type animation
import {TypeAnimation} from 'react-type-animation'

// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
import { Link } from 'react-scroll';


const Banner = () => {
  return (
    <section className='min-h-[70vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              BOYKE <span>BERRY NUGRAHA.</span>
            </motion.h1>
              <motion.div 
                variants={fadeIn('up', 0.4)} 
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: false, amount: 0.7}} 
                className='mb-2 text-[30px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]'>
                <span className='text-white mr-2'>I am a <br />beginner</span>
                <TypeAnimation 
                  sequence={[
                    'Fullstack Web Developer.',
                    2000,
                    'Frontend Web Developer.',
                    2000,
                  ]}
                  speed={50}
                  className='text-accent font-bold'
                  wrapper='span'
                  repeat={Infinity}
                  />
              </motion.div>
              {/* <p className='mb-4 max-w-lg mx-auto lg:mx-0'>
                A beginner Full Stack Web Developer who has a passion in the IT field. 
                I have programming skills such as JavaScript, ReactJs, and NodeJs, I also have team collab experience working on web creation projects, 
                in team projects I have the opportunity to become a co-leader as well as a Front-End role. I am a fast learner, active, adaptive, 
                communicative, and able to collaborate in teams.
              </p> */}
              <motion.div 
                variants={fadeIn('up', 0.5)} 
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: false, amount: 0.7}} 
                className='flex max-w-max gap-x-6 items-center mb-5 mx-auto
                lg:mx-0'>
                <Link 
                  to='contact' 
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='cursor-pointer btn btn-lg flex items-center'>
                    Contact me
                </Link>
                <a href='#' className='text-gradient btn-link'>
                  My Portfolio
                </a>
              </motion.div>
              {/* socials */}
              <motion.div 
                variants={fadeIn('up', 0.6)} 
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: false, amount: 0.8}} 
                className='flex text-[20px] gap-x-5 max-w-max mx-auto
                lg:mx-0 mb-18'>
                <a href='https://github.com/boykebn'>
                  <FaGithub className='w-[30px] h-[30px]' />
                </a>
                <a href='https://www.linkedin.com/in/boyke-berry-nugraha-907451147/'>
                  <FaLinkedin className='w-[30px] h-[30px]' />
                </a>
                <a href='https://www.instagram.com/gajahbercula/'>
                  <FaInstagram className='w-[30px] h-[30px]' />
                </a>
              </motion.div>
          </div>
          {/* image */}
          <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[550px]'>
              <img src={ava} width={550} height={550} alt='avatar' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
