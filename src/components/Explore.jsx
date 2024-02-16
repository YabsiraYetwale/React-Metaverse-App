import {useState} from 'react'

import ExploreCard from './ExploreCard'
const Explore  =() =>{
    const [active,setActive]=useState('world-2')
    return(
        <>
        <div id='explore' className='text-center relative -top-[200px]'>
        <h1 className='text-white lg:text-[50px] text-[30px] font-bold'>Choose the world you want <br/>to explore</h1>
         <div>
            <ExploreCard
                active={active}
                handleClick={setActive}
            />
         </div>

        </div>
        </>
    )
}
export default Explore