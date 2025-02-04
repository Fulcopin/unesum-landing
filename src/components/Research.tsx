import React, { useState } from 'react';
import './Research.css';

const Research: React.FC = () => {
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

    const documents = [
        {
            id: '1',
            title: 'Sistemas Ciberfísicos Inteligentes',
            path: '/docs/1.pdf',
            description: 'Investigación sobre integración de sistemas físicos y digitales'
        },
        {
            id: '2',
            title: 'IoT y Automatización',
            path: '/docs/2.pdf',
            description: 'Avances en Internet de las Cosas y automatización industrial'
        },
        {
            id: '3',
            title: 'Inteligencia Artificial',
            path: '/docs/3.pdf',
            description: 'Aplicaciones de IA en sistemas ciberfísicos'
        }
    ];

    return (
        <div className="research-section">
            <div className="research-container">
                <h2>Documentos de Investigación GISICF</h2>
                <div className="pdf-grid">
                    {documents.map((doc) => (
                        <div key={doc.id} className="pdf-card" onClick={() => setSelectedPdf(doc.path)}>
                            <div className="pdf-icon">📄</div>
                            <h3>{doc.title}</h3>
                            <p>{doc.description}</p>
                            <button className="view-button">Ver PDF</button>
                        </div>
                    ))}
                </div>

                {selectedPdf && (
                    <div className="pdf-modal" onClick={() => setSelectedPdf(null)}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <button className="close-button" onClick={() => setSelectedPdf(null)}>×</button>
                            <object
                                data={selectedPdf}
                                type="application/pdf"
                                width="100%"
                                height="100%"
                            >
                                <p>Tu navegador no puede mostrar el PDF. 
                                   <a href={selectedPdf} target="_blank" rel="noopener noreferrer">
                                     Descárgalo aquí
                                   </a>
                                </p>
                            </object>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Research;