import axios from 'axios';
import React, { useState } from 'react';

function CourseList() {
    const [courses, setCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [notFound, setNotFound] = useState(false);

    const handleSearch = () => {
        axios.get(`/api/courses/search?title=${searchQuery}`)
            .then(response => {
                setCourses(response.data);
                setNotFound(response.data.length === 0);
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                    setNotFound(true);
                } else {
                    console.error('Erro ao buscar cursos:', error);
                }
            });
    };

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar curso"
                style={{ margin: '10px 0', padding: '5px', width: '300px' }}
            />
            <button onClick={handleSearch} style={{ marginLeft: '10px' }}>Buscar</button>
            {notFound && <p style={{ color: 'gray' }}>Nenhum curso encontrado</p>}
            <ul>
                {courses.map(course => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;
