import { useState, useEffect, useRef } from "react";

/**
 * @param callback 
 * @param delay 
 */
const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef<() => void>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current && savedCallback.current();
        }
        if (delay !== null && delay > 0) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        } else {
            tick();
        }
    }, [delay]);
};