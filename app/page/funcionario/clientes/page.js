export default function Page() {
  return (
    <>
      <main>
        <section className="w-full flex items-center justify-between p-4">
          <a
            href='/page/funcionario/'
            className='bg-blue-500 text-white font-medium rounded-lg px-6 py-2'
          >
            voltar
          </a>
          <div>
            <input type='text' placeholder='Buscar Clientes' />
          </div>
        </section>

        <section className="w-full flex flex-col">
          <div className="flex p-4 justify-between items-center">
            <span>N° 1</span>
            <span>Jose Levy Fernandes Lacerda</span>
            <span>(88) 9 9964-6522</span>
            <a href="/page/funcionario/clientes/01102.js" className='bg-blue-500 text-white font-medium rounded-lg px-6 py-2'>Editar</a>
          </div>
          <div className="flex p-4 justify-between items-center">
            <span>N° 2</span>
            <span>Jose Levy Fernandes Lacerda</span>
            <span>(88) 9 9964-6522</span>
            <a href="/" className='bg-blue-500 text-white font-medium rounded-lg px-6 py-2'>Editar</a>
          </div>
          <div className="flex p-4 justify-between items-center">
            <span>N° 3</span>
            <span>Jose Levy Fernandes Lacerda</span>
            <span>(88) 9 9964-6522</span>
            <a href="/" className='bg-blue-500 text-white font-medium rounded-lg px-6 py-2'>Editar</a>
          </div>
          
          
        </section>
      </main>
    </>
  );
}
