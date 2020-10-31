import { useEffect } from "react";

export const useEventListener = (target, type, handler, ...options) => {
    useEffect(() => {
        target.addEventListener(type, handler, options);
        return () => target.removeEventListener(type, handler, options);
    }, [target, type, handler, options]);
}