import { motion } from 'framer-motion';

import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00ff00]'/>
          <div className='w-1 sm:h-80 h-40 bg-[#00ff00] bg-gradient-to-b'/>
        </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-gray`}>Hi, I'm <span className='text-[#00ff00]'>Mariana</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-gray-100`}>
              I develop great web applications <br className='sm:block hidden'/> and user interfaces
            </p>
          </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero