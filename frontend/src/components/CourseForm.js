import React, { useState } from 'react';
import axios from 'axios';

function CourseForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/courses', { title, description })
            .then(() => {
                setShowAlert(true);
                setTitle('');
                setDescription('');
            })
            .catch((error) => console.error('Erro ao salvar curso:', error));
    };

    return (
        <div>
            {showAlert && <p style={{ color: 'green' }}>Curso salvo com sucesso!</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descrição</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Salvar Curso</button>
            </form>
        </div>
    );
}

export default CourseForm;
