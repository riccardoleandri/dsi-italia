import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const accessori = [
  { id: 'caricatore', name: 'Caricatore Frontale', category: 'Movimentazione', description: 'Caricatori frontali professionali compatibili con tutti i principali brand. Portata fino a 3.000 kg.' },
  { id: 'erpice', name: 'Erpice Rotante', category: 'Lavorazione Terreno', description: 'Erpici rotanti per preparazione del letto di semina. Larghezze da 2.5m a 6m.' },
  { id: 'aratro', name: 'Aratro Reversibile', category: 'Lavorazione Terreno', description: 'Aratri reversibili da 2 a 7 corpi per ogni tipo di terreno e condizione.' },
  { id: 'barra', name: 'Barra Falciante', category: 'Raccolta', description: 'Barre falcianti frontali e posteriori per prati e foraggi. Alta efficienza di taglio.' },
  { id: 'spandiconcime', name: 'Spandiconcime', category: 'Trattamenti', description: 'Spandiconcime centrifughi con larghezze di lavoro fino a 36 metri.' },
  { id: 'seminatrice', name: 'Seminatrice', category: 'Semina', description: 'Seminatrici di precisione per mais, girasole e tutte le colture a semina di precisione.' },
  { id: 'cisterna', name: 'Cisterna Liquami', category: 'Trattamenti', description: 'Cisterne per la distribuzione dei liquami. Capacità da 8.000 a 25.000 litri.' },
  { id: 'trincia', name: 'Trincia Stocchi', category: 'Post-Raccolta', description: 'Trinciastocchi per mais e altri residui colturali. Alte prestazioni e robustezza.' },
]

export default function Accessori() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-dsi-green text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-dsi-orange text-xs font-bold tracking-[0.3em] uppercase mb-4">Completa la tua Macchina</p>
          <h1 className="font-display font-black text-5xl md:text-6xl mb-4">Accessori</h1>
          <p className="text-white/60 text-lg">Attrezzature agricole di qualità per ogni esigenza</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessori.map((acc, i) => (
            <div
              key={acc.id}
              className="tractor-card bg-white rounded-2xl p-6 border border-gray-100 reveal"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="h-40 bg-gray-50 rounded-xl flex items-center justify-center mb-5 text-5xl">
                🚜
              </div>
              <span className="text-dsi-orange text-xs font-bold tracking-widest uppercase">{acc.category}</span>
              <h3 className="font-display font-black text-xl text-gray-900 mt-1 mb-3">{acc.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{acc.description}</p>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-1 text-dsi-green text-sm font-bold hover:text-dsi-orange transition-colors"
              >
                Richiedi info <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
