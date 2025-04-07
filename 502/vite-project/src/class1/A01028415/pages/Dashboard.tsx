import { useEffect } from 'react'
import { showES6Examples } from '../utils/display'

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
    </div>
  )
}

export default Dashboard
