import {motion} from 'framer-motion'
import {planetVariants} from '../utils/motion'
import {whatsnews} from '../constants'
const WhatsNew = () => {
  return (
  <>
    <div className='flex justify-center items-center py-[10rem]' >
        <div  className='lg:flex-[0.5] lg:ml-[280px] ml-[50px]'>
            <p className='text-[#f5f5f5]'>| What's New?</p>
            <h1  className='lg:text-[50px] text-[30px]  text-white font-bold w-[50%]'>What's new about Metaversus?</h1>
            <div className='flex lg:flex-row flex-col'>
            {whatsnews.map((whatsnew,i)=>(
               <div className='text-[#eee] w-[50%] py-[20px] ' key={i}>
                <div  className='flex  justify-center items-center  bg-[#416166] 
                w-[50px] h-[50px] rounded-[10px]'>
                    <img src={whatsnew.imgUrl} alt='img'/>
                 </div>
                <div className=' text-[20px] font-bold'>{whatsnew.title}</div>
                <div className='w-[69%]'>{whatsnew.subtitle}</div>
               </div>
            ))}
            </div>
        </div>
        <motion.div 
         className='flex-[0.5] -ml-[100px]'
        variants={planetVariants('right')}
        initial='hidden'
        whileInView='show'
        >
            <img src='./whats-new.png' alt='whats-new' className='w-[350px] h-[350px] -mt-[100px]'/>
        </motion.div>
    </div>
  </>
  )
}

export default WhatsNew