import {useEffect, useRef, useState} from "react";

export function useRenderComplete(componentName, effectsCount) {
    const [isStabilized, setIsStabilized] = useState(false);
    const effectsRef = useRef(0);
    const [startTime] = useState(performance.now());

    useEffect(() => {
        // Увеличиваем счетчик эффектов после каждого useEffect
        effectsRef.current += 1;
        console.log('$$$$ we are in useRenderComplete', effectsRef.current)
        if (effectsRef.current === effectsCount) {
            const endTime = performance.now();
            console.log(`${componentName} stabilized in ${endTime - startTime}ms`);
            setIsStabilized(true);
        }
    });

    return isStabilized;
}