import { useState,useRef, useEffect } from "react";
import {MdOutlineAddTask} from 'react-icons/md';
import QRCode from 'react-qr-code';
import { useQrStore } from "../../../store/qrStore";
import QrElement from "../../../components/QrELement";

const UrlQr = () => {
    const [focus, setFocus] = useState(true);
    const [click,setClick] = useState(false);
    const [buttonDisable,setButtonDisable]= useState(false);
    const [data, setData] = useState('');
    const [svg,setSVG] = useState(null);
    const updateQrElement = useQrStore((state) => state.updateQrElement)
    const refTextarea = useRef();
    const handleKey = (e) => {
        if(e.target.value != ''){
            setFocus(false);
        }else{
            setFocus(true);
        }
    }
    const handelClick = (e) => {
        setClick(true);
        try {
            setSVG(<QrElement data={data} />);
            setClick(false);
            setButtonDisable(true);
        } catch (error) {
            console.error(error);
        }
    }
    const handleChange = (e) => {
        setData(e.target.value.trim());
        setButtonDisable(false);
    } 
    const handleLoad = (e) => {
        console.log('cargado');
    }

    const handleFocus = (e) => {
        refTextarea.current.focus();
    }

    useEffect(() => {
        updateQrElement(svg)
    },[svg])
    


    return(
        <>
        <textarea ref={refTextarea}
        onKeyUp={handleKey} style={{ resize: 'none' }}
            value={data}
            onChange={handleChange}
            className="w-full max-w-full text-2xl focus:outline-none p-2 relative resize-none rounded-3xl"></textarea>
            <div onClick={handleFocus}
            className={ focus ? "cursor-text select-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 inline-flex flex-col" : "hidden"  }>
                <span className="text-black/25"> Escribe una dirección web.</span>
                <span className="text-black/25 ">Por ejemplo: https://www.ejemplo.com</span>

            </div>
            <button onClick={handelClick}
            className={`w-1/4 absolute bottom-2 
            left-1/2 -translate-x-1/2 button-send
            ${buttonDisable ? 'button-disabled'  : ''}
            inline-flex items-center gap-2
            ${focus ? 'hidden':' '} 
            ${click ? 'button-click': ''}`
            }
            disabled={buttonDisable}
            >
                <MdOutlineAddTask className="text-2xl " />
                   <span>Crear código</span> 
            </button>
        </>
    );
}

export default UrlQr;