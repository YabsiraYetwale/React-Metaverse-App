import {motion} from 'framer-motion'
import {navVariants} from '../utils/motion'
const Header  =() =>{
    return(
        <>
        <header>
            <motion.div
            variants={navVariants}
            initial='hidden'
            whileInView='show'
            className='flex justify-around h-[80px]  py-5'

            >
                <img src='./search.svg' alt='search' className='w-[20px] cursor-pointer' />
                <div className='text-white font-bold text-[20px]'>METAVERSUS</div>
                <img src='./menu.svg' alt='menu' className='w-[25px] cursor-pointer' />
            </motion.div>
        </header>
        </>
    )
}
export default Header