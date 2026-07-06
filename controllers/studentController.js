let students = [
    {
        id: 1,
        name: "Rahim"
    },
    {
        id: 2,
        name: "Karim"
    }
];

const getStudents = (req, res) => {
    res.status(200).json(students);
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
};

const addStudent = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    const student = {
        id: students.length + 1,
        name
    };

    students.push(student);

    res.status(201).json(student);
};

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(student => student.id !== id);

    res.json({
        message: "Student deleted"
    });
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent
};
