'use client';
import { useState, useEffect } from 'react';

type TypingAnimationProps = {
  keywords: string[];
};

export default function TypingAnimation({ keywords }: TypingAnimationProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
      }, 1500); // Pause for 1.5s at the end of a word
      return () => clearTimeout(pauseTimeout);
    }
    
    const type = () => {
      const currentKeyword = keywords[index];

      if (isDeleting) {
        setText(currentKeyword.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);
      } else {
        setText(currentKeyword.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
      }

      // If word is fully typed
      if (!isDeleting && subIndex === currentKeyword.length) {
        setIsPaused(true); // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 1500);
      }
      
      // If word is fully deleted
      else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % keywords.length);
      }
    };

    const timeout = setTimeout(type, isDeleting ? 75 : 150);
    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, keywords, isPaused]);

  return (
    <h2 className="text-2xl md:text-4xl font-headline font-semibold text-primary">
      {text}
      <span className="animate-ping">|</span>
    </h2>
  );
}
