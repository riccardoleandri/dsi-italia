import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Settings, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Trattori', path: '/trattori' },
    { label: 'Accessori', path: '/accessori' },
    { label: 'Configuratore', path: '/configuratore' },
    { label: 'Contatti', path: '/contatti' },
  ]

  const isTransparent = isHome && !scrolled

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-display font-black text-sm ${
              isTransparent ? 'bg-white/20 text-white' : 'bg-dsi-green text-white'
            }`}>
              DSI
            </div>
            <span className={`font-display font-bold text-lg hidden sm:block ${
              isTransparent ? 'text-white' : 'text-dsi-green'
            }`}>
              DSI Import
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-dsi-orange'
                    : isTransparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-gray-700 hover:text-dsi-green'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+39000000000"
              className={`flex items-center gap-2 text-xs font-medium transition-colors ${
                isTransparent ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-dsi-green'
              }`}
            >
              <Phone size={14} />
              Chiamaci
            </a>
            <Link
              to="/configuratore"
              className="flex items-center gap-2 bg-dsi-orange hover:bg-dsi-orange-dark text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Settings size={14} />
              Configura
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 ${isTransparent ? 'text-white' : 'text-gray-700'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-dsi-green flex flex-col items-center justify-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-display font-bold tracking-wide hover:text-dsi-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/configuratore"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-dsi-orange text-white font-bold tracking-widest uppercase px-8 py-3 rounded-lg text-sm"
          >
            Configura il tuo trattore
          </Link>
        </div>
      )}
    </>
  )
}
