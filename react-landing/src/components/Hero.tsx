import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="hero">
            <div 
                className="hero-background"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
                <img src="/images/team/gallery/Logo2024.png" alt="IoT UNESUM" />
            </div>
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="animate-text">GISICF - UNESUM</h1>
                    <p className="subtitle animate-text-delay">
                        Grupo de Investigación en Sistemas Inteligentes y Ciberfísicos
                    </p>
                    <div className="description animate-text-delay-2">
                        <p>
                            Desarrollamos soluciones IoT innovadoras en la Universidad Estatal 
                            del Sur de Manabí. Nuestros proyectos impulsan la transformación 
                            digital en la región.
                        </p>
                    </div>
                    <div className="stats animate-text-delay-3">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Proyectos IoT</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">25+</span>
                            <span className="stat-label">Investigadores</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Años</span>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Hero;