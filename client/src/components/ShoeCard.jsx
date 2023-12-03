// import React from 'react'

const ShoeCard = ({imgURL,bigShoeImg,changeBigShoeImage}) => {
    const handleClick=()=>{
        if(bigShoeImg !==imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl 
    ${bigShoeImg ===imgURL ? 'border-coral-red'
    :'border-transparent'} cusror-pointer max-sm:flex-1
    `}
     onClick={handleClick}
    >ShoeCard
      <div className='flex justify-center items-start bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:'>
        <img 
          src={imgURL.thumbnail}
          alt='shoe collection'
          width={127}
          height={103}
          className='object-contain'
          
          />
      </div>
    </div>
  
  
    )
}


export default ShoeCard