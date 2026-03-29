import {useEffect, useState, useRef} from 'react';

export const useScrollReveal = (options= {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px',

    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersection) {
                setIsVisible(true);
                observer.unobserve(element);
            }
        }, {threshold, rootMargin});

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [threshold, rootMargin]);

    return [elementRef, isVisible];
};