
import {motion} from 'framer-motion'
import {slideIn} from '../utils/motion'
import {exploreWorlds} from '../constants'
const ExploreCard  =({active,handleClick}) =>{
    return(
        <>
        <div className='flex flex-col justify-center items-center relative '>
         <div  className='flex lg:flex-row flex-col gap-[1rem] relative  px-[150px] py-[30px]'>
            {exploreWorlds.map((world,i)=>(
                <div key={i}  className={`relative ${
                    active === world.id ? 'lg:flex-[1.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
                  } flex items-center justify-center min-w-[90px] transition-[flex] duration-[0.7s]
                   ease-out-flex cursor-pointer`}>
                <motion.img variants={slideIn('left','spring',0.5*i,1)}
            initial='hidden'
            whileInView='show'
             src={world.imgUrl} alt='world' key={i} 
                className={`${active === world.id ? 'lg:h-[90vh] h-[50vh] rounded-[20px] relative left-[55px] ' :'w-[100vw] lg:h-[90vh] h-[20vh] rounded-[20px]'}`}
                onClick={()=>handleClick(world.id)}
                />
                <div className=' text-white  text-[20px] font-bold z-50'>
                {active === world.id ? 
                    <div  className='relative lg:-left-[290px] -left-[440px]  lg:top-[220px] top-[80px]'>
                        <img src='./headset.svg' alt='headset'/>
                        <div className='text-[15px] font-bold '>
                            ENTERTHEMETAVERSE
                        </div>
                        <p>{world.title}</p>
                    </div>:
                    <p className='relative lg:-left-[120px] -left-[330px]  lg:top-[220px] top-[20px] lg:rotate-[270deg] 
                    rotate-[0deg]'>{world.title}</p>}
                </div>

                </div>
                
            ))}
         </div>
        </div>
        </>
    )
}
export default ExploreCard