import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';

function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<CourseList />} />
                    <Route path="/add-course" element={<CourseForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
