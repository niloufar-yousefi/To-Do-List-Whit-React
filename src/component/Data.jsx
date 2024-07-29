
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Data({dataBase} ) { 
   

   function edit(e) {    
    dataBase.map((item,index)=>{
        if(e.target.id == index){             
            e.target.nextElementSibling.focus()                          
      }
    })
   }

   function del(e) {    
    dataBase.map((item,index)=>{
        if(e.target.id == index){           
            e.target.parentElement.remove().remove()            
      }
    })
   }

    return (
        <div className=' '>
            {dataBase.map((item, index) => {
                return (
                    <div key={index}  className="w-full flex justify-center items-center mb-3 lg:mb-5">

                        <div className='bg-slate-50  group overflow-x-hidden text-[rgb(0,114,255)]  w-[80%] md:w-[50%] lg:w-[30%] h-[50px] shadow-2xl  font-primary flex items-center flex-wrap  justify-center  *:h-full *:flex *:items-center'>

                            <Edit edit={edit} id={item.id} />                       
                            <div contentEditable='true' className="border-none outline-none w-[60%]">{item.text}</div>
                            <Delete del={del} id2={item.id}/>

                        </div>

                    </div>
                )
            })}
        </div>
    )
}

function Edit({edit,id}) {
    return (        
        <div id={id} onClick={edit} className="group w-[20%] pl-4 relative cursor-pointer ">
            <div  className='pointer-events-none absolute duration-75 left-[-100%]  group-hover:left-[20%]'><FaRegEdit /></div>
         </div>       
    )
}

function Delete({del,id2}) {
    return (    
        <div id={id2} onClick={del} className="group w-[20%] justify-end  relative cursor-pointer">
            <div className='pointer-events-none absolute duration-75 left-[100%]  group-hover:left-0'><FaRegTrashAlt /></div>
        </div>     
    )
}
