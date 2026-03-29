import React from 'react'
import {useScrollReveal} from '../../hooks/useScrollSpy'

const ScrollReveal = (
  children,
  animation = 'fadeInUp',
  duration = 700,
  delay = 0,
) => {

    const [ref, isVisible] = useScrollReveal({treshold: 0.1});
    const animationClasses = {
      fadeUp: 'opacity-0 translate-y-8',
      fadeIn : 'opacity-0',
      slideLeft : 'opacity-0 -translate-x-12',
      slideRight : 'opacity-0 translate-x-12',
      scaleIn: 'opacity-0 scale-95'
    };
    const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation] || animationClasses.fadeIn} ${isVisible ? visibleClasses : ''
      }`}
      style={{
        transition: `all ${duration}ms ease-in-out`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal
