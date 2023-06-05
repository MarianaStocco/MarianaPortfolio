import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max: 45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction</p>
        <h2 className={styles.heroHeadText}>
          Overview</h2>
      </motion.dev>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        From an early age, I have been in the search of a life purpose, and somehow I always found myself turning to the artistic and creative side of me to find all the answers. I found what I was looking for in each new area I ventured into: create something as I pleased, perfect my techniques, feel proud of my sense of achievement, and above all, realize that I could always learn more, acquire better and greater skills. Drawing, painting, design, crochet... When I discovered JavaScript I couldn’t help to compare its learning process to that of crochet; the way to hold the needle, the necessary tension of the thread. They are also similar in the sense that, you need to learn appropriate techniques- and tirelessly repeat them all- to truly acquire them. At first, the end product seems to be quite rudimentary. With constant effort, it all evolves from something plainly acceptable and nice into something beautifully functional. The vast world of a full stack developer; the almost infinite range of possibilities- with the use of combined technology- is exactly what fascinated and attracted me. I love being able to create products that help other people and encourage my professional and personal growth. I am a Full Stack Developer, I'm a creative and I'm an artist, I am the right person to develop the applications that you need
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard  key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')