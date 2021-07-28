import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.addEventListener('scroll', toggleVisible);
    };
  });

  const toggleVisible = (): void => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  return visible ? (
    <button
      className="p-3 fixed bottom-5 right-5 z-50 bg-black rounded-md"
      onClick={() => scroll.scrollToTop()}>
      <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5 text-white" scale={20} />
    </button>
  ) : null;
};

export default ScrollToTop;
