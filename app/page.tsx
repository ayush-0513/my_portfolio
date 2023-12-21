import Image from 'next/image';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
        
      </div>
      
    </main>
    
  )
}
