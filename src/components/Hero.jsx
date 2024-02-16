import {motion} from 'framer-motion'
import {textVariants} from '../utils/motion'
import {slideIn} from '../utils/motion'
const Hero  =() =>{
    return(
        <>
        <div className='flex flex-col justify-center items-center'>
            <motion.h1
            variants={textVariants(1.1)}
            initial='hidden'
            whileInView='show'
            className='text-white lg:text-[90px] text-[60px] font-bold'>
                METAVERSE
            </motion.h1>
            <motion.h1
            variants={textVariants(1.2)}
            initial='hidden'
            whileInView='show'
            className='text-white lg:text-[90px] text-[60px] font-bold flex z-10 '>
                <div className='right-3 relative'>MA</div>
                <div className=' border-solid  lg:w-[130px] w-[110px] lg:h-[65px] h-[47px] rounded-r-[13rem] lg:top-9 top-5 right-1   border-[13px]  relative'/>
                <div>NESS</div>
            </motion.h1 >
            <motion.div 
            variants={slideIn('right','tween',0.2,1)}
            initial='hidden'
            whileInView='show'
            >
                <div className="relative lg:w-[65vw] w-[80vw] h-[300px] hero-gradient rounded-tl-[140px] -top-[50px]  " />
                <img src='./cover.png' alt='cover' className='lg:w-[65vw] w-[80vw] h-[60vh] rounded-tl-[140px] -top-[330px] relative' />
                <a href='#explore'><img src='./stamp.png' alt='stamp' className='w-[90px] h-[90px]  -top-[370px] left-[47rem] relative' /></a>
            </motion.div>
        </div>
        </>
    )
}
export default Hero