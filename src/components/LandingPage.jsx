import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full  bg-zinc-900 pt-1">
      <div className="textStructure mt-52 px-20">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
                <div className=" w-fit flex items-center"> 
                {index===1 && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration: 1}} className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] top-[0.2vw] relative bg-red-500"></motion.div>}
              <h1 className=" flex items-center uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-semibold">
                {item}
              </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[2px] border-zinc-800 mt-20 px-20 pb-10 pt-5 flex justify-between items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO ",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5 ">
            <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
                start the project
            </div>
            <div className="w-10 h-10 flex justify-center items-center border-[1px] border-zinc-500  rounded-full">
                    <span className="rotate-[45deg]">
                        <FaArrowUpLong/>
                    </span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
