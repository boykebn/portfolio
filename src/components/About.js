import React from 'react';

// countup
import CountUp from 'react-countup';

// intersection observer hook
import { useInView } from 'react-intersection-observer';

// motion
import {motion} from 'framer-motion'

// variant
import {fadeIn} from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section p-0 ' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0'>
          {/* image */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] 
            mix-blend-lighten '></motion.div>
          {/* text */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
            <h2 className='h2 text-gradient mt-28'>About me.</h2>
            <h3 className='text-[25px] mb-4'>
              A beginner Full Stack Web Developer who has a passion in the IT field. 
              I have programming skills such as JavaScript, ReactJs, and NodeJs, I also have team collab experience working on web creation projects, 
              in team projects I have the opportunity to become a co-leader as well as a Front-End role. I am a fast learner, active, adaptive, 
              communicative, and able to collaborate in teams.
            </h3>

            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={5} duration={2} /> : null }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? <CountUp start={0} end={3} duration={2} /> : null }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Month of <br />
                  Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    );
};

export default About;
