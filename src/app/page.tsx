"use client"
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';

export default function Home() {
  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <>
    <Sidebar/>
    <main className='main-section'>
      <MainSection/>
    </main>
    </> 
  );
}
