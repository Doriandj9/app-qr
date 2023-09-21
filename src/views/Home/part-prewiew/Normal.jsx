import { useEffect } from "react";

const Normal = ({ context, img, setContext= () =>{},canvas }) =>{
    
    useEffect(() => {
        context.clearRect(0,0,canvas.width,canvas.height);
        context.fillStyle = 'white';
        context.fillRect(0,0,canvas.width,canvas.height);
        setContext(context);
    },[])

    return (<div>
            {img}
    </div>)
}

export default Normal;