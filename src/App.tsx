import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Trattori from './pages/Trattori'
import Accessori from './pages/Accessori'
import Configuratore from './pages/Configuratore'
import Contatti from './pages/Contatti'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trattori" element={<Trattori />} />
          <Route path="/accessori" element={<Accessori />} />
          <Route path="/configuratore" element={<Configuratore />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
