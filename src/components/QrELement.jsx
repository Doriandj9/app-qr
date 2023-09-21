import { useRef,useEffect } from 'react';
import QRCode from 'react-qr-code';
import { useQrStore } from '../store/qrStore';


const QrElement = ({data}) => {
    const svgRef = useRef();
    const updateQrRef = useQrStore((state) => state.updateQrRef);
    useEffect(() =>{
        updateQrRef(svgRef);
    },[])
    return (
        <QRCode className='max-w-full w-24 h-24'
         ref={svgRef}  value={data} size={250} viewBox={`0 0 256 256`} />
    );
} 

export default QrElement;