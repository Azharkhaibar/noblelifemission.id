import { useState, useEffect, RefObject } from 'react';

const useOnScreen = (ref: RefObject<HTMLElement>): boolean => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);
    return isVisible;
};

export default useOnScreen;
