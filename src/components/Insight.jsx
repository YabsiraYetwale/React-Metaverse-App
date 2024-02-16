import {insights} from '../constants'
const Insight= () => {
  return (
  <>
    <div className='flex justify-center items-center py-[10rem]' >
        <div  className='lg:-top-[25rem] -top-[35rem] lg:left-[200px] left-[100px]  relative'>
            <p className='text-[#f5f5f5] text-center'>| Insight</p>
            <h1  className='lg:text-[50px] text-[30px] text-white font-bold w-[100%]'>Insight about metaverse</h1>
        </div>
        <div 
         className='flex relative lg:-left-[600px] -left-[100px] flex-col'>
            {insights.map((insight,i)=>(
            <div className='flex lg:flex-row flex-col ' key={i}>
                <img src={insight.imgUrl} alt='imgUrl' className='w-[220px] h-[200px] rounded-[15px] lg:mt-[40px] mt-[200px]'/>
                 <div className='flex'>
                 <h1 className='absolute text-white lg:text-[30px] text-[20px]  lg:left-[260px] -left-[100px] lg:w-[30vw] w-[60vw] lg:mt-[60px] mt-[10px]'>{insight.title}</h1>
                  <div className='absolute  w-[70px] h-[70px] rounded-full  flex justify-center items-center border-[1px] mt-[100px] -right-[700px]'>  
                    <img src='./arrow.svg' alt='arrow' className='lg:w-[30px]  h-[30px]'/>
                </div>             
                 </div>
                <p className='absolute text-[#eee] lg:left-[260px] -left-[100px] lg:w-[30vw] w-[60vw] lg:mt-[190px] mt-[500px]'>{insight.subtitle}</p>
            </div>

            ))}
        </div>
    </div>
  </>
  )
}

export default Insight