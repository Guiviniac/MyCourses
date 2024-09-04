import React, { useState } from 'react';
import { createCourse } from '../services/courseService';

const AddCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = { title, description };
    createCourse(newCourse).then(response => {
      console.log('Curso criado:', response.data);
      setTitle('');
      setDescription('');
    }).catch(error => {
      console.error('Erro ao criar curso:', error);
    });
  };

  return (
    <div>
      <h2>Adicionar Novo Curso</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Descrição:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Adicionar Curso</button>
      </form>
    </div>
  );
};

export default AddCourse;
