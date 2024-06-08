"use client"
import { useEffect } from 'react';
import MainSection from './components/MainSection';

export default function Home() {
  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <>
      <MainSection/>
    </> 
  );
}
