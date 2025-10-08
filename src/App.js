
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Methodologies from './pages/Methodologies/Methodologies';
import About from './pages/About/About';   
import Impact from './pages/Impact/Impact';   
import Products from './pages/Products/Products'; 
import Contact from './pages/Contact/Contact';
import Terms from './pages/Terms/Terms';
import SectionWrapper from "./components/SectionWrapper";


function App() {
  return (
     <Router>
        <div className="App">
          <Header />
          <main>    
            <Routes>
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
                <Route path="/" element={
                  <>
                    <Home />
                      <SectionWrapper>
                        <div id="methodologies" className="section">
                          <Methodologies />
                        </div>
                      </SectionWrapper>
                      <SectionWrapper>
                        <div id="about" className="section">
                          <About />
                        </div>
                      </SectionWrapper>
                      <SectionWrapper>
                          <div id="impact" className="section">
                            <Impact />
                          </div>
                      </SectionWrapper>
                      <SectionWrapper>
                          <div id="products" className="section">
                            <Products />
                          </div>
                      </SectionWrapper>
                      </>
                   } />
                  </Routes>
                </main>
                  <Footer />
            </div>
        </Router>
  );
}

export default App;
