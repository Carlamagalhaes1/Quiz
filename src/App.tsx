//import { useState } from 'react'
import './App.css'



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <main className='img'>


        <div className='border border-[#740001] responsive-container w-full bg-card rounded-t-[4px]  rounded-bl-[4px] rounded-br-[4px] '>

          <header className='text-base bg-primary pt-4.5 pb-4.5 pl-8.5 pr-8.5 p-0' >
            <h1 className='text-sm font-bold ' >Teste suas habilidaes!</h1>
          </header>
          <section className='py-6 px-8.5 text-sm'>
            <p>
              Teste os seus conhecimentos sobre o universo Harry Potter eudivirta-se!!!
            </p>
            <p>FORMULARIO / BOTÃO</p>

          </section>

        </div>
        <footer>
          <p>
            Orgulhosamente criado por Carla!
          </p>
        </footer>


      </main>




    </>
  )
}

export default App