import { useEffect } from 'react'
import { showES6Examples } from '../utils/display'
import Card from '../components/Card'

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
      <h1>Travel Requests</h1>
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
    </div>
    </div>
  )
}

export default Dashboard
