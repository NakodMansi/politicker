import React from "react";
import Image from "next/image";

// const content = [
//     "",
//     "simple",
//     <Image src="/chess1.svg" width={40} height={30} className= {`${index==2 ? "opacity-100":"opacity-0"}`} alt="chess image" />,
//     "",
//     <Image src="/chess2.svg" width={40} height={30} className= {`${index==4 ? "opacity-100":"opacity-0"}`} alt="chess image" />,
    
//     "",
//     <Image src="/chess3.svg" width={40} height={30} className= {`${index==6 ? "opacity-100":"opacity-0"}`} alt="chess image" />,
//     "EFFECTIVE",
//     <Image src="/chess4.svg" width={40} height={30} className= {`${index==8 ? "opacity-100":"opacity-0"}`} alt="chess image" />,
//     "",
    
//     "",
//     "STEPS",
//     <Image src="/chess5.svg" width={40} height={30} className= {`${index==12 ? "opacity-100":"opacity-0"}`} alt="chess image" />,
//     "SAFE",                       
// ]
export default function Chessboard() {
    return (
        <div className="w-full overflow-hidden bg-[#383535] flex justify-center">

            <div className="grid grid-cols-5 w-[597px]">
                {
                        [...Array(15)].map((_, index) => (
                            <div className={`${index} flex justify-end items-end w-[119.46px] h-[119.46px] overflow-visible transform transition-transform duration-2000 preserve-3d backface-hidden hover:rotate-y-360 ${index%2==0? "bg-[#1E1E1E]":"bg-white"}`} key={index}>
                                
                            </div>
                        ))
                }
           </div>
        </div>
    )
}