import FalseQr from "../../components/FalseQr";
import { useQrStore } from "../../store/qrStore";
import {PiFrameCornersBold} from 'react-icons/pi';
import { AiOutlineDownload } from 'react-icons/ai';
import { useEffect, useState } from "react";
import Normal from "./part-prewiew/Normal";
import Cuadrado from "./part-prewiew/Cuadrado";
import Curvo from "./part-prewiew/Curvo";
const dimesions = {
    width: 400,
    heigth: 400
}
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
    canvas.width = dimesions.width;
    canvas.height = dimesions.heigth;
    context.fillStyle = 'white';
    context.fillRect(0,0,canvas.width,canvas.height);

const Preview = () => {
    const qrElemet = useQrStore((state) => state.qrElement);
    const qrRef = useQrStore((state) => state.qrRef);
    const [cxt,setCxt] = useState(context);
    const [opSelection, setOpSelection] = useState('normal');
    const [elementStyleQR,setElementStyle] = useState(null);
    const marcosQr = {
        normal: <Normal context={cxt} img={qrElemet} setContext={setCxt} canvas={canvas} />,
        cuadrado: <Cuadrado context={cxt} img={qrElemet} setContext={setCxt} dimesions={dimesions} /> ,
        curvo: <Curvo context={cxt} img={qrElemet} setContext={setCxt} dimesions={dimesions} canvas={canvas} />
    }
    
    const handleDownload = (e) => {
        const svgSerialize = new XMLSerializer();
        const svgString = svgSerialize.serializeToString(qrRef.current);
        const link = document.createElement('a');
        const img = new Image();
        if(qrElemet){
            
            img.src = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgString);
            img.onload = (e) => {
                const sx = (canvas.width * 0.25);
                const sy = (canvas.height * 0.25);
                const w = canvas.width -  sx;
                const h = canvas.height - sy;
                const div = (sy / 2);
                console.log(sy,sx, w,h);
                link.download = 'Dcodigo Qr.png';
                cxt.drawImage(img,div,div, w ,h);
                link.href = canvas.toDataURL();
                link.click();
            }
        }
    }
    const handleClick = (e) => {
        e.stopPropagation();
        const op = e.target.dataset.op;
        setOpSelection(op);

    }
    useEffect(() =>{

        setElementStyle(marcosQr[opSelection]);

    },[qrElemet,opSelection])
    return (
        <div className="border-2 border-primary rounded-3xl w-1/4 flex max-lg:w-[30%]
        max-md:w-4/5
        ">
            <div className="w-1/6 border-r border-primary bg-ternary h-full">
                <ul className="">
                    <li className="w-full border-b border-primary bg-green-100 text-green-900 rounded-tl-3xl">
                        <button className="w-full flex flex-col justify-center items-center py-2">
                            <PiFrameCornersBold className="text-2xl pointer-events-none" />
                            <span className="text-xs pointer-events-none"> Marcos </span> 
                        </button>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col flex-grow">
            <div className="border-b border-primary bg-ternary py-6 text-center text-black/50">
            Previsualización 
            </div>    
               <div className="max-w-full flex justify-center items-center border-b border-primary h-52">
                    <section className="w-11/12 flex justify-center">
                        <div >
                        
                        { qrElemet ?  elementStyleQR : <FalseQr /> }

                        </div>

                    </section>
               </div>
                <div className="">
                    <ul
                     className={`w-full max-w-full bg-ternary h-32 flex gap-2 px-4 items-center ${!qrElemet ? 'pointer-events-none button-disabled' : ''}`}>
                    <li>
                            <button disabled={!qrElemet}
                            data-op= 'normal' onClick={handleClick}
                            className={qrElemet && opSelection === 'normal' ?  'list-active' :
                            `rounded-lg  w-[4.5rem]
                            border-2 border-primary
                            flex justify-center items-center
                            flex-col gap-2
                            hover:bg-primary
                            hover:text-white
                            duration-500 transition-colors
                            button-list`}>
                                <span className="border-2 inline-flex mt-4
                                justify-center items-center w-8 h-8 
                                border-white text-xs p-2 mb-2 pointer-events-none">
                                    QR
                                </span>
                                <span className="text-xs p-2 border-t
                                border-primary inline-block w-full pointer-events-none"> normal </span> 
                            </button>
                        </li>
                        <li>
                            <button data-op= 'cuadrado' onClick={handleClick}
                            className={opSelection === 'cuadrado' ?  'list-active' :
                            `rounded-lg  w-[4.5rem]
                            border-2 border-primary
                            flex justify-center items-center
                            flex-col gap-2
                            hover:bg-primary
                            hover:text-white
                            duration-500 transition-colors
                            button-list`}>
                                <span className="border-2 inline-flex mt-4
                                justify-center items-center w-8 h-8 
                                border-black text-xs p-2 mb-2 pointer-events-none">
                                    QR
                                </span>
                                <span className="text-xs p-2 border-t
                                border-primary inline-block w-full pointer-events-none"> cuadrado </span> 
                            </button>
                        </li>
                        <li>
                            <button data-op= 'curvo' onClick={handleClick}
                            className={opSelection === 'curvo' ?  'list-active' :
                            `rounded-lg  w-[4.5rem]
                            border-2 border-primary
                            flex justify-center items-center
                            flex-col gap-2
                            hover:bg-primary
                            hover:text-white
                            duration-500 transition-colors
                            button-list`}
                            >
                                <span className="border-2 inline-flex mt-4 rounded-md
                                justify-center items-center w-8 h-8 
                                border-black text-xs p-2 mb-2 pointer-events-none">
                                    QR
                                </span>
                                <span className="text-xs p-2 border-t
                                border-primary inline-block w-full pointer-events-none"> curvo </span> 
                            </button>
                        </li>
                    </ul>
                    <div className="w-ful flex justify-center mt-4">
                        <button onClick={handleDownload}
                            disabled={!qrElemet}
                            className={`w-4/5 button-send justify-center
                            inline-flex items-center gap-2 py-3 text-xl`
                            }
                            >
                                <AiOutlineDownload className="text-2xl " />
                                <span>Descargar</span> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preview;