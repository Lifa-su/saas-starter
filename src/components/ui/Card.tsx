// ============================================================
// Card Component
// Versatile card container with optional hover effects
// ============================================================

import { clsx } from 'clsx'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  variant?: 'default' | 'bordered' | 'elevated'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, padding = 'md', variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'rounded-2xl transition-all duration-300',
          // Variants
          {
            'bg-white dark:bg-surface-800/50': variant === 'default',
            'bg-white dark:bg-surface-800/50 border-2 border-surface-100 dark:border-surface-700/50':
              variant === 'bordered',
            'bg-white dark:bg-surface-800/50 shadow-lg shadow-surface-200/50 dark:shadow-surface-900/50':
              variant === 'elevated',
          },
          // Padding
          {
            'p-0': padding === 'none',
            'p-4': padding === 'sm',
            'p-6': padding === 'md',
            'p-8': padding === 'lg',
          },
          // Hover effect
          hover && 'hover:shadow-xl hover:shadow-surface-200/50 dark:hover:shadow-surface-900/50 hover:-translate-y-1 cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
