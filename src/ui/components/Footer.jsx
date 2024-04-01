
//Style Imports
import { AiOutlineGithub} from 'react-icons/ai';
import { BsLinkedin} from 'react-icons/bs';

export default function Footer(){
    return (
      <footer className=" w-full h-40 border-t-[2px]-gray-800  bg-indigo-950 opacity-95 
                flex flex-col justify-center items-center sticky z-50 top-0 text-zinc-300"
      >
            <div className="w-1/2 rounded-xl flex flex-col justify-center items-center gap-5 mx-auto">
                
                <ul className=" text-bodyGold text-base flex flex-row gap-10 justify-center items-center">
                    <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-amber-600'
                    >
                        <a   className='' rel="noopener noreferrer" href="https://github.com/hakeem0114" target="_blank">
                        <AiOutlineGithub size={30}/>
                        </a>            
                    </li>
                    <li className='transform transition duration-300 hover:scale-110 hover:cursor-pointer  hover:text-amber-600'
                    >
                        <a   className='' rel="noopener noreferrer" href="https://www.linkedin.com/in/hakeemabdul-razak/" target="_blank">
                        <BsLinkedin size={30}/>
                        </a>            
                    </li>
                </ul>
    
                <ul className=" text-bodyGold text-base text-center ">
                    <li>Copyright @ Hakeem Abdul-Razak 2024</li>
                </ul>
    
            </div>
      </footer>
    )
  }