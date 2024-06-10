"use client"
import { useEffect } from 'react';
import MainSection from './components/MainSection';
import Sidebar from './components/Sidebar';

export default function Home() {
  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <>
      <Sidebar />
      <main className='main-section'>
        
      </main>
      
    </> 
  );
}
