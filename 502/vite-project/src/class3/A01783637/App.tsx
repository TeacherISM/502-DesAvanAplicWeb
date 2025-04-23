//Imanol Santisteban
//A01783637
import Counter from "./Components/Counter";
import Login from "./LogInComp";
import TravelRequestForm from "./TravelRequestForm";
import "/src/App.css"
const App=()=>{
    return(
        <>
        <div>
            <Login></Login>
        </div>
        <br />
        <div>
            <TravelRequestForm></TravelRequestForm>
        </div>
        <br />
        <div>
            <Counter></Counter>
        </div>
        </>
    )
}

export default App;