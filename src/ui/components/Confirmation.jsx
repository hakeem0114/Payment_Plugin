//React Imports 
import { useEffect} from "react"

export default function Confirmation(){

    useEffect(()=>{
        const redirectTimeOut = setTimeout(()=>{
            window.location.reload()
        },2000)

        return()=>clearTimeout(redirectTimeOut)
        
    },[])

    return(
        <>
            <div className="my-10 w-6/12 p-6 bg-white rounded-md  shadow-indigo-700 shadow-md ">
                <p className="text-center uppercase text-green-700 text-2xl font-bold ">Payment Succeeded</p>
            </div>
        </>
    )
}