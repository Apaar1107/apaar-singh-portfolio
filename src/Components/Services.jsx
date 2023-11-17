import React from 'react'
import { motion } from 'framer-motion'
import{  AiFillGithub, AiFillLayout, AiFillHtml5}from 'react-icons/ai'
import {FaCss3, FaReact} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {FiCode} from 'react-icons/fi';
import {MdCloud} from 'react-icons/md'
const Services = () => {
    const animations={
        whileInView:{
        x:0,
        y:0,
        opacity:1
        },
        one:{
            opacity:0,
            x:"-100%",
        },
       
        twoandthree:{
            opacity:0,
            y:"-100%",
        },
        four:{
            opacity:0,
            x:"100%",
        },

    }
  return (
    <div id='skills'>
        <h2>Skills</h2>
        <section>
        

      <motion.div    whileInView={animations.whileInView} initial={animations.twoandthree}  className='serviceBox2'> 
                
                  <AiFillHtml5/>
                 <span>HTML</span>
      </motion.div>      

      <motion.div    whileInView={animations.whileInView}  initial={animations.twoandthree} 
      transition={{delay:0.2}}  className='serviceBox3'> 
                 <FaCss3/>
                 <span>CSS & SASS</span>
      </motion.div>  
      <motion.div   whileInView={animations.whileInView}  initial={animations.four}  className='serviceBox4'> 
               <FiCode/>
                 <span>Tailwind</span>
      </motion.div>  
      <motion.div   whileInView={animations.whileInView}  initial={animations.four}  className='serviceBox4'> 
                 <IoLogoJavascript/>
                 <span>Javascript</span>
      </motion.div>  
      <motion.div   whileInView={animations.whileInView}  initial={animations.four}  className='serviceBox4'> 
                 <FaReact/>
                 <span>React Js</span>
      </motion.div>  
      <motion.div   whileInView={animations.whileInView}  initial={animations.four}  className='serviceBox4'> 
                 <AiFillLayout/>
                 <span>Chakra UI</span>
      </motion.div> 
      <motion.div   whileInView={animations.whileInView}  initial={animations.four}  className='serviceBox4'> 
                 <AiFillGithub/>
                 <span>Git</span>
      </motion.div> 

      <motion.div   whileInView={animations.whileInView}  initial={animations.four}  className='serviceBox4'> 
                 <MdCloud/>
                 <span>REST API</span>
      </motion.div> 
      

        </section>
    </div>
  )
}

export default Services