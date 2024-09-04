const Course = require('../models/Course');

// Obter todos os cursos
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar cursos.' });
  }
};

// Adicionar um novo curso
exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newCourse = await Course.create({ title, description });
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar curso.' });
  }
};

// Atualizar um curso
exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const course = await Course.findByPk(id);
    if (course) {
      course.title = title;
      course.description = description;
      await course.save();
      res.json(course);
    } else {
      res.status(404).json({ error: 'Curso não encontrado.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar curso.' });
  }
};

// Deletar um curso
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findByPk(id);
    if (course) {
      await course.destroy();
      res.json({ message: 'Curso deletado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Curso não encontrado.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar curso.' });
  }
};
