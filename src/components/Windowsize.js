import { useState, useEffect } from 'react'

export default function Windowsize() {
    const isSSR = typeof window !== "undefined";
    const [windowsize, setWindowsize] = useState({
        width : isSSR ? 1200 : window.innerWidth,
        height : isSSR ? 800 : window.innerHeight,
    });

    function changeWindowSize() {
        setWindowsize({
            width : window.innerWidth,
            height : window.innerHeight
        });
    }

    useEffect(()=>{
        window.addEventListener("resize",changeWindowSize);
    
        return ()=>{
            window.removeEventListener("resize",changeWindowSize);
        }
    }, []);

    return windowsize;
}