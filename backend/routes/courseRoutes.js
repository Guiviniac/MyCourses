const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { Course } = require('../models/Course');

// Rota para buscar cursos
router.get('/search', async (req, res) => {
    const title = req.query.title; // Pegando o título da query string
    try {
        // Buscando cursos pelo título
        const courses = await Course.findAll({
            where: { title: { [Op.like]: `%${title}%` } }
        });
        if (courses.length > 0) {
            res.status(200).json(courses);
        } else {
            res.status(404).json({ message: 'Nenhum curso encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar cursos', error: error.message });
    }
});

module.exports = router;
