import { React, Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar, Home, About, Menu, Offers, ContactUs, Cart, Footer, Testimonials } from './component'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    )
  }
}
export default App
