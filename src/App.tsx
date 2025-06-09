// import { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className='img'>
        <div className='relative left-[128px] flex'>
          <img src="images/logohp.png" alt="imagem logo" className='w-24 p-2' />
        </div>

        <div className='border border-[#740001] responsive-container w-full bg-card rounded-t-[4px] rounded-bl-[4px] rounded-br-[4px]'>
          <header className='text-base bg-primary pt-4.5 pb-4.5 pl-8.5 pr-8.5 p-0'>
            <h1 className='text-sm font-bold'>Teste suas habilidades!!</h1>
          </header>

          <section className='py-6 px-8.5 text-sm'>
            <p className='text-sm'>
              Teste os seus conhecimentos sobre o universo Harry Potter e divirta-se!!!
            </p>
            <p>FORMULÁRIO / BOTÃO</p>
          </section>
        </div>
        <Footer />
      </main>

      {/* ✅ Footer foi movido para fora do main */}
      
    </>
  )
}

export default App
