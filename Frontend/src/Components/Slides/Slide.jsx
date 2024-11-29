import React, { useState, useEffect } from 'react';
import './Slide.css';
import tech from '../../asserts/techs.jpeg'; 

const Slide = () => {
    const [translateX, setTranslateX] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTranslateX(prev => prev - 1);
        }, 10);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (translateX <= -100) {
            setTranslateX(0);
        }
    }, [translateX]);

    return (
        <div className="container">
            <h2>Technologies</h2>
            <div className="image-container" style={{ transform: `translateX(${translateX}%)` }}>
                {[...Array(2)].map((_, index) => (
                    <div key={index} className="image" style={{ display: 'inline-block', minWidth: '100%' }}>
                        <img src={tech} alt="sliding-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slide;
