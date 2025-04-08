import "/src/App.css";

const Clase1 = () => {
  interface Person  {name: String;
        course: String;
        grade: Number;
        absenses: Number}
  
    const datos : Person= {
      name: "Tomas",
    course: "React Class",
      grade: 100,
      absenses: 0
  };

  function traditionalWay(student: Person) {
    return student.name + " got a grade of " + student.grade + " in the class of " + student.course + " with " + student.absenses + " absesnses.";
  }

  // After (using template literals + destructuring)
  const Es6Way = ({ name, course, grade, absenses }: Person) =>
  `${name} got a grade of ${grade} in the class of ${course} with ${absenses} absesnses.`

  return (
    <div>
      <h3>Activity</h3>

      <h4>Tradicional</h4>
      {traditionalWay(datos)}
      <br />
      <br />

      <h4>ES6+</h4>
      {Es6Way(datos)}
    </div>
  );
};

export default Clase1;