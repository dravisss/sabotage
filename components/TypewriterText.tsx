'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number; // ms
  onDone?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className = '', delay = 0, onDone }) => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={className}>
      {show && (
        <Typewriter
          words={[text]}
          loop={1}
          cursor
          typeSpeed={38}
          deleteSpeed={0}
          delaySpeed={1000}
          onLoopDone={onDone}
          onType={undefined}
        />
      )}
    </span>
  );
};
