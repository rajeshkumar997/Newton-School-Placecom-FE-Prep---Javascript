function highPerformers(students) {
    const highPerformerStudents = students
        .map(student => {
            const sum = student.scores.reduce((acc, score) => acc + score, 0);
            const avg = sum / student.scores.length;
            return { name: student.name, average: avg };
        })
        .filter(student => student.average > 90);

    return highPerformerStudents;
}
