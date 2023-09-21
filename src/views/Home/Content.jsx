import {TbWorldWww} from 'react-icons/tb';
import { useEffect, useState } from "react";
import UrlQr from './parts/UrlQr';
const Content = () => {
    const components = {            
        url: <UrlQr />,
        whatsapp: ''
    }; 
    const [renderComponent, setRenderComponent] = useState(components.url);
    const handelClick = (e) => {
        e.stopPropagation();
        const component = e.target.dataset.component;
        setRenderComponent(components[component])
    }
    
    return (
        <div style={{ width: '55%' }} className="border-2 border-primary rounded-3xl flex max-md:w-4/5 max-w-full relative">
            <div className="w-1/6 border-r border-primary bg-ternary h-full inline-flex flex-col items-center justify-start gap-2">
                <button onClick={handelClick}
                data-component="url"
                className="flex gap-1 items-center p-2
                hover:bg-primary hover:text-white transition-colors duration-300
                 text-secondary font-bold w-full rounded-tl-3xl border-b-2 justify-center border-b-primary">
                    <TbWorldWww className="text-2xl pointer-events-none" />
                    <span className="text-xs pointer-events-none">Página web</span>
                </button>
            </div>
            {
                renderComponent
            }

            
        </div>
    );
}

export default Content;