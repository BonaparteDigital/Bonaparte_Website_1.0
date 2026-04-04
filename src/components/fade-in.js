import React, { useEffect, useRef, useState } from 'react'

/**
 * Wraps children in a scroll-triggered fade-in animation.
 * Elements start invisible and slide up into view when they enter the viewport.
 *
 * Props:
 *   delay     — ms delay before the transition starts (for staggered groups)
 *   className — forwarded to the wrapper div for layout control
 *   distance  — px to translate from (default 24)
 */
const FadeIn = ({ children, delay = 0, distance = 24, className = '' }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${distance}px)`,
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default FadeIn
