import {motion} from 'framer-motion'
import {planetVariants} from '../utils/motion'
import {getStarteds} from '../constants'
const GetStarted = () => {
  return (
  <>
    <div className='lg:flex  justify-center items-center' >
        <motion.div 
         className='lg:flex-[0.8] lg:ml-[300px] ml-[10px]'
        variants={planetVariants('left')}
        initial='hidden'
        whileInView='show'
        >
            <img src='./get-started.png' alt='get-started' className='w-[350px] h-[350px] -mt-[100px]'/>
        </motion.div>
        <div  className='lg:flex-[0.5] lg:-ml-[550px] ml-[80px]'>
            <p className='text-[#f5f5f5]'>| HOW METAVERSUS</p>
            <h1  className='lg:text-[50px] text-[30px]  text-white font-bold w-[70%]'>Get started with just a few clicks</h1>
            {getStarteds.map((getStarted,i)=>(
               <div className='text-[#eee]' key={i}>
                <div  className='flex  justify-center items-center  bg-[#416166] 
                w-[50px] h-[50px] rounded-[10px]'>
                  0{i+1}</div>
                <div className='flex flex-col -mt-[90px] py-[40px] ml-[70px] w-[34%]'>{getStarted.title}
                </div>
               </div>
            ))}
        </div>
    </div>
  </>
  )
}

export default GetStarted