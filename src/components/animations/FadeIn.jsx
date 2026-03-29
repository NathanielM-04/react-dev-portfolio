import React, {useRef, useState, useEffect} from 'react'

const FadeIn = ({children, delay=0, duration=500, treshold=0.1}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect (() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible){
            setIsVisible(true);
          }
        },
        {
          threshold: treshold,
          rootMargin: '0px 0px -50px 0px'
        }
      );
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current){
          observer.unobserve(elementRef.current);
        }
      };
    }, [treshold, isVisible]);

  return (
    <div
      ref={elementRef}
      className={isVisible ? 'oanimate-fadeIn' : 'opacity-0'}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'both' 
      }}
    >
      {children}
    </div>
  )
}

export default FadeIn
