import React from "react";
import Image from "next/image";

export default function Chessboard() {
    const squares = () =>{
        const square = [];

        for (let row = 0; row < 3; row++) {
                return <h1>row</h1>
                
            }}
    return (
        <div className="w-full overflow-hidden bg-[#383535]">

            <div className="grid grid-cols-5">
                {
                        [...Array(15)].map((_, index) => (
                            <div className={`${index} h-[119.46px] overflow-visible ${index%2==0? "bg-[#1E1E1E]":"bg-white"} transform transition-transform duration-2000 preserve-3d backface-hidden hover:rotate-y-360`} key={index}>
                                <img src="/chess.svg" className= {`${index==2 ? "opacity-100":"opacity-0"}`} alt="chess image" />
                            </div>
                        ))
                }
           </div>
        </div>
    )
}