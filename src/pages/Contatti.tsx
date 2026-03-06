import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function Contatti() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', messaggio: '', interesse: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-dsi-green text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-dsi-orange text-xs font-bold tracking-[0.3em] uppercase mb-4">Siamo Qui Per Te</p>
          <h1 className="font-display font-black text-5xl md:text-6xl mb-4">Contattaci</h1>
          <p className="text-white/60 text-lg">Risposta garantita entro 24 ore</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: <Phone size={20} />, title: 'Telefono', value: '+39 000 000 0000', href: 'tel:+39000000000' },
              { icon: <Mail size={20} />, title: 'Email', value: 'info@dsi-import.it', href: 'mailto:info@dsi-import.it' },
              { icon: <MapPin size={20} />, title: 'Sede', value: 'Italia', href: '#' },
              { icon: <Clock size={20} />, title: 'Orari', value: 'Lun-Ven: 8:00-18:00', href: '#' },
            ].map(item => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-dsi-green/30 transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-10 h-10 bg-dsi-green/10 rounded-lg flex items-center justify-center text-dsi-green group-hover:bg-dsi-green group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-400">{item.title}</p>
                  <p className="font-semibold text-gray-900 mt-0.5">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              {!submitted ? (
                <>
                  <h2 className="font-display font-black text-2xl text-gray-900 mb-6">Invia un messaggio</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2 block">Nome *</label>
                        <input
                          required
                          value={form.nome}
                          onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                          placeholder="Il tuo nome"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-dsi-orange transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2 block">Email *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          placeholder="La tua email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-dsi-orange transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2 block">Telefono</label>
                      <input
                        value={form.telefono}
                        onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))}
                        placeholder="Il tuo numero"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-dsi-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2 block">Interesse</label>
                      <select
                        value={form.interesse}
                        onChange={e => setForm(f => ({ ...f, interesse: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-dsi-orange transition-colors bg-white"
                      >
                        <option value="">Seleziona...</option>
                        <option>Acquisto trattore</option>
                        <option>Configurazione personalizzata</option>
                        <option>Informazioni generali</option>
                        <option>Assistenza post-vendita</option>
                        <option>Accessori e ricambi</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2 block">Messaggio *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.messaggio}
                        onChange={e => setForm(f => ({ ...f, messaggio: e.target.value }))}
                        placeholder="Descrivi la tua richiesta..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-dsi-orange transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-dsi-orange hover:bg-dsi-orange-dark text-white font-bold text-sm tracking-widest uppercase py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Invia Messaggio
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-500" size={40} />
                  </div>
                  <h3 className="font-display font-black text-3xl text-gray-900 mb-3">Messaggio inviato! 🎉</h3>
                  <p className="text-gray-500">Ti risponderemo entro 24 ore. Grazie per averci contattato.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
