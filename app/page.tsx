import Image from 'next/image';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills'
import Encryption from '@/components/Encryption';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer />
        
      </div>
      
    </main>
    
  )
}
