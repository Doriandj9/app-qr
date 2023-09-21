import { useEffect } from "react";
const proto = CanvasRenderingContext2D.prototype;
const Curvo = ({ context, img, setContext= ()=>{},dimesions , canvas }) =>{
   let radio = 0.1;
   const porcent = (canvas.width * 0.1) / 2;
   proto.roundRect = function (x,y,w,h,r) {
      const x2 = x + w;
      const y2 = y + h;
      context.moveTo(x + r, y);
      context.lineTo(x2 - r , y);
      context.quadraticCurveTo(x2,y, x2,y+r)  
      context.lineTo(x2, y2-r)
      context.quadraticCurveTo(x2,y2,x2-r,y2);
      context.lineTo(x+ r, y2)
      context.quadraticCurveTo(x,y2,x,y2-r);
      context.lineTo(x , y+r)
      context.quadraticCurveTo(x,y,x+r, y);
   }
   function draw (){
      context.clearRect(0,0, canvas.width, canvas.height);
      context.fillStyle = 'white';
      context.strokeStyle = 'black';
      context.lineWidth = 10;
      context.beginPath();
      context.roundRect(porcent - 10,porcent - 10,(canvas.width - porcent ) , (canvas.height - porcent),((dimesions.width) * radio))
      context.closePath();
      context.fill();
      context.stroke();
      setContext(context);
   }
   useEffect(() => {
      draw();
   },[])
   
   return (<div className="border-4 border-black p-4 rounded-xl">
           {img}
           
   </div>)
}
   
   export default Curvo;