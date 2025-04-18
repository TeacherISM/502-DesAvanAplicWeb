import { useEffect } from 'react'
import { showES6Examples } from '../utils/display'
import Card from '../components/Card'
import TravelRequestForm from '../components/TravelRequestForm'
import Counter from '../components/Counter'


function Dashboard() {
  useEffect(() => {
    showES6Examples('es6-output')
  }, [])

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <p>This is placeholder content.</p>
      <h2>ES6+ Features in Action:</h2>
      <div id="es6-output"></div>
      <div>
      <h2>Travel Requests</h2>
      <Card
        title="Trip to New York"
        description="Conference"
        date="2025-04-25"
      />
      <Card
        title="Trip to Berlin"
        description="Conference"
        date="2025-05-10"
      />
      <h2>Submit a Travel Request</h2>
      <TravelRequestForm />
      <Counter/>
    </div>
    </div>
  )
}

export default Dashboard
