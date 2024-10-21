const students = [
  {
      name: "sadaf",
      id: "1",
      class: "14th Grade",
      subjects: [
          { subjectName: "Math", marks: 95 },
          { subjectName: "Urdu", marks: 85 },
          { subjectName: "English", marks: 80 }
      ]
  },
  {
      name: "ramla",
      id: "2",
      class: "9th Grade",
      subjects: [
          { subjectName: "Math", marks: 90 },
          { subjectName: "Urdu", marks: 80 },
          { subjectName: "English", marks: 70 }
      ]
  },
  {
      name: "maheen",
      id: "3",
      class: "12th Grade",
      subjects: [
          { subjectName: "Math", marks: 89 },
          { subjectName: "Urdu", marks: 69 },
          { subjectName: "English", marks: 82 }
      ]
  }
];

function totalMarks(subjects) {
  return subjects.reduce((total, subject) => total + subject.marks, 0);
}

function percentage(subjects) {
  return (totalMarks(subjects) / (subjects.length * 100)) * 100;
}

function grade(percentage) {
  if (percentage >= 80) return "A+";
  else if (percentage >= 70) return "A";
  else if (percentage >= 60) return "B";
  else if (percentage >= 50) return "C";
  else return "Fail";
}

document.getElementById('submit-btn').addEventListener('click', () => {
  const inputName = document.getElementById('student-name').value;
  const inputId = document.getElementById('student-id').value;

  let student = students.find(s => s.name === inputName && s.id === inputId);

  const reportCard = document.getElementById('report-card');
  if (student) {
      const studentPercentage = percentage(student.subjects);
      reportCard.classList.add("display");
      reportCard.innerHTML = `
          <p><strong>Name:</strong> ${student.name.charAt(0).toUpperCase() + student.name.slice(1).toLowerCase()}</p>
          <p><strong>ID:</strong> ${student.id}</p>
          <p><strong>Class:</strong> ${student.class}</p>
          <p><strong>Total Marks:</strong> ${totalMarks(student.subjects)}</p>
          <p><strong>Percentage:</strong> ${studentPercentage.toFixed(2)}%</p>
          <p><strong>Grade:</strong> ${grade(studentPercentage)}</p>
      `;
      reportCard.style.display = 'block'; // Show the report card
  } else {
      reportCard.innerHTML = `<p>Student not found. Please check the name and ID.</p>`;
      reportCard.style.display = 'block'; // Show the error message
  }
});
