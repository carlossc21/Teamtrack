interface DataRow {
    id: number;
    department: string;
    records: number;
    role: string;
    shift: string;
    user: string;
}
  
const generateData = (): DataRow[] => {
    return [
        { id: 1, department: 'HR', records: 120, role: 'Manager', shift: 'Morning', user: 'Alice Johnson' },
        { id: 2, department: 'IT', records: 150, role: 'Developer', shift: 'Evening', user: 'Bob Smith' },
        { id: 3, department: 'Finance', records: 80, role: 'Analyst', shift: 'Night', user: 'Charlie Brown' },
        { id: 4, department: 'Marketing', records: 100, role: 'Executive', shift: 'Morning', user: 'Daisy Clark' },
        { id: 5, department: 'Sales', records: 200, role: 'Salesperson', shift: 'Evening', user: 'Edward Wilson' },
        { id: 6, department: 'Support', records: 130, role: 'Representative', shift: 'Night', user: 'Fiona Adams' },
    ];
};
  
export default function MainSection() {
    const data = generateData();
  
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Dashboard</h2>
            <table className="table table-striped table-hover">
            <thead className="table-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Department</th>
                <th scope="col">Record</th>
                <th scope="col">Role</th>
                <th scope="col">Shift</th>
                <th scope="col">User</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                <tr key={row.id}>
                    <th scope="row">{row.id}</th>
                    <td>{row.department}</td>
                    <td>{row.records}</td>
                    <td>{row.role}</td>
                    <td>{row.shift}</td>
                    <td>{row.user}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};