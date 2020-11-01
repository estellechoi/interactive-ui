import { useEffect } from "react";

export const useIntersectionObserver = (targets, options) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) targets[index].handler();
                else targets[index].antiHandler();
            });
        }, options);
    
        targets.forEach(target => observer.observe(target.el.current));

        return () => targets.forEach(target => observer.unobserve(target.el.current));
    }, [targets, options]);
}