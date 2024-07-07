import {useCallback, useEffect, useState} from "react";

export const useComponentLoadTime = (startTime, effectDependencies) => {
    const [effectComplete, setEffectComplete] = useState(false);

    const markEffectComplete = useCallback(() => {
        setEffectComplete(true);
    }, []);

    useEffect(() => {
        if (startTime && effectComplete) {
            const loadTime = Date.now() - startTime;
            console.log(`********************* Component loaded in ${loadTime}ms`);
            // Вы можете сохранить loadTime в состояние или отправить его на сервер
        }
    }, [startTime, effectComplete]);

    useEffect(() => {
        setEffectComplete(false);
    }, effectDependencies);

    return markEffectComplete;
}
