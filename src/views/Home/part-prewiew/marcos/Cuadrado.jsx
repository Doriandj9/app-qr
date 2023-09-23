import { useEffect } from "react";

const Cuadrado = ({ context, img, setContext= ()=>{} , dimesions}) =>{
        useEffect(() => {
                context.clearRect(0,0,dimesions.width,dimesions.heigth);
                context.fillStyle = 'white';
                context.fillRect(0,0,dimesions.width,dimesions.heigth);
                context.strokeStyle = 'black';
                context.lineWidth = 25;
                context.strokeRect(0,0, dimesions.width, dimesions.heigth);
                setContext(context);
        },[])
   return (<div className="border-4 border-black p-4">
          
           {img}
   </div>)
}

export default Cuadrado;