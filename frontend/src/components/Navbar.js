import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ marginBottom: '20px' }}>
            <Link to="/">Home</Link>
            <Link to="/add-course" style={{ marginLeft: '20px' }}>Adicionar Curso</Link>
        </nav>
    );
}

export default Navbar;
