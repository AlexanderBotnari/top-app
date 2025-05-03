"use client";

import { useEffect, useState } from "react";

export function useScrollY() {

    const [scrollY, setScrollY] = useState(0);

    const isBrowser = typeof window !== "undefined";

    const handleScroll = () => {
        const currentScrollY = isBrowser ? window.scrollY : 0;
        setScrollY(currentScrollY);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return scrollY;
}