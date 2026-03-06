import { useEffect } from 'react'

export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export const useNavbarScroll = () => {
  useEffect(() => {
    const navbar = document.getElementById('main-navbar')
    if (!navbar) return

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled')
      } else {
        navbar.classList.remove('navbar-scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

export const useCounter = (target: number, duration: number = 2000) => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-counter]')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          const end = parseInt(el.getAttribute('data-counter') || '0')
          const start = 0
          const increment = end / (duration / 16)
          let current = start
          
          const timer = setInterval(() => {
            current += increment
            if (current >= end) {
              current = end
              clearInterval(timer)
            }
            el.textContent = Math.floor(current).toString()
          }, 16)
          
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.5 })

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [target, duration])
}
