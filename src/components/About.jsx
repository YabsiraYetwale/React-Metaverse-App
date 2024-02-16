import {motion} from 'framer-motion'
import {textVariants} from '../utils/motion'
import {slideIn} from '../utils/motion'
const About  =() =>{
    return(
        <>
        <div className='flex flex-col justify-center gap-[2rem] items-center -mt-[50px] py-[8rem]'>
            <p className='relative  text-[#ccc] -top-[17rem] text-center'>| About Metaversus</p>
            <div className='text-[#aaa] text-[20px] text-center w-[58vw] relative -left-[50px] -top-[18rem]'>
                <span  className='font-extrabold text-white'>Metaverse </span>
                is a new thing in the future, where you can enjoy 
                   the virtual world by feeling like it's really real, 
                   you can feel what you feel in this metaverse
                   world, because this is really the
                 <span className='font-extrabold text-white'> madness of the metaverse</span>
                 of today, using only
                 <span className='font-extrabold text-white'> VR </span>
                 devices you can easily explore the metaverse world you want, 
                 turn your dreams into reality. Let's
                 <span className="font-extrabold text-white"> explore </span> 
                 the madness of the metaverse by scrolling down
            </div>
            <a href='#explore'><img src='./arrow-down.svg' alt='arrow-down' className='relative -top-[18rem] cursor-pointer'/></a>  
        </div>
        </>
    )
}
export default About