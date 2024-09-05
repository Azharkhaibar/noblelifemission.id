import { motion, useAnimation, useInView, useMotionValue, animate } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';

const IncrementText = ({ endNumber }) => {
    const [numberMotion, setNumberMotion] = useState(0);
    const controlsAnimation = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(0);
            const animation = animate(0, endNumber, {
                duration: 2,
                onUpdate: (latest) => {
                    setNumberMotion(latest.toFixed(0)); // Update the state with the animated value
                },
            });

            return () => animation.stop(); // Cleanup animation on component unmount
        }
    }, [isInView, endNumber, motionValue]);

    return (
        <motion.div ref={ref} className='incrementnumber'>
            {numberMotion}
        </motion.div>
    );
};

export default IncrementText;
