/* eslint-disable react/prop-types */
//Data Imports
import { pluginData } from "../../plugins/pluginData"

export default function Card({onCardClick}){

    function handleClick(title){
        onCardClick(title)
    }
    
    return(
        <>
           {pluginData.map((plugin)=>(
                <div 
                    key={plugin.id} 
                    className="flex justify-center items-center 
                        h-40 w-40 m-5 bg-[#423b4b] text-zinc-300
                        text-2xl hover:text-amber-600 hover:cursor-pointer hover:scale-105
                        transition-all ease-in-out duration-700 
                        border-4 border-transparent hover:border-amber-600 
                        rounded-2xl  
                    "
                    onClick={()=>handleClick(plugin.title)}
                >
                    <p className="">{plugin.title}</p>
                </div>
            ))
           }
        </>
    )
}