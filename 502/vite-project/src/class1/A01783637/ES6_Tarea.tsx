//Imanol Santisteban
//A01783637
//Import module
import "/src/App.css"
const ES6Hw= ()=>{

  const details={name:"Imanol",lastName:"Santisteban"};
  //Arrow function
  const Greet=()=>{
    //Destructuring
    const {name,lastName}= details;
    //Template Literals
    return `Hello ${name} ${lastName} !!`
  }
  return(
    <>
    <h1>Homework1</h1>
    <p>Simple greeting that uses ES6+ concepts:</p>
    <div>
      {Greet()}
    </div>
    </>
  );
};
//Export module
export default ES6Hw;