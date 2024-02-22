'use client';
import React, { useRef, useEffect, useState } from 'react';

interface IntersectionObserverProps {
  onIntersect: (isIntersecting: boolean) => void;
  root?: React.RefObject<HTMLElement>;
  threshold?: number;
  rootMargin?: string;
}

const IntersectionObserverComponent: React.FC<IntersectionObserverProps> = ({
  onIntersect,
  root = null,
  threshold = 0.5,
  rootMargin = '0px',
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: root ? root.current : null,
      rootMargin,
      threshold,
    };

    const observerInstance = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting !== isIntersecting) {
          setIsIntersecting(entry.isIntersecting);
          onIntersect(entry.isIntersecting);
        }
      });
    }, options);

    setObserver(observerInstance);

    return () => {
      if (observerInstance) {
        observerInstance.disconnect();
      }
    };
  }, [onIntersect, root, rootMargin, threshold, isIntersecting]);

  useEffect(() => {
    const currentObserver = observer;
    const currentTarget = targetRef.current;

    if (currentObserver && currentTarget) {
      currentObserver.observe(currentTarget);
    }

    return () => {
      if (currentObserver && currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observer]);

  return <div ref={targetRef} />;
};

export default IntersectionObserverComponent;
