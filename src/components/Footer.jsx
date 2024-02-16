import {socials} from '../constants'
const Footer=()=>{
 return(
    <>
    <div className='flex justify-center items-center flex-col py-[5rem]'>
        <div className='flex justify-center items-center lg:gap-[20rem] gap-[1rem]'>
            <div className='text-white lg:text-[40px] text-[20px] font-bold'>
                Enter the Metaverse
            </div>
            <div className='text-white  font-semibold flex justify-center items-center lg:w-[210px] w-[240px] h-[43px] rounded-[20px] gap-[0.5rem] bg-[#4444ff]'>
                <img src='./headset.svg' alt='headset'/>
                ENTERMETAVERSE
            </div>
        </div>
        <hr className='lg:w-[68%] w-[90%] mt-[20px] py-[15px]'/>
        <div className='flex lg:flex-row flex-col lg:gap-[8.5rem] gap-[2rem] relative lg:left-[2px] left-[40px]'>
            <h1 className='text-white text-[20px] font-bold'>Metaversus</h1>
            <p className='text-[#ccc]'> Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
            <div  className='flex gap-[1rem]'>
                {socials.map((social,i)=>(
                    <img src={social.url} alt='social' key={i}/>
                ))}
            </div>
          
        </div>
    </div>
    </>
 )
}
export default Footer