import Image from 'next/image'

export default function Sidebar(){
    return (
    <aside className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
            <span className="fs-4">TeamTrack</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a href="#" className="nav-link active" aria-current="page">
                <i className="bi bi-house-door"></i>&nbsp;
                Dashboard
                </a>
            </li>
            <li>
                <a href="#" className="nav-link link-dark">
                <i className="bi bi-suitcase-lg"></i>&nbsp;
                Departments
                </a>
            </li>
            <li>
                <a href="#" className="nav-link link-dark">
                <i className="bi bi-people"></i>&nbsp;
                Employees
                </a>
            </li>
            <li>
                <a href="#" className="nav-link link-dark">
                <i className="bi bi-tools"></i>&nbsp;
                Manage
                </a>
            </li>
            <li>
                <a href="#" className="nav-link link-dark">
                <i className="bi bi-graph-up"></i>&nbsp;
                Users
                </a>
            </li>
        </ul>
        <hr />
        <div className="dropdown">
            <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <Image src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>
  </aside>
    );
}