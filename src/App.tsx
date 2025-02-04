import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/index.css';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Research />
            <Team />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;