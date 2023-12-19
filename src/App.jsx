import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App () {
  const { fact, getFactAndUpdate } = useCatFact()
  const { imageId, getImage } = useCatImage({ fact })

  const handleClick = () => {
    getFactAndUpdate()
  }

  return (
    <main className='min-h-screen bg-[#242424] text-white grid place-content-center'>
      <section className='text-center flex flex-col gap-5 p-4'>
        <h1 className='text-4xl'>App de gatitos</h1>
        <button className='bg-indigo-600/80 hover:bg-indigo-500 transition-colors px-4 py-2 self-center rounded-lg' onClick={handleClick}>Cargar</button>
        {fact && <p className='max-w-md text-lg mx-auto'>{fact}</p>}
        {imageId && <img className='w-[500px] h-[500px] object-contain' src={getImage()} />}
      </section>
    </main>
  )
}

export default App
