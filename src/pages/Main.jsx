import Carosal_images from '../components/Carosal_images'
import Movie_items from '../components/Movie_items'

export default function Main() {
  return (
    <div className='bg-black w-full h-auto text-white max-w-screen-full'>
        <div className='h-2/3 block mb-5'>
       <div className='w-full h-96'>
       <Carosal_images />
       </div>
       </div>
       <div className='relative h-2/5 w-full box-content'>
        <Movie_items />
       </div>
      
    </div>
  )
}
