import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ItemPage from './pages/ItemPage'
import CheckoutPage from './pages/CheckoutPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store/:category' element={<CategoryPage />} />
          <Route path='/store/:category/:product' element={<ItemPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
