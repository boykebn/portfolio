import React from 'react';

// motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '../variants';

// image
import img1 from '../assets/rsz_21.png'
import img2 from '../assets/rsz_2.png'
import img3 from '../assets/rsz_13.png'
import img4 from '../assets/rsz_4.png'
import img5 from '../assets/rsz_5.png'

// icons
import { RxExternalLink } from "react-icons/rx";


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto mt-20 lg:mt-[500px]'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <motion.div 
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}>
              <h2 className='h2 leading-tight text-gradient'>
                My Latest <br />
                Work.
              </h2>
              {/* <button className='btn btn-sm'>View all projects</button> */}
            </motion.div>
            {/* image 1 */}
            <motion.div 
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'>
              {/* link */}
              <a href='https://fw12-frontend-rose.vercel.app/'>
                <RxExternalLink className='flex flex-between absolute -bottom-full group-hover:top-3 group-hover:right-3 transition-all 
                duration-700 w-[30px] h-[30px] hover:text-accent' />
              </a>
              </div>
              {/* img */} 
              <img 
                className='group-hover:scale-125 transition-all duration-500' 
                src={img1} 
                alt='projects' 
                width={1440} 
                height={810} 
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-40 transition-all 
              duration-500 z-50'>
                <span className='text-gradient'>
                  Eastick
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-32 transition-all 
              duration-700 z-50'>
                <span className='text-3xl text-white'>Cinema ticket booking website</span>
              </div>
              {/* desc */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-0 transition-all 
              duration-1000 z-50'>
                <span className='leading-normal'>
                An online cinema ticket booking website. Able to login, register and transaction. 
                This website is made using ReactJs framework for Frontend, 
                Tailwindcss for UI, for backend using NodeJs, ExpressJs and Postgresql.
              </span>
              </div>
            </motion.div>
            
            {/* image 2 */}
            <motion.div 
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'>
              {/* link */}
              <a href='https://fw12-collab2-frontend-8og4.vercel.app/'>
                <RxExternalLink className='flex flex-between absolute -bottom-full group-hover:top-3 group-hover:right-3 transition-all 
                duration-700 w-[30px] h-[30px] hover:text-accent' />
              </a>
              </div>
              {/* img */} 
              <img 
                className='group-hover:scale-125 transition-all duration-500' 
                src={img2} 
                alt='projects' 
                width={1440} 
                height={810} 
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-40 transition-all 
              duration-500 z-50'>
                <span className='text-gradient'>
                  Our Coffe
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-32 transition-all 
              duration-700 z-50'>
                <span className='text-3xl text-white'>Coffee shop website</span>
              </div>
              {/* desc */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-0 transition-all 
              duration-1000 z-50'>
                <span className='leading-normal'>
                Coffee shop website, this website is done as a team consisting of 7 people, 
                in creating this website I got the role of Vice Chair as well as Front End. 
                This website can login, register, transaction, add and delete menus, etc.
              </span>
              </div>
            </motion.div>
          </div>
          <div className='flex-1 flex flex-col gap-y-10 mt-0 lg:mt-[155px]'>
            {/* image 3 */}
            <motion.div 
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'>
              {/* link */}
              <a href='https://fw12-katoku.vercel.app/'>
                <RxExternalLink className='flex flex-between absolute -bottom-full group-hover:top-3 group-hover:right-3 transition-all 
                duration-700 w-[30px] h-[30px] hover:text-accent' />
              </a>
              </div>
              {/* img */} 
              <img 
                className='group-hover:scale-125 transition-all duration-500' 
                src={img3} 
                alt='projects' 
                width={1440} 
                height={810} 
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-40 transition-all 
              duration-500 z-50'>
                <span className='text-gradient'>
                KantongKu
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-32 transition-all 
              duration-700 z-50'>
                <span className='text-3xl text-white'>E-Wallet website</span>
              </div>
              {/* desc */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-0 transition-all 
              duration-1000 z-50'>
                <span className='leading-normal'>
                E-Wallet website or online money storage, can Login, Register, Transfer and Top Up, 
                This website is made using the Nextjs, Tailwind and DaisyUi framework
              </span>
              </div>
            </motion.div>

            {/* image 4 */}
            <motion.div 
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'>
              {/* link */}
              <a href='https://fw12-frontend-collab.vercel.app/'>
                <RxExternalLink className='flex flex-between absolute -bottom-full group-hover:top-3 group-hover:right-3 transition-all 
                duration-700 w-[30px] h-[30px] hover:text-accent' />
              </a>
              </div>
              {/* img */} 
              <img 
                className='group-hover:scale-125 transition-all duration-500' 
                src={img4} 
                alt='projects' 
                width={1440} 
                height={810} 
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-40 transition-all 
              duration-500 z-50'>
                <span className='text-gradient'>
                Peworld
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-32 transition-all 
              duration-700 z-50'>
                <span className='text-3xl text-white'>Website for Job portals</span>
              </div>
              {/* desc */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-0 transition-all 
              duration-1000 z-50'>
                <span className='leading-normal'>
                Website for Job Seekers and Recruiters, this website was made by the team, where in making this website I got the role as Back-End. 
                This website can login as a Recruiter and Job Seeker, Register, Hiring for Recruiters, etc.
              </span>
              </div>
            </motion.div>

            {/* image 5 */}
            <motion.div 
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'>
              {/* link */}
              <a href='https://github.com/boykebn/fw12-rn-eastick/releases/tag/V1.0.1'>
                <RxExternalLink className='flex flex-between absolute -bottom-full group-hover:top-3 group-hover:right-3 transition-all 
                duration-700 w-[30px] h-[30px] hover:text-accent' />
              </a>
              </div>
              {/* img */} 
              <img 
                className='group-hover:scale-125 transition-all duration-500' 
                src={img5} 
                alt='projects' 
                width={1440} 
                height={810} 
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-40 transition-all 
              duration-500 z-50'>
                <span className='text-gradient'>
                Eastick Mobile
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-32 transition-all 
              duration-700 z-50'>
                <span className='text-3xl text-white'>Cinema ticket booking mobile version</span>
              </div>
              {/* desc */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-0 transition-all 
              duration-1000 z-50'>
                <span className='leading-normal'>
                An online cinema ticket booking mobile version. Able to login, register and transaction. 
                This website is made using ReactJs, React Native, 
                Tailwindcss, native base and for backend using NodeJs, ExpressJs and Postgresql.
              </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
