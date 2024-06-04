import React from 'react'
import featureimg from "../assets/images/featured-img-1.png";
import featuresecondImg from "../assets/images/featured-img-2.jpg";
function OurWork() {
    return (
        <div className="w-full py-20 bg-zinc-700 ">
          <div className="w-full px-20 pt-10 border-b-[1px] border-zinc-700 pb-20">
            <h1 className="text-7xl font-[Poppins] tracking-tight">
              Featured Projects
            </h1>
          </div>
    
          <div className="px-20">
            <div className="cards w-full flex gap-10 mt-5  ">
              <div  className="cardContainer relative w-1/2 h-[70vh]  ">
              
                <div className=" card w-full h-full rounded-xl  overflow-hidden">
                  <img
                    className=" w-full h-full bg-cover"
                    src={featureimg}
                    alt=""
                  />
                  
                </div>
              </div>
              <div className="cardContainer relative w-1/2 h-[70vh]  ">
                <div className=" card w-full h-full rounded-xl overflow-hidden ">
                
                  <img
                    className="w-full h-full bg-cover "
                    src={featuresecondImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default OurWork
