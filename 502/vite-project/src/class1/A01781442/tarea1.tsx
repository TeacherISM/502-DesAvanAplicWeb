import '../../index.css'
const Arfunc= ()=>{

  const details={name:"Rafael",lastName:"Blanga"};
  //Arrow function
  const Greet=()=>{
    //Destructuring
    const {name,lastName}= details;
    //Template Literals
    return `Hello ${name} ${lastName} !!`
  }
  return(
    <>
    <div className="Center">
    <h1>Homework1</h1>
    <p>Simple greeting that uses ES6+ concepts:</p>
    <div>
      {Greet()}
    </div>
    <a href='/src/class1/A01781442/index.html'>
      Regresar a Menu
    </a>
    </div>
    </>
  );
};
//Export module
export default Arfunc;