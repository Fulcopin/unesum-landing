import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <h2>Grupo de Investigación en Sistemas Inteligentes y Ciberfísicos (GISICF)</h2>
                
                <div className="about-content">
                    <div className="about-card main-card">
                        <h3>Quiénes Somos</h3>
                        <p>
                            El GISICF es un grupo de investigación dedicado al estudio y desarrollo 
                            de sistemas que integran el mundo físico con el digital. Nuestro enfoque 
                            multidisciplinario combina la ingeniería, la informática y la inteligencia 
                            artificial para crear soluciones innovadoras.
                        </p>
                    </div>

                    <div className="about-card quote">
                        <blockquote>
                            "La adopción de tecnologías ciberfísicas es un catalizador para la 
                            productividad y la competitividad en la industria"
                            <footer>- Michael Porter (2015)</footer>
                        </blockquote>
                    </div>

                    <div className="about-card mission">
                        <h3>Misión</h3>
                        <p>
                            Impulsar la investigación y desarrollo de sistemas inteligentes y 
                            ciberfísicos para contribuir al avance tecnológico y la transformación 
                            digital de la sociedad.
                        </p>
                    </div>

                    <div className="about-card vision">
                        <h3>Visión</h3>
                        <p>
                            Ser un referente internacional en la investigación de sistemas 
                            ciberfísicos, liderando la innovación tecnológica y formando 
                            investigadores de alto nivel.
                        </p>
                    </div>

                    <div className="about-card objectives">
                        <h3>Objetivos</h3>
                        <ul>
                            <li>Desarrollar investigación de vanguardia en sistemas ciberfísicos</li>
                            <li>Formar investigadores y profesionales especializados</li>
                            <li>Establecer colaboraciones internacionales</li>
                            <li>Transferir conocimiento a la industria</li>
                        </ul>
                    </div>

                    <div className="about-card impact">
                        <h3>Impacto</h3>
                        <p>
                            Nuestras investigaciones contribuyen a la transformación digital 
                            de la industria, la optimización de procesos y el desarrollo de 
                            sistemas más inteligentes y eficientes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;