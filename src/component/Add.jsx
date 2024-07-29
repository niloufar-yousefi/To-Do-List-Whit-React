import React, { useEffect, useRef } from 'react'

export default function Add({myadd}) {

  const myRef  = useRef()  
  useEffect(() => {
   myRef.current.focus()
  }, [])

  
  
  return (
    <div  className='flex flex-wrap justify-center'>
      <form className='text-slate-50 w-[80%] md:w-[50%] lg:w-[30%] h-[50px] shadow-2xl border-2 border-slate-300 font-primary flex flex-wrap  justify-center *:h-full *:flex *:items-center *:justify-center '>
        
        <input ref={myRef}  className=' w-[70%] bg-transparent border-none  outline-none pl-10  placeholder:pl-2 placeholder:text-slate-50' type="text"  placeholder='Add items in your list'/> 
        <div onClick={()=>{myadd(myRef.current.value,myRef.current)}} className='w-[30%]'><button className=' text-5xl duration-75 ml-6 hover:rotate-[45deg] hover:text-slate-300' type="button">+</button></div> 
        
      </form>
    </div>
  )
}
