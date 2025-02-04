import React, { useState } from 'react';
import { FaPaperPlane, FaEnvelope, FaUser, FaComments } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        
        try {
            // Aquí iría la lógica de envío
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contáctanos</h2>
                    <p>
                        ¿Tienes alguna pregunta o propuesta? No dudes en contactarnos.
                        Nuestro equipo estará encantado de atenderte.
                    </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="input-icon">
                            <FaUser />
                        </div>
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <div className="input-icon">
                            <FaEnvelope />
                        </div>
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <div className="input-icon">
                            <FaComments />
                        </div>
                        <textarea
                            placeholder="Tu mensaje"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className={`submit-button ${status}`}
                        disabled={status === 'sending'}
                    >
                        <FaPaperPlane />
                        {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>

                    {status === 'success' && (
                        <div className="status-message success">
                            ¡Mensaje enviado con éxito!
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="status-message error">
                            Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;