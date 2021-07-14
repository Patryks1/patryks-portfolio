import React, { useEffect, useRef, useState } from 'react';

interface IFadeInSectionProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const FadeInSection = (props: IFadeInSectionProps): JSX.Element => {
  const { children, className } = props;
  const domRef = useRef<HTMLElement>();
  const [isVisible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);

        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <section
      ref={domRef}
      className={`fade-in-section ${className} ${isVisible ? ' is-visible' : ''}`}>
      {children}
    </section>
  );
};

export default FadeInSection;
