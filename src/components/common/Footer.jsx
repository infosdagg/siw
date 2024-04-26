import React from 'react'

export const Footer = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col gap-7 p-14 h-[670px] overflow-y-hidden'>
      
      <div className='flex items-center justify-center '>
        
        <p className='text-[40px] text-iconColor font-semibold'>
          PCBDesign
        </p>
      
      </div>
      
      <div className='flex items-center justify-evenly mt-14'>
        
        <p className='text-iconColor text-[14px]'>
          info@mysite.com
        </p>
        
        <p className='text-iconColor text-[14px]'>
          India
        </p>
        
        <p className='text-iconColor text-[14px]'>
          123-456-7890
        </p>
      
      </div>


      <div className='flex items-center justify-center mt-14'>
        
        <div className='  w-[820px] h-[1000px] bg-textWhite rounded-full'>
          
          <div className='mt-24 flex flex-col items-center gap-7'>
            
            <div className='text-iconColor text-[32px]'>
              Stay Informed
            </div>
            
            <form className='flex flex-col gap-5 items-center justify-center'>
              
              <label htmlFor='email' className='text-[16px] text-iconColor'>
                Enter your email here <sup>*</sup>
              </label>
              
              <input
                className='bg-inputColor w-[280px] p-3 rounded-md'
                type='email'
                name='email'
              />
              
              <button className='bg-iconColor text-btnText rounded-full p-[10px] w-[160px] hover:scale-[90%]'>
                Subscribe
              </button>
            
            </form>
          
          </div>

        </div>

      </div>


    {/* Yhaaa SE SHURU */}

      {/* <div>

        <div>
          Our Products
        </div>

        <div className='flex items-center gap-3 justify-evenly'>
          {
            cards.map((card , index) => (
              <div key={index} className='border border-iconColor'>
                <img
                  src={card.image}
                />
                <div>
                  <p>
                    {card.heading}
                  </p>
                  <div className='border-b-[2px]'></div>
                  <p>
                    {card.price}
                  </p>
                </div>
              </div>
            ))
          }
        </div>

        <button>
          Load More
        </button>
      </div> */}

    {/* YHAA PRRR KHATAM */}




    </div>
  )
}
