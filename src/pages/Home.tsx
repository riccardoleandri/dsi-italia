import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Settings } from 'lucide-react'
import { brands, tractors } from '../data/tractors'

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 2000
          const start = Date.now()
          const timer = setInterval(() => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * value))
            if (progress >= 1) {
              clearInterval(timer)
              setCount(value)
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-black text-dsi-orange">
        {count}{suffix}
      </div>
      <div className="text-xs font-bold tracking-widest uppercase text-white/50 mt-2">{label}</div>
    </div>
  )
}

export default function Home() {
  const featuredTractors = tractors.filter(t =>
    ['jd-7r290', 'nh-t7315', 'fendt-724', 'case-puma240'].includes(t.id)
  )

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="hero-overlay absolute inset-0 z-10" />

        {/* DSI Watermark */}
        <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="dsi-watermark select-none">DSI</span>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto">
          <p className="text-dsi-orange text-xs font-bold tracking-[0.4em] uppercase mb-6 animate-fade-in animation-fill-both animate-delay-100">
            DSI — For Industry & Agriculture
          </p>

          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-in-up animation-fill-both animate-delay-200">
            IMPORTAZIONE DIRETTA
            <br />
            <span className="text-white">DI MACCHINE AGRICOLE</span>
          </h1>

          <p className="text-white/70 text-sm md:text-base tracking-[0.3em] uppercase mb-10 animate-fade-in animation-fill-both animate-delay-300">
            Potenza. Affidabilità. Controllo Totale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-fill-both animate-delay-400">
            <Link
              to="/trattori"
              className="inline-flex items-center gap-2 bg-dsi-orange hover:bg-dsi-orange-dark text-white font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/25"
            >
              Scopri i modelli <ArrowRight size={16} />
            </Link>
            <Link
              to="/configuratore"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-lg border border-white/50 hover:border-white transition-all duration-300 hover:-translate-y-1"
            >
              Configura il tuo trattore
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase">Scorri</span>
          <ChevronDown className="text-white/40" size={20} />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-dsi-green py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <StatCounter value={4} suffix="" label="Brand Partner" />
            <StatCounter value={20} suffix="+" label="Modelli Disponibili" />
            <StatCounter value={50} suffix="+" label="Configurazioni" />
            <StatCounter value={100} suffix="%" label="Clienti Soddisfatti" />
          </div>
        </div>
      </section>

      {/* ===== CHI SIAMO ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-dsi-orange text-xs font-bold tracking-[0.3em] uppercase mb-4 reveal">
                Il Nostro Approccio
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 leading-tight mb-6 reveal">
                DSI importa direttamente dalla produzione.
                <span className="text-dsi-orange"> Selezioniamo, configuriamo e consegniamo.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 reveal">
                Non siamo un semplice rivenditore. Siamo un importatore strutturato con relazioni dirette con i principali produttori mondiali di macchine agricole. Questo ci permette di offrirti i migliori trattori al mondo a condizioni vantaggiose, con configurazioni personalizzate e assistenza dedicata.
              </p>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 text-dsi-green font-bold text-sm tracking-wide hover:text-dsi-orange transition-colors reveal"
              >
                Contattaci ora <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 reveal-right">
              {[
                { value: '15+', label: 'Anni di Esperienza' },
                { value: '500+', label: 'Macchine Consegnate' },
                { value: '4', label: 'Brand Partner' },
                { value: '100%', label: 'Import Diretto' },
              ].map(stat => (
                <div key={stat.label} className="bg-dsi-green rounded-xl p-6 text-white">
                  <div className="text-3xl font-display font-black text-dsi-orange mb-1">{stat.value}</div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRAND PARTNERS ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-dsi-orange text-xs font-bold tracking-[0.3em] uppercase mb-4 reveal">I Nostri Partner</p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 reveal">Brand di Eccellenza</h2>
            <p className="text-gray-500 mt-4 reveal">Selezioniamo solo i migliori produttori mondiali di macchine agricole.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, i) => (
              <div
                key={brand.code}
                className="brand-card bg-white rounded-2xl p-8 border border-gray-100 reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl font-display font-black text-dsi-orange mb-2">{brand.code}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{brand.name}</h3>
                <p className="text-xs text-gray-400 mb-4 flex items-center gap-1">
                  <span>📍</span> {brand.country}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{brand.description}</p>
                <Link
                  to={`/trattori?brand=${brand.name}`}
                  className="text-dsi-orange text-sm font-bold tracking-wide hover:text-dsi-orange-dark transition-colors flex items-center gap-1"
                >
                  Scopri modelli <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VANTAGGI DSI ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-dsi-orange text-xs font-bold tracking-[0.3em] uppercase mb-4 reveal">Perché Sceglierci</p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 reveal">Il Vantaggio DSI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Import Diretto', desc: 'Nessun intermediario. Acquistiamo direttamente dai produttori, garantendo i migliori prezzi e condizioni.' },
              { num: '02', title: 'Configurazione Personalizzata', desc: 'Ogni trattore viene configurato sulle tue esigenze specifiche: motore, cabina, accessori e colore.' },
              { num: '03', title: 'Assistenza Dedicata', desc: 'Ti seguiamo in ogni fase: dalla scelta del modello alla consegna, fino all\'assistenza post-vendita.' },
              { num: '04', title: 'Consegna in Italia', desc: 'Gestiamo noi tutta la logistica: importazione, sdoganamento e consegna direttamente da te.' },
            ].map((item, i) => (
              <div key={item.num} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-5xl font-display font-black text-dsi-green/10 mb-4">{item.num}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONFIGURATORE PREVIEW ===== */}
      <section className="py-24 bg-dsi-green text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-dsi-orange text-xs font-bold tracking-[0.3em] uppercase mb-4 reveal">
                Configura La Tua Macchina
              </p>
              <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-6 reveal">
                Configura il tuo{' '}
                <span className="text-dsi-orange">trattore ideale</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8 reveal">
                Il nostro configuratore avanzato ti permette di personalizzare ogni aspetto della tua macchina agricola. Scegli il brand, il modello, la potenza, il cambio, il colore e gli accessori.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8 reveal">
                {['Colore', 'Potenza', 'Cambio', 'Accessori'].map(item => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3">
                    <Settings size={14} className="text-dsi-orange" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/configuratore"
                className="inline-flex items-center gap-2 bg-dsi-orange hover:bg-dsi-orange-dark text-white font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl reveal"
              >
                Configura il tuo trattore <ArrowRight size={16} />
              </Link>
            </div>

            <div className="reveal-right">
              <div className="bg-white/10 rounded-2xl p-8">
                <p className="text-white/50 text-xs tracking-widest uppercase mb-6">Anteprima Configurazione</p>
                <div className="bg-white rounded-xl p-6 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&auto=format&fit=crop"
                    alt="Trattore configurabile"
                    className="w-full h-48 object-contain"
                  />
                </div>
                <div className="flex gap-3 justify-center">
                  {['#1B4332', '#1a1a1a', '#C8102E', '#6B7280', '#003087', '#F5F5F0'].map(color => (
                    <div
                      key={color}
                      className="w-8 h-8 rounded-full cursor-pointer hover:scale-110 transition-transform border-2 border-white/20"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRATTORI IN EVIDENZA ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-dsi-orange text-xs font-bold tracking-[0.3em] uppercase mb-4 reveal">La Nostra Gamma</p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 reveal">Modelli in Evidenza</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTractors.map((tractor, i) => (
              <div
                key={tractor.id}
                className="tractor-card bg-white rounded-2xl overflow-hidden border border-gray-100 reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&auto=format&fit=crop"
                    alt={tractor.model}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-dsi-orange text-xs font-bold tracking-widest uppercase">{tractor.category}</span>
                  <div className="flex items-center justify-between mt-1 mb-2">
                    <h3 className="font-display font-black text-xl text-gray-900">{tractor.model}</h3>
                    <span className="text-dsi-orange font-black text-lg">{tractor.hp} HP</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{tractor.description}</p>
                  <Link
                    to={`/trattori/${tractor.id}`}
                    className="text-dsi-green text-sm font-bold tracking-wide hover:text-dsi-orange transition-colors flex items-center gap-1"
                  >
                    Scopri di più <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link
              to="/trattori"
              className="inline-flex items-center gap-2 bg-dsi-green hover:bg-dsi-green-light text-white font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1"
            >
              Vedi tutti i modelli <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA FINALE ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-dsi-orange text-xs font-bold tracking-[0.3em] uppercase mb-4 reveal">Inizia Ora</p>
          <h2 className="font-display font-black text-4xl md:text-6xl text-gray-900 leading-tight mb-6 reveal">
            Trova il trattore perfetto per la tua azienda.
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10 reveal">
            Contattaci oggi. Ti risponderemo entro 24 ore con una consulenza personalizzata completamente gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <Link
              to="/configuratore"
              className="inline-flex items-center gap-2 bg-dsi-orange hover:bg-dsi-orange-dark text-white font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Configura il tuo trattore <Settings size={16} />
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-dsi-green hover:bg-dsi-green-light text-white font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1"
            >
              Contattaci <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
