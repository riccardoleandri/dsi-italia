import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, Filter } from 'lucide-react'
import { tractors, brands } from '../data/tractors'

export default function Trattori() {
  const [searchParams] = useSearchParams()
  const initialBrand = searchParams.get('brand') || 'Tutti'
  const [selectedBrand, setSelectedBrand] = useState(initialBrand)
  const [selectedCategory, setSelectedCategory] = useState('Tutte')

  const filtered = tractors.filter(t => {
    const brandOk = selectedBrand === 'Tutti' || t.brand === selectedBrand
    const catOk = selectedCategory === 'Tutte' || t.category === selectedCategory
    return brandOk && catOk
  })

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-dsi-green text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-dsi-orange text-xs font-bold tracking-[0.3em] uppercase mb-4">La Nostra Gamma</p>
          <h1 className="font-display font-black text-5xl md:text-6xl mb-4">Catalogo Trattori</h1>
          <p className="text-white/60 text-lg">Importazione diretta dai migliori produttori mondiali</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2 text-gray-500">
              <Filter size={14} />
              <span className="text-xs font-bold tracking-widest uppercase">Filtra:</span>
            </div>

            {/* Brand filter */}
            <div className="flex flex-wrap gap-2">
              {['Tutti', ...brands.map(b => b.name)].map(brand => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                    selectedBrand === brand
                      ? 'bg-dsi-orange text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-gray-200" />

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {['Tutte', 'Alta Potenza', 'Media Potenza', 'Compatti / Serre'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                    selectedCategory === cat
                      ? 'bg-dsi-green text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-gray-400 text-sm mb-8">{filtered.length} modelli trovati</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((tractor, i) => (
            <div
              key={tractor.id}
              className="tractor-card bg-white rounded-2xl overflow-hidden border border-gray-100 reveal"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="h-52 bg-gray-50 flex items-center justify-center overflow-hidden relative">
                <img
                  src={tractor.image}
                  alt={tractor.model}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&auto=format&fit=crop'
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-dsi-orange text-white text-xs font-black px-3 py-1 rounded-full">
                    {tractor.brandCode}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-dsi-orange text-xs font-bold tracking-widest uppercase">{tractor.category}</span>
                <div className="flex items-center justify-between mt-1 mb-3">
                  <h3 className="font-display font-black text-2xl text-gray-900">{tractor.model}</h3>
                  <span className="text-dsi-orange font-black text-xl">{tractor.hp} HP</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{tractor.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {tractor.features.slice(0, 2).map(f => (
                    <span key={f} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{f}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link
                    to={`/trattori/${tractor.id}`}
                    className="flex-1 text-center text-dsi-green border border-dsi-green/30 hover:bg-dsi-green hover:text-white text-xs font-bold tracking-wide uppercase px-4 py-2.5 rounded-lg transition-all duration-200"
                  >
                    Dettagli
                  </Link>
                  <Link
                    to={`/configuratore`}
                    className="flex-1 text-center bg-dsi-orange hover:bg-dsi-orange-dark text-white text-xs font-bold tracking-wide uppercase px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-1"
                  >
                    Configura <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
