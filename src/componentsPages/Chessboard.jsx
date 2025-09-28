"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const cards = [
  { front: "", back: null },
  { front: "simple", back: "One email, many senders, same recipients — just pick your demand and click send." },
  { front: <Image src="/chess1.svg" width={30} height={40} className="md:w-[50px] lg:w-[90px]" alt="chess image" />, back: null },
  { front: "", back: null },
  { front: <Image src="/chess2.svg" width={30} height={30} className="md:w-[50px] lg:w-[90px]" alt="chess image" />, back: null },
  { front: "", back: null },
  { front: <Image src="/chess3.svg" width={30} height={30} className="md:w-[50px] lg:w-[90px]" alt="chess image" />, back: null },
  { front: "EFFECTIVE", back: "Together we reach key parliament members — polite, direct, yet risking their re-election if dismissed." },
  { front: <Image src="/chess4.svg" width={30} height={30} className="md:w-[50px] lg:w-[90px]" alt="chess image" />, back: null },
  { front: "", back: null },
  { front: "", back: null },
  { front: "STEPS", back: "1. Select Template\n2. Prepare Email\n3. Finalize Email\n4. Send" },
  { front: <Image src="/chess5.svg" width={30} height={30} className="md:w-[50px] lg:w-[90px]" alt="chess image" />, back: null },
  { front: "SAFE", back: 'Contacting parliament members’ public emails is your right and representing you is their job. No time for tracking.' },
  { front: "", back: null },
];

export default function Chessboard() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className="w-full overflow-hidden flex justify-center">
      <div
        className="grid w-full justify-center"
        style={{
          gridTemplateColumns:
            windowWidth < 769
              ? "repeat(5, minmax(10vw, 1fr))"
              : windowWidth > 770 && windowWidth < 1024
              ? "repeat(5, minmax(14vw, 1fr))"
              : "repeat(5, minmax(10vw, 1fr))",
        }}
      >
        {cards.map((card, index) => {
          const hasBack = card.back !== null;
          return (
            <div
              key={index}
              className={`relative w-full aspect-square ${hasBack ? "perspective-1000" : ""}`}
              onMouseOver={() => hasBack && handleFlip(index)}
              style={{ cursor: hasBack ? "pointer" : "default" }}
            >
              {hasBack ? (
                <div
                  className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flipped[index] ? "rotate-y-180" : ""
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front */}
                  <div
                    className={`absolute inset-0 flex justify-center items-center bg-white rounded-[2px] text-[#000] text-[clamp(1.2rem,2vw,4rem)] leading-[clamp(1.5rem,2vw,4rem)]`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {card.front}
                  </div>

                  {/* Back */}
                  <div
                    className={`absolute text-[#000] inset-0 flex justify-center items-center bg-white p-3 font-palanquin text-[clamp(0.5rem,1vw,2vw)] leading-[clamp(0.5rem,1vw,2vw)]`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", whiteSpace: "pre-wrap" }}
                  >
                    {card.back}
                  </div>
                </div>
              ) : (
                <div
                  className={`w-full h-full flex items-end rounded-[2px] ${
                    index % 2 === 0 ? "" : "bg-white"
                  } ${index==4 || index==6 || index==12 ? "justify-start":"justify-end"}`}
                >
                  {card.front}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
