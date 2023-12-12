
import Button from "../components/Button"
 import shoe8 from '../assets/images/shoe8.svg'

const SuperQuality=()=> {
  return (
    <section id="about-us" 
             className="flex justify-between 
                        items-center max-lg:flex-col 
                        gap-10 w-full max-container">

      <div className="flex flex-1 flex-col">
    
           <h2 className=' font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            we provide you
              
             <span className='text-coral-red'>Super</span>
             <span className='text-coral-red'>Quality</span>Shoes

           </h2>
           <p className='mt-4 lg:max-w-lg info-text'>
              Ensuring premium Discover stylish Shebet 
               arrival,quality comfort, and 
               innovation for your active life
               stylish Shebet . stylish Shebet 
               arrival,quality comfort, and 
               innovation for your active life
               arrival,quality comfort, and 
               innovation for your active life
           </p>
           <p className="mt-6 lg:max-w-lg info-text"> 
              our dedication to detail and exllence unsure ur satisfications
           </p>
           <div className="mt-11">
               <Button label='view detail' />   

           </div>
               </div>
               <div className='flex-1 flex justify-center items-center'>
                   <img 
                        src={shoe8}
                        alt='shoe8'
                        width={570}
                        height={522}
                        className='object-contain'/>
               </div>
    </section>
  )
}

export default SuperQuality