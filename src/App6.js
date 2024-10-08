import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.js'
import Empresa from './pages/Empresa.js'
import Contato from './pages/Contato.js'
import Footer from './layout/Footer.js'

function App6() {

    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Empresa">Empresa</Link>
                </li>
                <li>
                    <Link to="/Contato">Contato</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Empresa" element={<Empresa />} />
                <Route path="/Contato" element={<Contato />} />
            </Routes>

            <Footer />
        </Router>
    )
}

export default App6