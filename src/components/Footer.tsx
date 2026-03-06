import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dsi-green text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-display font-black text-sm">
                DSI
              </div>
              <span className="font-display font-bold text-lg">DSI Import</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Importazione diretta di macchine agricole. Il tuo partner di fiducia per trattori e attrezzature agricole.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4">Navigazione</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Trattori', path: '/trattori' },
                { label: 'Accessori', path: '/accessori' },
                { label: 'Configuratore', path: '/configuratore' },
                { label: 'Contatti', path: '/contatti' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Partners */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4">Brand Partner</h4>
            <ul className="space-y-2">
              {['John Deere', 'New Holland', 'Fendt', 'Case IH'].map(brand => (
                <li key={brand} className="text-white/70 text-sm">{brand}</li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Phone size={14} />
                <a href="tel:+39000000000" className="hover:text-white transition-colors">+39 000 000 0000</a>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail size={14} />
                <a href="mailto:info@dsi-import.it" className="hover:text-white transition-colors">info@dsi-import.it</a>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Italia</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">© 2025 DSI Import — Tutti i diritti riservati</p>
          <p className="text-white/40 text-xs">P.IVA 00000000000</p>
        </div>
      </div>
    </footer>
  )
}
