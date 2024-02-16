export const navVariants={
    hidden:{
        y:-50,
        opacity:0,
        transition:{
           type:'spring',
           damping:140
        }
    },
    show:{
        y:0,
        opacity:1,
        transition:{
           type:'spring',
           delay:1
        }
    }
}

export const textVariants=(delay)=>({
    hidden:{
        y:50,
        opacity:0,
        transition:{
           type:'spring',
        }
    },
    show:{
        y:0,
        opacity:1,
        transition:{
           type:'spring',
           duration:1.25,
           delay
        }
    }
})

export const slideIn=(direction,type,delay,duration)=>({
    hidden:{
        x:direction ==='right' ? '100%' : direction==='left'? '-100%' : '0',
        y:direction ==='up' ? '100%' : direction==='down'? '-100%' :'0',
        transition:{
           type:'spring',
        }
    },
    show:{
        x:0,
        y:0,
        transition:{
           type,
           delay,
           duration,
            ease: 'easeOut',
        }
    }
})

export const slideIn2=(direction,type,delay,duration)=>({
    hidden:{
        opacity:0,
        x:direction ==='right' ? '100%' : direction==='left'? '-100%' : '0',
        y:direction ==='up' ? '100%' : direction==='down'? '-100%' :'0',
        transition:{
           type:'spring',
        }
    },
    show:{
        opacity:1,
        x:0,
        y:0,
        transition:{
           type,
           delay,
           duration,
            ease: 'easeOut',
        }
    }
})

export const planetVariants=(direction)=>({
    hidden:{
        x:direction === 'right' ?'100%' :'-130%',
        rotate:'150'
    },
    show:{
        x:0,
        rotate:0,
        transition:{
            type:'spring',
            delay:1.25,
            duration:1
        }
    }

})
export const zoomIn = (delay, duration) => ({
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });