"use client"
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const links = [
    {
        name: 'Dashboard',
        href: '/',
        iconClass: 'bi bi-house-door'
    },
    {
        name: 'Departments',
        href: '/departments',
        iconClass: 'bi bi-suitcase-lg'
    },
    {
        name: 'Employees',
        href: '/employees',
        iconClass: 'bi bi-people'
    },
    {
        name: 'Manage',
        href: '/manage',
        iconClass: 'bi bi-tools'
    },
    {
        name: 'Users',
        href: '/users',
        iconClass: 'bi bi-graph-up'
    },
]

export default function Sidebar(){
    const router = useRouter()
    const logout = async () => {
        const response = await axios.post('/api/auth/logout')
        if(response.status === 200){
            router.push('/login');
        }
    }

    const pathname = usePathname();
    return (
    <aside className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar">
        <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            {/* TODO: App Logo*/}
            <Image alt='logo' src='/teamtrack-logo.png' width={50} height={50}/> &nbsp; 
            <span className="fs-4">TeamTrack</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
            
            {links.map((link)=>{
                return (
                    <li key={link.name} className="nav-item">
                        <a href={link.href} className={`nav-link ${pathname==link.href ? 'active' : 'link-dark'}`} aria-current="page">
                            <i className={link.iconClass}></i>&nbsp;
                            {link.name}
                        </a>
                    </li>
                );
            })}
        </ul>
        <hr />
        <div className="dropdown">
            <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <Image src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" onClick={() =>{logout()}}>Sign out</button></li>
            </ul>
        </div>
  </aside>
    );
}