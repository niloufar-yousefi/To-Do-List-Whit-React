import React from 'react'
import Add from './component/Add'
import Data from './component/Data'
import { useState } from 'react';
import { data } from './data/data'
let flag = 2

export default function App() {
  
  
  const [dataBase,setDataBase] = useState(data)

  function myadd(_valueInp,Inp) {    
   flag++    
   setDataBase( (x)=>{
    return [...x,{ id: flag, text: _valueInp }]
   }   
   )
   Inp.value = ''

  }
  return (
    <div className='flex flex-wrap justify-center content-center bg-[rgb(0,114,255)] w-full min-h-[100vh] overflow-x-hidden *:w-full  py-20 *:mb-5 *:lg:mb-10'>
      
      <h1 className='font-primary text-xl lg:text-3xl text-slate-50 text-center'>JUST DO THE LIST</h1>
      <Add myadd = {myadd}/>
      <Data dataBase={dataBase}/>     
      <p className='fixed bottom-1 text-sm text-slate-400 text-center font-primary'>Developed By Niloofar Yoosefi</p>
    </div>
  )
}
