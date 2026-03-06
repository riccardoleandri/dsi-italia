import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, CheckCircle, Send } from 'lucide-react'
import { brands, tractors, globalColors } from '../data/tractors'

const STEPS = ['Brand', 'Modello', 'Motore', 'Cambio', 'Colore', 'Accessori', 'Rimorchio']

const ACCESSORIES = [
  'Caricatore Frontale', 'Barra Falciante', 'Aratro Reversibile',
  'Erpice Rotante', 'Spandiconcime', 'Seminatrice',
  'Cisterna Liquami', 'Trincia Stocchi',
]

const TRAILERS = ['Nessun Rimorchio', 'Rimorchio Agricolo 8T', 'Rimorchio Agricolo 12T', 'Carro Mescola', 'Carro Botte']

const GEARS = ['Meccanico Standard', 'PowerShift', 'CVT / Variatore Continuo', 'Semi-Powershift']

interface Config {
  brand: string
  model: string
  hp: number | null
  gear: string
  color: { name: string; hex: string } | null
  accessories: string[]
  trailer: string
}

export default function Configuratore() {
  const [step, setStep] = useState(0)
  const [config, setConfig] = useState<Config>({
    brand: '',
    model: '',
    hp: null,
    gear: '',
    color: null,
    accessories: [],
    trailer: '',
  })
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nome: '', whatsapp: '', email: '', note: '' })

  const selectedTractors = tractors.filter(t => t.brand === config.brand)
  const selectedTractor = tractors.find(t => t.model === config.model)
  const availableHPs = selectedTractor
    ? [selectedTractor.hp - 20, selectedTractor.hp, selectedTractor.hp + 20].filter(h => h > 0)
    : []

  const handleNext = () => { if (step < STEPS.length - 1) setStep(s => s + 1) }
  const handlePrev = () => { if (step > 0) setStep(s => s - 1) }

  const canProceed = () => {
    if (step === 0) return config.brand !== ''
    if (step === 1) return config.model !== ''
    if (step === 2) return config.hp !== null
    if (step === 3) return config.gear !== ''
    if (step === 4) return config.color !== null
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const previewImage = selectedTractor?.image || '/assets/tractors/configurator-preview.jpg'

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Progress bar */}
      <div className="bg-dsi-green text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between overflow-x-auto gap-2">
            {STEPS.map((s, i) => (
              <button
                key={s}
                onClick={() => i < step && setStep(i)}
                className={`flex items-center gap-2 text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-all ${
                  i === step
                    ? 'text-dsi-orange'
                    : i < step
                      ? 'text-white/70 cursor-pointer hover:text-white'
                      : 'text-white/30'
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                  i === step ? 'bg-dsi-orange text-white' : i < step ? 'bg-white/20 text-white' : 'bg-white/10 text-white/30'
                }`}>
                  {i < step ? <CheckCircle size={12} /> : i + 1}
                </span>
                {s}
                {i < STEPS.length - 1 && <span className="text-white/20 mx-1">—</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Preview */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Anteprima Configurazione</p>
              <div className="bg-gray-50 rounded-xl p-6 mb-6 flex items-center justify-center min-h-64">
                <img
                  src={previewImage}
                  alt="Trattore configurato"
                  className="max-h-56 object-contain transition-all duration-500"
                  style={config.color ? { filter: `hue-rotate(${config.color.hex === '#C8102E' ? '120deg' : config.color.hex === '#003087' ? '200deg' : '0deg'})` } : {}}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&auto=format&fit=crop'
                  }}
                />
              </div>

              {/* Color dot */}
              {config.color && (
                <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-lg">
                  <div className="w-6 h-6 rounded-full border-2 border-white shadow" style={{ backgroundColor: config.color.hex }} />
                  <span className="text-sm font-medium text-gray-700">{config.color.name}</span>
                </div>
              )}

              {/* Summary */}
              <div className="space-y-2">
                {[
                  { label: 'Brand', value: config.brand },
                  { label: 'Modello', value: config.model },
                  { label: 'Potenza', value: config.hp ? `${config.hp} HP` : null },
                  { label: 'Cambio', value: config.gear },
                  { label: 'Colore', value: config.color?.name },
                  { label: 'Accessori', value: config.accessories.length > 0 ? `${config.accessories.length} selezionati` : null },
                  { label: 'Rimorchio', value: config.trailer && config.trailer !== 'Nessun Rimorchio' ? config.trailer : null },
                ].filter(item => item.value).map(item => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</span>
                    <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Steps */}
          <div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-6">
              <p className="text-dsi-orange text-xs font-bold tracking-[0.3em] uppercase mb-2">
                Step {step + 1} di {STEPS.length}
              </p>
              <h2 className="font-display font-black text-3xl text-gray-900 mb-8">
                {step === 0 && 'Seleziona il Brand'}
                {step === 1 && 'Scegli il Modello'}
                {step === 2 && 'Potenza Motore'}
                {step === 3 && 'Tipo di Cambio'}
                {step === 4 && 'Colore'}
                {step === 5 && 'Accessori'}
                {step === 6 && 'Rimorchio'}
              </h2>

              {/* STEP 0: Brand */}
              {step === 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {brands.map(brand => (
                    <button
                      key={brand.code}
                      onClick={() => setConfig(c => ({ ...c, brand: brand.name, model: '', hp: null }))}
                      className={`p-6 rounded-xl border-2 text-left transition-all duration-200 hover:-translate-y-1 ${
                        config.brand === brand.name
                          ? 'border-dsi-orange bg-orange-50'
                          : 'border-gray-100 hover:border-dsi-green/30'
                      }`}
                    >
                      <div className="text-3xl font-display font-black text-dsi-orange mb-1">{brand.code}</div>
                      <div className="font-bold text-gray-900">{brand.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">📍 {brand.country}</div>
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 1: Model */}
              {step === 1 && (
                <div className="space-y-3">
                  {selectedTractors.length === 0 ? (
                    <p className="text-gray-400">Seleziona prima un brand</p>
                  ) : (
                    selectedTractors.map(tractor => (
                      <button
                        key={tractor.id}
                        onClick={() => setConfig(c => ({ ...c, model: tractor.model, hp: null }))}
                        className={`w-full p-4 rounded-xl border-2 text-left flex items-center gap-4 transition-all duration-200 ${
                          config.model === tractor.model
                            ? 'border-dsi-orange bg-orange-50'
                            : 'border-gray-100 hover:border-dsi-green/30'
                        }`}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="font-display font-black text-xl text-gray-900">{tractor.model}</span>
                            <span className="text-dsi-orange font-black text-lg">{tractor.hp} HP</span>
                          </div>
                          <span className="text-xs text-gray-400 uppercase tracking-wide">{tractor.category}</span>
                        </div>
                        {config.model === tractor.model && <CheckCircle className="text-dsi-orange" size={20} />}
                      </button>
                    ))
                  )}
                </div>
              )}

              {/* STEP 2: HP */}
              {step === 2 && (
                <div className="flex flex-wrap gap-3">
                  {availableHPs.length === 0 ? (
                    <p className="text-gray-400">Seleziona prima un modello</p>
                  ) : (
                    availableHPs.map(hp => (
                      <button
                        key={hp}
                        onClick={() => setConfig(c => ({ ...c, hp }))}
                        className={`px-6 py-3 rounded-xl border-2 font-bold text-lg transition-all duration-200 ${
                          config.hp === hp
                            ? 'border-dsi-orange bg-orange-50 text-dsi-orange'
                            : 'border-gray-100 text-gray-700 hover:border-dsi-green/30'
                        }`}
                      >
                        {hp} HP
                      </button>
                    ))
                  )}
                </div>
              )}

              {/* STEP 3: Gear */}
              {step === 3 && (
                <div className="space-y-3">
                  {GEARS.map(gear => (
                    <button
                      key={gear}
                      onClick={() => setConfig(c => ({ ...c, gear }))}
                      className={`w-full p-4 rounded-xl border-2 text-left font-medium transition-all duration-200 ${
                        config.gear === gear
                          ? 'border-dsi-orange bg-orange-50 text-dsi-orange'
                          : 'border-gray-100 text-gray-700 hover:border-dsi-green/30'
                      }`}
                    >
                      {gear}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 4: Color */}
              {step === 4 && (
                <div className="grid grid-cols-2 gap-3">
                  {globalColors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setConfig(c => ({ ...c, color }))}
                      className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all duration-200 ${
                        config.color?.name === color.name
                          ? 'border-dsi-orange bg-orange-50'
                          : 'border-gray-100 hover:border-dsi-green/30'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full border-2 border-white shadow-md flex-shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="font-medium text-gray-900 text-sm">{color.name}</span>
                      {config.color?.name === color.name && <CheckCircle className="text-dsi-orange ml-auto" size={16} />}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 5: Accessories */}
              {step === 5 && (
                <div>
                  <p className="text-gray-500 text-sm mb-4">Puoi selezionare più accessori</p>
                  <div className="grid grid-cols-2 gap-3">
                    {ACCESSORIES.map(acc => (
                      <button
                        key={acc}
                        onClick={() => setConfig(c => ({
                          ...c,
                          accessories: c.accessories.includes(acc)
                            ? c.accessories.filter(a => a !== acc)
                            : [...c.accessories, acc]
                        }))}
                        className={`p-3 rounded-xl border-2 text-sm font-medium text-left transition-all duration-200 ${
                          config.accessories.includes(acc)
                            ? 'border-dsi-orange bg-orange-50 text-dsi-orange'
                            : 'border-gray-100 text-gray-700 hover:border-dsi-green/30'
                        }`}
                      >
                        {acc}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 6: Trailer */}
              {step === 6 && (
                <div className="space-y-3">
                  {TRAILERS.map(trailer => (
                    <button
                      key={trailer}
                      onClick={() => setConfig(c => ({ ...c, trailer }))}
                      className={`w-full p-4 rounded-xl border-2 text-left font-medium transition-all duration-200 ${
                        config.trailer === trailer
                          ? 'border-dsi-orange bg-orange-50 text-dsi-orange'
                          : 'border-gray-100 text-gray-700 hover:border-dsi-green/30'
                      }`}
                    >
                      {trailer}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-4">
              {step > 0 && (
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 font-bold text-gray-700 hover:border-dsi-green transition-all"
                >
                  <ArrowLeft size={16} /> Indietro
                </button>
              )}

              {step < STEPS.length - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-200 ${
                    canProceed()
                      ? 'bg-dsi-orange hover:bg-dsi-orange-dark text-white hover:-translate-y-0.5 hover:shadow-lg'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Avanti <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={() => setShowModal(true)}
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-dsi-orange hover:bg-dsi-orange-dark text-white font-bold text-sm tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Richiedi Preventivo <Send size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            {!submitted ? (
              <>
                <h3 className="font-display font-black text-2xl text-gray-900 mb-2">Richiedi il tuo preventivo</h3>
                <p className="text-gray-500 text-sm mb-6">Ti risponderemo entro 24 ore su WhatsApp.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    placeholder="Nome completo"
                    value={form.nome}
                    onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-dsi-orange transition-colors"
                  />
                  <input
                    required
                    placeholder="Numero WhatsApp"
                    value={form.whatsapp}
                    onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-dsi-orange transition-colors"
                  />
                  <input
                    placeholder="Email (opzionale)"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-dsi-orange transition-colors"
                  />
                  <textarea
                    placeholder="Note aggiuntive..."
                    rows={3}
                    value={form.note}
                    onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-dsi-orange transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-dsi-orange hover:bg-dsi-orange-dark text-white font-bold text-sm tracking-widest uppercase py-4 rounded-xl transition-all duration-200"
                  >
                    Invia Richiesta
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-500" size={32} />
                </div>
                <h3 className="font-display font-black text-2xl text-gray-900 mb-2">Perfetto! 🎉</h3>
                <p className="text-gray-500 mb-6">Ti contatteremo entro 24 ore su WhatsApp con il tuo preventivo personalizzato.</p>
                <Link to="/" onClick={() => setShowModal(false)} className="inline-flex items-center gap-2 bg-dsi-green text-white font-bold text-sm tracking-widest uppercase px-6 py-3 rounded-xl">
                  Torna alla Home
                </Link>
              </div>
            )}

            {!submitted && (
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
