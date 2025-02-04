import React, { useState, useEffect } from 'react';
import './Team.css';

const Team: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);
    
    const galleryImages = [
        '/images/team/gallery/image1.jpg',
        '/images/team/gallery/image2.jpg',
        '/images/team/gallery/image3.jpg',
        '/images/team/gallery/image4.jpg',
        '/images/team/gallery/image5.jpg',
        '/images/team/gallery/image6.jpg',
        '/images/team/gallery/image7.jpg'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % galleryImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
    const members = [
        { id: 1, name: 'Ing. Holger Delgado Lucas', title: 'PhD', role: 'director' },
        { id: 2, name: 'Ing. Christian Ruperto Caicedo Plúa', title: 'PhD', role: 'coordinator' },
        { id: 3, name: 'Ing. Roberto Wellington Acuña Caicedo', title: 'PhD', role: 'member' },
        { id: 4, name: 'Ing. Jaime Alcides Mesa Hormaza', title: 'PhD UTM', role: 'member' },
        { id: 5, name: 'Ing. Ferney Amaya Fernández', title: 'PhD UPB', role: 'member' },
        { id: 6, name: 'Ing. Fulco Berdy Pincay Ponce', title: 'Mg', role: 'member' },
        { id: 7, name: 'Ing. Aron David Cañarte Baque', title: 'Mg', role: 'member' },
        { id: 8, name: 'Lcdo. Marco Antonio Toala Pilay', title: 'Mg', role: 'member' },
        { id: 9, name: 'Lcda. Antonieta Del Carmen Rodríguez Gonzales', title: 'Mg', role: 'member' },
        { id: 10, name: 'Ing. Oscar Stalin Baque Pinargote', title: 'Mg', role: 'member' },
        { id: 11, name: 'Lcdo. Francisco Javier Caicedo Plúa', title: 'Mg', role: 'member' },
        { id: 12, name: 'Lcda. Grace Liliana Figueroa Morán', title: 'PhD', role: 'member' },
        { id: 13, name: 'Ing. Julio Pedro Paladines Morán', title: 'Mg', role: 'member' },
        { id: 14, name: 'Ing. Nevardo Paladines Morán', title: 'Mg', role: 'member' },
        { id: 15, name: 'Ing. Yanina Holanda Campozano Pilay', title: 'Mg', role: 'member' },
        { id: 16, name: 'Ing. Karina Virginia Mero Suarez', title: 'Mg', role: 'member' },
        { id: 17, name: 'Ing. Edwin Joao Merchan Carreño', title: 'Mg', role: 'member' },
        { id: 18, name: 'Ing. Julio Alberto Cedeño Ferrin', title: 'Mg', role: 'member' },
        { id: 19, name: 'Ing. Pascual Ángel Pisco Gómez', title: 'Mg', role: 'member' },
        { id: 20, name: 'Ing. Christian Rogelio Cañarte V.', title: 'Mg', role: 'member' },
        { id: 21, name: 'Ing. Libia Soledad Ayón Villafuerte', title: 'Mg', role: 'member' },
        { id: 22, name: 'Ing. Leticia Azucena Vaca Cárdenas', title: 'PhD UTM', role: 'member' },
        { id: 23, name: 'Ing. María Mercedes Ortiz', title: 'Mg', role: 'member' },
        { id: 24, name: 'Ing. Edwin Antonio Mero', title: 'Mg', role: 'member' },
        { id: 25, name: 'Ing. Wagner Manuel Abad Parrales', title: 'Mg. E.', role: 'member' },
        { id: 26, name: 'Castro Pérez Byron Leonel', role: 'student' },
        { id: 27, name: 'Santana Mero Anyely Roxely', role: 'student' },
        { id: 28, name: 'Castillo Villacreses Abel Airton', role: 'student' }
    ];
    
    
        return (
            <section className="team-section" id="team">
                <div className="team-container">
                    <h2>Nuestro Equipo GISICF</h2>
                    
                    <div className="team-grid">
                        <div className="team-leader">
                            <h3>Director</h3>
                            <div className="member-card director">
                                {members.find(m => m.role === 'director') && (
                                    <>
                                        <h4>{members.find(m => m.role === 'director')?.name}</h4>
                                        <span>{members.find(m => m.role === 'director')?.title}</span>
                                    </>
                                )}
                            </div>
                        </div>
    
                        <div className="team-coordinator">
                            <h3>Coordinador</h3>
                            <div className="member-card coordinator">
                                {members.find(m => m.role === 'coordinator') && (
                                    <>
                                        <h4>{members.find(m => m.role === 'coordinator')?.name}</h4>
                                        <span>{members.find(m => m.role === 'coordinator')?.title}</span>
                                    </>
                                )}
                            </div>
                        </div>
    
                        <div className="team-members">
                            <h3>Investigadores</h3>
                            <div className="members-grid">
                                {members.filter(m => m.role === 'member').map(member => (
                                    <div key={member.id} className="member-card">
                                        <h4>{member.name}</h4>
                                        <span>{member.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
    
                        <div className="team-students">
                            <h3>Estudiantes</h3>
                            <div className="students-grid">
                                {members.filter(m => m.role === 'student').map(student => (
                                    <div key={student.id} className="member-card student">
                                        <h4>{student.name}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
    
                        <div className="gallery-section">
                            <h3>Galería GISICF</h3>
                            <div className="carousel-container">
                                <button 
                                    className="carousel-button prev"
                                    onClick={() => setCurrentImage((prev) => 
                                        prev === 0 ? galleryImages.length - 1 : prev - 1
                                    )}
                                >
                                    ←
                                </button>
                                
                                <div className="carousel-content">
                                    <img 
                                        src={galleryImages[currentImage]}
                                        alt={`GISICF  ${currentImage + 1}`}
                                        className="carousel-image"
                                    />
                                    
                                    <div className="carousel-indicators">
                                        {galleryImages.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`indicator ${index === currentImage ? 'active' : ''}`}
                                                onClick={() => setCurrentImage(index)}
                                            />
                                        ))}
                                    </div>
                                </div>
    
                                <button 
                                    className="carousel-button next"
                                    onClick={() => setCurrentImage((prev) => 
                                        (prev + 1) % galleryImages.length
                                    )}
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    
    export default Team;