'use client'

import React, { ReactNode } from 'react'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface LazyComponentProps {
  children: ReactNode
  fallback?: ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
}

const LazyComponent: React.FC<LazyComponentProps> = ({
  children,
  fallback = <div className="h-32 bg-gray-100 animate-pulse rounded" />,
  threshold = 0.1,
  rootMargin = '50px',
  className,
}) => {
  const { ref, hasBeenVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  })

  return (
    <div ref={ref} className={className}>
      {hasBeenVisible ? children : fallback}
    </div>
  )
}

export default LazyComponent
