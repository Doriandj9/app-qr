import { useState } from "react";
import {RxDropdownMenu} from 'react-icons/rx';
import {CgCloseR} from 'react-icons/cg';
import 'animate.css';
import logo from './../assets/imgs/Logo-Qr.svg';
import {GoDownload} from 'react-icons/go';
import {BsQrCode} from 'react-icons/bs';
const Header = () => {
    const [hidden, setHidden] = useState(false);
    const [hiddenButton, setHiddenButton]  = useState(false);
    const [animateName,setAnimateName] = useState('animate__backInDown');
    useState(() => {
        if(document.documentElement.clientWidth <= 640){
            setHiddenButton(true);
        }
        window.addEventListener('resize', e => {
            if(document.documentElement.clientWidth <= 640){
                setHiddenButton(true);
            }else {
                setHiddenButton(false);
            }
        })
    },[]);
    
    const handelClick = () => {
        setAnimateName('animate__backInDown');
        setTimeout(()=>{
            setHidden(true);
        },500);
    }
    const handelClickClose = () => {
        setAnimateName('animate__backOutUp')
        setTimeout(() => {
            setHidden(false);
        },500)
    }

    return (
        <>
            <header className="bg-ternary flex pt-4 pb-4 relative items-center">
                <div className=" w-2/5">
                    <img className="block w-40 h-20 max-sm:w-20 max-sm:h-10" src={logo} alt="" />
                </div>
                <div className="grow">
                    <nav className="">
                        <ul className="hidden sm:flex justify-around">
                            <li>
                                <button className="flex gap-1 items-center"
                                >
                                    <GoDownload className="text-3xl text-primary" />
                                    <span className="text-secondary">Descargar</span>
                                </button>
                            </li>
                            <li>
                                <button className="flex gap-1 items-center"
                                >
                                    <BsQrCode className="text-2xl text-primary" />
                                    <span className="text-secondary">Crear Qr</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                <div className="absolute right-5 flex flex-col items-end justify-center">
                    {
                    hidden ? 
                    <button  onClick={handelClickClose} className={ hiddenButton ? " " : "hidden"  }>
                        <CgCloseR 
                        className="text-3xl text-primary"
                        />    
                    </button>
                    :
                    <button  onClick={handelClick} className={ hiddenButton ? " " : "hidden"  }>
                        <RxDropdownMenu 
                        className="text-3xl text-primary"
                        />    
                    </button>
                    }
                    <nav className="">
                        <ul className={hidden ? `sm:hidden bg-ternary animate__animated ${animateName} 
                        flex flex-col 
                        animate__faster` : "hidden"}>
                                <li className="border-2 border-primary border-b-transparent bg-secondary" >
                                <button className="flex gap-1 items-center pl-5 pr-5 pt-2 pb-2 "
                                >
                                    <GoDownload className="text-2xl text-primary" />
                                    <span className="text-white">Descargar</span>
                                </button>
                            </li>
                            <li className="border-2 border-primary bg-secondary">
                                <button className="flex gap-1 items-center pl-5 pr-5 pt-2 pb-2"
                                >
                                    <BsQrCode className="text-2xl text-primary" />
                                    <span className="text-white">Crear Qr</span>
                                </button>
                            </li>
                            </ul>
                    </nav>
                </div>
                
                </div>
            </header>
        </>
    );
}

export default Header;