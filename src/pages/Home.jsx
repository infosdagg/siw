import bgImage2 from "../data/bgImage2.jpeg";
import image1 from "../data/image1.jpeg";
import image2 from "../data/image2.jpeg";
import product1 from "../data/product1.jpeg";
import product2 from "../data/product2.jpeg";
import product3 from "../data/product3.jpeg";
import product4 from "../data/product4.jpeg";

import { Navbar } from '../components/common/Navbar'
import { Footer } from '../components/common/Footer'

export const Home = () => {
  return (
    <div className="flex flex-col">
        
        {/* SECTION 1 */}
        
        <section className="bgImage flex flex-col z-0 gap-10 items-center  h-[865px] -mt-7">
          
          <Navbar/>
          
          <div className="flex flex-col items-center mx-auto">
            <div className="text-textWhite mt-20 font-semibold text-[90px] w-[600px]">
              <p>Quality Chip Manufacturer</p>
            </div>
            
            <div className="text-textWhite w-[289px] h-[32px]">
              <p className="text-[24px]">Commited to Excellence</p>
            </div>
          </div>
          
          <div className="mx-auto-z-10">
            <img src={bgImage2} 
                className="rounded-[50%] w-[800px]"/>
          </div>
          
        </section>
          

        {/* SECTION 2 */}
        
        <section className="flex flex-col p-10 z-10 bg-gradient-to-b from-green to-pink">

          <div className="flex mx-auto mt-14 justify-between w-11/12 h-full items-center">
            
            <div className="flex flex-col w-[490px] gap-10 justify-between">
              
              <p className="text-[72px] text-iconColor">
                About Us
              </p>
              
              <p className="text-iconColor text-[16px] leading-7 w-[476px]">
                At PCBDesign.com, we specialize in manufacturing high-quality printed circuit 
                boards and ICs for businesses worldwide. Since our inception in 2000, we have 
                been industry leaders, working with companies of all sizes to produce goods that 
                adhere to the highest standards. We take pride in working together to develop 
                innovative solutions that meet our customers' needs and exceed their expectations.
              </p>

              <img
                src={image2}
                className="rounded-full w-[467px] h-[342px]"
              />
            
            </div>
            
            <div className="w-[490px] h-[802px]">
              
              <img
                src={image1}
                className="h-[520px] w-[490px] mt-14"
              />
            
            </div>
          
          </div>
            
        </section>


        {/* SECTION 3 */}
        <section className="bg-gradient-to-b from-pink to-green pb-24">

          <div className="w-11/12 mx-auto">

            <div className="flex flex-col gap-5 p-7">
              <p className="text-[72px] text-iconColor">
                Our Products
              </p>
              <p className="text-[24px] text-iconColor">
                Best Sellers
              </p>
            </div>

            <div className="flex flex-row items-center justify-between">
              <div className="w-[327px]">

              </div>
              <div className="w-[327px] flex flex-col gap-5">
                <img
                  className="w-[306px] h-[306px] rounded-t-full"
                  src={product1}
                />
                <div className="flex flex-col gap-7 items-center justify-center">
                <p className="text-[32px] text-iconColor">
                  Product
                </p>
                <p className="text-[20px] text-iconColor">
                  Customer Favorite
                </p>
                </div>
              </div>
              <div className="w-[327px] flex flex-col gap-5">
                <img
                  className="w-[306px] h-[306px] rounded-t-full"
                  src={product2}
                />
                <div className="flex flex-col gap-7 items-center justify-center">
                <p className="text-[32px] text-iconColor">
                  Product
                </p>
                <p className="text-[20px] text-iconColor">
                  Newest Addition
                </p>
                </div>
              </div>
            </div>
            
            
            <div className="mt-14 flex flex-row items-center justify-between">
              <div className="w-[327px] flex flex-col gap-5">
                <img
                  className="w-[306px] h-[306px] rounded-t-full"
                  src={product3}
                />
                <div className="flex flex-col gap-7 items-center justify-center">
                <p className="text-[32px] text-iconColor">
                  Product
                </p>
                <p className="text-[20px] text-iconColor">
                  Featured Item
                </p>
                </div>
              </div>
              <div className="w-[327px] flex flex-col gap-5">
                <img
                  className="w-[306px] h-[306px] rounded-t-full"
                  src={product4}
                />
                <div className="flex flex-col gap-7 items-center justify-center">
                <p className="text-[32px] text-iconColor">
                  Product
                </p>
                <p className="text-[20px] text-iconColor">
                  Top Seller
                </p>
                </div>
              </div>
              <div className="w-[327px]">

              </div>
            </div>

          </div>

        </section>
        
        <section className="bg-pink">
          <Footer/>
        </section>
    
    </div>
  )
}
