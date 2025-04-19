import React, { useState, FormEvent } from "react";
import {Login2, Dashboard} from './components'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
    <div>
      {!isLoggedIn && <Login2 setIsLoggedIn={setIsLoggedIn}/>}

     { isLoggedIn && <Dashboard/>}
    </div>
  )
}
export default App