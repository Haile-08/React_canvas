import React, { useEffect, useRef } from 'react'
import '../App.css'

const Canvas = (props) => {
    const ref = useRef();

    const draw = (ctx) => {
        ctx.fillStyle = 'red';
        ctx.fillRect(10, 10, 100, 100)
    }

    useEffect(()=> {
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');
        
        draw(ctx);
    }, [])

    return <canvas ref={ref} {...props} className='canva'/>
}

export default Canvas