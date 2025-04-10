
interface DashboardProps {
    role: string;
}

const Dashboard = ({ role }: DashboardProps) => {
    return (
        <>
            <h1>Dashboard</h1>
            <p>Welcome, {role}!</p>
            <div>
                {role === 'admin' && <p>Admin Content</p>}
                {role === 'manager' && <p>Manager Content</p>}
                {role === 'employee' && <p>Employee Content</p>}
            </div>
        </>
    ); 

}

export default Dashboard;