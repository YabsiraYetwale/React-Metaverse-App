import {motion} from 'framer-motion'
import {slideIn2} from '../utils/motion'
import {zoomIn} from '../utils/motion'
const Feedback = () => {
    return (
        <>
        <div className='flex justify-center items-center gap-[2rem] py-[3rem]'>
            <motion.div 
               className='w-[270px] lg:h-[430px] h-[700px]
               bg-[rgba(4,4,4,0.3)] 
               rounded-[10px] px-[33px]'
               variants={slideIn2('left','tween',1,1)}
               initial='hidden'
               whileInView='show'
               >
                
                <div className='relative top-[120px] text-white'>
                <h4 className='text-[25px] font-bold '>Samantha</h4>
                <p> Founder | Metaverus</p>
                <p className='text-[16px] font-bold relative top-[40px]'>
                    “With the development of today's technology, metaverse is very
                    useful for today's work, or can be called web 3.0. by using
                    metaverse you can use it as anything”
                </p>
                </div>
            </motion.div>
            <motion.div 
              variants={slideIn2('right','tween',1,1)}
              initial='hidden'
              whileInView='show'
            className='w-[600px] lg:h-[430px] h-[700px] bg-white rounded-[10px]'>
                <img src='./planet-09.png' alt='planet' className='w-[100vw] lg:h-[430px] h-[700px] rounded-[10px]'/>
                
                <motion.a variants={zoomIn(0.4, 1)} initial='hidden'
                whileInView='show' href='#explore'>
                    <img src='./stamp.png' alt='stamp' className='w-[100px] h-[100px]  -top-[420px] -left-[4rem] relative' />
                </motion.a>

            </motion.div>
        </div>
        </>
    )
}
export default Feedback